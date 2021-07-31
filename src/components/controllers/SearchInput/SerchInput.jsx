import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import style from "./serchInput.module.css";
import { searchCityAc } from "../../../actions/actionCreators";
import { ContextLang } from "../../../context/langContext";

const SerchInput = (props) => {
  const toggleLocalLang = useContext(ContextLang);
  const { searchBtnText, inputPlaceText, incorrectInputPlaceText } =
    toggleLocalLang(props.currentLang);
  const [valueInput, setValueInput] = useState("");
  const [placeholderValue, setplaceValue] = useState(inputPlaceText);

  useEffect(() => {
    if (props.error) {
      setplaceValue(incorrectInputPlaceText);
    } else {
      setplaceValue(inputPlaceText);
    }
  }, [props.error, incorrectInputPlaceText, inputPlaceText]);

  const onEnterSearch = (e) => {
    if (e.code === "Enter") {
      props.searchCity(valueInput);
      e.target.blur();
      setValueInput("");
    }
  };

  const onClickSearch = () => {
    props.searchCity(valueInput);
    setValueInput("");
  };

  return (
    <div className={style.search_container}>
      <input
        className={`${style.search} ${style.search_panel}`}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder={placeholderValue}
        maxLength="21"
        onKeyPress={onEnterSearch}
        value={valueInput}
      />
      <button
        className={`${style.btn} ${style.search} ${style.search_btn}`}
        onClick={() => onClickSearch()}
      >
        {searchBtnText}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (city) => {
      dispatch(searchCityAc(city));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerchInput);
