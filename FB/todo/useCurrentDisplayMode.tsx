__d("useCurrentDisplayMode", ["BaseThemeDisplayModeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext, j = "light";
    function a() {
        var a;
        return (a = i(c("BaseThemeDisplayModeContext"))) != null ? a : j
    }
    g["default"] = a
}
), 98);


import { useContext } from 'react';
import { BaseThemeDisplayModeContext } from 'BaseThemeDisplayModeContext';

const DEFAULT_MODE = 'light';

function useCurrentDisplayMode() {

  const context = useContext(BaseThemeDisplayModeContext);

  return context ?? DEFAULT_MODE;

}

export default useCurrentDisplayMode;