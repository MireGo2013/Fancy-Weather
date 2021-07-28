import Spinner from "../../spinner";
import style from "./toggleBgBtn.module.css";

const ToggleBgBtn = (props) => {
  const spinner = props.loading ? <Spinner /> : null;
  return (
    <button
      onClick={() => props.onChangeBg()}
      className={`${style.btn} ${style.btn_refresh}`}
    >
      {spinner}
    </button>
  );
};

export default ToggleBgBtn;
