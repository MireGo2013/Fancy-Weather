export const toggleLocalLang = (lang) => {
  switch (lang) {
    case "en":
      return {
        searchBtnText: "SEARCH",
        inputPlaceText: "Search city",
        incorrectInputPlaceText: "Enter the correct request",
        feelsLikeText: "FEELS LIKE",
        windText: "WIND",
        humidityText: "HUMIDITY",
        LatitudeText: "Latitude",
        LongitudeText: "Longitude",
      };
    case "ru":
      return {
        searchBtnText: "ПОИСК",
        inputPlaceText: "Поиск города",
        incorrectInputPlaceText: "Некорректный запрос",
        feelsLikeText: "ОЩУЩАЕТСЯ КАК",
        windText: "ВЕТЕР",
        humidityText: "ВЛАЖНОСТЬ",
        LatitudeText: "Широта",
        LongitudeText: "Долгота",
      };
    default:
      return;
  }
};
