// __d("CometContainerPressableContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     a = d("react");
//     b = a.createContext(null);
//     g["default"] = b
// }), 98);


import React from "react";

interface CometContainerPressableProp {}

const CometContainerPressableContext = React.createContext<
  CometContainerPressableProp | undefined
>(undefined);

export default CometContainerPressableContext;
export { CometContainerPressableContext };
