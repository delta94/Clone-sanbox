__d("WorkGalahadAppTabItem.react", ["fbt", "CurrentUser", "FluxHooks", "GeminiNavAndChannelContext", "RelayHooks", "TrackingNodes", "WorkCometEventNUX.react", "WorkGalahadNavActions", "WorkGalahadNavStore", "WorkGalahadSearchOverlayEventEmitter", "WorkGalahadTabTypedLogger", "WorkGalahadUIAppNavButton.react", "WorkGalahadUIAppTabSelectorIcon.react", "WorkGalahadUIAppsListItem.react", "gkx", "isClickWithModifierKey", "qpl", "react", "requireDeferred", "useChannelGeminiEntryPoint", "useWorkGalahadInteractionTracing", "useWorkUserStatus"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useMemo,
        m = c("requireDeferred")("WorkNavigationFalcoEvent").__setRef("WorkGalahadAppTabItem.react"),
        n = new Set(["knowledge_library", "events", "shifts", "home"]);

    function o() {
        return c("WorkGalahadNavStore").getSelectedAppTabID()
    }

    function a(a, b) {
        var e = a.badgeCount,
            f = a.isFirst,
            g = a.onHoverIn,
            h = a.onPress,
            i = a.tab;
        a = a.testid;
        d("RelayHooks").useRelayEnvironment();
        var r = i.defaultEntityKey,
            s = i.href;
        a = i.title;
        var t = i.trackingNodeType,
            u = i.tabIconName,
            v = i.id,
            w = i.badgeRenderer,
            x = i.nuxConfig,
            y = c("useWorkUserStatus")(c("CurrentUser").getID());
        y = y.userStatus;
        var z = d("GeminiNavAndChannelContext").useNavUIState();
        z = z.isAutoHideEnabled;
        var A = d("FluxHooks").useFluxStore(c("WorkGalahadNavStore"), o),
            B = A === v;
        A = p(a, e);
        i = c("useChannelGeminiEntryPoint")(i.channelEntryPoint, i.id);
        var C = i[0],
            D = i[1],
            E = i[2],
            F = i[3],
            G = i[4];
        i = k(function (a) {
            g == null ? void 0 : g(), D(a)
        }, [g, D]);
        var H = c("useWorkGalahadInteractionTracing")(c("qpl")._(53018625, "5586"), "fast", "INTERACTION", "work_galahad.channel." + v),
            I = c("gkx")("1717554") || n.has(v),
            J = k(function (a) {
                h(), H(function (b) {
                    new(c("WorkGalahadTabTypedLogger"))().setSelectedTab(v).setEvent("CLICK").setBadgeCount(e).log();
                    if (c("isClickWithModifierKey")(a)) return;
                    c("WorkGalahadSearchOverlayEventEmitter").emit("hide");
                    b.addMetadata("has_preloaded", G ? 1 : 0);
                    C();
                    d("WorkGalahadNavActions").selectAppTabID(v);
                    d("WorkGalahadNavActions").allowChannelAutoFocus();
                    var f = I || B;
                    s != null && s !== "" && s !== "#" && f && q(b, v, r, s);
                    d("WorkGalahadNavActions").dismissAllStackedChannels();
                    m.onReady(function (a) {
                        a = a.log;
                        a(function () {
                            return {
                                event: B ? "app_tab_double_click" : "app_tab_click",
                                app_tab: v
                            }
                        })
                    })
                })
            }, [e, r, G, s, v, B, C, H, I, h]),
            K = l(function () {
                return j.jsx(c("WorkGalahadUIAppTabSelectorIcon.react"), {
                    selected: B,
                    icon: u
                })
            }, [B, u]),
            L = I ? !1 : !B,
            M = {
                href: s != null ? s : void 0,
                elementId: v,
                label: a,
                ariaLabel: A,
                selected: B,
                useGreyBadging: z || y === "doNotDisturb",
                linkDataFT: t != null ? c("TrackingNodes").getTrackingInfo(t) : void 0,
                "data-testid": "app_tab_selector_" + v,
                onPress: J,
                preventLocalNavigation: L,
                addOn: K,
                BadgeRenderer: w,
                onHoverIn: i,
                onHoverOut: E,
                onPressIn: F
            };
        a = x ? j.jsx(d("WorkCometEventNUX.react").WorkCometEventNUX, babelHelpers["extends"]({}, x, {
            children: function (a) {
                return j.jsx(c("WorkGalahadUIAppNavButton.react"), babelHelpers["extends"]({}, M, {
                    ref: a
                }))
            }
        })) : j.jsx(c("WorkGalahadUIAppNavButton.react"), babelHelpers["extends"]({}, M));
        return j.jsx(c("WorkGalahadUIAppsListItem.react"), {
            ref: b,
            testid: void 0,
            withTopSpacing: !f,
            children: a
        }, v)
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function p(a, b) {
        return b > 0 ? h._({
            "*": "{title}, {number} new items",
            "_1": "{title}, 1 new item"
        }, [h._plural(b, "number"), h._param("title", a)]) : a
    }

    function q(a, b, c, e) {
        a.addMetadata("full_page_transition", 1), d("WorkGalahadNavActions").markPendingTransition({
            appTabID: b,
            entityKey: c,
            uri: e
        })
    }
    e = j.forwardRef(a);
    b = j.memo(e);
    g["default"] = b
}), 98);


