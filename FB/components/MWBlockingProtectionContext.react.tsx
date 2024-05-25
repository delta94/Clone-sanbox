__d(
  "MWBlockingProtectionContext.react",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    e = b.createContext;
    var j = b.useContext,
      k = b.useMemo,
      l = b.useState,
      m = e({
        addMessageId: c("emptyFunction"),
        findMessageId: c("emptyFunction").thatReturnsFalse,
      });
    function a(a) {
      a = a.children;
      var b = l([]),
        c = b[0],
        d = b[1];
      b = k(
        function () {
          return {
            addMessageId: function (a) {
              d([a].concat(c));
            },
            findMessageId: function (a) {
              return (
                c.find(function (b) {
                  return b === a;
                }) != null
              );
            },
          };
        },
        [c, d]
      );
      return i.jsx(m.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = {
      Provider: a,
      useHook: function () {
        return j(m);
      },
    };
    g["default"] = d;
  },
  98
);

import React from "react";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import emptyFunction from "emptyFunction";

interface BlockingProtectionContextType {
  addMessageId: (id: string) => void;
  findMessageId: (id: string) => boolean;
}

const MWBlockingProtectionContext =
  createContext<BlockingProtectionContextType>({
    addMessageId: emptyFunction,
    findMessageId: emptyFunction.thatReturnsFalse,
  });

interface ProviderProps {
  children: ReactNode;
}

const MWBlockingProtectionProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [messageIds, setMessageIds] = useState<string[]>([]);

  const contextValue = useMemo(
    () => ({
      addMessageId: (id: string) => setMessageIds((prev) => [id, ...prev]),
      findMessageId: (id: string) => messageIds.includes(id),
    }),
    [messageIds, setMessageIds]
  );

  return (
    <MWBlockingProtectionContext.Provider value={contextValue}>
      {children}
    </MWBlockingProtectionContext.Provider>
  );
};

MWBlockingProtectionProvider.displayName = `${
  MWBlockingProtectionProvider.name
} [from ${import.meta.url}]`;

const useMWBlockingProtection = () => useContext(MWBlockingProtectionContext);

export default {
  Provider: MWBlockingProtectionProvider,
  useHook: useMWBlockingProtection,
};
