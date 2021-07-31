import ToggleBgBtn from "./ToggleBgBtn";
import ToggleLangBtn from "./ToggleLangBtn";
import SerchInput from "./SearchInput";
import UnitsBtnList from "./UnitsBtn";
import style from "./controllers.module.css";

const Controllers = (props) => {
  const { onChangeBg, loading, getWeatherData, currentLang } = props;
  return (
    <header className={style.header_container}>
      <ToggleBgBtn onChangeBg={onChangeBg} loading={loading} />
      <ToggleLangBtn />
      <UnitsBtnList />
      <SerchInput getWeatherData={getWeatherData} currentLang={currentLang} />
    </header>
  );
};

export default Controllers;
