__d(
  "MWMessageEditContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    c = h;
    var j = c.useContext,
      k = c.useMemo,
      l = c.useState,
      m = { setShowEdits: function () {}, showEdits: !1 },
      n = i.createContext();
    function a(a) {
      var b = a.children;
      a = a.value;
      a = a === void 0 ? m : a;
      a = l((a = a == null ? void 0 : a.showEdits) != null ? a : !1);
      var c = a[0],
        d = a[1];
      a = k(
        function () {
          return { setShowEdits: d, showEdits: c };
        },
        [c]
      );
      return i.jsx(n.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return j(n);
    }
    g.MWMessageEditContextProvider = a;
    g.useMWMessageEditContext = b;
  },
  98
);

import React, { useContext, useMemo, useState, ReactNode } from "react";

interface MWMessageEditContextProviderProps {
  children: ReactNode;
  value?: MWMessageEditContextValue;
}

interface MWMessageEditContextValue {
  setShowEdits: (value: boolean) => void;
  showEdits: boolean;
}

const defaultContextValue: MWMessageEditContextValue = {
  setShowEdits: () => {},
  showEdits: false,
};

const MWMessageEditContext =
  React.createContext<MWMessageEditContextValue>(defaultContextValue);

const MWMessageEditContextProvider: React.FC<
  MWMessageEditContextProviderProps
> = (props) => {
  const { children, value = defaultContextValue } = props;
  const [showEdits, setShowEdits] = useState<boolean>(value.showEdits ?? false);

  const contextValue = useMemo(
    () => ({
      setShowEdits,
      showEdits,
    }),
    [showEdits]
  );

  return (
    <MWMessageEditContext.Provider value={contextValue}>
      {children}
    </MWMessageEditContext.Provider>
  );
};

MWMessageEditContextProvider.displayName = "MWMessageEditContextProvider";

const useMWMessageEditContext = (): MWMessageEditContextValue => {
  return useContext(MWMessageEditContext);
};

export { MWMessageEditContextProvider, useMWMessageEditContext };
