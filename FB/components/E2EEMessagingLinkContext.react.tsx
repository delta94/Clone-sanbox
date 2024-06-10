__d(
  "E2EEMessagingLinkContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    c = h;
    e = c.createContext;
    var j = c.useContext,
      k = e(!1);
    function a(a) {
      var b = a.children;
      a = a.isSecure;
      return i.jsx(k.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return j(k);
    }
    g.E2EEMessagingLinkProvider = a;
    g.useE2EEMessagingLink = b;
  },
  98
);

import React, { createContext, useContext, ReactNode } from "react";

interface E2EEMessagingLinkProviderProps {
  children: ReactNode;
  isSecure: boolean;
}

const E2EEMessagingLinkContext = createContext<boolean>(false);

function E2EEMessagingLinkProvider({
  children,
  isSecure,
}: E2EEMessagingLinkProviderProps): JSX.Element {
  return (
    <E2EEMessagingLinkContext.Provider value={isSecure}>
      {children}
    </E2EEMessagingLinkContext.Provider>
  );
}

E2EEMessagingLinkProvider.displayName = `${E2EEMessagingLinkProvider.name} [from E2EEMessagingLinkContext.react]`;

function useE2EEMessagingLink(): boolean {
  return useContext(E2EEMessagingLinkContext);
}

export { E2EEMessagingLinkProvider, useE2EEMessagingLink };
