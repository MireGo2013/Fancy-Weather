import React, { useState } from "react";
import style from "./toggleLangBtn.module.css";
import { connect } from "react-redux";
import stroke from "../../../assets/icon/Stroke.png";
import { changeLangAc } from "../../../actions/actionCreators";

const ToggleLangBtn = ({ language, changeLang }) => {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const isOpen = isActiveMenu ? "active" : null;

  const LangItems = language.langList.map(({ id, title }) => (
    <LangItem
      key={id}
      id={id}
      title={title}
      setActiveMenu={setActiveMenu}
      isActiveMenu={isActiveMenu}
      changeLang={changeLang}
    />
  ));
  const title = language.currentLang.toLocaleUpperCase();

  return (
    <div className={`${style.lang_menu_wrapper} ${style[isOpen]}`}>
      <div
        onClick={() => setActiveMenu(!isActiveMenu)}
        className={`${style.drop_down_label} `}
      >
        <span>{title}</span>
        <div>
          <img src={stroke} alt="stroke" />
        </div>
      </div>
      <ul className={style.drop_down_menu}>{LangItems}</ul>
    </div>
  );
};

const LangItem = (props) => {
  const { id, title, isActiveMenu, setActiveMenu, changeLang } = props;
  return (
    <li
      className={style.menu_item}
      onClick={() => {
        setActiveMenu(!isActiveMenu);
        changeLang(id);
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
  return {
    changeLang: (id) => dispatch(changeLangAc(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLangBtn);
