__d(
  "LSMediaUrlUtils",
  ["I64", "ServerTime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      if ((h || (h = d("I64"))).gt(a, (h || (h = d("I64"))).zero)) {
        var b = (h || (h = d("I64"))).of_float(
          d("ServerTime").getMillis() / 1e3
        );
        return h.lt(a, b);
      }
      return !1;
    }
    g.isTimestampExpired = a;
  },
  98
);

import { I64 } from "I64";
import { ServerTime } from "ServerTime";

// Function to check if a timestamp is expired
function isTimestampExpired(timestamp: I64): boolean {
  if (I64.gt(timestamp, I64.zero)) {
    const currentTime = I64.of_float(ServerTime.getMillis() / 1e3);
    return I64.lt(timestamp, currentTime);
  }
  return false;
}

export { isTimestampExpired };
