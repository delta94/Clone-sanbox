__d("useMWChatStateV2CrossTabSync", ["I64", "MWChatStateV2IsMinimized", "MWChatStateV2IsOpen", "MWChatStateV2Types", "MWPActor.react", "react", "recoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.useEffect,
        k = b.useMemo;

    function l(a, b) {
        a == null ? void 0 : a.postMessage(b)
    }

    function m(a, b) {
        if (a == null) return function () {};
        var c = function (a) {
            return b(a.data)
        };
        a.addEventListener("message", c);
        return function () {
            a.removeEventListener("message", c)
        }
    }

    function n() {
        var a = d("MWPActor.react").useActor();
        return k(function () {
            return window.BroadcastChannel ? new BroadcastChannel("MWChatStateV2_" + (i || (i = d("I64"))).to_string(a)) : null
        }, [a])
    }

    function o(a) {
        a = Array.from(a.tabs.values());
        var b = [];
        a.forEach(function (a) {
            var c = a.tabType;
            if (c.type === d("MWChatStateV2Types").MWChatStateTabType.ComposeTab) return;
            c = c.threadKeyDescriptor;
            var e = c.threadKey;
            c = c.threadType;
            b.push({
                closeWatermark: a.closeWatermark,
                openWatermark: a.openWatermark,
                threadKey: (i || (i = d("I64"))).to_string(e),
                threadType: i.to_string(c)
            })
        });
        return b
    }

    function p(a, b, c) {
        return [{
            inserter: function (a) {
                return {
                    clientForcedMinimizeWatermark: a.clientForcedMinimizeWatermark,
                    closeWatermark: a.closeWatermark,
                    minimizeWatermark: c,
                    openFlyoutWatermark: a.openFlyoutWatermark,
                    openWatermark: a.openWatermark,
                    tabId: a.tabId,
                    tabType: a.tabType
                }
            },
            tabConfig: {
                shouldFocus: !1
            },
            tabType: {
                threadKeyDescriptor: {
                    clientThreadKey: void 0,
                    threadKey: a,
                    threadType: b
                },
                type: d("MWChatStateV2Types").MWChatStateTabType.ChatTab
            },
            type: d("MWChatStateV2Types").MWChatStateActionsType.UpsertTab,
            updater: function (a) {
                return d("MWChatStateV2IsOpen").isOpen(void 0, a) ? a : {
                    clientForcedMinimizeWatermark: a.clientForcedMinimizeWatermark,
                    closeWatermark: a.closeWatermark,
                    minimizeWatermark: c,
                    openFlyoutWatermark: a.openFlyoutWatermark,
                    openWatermark: a.openWatermark,
                    tabId: a.tabId,
                    tabType: a.tabType
                }
            }
        }]
    }

    function q(a, b) {
        return [{
            tabConfig: {
                shouldFocus: !1
            },
            threadKey: a,
            type: d("MWChatStateV2Types").MWChatStateActionsType.UpdateTabByThreadKey,
            updater: function (a) {
                if (d("MWChatStateV2IsMinimized").isMinimized(void 0, a)) return {
                    clientForcedMinimizeWatermark: a.clientForcedMinimizeWatermark,
                    closeWatermark: b,
                    minimizeWatermark: a.minimizeWatermark,
                    openFlyoutWatermark: a.openFlyoutWatermark,
                    openWatermark: a.openWatermark,
                    tabId: a.tabId,
                    tabType: a.tabType
                };
                else return a
            }
        }]
    }

    function a(a, b, e, f) {
        var g = n();
        j(function () {
            if (e) {
                f(function () {
                    return !1
                });
                var b = o(a);
                l(g, b)
            }
        }, [a, g, e, f]);
        j(function () {
            return m(g, function (a) {
                try {
                    a = a;
                    a.forEach(function (a) {
                        var c = (i || (i = d("I64"))).of_string(a.threadKey),
                            e = i.of_string(a.threadType),
                            f = a.closeWatermark;
                        a = a.openWatermark;
                        if (a > f) return b(p(c, e, a));
                        else return b(q(c, f))
                    });
                    return
                } catch (a) {
                    c("recoverableViolation")("Cross-tab sync error", "messenger_comet")
                }
            })
        }, [g, b])
    }
    g["default"] = a
}), 98);

import { I64 } from "I64";
import { isMinimized as MWChatStateV2IsMinimized, isOpen as MWChatStateV2IsOpen } from "MWChatStateV2";
import { MWChatStateTabType, MWChatStateActionsType } from "MWChatStateV2Types";
import { useActor } from "MWPActor.react";
import { useEffect, useMemo } from "react";
import { recoverableViolation } from "recoverableViolation";

interface ChatTabInfo {
  closeWatermark: number;
  openWatermark: number;
  threadKey: string;
  threadType: string;
}

interface TabConfig {
  shouldFocus: boolean;
}

