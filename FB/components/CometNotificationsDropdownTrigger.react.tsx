// __d("CometNotificationsDropdownTrigger.react", ["fbt", "CometIconNotificationsFilled.react", "CometNotificationsDropdown.entrypoint", "CometNotificationsListLoadingState.react", "CometSettingsBadgedDropdownTrigger.react", "SVGIcon", "XCometNotificationsControllerRouteBuilder", "deferredLoadComponent", "react", "requireDeferredForDisplay", "useIsDsaNotifications", "useTopNavigationLogging"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = i || (i = d("react")),
//         k = i.useState,
//         l = c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometNotificationsBadgeCount.react").__setRef("CometNotificationsDropdownTrigger.react"));

//     function a(a) {
//         var b = a.dropdownPosition;
//         b = b === void 0 ? "below" : b;
//         a = a.isNotifications;
//         var e = k(0),
//             f = e[0];
//         e = e[1];
//         var g = d("useTopNavigationLogging").useNotificationsButtonLoggingCallbacks(f.toString()),
//             i = g[0];
//         g = g[1];
//         var m = f === 0 || a ? h._("__JHASH__8gAbffuAS0s__JHASH__") : h._("__JHASH__M2eDrcP_btG__JHASH__", [h._param("badge count", f)]),
//             n = c("useIsDsaNotifications")();
//         return j.jsx(c("CometSettingsBadgedDropdownTrigger.react"), {
//             badgeCount: a ? 0 : f,
//             deferredBadgeCount: l,
//             disabled: a || n,
//             dropdownEntryPoint: c("CometNotificationsDropdown.entrypoint"),
//             dropdownPosition: b,
//             fallback: j.jsx(c("CometNotificationsListLoadingState.react"), {}),
//             forceActive: a,
//             icon: d("SVGIcon").legacySVGIcon(c("CometIconNotificationsFilled.react")),
//             label: m,
//             linkProps: {
//                 preventLocalNavigation: !0,
//                 url: c("XCometNotificationsControllerRouteBuilder").buildURL({})
//             },
//             loggingRef: g,
//             onBadgeCount: e,
//             onPress: i,
//             preloadTrigger: "tooltip",
//             testid: void 0,
//             tooltipLabel: h._("__JHASH__PhsYpvQCnZJ__JHASH__"),
//             tracePolicy: "comet.jewel.notification"
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     b = j.memo(a);
//     g["default"] = b
// }), 98);


import React, { useState, FunctionComponent } from 'react';
import { deferredLoadComponent, requireDeferredForDisplay } from 'your-deferred-components-path';
import { useTopNavigationLogging, useIsDsaNotifications } from 'your-hooks-path';
import { CometSettingsBadgedDropdownTrigger } from 'your-components-path';
import { SVGIcon } from 'your-icon-path';
import { XCometNotificationsControllerRouteBuilder } from 'your-route-builder-path';
import { CometIconNotificationsFilled } from 'your-icons-path';
import { CometNotificationsListLoadingState } from 'your-loading-states-path';

type CometNotificationsDropdownTriggerProps = {
  dropdownPosition?: string;
  isNotifications: boolean;
};

const CometNotificationsDropdownTrigger: FunctionComponent<CometNotificationsDropdownTriggerProps> = ({
  dropdownPosition = "below",
  isNotifications,
}) => {
  const [badgeCount, setBadgeCount] = useState<number>(0);
  const { onPress, loggingRef } = useTopNavigationLogging(badgeCount.toString());
  const label = badgeCount === 0 || isNotifications ? "Notifications" : `Notifications, ${badgeCount} unread`;
  const isDsaNotifications = useIsDsaNotifications();

  const deferredBadgeCount = deferredLoadComponent(requireDeferredForDisplay("CometNotificationsBadgeCount.react").__setRef("CometNotificationsDropdownTrigger.react"));

  return (
    <CometSettingsBadgedDropdownTrigger
      badgeCount={isNotifications ? 0 : badgeCount}
      deferredBadgeCount={deferredBadgeCount}
      disabled={isNotifications || isDsaNotifications}
      dropdownEntryPoint="CometNotificationsDropdown.entrypoint"
      dropdownPosition={dropdownPosition}
      fallback={<CometNotificationsListLoadingState />}
      forceActive={isNotifications}
      icon={SVGIcon.legacySVGIcon(CometIconNotificationsFilled)}
      label={label}
      linkProps={{
        preventLocalNavigation: true,
        url: XCometNotificationsControllerRouteBuilder.buildURL({})
      }}
      loggingRef={loggingRef}
      onBadgeCount={setBadgeCount}
      onPress={onPress}
      preloadTrigger="tooltip"
      tooltipLabel="Notifications"
      tracePolicy="comet.jewel.notification"
    />
  );
};

CometNotificationsDropdownTrigger.displayName = `${CometNotificationsDropdownTrigger.name} [from ${'your-module-id'}]`;

export default React.memo(CometNotificationsDropdownTrigger);