// __d("CometHovercardSettingsContext", ["emptyFunction", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     a = d("react");
//     b = a.createContext({
//         hovercardInteractionPreference: 2,
//         setHovercardInteractionPreference: c("emptyFunction")
//     });
//     g["default"] = b
// }), 98);

import React, { createContext } from 'react';
import { emptyFunction } from 'emptyFunction';

const CometHovercardSettingsContext = createContext({
  hovercardInteractionPreference: 2,
  setHovercardInteractionPreference: emptyFunction,
});

export default CometHovercardSettingsContext;
