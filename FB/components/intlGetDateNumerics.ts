__d(
  "intlGetDateNumerics",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      b = b.utc === !0;
      b
        ? (b = {
            dateDay: a.getUTCDate(),
            dateDayOfWeek: a.getUTCDay(),
            dateMonth: a.getUTCMonth(),
            dateYear: a.getUTCFullYear(),
            dateHours: a.getUTCHours(),
            dateMinutes: a.getUTCMinutes(),
            dateSeconds: a.getUTCSeconds(),
            dateMilliseconds: a.getUTCMilliseconds(),
          })
        : (b = {
            dateDay: a.getDate(),
            dateDayOfWeek: a.getDay(),
            dateMonth: a.getMonth(),
            dateYear: a.getFullYear(),
            dateHours: a.getHours(),
            dateMinutes: a.getMinutes(),
            dateSeconds: a.getSeconds(),
            dateMilliseconds: a.getMilliseconds(),
          });
      return b;
    }
    f["default"] = a;
  },
  66
);

interface GetDateNumericsOptions {
  utc?: boolean;
}

interface DateNumerics {
  dateDay: number;
  dateDayOfWeek: number;
  dateMonth: number;
  dateYear: number;
  dateHours: number;
  dateMinutes: number;
  dateSeconds: number;
  dateMilliseconds: number;
}

function intlGetDateNumerics(
  date: Date,
  options: GetDateNumericsOptions
): DateNumerics {
  const useUTC = options.utc === true;

  if (useUTC) {
    return {
      dateDay: date.getUTCDate(),
      dateDayOfWeek: date.getUTCDay(),
      dateMonth: date.getUTCMonth(),
      dateYear: date.getUTCFullYear(),
      dateHours: date.getUTCHours(),
      dateMinutes: date.getUTCMinutes(),
      dateSeconds: date.getUTCSeconds(),
      dateMilliseconds: date.getUTCMilliseconds(),
    };
  } else {
    return {
      dateDay: date.getDate(),
      dateDayOfWeek: date.getDay(),
      dateMonth: date.getMonth(),
      dateYear: date.getFullYear(),
      dateHours: date.getHours(),
      dateMinutes: date.getMinutes(),
      dateSeconds: date.getSeconds(),
      dateMilliseconds: date.getMilliseconds(),
    };
  }
}

export default intlGetDateNumerics;
