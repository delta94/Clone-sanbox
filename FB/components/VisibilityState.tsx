__d(
  "VisibilityState",
  ["VisibilityAPI", "performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    var h = 1e3,
      i = [],
      j = null;
    f = !1;
    var k = new Set();
    f || (d("VisibilityAPI").isVisibilityHidden() && (j = 0), (f = !0));
    d("VisibilityAPI").canUseVisibilityAPI &&
      d("VisibilityAPI").onVisibilityChange(function (a) {
        l(a, d("VisibilityAPI").isVisibilityHidden()),
          k.forEach(function (b) {
            b(a, d("VisibilityAPI").isVisibilityHidden());
          });
      });
    function l(a, b) {
      b
        ? (j = a)
        : j != null &&
          (i.push({ end: a, start: j }), i.length > h && i.shift(), (j = null));
    }
    function a(a) {
      k.add(a);
      return function () {
        k["delete"](a);
      };
    }
    function b(a) {
      k["delete"](a);
    }
    function m(a, b) {
      var d = [],
        e = Array.from(i);
      if (j != null) {
        var f = j;
        e.push({ end: c("performanceNowSinceAppStart")(), start: f });
      }
      e.forEach(function (c) {
        c.start <= a && c.end > a
          ? c.end <= b
            ? d.push({ end: c.end, start: a })
            : d.push({ end: b, start: a })
          : c.start > a &&
            c.start <= b &&
            (c.end <= b
              ? d.push({ end: c.end, start: c.start })
              : d.push({ end: b, start: c.start }));
      });
      return d;
    }
    function e(a, b) {
      return m(a, b).length > 0;
    }
    g.subscribe = a;
    g.unsubscribe = b;
    g.getHiddenSpans = m;
    g.wasHidden = e;
  },
  98
);

import {
  canUseVisibilityAPI,
  isVisibilityHidden,
  onVisibilityChange,
} from "VisibilityAPI";
import performanceNowSinceAppStart from "performanceNowSinceAppStart";

const maxEntries = 1000;
let hiddenSpans: Array<{ start: number; end: number }> = [];
let hiddenStartTime: number | null = null;
let initialized = false;
const subscribers = new Set<(timestamp: number, hidden: boolean) => void>();

if (!initialized) {
  if (isVisibilityHidden()) {
    hiddenStartTime = 0;
  }
  initialized = true;
}

if (canUseVisibilityAPI) {
  onVisibilityChange((timestamp: number) => {
    handleVisibilityChange(timestamp, isVisibilityHidden());
    subscribers.forEach((callback) => {
      callback(timestamp, isVisibilityHidden());
    });
  });
}

function handleVisibilityChange(timestamp: number, hidden: boolean): void {
  if (hidden) {
    hiddenStartTime = timestamp;
  } else if (hiddenStartTime != null) {
    hiddenSpans.push({ end: timestamp, start: hiddenStartTime });
    if (hiddenSpans.length > maxEntries) {
      hiddenSpans.shift();
    }
    hiddenStartTime = null;
  }
}

function subscribe(
  callback: (timestamp: number, hidden: boolean) => void
): () => void {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

function unsubscribe(
  callback: (timestamp: number, hidden: boolean) => void
): void {
  subscribers.delete(callback);
}

function getHiddenSpans(
  startTime: number,
  endTime: number
): Array<{ start: number; end: number }> {
  const spans = [...hiddenSpans];
  if (hiddenStartTime != null) {
    spans.push({ end: performanceNowSinceAppStart(), start: hiddenStartTime });
  }
  return spans.filter((span) => {
    if (span.start <= startTime && span.end > startTime) {
      return span.end <= endTime
        ? { end: span.end, start: startTime }
        : { end: endTime, start: startTime };
    }
    if (span.start > startTime && span.start <= endTime) {
      return span.end <= endTime
        ? { end: span.end, start: span.start }
        : { end: endTime, start: span.start };
    }
    return false;
  });
}

function wasHidden(startTime: number, endTime: number): boolean {
  return getHiddenSpans(startTime, endTime).length > 0;
}

export { subscribe, unsubscribe, getHiddenSpans, wasHidden };
