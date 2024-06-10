__d(
  "useMWV2FocusRowAfterClosingPushView",
  [
    "MWV2MessageRowIsRowFocusedContext.react",
    "react",
    "useCometRouterState",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
      j = b.useLayoutEffect;
    function a() {
      var a = i(d("MWV2MessageRowIsRowFocusedContext.react").context),
        b = a.isDialogOpened,
        e = a.setIsDialogOpened,
        f = a.setFocused;
      a = c("useCometRouterState")();
      var g;
      if (a == null) g = 0;
      else {
        a = a.pushViewStack;
        g = a == null ? 0 : a.length;
      }
      var h = c("usePrevious")(g);
      j(
        function () {
          if (h != null) {
            b === !0 &&
              h > 0 &&
              g === 0 &&
              (e(function () {
                return !1;
              }),
              f(function () {
                return !0;
              }));
            return;
          }
        },
        [b, h, g]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);

import { useContext, useLayoutEffect } from "react";
import { context as MWV2MessageRowIsRowFocusedContext } from "MWV2MessageRowIsRowFocusedContext.react";
import { useCometRouterState } from "useCometRouterState";
import { usePrevious } from "usePrevious";

function useMWV2FocusRowAfterClosingPushView(): () => void {
  const { isDialogOpened, setIsDialogOpened, setFocused } = useContext(
    MWV2MessageRowIsRowFocusedContext
  );
  const { pushViewStack } = useCometRouterState();
  const prevStackLength = usePrevious(pushViewStack?.length) ?? 0;

  useLayoutEffect(() => {
    if (prevStackLength != null) {
      if (
        isDialogOpened &&
        prevStackLength > 0 &&
        pushViewStack?.length === 0
      ) {
        setIsDialogOpened(false);
        setFocused(true);
      }
    }
  }, [
    isDialogOpened,
    prevStackLength,
    pushViewStack,
    setIsDialogOpened,
    setFocused,
  ]);

  return setIsDialogOpened;
}

export default useMWV2FocusRowAfterClosingPushView;
