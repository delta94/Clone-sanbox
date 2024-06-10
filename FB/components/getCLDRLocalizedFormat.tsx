__d(
  "getCLDRLocalizedFormat",
  [
    "CLDRDateFormatConfig",
    "FBLogger",
    "IntlDateFormatsCLDRWidthEnum",
    "RegionDatetimePatterns",
    "flipObject",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("CLDRDateFormatConfig").CLDRConfigeratorFormats,
      h = b("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats,
      i = b("flipObject")(b("RegionDatetimePatterns"));
    function a(a) {
      if (a == null)
        throw b("unrecoverableViolation")(
          'Format: "' + a + '", not supported by configurator.',
          "internationalization"
        );
      var c,
        d,
        e = a.split("_"),
        f = e[0];
      e = e.slice(1);
      var l = f + "Formats";
      a in i ? (d = h) : (d = g);
      switch (l) {
        case "dateFormats":
        case "timeFormats":
          var m = j(e[0]);
          if (m == null)
            throw b("unrecoverableViolation")(
              'Format: "' +
                a +
                '", category: "' +
                l +
                '", with unsupported width: "undefined"',
              "internationalization"
            );
          c = d[l][m];
          if (c == null)
            throw b("unrecoverableViolation")(
              'Format: "' +
                a +
                '", category: "' +
                l +
                '", ' +
                ('width: "' + m + '", with unsupported localization'),
              "internationalization"
            );
          break;
        case "dateTimeFormats":
          m = j(e[0]);
          e = j(e[1]);
          if (m == null || e == null)
            throw b("unrecoverableViolation")(
              'Format: "' +
                a +
                '", category: "' +
                l +
                '", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',
              "internationalization"
            );
          c = d[l][m];
          var n = d.dateFormats[m],
            o = d.timeFormats[e];
          if (c == null)
            throw b("unrecoverableViolation")(
              'Format: "' +
                a +
                '", category: "' +
                l +
                '", ' +
                ('date width: "' + m + '", and time width: ') +
                ('"' + e + '", with unsupported localization'),
              "internationalization"
            );
          c = c.replace("{0}", o).replace("{1}", n);
          break;
        default:
          l = "availableFormats";
          m = f;
          m.includes("j") && (m = k(m, d.timeFormats));
          c = d[l][m];
          if (c == null)
            throw b("unrecoverableViolation")(
              'Format: "' +
                a +
                '", with key: "' +
                m +
                '", not supported by CLDR',
              "internationalization"
            );
      }
      return c;
    }
    function j(a) {
      if (a == null)
        throw b("unrecoverableViolation")(
          "Expected CLDR width key to not be null",
          "internationalization"
        );
      return b("IntlDateFormatsCLDRWidthEnum")[a.toUpperCase()];
    }
    function k(a, c) {
      var d;
      c = c["short"];
      c == null
        ? (b("FBLogger")("formatDate")
            .blameToPreviousFile()
            .warn(
              'CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',
              a
            ),
          (d = "h"))
        : (d = c.includes("H") ? "H" : "h");
      return a.replace("j", d);
    }
    e.exports = a;
  },
  null
);

import {
  CLDRConfigeratorFormats,
  CLDRRegionalConfigeratorFormats,
} from "CLDRDateFormatConfig";
import FBLogger from "FBLogger";
import { IntlDateFormatsCLDRWidthEnum } from "IntlDateFormatsCLDRWidthEnum";
import RegionDatetimePatterns from "RegionDatetimePatterns";
import flipObject from "flipObject";
import unrecoverableViolation from "unrecoverableViolation";

const CLDRFormats = CLDRConfigeratorFormats;
const CLDRRegionalFormats = CLDRRegionalConfigeratorFormats;
const RegionPatterns = flipObject(RegionDatetimePatterns);

function getCLDRLocalizedFormat(format: string): string {
  if (format == null) {
    throw unrecoverableViolation(
      `Format: "${format}", not supported by configurator.`,
      "internationalization"
    );
  }

  let localizedFormat: string | null = null;
  const parts = format.split("_");
  const mainFormat = parts[0];
  const subFormats = parts.slice(1);
  const formatCategory = mainFormat + "Formats";

  let formatSource: Record<string, any>;
  if (format in RegionPatterns) {
    formatSource = CLDRRegionalFormats;
  } else {
    formatSource = CLDRFormats;
  }

  switch (formatCategory) {
    case "dateFormats":
    case "timeFormats": {
      const width = getWidthKey(subFormats[0]);
      if (width == null) {
        throw unrecoverableViolation(
          `Format: "${format}", category: "${formatCategory}", with unsupported width: "undefined"`,
          "internationalization"
        );
      }
      localizedFormat = formatSource[formatCategory][width];
      if (localizedFormat == null) {
        throw unrecoverableViolation(
          `Format: "${format}", category: "${formatCategory}", width: "${width}", with unsupported localization`,
          "internationalization"
        );
      }
      break;
    }
    case "dateTimeFormats": {
      const dateWidth = getWidthKey(subFormats[0]);
      const timeWidth = getWidthKey(subFormats[1]);
      if (dateWidth == null || timeWidth == null) {
        throw unrecoverableViolation(
          `Format: "${format}", category: "${formatCategory}", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"`,
          "internationalization"
        );
      }
      localizedFormat = formatSource[formatCategory][dateWidth];
      const dateFormat = formatSource.dateFormats[dateWidth];
      const timeFormat = formatSource.timeFormats[timeWidth];
      if (localizedFormat == null) {
        throw unrecoverableViolation(
          `Format: "${format}", category: "${formatCategory}", date width: "${dateWidth}", and time width: "${timeWidth}", with unsupported localization`,
          "internationalization"
        );
      }
      localizedFormat = localizedFormat
        .replace("{0}", timeFormat)
        .replace("{1}", dateFormat);
      break;
    }
    default: {
      const availableFormatKey = mainFormat.includes("j")
        ? get24HourFormat(mainFormat, formatSource.timeFormats)
        : mainFormat;
      localizedFormat = formatSource.availableFormats[availableFormatKey];
      if (localizedFormat == null) {
        throw unrecoverableViolation(
          `Format: "${format}", with key: "${availableFormatKey}", not supported by CLDR`,
          "internationalization"
        );
      }
    }
  }

  return localizedFormat;
}

function getWidthKey(width: string): string {
  if (width == null) {
    throw unrecoverableViolation(
      "Expected CLDR width key to not be null",
      "internationalization"
    );
  }
  return IntlDateFormatsCLDRWidthEnum[width.toUpperCase()];
}

function get24HourFormat(
  format: string,
  timeFormats: Record<string, string>
): string {
  const shortTimeFormat = timeFormats["short"];
  if (shortTimeFormat == null) {
    FBLogger("formatDate")
      .blameToPreviousFile()
      .warn(
        'CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',
        format
      );
    return format.replace("j", "h");
  }
  const hourSymbol = shortTimeFormat.includes("H") ? "H" : "h";
  return format.replace("j", hourSymbol);
}

export default getCLDRLocalizedFormat;
