__d("MWPBaseMessageList.react", ["BaseHeadingContextWrapper.react", "Box.react", "CometHeroHoldTrigger.react", "CometHideableComponentExperiment.react", "I64", "Int64Hooks", "LSAuthorityLevel", "LSIntEnum", "LSMessageRenderingType", "LSMessagingThreadTypeUtil", "MAWFetchMoreMessagesWhenEnabled", "MWPFetchMessagesPage", "MWPFetchMessagesPageV2", "MWPFetchMessagesRangeForMessage", "MWPJumpToMostRecentMessageButtonAnimationWrapper.react", "MWPMessageAuthor.react", "MWPVisibleMessageContext.react", "ReQL", "ReQLPaginatedList.react", "ReQLPaginatedList.shared", "ReQLSuspense", "cr:8795", "emptyFunction", "gkx", "promiseDone", "react", "useMWPMessageListScroll", "useReStore", "useShallowEqualState"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = i || (i = d("react")),
        aa = i.useCallback,
        ba = 3,
        ca = (e = c("MAWFetchMoreMessagesWhenEnabled") == null ? void 0 : c("MAWFetchMoreMessagesWhenEnabled").useFetchSecureMessages) != null ? e : function (a) {
            return void 0
        },
        da = (e = c("MAWFetchMoreMessagesWhenEnabled") == null ? void 0 : c("MAWFetchMoreMessagesWhenEnabled").useSecureDataStorage) != null ? e : function () {
            return void 0
        },
        m = {
            list: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                flexShrink: "xs83m0k",
                isolation: "xc8icb0",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                zIndex: "x1ja2u2z",
                $$css: !0
            },
            spacer: {
                backgroundColor: "x1eb86dx",
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                $$css: !0
            }
        },
        n = (k || (k = d("I64"))).of_string("9999999999999");

    function o(a) {
        var b = a.isCollapsed,
            c = a.messageId,
            e = a.primarySortKey;
        a = a.secondarySortKey;
        return d("ReQL").key(e, a, c, b)
    }

    function ea(a, b) {
        if (a == null || b == null) return;
        return (k || (k = d("I64"))).compare(b, a.maxTimestampMs) <= 0 ? a : null
    }

    function p(a) {
        var b = (h || (h = c("useReStore")))();
        return d("ReQLSuspense").useFirst(function () {
            return a == null || (k || (k = d("I64"))).equal(a.minTimestampMs, (k || (k = d("I64"))).zero) ? d("ReQL").empty() : d("ReQL").fromTableAscending(b.table("messages"), ["isCollapsed", "messageId", "primarySortKey", "secondarySortKey"]).getKeyRange(a.threadKey).bounds({
                gte: d("ReQL").key(a.minTimestampMs, a.minMessageId)
            })
        }, [b, a], f.id + ":144")
    }

    function fa(a) {
        var b = (h || (h = c("useReStore")))();
        return d("ReQLSuspense").useFirst(function () {
            return a == null || (k || (k = d("I64"))).equal(a.maxTimestampMs, n) ? d("ReQL").empty() : d("ReQL").fromTableDescending(b.table("messages"), ["isCollapsed", "messageId", "primarySortKey", "secondarySortKey", "timestampMs"]).getKeyRange(a.threadKey).bounds({
                lte: d("ReQL").key(a.maxTimestampMs, a.maxMessageId)
            })
        }, [b, a], f.id + ":170")
    }
    e = l.forwardRef(a);

    function a(a, e) {
        var g, i = a.checkIsThreadManuallySetAsUnread;
        i = i === void 0 ? c("emptyFunction").thatReturnsFalse : i;
        var q = a.entryPoint,
            ga = a.headerStyle,
            ha = a.isSufficientContentLoadedAbove,
            r = a.logScrollerMetadata,
            s = a.onInitialLoadingCompleted,
            t = a.onScrollToBottom,
            ia = a.onUserScroll,
            u = a.pageSize,
            ja = a.renderFooter,
            v = a.renderHeader,
            w = a.renderHeaderContentSpacer,
            x = a.renderJumpToMostRecentMessageButton,
            y = a.renderLoadingAnimation,
            z = a.renderRow,
            A = a.secondaryThread,
            B = a.setScrollTopInResetForBottomAnchor;
        B = B === void 0 ? !0 : B;
        var C = a.thread;
        a = a.triggerRenderingCompleteOnResize;
        a = a === void 0 ? !1 : a;
        var D = C.threadKey,
            E = C.threadType,
            ka = d("LSMessagingThreadTypeUtil").isArmadilloSecure(E),
            F = A == null ? void 0 : A.threadKey,
            G = A == null ? void 0 : A.threadType,
            H = (h || (h = c("useReStore")))(),
            I = ca(E),
            J = da(),
            K = (g = u) != null ? g : c("gkx")("23432") ? 3 : 15,
            la = b("cr:8795")(H, D, E),
            L = d("Int64Hooks").useCallbackInt64(function (a, b, d) {
                c("gkx")("239") && J != null ? c("promiseDone")(c("MWPFetchMessagesPageV2")(H, K, d, a, E, b, G, J)) : c("promiseDone")(c("MWPFetchMessagesPage")(H, K, d, a, E, b, G, I))
            }, [K, H, G, I, E, J]),
            M = d("Int64Hooks").useCallbackInt64(function (a) {
                c("promiseDone")(c("MWPFetchMessagesRangeForMessage")(H, D, a, E))
            }, [H, D, E]),
            N = d("ReQLSuspense").useFirst(function () {
                return d("ReQL").fromTableDescending(H.table("messages_ranges_v2__generated")).getKeyRange(D)
            }, [H, D], f.id + ":294");
        g = d("ReQLSuspense").useFirst(function () {
            return F == null ? d("ReQL").empty() : d("ReQL").fromTableDescending(H.table("messages_ranges_v2__generated")).getKeyRange(F)
        }, [H, F], f.id + ":301");
        var O = d("MWPVisibleMessageContext.react").useMWPVisibleMessageContext();
        O = O.visibleMessage;
        var P = O == null ? void 0 : O.messageId,
            Q = O == null ? void 0 : O.timestamp,
            R = d("ReQLSuspense").useFirst(function () {
                return P != null && Q != null ? d("ReQL").fromTableAscending(H.table("messages"), ["isCollapsed", "messageId", "primarySortKey", "secondarySortKey"]).getKeyRange(D, Q, P) : d("ReQL").empty()
            }, [H, D, P, Q], f.id + ":316"),
            S = ea(d("ReQLSuspense").useFirst(function () {
                return Q != null ? d("ReQL").fromTableDescending(H.table("messages_ranges_v2__generated")).getKeyRange(D).bounds({
                    lte: [Q]
                }) : d("ReQL").empty()
            }, [H, Q, D], f.id + ":329"), Q);
        O = c("useShallowEqualState")({
            displayMessage: void 0,
            displayMessagesRange: N
        });
        var T = O[0],
            U = O[1];
        O = T.displayMessage;
        T = T.displayMessagesRange;
        d("Int64Hooks").useEffectInt64(function () {
            P == null || Q == null ? U(function (a) {
                return babelHelpers.extends({}, a, {
                    displayMessage: void 0,
                    displayMessagesRange: N
                })
            }) : S == null ? M(P) : S.minMessageId === P && S.hasMoreBefore ? L(d("ReQL").key(S.threadKey, S.minTimestampMs, S.minMessageId), null, "before") : S.maxMessageId === P && S.hasMoreAfter ? L(d("ReQL").key(S.threadKey, S.minTimestampMs, S.minMessageId), null, "after") : R != null && U(function (a) {
                return babelHelpers.extends({}, a, {
                    displayMessage: R,
                    displayMessagesRange: S
                })
            })
        }, [N, L, M, U, R, P, Q, S]);
        var V = p(T),
            W = fa(T),
            X = p(g);
        i = c("useMWPMessageListScroll")(i, q, N, T, r, s, t, e, C, a);
        q = i[0];
        r = i[1];
        s = i[2];
        var Y = i[3];
        t = i[4];
        e = d("Int64Hooks").useMemoInt64(function () {
            var a = H.table("messages").index("messageDisplayOrder"),
                b = d("LSMessagingThreadTypeUtil").isCMSubthread(E),
                e = H.table("messages").index("messageSubthreadKey");

            function f(a, b) {
                var e = a.getKeyRange(D).filter(function (a) {
                    var b = a.isCollapsed;
                    a = a.messageRenderingType;
                    return !b && !(k || (k = d("I64"))).equal(a, (k || (k = d("I64"))).of_int32(c("LSMessageRenderingType").HIDDEN))
                });
                return F == null ? b != null ? d("ReQL").union(d("ReQL").prependKey(b.getKeyRange(D), 0), d("ReQL").prependKey(e, 1)) : d("ReQL").prependKey(e, 1) : d("ReQL").union(d("ReQL").prependKey(a.getKeyRange(F).filter(function (a) {
                    a = a.isCollapsed;
                    return !a
                }), 0), d("ReQL").prependKey(e, 1))
            }
            var g = f(d("ReQL").fromTableAscending(a), b ? d("ReQL").fromTableAscending(e) : void 0);
            f = f(d("ReQL").fromTableDescending(a), b ? d("ReQL").fromTableDescending(e) : void 0);
            return d("ReQLPaginatedList.shared").fromIterables(g, f)
        }, [H, F, D, E]);
        a = T != null && (k || (k = d("I64"))).equal(T.maxTimestampMs, n);
        i = T != null && (k || (k = d("I64"))).equal(T.minTimestampMs, (k || (k = d("I64"))).zero);
        var ma = g != null && (k || (k = d("I64"))).equal(g.minTimestampMs, (k || (k = d("I64"))).zero),
            na = aa(function (a, b) {
                var e = b.nextItem;
                b = b.previousItem;
                return l.jsx(c("CometHideableComponentExperiment.react"), {
                    callingSurface: "thread_view",
                    disableHidding: !0,
                    children: l.jsx(d("MWPMessageAuthor.react").MWPMessageAuthor, {
                        contactId: a.senderId,
                        threadKey: a.threadKey,
                        children: z({
                            domElementRef: Y(a.messageId),
                            message: a,
                            nextMessage: e,
                            prevMessage: b
                        })
                    })
                }, a.offlineThreadingId)
            }, [Y, z]),
            Z = (k || (k = d("I64"))).equal(C.authorityLevel, (j || (j = d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").OPTIMISTIC)) && d("LSMessagingThreadTypeUtil").isCMSubthread(C.threadType);
        if ((T == null || V == null && !i || W == null && !a) && !Z) {
            if ((k || (k = d("I64"))).equal(C.authorityLevel, (j || (j = d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").OPTIMISTIC))) return l.jsxs(l.Fragment, {
                children: [l.jsx(c("CometHeroHoldTrigger.react"), {
                    description: "MWChatWaitingForDisplayState-optimisticThread",
                    hold: !0
                }), v != null ? v() : null]
            });
            C = T == null ? "displayMessagesRangeNull" : V == null && !i ? "noMinMessage" : W == null && !a ? "noMaxMessage" : "other";
            return l.jsxs(l.Fragment, {
                children: [l.jsx(c("CometHeroHoldTrigger.react"), {
                    description: "MWChatWaitingForDisplayState-" + C,
                    hold: !0
                }), y != null ? y() : null]
            })
        }
        var $ = !Z && T != null ? d("ReQL").key(T.threadKey, T.minTimestampMs, T.minMessageId) : null,
            oa = g == null ? null : d("ReQL").key(g.threadKey, g.minTimestampMs, g.minMessageId);
        i = O == null ? "bottom" : [1].concat(o(O));
        a = V == null ? X == null || ma ? null : [0].concat(o(X)) : [1].concat(o(V));
        C = W == null ? null : [1].concat(o(W));
        return l.jsxs(c("Box.react"), {
            xstyle: m.list,
            children: [l.jsx(c("BaseHeadingContextWrapper.react"), {
                children: l.jsx(c("ReQLPaginatedList.react"), {
                    bounds: {
                        gte: a,
                        lte: C
                    },
                    data: e,
                    hasReachedBottom: !Z && T != null ? !T.hasMoreAfter : !0,
                    hasReachedTop: !Z && T != null ? g == null ? !(T.hasMoreBefore || A != null) : !(T.hasMoreBefore || g.hasMoreBefore) : !0,
                    headerStyle: ga,
                    holdTriggerElementsCount: ba,
                    imperativeRef: r,
                    initialAnchor: i,
                    initialRenderComplete: t,
                    isSufficientContentLoadedAbove: ha,
                    onPageLoaded: function (a, b, c) {
                        if (!ka) return;
                        if (a !== "top") return;
                        la(b, c, K)
                    },
                    onReachingBottom: !Z && $ != null ? function () {
                        L($, oa, "after")
                    } : c("emptyFunction"),
                    onReachingTop: !Z && $ != null ? function () {
                        L($, oa, "before")
                    } : c("emptyFunction"),
                    onUserScroll: ia,
                    pageSize: u,
                    renderFooter: ja,
                    renderHeader: v,
                    renderHeaderContentSpacer: w != null ? w : function () {
                        return l.jsx(c("Box.react"), {
                            xstyle: m.spacer
                        })
                    },
                    renderItem: na,
                    renderLoadingAnimation: y,
                    setScrollTopInResetForBottomAnchor: B,
                    xstyle: m.list
                })
            }), x && l.jsx(c("MWPJumpToMostRecentMessageButtonAnimationWrapper.react"), {
                visible: !Z && T != null ? !q || T.hasMoreAfter : !1,
                children: x(s)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g.default = a
}), 98);


import React, { ForwardRefRenderFunction, forwardRef, useCallback, useEffect, useMemo } from 'react';
import BaseHeadingContextWrapper from 'BaseHeadingContextWrapper.react';
import Box from 'Box.react';
import CometHeroHoldTrigger from 'CometHeroHoldTrigger.react';
import CometHideableComponentExperiment from 'CometHideableComponentExperiment.react';
import I64 from 'I64';
import { useCallbackInt64, useEffectInt64, useMemoInt64 } from 'Int64Hooks';
import LSAuthorityLevel from 'LSAuthorityLevel';
import LSIntEnum from 'LSIntEnum';
import LSMessageRenderingType from 'LSMessageRenderingType';
import LSMessagingThreadTypeUtil from 'LSMessagingThreadTypeUtil';
import MAWFetchMoreMessagesWhenEnabled from 'MAWFetchMoreMessagesWhenEnabled';
import MWPFetchMessagesPage from 'MWPFetchMessagesPage';
import MWPFetchMessagesPageV2 from 'MWPFetchMessagesPageV2';
import MWPFetchMessagesRangeForMessage from 'MWPFetchMessagesRangeForMessage';
import MWPJumpToMostRecentMessageButtonAnimationWrapper from 'MWPJumpToMostRecentMessageButtonAnimationWrapper.react';
import MWPMessageAuthor from 'MWPMessageAuthor.react';
import MWPVisibleMessageContext from 'MWPVisibleMessageContext.react';
import ReQL from 'ReQL';
import ReQLPaginatedList from 'ReQLPaginatedList.react';
import { fromIterables } from 'ReQLPaginatedList.shared';
import ReQLSuspense from 'ReQLSuspense';
import cr from 'cr:8795';
import emptyFunction from 'emptyFunction';
import gkx from 'gkx';
import promiseDone from 'promiseDone';
import { useMWPMessageListScroll } from 'useMWPMessageListScroll';
import useReStore from 'useReStore';
import useShallowEqualState from 'useShallowEqualState';

const HOLD_TRIGGER_ELEMENTS_COUNT = 3;

const useFetchSecureMessages = (MAWFetchMoreMessagesWhenEnabled?.useFetchSecureMessages) ?? (() => undefined);
const useSecureDataStorage = (MAWFetchMoreMessagesWhenEnabled?.useSecureDataStorage) ?? (() => undefined);

const styles = {
 list: {
   display: 'x78zum5',
   flexDirection: 'xdt5ytf',
   flexGrow: 'x1iyjqo2',
   flexShrink: 'xs83m0k',
   isolation: 'xc8icb0',
   overflowX: 'x6ikm8r',
   overflowY: 'x10wlt62',
   zIndex: 'x1ja2u2z',
   $$css: true,
 },
 spacer: {
   backgroundColor: 'x1eb86dx',
   display: 'x78zum5',
   flexDirection: 'xdt5ytf',
   flexGrow: 'x1iyjqo2',
   $$css: true,
 },
};

const MAX_TIMESTAMP_MS = I64.of_string('9999999999999');

function getMessageKey(args: {
 isCollapsed: boolean;
 messageId: string;
 primarySortKey: string;
 secondarySortKey: string;
}): ReQLKey {
 const { isCollapsed, messageId, primarySortKey, secondarySortKey } = args;
 return ReQL.key(primarySortKey, secondarySortKey, messageId, isCollapsed);
}

function getMessagesRangeForTimestamp(
 messagesRange: MessagesRange | null,
 timestamp: I64String | null,
): MessagesRange | null {
 if (messagesRange == null || timestamp == null) return;
 return I64.compare(timestamp, messagesRange.maxTimestampMs) <= 0 ? messagesRange : null;
}

function useMinMessagesQuery(messagesRange: MessagesRange | null) {
 const reStore = useReStore();
 return ReQLSuspense.useFirst(
   () =>
     messagesRange == null || I64.equal(messagesRange.minTimestampMs, I64.zero)
       ? ReQL.empty()
       : ReQL.fromTableAscending(reStore.table('messages'), [
           'isCollapsed',
           'messageId',
           'primarySortKey',
           'secondarySortKey',
         ])
           .getKeyRange(messagesRange.threadKey)
           .bounds({
             gte: ReQL.key(messagesRange.minTimestampMs, messagesRange.minMessageId),
           }),
   [reStore, messagesRange],
   `module_id:144`,
 );
}

function useMaxMessagesQuery(messagesRange: MessagesRange | null) {
 const reStore = useReStore();
 return ReQLSuspense.useFirst(
   () =>
     messagesRange == null || I64.equal(messagesRange.maxTimestampMs, MAX_TIMESTAMP_MS)
       ? ReQL.empty()
       : ReQL.fromTableDescending(reStore.table('messages'), [
           'isCollapsed',
           'messageId',
           'primarySortKey',
           'secondarySortKey',
           'timestampMs',
         ])
           .getKeyRange(messagesRange.threadKey)
           .bounds({
             lte: ReQL.key(messagesRange.maxTimestampMs, messagesRange.maxMessageId),
           }),
   [reStore, messagesRange],
   `module_id:170`,
 );
}

const MWPBaseMessageList: ForwardRefRenderFunction<
 MWPBaseMessageListProps,
 MWPBaseMessageListRef
> = forwardRef(function MWPBaseMessageList(
 {
   checkIsThreadManuallySetAsUnread = emptyFunction.thatReturnsFalse,
   entryPoint,
   headerStyle,
   isSufficientContentLoadedAbove,
   logScrollerMetadata,
   onInitialLoadingCompleted,
   onScrollToBottom,
   onUserScroll,
   pageSize,
   renderFooter,
   renderHeader,
   renderHeaderContentSpacer,
   renderJumpToMostRecentMessageButton,
   renderLoadingAnimation,
   renderRow,
   secondaryThread,
   setScrollTopInResetForBottomAnchor = true,
   thread,
   triggerRenderingCompleteOnResize = false,
 },
 forwardedRef,
) {
 const { threadKey, threadType } = thread;
 const isArmadilloSecure = LSMessagingThreadTypeUtil.isArmadilloSecure(threadType);
 const secondaryThreadKey = secondaryThread?.threadKey;
 const secondaryThreadType = secondaryThread?.threadType;

 const reStore = useReStore();
 const fetchSecureMessages = useFetchSecureMessages(threadType);
 const secureDataStorage = useSecureDataStorage();
 const pageSizeToUse = pageSize ?? (gkx('23432') ? 3 : 15);
 const fetchSecureMessagesRange = cr(reStore, threadKey, threadType);

 const fetchMessagesPage = useCallbackInt64(
   (keyFrom, keyTo, direction) => {
     if (gkx('239') && secureDataStorage != null) {
       promiseDone(
         MWPFetchMessagesPageV2(
           reStore,
           pageSizeToUse,
           direction,
           keyFrom,
           threadType,
           keyTo,
           secondaryThreadType,
           secureDataStorage,
         ),
       );
     } else {
       promiseDone(
         MWPFetchMessagesPage(
            reStore,
            pageSizeToUse,
            direction,
            keyFrom,
            threadType,
            keyTo,
            secondaryThreadType,
            fetchSecureMessages,
          ),
        );
      }
    },
    [pageSizeToUse, reStore, secondaryThreadType, fetchSecureMessages, threadType, secureDataStorage],
  );
 
  const fetchMessagesRangeForMessage = useCallbackInt64(
    (messageId) => {
      promiseDone(MWPFetchMessagesRangeForMessage(reStore, threadKey, messageId, threadType));
    },
    [reStore, threadKey, threadType],
  );
 
  const displayMessagesRange = ReQLSuspense.useFirst(
    () => ReQL.fromTableDescending(reStore.table('messages_ranges_v2__generated')).getKeyRange(threadKey),
    [reStore, threadKey],
    `module_id:294`,
  );
 
  const secondaryDisplayMessagesRange = ReQLSuspense.useFirst(
    () =>
      secondaryThreadKey == null
        ? ReQL.empty()
        : ReQL.fromTableDescending(reStore.table('messages_ranges_v2__generated')).getKeyRange(secondaryThreadKey),
    [reStore, secondaryThreadKey],
    `module_id:301`,
  );
 
  const { visibleMessage } = MWPVisibleMessageContext.useMWPVisibleMessageContext();
  const visibleMessageId = visibleMessage?.messageId;
  const visibleMessageTimestamp = visibleMessage?.timestamp;
 
  const visibleMessageQuery = ReQLSuspense.useFirst(
    () =>
      visibleMessageId != null && visibleMessageTimestamp != null
        ? ReQL.fromTableAscending(reStore.table('messages'), ['isCollapsed', 'messageId', 'primarySortKey', 'secondarySortKey'])
            .getKeyRange(threadKey, visibleMessageTimestamp, visibleMessageId)
        : ReQL.empty(),
    [reStore, threadKey, visibleMessageId, visibleMessageTimestamp],
    `module_id:316`,
  );
 
  const messagesRangeForVisibleMessage = getMessagesRangeForTimestamp(
    ReQLSuspense.useFirst(
      () =>
        visibleMessageTimestamp != null
          ? ReQL.fromTableDescending(reStore.table('messages_ranges_v2__generated'))
              .getKeyRange(threadKey)
              .bounds({
                lte: [visibleMessageTimestamp],
              })
          : ReQL.empty(),
      [reStore, visibleMessageTimestamp, threadKey],
      `module_id:329`,
    ),
    visibleMessageTimestamp,
  );
 
  const [{ displayMessage: stateDisplayMessage, displayMessagesRange: stateDisplayMessagesRange }, setDisplayState] = useShallowEqualState({
    displayMessage: undefined,
    displayMessagesRange,
  });
 
  useEffectInt64(() => {
    if (visibleMessageId == null || visibleMessageTimestamp == null) {
      setDisplayState((state) => ({
        ...state,
        displayMessage: undefined,
        displayMessagesRange,
      }));
    } else if (messagesRangeForVisibleMessage == null) {
      fetchMessagesRangeForMessage(visibleMessageId);
    } else if (
      messagesRangeForVisibleMessage.minMessageId === visibleMessageId &&
      messagesRangeForVisibleMessage.hasMoreBefore
    ) {
      fetchMessagesPage(
        ReQL.key(messagesRangeForVisibleMessage.threadKey, messagesRangeForVisibleMessage.minTimestampMs, messagesRangeForVisibleMessage.minMessageId),
        null,
        'before',
      );
    } else if (
      messagesRangeForVisibleMessage.maxMessageId === visibleMessageId &&
      messagesRangeForVisibleMessage.hasMoreAfter
    ) {
      fetchMessagesPage(
        ReQL.key(messagesRangeForVisibleMessage.threadKey, messagesRangeForVisibleMessage.minTimestampMs, messagesRangeForVisibleMessage.minMessageId),
        null,
        'after',
      );
    } else if (visibleMessageQuery != null) {
      setDisplayState((state) => ({
        ...state,
        displayMessage: visibleMessageQuery,
        displayMessagesRange: messagesRangeForVisibleMessage,
      }));
    }
  }, [
    displayMessagesRange,
    fetchMessagesPage,
    fetchMessagesRangeForMessage,
    setDisplayState,
    visibleMessageQuery,
    visibleMessageId,
    visibleMessageTimestamp,
    messagesRangeForVisibleMessage,
  ]);
 
  const minMessagesQuery = useMinMessagesQuery(stateDisplayMessagesRange);
  const maxMessagesQuery = useMaxMessagesQuery(stateDisplayMessagesRange);
  const secondaryMinMessagesQuery = useMinMessagesQuery(secondaryDisplayMessagesRange);
 
  const [
    scrollerRef,
    imperativeRef,
    handleJumpToMostRecentMessageButtonClick,
    handleRef,
    initialRenderComplete,
  ] = useMWPMessageListScroll(
    checkIsThreadManuallySetAsUnread,
    entryPoint,
    displayMessagesRange,
    messagesRangeForVisibleMessage,
    logScrollerMetadata,
    onInitialLoadingCompleted,
    onScrollToBottom,
    forwardedRef,
    thread,
    triggerRenderingCompleteOnResize,
  );
 
  const data = useMemoInt64(
    () => {
      const ascendingMessagesIndex = reStore.table('messages').index('messageDisplayOrder');
      const isSubthread = LSMessagingThreadTypeUtil.isCMSubthread(threadType);
      const subthreadMessagesIndex = reStore.table('messages').index('messageSubthreadKey');
 
      function getMessagesQuery(index, subthreadIndex) {
        const messagesQuery = index
          .getKeyRange(threadKey)
          .filter(({ isCollapsed, messageRenderingType }) => !isCollapsed && !I64.equal(messageRenderingType, I64.of_int32(LSMessageRenderingType.HIDDEN)));
 
        if (secondaryThreadKey == null) {
          return subthreadIndex != null
            ? ReQL.union(ReQL.prependKey(subthreadIndex.getKeyRange(threadKey), 0), ReQL.prependKey(messagesQuery, 1))
            : ReQL.prependKey(messagesQuery, 1);
        }
 
        return ReQL.union(
          ReQL.prependKey(index.getKeyRange(secondaryThreadKey).filter(({ isCollapsed }) => !isCollapsed), 0),
          ReQL.prependKey(messagesQuery, 1),
        );
      }
 
      const ascendingQuery = getMessagesQuery(ReQL.fromTableAscending(ascendingMessagesIndex), isSubthread ? ReQL.fromTableAscending(subthreadMessagesIndex) : undefined);
      const descendingQuery = getMessagesQuery(ReQL.fromTableDescending(ascendingMessagesIndex), isSubthread ? ReQL.fromTableDescending(subthreadMessagesIndex) : undefined);
 
      return fromIterables(ascendingQuery, descendingQuery);
    },
    [reStore, secondaryThreadKey, threadKey, threadType],
  );
 
  const hasReachedBottom = displayMessagesRange != null && I64.equal(displayMessagesRange.maxTimestampMs, MAX_TIMESTAMP_MS);
  const hasReachedTop = displayMessagesRange != null && I64.equal(displayMessagesRange.minTimestampMs, I64.zero);
  const secondaryHasReachedTop = secondaryDisplayMessagesRange != null && I64.equal(secondaryDisplayMessagesRange.minTimestampMs, I64.zero);
 
  const isOptimisticThread = I64.equal(thread.authorityLevel, LSIntEnum.ofNumber(LSAuthorityLevel.OPTIMISTIC)) && LSMessagingThreadTypeUtil.isCMSubthread(thread.threadType);

  if (
    (displayMessagesRange == null || (minMessagesQuery == null && !hasReachedTop) || (maxMessagesQuery == null && !hasReachedBottom)) &&
    !isOptimisticThread
  ) {
    if (I64.equal(thread.authorityLevel, LSIntEnum.ofNumber(LSAuthorityLevel.OPTIMISTIC))) {
      return (
        <>
          <CometHeroHoldTrigger description="MWChatWaitingForDisplayState-optimisticThread" hold />
          {renderHeader != null ? renderHeader() : null}
        </>
      );
    }
 
    const stateDescription =
      stateDisplayMessagesRange == null
        ? 'displayMessagesRangeNull'
        : minMessagesQuery == null && !hasReachedTop
        ? 'noMinMessage'
        : maxMessagesQuery == null && !hasReachedBottom
        ? 'noMaxMessage'
        : 'other';
 
    return (
      <>
        <CometHeroHoldTrigger description={`MWChatWaitingForDisplayState-${stateDescription}`} hold />
        {renderLoadingAnimation != null ? renderLoadingAnimation() : null}
      </>
    );
  }
 
  const minKey =
    !isOptimisticThread && displayMessagesRange != null
      ? ReQL.key(displayMessagesRange.threadKey, displayMessagesRange.minTimestampMs, displayMessagesRange.minMessageId)
      : null;
 
  const secondaryMinKey =
    secondaryDisplayMessagesRange == null
      ? null
      : ReQL.key(secondaryDisplayMessagesRange.threadKey, secondaryDisplayMessagesRange.minTimestampMs, secondaryDisplayMessagesRange.minMessageId);
 
  const initialAnchor = stateDisplayMessage == null ? 'bottom' : [1, ...getMessageKey(stateDisplayMessage)];
  const gte = minMessagesQuery == null ? (secondaryMinMessagesQuery == null || secondaryHasReachedTop ? null : [0, ...getMessageKey(secondaryMinMessagesQuery)]) : [1, ...getMessageKey(minMessagesQuery)];
  const lte = maxMessagesQuery == null ? null : [1, ...getMessageKey(maxMessagesQuery)];
 
  return (
    <Box xstyle={styles.list}>
      <BaseHeadingContextWrapper>
        <ReQLPaginatedList
          bounds={{ gte, lte }}
          data={data}
          hasReachedBottom={!isOptimisticThread && displayMessagesRange != null ? !displayMessagesRange.hasMoreAfter : true}
          hasReachedTop={
            !isOptimisticThread && displayMessagesRange != null
              ? secondaryDisplayMessagesRange == null
                ? !(displayMessagesRange.hasMoreBefore || secondaryThread != null)
                : !(displayMessagesRange.hasMoreBefore || secondaryDisplayMessagesRange.hasMoreBefore)
              : true
          }
          headerStyle={headerStyle}
          holdTriggerElementsCount={HOLD_TRIGGER_ELEMENTS_COUNT}
          imperativeRef={imperativeRef}
          initialAnchor={initialAnchor}
          initialRenderComplete={initialRenderComplete}
          isSufficientContentLoadedAbove={isSufficientContentLoadedAbove}
          onPageLoaded={(position, keyFrom, keyTo) => {
            if (!isArmadilloSecure) return;
            if (position !== 'top') return;
            fetchSecureMessagesRange(keyFrom, keyTo, pageSizeToUse);
          }}
          onReachingBottom={
            !isOptimisticThread && minKey != null
              ? () => {
                  fetchMessagesPage(minKey, secondaryMinKey, 'after');
                }
              : emptyFunction
          }
          onReachingTop={
            !isOptimisticThread && minKey != null
              ? () => {
                  fetchMessagesPage(minKey, secondaryMinKey, 'before');
                }
              : emptyFunction
          }
          onUserScroll={onUserScroll}
          pageSize={pageSize}
          renderFooter={renderFooter}
          renderHeader={renderHeader}
          renderHeaderContentSpacer={
            renderHeaderContentSpacer != null
              ? renderHeaderContentSpacer
              : () => <Box xstyle={styles.spacer} />
          }
          renderItem={useCallback(
            ({ message, nextMessage, prevMessage }, messageId) => (
              <CometHideableComponentExperiment
                callingSurface="thread_view"
                disableHidding
              >
                <MWPMessageAuthor.MWPMessageAuthor
                  contactId={message.senderId}
                  threadKey={message.threadKey}
                >
                  {renderRow({
                    domElementRef: handleRef(message.messageId),
                    message,
                    nextMessage,
                    prevMessage,
                  })}
                </MWPMessageAuthor.MWPMessageAuthor>
              </CometHideableComponentExperiment>
            ),
            [handleRef, renderRow],
          )}
          renderLoadingAnimation={renderLoadingAnimation}
          setScrollTopInResetForBottomAnchor={setScrollTopInResetForBottomAnchor}
          xstyle={styles.list}
        />
      </BaseHeadingContextWrapper>
      {renderJumpToMostRecentMessageButton && (
        <MWPJumpToMostRecentMessageButtonAnimationWrapper
          visible={!isOptimisticThread && displayMessagesRange != null ? !scrollerRef || displayMessagesRange.hasMoreAfter : false}
        >
          {renderJumpToMostRecentMessageButton(
            handleJumpToMostRecentMessageButtonClick,
          )}
        </MWPJumpToMostRecentMessageButtonAnimationWrapper>
      )}
    </Box>
  );
 });
 
 MWPBaseMessageList.displayName = `MWPBaseMessageList [from ${__DEV__}]`;
 
 export default MWPBaseMessageList;