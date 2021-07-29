const addZeroTimer = (timeNow) => {
  let hours =
    timeNow.getHours() < 10 ? "0" + timeNow.getHours() : timeNow.getHours();
  let min =
    timeNow.getMinutes() < 10
      ? "0" + timeNow.getMinutes()
      : timeNow.getMinutes();

  return [hours, min];
};

export default addZeroTimer;
