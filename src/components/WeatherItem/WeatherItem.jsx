import style from "./weatherItem.module.css";
import DateCard from "../Date/Date";

const WeatherItem = ({ temp, icon, data, lang }) => {
  return (
    <div className={style.item_contaner}>
      <DateCard date={data} isMain={false} lang={lang} />
      <div className={style.weather_data_wrapper}>
        <div className={style.temp}>{temp}°</div>
        <div className={style.sky_container}>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="sky" />
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
