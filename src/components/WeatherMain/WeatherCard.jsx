import React, { useContext } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "./weatherCard.module.css";
import DateCard from "../Date/Date";
import Time from "../Time";
import WeatherList from "../WeatherList";
import { ContextLang } from "../../context/langContext";

const WeatherCard = (props) => {
  const toggleLocalLang = useContext(ContextLang);

  if (!props.weather) {
    return null;
  }

  const {
    currentLang,
    weather: {
      cityName,
      country,
      weatherToday: {
        data,
        description,
        feelsLike,
        humidity,
        temp,
        wind,
        icon,
      },
      weatherList,
    },
  } = props;

  const { feelsLikeText, windText, humidityText } =
    toggleLocalLang(currentLang);

  return (
    <>
      <h1 className={style.title_city}>
        {cityName}, {country}
      </h1>
      <div className={style.date}>
        <DateCard date={data} isMain={true} lang={currentLang} />
        <Time />
      </div>
      <main className={style.main_container}>
        <div className={style.temp_wrapper}>
          <span className={style.temp}>{temp}</span>
          <p className={style.degree}>°</p>
        </div>
        <div className={style.description_container}>
          <div className={style.sky_container}>
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="sky"
            />
          </div>
          <div className={style.description}>
            <p>{description}</p>
            <p>
              {feelsLikeText}: {feelsLike}°
            </p>
            <p>
              {windText}: {wind}m/s
            </p>
            <p>
              {humidityText}: {humidity}%
            </p>
          </div>
        </div>
      </main>
      <WeatherList weatherList={weatherList} lang={currentLang} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default compose(connect(mapStateToProps))(WeatherCard);
