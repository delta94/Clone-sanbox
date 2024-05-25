__d(
  "MWLSThreadDisplayContext",
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
      return i.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return j(k);
    }
    g.MWLSThreadDisplayContextProvider = a;
    g.useMWLSThreadDisplayContext = b;
  },
  98
);

import React, { createContext, useContext, ReactNode } from "react";

type ThreadDisplayContextType = string | undefined;

const ThreadDisplayContext = createContext<ThreadDisplayContextType>(undefined);

interface MWLSThreadDisplayContextProviderProps {
  children: ReactNode;
  value: ThreadDisplayContextType;
}

const MWLSThreadDisplayContextProvider: React.FC<
  MWLSThreadDisplayContextProviderProps
> = ({ children, value }) => {
  return (
    <ThreadDisplayContext.Provider value={value}>
      {children}
    </ThreadDisplayContext.Provider>
  );
};

MWLSThreadDisplayContextProvider.displayName =
  "MWLSThreadDisplayContextProvider";

const useMWLSThreadDisplayContext = (): ThreadDisplayContextType => {
  return useContext(ThreadDisplayContext);
};

export { MWLSThreadDisplayContextProvider, useMWLSThreadDisplayContext };
