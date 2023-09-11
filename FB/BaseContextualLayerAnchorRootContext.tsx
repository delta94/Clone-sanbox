// __d("BaseContextualLayerAnchorRootContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     a = d("react");
//     b = a.createContext({
//         current: document.body
//     });
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';

const BaseContextualLayerAnchorRootContext = createContext({
  current: document.body,
});

export default BaseContextualLayerAnchorRootContext;
