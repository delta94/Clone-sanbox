__d(
  "FDSDialogLoadingStateContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(!1);
    g["default"] = b;
  },
  98
);

import React from "react";

const FDSDialogLoadingStateContext = React.createContext<boolean>(false);

export default FDSDialogLoadingStateContext;
