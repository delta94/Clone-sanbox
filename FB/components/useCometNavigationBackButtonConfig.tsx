__d("useCometNavigationBackButtonConfig", ["CometRouterPushViewStackContext", "react", "useCometRouterDispatcher", "usePrevious"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useContext;

    function a() {
        var a = c("useCometRouterDispatcher")(),
            b = i(function () {
                a != null && a.goBack()
            }, [a]),
            d = i(function () {
                a != null && a.popPushView()
            }, [a]),
            e = j(c("CometRouterPushViewStackContext")),
            f = e != null && e.length > 0;
        e = e != null ? e[e.length - 1] : null;
        var g = c("usePrevious")(e);
        f = f;
        g = (e = e == null ? g == null ? void 0 : (g = g.route) == null ? void 0 : g.useCloseButton : e == null ? void 0 : (g = e.route) == null ? void 0 : g.useCloseButton) != null ? e : !1;
        return {
            onPressBackButton: g ? d : b,
            shouldUseCloseButton: g,
            showBackButton: f
        }
    }
    g["default"] = a
}), 98);


import { useCallback, useContext } from 'react';
import { CometRouterPushViewStackContext, useCometRouterDispatcher, usePrevious } from 'path-to-your-dependencies'; // Update path accordingly

interface NavigationBackButtonConfig {
  onPressBackButton: () => void;
  shouldUseCloseButton: boolean;
  showBackButton: boolean;
}

function useCometNavigationBackButtonConfig(): NavigationBackButtonConfig {
  const routerDispatcher = useCometRouterDispatcher();
  const onPressBackButton = useCallback(() => {
    if (routerDispatcher != null) {
      routerDispatcher.goBack();
    }
  }, [routerDispatcher]);

  const onPressCloseButton = useCallback(() => {
    if (routerDispatcher != null) {
      routerDispatcher.popPushView();
    }
  }, [routerDispatcher]);

  const pushViewStack = useContext(CometRouterPushViewStackContext);
  const showBackButton = pushViewStack != null && pushViewStack.length > 0;
  const topRoute = pushViewStack != null ? pushViewStack[pushViewStack.length - 1] : null;
  const prevTopRoute = usePrevious(topRoute);

  const shouldUseCloseButton =
    topRoute != null
      ? topRoute.route?.useCloseButton ?? false
      : prevTopRoute != null
      ? prevTopRoute.route?.useCloseButton ?? false
      : false;

  return {
    onPressBackButton: shouldUseCloseButton ? onPressCloseButton : onPressBackButton,
    shouldUseCloseButton,
    showBackButton,
  };
}

export default useCometNavigationBackButtonConfig;
