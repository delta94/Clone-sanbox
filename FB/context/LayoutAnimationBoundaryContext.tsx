// __d("LayoutAnimationBoundaryContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext(null);
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';

interface LayoutAnimationBoundaryContextValue {
}

const LayoutAnimationBoundaryContext = createContext<LayoutAnimationBoundaryContextValue | null>(null);

export default LayoutAnimationBoundaryContext;
