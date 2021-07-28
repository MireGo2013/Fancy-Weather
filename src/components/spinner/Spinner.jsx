import spinner from "../../assets/icon/Vector.png";
import style from "./sinner.module.css";

const Spinner = (props) => {
  return <img className={style.loading} src={spinner} alt="spinner" />;
};
export default Spinner;
