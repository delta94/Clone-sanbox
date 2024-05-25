__d("MWPBaseThreadList.react", ["Box.react", "I64", "Int64Hooks", "LSAuthorityLevel", "LSFactory", "LSFilteredThreadsRangesQueryStoredProcedure", "LSIntEnum", "LSMessagingThreadTypeUtil", "LSThreadRangeFilter", "LSThreadsRangesQueryStoredProcedure", "MAWSetupUtils", "MWCMIsAnyCMThread", "MWCMIsThreadBumped", "MWIsThreadDisabled", "MWThreadListFocusableTable.react", "MWThreadListSupportedThreadTypes", "MWXacGating", "MetaConfig", "ReQL", "ReQLPaginatedList.react", "ReQLPaginatedList.shared", "ReQLSuspense", "asyncToGeneratorRuntime", "isMWXacGroupThread", "promiseDone", "react", "useMarkSeenWhenVisible", "useReStore"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = i || (i = d("react"));
    e = i;
    var m = e.useCallback,
        n = e.useEffect,
        o = {
            container: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                flexShrink: "xs83m0k",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            emptyContentContainer: {
                alignItems: "x6s0dn4",
                display: "x78zum5",
                flexGrow: "x1iyjqo2",
                justifyContent: "xl56j7k",
                $$css: !0
            },
            list: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            }
        };

    function p(a, e, f, g) {
        g === void 0 && (g = !1), c("promiseDone")(a.runInTransaction(function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b;
                b = (yield(b = a.threads_ranges_v2__generated).get.apply(b, e));
                if (b == null || b.isLoadingBefore) return;
                f && f();
                return c("LSThreadsRangesQueryStoredProcedure")(c("LSFactory")(a), {
                    additionalPagesToFetch: (j || (j = d("I64"))).zero,
                    isLoadingAfter: !1,
                    isLoadingBefore: !0,
                    maxLastActivityTimestampMs: b.maxLastActivityTimestampMs,
                    maxThreadKey: b.maxThreadKey,
                    minLastActivityTimestampMs: b.minLastActivityTimestampMs,
                    minThreadKey: b.minThreadKey,
                    parentThreadKey: b.parentThreadKey,
                    shouldSkipE2eeThreadsRanges: g
                })
            });
            return function (b) {
                return a.apply(this, arguments)
            }
        }(), "readwrite", "ui"))
    }

    function q(a, e, f, g, h) {
        f === void 0 && (f = (k || (k = d("LSIntEnum"))).ofNumber(c("LSThreadRangeFilter").NONE)), g === void 0 && (g = (k || (k = d("LSIntEnum"))).ofNumber(c("LSThreadRangeFilter").NONE)), c("promiseDone")(a.runInTransaction(function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b;
                b = (yield(b = a.filtered_threads_ranges_v3__generated).get.apply(b, e));
                if (b == null || b.isLoadingBefore) return;
                h && h();
                return c("LSFilteredThreadsRangesQueryStoredProcedure")(c("LSFactory")(a), {
                    filter: f,
                    isLoadingAfter: !1,
                    isLoadingBefore: !0,
                    maxLastActivityTimestampMs: b.maxLastActivityTimestampMs,
                    maxThreadKey: b.maxThreadKey,
                    minLastActivityTimestampMs: b.minLastActivityTimestampMs,
                    minThreadKey: b.minThreadKey,
                    parentThreadKey: b.parentThreadKey,
                    secondaryFilter: g
                })
            });
            return function (b) {
                return a.apply(this, arguments)
            }
        }(), "readwrite", "ui"))
    }

    function r(a, b, e, f, g, h) {
        e === void 0 && (e = (k || (k = d("LSIntEnum"))).ofNumber(c("LSThreadRangeFilter").NONE));
        f === void 0 && (f = (k || (k = d("LSIntEnum"))).ofNumber(c("LSThreadRangeFilter").NONE));
        h === void 0 && (h = !1);
        if (b == null) return;
        if (!b.threadRangeFilter) {
            var i = [b.parentThreadKey, b.minThreadKey, b.minLastActivityTimestampMs];
            p(a, i, g, h)
        } else {
            i = [b.parentThreadKey, b.minThreadKey, b.minLastActivityTimestampMs, b.threadRangeFilter, b.folderName, b.secondaryThreadRangeFilter, b.threadRangeFilterValue];
            q(a, i, e, f, g)
        }
    }

    function s(a, e, f, g, h, i) {
        i === void 0 && (i = !1), c("promiseDone")(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var b = (yield d("ReQL").firstAsync(d("ReQL").fromTableAscending(a.table("sync_groups")).getKeyRange((k || (k = d("LSIntEnum"))).ofNumber(1))));
            b != null && (j || (j = d("I64"))).equal(b.syncStatus, (k || (k = d("LSIntEnum"))).ofNumber(2)) && (yield a.runInTransaction(function (a) {
                h == null ? void 0 : h();
                if (f == null) return c("LSThreadsRangesQueryStoredProcedure")(c("LSFactory")(a), {
                    additionalPagesToFetch: (j || (j = d("I64"))).zero,
                    isLoadingAfter: !1,
                    isLoadingBefore: !0,
                    maxLastActivityTimestampMs: j.max_int,
                    maxThreadKey: j.max_int,
                    minLastActivityTimestampMs: j.max_int,
                    minThreadKey: j.max_int,
                    parentThreadKey: e,
                    shouldSkipE2eeThreadsRanges: i
                });
                else return c("LSFilteredThreadsRangesQueryStoredProcedure")(c("LSFactory")(a), {
                    filter: f,
                    isLoadingAfter: !1,
                    isLoadingBefore: !0,
                    maxLastActivityTimestampMs: (j || (j = d("I64"))).max_int,
                    maxThreadKey: j.max_int,
                    minLastActivityTimestampMs: j.max_int,
                    minThreadKey: j.max_int,
                    parentThreadKey: e,
                    secondaryFilter: g
                })
            }, "readwrite", "ui"))
        })())
    }

    function t(a, b, c, e) {
        var g = d("ReQLSuspense").useFirst(function () {
                return c == null ? d("ReQL").fromTableDescending(a.table("threads_ranges_v2__generated")).getKeyRange(b) : d("ReQL").empty()
            }, [a, c, b], f.id + ":303"),
            h = d("ReQLSuspense").useFirst(function () {
                return c == null ? d("ReQL").empty() : d("ReQL").fromTableDescending(a.table("filtered_threads_ranges_v3__generated")).getKeyRange(b).filter(function (a) {
                    return (j || (j = d("I64"))).equal(a.threadRangeFilter, c) && (!e || (j || (j = d("I64"))).equal(a.secondaryThreadRangeFilter, e))
                })
            }, [a, c, b, e], f.id + ":310");
        return c == null ? g : h
    }

    function a(a) {
        var b = a.afterContent,
            e = a.beforeContent,
            g = a.containerStyle,
            i = a.customThreadFilter_DO_NOT_USE,
            p = a.emptyContent,
            q = a.filter,
            u = a.gridLabel,
            v = a.imperativeRef,
            w = a.isSufficientContentLoadedBelow,
            x = a.loadMoreThreads,
            y = x === void 0 ? r : x;
        x = a.loadMoreThreadsForEmptyRange;
        var z = x === void 0 ? s : x,
            A = a.onLoadMoreThreads;
        x = a.onReachingTop;
        var B = a.onScroll,
            C = a.onThreadsLoaded,
            D = a.pageSize,
            E = a.parentThreadKey,
            F = a.renderItem,
            G = a.renderLoadingAnimation,
            H = a.role;
        H = H === void 0 ? "grid" : H;
        var I = a.secondaryFilter,
            J = a.setIsEmptyInbox;
        a = a.shouldSkipE2eeThreadsRanges;
        var K = a === void 0 ? !1 : a,
            L = d("MAWSetupUtils").useIsIDBOperational(),
            M = (h || (h = c("useReStore")))(),
            N = t(M, E, q, I),
            O = d("ReQLSuspense").useArray(function () {
                return d("ReQL").fromTableAscending(M.table("pinned_threads").index("pinnedTimestamp"))
            }, [M], f.id + ":380");
        a = c("MetaConfig")._("44");
        N != null && !N.isLoadingBefore && (C && C());
        var P = N != null ? (j || (j = d("I64"))).equal(N.minLastActivityTimestampMs, (j || (j = d("I64"))).zero) || (j || (j = d("I64"))).equal(N.minLastActivityTimestampMs, (j || (j = d("I64"))).one) || (a ? (j || (j = d("I64"))).equal(N.minLastActivityTimestampMs, (j || (j = d("I64"))).max_int) : !1) ? null : N.minLastActivityTimestampMs : null,
            Q = N != null ? (j || (j = d("I64"))).equal(N.maxLastActivityTimestampMs, (j || (j = d("I64"))).zero) || (j || (j = d("I64"))).equal(N.maxLastActivityTimestampMs, (j || (j = d("I64"))).one) ? null : N.maxLastActivityTimestampMs : null,
            R = d("Int64Hooks").useMemoInt64(function () {
                var a;
                return {
                    gte: d("ReQL").key((a = P) != null ? a : (j || (j = d("I64"))).min_int),
                    lte: d("ReQL").key((a = Q) != null ? a : (j || (j = d("I64"))).max_int)
                }
            }, [Q, P]),
            S = d("Int64Hooks").useMemoInt64(function () {
                var a, b = (a = d("ReQL")).fromTableDescending(M.table("threads").index("parentThreadKeyLastActivityTimestampMs")).getKeyRange(E);
                b = a.union(b, a.fromTableDescending(M.table("threads").index("secondaryParentThreadKeyLastActivityTimestampMs")).getKeyRange(E)).map(function (a) {
                    var b;
                    if (!c("MWCMIsThreadBumped")(a)) return {
                        isHidden: !1,
                        thread: a
                    };
                    b = (b = (b = d("ReQLSuspense").first(d("ReQL").fromTableAscending(M.table("community_folders"), ["isHidden"]).getKeyRange(a.parentThreadKey), f.id + ":440")) == null ? void 0 : b.isHidden) != null ? b : !1;
                    return {
                        isHidden: b,
                        thread: a
                    }
                }).filter(function (a) {
                    var b = a.isHidden,
                        e = a.thread;
                    if (b) return !1;
                    a = d("LSMessagingThreadTypeUtil").isSecure(e.threadType);
                    return (!a || L) && (c("MWCMIsAnyCMThread")(e.threadType) ? !c("MWIsThreadDisabled")(e.takedownState) : !0) && c("MWThreadListSupportedThreadTypes").findIndex(function (a) {
                        return (j || (j = d("I64"))).equal(e.threadType, a)
                    }) !== -1 && (k || (k = d("LSIntEnum"))).toNumber(e.authorityLevel) > c("LSAuthorityLevel").CLIENT_PARTIAL && (!c("MetaConfig")._("45") || O.findIndex(function (a) {
                        return (j || (j = d("I64"))).equal(e.threadKey, a.threadKey)
                    }) === -1) && (d("MWXacGating").isGroupsEnabled() || !c("isMWXacGroupThread")(e)) && (!i || i(e))
                }).map(function (a) {
                    a = a.thread;
                    return a
                });
                return d("ReQLPaginatedList.shared").fromIterables(a.empty(), b)
            }, [M, L, E, O, i]),
            T = d("ReQLSuspense").useFirst(function () {
                return S.descending.bounds(R)
            }, [R, S], f.id + ":487") == null;
        n(function () {
            J && J(T)
        }, [T, J]);
        d("Int64Hooks").useEffectInt64(function () {
            N == null && z(M, E, q, I, A)
        }, [E, N, M, q, I, A, z]);
        C = c("useMarkSeenWhenVisible")(E);
        a = m(function () {
            y(M, N, q, I, A, K)
        }, [M, y, N, q, I, A, K]);
        var U = m(function (a) {
            return l.jsx(l.Fragment, {
                children: F(a)
            }, (j || (j = d("I64"))).to_string(a.threadKey))
        }, [F]);
        return N == null ? G != null ? G() : null : l.jsx(c("Box.react"), {
            "aria-label": u,
            "data-testid": void 0,
            ref: C,
            role: H,
            xstyle: [o.container, g],
            children: l.jsx(d("MWThreadListFocusableTable.react").MWThreadListFocusableTable, {
                children: l.jsx(c("ReQLPaginatedList.react"), {
                    bounds: R,
                    data: S,
                    direction: "desc",
                    hasReachedBottom: !N.hasMoreBefore,
                    hasReachedTop: !N.hasMoreAfter,
                    imperativeRef: v,
                    isSufficientContentLoadedBelow: w,
                    onReachingBottom: a,
                    onReachingTop: x,
                    onScroll: B,
                    pageSize: D,
                    renderEmptyContent: function () {
                        return T && !N.isLoadingAfter && !N.isLoadingBefore ? l.jsx(c("Box.react"), {
                            xstyle: o.emptyContentContainer,
                            children: p
                        }) : null
                    },
                    renderFooter: function () {
                        return b
                    },
                    renderHeader: function () {
                        return e
                    },
                    renderItem: U,
                    renderLoadingAnimation: G,
                    xstyle: o.list
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import { Box } from 'Box.react';
import I64 from 'I64';
import { useInt64, useEffectInt64, useMemoInt64 } from 'Int64Hooks';
import LSAuthorityLevel from 'LSAuthorityLevel';
import LSFactory from 'LSFactory';
import LSFilteredThreadsRangesQueryStoredProcedure from 'LSFilteredThreadsRangesQueryStoredProcedure';
import LSIntEnum from 'LSIntEnum';
import LSMessagingThreadTypeUtil from 'LSMessagingThreadTypeUtil';
import LSThreadRangeFilter from 'LSThreadRangeFilter';
import LSThreadsRangesQueryStoredProcedure from 'LSThreadsRangesQueryStoredProcedure';
import MAWSetupUtils from 'MAWSetupUtils';
import MWCMIsAnyCMThread from 'MWCMIsAnyCMThread';
import MWCMIsThreadBumped from 'MWCMIsThreadBumped';
import MWIsThreadDisabled from 'MWIsThreadDisabled';
import { MWThreadListFocusableTable } from 'MWThreadListFocusableTable.react';
import MWThreadListSupportedThreadTypes from 'MWThreadListSupportedThreadTypes';
import MWXacGating from 'MWXacGating';
import MetaConfig from 'MetaConfig';
import ReQL from 'ReQL';
import ReQLPaginatedList from 'ReQLPaginatedList.react';
import { fromIterables } from 'ReQLPaginatedList.shared';
import ReQLSuspense from 'ReQLSuspense';
import asyncToGeneratorRuntime from 'asyncToGeneratorRuntime';
import isMWXacGroupThread from 'isMWXacGroupThread';
import promiseDone from 'promiseDone';
import React, { useCallback, useEffect } from 'react';
import useMarkSeenWhenVisible from 'useMarkSeenWhenVisible';
import useReStore from 'useReStore';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    overflowX: 'auto',
    overflowY: 'auto',
  },
  emptyContentContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowX: 'auto',
    overflowY: 'auto',
  },
};


function _loadMoreThreads(store, threadRange, filter = LSIntEnum.ofNumber(LSThreadRangeFilter.NONE), secondaryFilter = LSIntEnum.ofNumber(LSThreadRangeFilter.NONE), onLoadMoreThreads, shouldSkipE2eeThreadsRanges = false) {
    if (threadRange == null) return;

    if (!threadRange.threadRangeFilter) {
        const key = [threadRange.parentThreadKey, threadRange.minThreadKey, threadRange.minLastActivityTimestampMs];
        loadMoreThreadsHelper(store, key, onLoadMoreThreads, shouldSkipE2eeThreadsRanges);
    } else {
        const key = [threadRange.parentThreadKey, threadRange.minThreadKey, threadRange.minLastActivityTimestampMs, threadRange.threadRangeFilter, threadRange.folderName, threadRange.secondaryThreadRangeFilter, threadRange.threadRangeFilterValue];
        loadMoreThreadsWithFilters(store, key, filter, secondaryFilter, onLoadMoreThreads);
    }
}

function loadMoreThreadsHelper(store, key, onLoadMoreThreads, shouldSkipE2eeThreadsRanges = false) {
    promiseDone(store.runInTransaction(async (store) => {
        const range = await store.threads_ranges_v2__generated.get(...key);
        if (range == null || range.isLoadingBefore) return;
        onLoadMoreThreads && onLoadMoreThreads();
        return LSThreadsRangesQueryStoredProcedure(LSFactory(store), {
            additionalPagesToFetch: I64.zero,
            isLoadingAfter: false,
            isLoadingBefore: true,
            maxLastActivityTimestampMs: range.maxLastActivityTimestampMs,
            maxThreadKey: range.maxThreadKey,
            minLastActivityTimestampMs: range.minLastActivityTimestampMs,
            minThreadKey: range.minThreadKey,
            parentThreadKey: range.parentThreadKey,
            shouldSkipE2eeThreadsRanges,
        });
    }, 'readwrite', 'ui'));
}

function loadMoreThreadsWithFilters(store, key, filter = LSIntEnum.ofNumber(LSThreadRangeFilter.NONE), secondaryFilter = LSIntEnum.ofNumber(LSThreadRangeFilter.NONE), onLoadMoreThreads) {
    promiseDone(store.runInTransaction(async (store) => {
        const range = await store.filtered_threads_ranges_v3__generated.get(...key);
        if (range == null || range.isLoadingBefore) return;
        onLoadMoreThreads && onLoadMoreThreads();
        return LSFilteredThreadsRangesQueryStoredProcedure(LSFactory(store), {
            filter,
            isLoadingAfter: false,
            isLoadingBefore: true,
            maxLastActivityTimestampMs: range.maxLastActivityTimestampMs,
            maxThreadKey: range.maxThreadKey,
            minLastActivityTimestampMs: range.minLastActivityTimestampMs,
            minThreadKey: range.minThreadKey,
            parentThreadKey: range.parentThreadKey,
            secondaryFilter,
        });
    }, 'readwrite', 'ui'));
}

function _loadMoreThreadsForEmptyRange(store, parentThreadKey, filter, secondaryFilter, onLoadMoreThreads, shouldSkipE2eeThreadsRanges = false) {
    promiseDone(asyncToGeneratorRuntime.asyncToGenerator(async () => {
        const syncGroup = await ReQL.firstAsync(ReQL.fromTableAscending(store.table('sync_groups')).getKeyRange(LSIntEnum.ofNumber(1)));
        if (syncGroup != null && I64.equal(syncGroup.syncStatus, LSIntEnum.ofNumber(2))) {
            await store.runInTransaction((store) => {
                onLoadMoreThreads?.();
                if (filter == null) {
                    return LSThreadsRangesQueryStoredProcedure(LSFactory(store), {
                        additionalPagesToFetch: I64.zero,
                        isLoadingAfter: false,
                        isLoadingBefore: true,
                        maxLastActivityTimestampMs: I64.max_int,
                        maxThreadKey: I64.max_int,
                        minLastActivityTimestampMs: I64.max_int,
                        minThreadKey: I64.max_int,
                        parentThreadKey,
                        shouldSkipE2eeThreadsRanges,
                    });
                } else {
                    return LSFilteredThreadsRangesQueryStoredProcedure(LSFactory(store), {
                        filter,
                        isLoadingAfter: false,
                        isLoadingBefore: true,
                        maxLastActivityTimestampMs: I64.max_int,
                        maxThreadKey: I64.max_int,
                        minLastActivityTimestampMs: I64.max_int,
                        minThreadKey: I64.max_int,
                        parentThreadKey,
                        secondaryFilter,
                    });
                }
            }, 'readwrite', 'ui');
        }
    })());
}

function getThreadRangeResult(
 store: any,
 parentThreadKey: I64,
 filter: LSIntEnum | null,
 secondaryFilter: LSIntEnum | null,
) {
 const emptyResult = ReQLSuspense.useFirst(
   () => (filter == null ? ReQL.fromTableDescending(store.table('threads_ranges_v2__generated')).getKeyRange(parentThreadKey) : ReQL.empty()),
   [store, filter, parentThreadKey],
   `MWPBaseThreadList.react:303`,
 );
 const filteredResult = ReQLSuspense.useFirst(
   () =>
     filter == null
       ? ReQL.empty()
       : ReQL.fromTableDescending(store.table('filtered_threads_ranges_v3__generated'))
           .getKeyRange(parentThreadKey)
           .filter((result) => I64.equal(result.threadRangeFilter, filter) && (!secondaryFilter || I64.equal(result.secondaryThreadRangeFilter, secondaryFilter))),
   [store, filter, parentThreadKey, secondaryFilter],
   `MWPBaseThreadList.react:310`,
 );
 return filter == null ? emptyResult : filteredResult;
}

function MWPBaseThreadList({
 afterContent,
 beforeContent,
 containerStyle,
 customThreadFilter_DO_NOT_USE,
 emptyContent,
 filter,
 gridLabel,
 imperativeRef,
 isSufficientContentLoadedBelow,
 loadMoreThreads = _loadMoreThreads,
 loadMoreThreadsForEmptyRange = _loadMoreThreadsForEmptyRange,
 onLoadMoreThreads,
 onReachingTop,
 onScroll,
 onThreadsLoaded,
 pageSize,
 parentThreadKey,
 renderItem,
 renderLoadingAnimation,
 role = 'grid',
 secondaryFilter,
 setIsEmptyInbox,
 shouldSkipE2eeThreadsRanges = false,
}: {
 afterContent?: React.ReactNode;
 beforeContent?: React.ReactNode;
 containerStyle?: React.CSSProperties;
 customThreadFilter_DO_NOT_USE?: (thread: any) => boolean;
 emptyContent?: React.ReactNode;
 filter?: LSIntEnum;
 gridLabel?: string;
 imperativeRef?: React.RefObject<any>;
 isSufficientContentLoadedBelow?: boolean;
 loadMoreThreads?: typeof _loadMoreThreads;
 loadMoreThreadsForEmptyRange?: typeof _loadMoreThreadsForEmptyRange;
 onLoadMoreThreads?: () => void;
 onReachingTop?: () => void;
 onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
 onThreadsLoaded?: () => void;
 pageSize?: number;
 parentThreadKey: I64;
 renderItem: (thread: any) => React.ReactNode;
 renderLoadingAnimation?: () => React.ReactNode;
 role?: string;
 secondaryFilter?: LSIntEnum;
 setIsEmptyInbox?: (isEmptyInbox: boolean) => void;
 shouldSkipE2eeThreadsRanges?: boolean;
}) {
 const isIDBOperational = MAWSetupUtils.useIsIDBOperational();
 const store = useReStore();
 const threadRangeResult = getThreadRangeResult(store, parentThreadKey, filter, secondaryFilter);
 const pinnedThreads = ReQLSuspense.useArray(
   () => ReQL.fromTableAscending(store.table('pinned_threads').index('pinnedTimestamp')),
   [store],
   `$MWPBaseThreadList.react:380`,
 );

 const isActivityTimestampZero = MetaConfig._('44');

 if (threadRangeResult != null && !threadRangeResult.isLoadingBefore && onThreadsLoaded) {
   onThreadsLoaded && onThreadsLoaded();
 }

 const minLastActivityTimestampMs =
   threadRangeResult != null
     ? I64.equal(threadRangeResult.minLastActivityTimestampMs, I64.zero) ||
       I64.equal(threadRangeResult.minLastActivityTimestampMs, I64.one) ||
       (isActivityTimestampZero ? I64.equal(threadRangeResult.minLastActivityTimestampMs, I64.max_int) : false)
       ? null
       : threadRangeResult.minLastActivityTimestampMs
     : null;

 const maxLastActivityTimestampMs =
   threadRangeResult != null
     ? I64.equal(threadRangeResult.maxLastActivityTimestampMs, I64.zero) ||
       I64.equal(threadRangeResult.maxLastActivityTimestampMs, I64.one)
       ? null
       : threadRangeResult.maxLastActivityTimestampMs
     : null;

 const bounds = useMemoInt64(
   () => ({
     gte: ReQL.key(minLastActivityTimestampMs != null ? minLastActivityTimestampMs : I64.min_int),
     lte: ReQL.key(maxLastActivityTimestampMs != null ? maxLastActivityTimestampMs : I64.max_int),
   }),
   [maxLastActivityTimestampMs, minLastActivityTimestampMs],
 );

 const data = useMemoInt64(
   () => {
     const threadsQuery = ReQL.fromTableDescending(store.table('threads').index('parentThreadKeyLastActivityTimestampMs')).getKeyRange(parentThreadKey);
     const secondaryThreadsQuery = ReQL.fromTableDescending(store.table('threads').index('secondaryParentThreadKeyLastActivityTimestampMs')).getKeyRange(parentThreadKey);
     const filteredThreads = ReQL.union(threadsQuery, secondaryThreadsQuery)
       .map((thread) => {
         if (!MWCMIsThreadBumped(thread)) {
           return { isHidden: false, thread };
         }
         const isHidden = ReQLSuspense.first(
           ReQL.fromTableAscending(store.table('community_folders'), ['isHidden']).getKeyRange(thread.parentThreadKey),
           `$MWPBaseThreadList.react:440`,
         )?.isHidden ?? false;
         return { isHidden, thread };
       })
       .filter(({ isHidden, thread }) => {
         if (isHidden) return false;
         const isSecureThread = LSMessagingThreadTypeUtil.isSecure(thread.threadType);
         return (
           (!isSecureThread || isIDBOperational) &&
           (MWCMIsAnyCMThread(thread.threadType) ? !MWIsThreadDisabled(thread.takedownState) : true) &&
           MWThreadListSupportedThreadTypes.findIndex((type) => I64.equal(thread.threadType, type)) !== -1 &&
           LSIntEnum.toNumber(thread.authorityLevel) > LSAuthorityLevel.CLIENT_PARTIAL &&
           (!MetaConfig._('45') || pinnedThreads.findIndex((pinnedThread) => I64.equal(thread.threadKey, pinnedThread.threadKey)) === -1) &&
           (MWXacGating.isGroupsEnabled() || !isMWXacGroupThread(thread)) &&
           (!customThreadFilter_DO_NOT_USE || customThreadFilter_DO_NOT_USE(thread))
           );
       });
     return fromIterables(ReQL.empty(), filteredThreads);
   },
   [store, isIDBOperational, parentThreadKey, pinnedThreads, customThreadFilter_DO_NOT_USE],
 );

 const isEmptyInbox =
   ReQLSuspense.useFirst(
     () => data.descending.bounds(bounds),
     [bounds, data],
     `$MWPBaseThreadList.react:487`,
   ) == null;

 useEffect(() => {
   setIsEmptyInbox && setIsEmptyInbox(isEmptyInbox);
 }, [isEmptyInbox, setIsEmptyInbox]);

 useEffectInt64(() => {
   if (threadRangeResult == null) {
     loadMoreThreadsForEmptyRange(store, parentThreadKey, filter, secondaryFilter, onLoadMoreThreads);
   }
 }, [parentThreadKey, threadRangeResult, store, filter, secondaryFilter, onLoadMoreThreads, loadMoreThreadsForEmptyRange]);

 const markAsSeenRef = useMarkSeenWhenVisible(parentThreadKey);

 const loadMore = useCallback(() => {
   loadMoreThreads(store, threadRangeResult, filter, secondaryFilter, onLoadMoreThreads, shouldSkipE2eeThreadsRanges);
 }, [store, loadMoreThreads, threadRangeResult, filter, secondaryFilter, onLoadMoreThreads, shouldSkipE2eeThreadsRanges]);

 const renderItemCallback = useCallback(
   (thread) => (
     <React.Fragment key={I64.to_string(thread.threadKey)}>{renderItem(thread)}</React.Fragment>
   ),
   [renderItem],
 );

 if (threadRangeResult == null) {
   return renderLoadingAnimation ? renderLoadingAnimation() : null;
 }

 return (
   <Box
     aria-label={gridLabel}
     data-testid={undefined}
     ref={markAsSeenRef}
     role={role}
     xstyle={[styles.container, containerStyle]}
   >
     <MWThreadListFocusableTable>
       <ReQLPaginatedList
         bounds={bounds}
         data={data}
         direction="desc"
         hasReachedBottom={!threadRangeResult.hasMoreBefore}
         hasReachedTop={!threadRangeResult.hasMoreAfter}
         imperativeRef={imperativeRef}
         isSufficientContentLoadedBelow={isSufficientContentLoadedBelow}
         onReachingBottom={loadMore}
         onReachingTop={onReachingTop}
         onScroll={onScroll}
         pageSize={pageSize}
         renderEmptyContent={() =>
           isEmptyInbox && !threadRangeResult.isLoadingAfter && !threadRangeResult.isLoadingBefore ? (
             <Box xstyle={styles.emptyContentContainer}>{emptyContent}</Box>
           ) : null
         }
         renderFooter={() => afterContent}
         renderHeader={() => beforeContent}
         renderItem={renderItemCallback}
         renderLoadingAnimation={renderLoadingAnimation}
         xstyle={styles.list}
       />
     </MWThreadListFocusableTable>
   </Box>
 );
}

MWPBaseThreadList.displayName = `MWPBaseThreadList [from $MWPBaseThreadList.react]`;

export default MWPBaseThreadList;