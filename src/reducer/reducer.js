import {
  FETCH_WEATHER_REQUSTED,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  TOGGLE_RENDER_BG,
  CHANGE_LANG,
  CHANGE_UNITS,
  SEARCH_CITY,
} from "../actions/actionCreators";

const initialState = {
  weather: null,
  loading: true,
  error: null,
  backgroundApp: null,
  searchCity: "",
  units: {
    currentUnits: localStorage.getItem("units")
      ? localStorage.getItem("units")
      : "metric",
    metricList: [
      { id: "imperial", title: "°F" },
      { id: "metric", title: "°С" },
    ],
  },
  language: {
    currentLang: localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en",
    langList: [
      { id: "en", title: "EN" },
      { id: "ru", title: "RU" },
    ],
  },
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUSTED:
      return {
        ...store,
        weather: null,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...store,
        weather: action.payload,
        loading: false,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    case TOGGLE_RENDER_BG:
      return {
        ...store,
        loading: false,
        backgroundApp: action.payload,
      };
    case CHANGE_LANG:
      return {
        ...store,
        language: { ...store.language, currentLang: action.payload },
      };
    case CHANGE_UNITS:
      return {
        ...store,
        units: { ...store.units, currentUnits: action.payload },
      };
    case SEARCH_CITY:
      return {
        ...store,
        searchCity: action.payload,
      };
    default:
      return store;
  }
};

export default reducer;
