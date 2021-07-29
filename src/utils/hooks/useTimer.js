import { useState, useEffect } from "react";
import addZeroTimer from "./addZeroTimer";

const useTimer = () => {
  let [timeNow, setTime] = useState(new Date());

  useEffect(() => {
    const IntervId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(IntervId);
    };
  }, [timeNow]);

  let [hours, min] = addZeroTimer(timeNow);

  return [hours, min];
};

export default useTimer;
