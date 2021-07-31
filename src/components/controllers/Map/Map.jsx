import React, { useContext } from "react";
import style from "./map.module.css";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import { transformCoord } from "../../../utils";
import { ContextLang } from "../../../context/langContext";

const Map = ({ coord, currentLang }) => {
  const toggleLocalLang = useContext(ContextLang);
  const { LatitudeText, LongitudeText } = toggleLocalLang(currentLang);
  if (!coord) return null;
  const defaultProps = {
    center: {
      lat: coord.lat,
      lng: coord.lon,
    },
    zoom: 11,
  };

  const [lat, lon] = transformCoord(coord.lat, coord.lon);

  return (
    <div className={style.map_container}>
      <div className={style.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDCcuXojv5SJwo3FVJ0SveOkxSvjcKy6-M" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
      <div className={style.cord_wrapper}>
        <p>
          {LatitudeText}: {lat}'
        </p>
        <p>
          {LongitudeText}: {lon}'
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coord: state.weather?.coord,
  };
};

export default connect(mapStateToProps)(Map);
