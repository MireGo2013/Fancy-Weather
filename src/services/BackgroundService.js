export default class BackgroundService {
  getBackground = () => {
    const bg = ["bg1", "bg2", "bg3"];
    if (!localStorage.getItem("bg")) {
      localStorage.setItem("bg", bg[0]);
      return bg[0];
    } else {
      const oldBgIdx = bg.indexOf(localStorage.getItem("bg"));
      let newBgArr = bg.slice(oldBgIdx + 1);
      if (newBgArr.length === 0) {
        newBgArr = [...bg];
      }
      localStorage.setItem("bg", newBgArr[0]);
      return newBgArr[0];
    }
  };
}
