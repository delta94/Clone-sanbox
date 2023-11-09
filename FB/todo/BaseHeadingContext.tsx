__d("BaseHeadingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(1);
    g["default"] = b
}
), 98);

import React, { createContext } from "react";

const BaseHeadingContext = createContext<number>(1);

export default BaseHeadingContext;
