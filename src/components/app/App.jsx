import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import style from "./app.module.css";
import { toggleBackground, getWeatherData } from "../../actions/actionCreators";
import { withBgImage, withWeatherService } from "../../hoc";
import Controllers from "../controllers";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
    this.props.getWeatherData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentLangId !== this.props.currentLangId) {
      this.props.getWeatherData();
    }
  }

  render() {
    return <App {...this.props} />;
  }
}

const App = (props) => {
  const { bgImage, getImgBackground, loading } = props;
  return (
    <div className={style.container_app + " " + style[bgImage]}>
      <div className={style.gradient_container}>
        <div className={style.content_container}>
          <Controllers onChangeBg={getImgBackground} loading={loading} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bgImage: state.backgroundApp,
    loading: state.loading,
    weather: state.weather,
    currentLangId: state.language.currnetLang,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { backgroundService, weatherService } = ownProps;
  return {
    getImgBackground: () => toggleBackground(backgroundService)(dispatch),
    getWeatherData: () => getWeatherData(weatherService)(dispatch),
  };
};

export default compose(
  withWeatherService(),
  withBgImage(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer);
