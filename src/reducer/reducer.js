import {
  FETCH_WEATHER_REQUSTED,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  TOGGLE_RENDER_BG,
} from "../actions/actionCreators";

const initialState = {
  weather: [],
  loading: true,
  error: null,
  backgroundApp: null,
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUSTED:
      return {
        ...store,
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

    default:
      return store;
  }
};

export default reducer;
