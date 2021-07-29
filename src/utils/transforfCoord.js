const transformCoord = (coordLat, coordLon) => {
  let lat = coordLat.toFixed(2).toString().replace(/\./gm, "°");
  let lon = coordLon.toFixed(2).toString().replace(/\./gm, "°");
  return [lat, lon];
};

export default transformCoord;
