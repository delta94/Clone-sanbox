// __d("buildCometRootComponent", ["Actor", "CometBackupPlaceholder.react", "CometDOMOnlyBoundary.react", "CometErrorBoundary.react", "CometHeroInteractionWithDiv.react", "CometInteractionTracingQPLConfigContext", "CometPlatformAppWrapper.react", "CurrentUser", "ExecutionEnvironment", "HelpCenterCookiesConsentedProvider", "RelayEnvironmentFactoryProvider", "react"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     function a(a, b, e) {
//         var f = e.TopLevelWrapper
//           , g = f === void 0 ? h.Fragment : f;
//         f = e.CometRouterStateProvider;
//         var i = e.OtherRootComponents
//           , j = i.CookieConsentDialog
//           , k = i.DebugOwlDisplay
//           , l = i.KeyCommandNub
//           , m = i.ProductAttributionDebugger
//           , n = i.Redblock;
//         i = e.UIStateProviders;
//         e = b.initialActorID;
//         var o = e === void 0 ? c("CurrentUser").getID() : e
//           , p = b.initialLoadTraceId
//           , q = b.relayEnvironmentFactory;
//         e = b.interactionQPLEvents;
//         var r = e === void 0 ? d("CometInteractionTracingQPLConfigContext").defaultInteractionQPLEvents : e
//           , s = b.disableTimeSpentLogging;
//         b = (e = i) != null ? e : {};
//         i = b.DarkModeStateProvider;
//         e = b.DensityModeStateProvider;
//         var t = b.KeyboardSettingsStateProvider
//           , u = (b = e) != null ? b : h.Fragment
//           , v = (e = i) != null ? e : h.Fragment
//           , w = (b = f) != null ? b : h.Fragment;
//         return function() {
//             return h.jsx(g, {
//                 children: h.jsx(d("CometInteractionTracingQPLConfigContext").CometInteractionTracingQPLConfigContextProvider, {
//                     dialogTraceQPLEvent: r.dialogTraceQPLEvent,
//                     popoverTraceQPLEvent: r.popoverTraceQPLEvent,
//                     children: h.jsx(c("CometPlatformAppWrapper.react"), {
//                         KeyboardSettingsStateProvider: t,
//                         disableTimeSpentLogging: s,
//                         children: h.jsx(d("RelayEnvironmentFactoryProvider").RelayEnvironmentFactoryProvider, {
//                             factory: q,
//                             children: h.jsx(w, {
//                                 children: h.jsx(v, {
//                                     children: h.jsxs(u, {
//                                         children: [h.jsx(c("CometBackupPlaceholder.react"), {
//                                             fallback: null,
//                                             children: h.jsxs(d("Actor").ActorProvider, {
//                                                 initialActorID: o,
//                                                 readonly: !0,
//                                                 children: [h.jsxs(c("CometHeroInteractionWithDiv.react"), {
//                                                     interactionDesc: "initial load",
//                                                     interactionUUID: p,
//                                                     children: [a, j ? h.jsx(c("CometErrorBoundary.react"), {
//                                                         children: h.jsx(d("HelpCenterCookiesConsentedProvider").HelpCenterCookiesConsentedContextProvider, {
//                                                             children: h.jsx(j, {})
//                                                         })
//                                                     }) : null]
//                                                 }), l ? h.jsx(c("CometErrorBoundary.react"), {
//                                                     children: h.jsx(l, {})
//                                                 }) : null]
//                                             })
//                                         }), h.jsxs(c("CometDOMOnlyBoundary.react"), {
//                                             children: [n && c("ExecutionEnvironment").canUseDOM ? h.jsx(c("CometErrorBoundary.react"), {
//                                                 children: h.jsx(n, {})
//                                             }) : null, k ? h.jsx(c("CometErrorBoundary.react"), {
//                                                 children: h.jsx(k, {})
//                                             }) : null, m ? h.jsx(c("CometErrorBoundary.react"), {
//                                                 children: h.jsx(m, {})
//                                             }) : null]
//                                         })]
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         }
//     }
//     g.buildCometRootComponent = a
// }
// ), 98);



import React, { Fragment, FC, ReactNode } from "react";
import {
  Actor,
  CometBackupPlaceholder,
  CometDOMOnlyBoundary,
  CometErrorBoundary,
  CometHeroInteractionWithDiv,
  CometInteractionTracingQPLConfigContext,
  CometPlatformAppWrapper,
  CurrentUser,
  ExecutionEnvironment,
  HelpCenterCookiesConsentedProvider,
  RelayEnvironmentFactoryProvider,
} from "./moduleImports"; // This is a placeholder. Please adjust the module imports as needed.

