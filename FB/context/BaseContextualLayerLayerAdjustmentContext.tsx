// __d("BaseContextualLayerLayerAdjustmentContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext(null);
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';

interface LayerAdjustment {
  // Define the shape of your layer adjustment object here
}

const BaseContextualLayerLayerAdjustmentContext = createContext<LayerAdjustment | null>(null);

export default BaseContextualLayerLayerAdjustmentContext;