__d("ReQLPaginatedList.react", ["CometHeroHoldTrigger.react", "PromiseOrValue", "ReQL", "ReQLScrollAnchored.react", "ReQLSuspense", "SortedAsyncIterable", "deepEquals", "promiseDone", "react", "useMergeRefs", "useStableBounds", "useStableValue"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || (h = d("react"));
    b = h;
    var k = b.useCallback,
        l = b.useEffect,
        aa = b.useLayoutEffect,
        m = b.useMemo,
        n = b.useRef,
        ba = b.useState,
        o = b.useTransition;

    function p(a, b) {
        return b == null ? a : a.bounds(b)
    }

    function q(a) {
        if (a instanceof Promise) throw a;
        return a
    }

    function r(a) {
        return {
            direction: a.direction,
            iterator: function (b, c) {
                var e = a.iterator(b, c);
                return {
                    next: function (a) {
                        return (i || (i = d("PromiseOrValue"))).map(e.next(a), function (a) {
                            return a.done ? a : {
                                done: !1,
                                value: [a.value[0], a.value]
                            }
                        })
                    }
                }
            },
            keyLength: a.keyLength,
            subscribe: function (b, c) {
                return a.subscribe(async function (a, c, d) {
                    c.operation === "delete" ? await b(a, c, d) : c.operation === "add" ? await b(a, {
                        operation: "add",
                        value: [a, c.value]
                    }, d) : c.operation === "put" && await b(a, {
                        operation: "put",
                        value: [a, c.value]
                    }, d)
                }, c)
            }
        }
    }

    function ca(a) {
        var b = a.clientHeight;
        a = a.scrollTop;
        return a > b * 2
    }

    function a(a) {
        var b = a.bounds,
            e = a.direction,
            g = e === void 0 ? "asc" : e;
        e = a.hasReachedBottom;
        var h = e === void 0 ? !0 : e;
        e = a.hasReachedTop;
        var i = e === void 0 ? !0 : e;
        e = a.imperativeRef;
        var s = a.initialAnchor,
            da = a.initialRenderComplete,
            t = a.onPageLoaded,
            u = a.onReachingBottom,
            v = a.onReachingTop,
            ea = a.onScroll,
            fa = a.onUserScroll,
            w = a.pageSize,
            x = w === void 0 ? 15 : w;
        w = a.renderEmptyContent;
        var y = a.renderFooter,
            ga = a.renderHeader,
            ha = a.renderHeaderContentSpacer,
            z = a.renderItem,
            ia = a.renderLoadingAnimation,
            ja = a.headerStyle,
            A = a.isSufficientContentLoadedAbove;
        A = A === void 0 ? ca : A;
        var ka = a.isSufficientContentLoadedBelow,
            B = a.snapThreshold;
        B = B === void 0 ? 5 : B;
        var C = a.setScrollTopInResetForBottomAnchor;
        C = C === void 0 ? !0 : C;
        var D = a.data,
            E = D.ascending,
            F = D.descending;
        D = a.xstyle;
        a = a.holdTriggerElementsCount;
        var G = o();
        G[0];
        var H = G[1],
            I = c("useStableBounds")(b);
        if (s != null && s !== "top" && s !== "bottom") {
            G = p(F, I).bounds({
                lt: s
            }).iterator(new WeakMap()).next();
            if (G instanceof Promise) throw G;
            s = G.done ? "top" : G.value[0]
        }
        var J = d("useStableValue").useStableValue(s, c("deepEquals")),
            K = m(function () {
                var a, b;
                J === "top" || J == null ? (a = d("ReQL").empty(), b = g === "asc" ? E : F) : J === "bottom" ? (a = g === "asc" ? F : E, b = d("ReQL").empty()) : (a = g === "asc" ? F.bounds({
                    lt: J
                }) : E.bounds({
                    gt: J
                }), b = g === "asc" ? E.bounds({
                    gte: J
                }) : F.bounds({
                    lte: J
                }));
                return {
                    after: b,
                    before: a
                }
            }, [J, E, F, g]),
            L = n(!1),
            M = m(function () {
                var a = q(d("SortedAsyncIterable").toArray(p(K.before, I).take(J === "bottom" ? x : 0), f.id + ":198")).reverse(),
                    b = q(d("SortedAsyncIterable").toArray(p(K.after, I).take(x), f.id + ":205")),
                    c = J === "bottom" ? !0 : b.length < x,
                    e = J === "top" || J == null ? !0 : J === "bottom" ? a.length < x : !1;
                return {
                    firstKey: e ? void 0 : J === "bottom" ? (e = a[0]) == null ? void 0 : e[0] : (a = b[0]) == null ? void 0 : a[0],
                    lastKey: c ? void 0 : (e = b[b.length - 1]) == null ? void 0 : e[0]
                }
            }, [J, I, K.after, K.before, x]);
        b = ba(function () {
            return {
                anchor: J,
                iterables: K,
                values: M
            }
        });
        G = b[0];
        var N = b[1];
        s = G.iterables === K && G.anchor === J;
        b = s ? G.values : M;
        var O = b.firstKey,
            P = b.lastKey,
            Q = d("ReQLSuspense").useArray(function () {
                return r(O == null ? p(K.before, I).take(x) : p(K.before, I).bounds(g === "asc" ? {
                    gte: O
                } : {
                    lte: O
                }))
            }, [I, g, O, K.before, x], f.id + ":240"),
            R = m(function () {
                return [].concat(Q).reverse()
            }, [Q]);
        l(function () {
            R.length === x && O == null && H(function () {
                return N({
                    anchor: J,
                    iterables: K,
                    values: {
                        firstKey: R[0][0],
                        lastKey: P
                    }
                })
            })
        }, [R, O, J, K, P, x]);
        var S = d("ReQLSuspense").useArray(function () {
            return r(P == null ? p(K.after, I).take(x) : p(K.after, I).bounds(g === "asc" ? {
                lte: P
            } : {
                gte: P
            }))
        }, [I, g, K.after, P, x], f.id + ":267");
        l(function () {
            S.length === x && P == null && H(function () {
                return N({
                    anchor: J,
                    iterables: K,
                    values: {
                        firstKey: O,
                        lastKey: S[S.length - 1][0]
                    }
                })
            })
        }, [S, O, J, K, P, x]);
        var T = m(function () {
                return [].concat(R, S)
            }, [R, S]),
            U = d("ReQLSuspense").useFirst(function () {
                return T.length === 0 ? d("ReQL").empty() : p(K.before, I).bounds(g === "asc" ? {
                    lt: T[0][0]
                } : {
                    gt: T[0][0]
                })
            }, [T, I, g, K.before], f.id + ":294") == null,
            V = d("ReQLSuspense").useFirst(function () {
                return T.length === 0 ? d("ReQL").empty() : p(K.after, I).bounds(g === "asc" ? {
                    gt: T[T.length - 1][0]
                } : {
                    lt: T[T.length - 1][0]
                })
            }, [T, I, g, K.after], f.id + ":304") == null;
        s = o();
        var W = s[0],
            la = s[1];
        G = k(function () {
            if (L.current || W) return;
            if (V) {
                if (!h && u != null) return u()
            } else {
                L.current = !0;
                c("promiseDone")(Promise.resolve(d("SortedAsyncIterable").toArray(p(g === "asc" ? E : F, I).bounds(g === "asc" ? {
                    gt: T[T.length - 1][0]
                } : {
                    lt: T[T.length - 1][0]
                }).take(x), f.id + ":331")), function (a) {
                    L.current = !1, t != null && t("bottom", T[T.length - 1][1], a.map(function (a) {
                        return a[1]
                    })), la(function () {
                        var b;
                        return N({
                            anchor: J,
                            iterables: K,
                            values: {
                                firstKey: O,
                                lastKey: (b = (b = a[a.length - 1]) == null ? void 0 : b[0]) != null ? b : T[T.length - 1][0]
                            }
                        })
                    })
                });
                return
            }
        }, [W, V, h, u, g, E, F, I, T, x, t, O, K, J]);
        b = o();
        var X = b[0],
            ma = b[1],
            Y = n(!0);
        s = k(function () {
            if (L.current || X) return;
            if (U) {
                if (!i) return v == null ? void 0 : v();
                return
            }
            L.current = !0;
            c("promiseDone")(Promise.resolve(d("SortedAsyncIterable").toArray(p(g === "asc" ? F : E, I).bounds(g === "asc" ? {
                lt: T[0][0]
            } : {
                gt: T[0][0]
            }).take(x), f.id + ":403")), function (a) {
                L.current = !1, t != null && (Y.current ? (Y.current = !1, t("top", null, T.slice(0, x).map(function (a) {
                    return a[1]
                }).reverse())) : t("top", T[0][1], a.map(function (a) {
                    return a[1]
                }))), a.reverse(), ma(function () {
                    var b;
                    return N({
                        anchor: J,
                        iterables: K,
                        values: {
                            firstKey: (b = (b = a[0]) == null ? void 0 : b[0]) != null ? b : T[0][0],
                            lastKey: P
                        }
                    })
                })
            })
        }, [X, U, i, v, g, F, E, I, T, x, t, P, K, J]);
        var Z = U && i ? 0 : 1,
            $ = T.length - (V && h ? 0 : 1);
        b = m(function () {
            var a = new Array($ > Z ? $ - Z : 0);
            for (var b = Z; b < $; b++) {
                var c;
                a[b - Z] = z(T[b][1], {
                    nextItem: (c = T[b + 1]) == null ? void 0 : c[1],
                    previousItem: (c = T[b - 1]) == null ? void 0 : c[1]
                })
            }
            return a
        }, [T, Z, z, $]);
        var na = n(null);
        e = c("useMergeRefs")(na, e);
        aa(function () {
            var a;
            (a = na.current) == null ? void 0 : a.resetScrollPosition()
        }, [J]);
        var oa = k(function () {
            return y == null ? void 0 : y(T.length > 0 ? T[T.length - 1][1] : void 0)
        }, [T, y]);
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("CometHeroHoldTrigger.react"), {
                description: "ReQLPaginatedListLoadingMoreItems",
                hold: a != null && !i && T.length < a
            }), j.jsx(c("ReQLScrollAnchored.react"), {
                elements: b,
                hasReachedBottom: V && h,
                hasReachedTop: U && i,
                headerStyle: ja,
                initialAnchor: J === "bottom" ? "bottom" : "top",
                initialRenderComplete: da,
                isSufficientContentLoadedAbove: A,
                isSufficientContentLoadedBelow: ka,
                onReachingBottom: G,
                onReachingTop: s,
                onScroll: ea,
                onUserScroll: fa,
                pageSize: x,
                ref: e,
                renderEmptyContent: w,
                renderFooter: oa,
                renderHeader: ga,
                renderHeaderContentSpacer: ha,
                renderLoadingAnimation: ia,
                setScrollTopInResetForBottomAnchor: C,
                snapThreshold: B,
                xstyle: D
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.default = a
}), 98);

"use strict";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useTransition } from "react";
import { CometHeroHoldTrigger } from "CometHeroHoldTrigger.react";
import { PromiseOrValue } from "PromiseOrValue";
import { ReQL } from "ReQL";
import { ReQLScrollAnchored } from "ReQLScrollAnchored.react";
import { ReQLSuspense } from "ReQLSuspense";
import { SortedAsyncIterable } from "SortedAsyncIterable";
import { deepEquals } from "deepEquals";
import { promiseDone } from "promiseDone";
import { useMergeRefs } from "useMergeRefs";
import { useStableBounds } from "useStableBounds";
import { useStableValue } from "useStableValue";

