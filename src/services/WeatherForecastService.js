export default class WeatherForecastService {
  _API_BASE = "https://api.openweathermap.org/data/2.5/forecast?";
  _API_KEY = "f5744fa95be65ff2128fcd1cbe022f1d";

  fetchWeatherDataFromAPI = async (
    city = "",
    lang = "en",
    units = "metric"
  ) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          resolve(this.resolveGeolocation(pos, city, lang, units));
        },
        async (error) => {
          resolve(this.rejectGeolocation(error, lang, units));
        }
      );
    });
  };

  resolveGeolocation = async (pos, city, lang, units) => {
    const result = await fetch(
      `${this._API_BASE}q=${city}&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&lang=${lang}&units=${units}&appid=${this._API_KEY}`
    );
    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this._API_BASE}, received ${result.status}`
      );
    }
    return await result.json();
  };

  rejectGeolocation = async (error, lang, units) => {
    alert("You have disabled geodata. Look weather for my city");
    const result = await fetch(
      `${this._API_BASE}q=Vitebsk&lang=${lang}&units=${units}&appid=${this._API_KEY}`
    );
    if (!result.ok) {
      throw new Error(
        `Could not fetch ${this._API_BASE}, received ${result.status}, ${error}`
      );
    }
    return await result.json();
  };

  getFullDataWeather = async (city) => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      localStorage.setItem("units", "metric");
      const res = await this.fetchWeatherDataFromAPI();
      return this._transformWeatherData(res);
    }
    const cuurentUnits = localStorage.getItem("units");
    const currentLang = localStorage.getItem("lang");
    const res = await this.fetchWeatherDataFromAPI(
      city,
      currentLang,
      cuurentUnits
    );
    const myResponse = this._transformWeatherData(res);
    return myResponse;
  };

  _transformWeatherData = (data) => {
    const listWeather = data.list.filter((reading) => {
      return reading.dt_txt.includes("18:00:00");
    });
    const today = listWeather[0];
    return {
      cityName: data.city.name,
      country: data.city.country,
      coord: {
        lat: data.city.coord.lat,
        lon: data.city.coord.lon,
      },
      weatherToday: this.getTargetCurrentData(today),
      weatherList: this.getTargetNextDayData(listWeather),
    };
  };

  getTargetNextDayData = (listWeather) => {
    const weatherList = [];
    for (let day = 1; day < 4; day++) {
      weatherList.push({
        data: listWeather[day].dt_txt,
        temp: Math.round(listWeather[day].main.temp),
        icon: listWeather[day].weather[0].icon,
      });
    }
    return weatherList;
  };

  getTargetCurrentData = (listWeather) => {
    return {
      data: listWeather.dt_txt,
      temp: Math.round(listWeather.main.temp),
      description: listWeather.weather[0].description,
      feelsLike: Math.round(listWeather.main.feels_like),
      wind: listWeather.wind.speed.toFixed(1),
      humidity: listWeather.main.humidity,
      icon: listWeather.weather[0].icon,
    };
  };
}
