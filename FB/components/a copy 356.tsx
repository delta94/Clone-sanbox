__d(
  "NetworkStatusImpl",
  ["NetworkHeartbeat", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = [],
      k = typeof window !== "undefined" ? window : self,
      l = k == null ? void 0 : (h = k.navigator) == null ? void 0 : h.onLine,
      m = 2,
      n = 5e3,
      o = [],
      p = [],
      q = 0,
      r = !0,
      s = !1,
      t = !1,
      u = function () {
        y(r, !0);
      },
      v = function () {
        y(s, !0);
      };
    function w() {
      var a = j.slice();
      a.forEach(function (a) {
        a({ online: l });
      });
    }
    function x(a) {
      a = j.indexOf(a);
      a > -1 && j.splice(a, 1);
    }
    function y(a, b) {
      b === void 0 && (b = !1);
      var c = l === a;
      b = !b && a === r && d("NetworkHeartbeat").isHeartbeatPending();
      if (c || b) return;
      t = t || a === s;
      l = a;
      l || d("NetworkHeartbeat").maybeStartHeartbeat(u, v);
      w();
    }
    function z() {
      var a = (i || (i = c("performanceNow")))();
      o = o.filter(function (b) {
        return A(b.startTime, a);
      });
      p = p.filter(function (b) {
        return A(b.startTime, a);
      });
      return p.length / o.length < m;
    }
    var A = function (a, b) {
      return a > b - n;
    };
    function a() {
      return l;
    }
    function b(a) {
      j.push(a);
      var b = !1;
      return {
        remove: function () {
          b || ((b = !0), x(a));
        },
      };
    }
    function e() {
      var a = (i || (i = c("performanceNow")))();
      o.push({ startTime: a });
      d("NetworkHeartbeat").maybeStartHeartbeat(u, v, z);
    }
    function f() {
      var a = (i || (i = c("performanceNow")))();
      p.push({ startTime: a });
      A(q, a) ||
        ((p = p.filter(function (b) {
          return A(b.startTime, a);
        })),
        (q = a));
    }
    function B() {
      return t;
    }
    k.addEventListener("online", function () {
      y(r);
    });
    k.addEventListener("offline", function () {
      y(s);
    });
    g.isOnline = a;
    g.onChange = b;
    g.reportError = e;
    g.reportSuccess = f;
    g.wasOffline = B;
  },
  98
);

import NetworkHeartbeat from "NetworkHeartbeat";
import performanceNow from "performanceNow";

interface NetworkStatusChange {
  online: boolean;
}

type NetworkStatusChangeCallback = (status: NetworkStatusChange) => void;

interface RemoveListener {
  remove: () => void;
}

interface Event {
  startTime: number;
}

let listeners: NetworkStatusChangeCallback[] = [];
const globalObject = typeof window !== "undefined" ? window : self;
let isOnlineStatus: boolean | undefined = globalObject?.navigator?.onLine;
const maxOfflineEvents = 2;
const eventDuration = 5000;
let successEvents: Event[] = [];
let errorEvents: Event[] = [];
let lastEventTime = 0;
let wasOfflineFlag = true;
let heartbeatPending = false;

const handleOnline = () => updateOnlineStatus(true, true);
const handleOffline = () => updateOnlineStatus(false, true);

function notifyListeners() {
  const currentListeners = listeners.slice();
  currentListeners.forEach((listener) => listener({ online: isOnlineStatus! }));
}

function removeListener(callback: NetworkStatusChangeCallback) {
  const index = listeners.indexOf(callback);
  if (index > -1) {
    listeners.splice(index, 1);
  }
}

function updateOnlineStatus(status: boolean, force: boolean = false) {
  const isStatusSame = isOnlineStatus === status;
  const isHeartbeatPending =
    !force && status === true && NetworkHeartbeat.isHeartbeatPending();

  if (isStatusSame || isHeartbeatPending) return;

  heartbeatPending = heartbeatPending || status === false;
  isOnlineStatus = status;

  if (!isOnlineStatus) {
    NetworkHeartbeat.maybeStartHeartbeat(handleOnline, handleOffline);
  }

  notifyListeners();
}

function filterEvents(events: Event[], currentTime: number): Event[] {
  return events.filter((event) =>
    isEventWithinDuration(event.startTime, currentTime)
  );
}

function isEventWithinDuration(
  eventTime: number,
  currentTime: number
): boolean {
  return eventTime > currentTime - eventDuration;
}

function getNetworkStatus(): boolean | undefined {
  return isOnlineStatus;
}

function addNetworkStatusChangeListener(
  callback: NetworkStatusChangeCallback
): RemoveListener {
  listeners.push(callback);
  let isRemoved = false;

  return {
    remove: () => {
      if (!isRemoved) {
        isRemoved = true;
        removeListener(callback);
      }
    },
  };
}

function reportNetworkError() {
  const currentTime = performanceNow();
  errorEvents.push({ startTime: currentTime });
  NetworkHeartbeat.maybeStartHeartbeat(
    handleOnline,
    handleOffline,
    filterOfflineEvents
  );
}

function reportNetworkSuccess() {
  const currentTime = performanceNow();
  successEvents.push({ startTime: currentTime });

  if (!isEventWithinDuration(lastEventTime, currentTime)) {
    successEvents = filterEvents(successEvents, currentTime);
    lastEventTime = currentTime;
  }
}

function filterOfflineEvents() {
  const currentTime = performanceNow();
  successEvents = filterEvents(successEvents, currentTime);
  errorEvents = filterEvents(errorEvents, currentTime);
  return errorEvents.length / successEvents.length < maxOfflineEvents;
}

function wasOffline(): boolean {
  return heartbeatPending;
}

globalObject.addEventListener("online", handleOnline);
globalObject.addEventListener("offline", handleOffline);

export {
  getNetworkStatus as isOnline,
  addNetworkStatusChangeListener as onChange,
  reportNetworkError as reportError,
  reportNetworkSuccess as reportSuccess,
  wasOffline,
};
