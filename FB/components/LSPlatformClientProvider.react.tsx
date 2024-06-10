__d(
  "LSPlatformClientProvider.react",
  [
    "CometPlaceholder.react",
    "LSPlatformClientInstances",
    "LSPlatformClientProviderAddons.react",
    "LSPlatformClientProviderUtils",
    "LSPlatformConfigContext",
    "LSPlatformErrorsCatcher.react",
    "MAWCondWrapper.react",
    "ReStoreProvider.react",
    "react",
    "suspendOrThrowIfUsedInSSR",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = i || d("react");
    function l(a) {
      var b = d("LSPlatformConfigContext").useOrSuspendLSPlatformConfig();
      return c("LSPlatformClientInstances").getOrInit(b, a, { fromReact: !0 });
    }
    function a(a) {
      var b = a.children;
      a = a.loadLSPlatformClient;
      a = l(a);
      return k.jsx((j || (j = d("ReStoreProvider.react"))).ReStoreProvider, {
        db: a.db,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      a = a.loadLSPlatformClient;
      l(a);
      return null;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.children;
      a = a.loadLSPlatformClient;
      (h || (h = c("suspendOrThrowIfUsedInSSR")))(
        "Messenger is not enabled for SSR"
      );
      return k.jsxs(k.Fragment, {
        children: [
          k.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: k.jsx(m, { loadLSPlatformClient: a }),
          }),
          b,
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    var n = d(
      "LSPlatformClientProviderUtils"
    ).shouldInitialiseClientConcurrently()
      ? b
      : a;
    function e(a) {
      var b = a.children,
        d = a.errorFallback,
        e = a.loadLSPlatformClient;
      a = a.placeholder;
      return k.jsx(c("LSPlatformErrorsCatcher.react"), {
        fallback: d,
        children: k.jsx(c("MAWCondWrapper.react"), {
          children: k.jsx(c("CometPlaceholder.react"), {
            fallback: a,
            children: k.jsxs(n, {
              loadLSPlatformClient: e,
              children: [
                k.jsx(c("LSPlatformClientProviderAddons.react"), {}),
                b,
              ],
            }),
          }),
        }),
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g["default"] = e;
  },
  98
);

import React, { Fragment } from "react";
import { CometPlaceholder } from "CometPlaceholder.react";
import { LSPlatformClientInstances } from "LSPlatformClientInstances";
import { LSPlatformClientProviderAddons } from "LSPlatformClientProviderAddons.react";
import { LSPlatformClientProviderUtils } from "LSPlatformClientProviderUtils";
import { LSPlatformConfigContext } from "LSPlatformConfigContext";
import { LSPlatformErrorsCatcher } from "LSPlatformErrorsCatcher.react";
import { MAWCondWrapper } from "MAWCondWrapper.react";
import { ReStoreProvider } from "ReStoreProvider.react";
import { suspendOrThrowIfUsedInSSR } from "suspendOrThrowIfUsedInSSR";

type Props = {
  children: React.ReactNode;
  errorFallback: React.ReactNode;
  loadLSPlatformClient: () => any;
  placeholder: React.ReactNode;
};

const useOrSuspendLSPlatformConfig = () => {
  return React.useContext(LSPlatformConfigContext);
};

const getOrInit = (config: any, loadClient: () => any) => {
  return LSPlatformClientInstances.getOrInit(config, loadClient, {
    fromReact: true,
  });
};

const LSPlatformClientProvider: React.FC<Props> = ({
  children,
  loadLSPlatformClient,
}) => {
  const config = useOrSuspendLSPlatformConfig();
  const client = getOrInit(config, loadLSPlatformClient);

  return <ReStoreProvider db={client.db}>{children}</ReStoreProvider>;
};

LSPlatformClientProvider.displayName = "LSPlatformClientProvider";

const InitClient: React.FC<{ loadLSPlatformClient: () => any }> = ({
  loadLSPlatformClient,
}) => {
  const config = useOrSuspendLSPlatformConfig();
  getOrInit(config, loadLSPlatformClient);
  return null;
};

InitClient.displayName = "InitClient";

const ClientProviderSSRWrapper: React.FC<{
  loadLSPlatformClient: () => any;
}> = ({ children, loadLSPlatformClient }) => {
  suspendOrThrowIfUsedInSSR("Messenger is not enabled for SSR");

  return (
    <Fragment>
      <CometPlaceholder fallback={null}>
        <InitClient loadLSPlatformClient={loadLSPlatformClient} />
      </CometPlaceholder>
      {children}
    </Fragment>
  );
};

ClientProviderSSRWrapper.displayName = "ClientProviderSSRWrapper";

const shouldInitialiseClientConcurrently =
  LSPlatformClientProviderUtils.shouldInitialiseClientConcurrently();
const ChosenProvider = shouldInitialiseClientConcurrently
  ? ClientProviderSSRWrapper
  : LSPlatformClientProvider;

const LSPlatformClientProviderWithFallback: React.FC<Props> = ({
  children,
  errorFallback,
  loadLSPlatformClient,
  placeholder,
}) => {
  return (
    <LSPlatformErrorsCatcher fallback={errorFallback}>
      <MAWCondWrapper>
        <CometPlaceholder fallback={placeholder}>
          <ChosenProvider loadLSPlatformClient={loadLSPlatformClient}>
            <LSPlatformClientProviderAddons />
            {children}
          </ChosenProvider>
        </CometPlaceholder>
      </MAWCondWrapper>
    </LSPlatformErrorsCatcher>
  );
};

LSPlatformClientProviderWithFallback.displayName =
  "LSPlatformClientProviderWithFallback";

export default LSPlatformClientProviderWithFallback;
