__d(
  "MWV2MessageRowIsRowFocusedContext.react",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || (h = d("react"));
    b = h;
    e = b.createContext;
    var i = b.createElement;
    d = {
      isDialogOpened: !1,
      setFocused: c("emptyFunction"),
      setIsDialogOpened: c("emptyFunction"),
    };
    var j = e(d);
    function a(a) {
      var b = a.children;
      a = a.value;
      return i(j.Provider, { children: b, value: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.context = j;
    g.MWV2MessageRowIsRowFocusedContextProvider = a;
  },
  98
);

import React, { createContext, ReactNode, FC } from "react";
import emptyFunction from "emptyFunction";

type ContextType = {
  isDialogOpened: boolean;
  setFocused: () => void;
  setIsDialogOpened: () => void;
};

const defaultValue: ContextType = {
  isDialogOpened: false,
  setFocused: emptyFunction,
  setIsDialogOpened: emptyFunction,
};

const MWV2MessageRowIsRowFocusedContext =
  createContext<ContextType>(defaultValue);

type ProviderProps = {
  value: ContextType;
  children: ReactNode;
};

const MWV2MessageRowIsRowFocusedContextProvider: FC<ProviderProps> = ({
  value,
  children,
}) => {
  return (
    <MWV2MessageRowIsRowFocusedContext.Provider value={value}>
      {children}
    </MWV2MessageRowIsRowFocusedContext.Provider>
  );
};

MWV2MessageRowIsRowFocusedContextProvider.displayName = `${MWV2MessageRowIsRowFocusedContextProvider.name} [from 98]`;

export {
  MWV2MessageRowIsRowFocusedContext,
  MWV2MessageRowIsRowFocusedContextProvider,
};
