import ToggleBgBtn from "./ToggleBgBtn";
import ToggleLangBtn from "./ToggleLangBtn";
import SerchInput from "./SearchInput";
import style from "./controllers.module.css";

const Controllers = (props) => {
  const { onChangeBg, loading } = props;

  return (
    <header className={style.header_container}>
      <ToggleBgBtn onChangeBg={onChangeBg} loading={loading} />
      <ToggleLangBtn />
      <SerchInput />
    </header>
  );
};

export default Controllers;
