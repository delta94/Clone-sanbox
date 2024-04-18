__d("getTopMostRouteInfo", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.hosted,
            c = a.main;
        a = a.pushViewStack;
        if (a && a.length > 0) {
            a = a[a.length - 1];
            a.depth;
            a.key;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["depth", "key"]);
            return a
        }
        return b ? b : c
    }
    f["default"] = a
}), 66);

interface RouteInfo {
    hosted?: any; // Define the type of your 'hosted' route if needed
    main?: any; // Define the type of your 'main' route if needed
    pushViewStack?: any[]; // Define the type of your 'pushViewStack' array if needed
  }
  
  function getTopMostRouteInfo(routeInfo: RouteInfo): any {
    const { hosted, main, pushViewStack } = routeInfo;
  
    if (pushViewStack && pushViewStack.length > 0) {
      const topRoute = pushViewStack[pushViewStack.length - 1];
      const { depth, key, ...rest } = topRoute;
      return rest;
    }
  
    return hosted ? hosted : main;
  }
  
  export default getTopMostRouteInfo;
  