__d(
  "formatDate",
  [
    "CLDRDateFormatConfig",
    "DateFormatConfig",
    "FBLogger",
    "IsInternSite",
    "getCLDRLocalizedFormat",
    "intlGetDateNumerics",
    "intlRenderCLDRDate",
    "intlRenderJSDateSymbol",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
      today: null,
      yesterday: null,
      thisWeek: null,
      thisMonth: null,
      thisYear: null,
      withinDay: null,
      withinWeek: null,
      withinMonth: null,
      withinYear: null,
      older: null,
      future: null,
      allOtherTimes: null,
    });
    function h(a, b, d) {
      a = a;
      d = d || {
        skipSuffixLocalization: !1,
        skipPatternLocalization: !1,
        utc: !1,
        formatInternal: !1,
        throwCLDRError: !1,
      };
      if (b == null || b === "" || a == null || !(a || a === 0)) return "";
      typeof a === "string" &&
        (isNaN(Number(a)) &&
          c("FBLogger")("i18n-formatDate")
            .event("date_string_must_be_timestamp")
            .blameToPreviousFile()
            .mustfix(
              "The date passed to formatDate is a string, but not a timestamp. formatDate expects strings to be a string representation of a Unix " +
                ('timestamp but was passed "' + a + '"')
            ),
        (a = parseInt(a, 10)));
      typeof a === "number" && (a = new Date(a * 1e3));
      if (!(a instanceof Date))
        throw c("unrecoverableViolation")(
          "The date passed to formatDate must be either a unix timestamp or JavaScript date object.",
          "internationalization"
        );
      if (isNaN(a.getTime()))
        throw c("unrecoverableViolation")(
          "Invalid date passed to formatDate",
          "internationalization"
        );
      a.getTime() >= 1e15 &&
        c("FBLogger")("i18n-formatDate")
          .event("date_too_far_in_future")
          .blameToPreviousFile()
          .info(
            "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?"
          );
      b = k(a, b);
      a = c("intlGetDateNumerics")(a, d);
      return i(b, a, d);
    }
    h.DEFAULT_FORMAT = "M j, Y g:i A";
    h.periodNames = Object.freeze(Object.keys(a));
    function i(a, b, d) {
      var e = a,
        f = !!d.skipPatternLocalization,
        g = d.formatInternal === !0;
      if (!f && (g || !c("IsInternSite").is_intern_site))
        if (a in c("CLDRDateFormatConfig").supportedPHPFormatsKeys)
          try {
            f = c("CLDRDateFormatConfig").supportedPHPFormatsKeys[a];
            g = c("getCLDRLocalizedFormat")(f);
            return c("intlRenderCLDRDate")(g, d, b);
          } catch (a) {
            c("FBLogger")("i18n-formatDate")
              .event("CLDR_date_format_render_error")
              .blameToPreviousFile()
              .catching(a)
              .mustfix("CLDR date format render error");
            if (d.throwCLDRError === !0) throw a;
          }
        else if (c("DateFormatConfig").formats[a])
          e = c("DateFormatConfig").formats[a];
        else if (!c("IsInternSite").is_intern_site)
          if (a.length !== 1)
            throw c("unrecoverableViolation")(
              "Trying to localize an unsupported date format: `" + a + "`",
              "internationalization"
            );
      return j(e, d, b);
    }
    function j(a, b, d) {
      var e = [];
      for (var f = 0; f < a.length; f++) {
        var g = a.charAt(f);
        g = c("intlRenderJSDateSymbol")(d, g, b, a, f);
        e.push(g.rendered);
        f = g.idx;
      }
      return e.join("");
    }
    function k(a, b) {
      var d = h.DEFAULT_FORMAT;
      if (typeof b === "string") return b;
      else if (typeof b === "object") {
        var e = a.getTime();
        for (
          var f = l(),
            g = Array.isArray(f),
            i = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var j;
          if (g) {
            if (i >= f.length) break;
            j = f[i++];
          } else {
            i = f.next();
            if (i.done) break;
            j = i.value;
          }
          j = j;
          var k = b[j.name];
          if (k != null && j.start <= e && e < j.end) return k;
        }
        c("FBLogger")("i18n-formatDate")
          .event("matching_period_format_not_found")
          .blameToPreviousFile()
          .warn(
            'Matching period not found for date "%s", using default format "%s". Current timestamp: "%s"',
            e,
            d,
            Date.now()
          );
        return d;
      } else {
        c("FBLogger")("i18n-formatDate")
          .event("invalid_format_argument")
          .blameToPreviousFile()
          .warn(
            'Called with invalid format "%s" (type: %s) for date "%s", using default: %s',
            b,
            typeof b,
            a.getTime(),
            d
          );
        return d;
      }
    }
    function l() {
      var a = new Date(),
        b = a.getTime(),
        d = a.getFullYear(),
        e = a.getMonth(),
        f = new Date(d, a.getMonth() + 1, 0).getDate(),
        g = new Date(d, 1, 29).getMonth() === 1 ? 366 : 365,
        h = 1e3 * 60 * 60 * 24,
        i = new Date(a.setHours(0, 0, 0, 0)),
        j = new Date(d, e, i.getDate() + 1);
      a =
        a.getDate() - ((a.getDay() - c("DateFormatConfig").weekStart + 6) % 7);
      var k = new Date(b).setDate(a);
      a = new Date(b).setDate(a + 7);
      var l = new Date(d, e, 1);
      e = new Date(d, e, f + 1);
      var m = new Date(d, 0, 1);
      d = new Date(d + 1, 0, 1);
      return [
        { name: "today", start: i.getTime(), end: j.getTime() },
        { name: "withinDay", start: b - h, end: b + h },
        { name: "yesterday", start: i.getTime() - h, end: i.getTime() - 1 },
        { name: "thisWeek", start: k, end: a },
        { name: "withinWeek", start: b - h * 7, end: b + h * 7 },
        { name: "thisMonth", start: l.getTime(), end: e.getTime() },
        { name: "withinMonth", start: b - h * f, end: b + h * f },
        { name: "thisYear", start: m.getTime(), end: d.getTime() },
        { name: "withinYear", start: b - h * g, end: b + h * g },
        { name: "older", start: -Infinity, end: b },
        { name: "future", start: b, end: +Infinity },
        { name: "allOtherTimes", start: -Infinity, end: +Infinity },
      ];
    }
    b = h;
    g["default"] = b;
  },
  98
);

