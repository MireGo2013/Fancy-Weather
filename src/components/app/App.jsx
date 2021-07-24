import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import style from "./app.module.css";

import { toggleBackground } from "../../actions/actionCreators";

import ToggleBgBtn from "../controllers/ToggleBgBtn";
import withBgImage from "../../hoc";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getImgBackground();
  }

  render() {
    const { bgImage, getImgBackground } = this.props;
    return <App bgImage={bgImage} onChangeBg={getImgBackground} />;
  }
}

const App = (props) => {
  const { bgImage, onChangeBg } = props;
  console.log(props);
  return (
    <div className={style.container_app + " " + style[bgImage]}>
      <div className={style.gradient_container}>
        <div className={style.content_container}>
          <ToggleBgBtn onChangeBg={onChangeBg} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bgImage: state.backgroundApp,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getBackground } = ownProps;
  return {
    getImgBackground: () => toggleBackground(getBackground())(dispatch),
  };
};

export default compose(
  withBgImage(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer);
