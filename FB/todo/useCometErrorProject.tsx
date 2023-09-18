__d("useCometErrorProject", ["CometErrorProjectContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
        return h(c("CometErrorProjectContext"))
    }
    g["default"] = a
}
), 98);

import React, { useContext } from 'react';

// Define the type for the context value
type CometErrorProjectContextType = /* Define your context value type here */ any;

// Define the context (Replace with your actual context import)
const CometErrorProjectContext = React.createContext<CometErrorProjectContextType | undefined>(undefined);

// Create a function to use the CometErrorProjectContext
function useCometErrorProject(): CometErrorProjectContextType | undefined {
  return useContext(CometErrorProjectContext);
}

export default useCometErrorProject;
