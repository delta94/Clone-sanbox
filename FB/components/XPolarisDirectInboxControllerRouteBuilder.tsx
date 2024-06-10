__d(
  "XPolarisDirectInboxControllerRouteBuilder",
  ["jsExtraRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsExtraRouteBuilder")(
      "/direct/inbox/",
      Object.freeze({
        initial_e2ee_toggle_position: !1,
        recurring_notification: !1,
      }),
      ["/direct/t/{?thread_key}/", "/direct/{?subpage}/{?folder}/"],
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);

import jsExtraRouteBuilder from "jsExtraRouteBuilder";

const XPolarisDirectInboxControllerRouteBuilder = jsExtraRouteBuilder(
  "/direct/inbox/",
  Object.freeze({
    initial_e2ee_toggle_position: false,
    recurring_notification: false,
  }),
  ["/direct/t/{?thread_key}/", "/direct/{?subpage}/{?folder}/"],
  undefined
);

export default XPolarisDirectInboxControllerRouteBuilder;
