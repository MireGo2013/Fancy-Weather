import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import style from "./app.module.css";
import { toggleBackground, getWeatherData } from "../../actions/actionCreators";
import { withBgImage, withWeatherService } from "../../hoc";
import Controllers from "../controllers";
import WeatherCard from "../WeatherMain";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
    this.props.getWeatherData();
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps.currnetLang !== this.props.currnetLang) {
      this.props.getWeatherData(this.props.city);
    } else if (prevProps.currentUnits !== this.props.currentUnits) {
      this.props.getWeatherData(this.props.city);
    } else if (prevProps.city !== this.props.city) {
      this.props.getWeatherData(this.props.city);
    }
  }

  render() {
    return <App {...this.props} />;
  }
}

const App = (props) => {
  const { bgImage, getImgBackground, loading, currnetLang } = props;
  return (
    <div className={style.container_app + " " + style[bgImage]}>
      <div className={style.gradient_container}>
        <div className={style.content_container}>
          <Controllers onChangeBg={getImgBackground} loading={loading} />
          <WeatherCard currnetLang={currnetLang} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgImage: state.backgroundApp,
    loading: state.loading,
    currnetLang: state.language.currnetLang,
    currentUnits: state.units.currentUnits,
    city: state.searchCity,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { backgroundService, weatherService } = ownProps;
  return {
    getImgBackground: () => toggleBackground(backgroundService)(dispatch),
    getWeatherData: (city) => getWeatherData(weatherService, city)(dispatch),
  };
};

export default compose(
  withWeatherService(),
  withBgImage(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer);
