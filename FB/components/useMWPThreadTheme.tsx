__d(
  "useMWPThreadTheme",
  ["MWPThreadThemeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h || d("react")).useContext;
    function a() {
      return i(d("MWPThreadThemeContext").MWPThreadThemeContext);
    }
    g["default"] = a;
  },
  98
);

import { useContext } from "react";
import { MWPThreadThemeContext } from "MWPThreadThemeContext";

const useMWPThreadTheme = () => {
  return useContext(MWPThreadThemeContext);
};

export default useMWPThreadTheme;
