import React, { useState } from "react";
import style from "./serchInput.module.css";

const SerchInput = () => {
  const [valueInput, setValueInput] = useState("");

  return (
    <div>
      <input
        className={style.search_panel}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="Search city"
        maxLength="21"
        value={valueInput}
      />
    </div>
  );
};

export default SerchInput;
