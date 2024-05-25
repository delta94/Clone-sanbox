__d("MWPVisibleMessageContext.react", ["emptyFunction", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    d = e.createContext;
    var j = e.useContext,
        k = e.useMemo,
        l = e.useState;
    e = {
        setVisibleMessage: c("emptyFunction"),
        visibleMessage: void 0
    };
    var m = d(e);

    function a(a) {
        a = a.children;
        var b = l(),
            c = b[0],
            d = b[1];
        b = k(function () {
            return {
                setVisibleMessage: d,
                visibleMessage: c
            }
        }, [c, d]);
        return i.jsx(m.Provider, {
            value: b,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b() {
        return j(m)
    }
    g.MWPVisibleMessageContext = m;
    g.MWPVisibleMessageContextProvider = a;
    g.useMWPVisibleMessageContext = b
}), 98);


import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

interface VisibleMessageContextType {
    setVisibleMessage: (message: string) => void;
    visibleMessage: string | undefined;
}

const defaultValue: VisibleMessageContextType = {
    setVisibleMessage: () => {},
    visibleMessage: undefined
};

const MWPVisibleMessageContext = createContext<VisibleMessageContextType>(defaultValue);

export const MWPVisibleMessageContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [visibleMessage, setVisibleMessage] = useState<string | undefined>();
    
    const contextValue = useMemo(() => ({
        setVisibleMessage,
        visibleMessage
    }), [visibleMessage, setVisibleMessage]);
    
    return (
        <MWPVisibleMessageContext.Provider value={contextValue}>
            {children}
        </MWPVisibleMessageContext.Provider>
    );
};

export const useMWPVisibleMessageContext = () => {
    return useContext(MWPVisibleMessageContext);
};
