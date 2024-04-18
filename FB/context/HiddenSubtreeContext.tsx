// __d("HiddenSubtreeContext", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     a = h || d("react");
//     b = a.createContext({
//         backgrounded: !1,
//         hidden: !1,
//         hiddenOrBackgrounded: !1,
//         hiddenOrBackgrounded_FIXME: !1
//     });
//     g["default"] = b
// }), 98);


import React, { createContext } from 'react';

interface HiddenSubtreeContextValue {
  backgrounded: boolean;
  hidden: boolean;
  hiddenOrBackgrounded: boolean;
  hiddenOrBackgrounded_FIXME: boolean;
}

const defaultContextValue: HiddenSubtreeContextValue = {
  backgrounded: false,
  hidden: false,
  hiddenOrBackgrounded: false,
  hiddenOrBackgrounded_FIXME: false,
};

const HiddenSubtreeContext = createContext<HiddenSubtreeContextValue>(defaultContextValue);

export default HiddenSubtreeContext;