import CLDRDateFormatConfig from "CLDRDateFormatConfig";
import DateFormatConfig from "DateFormatConfig";
import FBLogger from "FBLogger";
import IsInternSite from "IsInternSite";
import getCLDRLocalizedFormat from "getCLDRLocalizedFormat";
import intlGetDateNumerics from "intlGetDateNumerics";
import intlRenderCLDRDate from "intlRenderCLDRDate";
import intlRenderJSDateSymbol from "intlRenderJSDateSymbol";
import unrecoverableViolation from "unrecoverableViolation";

const periodNames = Object.freeze({
  today: null,
  yesterday: null,
  thisWeek: null,
  thisMonth: null,
  thisYear: null,
  withinDay: null,
  withinWeek: null,
  withinMonth: null,
  withinYear: null,
  older: null,
  future: null,
  allOtherTimes: null,
});

type FormatDateOptions = {
  skipSuffixLocalization?: boolean;
  skipPatternLocalization?: boolean;
  utc?: boolean;
  formatInternal?: boolean;
  throwCLDRError?: boolean;
};

function formatDate(
  date: string | number | Date,
  format: string | Record<string, string> | null,
  options?: FormatDateOptions
): string {
  options = options || {
    skipSuffixLocalization: false,
    skipPatternLocalization: false,
    utc: false,
    formatInternal: false,
    throwCLDRError: false,
  };

  if (format == null || format === "" || date == null || !(date || date === 0))
    return "";

  if (typeof date === "string") {
    if (isNaN(Number(date))) {
      FBLogger("i18n-formatDate")
        .event("date_string_must_be_timestamp")
        .blameToPreviousFile()
        .mustfix(
          `The date passed to formatDate is a string, but not a timestamp. formatDate expects strings to be a string representation of a Unix timestamp but was passed "${date}"`
        );
      date = parseInt(date, 10);
    }
  }

  if (typeof date === "number") {
    date = new Date(date * 1000);
  }

  if (!(date instanceof Date)) {
    throw unrecoverableViolation(
      "The date passed to formatDate must be either a unix timestamp or JavaScript date object.",
      "internationalization"
    );
  }

  if (isNaN(date.getTime())) {
    throw unrecoverableViolation(
      "Invalid date passed to formatDate",
      "internationalization"
    );
  }

  if (date.getTime() >= 1e15) {
    FBLogger("i18n-formatDate")
      .event("date_too_far_in_future")
      .blameToPreviousFile()
      .info(
        "The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?"
      );
  }

  const selectedFormat = selectFormat(date, format);
  const numerics = intlGetDateNumerics(date, options);
  return renderDate(selectedFormat, numerics, options);
}

formatDate.DEFAULT_FORMAT = "M j, Y g:i A";
formatDate.periodNames = Object.freeze(Object.keys(periodNames));

