import ToggleBgBtn from "./ToggleBgBtn";
import SerchInput from "./SearchInput";
import style from "./controllers.module.css";

const Controllers = (props) => {
  const { onChangeBg, loading } = props;

  return (
    <header className={style.header_container}>
      <ToggleBgBtn onChangeBg={onChangeBg} loading={loading} />
      <SerchInput />
    </header>
  );
};

export default Controllers;
