import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "./weatherCard.module.css";

const WeatherCard = (props) => {
  if (!props.weather) {
    return null;
  }
  const {
    cityName,
    country,
    weatherToday: { data, description, feelsLike, humidity, temp, wind },
  } = props.weather;

  return (
    <main className={style.main_container}>
      <h1 className={style.title_city}>
        {cityName}, {country}
      </h1>
      <p className={style.date}>
        {data} <span>17:23</span>
      </p>
      <section className={style.weather_today_container}>
        <div className={style.weather_num}>
          <span>{temp}</span>
        </div>
        <div className={style.description_container}>
          <div className={style.sky_container}>IMG</div>
          <div className={style.description}>
            <p>{description}</p>
            <p>Feels like: {feelsLike}°</p>
            <p>Wind: {wind}m/s</p>
            <p>Humidity: {humidity}%</p>
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default compose(connect(mapStateToProps))(WeatherCard);
