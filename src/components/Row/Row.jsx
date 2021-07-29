import style from "./row.module.css";

const Row = ({ left, right }) => {
  return (
    <div className={style.row_container}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default Row;

// <Row left={Component. Main } right={Component Map}/>
