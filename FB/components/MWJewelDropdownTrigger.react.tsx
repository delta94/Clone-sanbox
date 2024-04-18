// __d("MWJewelDropdownTrigger.react", ["fbt", "CometIconMessengerFilled.react", "CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react", "CometSettingsListDropdownLoadingState.react", "DmaMessengerOptOutFilled24.svg.react", "I64", "InteractionTracing", "JSResourceForInteraction", "JSScheduler", "MWCMJewelContextProvider.react", "MWFacebookUserWithoutMessengerAccess", "MWJewelEntrypoint", "MWJewelExperimentationContext.react", "MWJewelPopoverDialogContextProvider.react", "MWJewelPopoverThreadlistContext.react", "MWJewelThreadlistPreloaderDeferred", "MessageRequestsBulkActionsContextProvider.react", "MultipleTabsLogger", "SVGIcon", "cr:6167", "cr:6168", "cr:7045", "cr:7630", "cr:7632", "cr:7634", "cr:7636", "cr:7638", "cr:7642", "cr:7644", "cr:7646", "cr:7648", "cr:7650", "deferredLoadComponent", "gkx", "justknobx", "promiseDone", "qpl", "react", "requireDeferredForDisplay", "useTopNavigationLogging"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j, k, l = i || (i = d("react"));
//     e = i;
//     var m = e.useCallback,
//         n = e.useMemo,
//         o = e.useRef,
//         p = e.useState,
//         q = (e = (e = (e = (e = b("cr:7630")) != null ? e : b("cr:7632")) != null ? e : b("cr:7634")) != null ? e : b("cr:7636")) != null ? e : b("cr:7638"),
//         r = (e = (e = (e = (e = (e = b("cr:6168")) != null ? e : b("cr:7642")) != null ? e : b("cr:7644")) != null ? e : b("cr:7646")) != null ? e : b("cr:7648")) != null ? e : b("cr:7650");
//     c("MWJewelThreadlistPreloaderDeferred").getModuleId();
//     var s = c("JSResourceForInteraction")("MWJewelThreadlistPreloader").__setRef("MWJewelDropdownTrigger.react"),
//         t = c("JSResourceForInteraction")("GetLsDatabase").__setRef("MWJewelDropdownTrigger.react"),
//         u = c("deferredLoadComponent")(c("requireDeferredForDisplay")("MWChatBadgeCount.react").__setRef("MWJewelDropdownTrigger.react"));

//     function v(a) {
//         a = a.children;
//         return b("cr:7045") != null ? l.jsx(b("cr:7045"), {
//             useChatTab: !0,
//             children: a
//         }) : a
//     }
//     v.displayName = v.name + " [from " + f.id + "]";
//     var w = c("JSResourceForInteraction")("MWV2ChatTab.react").__setRef("MWJewelDropdownTrigger.react"),
//         x = function (a) {
//             var d = a.requiresEbOnboarding;
//             a = a.requiresEbRestore;
//             if (b("cr:6167") != null && a && c("MWJewelEntrypoint").entrypoint === "RESTORE") return b("cr:6167");
//             else if (q != null && d && c("MWJewelEntrypoint").entrypoint === "ONBOARDING_SOFTBLOCK") return q;
//             return c("CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react")
//         };

