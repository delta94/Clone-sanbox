import React from 'react';
import ErrorBoundary from 'ErrorBoundary.react';
import WorkAppTabSet from 'WorkAppTabSet';
import WorkGalahadAppTabItem from 'WorkGalahadAppTabItem.react';
import WorkGalahadNotificationsBadge from 'WorkGalahadNotificationsBadge.react';
import cr from 'cr:1770248';
import emptyFunction from 'emptyFunction';
import { useGeminiChatUnreadCount } from 'useGeminiChatUnreadCount';

const WorkGalahadAppTabTopApps = () => {
    return (
        <ErrorBoundary fallback={Fallback}>
            <TopApps />
        </ErrorBoundary>
    );
};

WorkGalahadAppTabTopApps.displayName = WorkGalahadAppTabTopApps [from ${f.id}];

const TopApps = () => {
const chatUnreadCount = useGeminiChatUnreadCount();
const notificationsBadgeCount = WorkGalahadNotificationsBadge.useCount();
const gardenBadgeCount = cr.useCount();

    return (
        <>
            {WorkAppTabSet.map((tab, index) => {
                return (
                    <WorkGalahadAppTabItem
                    key={tab.id}
                    badgeCount={tab.id === 'chats' ? chatUnreadCount : tab.id === 'notifications' ? notificationsBadgeCount : tab.id === 'gardens' ? gardenBadgeCount : 0}
                    isFirst={index === 0}
                    onHoverIn={emptyFunction}
                    onPress={emptyFunction}
                    tab={tab}
                    >
                        {tab.id}
                    </WorkGalahadAppTabItem>
                );
            })}
        </>
    );
};

const Fallback = () => {
    return (
        <>
            {WorkAppTabSet.map((tab, index) => {
                return (
                    <WorkGalahadAppTabItem
                    key={tab.id}
                    badgeCount={0}
                    isFirst={index === 0}
                    onHoverIn={emptyFunction}
                    onPress={emptyFunction}
                    tab={tab}
                    >
                        {tab.id}
                    </WorkGalahadAppTabItem>
                );
            })}
        </>
    );
};

export default WorkGalahadAppTabTopApps;


// __d("WorkGalahadAppTabTopApps.react", ["ErrorBoundary.react", "WorkAppTabSet", "WorkGalahadAppTabItem.react", "WorkGalahadNotificationsBadge.react", "cr:1770248", "emptyFunction", "react", "useGeminiChatUnreadCount"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a() {
//         return h.jsx(c("ErrorBoundary.react"), {
//             fallback: j,
//             children: h.jsx(i, {})
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";

//     function i() {
//         var a = c("useGeminiChatUnreadCount")(),
//             e = d("WorkGalahadNotificationsBadge.react").useCount(),
//             f = b("cr:1770248").useCount();
//         return c("WorkAppTabSet").map(function (b, d) {
//             return h.jsx(c("WorkGalahadAppTabItem.react"), {
//                 badgeCount: b.id === "chats" ? a : b.id === "notifications" ? e : b.id === "gardens" ? f : 0,
//                 isFirst: d === 0,
//                 onHoverIn: c("emptyFunction"),
//                 onPress: c("emptyFunction"),
//                 tab: b
//             }, b.id)
//         })
//     }

//     function j() {
//         return c("WorkAppTabSet").map(function (a, b) {
//             return h.jsx(c("WorkGalahadAppTabItem.react"), {
//                 badgeCount: 0,
//                 isFirst: b === 0,
//                 onHoverIn: c("emptyFunction"),
//                 onPress: c("emptyFunction"),
//                 tab: a
//             }, a.id)
//         })
//     }
//     g["default"] = a
// }), 98);