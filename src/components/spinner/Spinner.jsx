import spinner from "../../assets/icon/Vector.png";
import style from "./sinner.module.css";

const Spinner = (props) => {
  const animate = props.isLoading ? style.loading : null;
  return <img className={animate} src={spinner} alt="spinner" />;
};
export default Spinner;
