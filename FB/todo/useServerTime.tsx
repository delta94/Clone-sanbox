__d(
  "useServerTime",
  ["JSScheduler", "ServerTime", "clearInterval", "react", "setInterval"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.useEffect,
      k = b.useState,
      l = 6e4,
      m = new Set(),
      n = null,
      o = !1;
    function p() {
      m.forEach(function (a) {
        return a();
      }),
        (o = !1);
    }
    function q(a) {
      a === void 0 && (a = l),
        (n = c("setInterval")(function () {
          o ||
            ((o = !0),
            (i || (i = d("JSScheduler"))).scheduleSpeculativeCallback(p));
        }, a));
    }
    function r() {
      m.size === 0 && (c("clearInterval")(n), (n = null));
    }
    function s(a, b) {
      b === void 0 && (b = l);
      m.add(a);
      n == null && q(b);
      return function () {
        m["delete"](a), r();
      };
    }
    function t() {
      return new Date(d("ServerTime").getMillis());
    }
    function a(a) {
      a === void 0 && (a = l);
      var b = k(function () {
          return t();
        }),
        c = b[0],
        d = b[1],
        e = function () {
          return d(t());
        };
      j(
        function () {
          return s(e, a);
        },
        [a]
      );
      return c;
    }
    g["default"] = a;
  },
  98
);

import JSScheduler from "JSScheduler";
import ServerTime from "ServerTime";
import clearInterval from "clearInterval";
import React, { useEffect, useState } from "react";
import setInterval from "setInterval";

const INTERVAL_DURATION = 60000;
const callbacks = new Set<() => void>();
let intervalId: NodeJS.Timeout | null = null;
let isScheduled = false;

function runCallbacks() {
  callbacks.forEach((callback) => callback());
  isScheduled = false;
}

function startInterval(duration: number = INTERVAL_DURATION) {
  intervalId = setInterval(() => {
    if (!isScheduled) {
      isScheduled = true;
      JSScheduler.scheduleSpeculativeCallback(runCallbacks);
    }
  }, duration);
}

function stopInterval() {
  if (callbacks.size === 0 && intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function registerCallback(
  callback: () => void,
  duration: number = INTERVAL_DURATION
) {
  callbacks.add(callback);
  if (intervalId === null) {
    startInterval(duration);
  }
  return () => {
    callbacks.delete(callback);
    stopInterval();
  };
}

function getServerTime(): Date {
  return new Date(ServerTime.getMillis());
}

function useServerTime(duration: number = INTERVAL_DURATION): Date {
  const [serverTime, setServerTime] = useState(getServerTime);

  useEffect(() => {
    const updateServerTime = () => setServerTime(getServerTime());
    const unregister = registerCallback(updateServerTime, duration);
    return unregister;
  }, [duration]);

  return serverTime;
}

export default useServerTime;
