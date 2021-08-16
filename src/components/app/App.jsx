import style from "./app.module.css";
import Controllers from "../controllers";
import WeatherCard from "../WeatherMain";
import Row from "../Row";
import Map from "../controllers/Map";

const App = (props) => {
  const {
    bgImage,
    getImgBackground,
    loading,
    currentLang,
    getWeatherData,
    error,
  } = props;
  let incorrectSearch = error ? (
    <div>Incorrect city!!! Please enter correct city name</div>
  ) : null;
  return (
    <div className={style.container_app + " " + style[bgImage]}>
      <div className={style.gradient_container}>
        <div className={style.content_container}>
          <Controllers
            onChangeBg={getImgBackground}
            loading={loading}
            getWeatherData={getWeatherData}
            currentLang={currentLang}
          />
          {incorrectSearch}
          <Row
            left={<WeatherCard currentLang={currentLang} />}
            right={<Map currentLang={currentLang} />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
