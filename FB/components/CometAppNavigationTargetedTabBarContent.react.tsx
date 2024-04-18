// __d("CometAppNavigationTargetedTabBarContent.react", ["CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql", "CometLoggedInTargetedTabsListWithIcons", "CometLoggedOutTargetedTabsList", "CometPlaceholder.react", "CometProfilePlusAdminEducationNuxTourStrings", "CometRelay", "CometTargetedTabsGlimmers.react", "CometTopNavTabRenderer.react", "CometTopNavTargetedTabWrapper.react", "react", "unrecoverableViolation", "useCometNUXTourTarget", "useCometTooltipQP", "useShouldRenderFullTopNav"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j = i || (i = d("react")),
//         k = i,
//         l = k.useCallback,
//         m = k.useState,
//         n = {
//             calloutWidth: {
//                 maxWidth: "xw5ewwj",
//                 $$css: !0
//             }
//         };

//     function a() {
//         return j.jsx(c("CometPlaceholder.react"), {
//             fallback: j.jsx(c("CometTargetedTabsGlimmers.react"), {}),
//             children: j.jsx(o, {})
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     var o = j.memo(e);

//     function e() {
//         var a, e, f = d("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql"), {
//                 enableFeedsTabNux: !0
//             }),
//             g = (a = f == null ? void 0 : (a = f.viewer) == null ? void 0 : (a = a.actor) == null ? void 0 : a.id) != null ? a : "";
//         a = f == null ? void 0 : (a = f.viewer) == null ? void 0 : (a = a.actor) == null ? void 0 : a.name;
//         e = f == null ? void 0 : (e = f.viewer) == null ? void 0 : (e = e.tab_bookmarks) == null ? void 0 : e.edges;
//         var i = m(null),
//             k = i[0],
//             o = i[1],
//             p = c("useCometNUXTourTarget")({
//                 description: d("CometProfilePlusAdminEducationNuxTourStrings").getNewsfeedNuxBody(a),
//                 targetKey: "NEWSFEED_TAB_STEP",
//                 title: d("CometProfilePlusAdminEducationNuxTourStrings").getNewsfeedNuxTitle()
//             });
//         i = f == null ? void 0 : (i = f.viewer) == null ? void 0 : (a = i.feeds_tab_tooltip) == null ? void 0 : (f = a.nodes) == null ? void 0 : f[0];
//         a = c("useCometTooltipQP")(i, {
//             position: "below",
//             xstyle: n.calloutWidth
//         });
//         f = m({
//             apNux: p,
//             feedsNux: a
//         });
//         var q = f[0],
//             r = f[1],
//             s = l(function (a, b) {
//                 o(a ? b : null), b === "most_recent_feed" && r({
//                     apNux: p,
//                     feedsNux: void 0
//                 })
//             }, [o, r, p]);
//         i = c("useShouldRenderFullTopNav")();
//         var t = i ? c("CometLoggedInTargetedTabsListWithIcons") : c("CometLoggedOutTargetedTabsList");
//         if (e == null || e.length === 0) throw c("unrecoverableViolation")("Targeted tabs return null or emtpy array", "comet_ui");
//         a = t.get("More");
//         f = e.map(function (a, b) {
//             var d, e;
//             d = a == null ? void 0 : (d = a.node) == null ? void 0 : (d = d.bookmarked_node) == null ? void 0 : d.id;
//             e = a == null ? void 0 : (e = a.node) == null ? void 0 : e.last_used_timestamp;
//             if (d == null) return null;
//             d = t.get(d);
//             if (d == null) return;
//             var f = d.badgeComponent,
//                 h = d.badgeSubscriptionCallbackForTargetedTabs,
//                 i = d.badgeTestID;
//             d = babelHelpers.objectWithoutPropertiesLoose(d, ["badgeComponent", "badgeSubscriptionCallbackForTargetedTabs", "badgeTestID"]);
//             return j.jsx(c("CometTopNavTargetedTabWrapper.react"), {
//                 actorID: g,
//                 badgeComponent: f,
//                 badgeCount: (a = a == null ? void 0 : (f = a.node) == null ? void 0 : f.unread_count) != null ? a : 0,
//                 badgeSubscriptionCallback: h,
//                 badgeTestID: i,
//                 lastUsedTimestamp: e,
//                 nuxRef: q,
//                 pendingTabKey: k,
//                 position: b,
//                 setIsPendingTab: s,
//                 tabConfig: d,
//                 tabRenderer: c("CometTopNavTabRenderer.react")
//             }, d.url)
//         }).filter(Boolean);
//         if (a != null) {
//             a.badgeComponent;
//             a.badgeSubscriptionCallbackForTargetedTabs;
//             a.badgeTestID;
//             i = babelHelpers.objectWithoutPropertiesLoose(a, ["badgeComponent", "badgeSubscriptionCallbackForTargetedTabs", "badgeTestID"]);
//             f.push(j.jsx(c("CometTopNavTargetedTabWrapper.react"), {
//                 actorID: g,
//                 pendingTabKey: k,
//                 position: e.length,
//                 setIsPendingTab: s,
//                 tabConfig: i,
//                 tabRenderer: c("CometTopNavTabRenderer.react")
//             }, "more_tab"))
//         }
//         return f
//     }
//     k = j.memo(a);
//     g["default"] = k
// }), 98);




