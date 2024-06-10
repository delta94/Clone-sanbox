__d(
  "FDSTimestamp.react",
  ["fbt", "formatDate", "react", "react-strict-dom", "useServerTime"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    e = i || d("react");
    var j = 1e3 * 60 * 60 * 24,
      k = j * 30;
    function l(a, b) {
      return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
      );
    }
    function m(a, b) {
      return h._("__JHASH__OsFN0XAyv2W__JHASH__", [
        h._param("date", a),
        h._param("time", b),
      ]);
    }
    function n(a, b) {
      var d = c("formatDate")(b, "g:i A");
      if (l(b, a))
        return h._("__JHASH__I7gnNejSDJn__JHASH__", [h._param("time", d)]);
      var e = new Date(a.valueOf() - j);
      if (l(b, e))
        return h._("__JHASH__18g5xTeqQyg__JHASH__", [h._param("time", d)]);
      e = new Date(a.valueOf() + j);
      if (l(b, e))
        return h._("__JHASH__6hOHFFmfNGd__JHASH__", [h._param("time", d)]);
      e = c("formatDate")(b, "F j");
      a.getFullYear() !== b.getFullYear() && (e = c("formatDate")(b, "F j, Y"));
      return Math.abs(a.valueOf() - b.valueOf()) < k ? m(e, d) : e;
    }
    function a(a) {
      return m(c("formatDate")(a, "l, F j, Y"), c("formatDate")(a, "g:i A"));
    }
    function b(a) {
      a = a.date;
      var b = c("useServerTime")();
      b = n(b, a);
      return b;
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.getTimestamp = n;
    b.getAbsoluteTimestamp = a;
    b.getAbsoluteTimestampFbt = m;
    g["default"] = b;
  },
  226
);

import { fbt } from "fbt";
import formatDate from "formatDate";
import React from "react";
import { useServerTime } from "useServerTime";

const ONE_DAY_MS = 1000 * 60 * 60 * 24;
const ONE_MONTH_MS = ONE_DAY_MS * 30;

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateWithTime(date: string, time: string): string {
  return fbt("__JHASH__OsFN0XAyv2W__JHASH__", [
    fbt.param("date", date),
    fbt.param("time", time),
  ]);
}

function getTimestamp(serverTime: Date, clientTime: Date): string {
  const time = formatDate(clientTime, "g:i A");
  if (isSameDay(clientTime, serverTime)) {
    return fbt("__JHASH__I7gnNejSDJn__JHASH__", [fbt.param("time", time)]);
  }

  const previousDay = new Date(serverTime.valueOf() - ONE_DAY_MS);
  if (isSameDay(clientTime, previousDay)) {
    return fbt("__JHASH__18g5xTeqQyg__JHASH__", [fbt.param("time", time)]);
  }

  const nextDay = new Date(serverTime.valueOf() + ONE_DAY_MS);
  if (isSameDay(clientTime, nextDay)) {
    return fbt("__JHASH__6hOHFFmfNGd__JHASH__", [fbt.param("time", time)]);
  }

  let date = formatDate(clientTime, "F j");
  if (serverTime.getFullYear() !== clientTime.getFullYear()) {
    date = formatDate(clientTime, "F j, Y");
  }

  return Math.abs(serverTime.valueOf() - clientTime.valueOf()) < ONE_MONTH_MS
    ? formatDateWithTime(date, time)
    : date;
}

function getAbsoluteTimestamp(date: Date): string {
  return formatDateWithTime(
    formatDate(date, "l, F j, Y"),
    formatDate(date, "g:i A")
  );
}

interface FDSTimestampProps {
  date: Date;
}

const FDSTimestamp: React.FC<FDSTimestampProps> = ({ date }) => {
  const serverTime = useServerTime();
  const timestamp = getTimestamp(serverTime, date);
  return <>{timestamp}</>;
};

FDSTimestamp.displayName = `${FDSTimestamp.name} [from ${module.id}]`;
FDSTimestamp.getTimestamp = getTimestamp;
FDSTimestamp.getAbsoluteTimestamp = getAbsoluteTimestamp;
FDSTimestamp.getAbsoluteTimestampFbt = formatDateWithTime;

export default FDSTimestamp;
