__d(
  "performance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c;
  },
  66
);

declare global {
  interface Window {
    msPerformance?: Performance;
    webkitPerformance?: Performance;
  }
}

const perf: Performance =
  window.performance || window.msPerformance || window.webkitPerformance || {};

export default perf;
