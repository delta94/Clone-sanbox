__d("FocusWithinHandler.react", ["FocusWithinHandlerNonStrictMode_DEPRECATED.react", "FocusWithinHandlerStrictMode.react", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        if (c("gkx")("3696"))
            return h.jsx(c("FocusWithinHandlerStrictMode.react"), babelHelpers["extends"]({}, a));
        else
            return h.jsx(c("FocusWithinHandlerNonStrictMode_DEPRECATED.react"), babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import FocusWithinHandlerNonStrictMode from './FocusWithinHandlerNonStrictMode_DEPRECATED'; // Adjust the import path
import FocusWithinHandlerStrictMode from './FocusWithinHandlerStrictMode'; // Adjust the import path
import { gkx } from 'gkx'; // Adjust the import path

interface FocusWithinHandlerProps {
  /* Define your props here */
}

const FocusWithinHandler: React.FC<FocusWithinHandlerProps> = (props) => {
  if (gkx('3696')) {
    return <FocusWithinHandlerStrictMode {...props} />;
  } else {
    return <FocusWithinHandlerNonStrictMode {...props} />;
  }
};

FocusWithinHandler.displayName = `${FocusWithinHandler.name} [from ${'your module ID'}]`;

export default FocusWithinHandler;
