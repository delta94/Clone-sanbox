__d("CometRelativeTimestamp.react", ["fbt", "DevTimestampSpan.react", "react", "useServerTime"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e = d("react");
    function i(a, b) {
        if (b === "minimized")
            return h._("__JHASH__fwsgSNrW38G__JHASH__");
        else if (b === "shortened")
            return h._("__JHASH__R3_UwncmzVK__JHASH__");
        return h._("__JHASH__n-vdMzQYLNI__JHASH__")
    }
    function j(a, b) {
        return b === "minimized" ? h._("__JHASH__-b-qMPARzNx__JHASH__") : h._("__JHASH__7tk0E3psPN9__JHASH__")
    }
    function k(a, b) {
        if (b === "minimized")
            return h._("__JHASH__-dvS8T7Zewj__JHASH__", [h._param("minutes", a, [0])]);
        else if (b === "shortened")
            return h._("__JHASH__pJYDYNmcCNm__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__Cf0HUgiMq4T__JHASH__", [h._plural(a, "number")])
    }
    function l(a, b) {
        if (b === "minimized")
            return h._("__JHASH__aQr_BY-obs4__JHASH__", [h._param("minutes", a, [0])]);
        else if (b === "shortened")
            return h._("__JHASH__c6NQLZH4ANd__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__hSOa9acW7bb__JHASH__", [h._plural(a, "number")])
    }
    function m(a, b) {
        if (b === "minimized")
            return h._("__JHASH__dJku-irc6Vq__JHASH__", [h._param("hours", a)]);
        else if (b === "shortened")
            return h._("__JHASH__fgynbiSDJGc__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__6moQMMAESbv__JHASH__", [h._plural(a, "number")])
    }
    function n(a, b) {
        if (b === "minimized")
            return h._("__JHASH__my9Q52IIrzO__JHASH__", [h._param("hours", a)]);
        else if (b === "shortened")
            return h._("__JHASH__aKe8M_AKzI3__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__KshjW5ZSXeJ__JHASH__", [h._plural(a, "number")])
    }
    function o(a, b) {
        if (b === "minimized")
            return h._("__JHASH__7vrBSek8hqf__JHASH__", [h._param("days", a)]);
        else if (b === "shortened")
            return h._("__JHASH__U_-41liQBf___JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__eOrU59mir58__JHASH__", [h._plural(a, "number")])
    }
    function p(a, b) {
        if (b === "minimized")
            return h._("__JHASH__nR1BpT4JZ-1__JHASH__", [h._param("days", a)]);
        else if (b === "shortened")
            return h._("__JHASH__XM9woDyI0RI__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__e25sv98iazf__JHASH__", [h._plural(a, "number")])
    }
    function q(a, b) {
        if (b === "minimized")
            return h._("__JHASH__89wyXCUcNcD__JHASH__", [h._param("weeks", a)]);
        else if (b === "shortened")
            return h._("__JHASH__LzV87OP-cnH__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__8Tz4WwYqyWe__JHASH__", [h._plural(a, "number")])
    }
    function r(a, b) {
        if (b === "minimized")
            return h._("__JHASH__6jpt3ZiMeNm__JHASH__", [h._param("weeks", a)]);
        else if (b === "shortened")
            return h._("__JHASH__FZjvF7iUhS2__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__KYxoF9she7V__JHASH__", [h._plural(a, "number")])
    }
    function s(a, b) {
        if (b === "minimized")
            return h._("__JHASH__pydgq6srngO__JHASH__", [h._param("years", a)]);
        else if (b === "shortened")
            return h._("__JHASH__qHsnROIs1Rn__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__4VLiJAQbl5i__JHASH__", [h._plural(a, "number")])
    }
    function t(a, b) {
        if (b === "minimized")
            return h._("__JHASH__PO71EECf0Ar__JHASH__", [h._param("years", a)]);
        else if (b === "shortened")
            return h._("__JHASH__HQno8zOlCSY__JHASH__", [h._plural(a, "number")]);
        return h._("__JHASH__lP1YxrqVkce__JHASH__", [h._plural(a, "number")])
    }
    var u = 60
      , v = 60
      , w = 24
      , x = 7
      , y = 365;
    function z(a, b, c) {
        c === void 0 && (c = "normal");
        a = (a.valueOf() - b.valueOf()) / 1e3;
        if (a < u)
            return i(a, c);
        b = a / u;
        a = Math.floor(b);
        if (a < v)
            return k(a, c);
        a = b / v;
        b = Math.floor(a);
        if (b < w)
            return m(b, c);
        b = a / w;
        a = Math.floor(b);
        if (a < x)
            return o(a, c);
        else if (b < y) {
            a = Math.floor(b / x);
            return q(a, c)
        }
        a = Math.floor(b / y);
        return s(a, c)
    }
    function a(a, b, c) {
        c === void 0 && (c = "normal");
        b = (b.valueOf() - a.valueOf()) / 1e3;
        if (b < u)
            return j(b, c);
        a = b / u;
        b = Math.floor(a);
        if (b < v)
            return l(b, c);
        b = a / v;
        a = Math.floor(a / v);
        if (a < w)
            return n(a, c);
        a = b / w;
        b = Math.floor(a);
        if (b < x)
            return p(b, c);
        else if (a < y) {
            b = Math.floor(a / x);
            return r(b, c)
        }
        b = Math.floor(a / y);
        return t(b, c)
    }
    function b(a) {
        var b = a.date;
        a = a.format;
        var d = c("useServerTime")();
        d = z(d, b, a);
        return d
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.getRelativeTimestamp = z;
    b.getRelativeTimestampInFuture = a;
    g["default"] = b
}
), 98);


