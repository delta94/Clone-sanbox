__d("VirtualizationContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext();
    g["default"] = b
}), 98);


import React from "react";

const VirtualizationContext = React.createContext<{
  createFlag?: (key: string, obj: any) => () => void;
  createPin?: (obj: any) => () => void;
  hasFlag?: (key: string) => boolean;
  hasPin?: () => boolean;
}>();

export default VirtualizationContext;