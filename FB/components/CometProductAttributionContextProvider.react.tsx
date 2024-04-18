__d("CometProductAttributionContextProvider.react", ["CometProductAttributionContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
        k = b.useMemo;

    function a(a) {
        var b = a.children,
            d = a.value,
            e = j(c("CometProductAttributionContext"));
        a = k(function () {
            return e != null && e.length > 0 ? [].concat(e, [d]) : [d]
        }, [d, e]);
        return i.jsx(c("CometProductAttributionContext").Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { useContext, useMemo } from 'react';
import CometProductAttributionContext from 'CometProductAttributionContext';

const CometProductAttributionContextProvider = ({ children, value }) => {
    const existingContext = useContext(CometProductAttributionContext);
    const contextValue = useMemo(() => {
        return existingContext != null && existingContext.length > 0 ? [...existingContext, value] : [value]
    }, [value, existingContext]);

    return (
        <CometProductAttributionContext.Provider value={contextValue}>
            {children}
        </CometProductAttributionContext.Provider>
    );
}

export default CometProductAttributionContextProvider;