import React, { 
    memo, 
    useCallback, 
    useMemo, 
    ForwardRefRenderFunction 
  } from 'react';

import fbt from 'fbt';
import requireDeferred from 'requireDeferred';
import WorkNavigationFalcoEvent from 'WorkNavigationFalcoEvent';
import { useFluxStore } from 'FluxHooks';
import { useRelayEnvironment } from 'RelayHooks';
import { TrackingNodes, getTrackingInfo } from 'TrackingNodes';
import { useWorkUserStatus } from 'useWorkUserStatus';
import { CurrentUser } from 'CurrentUser';
import { isClickWithModifierKey } from 'isClickWithModifierKey';
import { useChannelGeminiEntryPoint } from 'useChannelGeminiEntryPoint';
import { useWorkGalahadInteractionTracing } from 'useWorkGalahadInteractionTracing';
import { useNavUIState } from 'useNavUIState';

import { WorkGalahadNavStore } from 'WorkGalahadNavStore';
import { WorkGalahadNavActions } from 'WorkGalahadNavActions';
import { WorkGalahadSearchOverlayEventEmitter } from 'WorkGalahadSearchOverlayEventEmitter';
import { WorkGalahadTabTypedLogger } from 'WorkGalahadTabTypedLogger';
import { WorkGalahadUIAppNavButton } from 'WorkGalahadUIAppNavButton.react';
import { WorkGalahadUIAppTabSelectorIcon } from 'WorkGalahadUIAppTabSelectorIcon.react';
import { WorkGalahadUIAppsListItem } from 'WorkGalahadUIAppsListItem.react';
import { gkx } from 'gkx';
import { qpl } from 'qpl';

import { WorkCometEventNUX } from 'WorkCometEventNUX.react';      
  
const autoExpandTabs = new Set(['knowledge_library', 'events', 'shifts', 'home']);

const useSelectedTabID = () => {
    return WorkGalahadNavStore.getSelectedAppTabID();
};

function getBadgeTitle(title: string, count: number) {
    if (count > 0) {
        return fbt(
            '*title* {number} new items',
            [
                fbt._param('title', title),
                fbt._plural(count, 'number')  
            ]
        );
    } 
    return title;
}

function logFullPageTransition(
    tracer: any, 
    tabID: string, 
    entityKey: string, 
    uri: string
) {
    tracer.addMetadata('full_page_transition', 1);
    WorkGalahadNavActions.markPendingTransition({
        appTabID: tabID, 
        entityKey,
        uri,
    });
} 


const workNavigationFalcoEvent = requireDeferred(WorkNavigationFalcoEvent)
  
interface Props {
    badgeCount?: number;
    isFirst?: boolean;
    onHoverIn?: () => void;
    onPress?: () => void;
    tab: Tab;
    testid?: string;
}


export interface WorkGalahadUIAppNavButtonProps {
    label?: string;
    ariaLabel?: string;
    selected?: boolean;
    useGreyBadging?: boolean;
    badgeCount?: number;
    BadgeRenderer?: React.ComponentType;
    href?: string;
    onPress?: () => void;
    elementId: string;
    linkDataFT?: object;
    largeAddOn?: boolean;
    preventLocalNavigation?: boolean;
    addOn?: React.ReactNode;
    onPressIn?: () => void;
    onHoverIn?: () => void;
    onHoverOut?: () => void;
    'data-testid'?: string;
    target?: string;
    tooltipHidden?: boolean;
}
  
interface Tab {
    defaultEntityKey: string;
    href?: string;
    title: string; 
    trackingNodeType?: TrackingNodeType;
    tabIconName: string;
    id: string;
    badgeRenderer?: React.ComponentType;
    nuxConfig?: NUXConfig;
}
  
type NUXConfig = {
    // ...
};

