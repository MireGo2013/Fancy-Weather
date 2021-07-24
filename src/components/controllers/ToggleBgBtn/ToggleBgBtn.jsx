import style from "./toggleBgBtn.module.css";

const ToggleBgBtn = (props) => {
  return (
    <button
      onClick={() => props.onChangeBg()}
      className={`${style.btn} ${style.btn_refresh}`}
    ></button>
  );
};

export default ToggleBgBtn;
