__d("MWV2ChatTabsRoot.react", ["CometContextualLayerAnchorRoot.react", "CometDOMOnlyBoundary.react", "CometPlaceholder.react", "FocusRegion.react", "MWChatStateV2.react", "MWChatVisibilityOverrideContext", "MWFallbackWithTimeout.react", "MWLSThreadDisplayContext", "MWSetupPresenceReportingDeferred.react", "MWV2ChatHeads.react", "MWV2ChatTabs.react", "WebUXLoggingEntryPointContextProvider", "useEnsureViewerContactExistAndUpdated", "focusScopeQueries", "gkx", "react", "stylex", "useMWChatInit", "useMWIsAPPlusChannelsInbox", "useMWIsOnPushView", "useMWIsTopLevelRouteMediaViewerExperiment", "useMWIsTopLevelRouteMessengerMediaViewer", "useMWV2ChatUpdateMediaViewerOpenWatermark", "useMWV2CookieWriter", "useShouldShowMessagingEntrypointInCometRoot"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    e = i;
    var k = e.useEffect,
        l = e.useMemo,
        m = (e = b("useEnsureViewerContactExistAndUpdated")) != null ? e : function () {},
        n = {
            chatAbovePushView: {
                zIndex: "x1vjfegm",
                $$css: !0
            },
            container: {
                alignItems: "xuk3077",
                display: "x78zum5",
                isolation: "xc8icb0",
                $$css: !0
            },
            hidden: {
                display: "x1s85apg",
                $$css: !0
            },
            root: {
                bottom: "x1ey2m1c",
                end: "xds687c",
                left: null,
                right: null,
                position: "xixxii4",
                $$css: !0
            }
        };

    function o(a) {
        var b = a.isMediaViewer;
        a = a.showChatAbovePushView;
        var e = d("MWChatStateV2.react").useChatState(function (a) {
                return a.tabs
            }),
            f = c("useMWIsTopLevelRouteMessengerMediaViewer")(),
            g = l(function () {
                return Array.from(e.values()).some(function (a) {
                    return a.openWatermark > a.closeWatermark
                })
            }, [e]);
        a = j.jsx(d("WebUXLoggingEntryPointContextProvider").WebUXLoggingEntryPointContextProvider, {
            value: "popup_chat_box",
            children: j.jsx(d("MWLSThreadDisplayContext").MWLSThreadDisplayContextProvider, {
                value: "ChatTab",
                children: j.jsx("div", {
                    className: (h || (h = c("stylex")))(n.root, a || c("gkx")("24129") ? n.chatAbovePushView : !1, f ? n.hidden : null),
                    children: j.jsx(c("CometContextualLayerAnchorRoot.react"), {
                        children: j.jsx("div", {
                            className: "xuk3077 x78zum5 xc8icb0",
                            children: j.jsx(d("FocusRegion.react").FocusRegion, {
                                containFocusQuery: g ? d("focusScopeQueries").tabbableScopeQuery : void 0,
                                id: "MWV2ChatTabsRootChatTabsFocusRegion",
                                children: j.jsxs(j.Fragment, {
                                    children: [j.jsx(c("MWV2ChatTabs.react"), {
                                        isMediaViewer: b
                                    }), j.jsx(c("CometDOMOnlyBoundary.react"), {
                                        children: j.jsx(d("MWV2ChatHeads.react").MWV2ChatHeads, {
                                            isMediaViewer: b
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        });
        return a
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p(a) {
        a = a.children;
        c("useMWV2CookieWriter")();
        c("useMWChatInit")();
        return a
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function a() {
        var a = c("useMWIsOnPushView")(),
            b = c("useMWIsTopLevelRouteMediaViewerExperiment")(),
            e = d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(b),
            f = c("useMWV2ChatUpdateMediaViewerOpenWatermark")(),
            g = c("useMWIsAPPlusChannelsInbox")(),
            h = c("useShouldShowMessagingEntrypointInCometRoot")("CHAT_TABS_ROOT") && e && !g;
        k(function () {
            b && f()
        }, [b, f]);
        m();
        return l(function () {
            return j.jsxs(c("CometPlaceholder.react"), {
                fallback: j.jsx(c("MWFallbackWithTimeout.react"), {
                    message: "MWV2ChatTabsRoot suspense timeout"
                }),
                children: [j.jsx(c("MWSetupPresenceReportingDeferred.react"), {}), j.jsx(p, {
                    children: h ? j.jsx(o, {
                        isMediaViewer: b,
                        showChatAbovePushView: a
                    }) : null
                })]
            })
        }, [h, a, b])
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


// MWV2ChatTabsRoot.react.tsx
import CometContextualLayerAnchorRoot from 'CometContextualLayerAnchorRoot.react';
import CometDOMOnlyBoundary from 'CometDOMOnlyBoundary.react';
import CometPlaceholder from 'CometPlaceholder.react';
import FocusRegion from 'FocusRegion.react';
import { useChatState } from 'MWChatStateV2.react';
import { MWChatVisibilityOverrideContext } from 'MWChatVisibilityOverrideContext';
import MWFallbackWithTimeout from 'MWFallbackWithTimeout.react';
import { MWLSThreadDisplayContext } from 'MWLSThreadDisplayContext';
import MWSetupPresenceReportingDeferred from 'MWSetupPresenceReportingDeferred.react';
import { MWV2ChatHeads } from 'MWV2ChatHeads.react';
import MWV2ChatTabs from 'MWV2ChatTabs.react';
import WebUXLoggingEntryPointContextProvider from 'WebUXLoggingEntryPointContextProvider';
import useEnsureViewerContactExistAndUpdated from 'useEnsureViewerContactExistAndUpdated';
import { tabbableScopeQuery } from 'focusScopeQueries';
import React, { useEffect, useMemo } from 'react';
import { cx } from 'stylex';
import useMWChatInit from 'useMWChatInit';
import useMWIsAPPlusChannelsInbox from 'useMWIsAPPlusChannelsInbox';
import useMWIsOnPushView from 'useMWIsOnPushView';
import useMWIsTopLevelRouteMediaViewerExperiment from 'useMWIsTopLevelRouteMessengerMediaViewer';
import useMWV2ChatUpdateMediaViewerOpenWatermark from 'useMWV2ChatUpdateMediaViewerOpenWatermark';
import useMWV2CookieWriter from 'useMWV2CookieWriter';
import useShouldShowMessagingEntrypointInCometRoot from 'useShouldShowMessagingEntrypointInCometRoot';
import useMWIsTopLevelRouteMessengerMediaViewer from 'useMWIsTopLevelRouteMessengerMediaViewer';

const styles = {
 chatAbovePushView: {
   zIndex: 'x1vjfegm',
 },
 container: {
   alignItems: 'xuk3077',
   display: 'x78zum5',
   isolation: 'xc8icb0',
 },
 hidden: {
   display: 'x1s85apg',
 },
 root: {
   bottom: 'x1ey2m1c',
   end: 'xds687c',
   left: null,
   right: null,
   position: 'xixxii4',
 },
};

function MWV2ChatTabsRootInner({ isMediaViewer, showChatAbovePushView }: { isMediaViewer: boolean, showChatAbovePushView: boolean }) {
 const chatTabs = useChatState((state) => state.tabs);
 const isTopLevelRouteMessengerMediaViewer = useMWIsTopLevelRouteMessengerMediaViewer();
 const hasOpenChatTab = useMemo(() => {
   return Array.from(chatTabs.values()).some((tab) => tab.openWatermark > tab.closeWatermark);
 }, [chatTabs]);

 const content = (
   <WebUXLoggingEntryPointContextProvider value="popup_chat_box">
     <MWLSThreadDisplayContext.MWLSThreadDisplayContextProvider value="ChatTab">
       <div
         className={cx(
           styles.root,
           showChatAbovePushView || styles.chatAbovePushView,
           isTopLevelRouteMessengerMediaViewer ? styles.hidden : null,
         )}
       >
         <CometContextualLayerAnchorRoot>
           <div className={cx(styles.container)}>
             <FocusRegion.FocusRegion
               containFocusQuery={hasOpenChatTab ? tabbableScopeQuery : undefined}
               id="MWV2ChatTabsRootChatTabsFocusRegion"
             >
               <>
                 <MWV2ChatTabs isMediaViewer={isMediaViewer} />
                 <CometDOMOnlyBoundary>
                   <MWV2ChatHeads.MWV2ChatHeads isMediaViewer={isMediaViewer} />
                 </CometDOMOnlyBoundary>
               </>
             </FocusRegion.FocusRegion>
           </div>
         </CometContextualLayerAnchorRoot>
       </div>
     </MWLSThreadDisplayContext.MWLSThreadDisplayContextProvider>
   </WebUXLoggingEntryPointContextProvider>
 );

 return content;
}

MWV2ChatTabsRootInner.displayName = `MWV2ChatTabsRootInner [from ${MWV2ChatTabsRootInner.id}]`;

function MWV2ChatTabsRootInitializer({ children }: { children: React.ReactNode }) {
 useMWV2CookieWriter();
 useMWChatInit();
 return children;
}

MWV2ChatTabsRootInitializer.displayName = `MWV2ChatTabsRootInitializer [from ${MWV2ChatTabsRootInitializer.id}]`;

function MWV2ChatTabsRoot() {
 const isOnPushView = useMWIsOnPushView();
 const isTopLevelRouteMediaViewerExperiment = useMWIsTopLevelRouteMediaViewerExperiment();
 const chatVisibilityOverride = MWChatVisibilityOverrideContext.useMWChatVisibilityOverride(isTopLevelRouteMediaViewerExperiment);
 const updateMediaViewerOpenWatermark = useMWV2ChatUpdateMediaViewerOpenWatermark();
 const isAPPlusChannelsInbox = useMWIsAPPlusChannelsInbox();
 const shouldShowMessagingEntrypoint = useShouldShowMessagingEntrypointInCometRoot('CHAT_TABS_ROOT') && chatVisibilityOverride && !isAPPlusChannelsInbox;

 useEffect(() => {
   if (isTopLevelRouteMediaViewerExperiment) {
     updateMediaViewerOpenWatermark();
   }
 }, [isTopLevelRouteMediaViewerExperiment, updateMediaViewerOpenWatermark]);

 useEnsureViewerContactExistAndUpdated();

 const content = useMemo(() => (
   <CometPlaceholder
     fallback={<MWFallbackWithTimeout message="MWV2ChatTabsRoot suspense timeout" />}
   >
     <MWSetupPresenceReportingDeferred />
     <MWV2ChatTabsRootInitializer>
       {shouldShowMessagingEntrypoint ? (
         <MWV2ChatTabsRootInner
           isMediaViewer={isTopLevelRouteMediaViewerExperiment}
           showChatAbovePushView={isOnPushView}
         />
       ) : null}
     </MWV2ChatTabsRootInitializer>
   </CometPlaceholder>
 ), [
   shouldShowMessagingEntrypoint,
   isOnPushView,
   isTopLevelRouteMediaViewerExperiment,
 ]);

 return content;
}

MWV2ChatTabsRoot.displayName = `MWV2ChatTabsRoot [from ${MWV2ChatTabsRoot.id}]`;

export default MWV2ChatTabsRoot;