import { transformDate } from "../../utils";

const DateCart = ({ date, isMain, lang }) => {
  const el = transformDate(date, isMain, lang);
  return <p>{el}</p>;
};

export default DateCart;
