// __d("useIsCalledDuringRender", ["FBLogger", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     b = h || (h = d("react"));
//     e = h;
//     var i = e.useCallback,
//         j = e.useRef;

//     function a() {
//         var a = j(void 0);
//         return i(function () {
//             c("FBLogger")("comet_ui").blameToPreviousFrame().warn("useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production.");
//             return !1
//         }, [])
//     }
//     g["default"] = a
// }), 98);


import React, { useCallback, useRef } from 'react';

const useIsCalledDuringRender = (): (() => boolean) => {
  const ref = useRef<void>(undefined);
  return useCallback(() => {
    console.warn("useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production.");
    return false;
  }, []);
};

export default useIsCalledDuringRender;
