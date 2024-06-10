__d(
  "MWV2MessageActionsVisibility.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useRef;
    function a() {
      return i(function () {});
    }
    g.useStopHoveringRef = a;
  },
  98
);

import { useRef, MutableRefObject } from "react";

const useStopHoveringRef = (): MutableRefObject<() => void> => {
  return useRef(() => {});
};

export { useStopHoveringRef };