interface RootComponentProps {
  initialActorID?: string;
  initialLoadTraceId?: string;
  relayEnvironmentFactory: any;
  interactionQPLEvents?: any;
  disableTimeSpentLogging?: boolean;
  UIStateProviders?: {
    DarkModeStateProvider?: FC;
    DensityModeStateProvider?: FC;
    KeyboardSettingsStateProvider?: FC;
  };
  TopLevelWrapper?: FC;
  CometRouterStateProvider?: FC;
  OtherRootComponents: {
    CookieConsentDialog?: FC;
    DebugOwlDisplay?: FC;
    KeyCommandNub?: FC;
    ProductAttributionDebugger?: FC;
    Redblock?: FC;
  };
}

export const buildCometRootComponent = (
  RootComponent: ReactNode,
  props: RootComponentProps,
  externalComponents: any
): FC => {

  const {
    TopLevelWrapper = Fragment,
    CometRouterStateProvider = Fragment,
    OtherRootComponents = {},
    UIStateProviders = {},
   } = externalComponents;

   const {
    CookieConsentDialog,
    DebugOwlDisplay,
    KeyCommandNub,
    ProductAttributionDebugger,
    Redblock,
  } = OtherRootComponents;

  const defaultInteractionQPLEvents =
  CometInteractionTracingQPLConfigContext.defaultInteractionQPLEvents;

  const actorID = CurrentUser.getID();

  const {
    initialActorID = actorID,
    initialLoadTraceId,
    relayEnvironmentFactory,
    interactionQPLEvents = defaultInteractionQPLEvents,
    disableTimeSpentLogging,
  } = props;

  const {
    DarkModeStateProvider = Fragment,
    DensityModeStateProvider = Fragment,
    KeyboardSettingsStateProvider,
  } = UIStateProviders || {};

  return () => (
    <TopLevelWrapper>
      <CometInteractionTracingQPLConfigContext.CometInteractionTracingQPLConfigContextProvider
        dialogTraceQPLEvent={interactionQPLEvents.dialogTraceQPLEvent}
        popoverTraceQPLEvent={interactionQPLEvents.popoverTraceQPLEvent}
      >
        <CometPlatformAppWrapper
          KeyboardSettingsStateProvider={KeyboardSettingsStateProvider}
          disableTimeSpentLogging={disableTimeSpentLogging}
        >
          <RelayEnvironmentFactoryProvider factory={relayEnvironmentFactory}>
            <CometRouterStateProvider>
              <DarkModeStateProvider>
                <DensityModeStateProvider>
                  <CometBackupPlaceholder fallback={null}>
                    <Actor.ActorProvider initialActorID={initialActorID} readonly>
                      <CometHeroInteractionWithDiv
                        interactionDesc="initial load"
                        interactionUUID={initialLoadTraceId}
                      >
                        {RootComponent}
                        {CookieConsentDialog && (
                          <CometErrorBoundary>
                            <HelpCenterCookiesConsentedProvider.HelpCenterCookiesConsentedContextProvider>
                              <CookieConsentDialog />
                            </HelpCenterCookiesConsentedProvider.HelpCenterCookiesConsentedContextProvider>
                          </CometErrorBoundary>
                        )}
                        {KeyCommandNub && (
                          <CometErrorBoundary>
                            <KeyCommandNub />
                          </CometErrorBoundary>
                        )}
                      </CometHeroInteractionWithDiv>
                    </Actor.ActorProvider>
                  </CometBackupPlaceholder>
                  <CometDOMOnlyBoundary>
                    {Redblock && ExecutionEnvironment.canUseDOM && (
                      <CometErrorBoundary>
                        <Redblock />
                      </CometErrorBoundary>
                    )}
                    {DebugOwlDisplay && (
                      <CometErrorBoundary>
                        <DebugOwlDisplay />
                      </CometErrorBoundary>
                    )}
                    {ProductAttributionDebugger && (
                      <CometErrorBoundary>
                        <ProductAttributionDebugger />
                      </CometErrorBoundary>
                    )}
                  </CometDOMOnlyBoundary>
                </DensityModeStateProvider>
              </DarkModeStateProvider>
            </CometRouterStateProvider>
          </RelayEnvironmentFactoryProvider>
        </CometPlatformAppWrapper>
      </CometInteractionTracingQPLConfigContext.CometInteractionTracingQPLConfigContextProvider>
    </TopLevelWrapper>
  );
};





