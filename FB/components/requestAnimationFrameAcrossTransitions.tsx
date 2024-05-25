__d(
  "requestAnimationFrameAcrossTransitions",
  ["TimeSlice", "requestAnimationFramePolyfill"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      a = c("TimeSlice").guard(a, "requestAnimationFrame", {
        propagationType: c("TimeSlice").PropagationType.CONTINUATION,
      });
      return c("requestAnimationFramePolyfill")(a);
    }
    g["default"] = a;
  },
  98
);

import { TimeSlice, PropagationType } from "TimeSlice";
import requestAnimationFramePolyfill from "requestAnimationFramePolyfill";

function requestAnimationFrameAcrossTransitions(callback: () => void): void {
  const guardedCallback = TimeSlice.guard(callback, "requestAnimationFrame", {
    propagationType: PropagationType.CONTINUATION,
  });
  requestAnimationFramePolyfill(guardedCallback);
}

export default requestAnimationFrameAcrossTransitions;