//     function a(a) {
//         var b, e;
//         a = a.dropdownPosition;
//         a = a === void 0 ? "below" : a;
//         var f = r == null ? void 0 : r(c("MWJewelEntrypoint").entrypoint);
//         b = (b = f == null ? void 0 : f.requiresEbRestore) != null ? b : !1;
//         e = (e = f == null ? void 0 : f.requiresEbOnboarding) != null ? e : !1;
//         e = x({
//             requiresEbOnboarding: e,
//             requiresEbRestore: b
//         });
//         b = p(0);
//         var g = b[0];
//         b = b[1];
//         var i = d("useTopNavigationLogging").useMessengerButtonLoggingCallbacks(g.toString()),
//             q = i[0];
//         i = i[1];
//         var y = o(!1),
//             z = m(function (a) {
//                 y.current || (y.current = !0, c("gkx")("636") && c("promiseDone")(t.load().then(function (a) {
//                     return a.get()
//                 })), c("promiseDone")(s.load().then(function (a) {
//                     return a()
//                 })))
//             }, []),
//             A = c("qpl")._(30605361, "6204"),
//             B = o(new Set()),
//             C = m(function () {
//                 c("InteractionTracing").getPendingInteractions().forEach(function (a) {
//                     var b;
//                     ((b = a.getTrace()) == null ? void 0 : b.qplEvent) === A && (a.onComplete(function () {
//                         a.addAnnotation("badge_count", g.toString()), a.addAnnotationStringArray("thread_ids", Array.from(B.current).map(function (a) {
//                             return (j || (j = d("I64"))).to_string(a)
//                         }))
//                     }), d("MultipleTabsLogger").addAnnotationWithInteractionUuid(a.getTraceId()), a.addAnnotationBoolean("isArmadilloPublicLaunchUser", c("gkx")("688")))
//                 })
//             }, [g, A, B]),
//             D = m(function () {
//                 f == null ? void 0 : f.onJewelPress(), c("justknobx")._("761") && (k || (k = d("JSScheduler"))).scheduleSpeculativeCallback(function () {
//                     w.preload()
//                 }), q(), C()
//             }, [f, C, q]),
//             E = p(!1),
//             F = E[0],
//             G = E[1];
//         E = g === 0 ? h._("__JHASH__ptC-BqtItMK__JHASH__") : h._("__JHASH__zF_9yg3mRYI__JHASH__", [h._param("badge count", g)]);
//         var H = n(function () {
//                 return {
//                     bannerWasSeen: F,
//                     onBannerVisible: function () {
//                         return G(!0)
//                     }
//                 }
//             }, [F, G]),
//             I = l.jsx(c("CometSettingsListDropdownLoadingState.react"), {
//                 hasActions: !0,
//                 title: h._("__JHASH__9FTPnWJWCay__JHASH__")
//             }),
//             J = d("MWFacebookUserWithoutMessengerAccess").useIsFacebookUserWithoutMessengerAccess(),
//             K = J ? c("DmaMessengerOptOutFilled24.svg.react") : d("SVGIcon").legacySVGIcon(c("CometIconMessengerFilled.react")),
//             L = h._("__JHASH__o5k_4FKzATU__JHASH__"),
//             M = h._("__JHASH__Xp2OYsVHg0e__JHASH__");
//         J = J ? M : L;
//         M = l.jsx(c("MWJewelPopoverDialogContextProvider.react"), {
//             children: l.jsx(c("MessageRequestsBulkActionsContextProvider.react"), {
//                 children: l.jsx(c("MWJewelExperimentationContext.react").Provider, {
//                     value: H,
//                     children: l.jsx(c("MWJewelPopoverThreadlistContext.react").Provider, {
//                         value: B.current,
//                         children: l.jsx(v, {
//                             children: l.jsx(e, {
//                                 badgeCount: g,
//                                 deferredBadgeCount: u,
//                                 dropdownPosition: a,
//                                 fallback: I,
//                                 icon: K,
//                                 label: E,
//                                 loggingRef: i,
//                                 onBadgeCount: b,
//                                 onHoverInPrerenderer: z,
//                                 onPress: D,
//                                 onPressInPrerenderer: z,
//                                 testid: void 0,
//                                 tooltipLabel: J,
//                                 tracePolicy: "comet.jewel.messenger"
//                             })
//                         })
//                     })
//                 })
//             })
//         });
//         return l.jsx(c("MWCMJewelContextProvider.react"), {
//             children: M
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);




