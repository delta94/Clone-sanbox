__d(
  "MWV2Chat.react",
  [
    "CometErrorBoundary.react",
    "FBLogger",
    "JSResourceForInteraction",
    "LSPlatformClientProviderWithDeferredLoadingStrategy.react",
    "LSPlatformConfigContext",
    "LSPlatformMessengerConfig",
    "MWChatDisabled.react",
    "MWChatInteraction",
    "MWXLazyPopoverTrigger.react",
    "cr:11569", //MWV2ChatContainer
    "gkx",
    "killswitch",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useLayoutEffect;
    function k(a) {
      var b = c("FBLogger")("messenger_browser_clients");
      a != null && (b = b.catching(a));
      b.warn("Error loading MWV2Chat");
    }
    var l = c("JSResourceForInteraction")(
        "MWChatErrorStatePopover.react"
      ).__setRef("MWV2Chat.react"),
      m = function (a) {
        return i.jsx(c("MWXLazyPopoverTrigger.react"), {
          align: "end",
          popoverProps: { error: a },
          popoverResource: l,
          position: "above",
          visibleOnLoad: !0,
          children: function (a, b) {
            return i.jsx(c("MWChatDisabled.react"), {
              contextRef: a,
              onPress: b,
            });
          },
        });
      };
    function a() {
      j(function () {
        d("MWChatInteraction").addAutoChatTabMarkerPoint("mwv2_chat_rendered");
      }, []);
      return i.jsx(c("CometErrorBoundary.react"), {
        fallback: m,
        onError: k,
        children:
          !c("gkx")("22788") ||
          c("killswitch")("COMET_CHAT") ||
          !c("gkx")("22789")
            ? i.jsx(c("MWChatDisabled.react"), {})
            : b("cr:11569") &&
              i.jsx(d("LSPlatformConfigContext").LSPlatformConfigProvider, {
                config: d("LSPlatformMessengerConfig").configEagerlyLoaded,
                children: i.jsx(
                  c(
                    "LSPlatformClientProviderWithDeferredLoadingStrategy.react"
                  ),
                  { errorFallback: m, children: i.jsx(b("cr:11569"), {}) }
                ),
              }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import {
  CometErrorBoundary,
  FBLogger,
  JSResourceForInteraction,
  LSPlatformClientProviderWithDeferredLoadingStrategy,
  LSPlatformConfigContext,
  LSPlatformMessengerConfig,
  MWChatDisabled,
  MWChatInteraction,
  MWXLazyPopoverTrigger,
  MWV2ChatContainer,
  gkx,
  killswitch,
} from "some-library";
import React, { useLayoutEffect } from "react";

const MWChatErrorStatePopover = JSResourceForInteraction(
  "MWChatErrorStatePopover.react"
).__setRef("MWV2Chat.react");

const logError = (error: Error | null) => {
  const logger = FBLogger("messenger_browser_clients");
  if (error != null) {
    logger.catching(error);
  }
  logger.warn("Error loading MWV2Chat");
};

const renderFallback = (error: Error | null) => (
  <MWXLazyPopoverTrigger
    align="end"
    popoverProps={{ error }}
    popoverResource={MWChatErrorStatePopover}
    position="above"
    visibleOnLoad
  >
    {(contextRef, onPress) => (
      <MWChatDisabled contextRef={contextRef} onPress={onPress} />
    )}
  </MWXLazyPopoverTrigger>
);

const MWV2Chat: React.FC = () => {
  useLayoutEffect(() => {
    MWChatInteraction.addAutoChatTabMarkerPoint("mwv2_chat_rendered");
  }, []);

  const shouldRenderChat =
    gkx("22788") && !killswitch("COMET_CHAT") && gkx("22789");

  return (
    <CometErrorBoundary fallback={renderFallback} onError={logError}>
      {shouldRenderChat && MWV2ChatContainer ? (
        <LSPlatformConfigContext.LSPlatformConfigProvider
          config={LSPlatformMessengerConfig.configEagerlyLoaded}
        >
          <LSPlatformClientProviderWithDeferredLoadingStrategy
            errorFallback={renderFallback}
          >
            <MWV2ChatContainer />
          </LSPlatformClientProviderWithDeferredLoadingStrategy>
        </LSPlatformConfigContext.LSPlatformConfigProvider>
      ) : (
        <MWChatDisabled />
      )}
    </CometErrorBoundary>
  );
};

MWV2Chat.displayName = "MWV2Chat [from 98]";

export default MWV2Chat;
