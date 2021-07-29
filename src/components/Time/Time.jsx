import style from "./time.module.css";
import useTimer from "../../utils/hooks";

const Time = () => {
  const [hours, min] = useTimer();
  return (
    <span className={style.time}>
      {hours}:{min}
    </span>
  );
};

export default Time;