import * as React from 'react';
import { fbt } from 'fbt';
import CometIconMessengerFilled from './CometIconMessengerFilled';
import CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint from './CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint';
import CometSettingsListDropdownLoadingState from './CometSettingsListDropdownLoadingState';
import DmaMessengerOptOutFilled24Svg from './DmaMessengerOptOutFilled24.svg';
import { I64 } from './I64';
import { InteractionTracing } from './InteractionTracing';
import { JSResourceForInteraction } from './JSResourceForInteraction';
import { JSScheduler } from './JSScheduler';
import { MWCMJewelContextProvider } from './MWCMJewelContextProvider';
import { MWFacebookUserWithoutMessengerAccess } from './MWFacebookUserWithoutMessengerAccess';
import { MWJewelEntrypoint } from './MWJewelEntrypoint';
import { MWJewelExperimentationContextProvider } from './MWJewelExperimentationContext';
import { MWJewelPopoverDialogContextProvider } from './MWJewelPopoverDialogContextProvider';
import { MWJewelPopoverThreadlistContextProvider } from './MWJewelPopoverThreadlistContext';
import { MWJewelThreadlistPreloaderDeferred } from './MWJewelThreadlistPreloaderDeferred';
import { MessageRequestsBulkActionsContextProvider } from './MessageRequestsBulkActionsContextProvider';
import { MultipleTabsLogger } from './MultipleTabsLogger';
import { legacySVGIcon } from 'SVGIcon';
import cr7630 from './cr:7630';
import cr7632 from './cr:7632';
import cr7634 from './cr:7634';
import cr7636 from './cr:7636';
import cr7638 from './cr:7638';
import cr6168 from './cr:6168';
import cr7642 from './cr:7642';
import cr7644 from './cr:7644';
import cr7646 from './cr:7646';
import cr7648 from './cr:7648';
import cr7650 from './cr:7650';
import { deferredLoadComponent } from 'deferredLoadComponent';
import { gkx } from './gkx';
import { justknobx } from 'justknobx';
import { promiseDone } from 'promiseDone';
import { qpl } from './qpl';
import { requireDeferredForDisplay } from 'requireDeferredForDisplay';
import { useTopNavigationLogging } from 'useTopNavigationLogging';

const preloadMWJewelThreadlistPreloader = MWJewelThreadlistPreloaderDeferred.getModuleId();

const preloadMWJewelThreadlistPreloaderCode = JSResourceForInteraction('MWJewelThreadlistPreloader')
  .__setRef('MWJewelDropdownTrigger.react');

const preloadGetLsDatabase = JSResourceForInteraction('GetLsDatabase')
  .__setRef('MWJewelDropdownTrigger.react');

const DeferredBadgeCount = deferredLoadComponent(
  requireDeferredForDisplay('MWChatBadgeCount.react')
    .__setRef('MWJewelDropdownTrigger.react')
);

function WrapWithChatTab({ children }: { children: React.ReactNode }) {
  return children;
}

WrapWithChatTab.displayName = `${WrapWithChatTab.name}`;

const preloadMWV2ChatTab = JSResourceForInteraction('MWV2ChatTab.react');

function getEntryPointComponent({
  requiresEbOnboarding,
  requiresEbRestore
}: {
  requiresEbOnboarding: boolean;
  requiresEbRestore: boolean; 
}) {
  return CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint;
}

