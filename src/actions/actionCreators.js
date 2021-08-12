export const FETCH_WEATHER_REQUSTED = "FETCH_WEATHER_REQUSTED";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const TOGGLE_RENDER_BG = "TOGGLE_RENDER_BG";
export const CHANGE_LANG = "CHANGE_LANG";
export const CHANGE_UNITS = "CHANGE_UNITS";
export const SEARCH_CITY = "SEARCH_CITY";

const weatherRequstedAc = () => {
  return { type: FETCH_WEATHER_REQUSTED };
};

const weatherLoadedAc = (dataWeather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: dataWeather,
  };
};

const weatherErrorAc = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

const toggleBackGroundAc = (bg) => {
  return {
    type: TOGGLE_RENDER_BG,
    payload: bg,
  };
};

const toggleBackground = (backgroundService) => (dispatch) => {
  dispatch(toggleBackGroundAc(backgroundService.getBackground()));
};

const getWeatherData = (weatherService, city) => (dispatch) => {
  dispatch(weatherRequstedAc());
  weatherService
    .getFullDataWeather(city)
    .then((data) => dispatch(weatherLoadedAc(data)))
    .catch((error) => {
      console.log(error);
      alert(
        `Incorrect city!!! Please enter correct city name\n Error: ${error.message}`
      );
      dispatch(weatherErrorAc(error));
    });
};

const changeLangAc = (id) => {
  localStorage.setItem("lang", id);
  return {
    type: CHANGE_LANG,
    payload: id,
  };
};

const changeUnitsAc = (id) => {
  localStorage.setItem("units", id);
  return {
    type: CHANGE_UNITS,
    payload: id,
  };
};

const searchCityAc = (city) => {
  return {
    type: SEARCH_CITY,
    payload: city,
  };
};

export {
  toggleBackground,
  getWeatherData,
  changeLangAc,
  searchCityAc,
  changeUnitsAc,
};
