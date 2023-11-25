__d("BaseThemeConfigContext", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = {
        darkClassName: null,
        darkVariables: {},
        lightClassName: null,
        lightVariables: {}
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);

import { createContext } from 'react'; 

export interface BaseThemeConfig {
  darkClassName: string | null;
  darkVariables: Record<string, string>;
  lightClassName: string | null;
  lightVariables: Record<string, string>;
}

const defaultConfig: BaseThemeConfig = {
  darkClassName: null,
  darkVariables: {},
  lightClassName: null,
  lightVariables: {}  
};

const BaseThemeConfigContext = createContext<BaseThemeConfig>(defaultConfig);

export default BaseThemeConfigContext;