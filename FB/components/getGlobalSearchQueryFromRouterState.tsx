__d("getGlobalSearchQueryFromRouterState", ["getSearchQueryFromRouterState", "getTopMostRouteInfo", "isSearchCometExploreTracePolicy", "isSearchCometGlobalResultPageTracePolicy"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("getTopMostRouteInfo")(a);
        b = b.route.tracePolicy;
        return b == null || !c("isSearchCometGlobalResultPageTracePolicy")(b) && !c("isSearchCometExploreTracePolicy")(b) ? null : c("getSearchQueryFromRouterState")(a)
    }
    g["default"] = a
}), 98);

import { getSearchQueryFromRouterState, getTopMostRouteInfo, isSearchCometExploreTracePolicy, isSearchCometGlobalResultPageTracePolicy } from 'path-to-your-dependencies'; // Update path accordingly

interface RouterState {
  // Define the type of your router state if needed
  // Example: route: { tracePolicy?: string };
}

function getGlobalSearchQueryFromRouterState(routerState: RouterState): string | null {
  const topMostRouteInfo = getTopMostRouteInfo(routerState);
  const tracePolicy = topMostRouteInfo.route.tracePolicy;

  return (
    tracePolicy == null ||
    (!isSearchCometGlobalResultPageTracePolicy(tracePolicy) &&
      !isSearchCometExploreTracePolicy(tracePolicy))
      ? null
      : getSearchQueryFromRouterState(routerState)
  );
}

export default getGlobalSearchQueryFromRouterState;
