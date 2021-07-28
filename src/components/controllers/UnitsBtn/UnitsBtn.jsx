import style from "./unitsbtn.module.css";
import { connect } from "react-redux";
import { changeUnitsAc } from "../../../actions/actionCreators";

const UnitsBtnList = ({ units, changeUnits }) => {
  const { currentUnits, metricList } = units;
  const ItemList = metricList.map((item) => (
    <UnitItem
      key={item.id}
      id={item.id}
      title={item.title}
      changeUnits={changeUnits}
      currentUnits={currentUnits}
    />
  ));
  return (
    <div className={style.units_container}>
      <ul className={style.list_wrapper}>{ItemList}</ul>
    </div>
  );
};

const UnitItem = ({ title, id, changeUnits, currentUnits }) => {
  const isActive = currentUnits === id ? "active" : "";

  return (
    <li
      className={`${style.item_units} ${style[isActive]}`}
      onClick={() => {
        changeUnits(id);
      }}
    >
      {title}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    units: state.units,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUnits: (id) => dispatch(changeUnitsAc(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsBtnList);
