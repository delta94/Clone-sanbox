__d(
  "ServerTime",
  ["ServerTimeData"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = 0;
    f = 0;
    var j = null;
    h =
      (h = (typeof window !== "undefined" ? window : self).performance) == null
        ? void 0
        : h.timing;
    if (h) {
      var k = h.requestStart;
      h = h.domLoading;
      if (k && h) {
        var l =
          c("ServerTimeData").timeOfResponseStart -
          c("ServerTimeData").timeOfRequestStart;
        k = h - k - l;
        f = k / 2;
        l = h - c("ServerTimeData").timeOfResponseStart - f;
        h = Math.max(50, k * 0.8);
        Math.abs(l) > h && ((i = l), (j = Date.now()));
      }
    } else d(c("ServerTimeData").serverTime);
    function a() {
      return Date.now() - i;
    }
    function b() {
      return i;
    }
    function d(a) {
      a = Date.now() - a;
      Math.abs(i - a) > 6e4 && ((i = a), (j = Date.now()));
    }
    function e() {
      return j === null ? null : Date.now() - j;
    }
    f = a;
    k = b;
    g.getMillis = a;
    g.getOffsetMillis = b;
    g.update = d;
    g.getMillisSinceLastUpdate = e;
    g.get = f;
    g.getSkew = k;
  },
  98
);

import { ServerTimeData } from "ServerTimeData";

let offsetMillis: number = 0;
let lastUpdate: number | null = null;
const performanceTiming = (typeof window !== "undefined" ? window : self)
  .performance?.timing;

if (performanceTiming) {
  const { requestStart, domLoading } = performanceTiming;
  if (requestStart && domLoading) {
    const requestDuration =
      ServerTimeData.timeOfResponseStart - ServerTimeData.timeOfRequestStart;
    const networkDelay = domLoading - requestStart - requestDuration;
    const halfNetworkDelay = networkDelay / 2;
    const estimatedServerTime =
      domLoading - ServerTimeData.timeOfResponseStart - halfNetworkDelay;
    const maxDeviation = Math.max(50, networkDelay * 0.8);

    if (Math.abs(estimatedServerTime) > maxDeviation) {
      offsetMillis = estimatedServerTime;
      lastUpdate = Date.now();
    }
  }
} else {
  updateServerTimeOffset(ServerTimeData.serverTime);
}

// Function to get the current time in milliseconds adjusted by the server time offset
function getMillis(): number {
  return Date.now() - offsetMillis;
}

// Function to get the current server time offset in milliseconds
function getOffsetMillis(): number {
  return offsetMillis;
}

// Function to update the server time offset
function updateServerTimeOffset(serverTime: number): void {
  const newOffset = Date.now() - serverTime;
  if (Math.abs(offsetMillis - newOffset) > 60000) {
    offsetMillis = newOffset;
    lastUpdate = Date.now();
  }
}

// Function to get the milliseconds since the last update
function getMillisSinceLastUpdate(): number | null {
  return lastUpdate === null ? null : Date.now() - lastUpdate;
}

// Export functions
export {
  getMillis,
  getOffsetMillis,
  updateServerTimeOffset as update,
  getMillisSinceLastUpdate,
  getMillis as get,
  getOffsetMillis as getSkew,
};
