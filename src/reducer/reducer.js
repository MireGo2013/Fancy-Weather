import {
  FETCH_WEATHER_REQUSTED,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  TOGGLE_RENDER_BG,
  GET_LOCATION_USER,
} from "../actions/actionCreators";

const initialState = {
  weather: [],
  loading: true,
  error: null,
  geolocation: null,
  backgroundApp: null,
};

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUSTED:
      return {
        weather: [],
        loading: true,
        error: null,
        backgroundApp: null,
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
    case GET_LOCATION_USER:
      return {
        ...store,
        loading: false,
        geolocation: action.payload,
      };

    default:
      return store;
  }
};

export default reducer;