function getBounds(bounds, stableBounds) {
  return stableBounds == null ? bounds : bounds.bounds(stableBounds);
}

function handlePromiseOrValue(value) {
  if (value instanceof Promise) throw value;
  return value;
}

function createReQLSource(source) {
  return {
    direction: source.direction,
    iterator: (pageKey, pageSize) => {
      const iterator = source.iterator(pageKey, pageSize);
      return {
        next: (pageSize) => PromiseOrValue.map(iterator.next(pageSize), (result) =>
          result.done ? result : {
            done: false,
            value: [result.value[0], result.value]
          }
        )
      };
    },
    keyLength: source.keyLength,
    subscribe: (callback, context) => source.subscribe(async (key, change, context) => {
      if (change.operation === 'delete') {
        await callback(key, change, context);
      } else if (change.operation === 'add') {
        await callback(key, { operation: 'add', value: [key, change.value] }, context);
      } else if (change.operation === 'put') {
        await callback(key, { operation: 'put', value: [key, change.value] }, context);
      }
    }, context)
  };
}

function isScrolledToBottom(element) {
  const { clientHeight, scrollTop } = element;
  return scrollTop > clientHeight * 2;
}

const ReQLPaginatedList = ({
  bounds,
  direction = 'asc',
  hasReachedBottom = true,
  hasReachedTop = true,
  imperativeRef,
  initialAnchor,
  initialRenderComplete,
  onPageLoaded,
  onReachingBottom,
  onReachingTop,
  onScroll,
  onUserScroll,
  pageSize = 15,
  renderEmptyContent,
  renderFooter,
  renderHeader,
  renderHeaderContentSpacer,
  renderItem,
  renderLoadingAnimation,
  headerStyle,
  isSufficientContentLoadedAbove = isScrolledToBottom,
  isSufficientContentLoadedBelow,
  snapThreshold = 5,
  setScrollTopInResetForBottomAnchor = true,
  data: { ascending, descending },
  xstyle,
  holdTriggerElementsCount
}) => {
  const [_, startTransition] = useTransition();
  const stableBounds = useStableBounds(bounds);

  if (initialAnchor != null && initialAnchor !== 'top' && initialAnchor !== 'bottom') {
    const initialPosition = getBounds(descending, stableBounds).bounds({ lt: initialAnchor }).iterator(new WeakMap()).next();
    if (initialPosition instanceof Promise) throw initialPosition;
    initialAnchor = initialPosition.done ? 'top' : initialPosition.value[0];
  }

  const stableAnchor = useStableValue(initialAnchor, deepEquals);
  const iterables = useMemo(() => {
    let before, after;
    if (stableAnchor === 'top' || stableAnchor == null) {
      before = ReQL.empty();
      after = direction === 'asc' ? ascending : descending;
    } else if (stableAnchor === 'bottom') {
      before = direction === 'asc' ? descending : ascending;
      after = ReQL.empty();
    } else {
      before = direction === 'asc' ? descending.bounds({ lt: stableAnchor }) : ascending.bounds({ gt: stableAnchor });
      after = direction === 'asc' ? ascending.bounds({ gte: stableAnchor }) : descending.bounds({ lte: stableAnchor });
    }
    return { after, before };
  }, [stableAnchor, ascending, descending, direction]);

  let isLoading = useRef(false);
  const values = useMemo(() => {
    const beforeItems = handlePromiseOrValue(SortedAsyncIterable.toArray(getBounds(iterables.before, stableBounds).take(stableAnchor === 'bottom' ? pageSize : 0), `${f.id}:198`)).reverse();
    const afterItems = handlePromiseOrValue(SortedAsyncIterable.toArray(getBounds(iterables.after, stableBounds).take(pageSize), `${f.id}:205`));
    const hasMoreAfter = stableAnchor === 'bottom' ? afterItems.length < pageSize : false;
    const hasMoreBefore = stableAnchor === 'top' || stableAnchor == null ? true : stableAnchor === 'bottom' ? beforeItems.length < pageSize : false;
    return {
      firstKey: hasMoreBefore ? undefined : stableAnchor === 'bottom' ? beforeItems[0]?.[0] : afterItems[0]?.[0],
      lastKey: hasMoreAfter ? undefined : afterItems[afterItems.length - 1]?.[0]
    };
  }, [stableBounds, iterables.before, iterables.after, pageSize, stableAnchor]);

  const [state, setState] = useState(() => ({
    anchor: stableAnchor,
    iterables,
    values
  }));

  const isStateUpToDate = state.iterables === iterables && state.anchor === stableAnchor;
  const currentValues = isStateUpToDate ? state.values : values;
  const { firstKey, lastKey } = currentValues;

  const beforeItems = ReQLSuspense.useArray(() =>
    createReQLSource(firstKey == null ? getBounds(iterables.before, stableBounds).take(pageSize) : getBounds(iterables.before, stableBounds).bounds(direction === 'asc' ? { gte: firstKey } : { lte: firstKey })),
    [stableBounds, direction, firstKey, iterables.before, pageSize],
    `${f.id}:240`
  );

  const reversedBeforeItems = useMemo(() => [...beforeItems].reverse(), [beforeItems]);

  useEffect(() => {
    if (reversedBeforeItems.length === pageSize && firstKey == null) {
      startTransition(() => {
        setState({
          anchor: stableAnchor,
          iterables,
          values: {
            firstKey: reversedBeforeItems[0][0],
            lastKey
          }
        });
      });
    }
  }, [reversedBeforeItems, firstKey, stableAnchor, iterables, lastKey, pageSize]);

  const afterItems = ReQLSuspense.useArray(() =>
    createReQLSource(lastKey == null ? getBounds(iterables.after, stableBounds).take(pageSize) : getBounds(iterables.after, stableBounds).bounds(direction === 'asc' ? { lte: lastKey } : { gte: lastKey })),
    [stableBounds, direction, iterables.after, lastKey, pageSize],
    `${f.id}:267`
  );

  useEffect(() => {
    if (afterItems.length === pageSize && lastKey == null) {
      startTransition(() => {
        setState({
          anchor: stableAnchor,
          iterables,
          values: {
            firstKey,
            lastKey: afterItems[afterItems.length - 1][0]
          }
        });
      });
    }
  }, [afterItems, firstKey, stableAnchor, iterables, lastKey, pageSize]);

  const allItems = useMemo(() => [...beforeItems, ...afterItems], [beforeItems, afterItems]);
  
  const hasMoreBefore = ReQLSuspense.useFirst(() =>
    allItems.length === 0 ? ReQL.empty() : getBounds(iterables.before, stableBounds).bounds(direction === 'asc' ? { lt: allItems[0][0] } : { gt: allItems[0][0] })
  , [allItems, stableBounds, direction, iterables.before], `${f.id}:294`) == null;
  const hasMoreAfter = ReQLSuspense.useFirst(() =>
    allItems.length === 0 ? ReQL.empty() : getBounds(iterables.after, stableBounds).bounds(direction === 'asc' ? { gt: allItems[allItems.length - 1][0] } : { lt: allItems[allItems.length - 1][0] })
  , [allItems, stableBounds, direction, iterables.after], `${f.id}:304`) == null;

  const [loadMoreBottom, setLoadingBottom] = useTransition();
  const handleLoadMoreBottom = useCallback(() => {
    if (isLoading.current || loadMoreBottom) return;
    if (hasMoreAfter) {
      if (!hasReachedBottom && onReachingBottom != null) {
        onReachingBottom();
        return;
      }
    } else {
      isLoading.current = true;
      promiseDone(Promise.resolve(SortedAsyncIterable.toArray(getBounds(direction === 'asc' ? ascending : descending, stableBounds).bounds(direction === 'asc' ? { gt: allItems[allItems.length - 1][0] } : { lt: allItems[allItems.length - 1][0] }).take(pageSize), `${f.id}:331`)), (newItems) => {
        isLoading.current = false;
        if (onPageLoaded != null) {
          onPageLoaded('bottom', allItems[allItems.length - 1][1], newItems.map(item => item[1]));
        }
        setLoadingBottom(() => {
          setState({
            anchor: stableAnchor,
            iterables,
            values: {
              firstKey,
              lastKey: newItems[newItems.length - 1]?.[0] ?? allItems[allItems.length - 1][0]
            }
          });
        });
      });
    }
  }, [loadMoreBottom, hasMoreAfter, hasReachedBottom, onReachingBottom, direction, ascending, descending, stableBounds, allItems, pageSize, onPageLoaded, stableAnchor, iterables, firstKey]);

  const [loadMoreTop, setLoadingTop] = useTransition();
  const handleLoadMoreTop = useCallback(() => {
    if (isLoading.current || loadMoreTop) return;
    if (hasMoreBefore) {
      if (!hasReachedTop && onReachingTop != null) {
        onReachingTop();
        return;
      }
    } else {
      isLoading.current = true;
      promiseDone(Promise.resolve(SortedAsyncIterable.toArray(getBounds(direction === 'asc' ? descending : ascending, stableBounds).bounds(direction === 'asc' ? { lt: allItems[0][0] } : { gt: allItems[0][0] }).take(pageSize), `${f.id}:403`)), (newItems) => {
        isLoading.current = false;
        if (onPageLoaded != null) {
          if (newItems.length === pageSize) {
            onPageLoaded('top', null, newItems.slice(0, pageSize).map(item => item[1]).reverse());
          } else {
            onPageLoaded('top', allItems[0][1], newItems.map(item => item[1]));
          }
        }
        newItems.reverse()
        setLoadingTop(() => {
          setState({
            anchor: stableAnchor,
            iterables,
            values: {
              firstKey: newItems[0]?.[0] ?? allItems[0][0],
              lastKey
            }
          });
        });
      });
    }
  }, [loadMoreTop, hasMoreBefore, hasReachedTop, onReachingTop, direction, descending, ascending, stableBounds, allItems, pageSize, onPageLoaded, stableAnchor, iterables, lastKey]);

  const startIndex = hasMoreBefore && hasReachedTop ? 0 : 1;
  const endIndex = allItems.length - (hasMoreAfter && hasReachedBottom ? 0 : 1);

  const renderedItems = useMemo(() => {
    const items = new Array(endIndex > startIndex ? endIndex - startIndex : 0);
    for (let i = startIndex; i < endIndex; i++) {
      items[i - startIndex] = renderItem(allItems[i][1], {
        nextItem: allItems[i + 1]?.[1],
        previousItem: allItems[i - 1]?.[1]
      });
    }
    return items;
  }, [allItems, startIndex, renderItem, endIndex]);

  const scrollRef = useRef(null);
  const mergedRef = useMergeRefs(scrollRef, imperativeRef);

  useLayoutEffect(() => {
    scrollRef.current?.resetScrollPosition();
  }, [stableAnchor]);

  const renderFooterContent = useCallback(() => {
    return renderFooter?.(allItems.length > 0 ? allItems[allItems.length - 1][1] : undefined);
  }, [allItems, renderFooter]);

  return (
    <React.Fragment>
      <CometHeroHoldTrigger
        description="ReQLPaginatedListLoadingMoreItems"
        hold={holdTriggerElementsCount != null && !hasReachedTop && allItems.length < holdTriggerElementsCount}
      />
      <ReQLScrollAnchored
        elements={renderedItems}
        hasReachedBottom={hasMoreAfter && hasReachedBottom}
        hasReachedTop={hasMoreBefore && hasReachedTop}
        headerStyle={headerStyle}
        initialAnchor={stableAnchor === 'bottom' ? 'bottom' : 'top'}
        initialRenderComplete={initialRenderComplete}
        isSufficientContentLoadedAbove={isSufficientContentLoadedAbove}
        isSufficientContentLoadedBelow={isSufficientContentLoadedBelow}
        onReachingBottom={handleLoadMoreBottom}
        onReachingTop={handleLoadMoreTop}
        onScroll={onScroll}
        onUserScroll={onUserScroll}
        pageSize={pageSize}
        ref={mergedRef}
        renderEmptyContent={renderEmptyContent}
        renderFooter={renderFooterContent}
        renderHeader={renderHeader}
        renderHeaderContentSpacer={renderHeaderContentSpacer}
        renderLoadingAnimation={renderLoadingAnimation}
        setScrollTopInResetForBottomAnchor={setScrollTopInResetForBottomAnchor}
        snapThreshold={snapThreshold}
        xstyle={xstyle}
      />
    </React.Fragment>
  );
};

ReQLPaginatedList.displayName = ReQLPaginatedList.name + " [from " + f.id + "]";

export default ReQLPaginatedList;