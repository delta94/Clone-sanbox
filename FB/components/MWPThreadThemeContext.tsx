__d(
  "MWPThreadThemeContext",
  ["defaultMWPThreadTheme", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = (h || d("react")).createContext;
    b = babelHelpers["extends"](
      {},
      d("defaultMWPThreadTheme").defaultThemeWithColors,
      { previewId: void 0, setPreviewId: c("emptyFunction") }
    );
    e = a(b);
    g.defaultContextValue = b;
    g.MWPThreadThemeContext = e;
  },
  98
);

import React, { createContext } from "react";
import { defaultThemeWithColors } from "defaultMWPThreadTheme";
import emptyFunction from "emptyFunction";

interface MWPThreadThemeContextProps {
  previewId?: string;
  setPreviewId: () => void;
  // Add other properties of defaultThemeWithColors if needed
  [key: string]: any;
}

const defaultContextValue: MWPThreadThemeContextProps = {
  ...defaultThemeWithColors,
  previewId: undefined,
  setPreviewId: emptyFunction,
};

const MWPThreadThemeContext =
  createContext<MWPThreadThemeContextProps>(defaultContextValue);

export { defaultContextValue, MWPThreadThemeContext };