import React from "react";
import { useServerTime } from "useServerTime"; // Replace with the actual import path


const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const daysPerYear = 365;

function getRelativeTimestamp(date: Date, format: string = "normal"): string {
  const now = useServerTime();
  const secondsDiff = (now.valueOf() - date.valueOf()) / 1000;

  if (secondsDiff < minutesPerHour) {
    return format === "minimized"
      ? "__JHASH__fwsgSNrW38G__JHASH__"
      : format === "shortened"
      ? "__JHASH__R3_UwncmzVK__JHASH__"
      : "__JHASH__n-vdMzQYLNI__JHASH__";
  } else {
    const minutesDiff = secondsDiff / minutesPerHour;
    if (minutesDiff < minutesPerHour) {
      return format === "minimized"
        ? "__JHASH__-b-qMPARzNx__JHASH__"
        : "__JHASH__7tk0E3psPN9__JHASH__";
    } else {
      const hoursDiff = minutesDiff / minutesPerHour;
      if (hoursDiff < hoursPerDay) {
        return format === "minimized"
          ? "__JHASH__-dvS8T7Zewj__JHASH__"
          : format === "shortened"
          ? `__JHASH__pJYDYNmcCNm__JHASH__(${hoursDiff})`
          : `__JHASH__Cf0HUgiMq4T__JHASH__(${hoursDiff})`;
      } else {
        const daysDiff = hoursDiff / hoursPerDay;
        if (daysDiff < daysPerWeek) {
          return format === "minimized"
            ? "__JHASH__aQr_BY-obs4__JHASH__"
            : format === "shortened"
            ? `__JHASH__c6NQLZH4ANd__JHASH__(${daysDiff})`
            : `__JHASH__hSOa9acW7bb__JHASH__(${daysDiff})`;
        } else if (daysDiff < daysPerYear) {
          const weeksDiff = daysDiff / daysPerWeek;
          return format === "minimized"
            ? "__JHASH__89wyXCUcNcD__JHASH__"
            : format === "shortened"
            ? `__JHASH__LzV87OP-cnH__JHASH__(${weeksDiff})`
            : `__JHASH__8Tz4WwYqyWe__JHASH__(${weeksDiff})`;
        } else {
          const yearsDiff = daysDiff / daysPerYear;
          return format === "minimized"
            ? "__JHASH__pydgq6srngO__JHASH__"
            : format === "shortened"
            ? `__JHASH__qHsnROIs1Rn__JHASH__(${yearsDiff})`
            : `__JHASH__4VLiJAQbl5i__JHASH__(${yearsDiff})`;
        }
      }
    }
  }
}

function CometRelativeTimestamp(props: { date: Date; format?: string }) {
  const { date, format } = props;

  const relativeTimestamp = getRelativeTimestamp(date, format);

  return <>{relativeTimestamp}</>;
}

CometRelativeTimestamp.displayName = `${CometRelativeTimestamp.name} [from ${98}]`;

export default CometRelativeTimestamp;
