__d("CometTopNavMoreTab.react", ["CometTopNavTab.react", "XCometHomeControllerRouteBuilder", "getTopMostRouteInfo", "react", "useCometRouterDispatcher", "useCometRouterState"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = c("useCometRouterState")(),
            d = c("useCometRouterDispatcher")(),
            e = b != null ? c("getTopMostRouteInfo")(b) : null;
        b = (e == null ? void 0 : (b = e.route) == null ? void 0 : b.tabKey) === "more";
        b = b && d ? {
            onPress: function () {
                var a;
                (e == null ? void 0 : (a = e.referrer) == null ? void 0 : a.navigationType) !== "initial" ? d.goBack(): d.go(c("XCometHomeControllerRouteBuilder").buildURL({}), {})
            },
            preventLocalNavigation: !0
        } : null;
        return i.jsx(c("CometTopNavTab.react"), babelHelpers["extends"]({}, b, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { FC } from 'react';
import { CometTopNavTab } from './CometTopNavTab';
import { XCometHomeControllerRouteBuilder } from './XCometHomeControllerRouteBuilder';
import { getTopMostRouteInfo } from 'getTopMostRouteInfo';
import { useCometRouterDispatcher, useCometRouterState } from './useCometRouter';

interface Props {
    onPress?: () => void;
    preventLocalNavigation?: boolean;
    // Add any other props needed for CometTopNavTab
}

const CometTopNavMoreTab: FC<Props> = ({ onPress, preventLocalNavigation, ...props }) => {
    const routerState = useCometRouterState();
    const routerDispatcher = useCometRouterDispatcher();
    const topMostRouteInfo = routerState ? getTopMostRouteInfo(routerState) : null;
    const isActive = topMostRouteInfo?.route?.tabKey === 'more';

    const tabProps = isActive && routerDispatcher && {
        onPress: () => {
            const navigationType = topMostRouteInfo?.referrer?.navigationType;
            if (navigationType !== 'initial') {
                routerDispatcher.goBack();
            } else {
                routerDispatcher.go(XCometHomeControllerRouteBuilder.buildURL({}), {});
            }
        },
        preventLocalNavigation: true,
        ...props,
    };

    return <CometTopNavTab {...tabProps} />;
};

CometTopNavMoreTab.displayName = `${CometTopNavMoreTab.name} [from CometTopNavMoreTab]`;

export default CometTopNavMoreTab;
