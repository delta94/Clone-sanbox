// __d("BaseContextualLayerContextSizeContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext(null);
//     g["default"] = b
// }), 98);


import React, { createContext } from 'react';

interface ContextSize {
  // Define the shape of your context size object here
}

const BaseContextualLayerContextSizeContext = createContext<ContextSize | null>(null);

export default BaseContextualLayerContextSizeContext;