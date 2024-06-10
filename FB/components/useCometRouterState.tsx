__d(
  "useCometRouterState",
  ["CometRouterStateContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useContext;

    function a() {
      return i(c("CometRouterStateContext"));
    }
    g["default"] = a;
  },
  98
);

import { useContext } from "react";
import { CometRouterStateContext } from "path-to-your-dependencies"; // Update path accordingly

interface RouterState {}

function useCometRouterState(): RouterState {
  return useContext(CometRouterStateContext);
}

export default useCometRouterState;