type TrackingNodeType = string;
  
  const WorkGalahadAppTabItem: ForwardRefRenderFunction<HTMLDivElement, Props> = (
    {
      badgeCount = 0,
      isFirst,
      onHoverIn,  
      onPress,
      tab,
      testid
    },
    ref
  ) => {
  
    const { 
      defaultEntityKey,
      href,
      title, 
      trackingNodeType,
      tabIconName,
      id,
      badgeRenderer,
      nuxConfig,
      channelEntryPoint
    } = tab;

    const { userStatus } = useWorkUserStatus(CurrentUser.getID());
    const { isAutoHideEnabled } = useNavUIState();

    const selectedTabID = useFluxStore(WorkGalahadNavStore, useSelectedTabID);
    const isSelected = selectedTabID === id;
    const badgeTitle = getBadgeTitle(title, badgeCount);
    const [entryPoint, onEntryPointLoad, onEntryPointHoverOut, onEntryPointPressIn, hasPreloaded] = 
    useChannelGeminiEntryPoint(channelEntryPoint, id);

    useRelayEnvironment();
  
    const onHoverInCallback = useCallback(
        (e) => {
          onHoverIn?.();
          onEntryPointLoad(e);
        },
        [onHoverIn, onEntryPointLoad]
    );

    const interactionTracingCallback = useWorkGalahadInteractionTracing(
        qpl._(53018625, "5586"), 
        'fast', 
        'INTERACTION', 
        `work_galahad.channel.${id}`
    );
    const autoExpand = gkx('1717554') || autoExpandTabs.has(id);

    const onPressCallback = useCallback(
        (e) => {
          onPress();
          interactionTracingCallback((tracer) => {
            
            new WorkGalahadTabTypedLogger()
              .setSelectedTab(id)
              .setEvent('CLICK')
              .setBadgeCount(badgeCount)
              .log();

            if (isClickWithModifierKey(e)) {
              return;
            }

            WorkGalahadSearchOverlayEventEmitter.emit('hide');

            tracer.addMetadata('has_preloaded', hasPreloaded ? 1 : 0);

            entryPoint();
            WorkGalahadNavActions.selectAppTabID(id);
            WorkGalahadNavActions.allowChannelAutoFocus();

            const shouldLogTransition = autoExpand || isSelected;
            if (shouldLogTransition && href != null && href !== '' && href !== '#') {
              logFullPageTransition(tracer, id, defaultEntityKey, href);
            }

            WorkGalahadNavActions.dismissAllStackedChannels();

            workNavigationFalcoEvent.onReady((falcoEvent) => {
                const { log } = falcoEvent;

                log(() => {
                    return {
                        event: isSelected ? "app_tab_double_click" : "app_tab_click",
                        app_tab: id
                    }
                })
                
            })

          });
        },
        [badgeCount, defaultEntityKey, hasPreloaded, href, id, interactionTracingCallback, isSelected, onEntryPointLoad, onPress, autoExpand]  
    );
  
    const icon = useMemo(() => {
      return (
        <WorkGalahadUIAppTabSelectorIcon 
          selected={isSelected}
          icon={tabIconName}
        />
      );
    }, [isSelected, tabIconName]);
  
    const preventLocalNavigation = !autoExpand && !isSelected;
  
    const buttonProps: WorkGalahadUIAppNavButtonProps = {
        href,
        elementId: id,
        label: title,
        ariaLabel: badgeTitle,
        selected: isSelected,
        useGreyBadging: isAutoHideEnabled || userStatus === 'doNotDisturb',
        linkDataFT: trackingNodeType ? TrackingNodes.getTrackingInfo(trackingNodeType) : undefined,
        'data-testid': `app_tab_selector_${id}`,
        onPress: onPressCallback,
        preventLocalNavigation,
        addOn: icon,
        BadgeRenderer: badgeRenderer,
        onHoverIn: onHoverInCallback,
        onHoverOut: onEntryPointHoverOut,
        onPressIn: onEntryPointPressIn,
    };
  
    const button = nuxConfig ? (
      <WorkCometEventNUX {...nuxConfig}>
        {ref => <WorkGalahadUIAppNavButton {...buttonProps} ref={ref} />} 
      </WorkCometEventNUX>
    ) : (
      <WorkGalahadUIAppNavButton {...buttonProps} />
    );
  
    return (
      <WorkGalahadUIAppsListItem
        ref={ref}
        testid={testid}
        withTopSpacing={!isFirst}
      >
        {button}
      </WorkGalahadUIAppsListItem>
    );
  
  };
  
  WorkGalahadAppTabItem.displayName = `WorkGalahadAppTabItem [from ${__filename__}]`;
  
  export default memo(WorkGalahadAppTabItem);