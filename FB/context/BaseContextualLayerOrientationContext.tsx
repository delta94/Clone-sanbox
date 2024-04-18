// __d("BaseContextualLayerOrientationContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = {
//         align: "start",
//         position: "below"
//     };
//     c = a.createContext(b);
//     g["default"] = c
// }), 98);

import React, { createContext } from 'react';

interface BaseContextualLayerOrientation {
  align: string;
  position: string;
}

const defaultOrientation: BaseContextualLayerOrientation = { align: 'start', position: 'below' };

const BaseContextualLayerOrientationContext = createContext<BaseContextualLayerOrientation>(defaultOrientation);

export default BaseContextualLayerOrientationContext;
