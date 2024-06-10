__d(
  "performanceNow",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    var h;
    if ((h || (h = c("performance"))).now)
      b = function () {
        return (h || (h = c("performance"))).now();
      };
    else {
      d = a._cstart;
      e = Date.now();
      var i = typeof d === "number" && d < e ? d : e,
        j = 0;
      b = function () {
        var a = Date.now(),
          b = a - i;
        b < j && ((i -= j - b), (b = a - i));
        j = b;
        return b;
      };
    }
    f = b;
    g["default"] = f;
  },
  98
);
import { performance as perf } from "performance";

let performanceNow: () => number;

if (perf.now) {
  performanceNow = function (): number {
    return perf.now();
  };
} else {
  const start = (globalThis as any)._cstart as number;
  const initialTime = Date.now();
  let referenceTime =
    typeof start === "number" && start < initialTime ? start : initialTime;
  let lastTime = 0;

  performanceNow = function (): number {
    const currentTime = Date.now();
    let elapsed = currentTime - referenceTime;
    if (elapsed < lastTime) {
      referenceTime -= lastTime - elapsed;
      elapsed = currentTime - referenceTime;
    }
    lastTime = elapsed;
    return elapsed;
  };
}

export default performanceNow;
