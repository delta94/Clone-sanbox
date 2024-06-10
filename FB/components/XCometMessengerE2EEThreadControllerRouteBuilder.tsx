__d(
  "XCometMessengerE2EEThreadControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/messages/e2ee/t/{?thread_key}/{?*extra_junk}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);

import jsRouteBuilder from "jsRouteBuilder";

const XCometMessengerE2EEThreadControllerRouteBuilder = jsRouteBuilder(
  "/messages/e2ee/t/{?thread_key}/{?*extra_junk}/",
  Object.freeze({}),
  undefined
);

export default XCometMessengerE2EEThreadControllerRouteBuilder;
