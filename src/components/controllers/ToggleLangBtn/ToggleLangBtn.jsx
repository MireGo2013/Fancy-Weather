import React, { useState } from "react";
import style from "./toggleLangBtn.module.css";
import { connect } from "react-redux";
import stroke from "../../../assets/icon/Stroke.png";

const ToggleLangBtn = ({ language }) => {
  const [isActive, setActive] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const isOpen = isActive ? "active" : null;

  const LangItems = language.map(({ id, title }) => (
    <LangItem
      key={id}
      title={title}
      setActive={setActive}
      setCurrentLang={setCurrentLang}
      isActive={isActive}
    />
  ));

  return (
    <div className={`${style.lang_menu_wrapper} ${style[isOpen]}`}>
      <div
        onClick={() => setActive(!isActive)}
        className={`${style.drop_down_label} `}
      >
        <span>{currentLang}</span>
        <div>
          <img src={stroke} alt="stroke" />
        </div>
      </div>
      <ul className={style.drop_down_menu}>{LangItems}</ul>
    </div>
  );
};

const LangItem = (props) => {
  const { title, setActive, setCurrentLang, isActive } = props;
  return (
    <li
      className={style.menu_item}
      onClick={() => {
        setActive(!isActive);
        setCurrentLang(title);
      }}
    >
      {title}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLangBtn);
