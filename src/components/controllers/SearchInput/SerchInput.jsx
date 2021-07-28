import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./serchInput.module.css";
import { searchCityAc } from "../../../actions/actionCreators";

const SerchInput = (props) => {
  const [valueInput, setValueInput] = useState("");

  return (
    <div className={style.search_container}>
      <input
        className={`${style.search} ${style.search_panel}`}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="Search city"
        maxLength="21"
        value={valueInput}
      />
      <button
        className={`${style.btn} ${style.search} ${style.search_btn}`}
        onClick={() => {
          setValueInput("");
          props.searchCity(valueInput);
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (city) => {
      dispatch(searchCityAc(city));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerchInput);
