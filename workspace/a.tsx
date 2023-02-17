import React, { useCallback, useMemo } from 'react';
import { useRelayEnvironment } from 'RelayHooks';
import { useFluxStore } from 'FluxHooks';
import { requireDeferred, gkx, isClickWithModifierKey, qpl } from 'fbjs/lib';
import CurrentUser from 'CurrentUser';
import WorkGalahadUIAppNavButton from 'WorkGalahadUIAppNavButton.react';
import WorkGalahadUIAppTabSelectorIcon from 'WorkGalahadUIAppTabSelectorIcon.react';
import WorkGalahadUIAppsListItem from 'WorkGalahadUIAppsListItem.react';
import WorkGalahadSearchOverlayEventEmitter from 'WorkGalahadSearchOverlayEventEmitter';
import WorkGalahadNavActions from 'WorkGalahadNavActions';
import WorkGalahadNavStore from 'WorkGalahadNavStore';
import WorkGalahadNavUIState from 'WorkGalahadNavUIState';
import WorkGalahadTabTypedLogger from 'WorkGalahadTabTypedLogger';
import WorkMeetingFalcoEvent from 'WorkMeetingFalcoEvent';
import WorkCometEventNUX from 'WorkCometEventNUX.react';
import useChannelGeminiEntryPoint from 'useChannelGeminiEntryPoint';
import useWorkGalahadInteractionTracing from 'useWorkGalahadInteractionTracing';
import useWorkUserStatus from 'useWorkUserStatus';

const deferredLogImpressionFBNuxMutation = requireDeferred('CometLogImpressionFBNuxMutation');
const deferredNavigationFalcoEvent = requireDeferred('WorkNavigationFalcoEvent');
const isHomeTabEnabled = gkx('3826');
const homeTabIDs = new Set(['knowledge_library', 'events', 'shifts']);
if (isHomeTabEnabled) {
  homeTabIDs.add('home');
}

function getSelectedAppTabID() {
  return WorkGalahadNavStore.getSelectedAppTabID();
}

function AppTabItem({ badgeCount, isFirst, onHoverIn, onPress, tab, testid }) {
  const environment = useRelayEnvironment();
  const defaultEntityKey = tab.defaultEntityKey;
  const href = tab.href;
  const title = tab.title;
  const trackingNodeType = tab.trackingNodeType;
  const tabIconName = tab.tabIconName;
  const id = tab.id;
  const badgeRenderer = tab.badgeRenderer;
  const nuxConfig = tab.nuxConfig;

  const userStatus = useWorkUserStatus(CurrentUser.getID()).userStatus;

  const { isAutoHideEnabled } = WorkGalahadNavUIState.useNavUIState();

  const selectedTabID = useFluxStore(WorkGalahadNavStore, getSelectedAppTabID);
  const isSelected = selectedTabID === id;

  const displayTitle = formatTitle(title, badgeCount);

  const [entryPoint, setEntryPoint, isEntryPointEnabled, clearEntryPoint, logEntryPoint] = useChannelGeminiEntryPoint(tab.channelEntryPoint, id);

  const onHover = useCallback(() => {
    onHoverIn?.();
    setEntryPoint(true);
  }, [onHoverIn, setEntryPoint]);

  function handleTabClick(event, tab) {
    event.preventDefault();
    setSelectedTab(tab.id);
    const eventLogger = new WorkGalahadTabTypedLogger();
    eventLogger
      .setSelectedTab(tab.id)
      .setEvent("CLICK")
      .setBadgeCount(tab.badgeCount)
      .log();
    if (tab.id === "meeting") {
      WorkMeetingFalcoEvent.log(() => ({
        event: "MEETING_TAB_CLICKED",
        surface: "MEETING_TAB",
      }));
    }
    if (isClickWithModifierKey(event)) {
      return;
    }
    WorkGalahadSearchOverlayEventEmitter.emit("hide");
    const tracingHook = useWorkGalahadInteractionTracing(
      qpl._(53018625, "5586"),
      "fast",
      "INTERACTION",
      `work_galahad.channel.${tab.id}`
    );
    tracingHook((tracingContext) => {
      tracingContext.addMetadata("has_preloaded", channelHasPreloaded ? 1 : 0);
      handleChannelFocus(tab);
      const shouldOpenInNewTab = shouldOpenTabInNewWindow();
      if (tab.href && tab.href !== "#" && shouldOpenInNewTab) {
        window.open(tab.href);
      } else {
        d("WorkGalahadNavActions").selectAppTabID(tab.id);
        d("WorkGalahadNavActions").allowChannelAutoFocus();
        const shouldNavigate =
          shouldOpenInNewTab || !tab.href || tab.href === "#" || !shouldOpenUrlInWork;
        if (shouldNavigate) {
          return;
        }
        handleUrlNavigation(tab);
      }
      d("WorkGalahadNavActions").dismissAllStackedChannels();
      WorkNavigationFalcoEvent.onReady((logger) => {
        logger.log(() => ({
          event: selectedTab === tab.id ? "app_tab_double_click" : "app_tab_click",
          app_tab: tab.id,
        }));
      });
    });
  }




function formatTitle(a, b) {
    return b > 0 ? h._({
        "*": "{title}, {number} new items",
        "_1": "{title}, 1 new item"
    }, [h._plural(b, "number"), h._param("title", a)]) : a
}