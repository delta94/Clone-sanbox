__d(
  "NetworkStatus",
  ["NetworkStatusImpl", "NetworkStatusSham", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a =
      (c("gkx")("7742") || c("gkx")("20935")) && c("gkx")("20936")
        ? d("NetworkStatusImpl")
        : d("NetworkStatusSham");
    b = a;
    g["default"] = b;
  },
  98
);

import NetworkStatusImpl from "NetworkStatusImpl";
import NetworkStatusSham from "NetworkStatusSham";
import gkx from "gkx";

const NetworkStatus =
  (gkx("7742") || gkx("20935")) && gkx("20936")
    ? NetworkStatusImpl
    : NetworkStatusSham;

export default NetworkStatus;
