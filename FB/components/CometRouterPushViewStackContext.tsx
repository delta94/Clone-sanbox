// __d("CometRouterPushViewStackContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext();
//     g["default"] = b
// }), 98);

import { createContext } from 'react';

interface CometRouterPushViewStackContextValue {
  // Add properties for context value here  
}

const CometRouterPushViewStackContext = createContext<CometRouterPushViewStackContextValue>({});

export default CometRouterPushViewStackContext;
