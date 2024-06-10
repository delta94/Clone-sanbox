__d(
  "JSResourceForInteraction",
  ["JSResource"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return c("JSResource").call(null, a);
    }
    b = a;
    g["default"] = b;
  },
  98
);

import JSResource from "JSResource";

function JSResourceForInteraction<T>(resourceName: string): T {
  return JSResource(resourceName);
}

export default JSResourceForInteraction;
