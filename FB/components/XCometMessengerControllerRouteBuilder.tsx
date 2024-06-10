__d(
  "XCometMessengerControllerRouteBuilder",
  ["jsExtraRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsExtraRouteBuilder")(
      "/messages/t/{?thread_key}/{?*extra_junk}/",
      Object.freeze({ initial_e2ee_toggle_position: !1 }),
      [
        "/messages/archived/new/",
        "/messages/filtered/",
        "/messages/filtered/new/",
        "/messages/filtered/t/{?thread_key}/",
        "/messages/gallery/",
        "/messages/groups/",
        "/messages/groups/new/",
        "/messages/groups/t/{?thread_key}/",
        "/messages/people/",
        "/messages/people/new/",
        "/messages/people/t/{?thread_key}/",
        "/messages/requests/new/",
        "/messages/new/",
        "/messages/read/",
        "/messages/search/",
        "/messages/search/t/{?thread_key}/",
        "/messages/search/new/",
      ],
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);

import jsExtraRouteBuilder from "jsExtraRouteBuilder";

const XCometMessengerControllerRouteBuilder = jsExtraRouteBuilder(
  "/messages/t/{?thread_key}/{?*extra_junk}/",
  Object.freeze({ initial_e2ee_toggle_position: false }),
  [
    "/messages/archived/new/",
    "/messages/filtered/",
    "/messages/filtered/new/",
    "/messages/filtered/t/{?thread_key}/",
    "/messages/gallery/",
    "/messages/groups/",
    "/messages/groups/new/",
    "/messages/groups/t/{?thread_key}/",
    "/messages/people/",
    "/messages/people/new/",
    "/messages/people/t/{?thread_key}/",
    "/messages/requests/new/",
    "/messages/new/",
    "/messages/read/",
    "/messages/search/",
    "/messages/search/t/{?thread_key}/",
    "/messages/search/new/",
  ],
  undefined
);

export default XCometMessengerControllerRouteBuilder;
