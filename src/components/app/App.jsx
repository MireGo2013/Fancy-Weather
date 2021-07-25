import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import style from "./app.module.css";
import {
  toggleBackground,
  getUsersLocationAc,
  getUsersLocation,
} from "../../actions/actionCreators";
import { WeatherForecastService } from "../../services";
import withBgImage from "../../hoc";
import Controllers from "../controllers";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
  }

  render() {
    return <App {...this.props} />;
  }
}

const App = (props) => {
  console.log(props);
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
  return {
    bgImage: state.backgroundApp,
    loading: state.loading,
    geolocation: state.geolocation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { backgroundService } = ownProps;
  return {
    getImgBackground: () => toggleBackground(backgroundService)(dispatch),
  };
};

export default compose(
  withBgImage(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer);
