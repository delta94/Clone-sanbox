__d(
  "MWMessageDisplayContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useContext,
      k = i.createContext();
    function a(a) {
      var b = a.children;
      a = a.value;
      a = a === void 0 ? "standard" : a;
      return i.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return j(k);
    }
    g.MWMessageDisplayContextProvider = a;
    g.useMWMessageDisplayContext = b;
  },
  98
);

import React, { useContext, createContext, ReactNode } from "react";

interface MWMessageDisplayContextProviderProps {
  children: ReactNode;
  value?: string;
}

const MWMessageDisplayContext = createContext<string | undefined>(undefined);

const MWMessageDisplayContextProvider: React.FC<
  MWMessageDisplayContextProviderProps
> = (props) => {
  const { children, value = "standard" } = props;
  return (
    <MWMessageDisplayContext.Provider value={value}>
      {children}
    </MWMessageDisplayContext.Provider>
  );
};

MWMessageDisplayContextProvider.displayName = "MWMessageDisplayContextProvider";

const useMWMessageDisplayContext = (): string | undefined => {
  return useContext(MWMessageDisplayContext);
};

export { MWMessageDisplayContextProvider, useMWMessageDisplayContext };
