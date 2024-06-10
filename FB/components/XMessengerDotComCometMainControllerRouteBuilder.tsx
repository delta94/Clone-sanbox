__d(
  "XMessengerDotComCometMainControllerRouteBuilder",
  ["jsExtraRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsExtraRouteBuilder")(
      "/t/{thread_key}/",
      Object.freeze({
        initial_e2ee_toggle_position: !1,
        recurring_notification: !1,
      }),
      [
        "/archived/new/",
        "/filtered/",
        "/filtered/new/",
        "/filtered/t/{?thread_key}/",
        "/people/",
        "/people/new/",
        "/people/t/{?thread_key}/",
        "/requests/new/",
        "/new/",
        "/folders/{folder_key}/t/{?thread_key}/",
        "/gallery/",
      ],
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);

import jsExtraRouteBuilder from "jsExtraRouteBuilder";

const XMessengerDotComCometMainControllerRouteBuilder = jsExtraRouteBuilder(
  "/t/{thread_key}/",
  Object.freeze({
    initial_e2ee_toggle_position: false,
    recurring_notification: false,
  }),
  [
    "/archived/new/",
    "/filtered/",
    "/filtered/new/",
    "/filtered/t/{?thread_key}/",
    "/people/",
    "/people/new/",
    "/people/t/{?thread_key}/",
    "/requests/new/",
    "/new/",
    "/folders/{folder_key}/t/{?thread_key}/",
    "/gallery/",
  ],
  undefined
);

export default XMessengerDotComCometMainControllerRouteBuilder;
