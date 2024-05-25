__d("BaseHeadingContextWrapper.react", ["BaseHeadingContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useContext;

    function a(a) {
        a = a.children;
        var b = j(c("BaseHeadingContext"));
        return i.jsx(c("BaseHeadingContext").Provider, {
            value: b + 1,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { FC, useContext } from 'react';
import { BaseHeadingContext } from './BaseHeadingContext'; // Assuming BaseHeadingContext import

interface BaseHeadingContextWrapperProps {
  children: React.ReactNode;
}

const BaseHeadingContextWrapper: FC<BaseHeadingContextWrapperProps> = ({ children }) => {
  const baseHeadingContextValue = useContext(BaseHeadingContext);
  
  return (
    <BaseHeadingContext.Provider value={baseHeadingContextValue + 1}>
      {children}
    </BaseHeadingContext.Provider>
  );
};

BaseHeadingContextWrapper.displayName = `${BaseHeadingContextWrapper.name} [from ${module.id}]`;

export default BaseHeadingContextWrapper;
