__d(
  "useIsMountedRef",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useLayoutEffect,
      j = b.useRef;
    function a() {
      var a = j(!1);
      i(function () {
        a.current = !0;
        return function () {
          a.current = !1;
        };
      }, []);
      return a;
    }
    g["default"] = a;
  },
  98
);

import React, { useLayoutEffect, useRef } from "react";

const useIsMountedRef = (): React.MutableRefObject<boolean> => {
  const isMountedRef = useRef<boolean>(false);

  useLayoutEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};

export default useIsMountedRef;
