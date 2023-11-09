__d("BaseTextContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    c = h;
    var j = c.useContext
      , k = c.useMemo
      , l = i.createContext(null);
    function a(a) {
        var b = a.children
          , c = a.nested;
        a = k(function() {
            return {
                nested: c
            }
        }, [c]);
        return i.jsx(l.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
        return j(l)
    }
    g.BaseTextContextProvider = a;
    g.useBaseTextContext = b
}
), 98);


import React, { createContext, useContext, useMemo, FC } from "react";

type BaseTextContextValue = {
  nested?: boolean;
};

const BaseTextContext = createContext<BaseTextContextValue | null>(null);

type BaseTextContextProviderProps = {
  children?: React.ReactNode;
  nested?: boolean;
};

export const BaseTextContextProvider: FC<BaseTextContextProviderProps> = ({ children, nested }) => {
  const contextValue = useMemo(() => ({ nested }), [nested]);

  return <BaseTextContext.Provider value={contextValue}>{children}</BaseTextContext.Provider>;
};

export const useBaseTextContext = (): BaseTextContextValue | null => {
  return useContext(BaseTextContext);
};
