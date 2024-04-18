__d("MAWStateContextProvider.react", ["MAWBridgeInitOfflineQueueSyncCompleteHandler", "MAWBridgeInitOfflineQueueSyncStartHandler", "MAWEBRestoreStatus", "MAWSharedProtocolQueueConst", "MAWStateContext.react", "react", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useEffect,
        m = b.useMemo,
        n = b.useReducer,
        o = function (a, b) {
            return Object.entries(a).filter(function (a) {
                var c, d = a[0];
                a = a[1];
                return ((c = b[d]) == null ? void 0 : c.chatStatus) !== a.chatStatus || ((c = b[d]) == null ? void 0 : c.snippetStatus) !== a.snippetStatus
            })
        },
        p = function (a, b) {
            return a.reduce(function (a, b) {
                var c = b[0];
                b = b[1];
                a[c] = {
                    chatStatus: b.chatStatus,
                    snippetStatus: b.snippetStatus
                };
                return a
            }, b)
        },
        q = function (a, b) {
            switch (b.tag) {
                case "OptimisticSendMessage":
                    var c;
                    return babelHelpers["extends"]({}, a, {
                        messageLatencies: babelHelpers["extends"]({}, a.messageLatencies, (c = {}, c[b.optimisticMsgId] = {
                            sent: b.timestamp
                        }, c))
                    });
                case "NewMsg":
                case "MsgUpdated":
                    var e, f;
                    c = b.value.ack;
                    var g = b.value.msgId;
                    e = (e = b.value.offlineMsg) == null ? void 0 : e.msgId;
                    e != null && a.messageLatencies[e] != null && (a.messageLatencies[g] = a.messageLatencies[e], delete a.messageLatencies[e]);
                    e = a.messageLatencies[g];
                    if ((e == null ? void 0 : e.sent) != null && (e == null ? void 0 : e.acked) != null) return a;
                    e = (e == null ? void 0 : e.sent) || Date.now();
                    c = c !== 0 ? Date.now() : void 0;
                    return babelHelpers["extends"]({}, a, {
                        messageLatencies: babelHelpers["extends"]({}, a.messageLatencies, (f = {}, f[g] = {
                            acked: c,
                            sent: e
                        }, f))
                    });
                case "InitOfflineQueueSyncProgress":
                    g = b.value;
                    return babelHelpers["extends"]({}, a, {
                        offlineQueueProgressDownloaded: g
                    });
                case "InitOfflineQueueConsumerSyncProgress":
                    c = b.value;
                    e = c.chatJidStatus;
                    f = c.processed;
                    g = a.offlineQueueThreadStatus || {};
                    c = o(e, g);
                    return babelHelpers["extends"]({}, a, {
                        offlineQueueProgressProcessed: f,
                        offlineQueueThreadStatus: c.length === 0 ? g : p(c, babelHelpers["extends"]({}, g))
                    });
                case "InitOfflineQueueSyncStart":
                    d("MAWBridgeInitOfflineQueueSyncStartHandler").call();
                    e = b.value;
                    return babelHelpers["extends"]({}, a, {
                        offlineQueueCount: e
                    });
                case "InitOfflineQueueSyncComplete":
                    d("MAWBridgeInitOfflineQueueSyncCompleteHandler").call();
                    f = b.value;
                    c = a.offlineQueueThreadStatus || {};
                    g = f != null ? o(f, c) : null;
                    return babelHelpers["extends"]({}, a, {
                        offlineQueueSyncState: d("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
                        offlineQueueThreadStatus: g == null || g.length === 0 ? c : p(g, babelHelpers["extends"]({}, c))
                    });
                case "UnArchivedSelfDeviceChangeAlerts":
                    e = b.value;
                    return babelHelpers["extends"]({}, a, {
                        unArchivedSelfDeviceChangeAlerts: e
                    });
                case "EphemeralSettingsUpdatedForUI":
                    f = b.value;
                    g = f.chatJid;
                    c = f.ephemeralSettingArgs;
                    e = c.ephemeralExpirationInSec;
                    f = c.ephemeralLastUpdatedOrSetTimestamp;
                    c = g;
                    return babelHelpers["extends"]({}, a, {
                        ephemeralSettings: babelHelpers["extends"]({}, a.ephemeralSettings, (g = {}, g[c] = {
                            ephemeralExpirationInSec: e,
                            ephemeralLastUpdatedOrSetTimestamp: f
                        }, g))
                    });
                case "ClearEphemeralSettings":
                    return babelHelpers["extends"]({}, a, {
                        ephemeralSettings: {}
                    });
                case "eBInitialThreadsRestoreStatus":
                    c = b.value;
                    e = a.eBInitialThreadsRestoreStatus;
                    var h = c.reduce(function (a, b) {
                        b = b.threadId;
                        return babelHelpers["extends"]({}, a, (a = {}, a[b] = d("MAWEBRestoreStatus").EBInitialThreadsRestoreStatus.IN_PROGRESS, a))
                    }, {});
                    Object.keys(e).forEach(function (a) {
                        if (!h[a]) {
                            var b;
                            h = babelHelpers["extends"]({}, h, (b = {}, b[a] = d("MAWEBRestoreStatus").EBInitialThreadsRestoreStatus.RESTORE_COMPLETED, b))
                        }
                    });
                    return babelHelpers["extends"]({}, a, {
                        eBInitialThreadsRestoreStatus: h
                    })
            }
            return a
        };

    function a(a) {
        a = a.children;
        var b = n(q, d("MAWStateContext.react").initialState),
            c = b[0],
            e = b[1],
            f = m(function () {
                return new Set()
            }, []);
        b = m(function () {
            return {
                dispatch: e,
                state: c,
                subscriptions: f
            }
        }, [c, e, f]);
        var g = r(b),
            h = k(function () {
                return g.current
            }, [g]);
        l(function () {
            f == null ? void 0 : f.forEach(function (a) {
                return a(c)
            })
        }, [c, f]);
        return j.jsx(d("MAWStateContext.react").MAWStateContext.Provider, {
            value: b,
            children: j.jsx(d("MAWStateContext.react").MAWNonRerenderingStateContext.Provider, {
                value: h,
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function r(a) {
        var b = (h || (h = c("useUnsafeRef_DEPRECATED")))(a);
        b.current = a;
        return b
    }
    g["default"] = a
}), 98);

import { MAWBridgeInitOfflineQueueSyncCompleteHandler, MAWBridgeInitOfflineQueueSyncStartHandler, MAWEBRestoreStatus, MAWSharedProtocolQueueConst } from "./types";
import { MAWStateContext, MAWStateContextValue, MAWStateReducer, MAWStateReducerState, MAWNonRerenderingStateContext } from "./MAWStateContext.react";
import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { useUnsafeRef } from "./useUnsafeRef_DEPRECATED";

const filterUpdatedEntries = (
  state: MAWStateReducerState,
  nextState: MAWStateReducerState
) => {
  return Object.entries(state).filter(([key, value]) => {
    const nextValue = nextState[key];
    return (
      nextValue?.chatStatus !== value.chatStatus ||
      nextValue?.snippetStatus !== value.snippetStatus
    );
  });
};

const updateStateFromFilteredEntries = (
  filteredEntries: [string, { chatStatus: string; snippetStatus: string }][],
  baseState: MAWStateReducerState
) => {
  return filteredEntries.reduce((acc, [key, value]) => {
    acc[key] = { chatStatus: value.chatStatus, snippetStatus: value.snippetStatus };
    return acc;
  }, { ...baseState });
};

const reducer: MAWStateReducer = (state, action) => {
  switch (action.tag) {
    case "OptimisticSendMessage":
      return {
        ...state,
        messageLatencies: {
          ...state.messageLatencies,
          [action.optimisticMsgId]: {
            sent: action.timestamp,
          },
        },
      };
    case "NewMsg":
    case "MsgUpdated":
      const { ack, msgId, offlineMsg } = action.value;
      const sentTimestamp = state.messageLatencies[offlineMsg?.msgId]?.sent;
      if (sentTimestamp !== undefined) {
        state.messageLatencies[msgId] = {
          acked: ack !== 0 ? Date.now() : undefined,
          sent: sentTimestamp,
        };
        delete state.messageLatencies[offlineMsg?.msgId];
      } else {
        state.messageLatencies[msgId] = {
          acked: ack !== 0 ? Date.now() : undefined,
          sent: Date.now(),
        };
      }
      return { ...state, messageLatencies: { ...state.messageLatencies } };
    case "InitOfflineQueueSyncProgress":
      return { ...state, offlineQueueProgressDownloaded: action.value };
    case "InitOfflineQueueConsumerSyncProgress":
      const { chatJidStatus, processed } = action.value;
      const updatedThreadStatus = state.offlineQueueThreadStatus || {};
      const filteredEntries = filterUpdatedEntries(updatedThreadStatus, chatJidStatus);
      return {
        ...state,
        offlineQueueProgressProcessed: processed,
        offlineQueueThreadStatus:
          filteredEntries.length === 0
            ? updatedThreadStatus
            : updateStateFromFilteredEntries(filteredEntries, updatedThreadStatus),
      };
    case "InitOfflineQueueSyncStart":
      MAWBridgeInitOfflineQueueSyncStartHandler.call();
      return { ...state, offlineQueueCount: action.value };
    case "InitOfflineQueueSyncComplete":
      MAWBridgeInitOfflineQueueSyncCompleteHandler.call();
      const updatedThreadStatus2 = state.offlineQueueThreadStatus || {};
      const filteredEntries2 = action.value
        ? filterUpdatedEntries(updatedThreadStatus2, action.value)
        : null;
      return {
        ...state,
        offlineQueueSyncState: MAWSharedProtocolQueueConst.OfflineConsumerStatus.Complete,
        offlineQueueThreadStatus:
          filteredEntries2 == null || filteredEntries2.length === 0
            ? updatedThreadStatus2
            : updateStateFromFilteredEntries(filteredEntries2, updatedThreadStatus2),
      };
    case "UnArchivedSelfDeviceChangeAlerts":
      return { ...state, unArchivedSelfDeviceChangeAlerts: action.value };
    case "EphemeralSettingsUpdatedForUI":
      const { chatJid, ephemeralSettingArgs } = action.value;
      const { ephemeralExpirationInSec, ephemeralLastUpdatedOrSetTimestamp } =
        ephemeralSettingArgs;
      return {
        ...state,
        ephemeralSettings: {
          ...state.ephemeralSettings,
          [chatJid]: {
            ephemeralExpirationInSec,
            ephemeralLastUpdatedOrSetTimestamp,
          },
        },
      };
    case "ClearEphemeralSettings":
      return { ...state, ephemeralSettings: {} };
    case "eBInitialThreadsRestoreStatus":
      const { eBInitialThreadsRestoreStatus: existingStatus } = state;
      const newStatus = action.value.reduce((acc, { threadId }) => {
        return {
          ...acc,
          [threadId]: MAWEBRestoreStatus.EBInitialThreadsRestoreStatus.IN_PROGRESS,
        };
      }, {});
      Object.keys(existingStatus).forEach((threadId) => {
        if (!newStatus[threadId]) {
          newStatus[threadId] = MAWEBRestoreStatus.EBInitialThreadsRestoreStatus.RESTORE_COMPLETED;
        }
      });
      return { ...state, eBInitialThreadsRestoreStatus: newStatus };
    default:
      return state;
  }
};

const MAWStateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, MAWStateContext.initialState);
  const subscriptions = useMemo(() => new Set<(state: MAWStateReducerState) => void>(), []);
  const contextValue = useMemo(
    () => ({ dispatch, state, subscriptions }),
    [state, dispatch, subscriptions]
  );

  const stableContextRef = useStableRef(contextValue);
  const getStableContext = useCallback(() => stableContextRef.current, [stableContextRef]);

  useEffect(() => {
    subscriptions.forEach((subscriber) => subscriber(state));
  }, [state, subscriptions]);

  return (
    <MAWStateContext.Provider value={contextValue}>
      <MAWNonRerenderingStateContext.Provider value={getStableContext}>
        {children}
      </MAWNonRerenderingStateContext.Provider>
    </MAWStateContext.Provider>
  );
};

MAWStateContextProvider.displayName = MAWStateContextProvider.name;


function useStableRef<T>(value: T): React.MutableRefObject<T> {
    let stableRefHook: typeof useUnsafeRef | null = null;
    const stableRef = (stableRefHook || (stableRefHook = useUnsafeRef))(value);
    stableRef.current = value;
    return stableRef;
}

export default MAWStateContextProvider;