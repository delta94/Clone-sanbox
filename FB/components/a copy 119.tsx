__d(
  "useShouldRenderFullTopNav",
  ["CometRouterRouteTopNavTypeContext", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useContext,
      j = c("gkx")("1266082");
    function a() {
      var a = i(c("CometRouterRouteTopNavTypeContext"));
      return (a === "default" || a === "hidden_for_comet_on_mobile") && j;
    }
    g["default"] = a;
  },
  98
);
