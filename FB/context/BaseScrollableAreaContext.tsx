__d("BaseScrollableAreaContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);


import React, { createContext } from 'react';

const BaseScrollableAreaContext = createContext<any[]>([]);

export default BaseScrollableAreaContext;