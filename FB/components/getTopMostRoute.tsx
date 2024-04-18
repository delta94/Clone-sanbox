__d("getTopMostRoute", ["getTopMostRouteInfo"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return c("getTopMostRouteInfo")(a).route
    }
    g["default"] = a
}), 98);

import { getTopMostRouteInfo } from 'path-to-your-dependencies'; // Update path accordingly

interface RouteInfo {
  // Define the type of your route info if needed
  // Example: route: SomeType;
}

function getTopMostRoute(routerState: RouteInfo): RouteInfo {
  return getTopMostRouteInfo(routerState).route;
}

export default getTopMostRoute;
