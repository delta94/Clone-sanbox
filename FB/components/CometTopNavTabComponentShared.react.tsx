__d("CometTopNavTabComponentShared.react", ["CometTopNavMoreTab.react", "CometTopNavTab.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.badgeCount,
            d = a.badgeRenderer,
            e = a.customIcon,
            f = a.isActiveTabOverride,
            g = a.lastUsedTimestamp,
            h = a.nuxRef,
            j = a.pendingTabKey,
            k = a.position,
            l = a.setIsPendingTab,
            m = a.spriteIcon,
            n = a.tabConfig;
        a = a.tabRenderer;
        var o = n.activeIcon,
            p = n.appID,
            q = n.entityMatcherFunction,
            r = n.hidden,
            s = n.icon,
            t = n.iconSize,
            u = n.label,
            v = n.passthroughProps,
            w = n.prefetchQueriesEligible,
            x = n.preload,
            y = n.tabKey,
            z = n.testid;
        n = n.url;
        if (r === !0) return null;
        r = {
            activeIcon: o,
            appID: p,
            badgeCount: b,
            badgeRenderer: d,
            customIcon: e,
            entityMatcherFunction: q,
            icon: s,
            iconSize: t,
            isActiveTabOverride: f,
            label: u,
            lastUsedTimestamp: g,
            nuxRef: h,
            passthroughProps: v,
            pendingTabKey: j,
            position: k,
            prefetchQueriesEligible: w,
            preload: x,
            setIsPendingTab: l,
            spriteIcon: m,
            tabKey: y,
            tabRenderer: a,
            testid: z,
            url: n
        };
        o = y === "more" ? c("CometTopNavMoreTab.react") : c("CometTopNavTab.react");
        return i.jsx(o, babelHelpers["extends"]({
            responsiveStyle: !0
        }, r))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.memo(a);
    g["default"] = b
}), 98);


import React, { memo, FC } from 'react';
import { CometTopNavMoreTab } from './CometTopNavMoreTab';
import { CometTopNavTab } from './CometTopNavTab';

interface TabConfig {
    activeIcon: string;
    appID: string;
    badgeCount: number;
    badgeRenderer: React.ReactNode;
    customIcon: React.ReactNode;
    entityMatcherFunction: Function;
    icon: string;
    iconSize: number;
    isActiveTabOverride: boolean;
    label: string;
    lastUsedTimestamp: number;
    nuxRef: React.RefObject<any>;
    passthroughProps: Record<string, any>;
    pendingTabKey: string;
    position: number;
    prefetchQueriesEligible: boolean;
    preload: boolean;
    spriteIcon: string;
    tabKey: string;
    tabRenderer: React.ReactNode;
    testid: string;
    url: string;
    hidden?: boolean;
}

interface Props {
    badgeCount: number;
    badgeRenderer: React.ReactNode;
    customIcon: React.ReactNode;
    isActiveTabOverride: boolean;
    lastUsedTimestamp: number;
    nuxRef: React.RefObject<any>;
    pendingTabKey: string;
    position: number;
    setIsPendingTab: Function;
    spriteIcon: string;
    tabConfig: TabConfig;
    tabRenderer: React.ReactNode;
}

const CometTopNavTabComponentShared: FC<Props> = ({
    badgeCount,
    badgeRenderer,
    customIcon,
    isActiveTabOverride,
    lastUsedTimestamp,
    nuxRef,
    pendingTabKey,
    position,
    setIsPendingTab,
    spriteIcon,
    tabConfig,
    tabRenderer,
}) => {
    const {
        activeIcon,
        appID,
        entityMatcherFunction,
        hidden,
        icon,
        iconSize,
        label,
        passthroughProps,
        prefetchQueriesEligible,
        preload,
        tabKey,
        testid,
        url,
    } = tabConfig;

    if (hidden) return null;

    const tabProps = {
        activeIcon,
        appID,
        badgeCount,
        badgeRenderer,
        customIcon,
        entityMatcherFunction,
        icon,
        iconSize,
        isActiveTabOverride,
        label,
        lastUsedTimestamp,
        nuxRef,
        passthroughProps,
        pendingTabKey,
        position,
        prefetchQueriesEligible,
        preload,
        setIsPendingTab,
        spriteIcon,
        tabKey,
        tabRenderer,
        testid,
        url,
    };

    const TabComponent = tabKey === 'more' ? CometTopNavMoreTab : CometTopNavTab;

    return <TabComponent responsiveStyle {...tabProps} />;
};

CometTopNavTabComponentShared.displayName = `${CometTopNavTabComponentShared.name} [from CometTopNavTabComponentShared]`;

export default memo(CometTopNavTabComponentShared);