interface TabType {
  type: MWChatStateTabType;
  threadKeyDescriptor: {
    clientThreadKey?: undefined;
    threadKey: I64;
    threadType: I64;
  };
}

interface TabUpdateData {
  clientForcedMinimizeWatermark: number;
  closeWatermark: number;
  minimizeWatermark: number;
  openFlyoutWatermark: number;
  openWatermark: number;
  tabId: string;
  tabType: TabType;
}

function postMessage(channel: BroadcastChannel | null, data: any) {
  channel?.postMessage(data);
}

function addMessageListener(
  channel: BroadcastChannel | null,
  callback: (event: any) => void
): () => void {
  if (!channel) return () => {};
  const listener = (event: MessageEvent<any>) => callback(event);
  channel.addEventListener("message", listener);
  return () => channel.removeEventListener("message", listener);
}


function useMWChatStateV2CrossTabSync(
  tabs: Map<string, TabUpdateData>,
  dispatch: (actions: any[]) => void,
  shouldSendUpdates: boolean,
  setShouldSendUpdates: (value: boolean) => void
) {
  const actor = useActor();
  const channel = useMemo(() => {
    return window.BroadcastChannel
      ? new BroadcastChannel(`MWChatStateV2_${I64.to_string(actor)}`)
      : null;
  }, [actor]);

  useEffect(() => {
    if (shouldSendUpdates) {
      setShouldSendUpdates(false);
      const chatTabInfos = Array.from(tabs.values()).map((tab) => {
        const { type } = tab.tabType;
        if (type === MWChatStateTabType.ComposeTab) return;
        const { threadKey, threadType } = type.threadKeyDescriptor;
        return {
          closeWatermark: tab.closeWatermark,
          openWatermark: tab.openWatermark,
          threadKey: I64.to_string(threadKey),
          threadType: I64.to_string(threadType),
        };
      });
      postMessage(channel, chatTabInfos);
    }
  }, [tabs, channel, shouldSendUpdates, setShouldSendUpdates]);

  useEffect(() => {
    return addMessageListener(channel, (event) => {
      try {
        event.forEach((info: ChatTabInfo) => {
          const threadKey = I64.of_string(info.threadKey);
          const threadType = I64.of_string(info.threadType);
          const closeWatermark = info.closeWatermark;
          const openWatermark = info.openWatermark;

          if (openWatermark > closeWatermark) {
            dispatch(
              createUpsertTabActions(threadKey, threadType, openWatermark)
            );
          } else {
            dispatch(
              createUpdateTabActions(threadKey, closeWatermark)
            );
          }
        });
      } catch (error) {
        recoverableViolation("Cross-tab sync error", "messenger_comet");
      }
    });
  }, [channel, dispatch]);
}

function createUpsertTabActions(
  threadKey: I64,
  threadType: I64,
  minimizeWatermark: number
): any[] {
  return [{
    inserter: (tabData: TabUpdateData) => ({
      clientForcedMinimizeWatermark: tabData.clientForcedMinimizeWatermark,
      closeWatermark: tabData.closeWatermark,
      minimizeWatermark,
      openFlyoutWatermark: tabData.openFlyoutWatermark,
      openWatermark: tabData.openWatermark,
      tabId: tabData.tabId,
      tabType: tabData.tabType
    }),
    tabConfig: {
      shouldFocus: false
    },
    tabType: {
      threadKeyDescriptor: {
        clientThreadKey: undefined,
        threadKey,
        threadType
      },
      type: MWChatStateTabType.ChatTab
    },
    type: MWChatStateActionsType.UpsertTab,
    updater: (tabData: TabUpdateData) => (
      MWChatStateV2IsOpen(undefined, tabData) ? tabData : {
        clientForcedMinimizeWatermark: tabData.clientForcedMinimizeWatermark,
        closeWatermark: tabData.closeWatermark,
        minimizeWatermark,
        openFlyoutWatermark: tabData.openFlyoutWatermark,
        openWatermark: tabData.openWatermark,
        tabId: tabData.tabId,
        tabType: tabData.tabType
      }
    )
  }];
}

function createUpdateTabActions(threadKey: I64, closeWatermark: number): any[] {
  return [{
    tabConfig: {
      shouldFocus: false
    },
    threadKey: I64.to_string(threadKey),
    type: MWChatStateActionsType.UpdateTabByThreadKey,
    updater: (tabData: TabUpdateData) => (
      MWChatStateV2IsMinimized(undefined, tabData) ? {
        clientForcedMinimizeWatermark: tabData.clientForcedMinimizeWatermark,
        closeWatermark,
        minimizeWatermark: tabData.minimizeWatermark,
        openFlyoutWatermark: tabData.openFlyoutWatermark,
        openWatermark: tabData.openWatermark,
        tabId: tabData.tabId,
        tabType: tabData.tabType
      } : tabData
    )
  }];
}

export default useMWChatStateV2CrossTabSync;