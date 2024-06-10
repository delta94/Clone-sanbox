__d(
  "VisibilityAPI",
  ["performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    var h =
      ((e = self.document) == null ? void 0 : e.visibilityState) !== void 0 ||
      ((f = self.document) == null ? void 0 : f.hidden) !== void 0;
    function a() {
      if (h)
        return document.visibilityState !== void 0
          ? document.visibilityState === "hidden"
          : document.hidden;
      else return !1;
    }
    function b(a) {
      var b = function (b) {
        b =
          (b = b == null ? void 0 : b.timeStamp) != null
            ? b
            : c("performanceNowSinceAppStart")();
        a(b);
      };
      document.addEventListener("visibilitychange", b);
      return b;
    }
    function d(a) {
      document.removeEventListener("visibilitychange", a);
    }
    g.canUseVisibilityAPI = h;
    g.isVisibilityHidden = a;
    g.onVisibilityChange = b;
    g.removeVisibiltyChangeListener = d;
  },
  98
);

import performanceNowSinceAppStart from "performanceNowSinceAppStart";

const canUseVisibilityAPI: boolean =
  self.document?.visibilityState !== undefined ||
  self.document?.hidden !== undefined;

function isVisibilityHidden(): boolean {
  if (canUseVisibilityAPI) {
    return document.visibilityState !== undefined
      ? document.visibilityState === "hidden"
      : document.hidden;
  }
  return false;
}

function onVisibilityChange(
  callback: (timestamp: number) => void
): (event: Event) => void {
  const listener = (event: Event): void => {
    const timestamp = event?.timeStamp ?? performanceNowSinceAppStart();
    callback(timestamp);
  };
  document.addEventListener("visibilitychange", listener);
  return listener;
}

function removeVisibilityChangeListener(
  listener: (event: Event) => void
): void {
  document.removeEventListener("visibilitychange", listener);
}

export {
  canUseVisibilityAPI,
  isVisibilityHidden,
  onVisibilityChange,
  removeVisibilityChangeListener,
};
