import {
  FETCH_WEATHER_REQUSTED,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  TOGGLE_RENDER_BG,
  CHANGE_LANG,
} from "../actions/actionCreators";

const initialState = {
  weather: null,
  loading: true,
  error: null,
  backgroundApp: null,
  language: {
    currnetLang: "",
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
        language: { ...store.language, currnetLang: action.payload },
      };
    default:
      return store;
  }
};

export default reducer;
