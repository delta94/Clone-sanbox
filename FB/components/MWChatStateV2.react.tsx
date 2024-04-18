__d("MWChatStateV2.react", ["CometErrorBoundary.react", "FBLogger", "I64", "MWChatInteraction", "MWChatStateContext", "MWChatStateV2IsClosed", "MWChatStateV2IsOpen", "MWChatStateV2Logging", "MWChatStateV2Types", "MWThreadListNewMessageState.react", "MWV2CookieReader", "MessengerWebPresenceCookieData", "RecoverableViolationWithComponentStack.react", "cr:101", "emptyObject", "react", "useMWChatStateV2CrossTabSync"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || (h = d("react")),
        k = h,
        l = k.Fragment,
        m = k.createContext,
        n = k.useCallback,
        o = k.useContext,
        p = k.useReducer,
        q = k.useState;

    function r(a, b) {
        return (a = Array.from(a.tabs.values()).find(function (a) {
            a = a.tabType;
            if (a.type === d("MWChatStateV2Types").MWChatStateTabType.ComposeTab) return b.type === d("MWChatStateV2Types").MWChatStateTabType.ComposeTab;
            else if (b.type === d("MWChatStateV2Types").MWChatStateTabType.ComposeTab) return !1;
            return (i || (i = d("I64"))).equal(a.threadKeyDescriptor.threadKey, b.threadKeyDescriptor.threadKey)
        })) == null ? void 0 : a.tabId
    }

    function s(a, b) {
        a = Array.from(a.tabs.values()).find(function (a) {
            a = a.tabType;
            if (a.type === d("MWChatStateV2Types").MWChatStateTabType.ComposeTab) return b == null;
            else if (b != null) return (i || (i = d("I64"))).equal(a.threadKeyDescriptor.threadKey, b);
            else return !1
        });
        if (a != null) return a.tabId
    }

    function t(a, b, c) {
        if (c)
            if (d("MWChatStateV2IsOpen").isOpen(void 0, b)) return b.tabId;
            else return;
        c = a.focusedTabId;
        if (c != null && c === b.tabId && !d("MWChatStateV2IsOpen").isOpen(void 0, b)) return;
        else return a.focusedTabId
    }

    function u(a, b) {
        return b.reduce(function (a, b) {
            var c = b;
            while (!0) {
                var e = c;
                switch (e.type) {
                    case d("MWChatStateV2Types").MWChatStateActionsType.UpdateState:
                        return e.state(a);
                    case d("MWChatStateV2Types").MWChatStateActionsType.UpdateTab:
                        var f, g = e.tabId;
                        if (g == null) return a;
                        var h = a.tabs.get(g);
                        if (h == null) return a;
                        var j = e.updater(h);
                        f = t(a, j, ((f = b.tabConfig) == null ? void 0 : f.shouldFocus) || !1);
                        if (j === h) return a;
                        h = new Map(a.tabs);
                        if (e.tabConfig.shouldClearOldHiddenTab === !0) {
                            e = r(a, j.tabType);
                            if (e != null && e !== g) {
                                var k = h.get(e);
                                k != null && d("MWChatStateV2IsClosed").isClosed(k) && h["delete"](e)
                            }
                        }
                        return A(f, a.mediaViewerOpenWatermark, a.nextTabId, new Map(h).set(g, j));
                    case d("MWChatStateV2Types").MWChatStateActionsType.UpdateTabByThreadKey:
                        k = s(a, b.threadKey);
                        if (k == null || b.tabConfig == null || b.updater == null) return a;
                        c = {
                            tabConfig: b.tabConfig,
                            tabId: k,
                            type: d("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
                            updater: b.updater
                        };
                        continue;
                    case d("MWChatStateV2Types").MWChatStateActionsType.UpsertTab:
                        e = b.inserter;
                        f = b.tabConfig;
                        h = b.tabType;
                        if (h != null && h.type === d("MWChatStateV2Types").MWChatStateTabType.ChatTab) {
                            g = d("MWChatInteraction").getInteractionTraceForThreadKey((i || (i = d("I64"))).to_string(h.threadKeyDescriptor.threadKey));
                            g == null ? void 0 : g.addMarkerPoint("MWChatStateUpdateOpenTab", "AppTiming")
                        }
                        j = r(a, h);
                        if (j != null && f != null && b.updater != null) {
                            c = {
                                tabConfig: f,
                                tabId: j,
                                type: d("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
                                updater: b.updater
                            };
                            continue
                        }
                        k = a.nextTabId;
                        g = {
                            clientForcedMinimizeWatermark: 0,
                            closeWatermark: 0,
                            minimizeWatermark: 0,
                            openFlyoutWatermark: 0,
                            openWatermark: 0,
                            tabId: k,
                            tabType: h
                        };
                        j = e(g);
                        h = t(a, j, (k = f == null ? void 0 : f.shouldFocus) != null ? k : !1);
                        return A(h, a.mediaViewerOpenWatermark, a.nextTabId + 1, new Map(a.tabs).set(j.tabId, j))
                }
            }
            return a
        }, a)
    }

    function v() {
        return d("MWV2CookieReader").read(c("MessengerWebPresenceCookieData").cookie)
    }
    var w = m();

    function a() {
        var a = o(w);
        if (a != null) return a;
        else return function () {
            c("FBLogger")("messenger_web_product").warn("Tried to open a chat tab on Comet under the new chat state system, MWChatStateV2. But no MWChatStateV2 was found in react context. Wrap your component in MWChatStateV2? You are likely also be part of Blue on Comet. If so do ping our oncall")
        }
    }

    function x(a) {
        a != null ? c("FBLogger")("messenger_browser_clients").catching(a).warn("Error loading MWChatStateV2") : c("FBLogger")("messenger_browser_clients").warn("Error loading MWChatStateV2")
    }

    function y(a) {
        a = a.children;
        var b = p(u, d("MWChatStateV2Types").emptyMWChatState, v),
            e = b[0],
            f = b[1];
        b = q(!1);
        var g = b[0],
            h = b[1];
        b = n(function (b, a) {
            a === void 0 && (a = !0);
            a && h(function () {
                return !0
            });
            return f(b)
        }, [f, h]);
        d("MWChatStateV2Logging").useCookieLiftLogging(e);
        c("useMWChatStateV2CrossTabSync")(e, f, g, h);
        g = o(w);
        if (g != null) return j.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "You can't nest MWChatStateV2 in another MWChatStateV2.",
            projectName: "messenger_comet"
        });
        else return j.jsx(d("MWChatStateContext").ChatStateContextProvider, {
            value: e,
            children: j.jsx(w.Provider, {
                value: b,
                children: a
            })
        })
    }
    var z = (k = b("cr:101")) != null ? k : l;

    function A(a, b, d, e) {
        return babelHelpers["extends"]({}, a != null ? {
            focusedTabId: a
        } : c("emptyObject"), {
            mediaViewerOpenWatermark: b,
            nextTabId: d,
            tabs: e
        })
    }

    function e(a) {
        a = a.children;
        a = a;
        return j.jsx(c("CometErrorBoundary.react"), {
            onError: x,
            children: j.jsx(z, {
                children: j.jsx(y, {
                    children: j.jsx(d("MWThreadListNewMessageState.react").MWThreadListNewMessageStateProvider, {
                        children: a
                    })
                })
            })
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    Object.keys(d("MWChatStateContext")).forEach(function (a) {
        if (a === "default" || a === "__esModule") return;
        g[a] = d("MWChatStateContext")[a]
    });
    g.getTabIdFromThreadKey = s;
    g.reducer = u;
    g.useDispatch = a;
    g.MWChatStateV2Provider = e
}), 98);


import * as React from "react";
import { CometErrorBoundary } from "CometErrorBoundary.react";
import { FBLogger } from "FBLogger";
import { I64 } from "I64";
import { MWChatInteraction } from "MWChatInteraction";
import { MWChatStateContext } from "MWChatStateContext";
import { MWChatStateV2IsClosed } from "MWChatStateV2IsClosed";
import { MWChatStateV2IsOpen } from "MWChatStateV2IsOpen";
import { MWChatStateV2Logging } from "MWChatStateV2Logging";
import { MWChatStateV2Types, emptyMWChatState } from "MWChatStateV2Types";
import { MWThreadListNewMessageState } from "MWThreadListNewMessageState.react";
import { MWV2CookieReader } from "MWV2CookieReader";
import { MessengerWebPresenceCookieData } from "MessengerWebPresenceCookieData";
import { RecoverableViolationWithComponentStack } from "RecoverableViolationWithComponentStack.react";
import { MAWStateContextProvider } from "MAWStateContextProvider";
import { emptyObject } from "emptyObject";
import { useMWChatStateV2CrossTabSync } from "useMWChatStateV2CrossTabSync";

const { createContext, useCallback, useContext, useReducer, useState } = React;

function getTabIdFromThreadKey(state: MWChatStateV2Types.MWChatState, threadKey: I64.I64) {
  const tab = Array.from(state.tabs.values()).find((tab) => {
    const tabType = tab.tabType;
    if (tabType.type === MWChatStateV2Types.MWChatStateTabType.ComposeTab) {
      return threadKey.type === MWChatStateV2Types.MWChatStateTabType.ComposeTab;
    } else if (threadKey.type === MWChatStateV2Types.MWChatStateTabType.ComposeTab) {
      return false;
    }
    return I64.equal(tabType.threadKeyDescriptor.threadKey, threadKey.threadKeyDescriptor.threadKey);
  });
  return tab?.tabId;
}

function getTabIdFromThreadKeyOrNull(state: MWChatStateV2Types.MWChatState, threadKey: I64.I64 | null) {
  const tab = Array.from(state.tabs.values()).find((tab) => {
    const tabType = tab.tabType;
    if (tabType.type === MWChatStateV2Types.MWChatStateTabType.ComposeTab) {
      return threadKey == null;
    } else if (threadKey != null) {
      return I64.equal(tabType.threadKeyDescriptor.threadKey, threadKey);
    } else {
      return false;
    }
  });
  return tab?.tabId;
}

function getFocusedTabId(state: MWChatStateV2Types.MWChatState, tab: MWChatStateV2Types.MWChatTab, shouldFocus: boolean) {
  if (shouldFocus) {
    if (MWChatStateV2IsOpen.isOpen(undefined, tab)) {
      return tab.tabId;
    } else {
      return;
    }
  }
  const focusedTabId = state.focusedTabId;
  if (focusedTabId != null && focusedTabId === tab.tabId && !MWChatStateV2IsClosed.isClosed(tab)) {
    return focusedTabId;
  } else {
    return state.focusedTabId;
  }
}

function reducer(state: MWChatStateV2Types.MWChatState, action: MWChatStateV2Types.MWChatStateAction): MWChatStateV2Types.MWChatState {
  return action.reduce((state, nextAction) => {
    let tab = nextAction;
    while (true) {
      const action = tab;
      switch (action.type) {
        case MWChatStateV2Types.MWChatStateActionsType.UpdateState:
          return action.state(state);
        case MWChatStateV2Types.MWChatStateActionsType.UpdateTab:
          let focusedTabId: string | undefined;
          const tabId = action.tabId;
          if (tabId == null) {
            return state;
          }
          const existingTab = state.tabs.get(tabId);
          if (existingTab == null) {
            return state;
          }
          const updatedTab = action.updater(existingTab);
          focusedTabId = getFocusedTabId(state, updatedTab, (action.tabConfig?.shouldFocus) || false);
          if (updatedTab === existingTab) {
            return state;
          }
          const newTabs = new Map<string, MWChatStateV2Types.MWChatTab>(state.tabs);
          if (action.tabConfig.shouldClearOldHiddenTab === true) {
            const oldTabId = getTabIdFromThreadKey(state, updatedTab.tabType);
            if (oldTabId != null && oldTabId !== tabId) {
              const oldTab = newTabs.get(oldTabId);
              if (oldTab != null && MWChatStateV2IsClosed.isClosed(oldTab)) {
                newTabs.delete(oldTabId);
              }
            }
          }
          return updateState(focusedTabId, state.mediaViewerOpenWatermark, state.nextTabId, newTabs.set(tabId, updatedTab));
        case MWChatStateV2Types.MWChatStateActionsType.UpdateTabByThreadKey:
          const tabIdByThreadKey = getTabIdFromThreadKeyOrNull(state, action.threadKey);
          if (tabIdByThreadKey == null || action.tabConfig == null || action.updater == null) {
            return state;
          }
          tab = {
            tabConfig: action.tabConfig,
            tabId: tabIdByThreadKey,
            type: MWChatStateV2Types.MWChatStateActionsType.UpdateTab,
            updater: action.updater,
          };
          continue;
        case MWChatStateV2Types.MWChatStateActionsType.UpsertTab:
          const inserter = action.inserter;
          const tabConfig = action.tabConfig;
          const tabType = action.tabType;
          if (tabType != null && tabType.type === MWChatStateV2Types.MWChatStateTabType.ChatTab) {
            const interactionTrace = MWChatInteraction.getInteractionTraceForThreadKey(I64.to_string(tabType.threadKeyDescriptor.threadKey));
            interactionTrace?.addMarkerPoint("MWChatStateUpdateOpenTab", "AppTiming");
          }
          const existingTabId = getTabIdFromThreadKey(state, tabType);
          if (existingTabId != null && tabConfig != null && action.updater != null) {
            tab = {
              tabConfig,
              tabId: existingTabId,
              type: MWChatStateV2Types.MWChatStateActionsType.UpdateTab,
              updater: action.updater,
            };
            continue;
          }
          const newTabId = state.nextTabId;
          const newTab: MWChatStateV2Types.MWChatTab = {
            clientForcedMinimizeWatermark: 0,
            closeWatermark: 0,
            minimizeWatermark: 0,
            openFlyoutWatermark: 0,
            openWatermark: 0,
            tabId: newTabId,
            tabType: tabType,
          };
          const newFocusedTabId = getFocusedTabId(state, inserter(newTab), (tabConfig?.shouldFocus) ?? false);
          return updateState(newFocusedTabId, state.mediaViewerOpenWatermark, state.nextTabId + 1, new Map<string, MWChatStateV2Types.MWChatTab>(state.tabs).set(newTab.tabId, newTab));
        default:
          return state;
      }
    }
  }, state);
}

const { Provider: ChatStateProvider } = createContext();

function useChatStateDispatch() {
  const chatStateContext = useContext(ChatStateProvider);
  if (chatStateContext != null) {
    return chatStateContext.dispatch;
  } else {
    FBLogger("messenger_web_product").warn(
      "Tried to open a chat tab on Comet under the new chat state system, MWChatStateV2. But no MWChatStateV2 was found in react context. Wrap your component in MWChatStateV2? You are likely also be part of Blue on Comet. If so do ping our oncall"
    );
    return () => {};
  }
}

function onError(error: Error | null) {
  if (error != null) {
    FBLogger("messenger_browser_clients").catching(error).warn("Error loading MWChatStateV2");
  } else {
    FBLogger("messenger_browser_clients").warn("Error loading MWChatStateV2");
  }
}

function MWChatStateV2Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, emptyMWChatState, () => MWV2CookieReader.read(MessengerWebPresenceCookieData.cookie));
  const [isLoaded, setIsLoaded] = useState(false);
  const handleDispatch = useCallback(
    (action, shouldLoad = true) => {
      if (shouldLoad) {
        setIsLoaded(true);
      }
      return dispatch(action);
    },
    [dispatch, setIsLoaded]
  );
  // MWChatStateV2Logging.useCookieLiftLogging(state); TODO
  useMWChatStateV2CrossTabSync(state, handleDispatch, isLoaded, setIsLoaded);
  const chatState = useContext(ChatStateProvider);
  if (chatState != null) {
    return (
      <RecoverableViolationWithComponentStack errorMessage="You can't nest MWChatStateV2 in another MWChatStateV2." projectName="messenger_comet">
        {children}
      </RecoverableViolationWithComponentStack>
    );
  }
  return (
    <MWChatStateContext.Provider value={state}>
      <ChatStateProvider.Provider value={handleDispatch}>
        {children}
      </ChatStateProvider.Provider>
    </MWChatStateContext.Provider>
  );
}

