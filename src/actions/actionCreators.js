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

const toggleBackground = (backgroundService) => (dispatch) => {
  dispatch(toggleBackGroundAc(backgroundService.getBackground()));
};

const getWeatherData = (weatherService) => (dispatch) => {
  dispatch(weatherRequstedAc());
  weatherService
    .getFullDataWeather()
    .then((data) => dispatch(weatherLoadedAc(data)))
    .catch((error) => dispatch(weatherErrorAc(error)));
};

export { toggleBackground, getWeatherData };

//===========
// if get async requst BG Images
//===========
// const toggleBackground = (backgroundService) => () => (dispatch) => {
// 	dispatch(weatherRequstedAc());
// 	backgroundService
// 	  .getBackground()
// 	  .then((bg) => dispatch(toggleBackGroundAc(bg)))
// 	  .catch((error) => dispatch(weatherErrorAc(error)));
//   };
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	const { backgroundService } = ownProps;
// 	return bindActionCreators(
// 	  {
// 		getImgBackground: toggleBackground(backgroundService),
// 	  },
// 	  dispatch
// 	);
//   };
