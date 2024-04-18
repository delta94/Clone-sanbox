__d("WorkCometInteractiveElementContext.react", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        hovered: !1,
        focused: !1,
        pressed: !1
    });
    g["default"] = b
}), 98);


import { createContext } from 'react';

interface InteractiveElementContextValue {
  hovered: boolean;
  focused: boolean;
  pressed: boolean; 
}

const defaultValue: InteractiveElementContextValue = {
  hovered: false,
  focused: false,
  pressed: false
};

const InteractiveElementContext = createContext<InteractiveElementContextValue>(defaultValue);

export default InteractiveElementContext;