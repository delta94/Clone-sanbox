__d("BaseThemeDisplayModeContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);


import { createContext } from 'react';

type DisplayMode = 'light' | 'dark';

const BaseThemeDisplayModeContext = createContext<DisplayMode | null>(null);

export default BaseThemeDisplayModeContext;