import React, { memo, useCallback, useState } from 'react';
import { useLazyLoadQuery } from 'CometRelay';
import CometPlaceholder from 'CometPlaceholder.react';
import CometTargetedTabsGlimmers from 'CometTargetedTabsGlimmers.react';
import CometTopNavTabRenderer from 'CometTopNavTabRenderer.react';
import CometTopNavTargetedTabWrapper from 'CometTopNavTargetedTabWrapper.react';
import {
  CometAppNavigationTargetedTabBarContentInnerImplQuery as TargetedTabBarContentQuery,
} from 'CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql';
import CometLoggedInTargetedTabsListWithIcons from 'CometLoggedInTargetedTabsListWithIcons';
import CometLoggedOutTargetedTabsList from 'CometLoggedOutTargetedTabsList';
import CometProfilePlusAdminEducationNuxTourStrings from 'CometProfilePlusAdminEducationNuxTourStrings';
import { useCometNUXTourTarget, useCometTooltipQP, useShouldRenderFullTopNav } from 'react';
import { unrecoverableViolation } from 'unrecoverableViolation';


interface TabBookmarkEdge {
    node?: {
      bookmarked_node?: {
        id?: string;
    };
    last_used_timestamp?: number;
    unread_count?: number;
    };
}

  
const calloutWidth = {
  maxWidth: "xw5ewwj",
  $$css: true,
};

function CometAppNavigationTargetedTabBarContent() {
    return (
      <CometPlaceholder fallback={<CometTargetedTabsGlimmers />}>
        <CometAppNavigationTargetedTabBarContentImpl />
      </CometPlaceholder>
    );
  }

CometAppNavigationTargetedTabBarContent.displayName = `${CometAppNavigationTargetedTabBarContent.name}`;


const CometAppNavigationTargetedTabBarContentImpl: React.FC<Props> = () => {
  const [isPendingTabKey, setPendingTabKey] = useState<string | null>(null);

  const { data: viewerData } = useLazyLoadQuery<TargetedTabBarContentQuery>(
    TargetedTabBarContentQuery,
    { enableFeedsTabNux: true }
  );

  const actorID = viewerData?.viewer?.actor?.id || '';
  const actorName = viewerData?.viewer?.actor?.name || '';
  const tabEdges = viewerData?.viewer?.tab_bookmarks?.edges || [];
  
  const newsfeedNuxBody = CometProfilePlusAdminEducationNuxTourStrings.getNewsfeedNuxBody(actorName);
  const newsfeedNuxTitle = CometProfilePlusAdminEducationNuxTourStrings.getNewsfeedNuxTitle();

  const apNux = useCometNUXTourTarget({
    description: newsfeedNuxBody,
    targetKey: "NEWSFEED_TAB_STEP",
    title: newsfeedNuxTitle,
  });

  const feedsNux = viewerData?.viewer?.feeds_tab_tooltip?.nodes?.[0];

  const tooltipConfig = useCometTooltipQP(feedsNux, { position: "below", xstyle: calloutWidth });

  const [nuxRef, setNuxRef] = useState({
    apNux,
    feedsNux: tooltipConfig
  });

  const setIsPendingTab = useCallback(
    (tabKey, position) => {
      setPendingTabKey(tabKey ?? null);
      if (position === 'most_recent_feed') {
        setNuxRef({
          apNux: feedsNux,
          feedsNux: undefined
        });
      }
    },
    [setPendingTabKey, feedsNux]
  );

  const shouldRenderFullTopNav = useShouldRenderFullTopNav();
  const TabsList = shouldRenderFullTopNav
    ? CometLoggedInTargetedTabsListWithIcons
    : CometLoggedOutTargetedTabsList;

  if (!tabEdges || tabEdges.length === 0) {
    unrecoverableViolation("Targeted tabs return null or empty array", "comet_ui");
  }

  const MoreTab = TabsList.get("More");
  const tabList = tabEdges
    .map((edge: TabBookmarkEdge, index) => {
      const node = edge?.node;
      if (!node) return null;

      const { bookmarked_node: { id: nodeId } = {}, last_used_timestamp: lastUsedTimestamp} = node;
      if (!nodeId) return null;

      const tabConfig = TabsList.get(nodeId);
      if (!tabConfig) return null;

      const {
        badgeComponent,
        badgeSubscriptionCallbackForTargetedTabs,
        badgeTestID,
        ...restTabConfig
      } = tabConfig;

      return (
        <CometTopNavTargetedTabWrapper
          key={index}
          actorID={actorID}
          badgeComponent={badgeComponent}
          badgeCount={node?.unread_count || 0}
          badgeSubscriptionCallback={badgeSubscriptionCallbackForTargetedTabs}
          badgeTestID={badgeTestID}
          lastUsedTimestamp={lastUsedTimestamp}
          nuxRef={nuxRef}
          pendingTabKey={isPendingTabKey}
          position={index}
          setIsPendingTab={setIsPendingTab}
          tabConfig={restTabConfig}
          tabRenderer={CometTopNavTabRenderer}
        />
      );
    })
    .filter(Boolean);

  if (MoreTab) {
    const { badgeComponent, badgeSubscriptionCallbackForTargetedTabs, badgeTestID, ...moreTabConfig } =
      MoreTab;

    tabList.push(
      <CometTopNavTargetedTabWrapper
        key="more_tab"
        actorID={actorID}
        pendingTabKey={isPendingTabKey}
        position={tabEdges.length}
        setIsPendingTab={setIsPendingTab}
        tabConfig={moreTabConfig}
        tabRenderer={CometTopNavTabRenderer}
      />
    );
  }

  return (
    <>{tabList}</>
  );
};

export default memo(CometAppNavigationTargetedTabBarContent);