export default function MWJewelDropdownTrigger({
  dropdownPosition = 'below'
}: {
  dropdownPosition?: 'below' | 'above';
}) {
  const entrypointConfig = cr6168?.('MWJewelEntrypoint');
  const requiresEbRestore = entrypointConfig?.requiresEbRestore ?? false;
  const requiresEbOnboarding = entrypointConfig?.requiresEbOnboarding ?? false;

  const EntryPoint = getEntryPointComponent({
    requiresEbOnboarding,
    requiresEbRestore
  });

  const [badgeCount, setBadgeCount] = React.useState(0);
  const [logButtonPress, logButtonHover] = useTopNavigationLogging(
    badgeCount.toString()
  );

  const hasLoaded = React.useRef(false);

  const loadDeferredCode = React.useCallback(() => {
    if (hasLoaded.current) {
      return;
    }

    hasLoaded.current = true;

    promiseDone(preloadMWJewelThreadlistPreloaderCode.load().then(mod => mod()));
  }, []);

  const qplEvent = qpl._(30605361, '6204');

  const activeThreadIds = React.useRef(new Set());

  const logInteractions = React.useCallback(() => {
    InteractionTracing.getPendingInteractions().forEach(interaction => {
      const trace = interaction?.getTrace();
      if (trace?.qplEvent === qplEvent) {
        interaction.onComplete(() => {
          interaction.addAnnotation('badge_count', badgeCount.toString());
          interaction.addAnnotationStringArray(
            'thread_ids', 
            Array.from(activeThreadIds.current).map(id => I64.to_string(id))  
          );
        });

        MultipleTabsLogger.addAnnotationWithInteractionUuid(
          interaction.getTraceId()
        );

        interaction.addAnnotationBoolean(
          'isArmadilloPublicLaunchUser',
          true
        );
      }
    });
  }, [badgeCount, qplEvent, activeThreadIds]);

  const onPress = React.useCallback(() => {
    entrypointConfig?.onJewelPress();

    if (justknobx._('761')) { // true
      JSScheduler.scheduleSpeculativeCallback(() => {
        preloadMWV2ChatTab.preload();
      });
    }

    logButtonPress();
    logInteractions();
  }, [entrypointConfig, logButtonPress, logInteractions]);

  const [bannerWasSeen, setBannerWasSeen] = React.useState(false);

  const bannerContext = React.useMemo(() => {
    return {
      bannerWasSeen,
      onBannerVisible: () => setBannerWasSeen(true)
    };
  }, [bannerWasSeen, setBannerWasSeen]);

  const loadingState = (
    <CometSettingsListDropdownLoadingState
      hasActions
      title="Chats"
    />
  );

  const isOptedOut = MWFacebookUserWithoutMessengerAccess.useIsFacebookUserWithoutMessengerAccess();

  const icon = isOptedOut ? (
    <DmaMessengerOptOutFilled24Svg />
  ) : (
    legacySVGIcon(<CometIconMessengerFilled />)
  );

  const tooltipLabelDefault = "Messenger";
  const tooltipLabelOptedOut = "Messaging";
  const tooltipLabel = isOptedOut ? tooltipLabelOptedOut : tooltipLabelDefault;

  const label = badgeCount === 0
    ? "Messenger"
    : fbt.__hash('__JHASH__zF_9yg3mRYI__JHASH__', [
        fbt._param('badge count', badgeCount)
      ]); //"Messenger, 2 unread"

  return (
    <MWCMJewelContextProvider>
      <MWJewelPopoverDialogContextProvider>
        <MessageRequestsBulkActionsContextProvider>
          <MWJewelExperimentationContextProvider value={bannerContext}>
            <MWJewelPopoverThreadlistContextProvider value={activeThreadIds.current}>
              <WrapWithChatTab>
                    <EntryPoint
                      badgeCount={badgeCount}
                      deferredBadgeCount={DeferredBadgeCount}
                      dropdownPosition={dropdownPosition}
                      fallback={loadingState}
                      icon={icon}
                      label={label}
                      loggingRef={logButtonHover}
                      onBadgeCount={setBadgeCount}
                      onHoverInPrerenderer={loadDeferredCode}
                      onPress={onPress}
                      onPressInPrerenderer={loadDeferredCode}
                      tooltipLabel={tooltipLabel}
                      tracePolicy="comet.jewel.messenger"
                    />
                </WrapWithChatTab>
                </MWJewelPopoverThreadlistContextProvider>
            </MWJewelExperimentationContextProvider>
        </MessageRequestsBulkActionsContextProvider>
    </MWJewelPopoverDialogContextProvider> 
    </MWCMJewelContextProvider>
  )
}