export default class WeatherForecastService {
  _API_BASE = "https://api.openweathermap.org/data/2.5/forecast?";
  _API_KEY = "f5744fa95be65ff2128fcd1cbe022f1d";

  fetchWeatherDataFromAPI = async (
    city = "",
    lang = "en",
    units = "metric"
  ) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const result = await fetch(
          `${this._API_BASE}q=${city}&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&lang=${lang}&units=${units}&appid=${this._API_KEY}`
        );
        if (!result.ok) {
          reject(
            new Error(
              `Could not fetch ${this._API_BASE}, received ${result.status}`
            )
          );
        }
        resolve(result.json());
      });
    });
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
    const myResponse = this._transformWeatherData(res, currentLang);
    return myResponse;
  };

  _transformWeatherData = (data) => {
    const listWeather = data.list.filter((reading) => {
      return reading.dt_txt.includes("18:00:00");
    });
    const today = listWeather[0];
    const nextDay1 = listWeather[1];
    const nextDay2 = listWeather[2];
    const nextDay3 = listWeather[3];

    return {
      cityName: data.city.name,
      country: data.city.country,
      coord: {
        lat: data.city.coord.lat,
        lon: data.city.coord.lon,
      },
      weatherToday: {
        data: today.dt_txt,
        temp: Math.round(today.main.temp),
        description: today.weather[0].description,
        feelsLike: Math.round(today.main.feels_like),
        wind: today.wind.speed.toFixed(1),
        humidity: today.main.humidity,
        icon: today.weather[0].icon,
      },
      weatherList: [
        {
          data: nextDay1.dt_txt,
          temp: Math.round(nextDay1.main.temp),
          icon: nextDay1.weather[0].icon,
        },
        {
          data: nextDay2.dt_txt,
          temp: Math.round(nextDay2.main.temp),
          icon: nextDay2.weather[0].icon,
        },
        {
          data: nextDay3.dt_txt,
          temp: Math.round(nextDay3.main.temp),
          icon: nextDay3.weather[0].icon,
        },
      ],
    };
  };
}

// "https://api.openweathermap.org/data/2.5/forecast?lat=55.1582&lon=30.2132&lang=ru&appid=f5744fa95be65ff2128fcd1cbe022f1d"
// new Date('2021-07-26 18:00:00').toLocaleString('ru',{day: 'numeric', month: 'long', weekday: 'short'})
// "пн, 26 июля"
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//http://openweathermap.org/img/w/10d.png";

// data: new Date(today.dt_txt).toLocaleString(lang, {
// 	day: "numeric",
// 	month: "long",
// 	weekday: "short",
//   }),
