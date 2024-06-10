__d(
  "getTextDirectionAttribute",
  ["cr:1080422"], // null
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var c = "auto";
      b("cr:1080422") != null &&
        window != null &&
        (c = b("cr:1080422").isDirectionRTL(a) ? "rtl" : "ltr");
      return c;
    }
    g["default"] = a;
  },
  98
);

function getTextDirectionAttribute(text: string): "auto" | "rtl" | "ltr" {
  let direction: "auto" | "rtl" | "ltr" = "auto";

  return direction;
}

export default getTextDirectionAttribute;
