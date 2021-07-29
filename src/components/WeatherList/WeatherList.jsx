import style from "./weatherList.module.css";
import WeatherItem from "../WeatherItem";

const WeatherList = ({ weatherList, lang }) => {
  const elements = weatherList.map(({ data, icon, temp }) => (
    <WeatherItem key={data} data={data} icon={icon} temp={temp} lang={lang} />
  ));
  return <div className={style.weather_list_container}>{elements}</div>;
};

export default WeatherList;
