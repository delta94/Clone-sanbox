__d("useShouldShowMessagingEntrypointInCometRoot", ["ShouldShowMessagingEntrypoint", "useCometRouterState", "useShouldRenderFullTopNav"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("useShouldRenderFullTopNav")(),
            d = c("useCometRouterState")(),
            e = d == null ? void 0 : d.main;
        d = d == null ? void 0 : d.pushViewStack;
        d = d && d.length > 0 ? d[d.length - 1] : e;
        return c("ShouldShowMessagingEntrypoint")(d == null ? void 0 : d.route, a, b)
    }
    g["default"] = a
}), 98);

import { useShouldRenderFullTopNav } from './useShouldRenderFullTopNav';
import { useCometRouterState } from './useCometRouterState';
import { ShouldShowMessagingEntrypoint } from './ShouldShowMessagingEntrypoint';

function useShouldShowMessagingEntrypointInCometRoot(entrypoint: string) {
  const shouldRenderFullTopNav = useShouldRenderFullTopNav();
  const routerState = useCometRouterState();
  let activeRoute;
  if (routerState?.main) {
    activeRoute = routerState.main; 
  } else if (routerState?.pushViewStack?.length > 0) {
    activeRoute = routerState.pushViewStack[routerState.pushViewStack.length - 1];
  }

  return ShouldShowMessagingEntrypoint(
    activeRoute?.route, 
    entrypoint,
    shouldRenderFullTopNav
  );
}

export default useShouldShowMessagingEntrypointInCometRoot;