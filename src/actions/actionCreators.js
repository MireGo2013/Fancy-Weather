export const FETCH_WEATHER_REQUSTED = "FETCH_WEATHER_REQUSTED";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const TOGGLE_RENDER_BG = "TOGGLE_RENDER_BG";

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

const toggleBackground = (bg) => (dispatch) => {
  dispatch(weatherRequstedAc());
  dispatch(toggleBackGroundAc(bg));
};

export { toggleBackground };
