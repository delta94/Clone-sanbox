__d(
  "LSPlatformClientProviderWithDeferredLoadingStrategy.react",
  [
    "LSPlatformClientDeferred",
    "LSPlatformClientProvider.react",
    "PromiseAnnotate",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || d("react");
    function k() {
      var a = c("LSPlatformClientDeferred").load();
      c("promiseDone")(
        (i || (i = d("PromiseAnnotate"))).setDisplayName(
          a,
          "loadLSPlatformClient"
        )
      );
      return a;
    }
    function a(a) {
      var b = a.children,
        d = a.errorFallback;
      a = a.placeholder;
      return j.jsx(c("LSPlatformClientProvider.react"), {
        errorFallback: d,
        loadLSPlatformClient: k,
        placeholder: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { ReactNode } from "react";
import LSPlatformClientDeferred from "LSPlatformClientDeferred";
import LSPlatformClientProvider from "LSPlatformClientProvider.react";
import PromiseAnnotate from "PromiseAnnotate";
import promiseDone from "promiseDone";

type LSPlatformClientProviderWithDeferredLoadingStrategyProps = {
  children: ReactNode;
  errorFallback: ReactNode;
  placeholder: ReactNode;
};

const loadLSPlatformClient = (): Promise<any> => {
  const promise = LSPlatformClientDeferred.load();
  promiseDone(PromiseAnnotate.setDisplayName(promise, "loadLSPlatformClient"));
  return promise;
};

const LSPlatformClientProviderWithDeferredLoadingStrategy: React.FC<
  LSPlatformClientProviderWithDeferredLoadingStrategyProps
> = ({ children, errorFallback, placeholder }) => {
  return (
    <LSPlatformClientProvider
      errorFallback={errorFallback}
      loadLSPlatformClient={loadLSPlatformClient}
      placeholder={placeholder}
    >
      {children}
    </LSPlatformClientProvider>
  );
};

LSPlatformClientProviderWithDeferredLoadingStrategy.displayName =
  LSPlatformClientProviderWithDeferredLoadingStrategy.name + " [from 98]";

export default LSPlatformClientProviderWithDeferredLoadingStrategy;
