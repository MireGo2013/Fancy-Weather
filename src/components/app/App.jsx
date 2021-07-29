import style from "./app.module.css";
import Controllers from "../controllers";
import WeatherCard from "../WeatherMain";
import Row from "../Row";
import Map from "../controllers/Map";

const App = (props) => {
  const { bgImage, getImgBackground, loading, currentLang } = props;
    return (
    <div className={style.container_app + " " + style[bgImage]}>
      <div className={style.gradient_container}>
        <div className={style.content_container}>
          <Controllers onChangeBg={getImgBackground} loading={loading} />
          <Row
            left={<WeatherCard currentLang={currentLang} />}
            right={<Map />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
