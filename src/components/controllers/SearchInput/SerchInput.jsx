import React, { useState } from "react";
import style from "./serchInput.module.css";

const SerchInput = () => {
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
      <button className={`${style.btn} ${style.search} ${style.search_btn} `}>
        SEARCH
      </button>
    </div>
  );
};

export default SerchInput;
