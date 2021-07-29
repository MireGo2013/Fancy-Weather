import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getWeatherData, toggleBackground } from "../actions/actionCreators";
import App from "../components/app/App";
import { withBgImage, withWeatherService } from "../hoc";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
    this.props.getWeatherData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentLang !== this.props.currentLang) {
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

const mapStateToProps = (state) => {
  return {
    bgImage: state.backgroundApp,
    loading: state.loading,
    currentLang: state.language.currentLang,
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