const Fragment = MAWStateContextProvider ?? React.Fragment;

function updateState(
  focusedTabId: string | undefined,
  mediaViewerOpenWatermark: number,
  nextTabId: number,
  tabs: Map<string, MWChatStateV2Types.MWChatTab>
): MWChatStateV2Types.MWChatState {
  return {
    ...(focusedTabId != null ? { focusedTabId } : emptyObject),
    mediaViewerOpenWatermark,
    nextTabId,
    tabs,
  };
}

function MWChatStateV2({ children }: { children: React.ReactNode }) {
  return (
    <CometErrorBoundary onError={onError}>
      <Fragment>
        <MWChatStateV2Provider>{children}</MWChatStateV2Provider>
        <MWThreadListNewMessageState.MWThreadListNewMessageStateProvider>{children}</MWThreadListNewMessageState.MWThreadListNewMessageStateProvider>
      </Fragment>
    </CometErrorBoundary>
  );
}

MWChatStateV2.displayName = MWChatStateV2.name + " [from MWChatStateV2.react]";

Object.keys(MWChatStateContext).forEach((key) => {
  if (key === "default" || key === "__esModule") {
    return;
  }
  (MWChatStateV2 as any)[key] = MWChatStateContext[key];
});

(MWChatStateV2 as any).getTabIdFromThreadKey = getTabIdFromThreadKeyOrNull;
(MWChatStateV2 as any).reducer = reducer;
(MWChatStateV2 as any).useDispatch = useChatStateDispatch;
(MWChatStateV2 as any).MWChatStateV2Provider = MWChatStateV2Provider;

export default MWChatStateV2;