__d(
  "RegionDatetimePatterns",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DATE_SHORT: "date_short",
      DATETIME_SHORT_SHORT: "dateTime_short_short",
      TIME_SHORT: "time_short",
      TIME_MEDIUM: "time_medium",
      J: "j",
    });
    f["default"] = a;
  },
  66
);

const RegionDatetimePatterns = Object.freeze({
  DATE_SHORT: "date_short",
  DATETIME_SHORT_SHORT: "dateTime_short_short",
  TIME_SHORT: "time_short",
  TIME_MEDIUM: "time_medium",
  J: "j",
} as const);

export default RegionDatetimePatterns;