function renderDate(
  format: string,
  numerics: Record<string, number>,
  options: FormatDateOptions
): string {
  let localizedFormat = format;
  const skipPatternLocalization = !!options.skipPatternLocalization;
  const formatInternal = options.formatInternal === true;

  if (
    !skipPatternLocalization &&
    (formatInternal || !IsInternSite.is_intern_site)
  ) {
    if (format in CLDRDateFormatConfig.supportedPHPFormatsKeys) {
      try {
        const cldrFormat = CLDRDateFormatConfig.supportedPHPFormatsKeys[format];
        const localized = getCLDRLocalizedFormat(cldrFormat);
        return intlRenderCLDRDate(localized, options, numerics);
      } catch (error) {
        FBLogger("i18n-formatDate")
          .event("CLDR_date_format_render_error")
          .blameToPreviousFile()
          .catching(error)
          .mustfix("CLDR date format render error");
        if (options.throwCLDRError === true) throw error;
      }
    } else if (DateFormatConfig.formats[format]) {
      localizedFormat = DateFormatConfig.formats[format];
    } else if (!IsInternSite.is_intern_site) {
      if (format.length !== 1) {
        throw unrecoverableViolation(
          `Trying to localize an unsupported date format: \`${format}\``,
          "internationalization"
        );
      }
    }
  }

  return renderJSDate(localizedFormat, options, numerics);
}

function renderJSDate(
  format: string,
  options: FormatDateOptions,
  numerics: Record<string, number>
): string {
  const result: string[] = [];
  for (let i = 0; i < format.length; i++) {
    const symbol = format.charAt(i);
    const renderedSymbol = intlRenderJSDateSymbol(
      numerics,
      symbol,
      options,
      format,
      i
    );
    result.push(renderedSymbol.rendered);
    i = renderedSymbol.idx;
  }
  return result.join("");
}

function selectFormat(
  date: Date,
  format: string | Record<string, string> | null
): string {
  const defaultFormat = formatDate.DEFAULT_FORMAT;
  if (typeof format === "string") return format;
  else if (typeof format === "object" && format !== null) {
    const timestamp = date.getTime();
    for (const period of getPeriods()) {
      const periodFormat = format[period.name];
      if (
        periodFormat != null &&
        period.start <= timestamp &&
        timestamp < period.end
      )
        return periodFormat;
    }
    FBLogger("i18n-formatDate")
      .event("matching_period_format_not_found")
      .blameToPreviousFile()
      .warn(
        `Matching period not found for date "${timestamp}", using default format "${defaultFormat}". Current timestamp: "${Date.now()}"`
      );
    return defaultFormat;
  } else {
    FBLogger("i18n-formatDate")
      .event("invalid_format_argument")
      .blameToPreviousFile()
      .warn(
        `Called with invalid format "${format}" (type: ${typeof format}) for date "${date.getTime()}", using default: ${defaultFormat}`
      );
    return defaultFormat;
  }
}

function getPeriods() {
  const now = new Date();
  const nowTime = now.getTime();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInYear = new Date(currentYear, 1, 29).getMonth() === 1 ? 366 : 365;
  const oneDayMS = 1000 * 60 * 60 * 24;

  const todayStart = new Date(now.setHours(0, 0, 0, 0));
  const tomorrowStart = new Date(
    currentYear,
    currentMonth,
    todayStart.getDate() + 1
  );

  const weekStartDay =
    now.getDate() - ((now.getDay() - DateFormatConfig.weekStart + 6) % 7);
  const weekStart = new Date(nowTime).setDate(weekStartDay);
  const nextWeekStart = new Date(nowTime).setDate(weekStartDay + 7);

  const monthStart = new Date(currentYear, currentMonth, 1);
  const nextMonthStart = new Date(currentYear, currentMonth, daysInMonth + 1);

  const yearStart = new Date(currentYear, 0, 1);
  const nextYearStart = new Date(currentYear + 1, 0, 1);

  return [
    {
      name: "today",
      start: todayStart.getTime(),
      end: tomorrowStart.getTime(),
    },
    { name: "withinDay", start: nowTime - oneDayMS, end: nowTime + oneDayMS },
    {
      name: "yesterday",
      start: todayStart.getTime() - oneDayMS,
      end: todayStart.getTime() - 1,
    },
    { name: "thisWeek", start: weekStart, end: nextWeekStart },
    {
      name: "withinWeek",
      start: nowTime - oneDayMS * 7,
      end: nowTime + oneDayMS * 7,
    },
    {
      name: "thisMonth",
      start: monthStart.getTime(),
      end: nextMonthStart.getTime(),
    },
    {
      name: "withinMonth",
      start: nowTime - oneDayMS * daysInMonth,
      end: nowTime + oneDayMS * daysInMonth,
    },
    {
      name: "thisYear",
      start: yearStart.getTime(),
      end: nextYearStart.getTime(),
    },
    {
      name: "withinYear",
      start: nowTime - oneDayMS * daysInYear,
      end: nowTime + oneDayMS * daysInYear,
    },
    { name: "older", start: -Infinity, end: nowTime },
    { name: "future", start: nowTime, end: Infinity },
    { name: "allOtherTimes", start: -Infinity, end: Infinity },
  ];
}

export default formatDate;
