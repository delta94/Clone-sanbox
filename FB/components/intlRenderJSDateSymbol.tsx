__d(
  "intlRenderJSDateSymbol",
  ["DateStrings", "padNumber", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f, g) {
      g === void 0 && (g = 0);
      e = e.skipSuffixLocalization === !0;
      g = g;
      var h = "";
      switch (b) {
        case "\\":
          g++;
          if (f == null)
            throw c("unrecoverableViolation")(
              "Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.",
              "internationalization"
            );
          h = f.charAt(g);
          break;
        case "d":
          h = c("padNumber")(a.dateDay, 2);
          break;
        case "j":
          h = a.dateDay;
          break;
        case "S":
          h = d("DateStrings").getOrdinalSuffix(a.dateDay);
          break;
        case "D":
          h = d("DateStrings").getWeekdayNameShort(a.dateDayOfWeek);
          break;
        case "l":
          h = d("DateStrings").getWeekdayName(a.dateDayOfWeek);
          break;
        case "F":
        case "f":
          h = d("DateStrings").getMonthName(a.dateMonth + 1);
          break;
        case "M":
          h = d("DateStrings").getMonthNameShort(a.dateMonth + 1);
          break;
        case "m":
          h = c("padNumber")(a.dateMonth + 1, 2);
          break;
        case "n":
          h = a.dateMonth + 1;
          break;
        case "Y":
          h = a.dateYear;
          break;
        case "y":
          h = ("" + a.dateYear).slice(2);
          break;
        case "a":
          e
            ? (h = a.dateHours < 12 ? "am" : "pm")
            : (h = d("DateStrings").get12HourClockSuffix(a.dateHours));
          break;
        case "A":
          e
            ? (h = a.dateHours < 12 ? "AM" : "PM")
            : (h = d("DateStrings").getUppercase12HourClockSuffix(a.dateHours));
          break;
        case "g":
          a.dateHours === 0 || a.dateHours === 12
            ? (h = "12")
            : (h = a.dateHours % 12);
          break;
        case "G":
          h = a.dateHours;
          break;
        case "h":
          a.dateHours === 0 || a.dateHours === 12
            ? (h = "12")
            : (h = c("padNumber")(a.dateHours % 12, 2));
          break;
        case "H":
          h = c("padNumber")(a.dateHours, 2);
          break;
        case "i":
          h = c("padNumber")(a.dateMinutes, 2);
          break;
        case "s":
          h = c("padNumber")(a.dateSeconds, 2);
          break;
        case "X":
          h = c("padNumber")(a.dateMilliseconds, 3);
          break;
        default:
          h = b;
      }
      return { idx: g, rendered: String(h) };
    }
    g["default"] = a;
  },
  98
);

import DateStrings from "DateStrings";
import padNumber from "padNumber";
import unrecoverableViolation from "unrecoverableViolation";

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

interface FormatOptions {
  skipSuffixLocalization?: boolean;
  skipPatternLocalization?: boolean;
  utc?: boolean;
  formatInternal?: boolean;
  throwCLDRError?: boolean;
}

interface RenderedSymbol {
  idx: number;
  rendered: string;
}

function intlRenderJSDateSymbol(
  numerics: DateNumerics,
  symbol: string,
  options: FormatOptions,
  localizedJSFormat?: string,
  idx: number = 0
): RenderedSymbol {
  const skipSuffixLocalization = options.skipSuffixLocalization === true;
  let renderedValue = "";

  switch (symbol) {
    case "\\":
      idx++;
      if (localizedJSFormat == null) {
        throw unrecoverableViolation(
          "Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.",
          "internationalization"
        );
      }
      renderedValue = localizedJSFormat.charAt(idx);
      break;
    case "d":
      renderedValue = padNumber(numerics.dateDay, 2);
      break;
    case "j":
      renderedValue = numerics.dateDay.toString();
      break;
    case "S":
      renderedValue = DateStrings.getOrdinalSuffix(numerics.dateDay);
      break;
    case "D":
      renderedValue = DateStrings.getWeekdayNameShort(numerics.dateDayOfWeek);
      break;
    case "l":
      renderedValue = DateStrings.getWeekdayName(numerics.dateDayOfWeek);
      break;
    case "F":
    case "f":
      renderedValue = DateStrings.getMonthName(numerics.dateMonth + 1);
      break;
    case "M":
      renderedValue = DateStrings.getMonthNameShort(numerics.dateMonth + 1);
      break;
    case "m":
      renderedValue = padNumber(numerics.dateMonth + 1, 2);
      break;
    case "n":
      renderedValue = (numerics.dateMonth + 1).toString();
      break;
    case "Y":
      renderedValue = numerics.dateYear.toString();
      break;
    case "y":
      renderedValue = numerics.dateYear.toString().slice(2);
      break;
    case "a":
      renderedValue = skipSuffixLocalization
        ? numerics.dateHours < 12
          ? "am"
          : "pm"
        : DateStrings.get12HourClockSuffix(numerics.dateHours);
      break;
    case "A":
      renderedValue = skipSuffixLocalization
        ? numerics.dateHours < 12
          ? "AM"
          : "PM"
        : DateStrings.getUppercase12HourClockSuffix(numerics.dateHours);
      break;
    case "g":
      renderedValue =
        numerics.dateHours === 0 || numerics.dateHours === 12
          ? "12"
          : (numerics.dateHours % 12).toString();
      break;
    case "G":
      renderedValue = numerics.dateHours.toString();
      break;
    case "h":
      renderedValue =
        numerics.dateHours === 0 || numerics.dateHours === 12
          ? "12"
          : padNumber(numerics.dateHours % 12, 2);
      break;
    case "H":
      renderedValue = padNumber(numerics.dateHours, 2);
      break;
    case "i":
      renderedValue = padNumber(numerics.dateMinutes, 2);
      break;
    case "s":
      renderedValue = padNumber(numerics.dateSeconds, 2);
      break;
    case "X":
      renderedValue = padNumber(numerics.dateMilliseconds, 3);
      break;
    default:
      renderedValue = symbol;
  }
  return { idx, rendered: String(renderedValue) };
}

export default intlRenderJSDateSymbol;
