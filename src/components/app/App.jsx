import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import style from "./app.module.css";
import { toggleBackground } from "../../actions/actionCreators";
import ToggleBgBtn from "../controllers/ToggleBgBtn";
import withBgImage from "../../hoc";
import SerchInput from "../controllers/SearchInput";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
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
          <ToggleBgBtn onChangeBg={getImgBackground} loading={loading} />
          <SerchInput />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgImage: state.backgroundApp,
    loading: state.loading,
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
