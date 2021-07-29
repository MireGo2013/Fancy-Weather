const transformDate = (date, isMain, lang) => {
  const el = isMain
    ? new Date(date).toLocaleString(lang, {
        day: "numeric",
        month: "long",
        weekday: "short",
      })
    : new Date(date)
        .toLocaleString(lang, {
          weekday: "long",
        })
        .toUpperCase();
  return el;
};

export default transformDate;
