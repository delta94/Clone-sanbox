// __d("CometFocusGroupContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     a = d("react");
//     b = a.createContext({
//         FocusContainer: null,
//         FocusItem: null
//     });
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';

const CometFocusGroupContext = createContext({
  FocusContainer: null,
  FocusItem: null,
});

export default CometFocusGroupContext;
