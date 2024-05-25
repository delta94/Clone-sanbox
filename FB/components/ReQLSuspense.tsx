__d("ReQLSuspense", ["FBLogger", "I64", "Promise", "PromiseAnnotate", "PromiseOrValue", "ReQL", "ReQLGlobalQueryContext", "ReQLSuspenseSupportedContextTracking", "SortedAsyncIterable", "applyChangesToBPlusTree", "createBPlusTreeFromSorted", "isPromise", "promiseDone", "react", "shallowEqualI64", "useReStore"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l, m, n, o, p = m || d("react"),
        q = p.startTransition,
        r = p.useEffect,
        s = p.useMemo,
        t = p.useState;

    function u() {
        var a = (o || (o = d("ReQLGlobalQueryContext"))).globalQueryContext.withinSupportedContext === !0;
        return a ? !0 : d("ReQLSuspenseSupportedContextTracking").isWithinReactRenderingContext()
    }

    function v(a, b, e) {
        e === !0 && !u() && c("FBLogger")("messenger_web", "reqlsuspense_unsupported_use").blameToPreviousFile().mustfix("Detected use of ReQLSuspense method in unsupported context.\ntoArray/first/firstExn can only be used inside the body of a projection function passed to ReQL map operator.\nFor React rendering contexts, please use appropriate hook (useArray/useFirst/useFirstExn) variants instead.");
        if ((i || (i = c("isPromise")))(a))
            if (b != null) throw (n || (n = d("PromiseAnnotate"))).setDisplayName(a, b);
            else throw a;
        return a
    }

    function w(a) {
        var b = [];
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            Array.isArray(e) && e.length === 2 && Number.isInteger(e[0]) && Number.isInteger(e[1]) ? b.push(e[0], e[1]) : b.push(e, void 0)
        }
        return b
    }

    function x(a) { //toArray
        var b = arguments[1];
        return v(d("SortedAsyncIterable").toArray(a), b, !0).map(function (a) {
            a[0];
            a = a[1];
            return a
        })
    }

    function y(a) { // first
        var b = arguments[1];
        return x(d("ReQL").prototype.take.call(a, 1), b)[0]
    }

    function z(a) { //firstExn
        var b = arguments[1],
            d = y(a, b);
        if (d == null) throw c("FBLogger")("messenger_web").mustfixThrow("expected result");
        return d
    }

    function a(a, e) { // useArray
        var f = arguments[2],
            g = s(function () {
                var b = a();
                b.uniqueId = f;
                return b
            }, e == null ? [a] : w(e)),
            i = s(function () {
                return v(d("SortedAsyncIterable").toArray(g)).map(function (a) {
                    a[0];
                    a = a[1];
                    return a
                })
            }, [g]),
            l = t([i, g]),
            m = l[0],
            n = l[1],
            o = (j || (j = c("useReStore")))();
        r(function () {
            var a, e = [],
                f = g.subscribe(function (a, b) {
                    return void e.push([a, b])
                });

            function i() {
                if (e.length && a != null) {
                    var b = a;
                    c("applyChangesToBPlusTree")(b, e) && n([Array.from(b.entries(), function (a) {
                        return a[1]
                    }), g])
                }
            }
            var j = o.subscribeToCommit(i);
            c("promiseDone")((h || (h = b("Promise"))).resolve((k || (k = d("PromiseOrValue"))).map(d("SortedAsyncIterable").toArray(g), function (b) {
                a = c("createBPlusTreeFromSorted")(b, g.direction);
                var f = a;
                c("applyChangesToBPlusTree")(f, e);
                q(function () {
                    return n(function (a) {
                        var b = Array.from(f.entries(), function (a) {
                            return a[1]
                        });
                        return d("shallowEqualI64").shallowEqualI64(a[0], b) && a[1] === g ? a : [b, g]
                    })
                })
            })));
            return function () {
                j(), f()
            }
        }, [g, o]);
        return g === m[1] ? m[0] : i
    }

    function A(a, e) { //useFirst
        var f = arguments[2],
            g = s(function () {
                var b = a().take(1);
                b.uniqueId = f;
                return b
            }, e == null ? [a] : w(e)),
            i = s(function () {
                var a;
                return (a = v(g.iterator(d("SortedAsyncIterable").getOrCreateContext(g)).next(), f).value) == null ? void 0 : a[1]
            }, [g, f]),
            m = t([i, g]),
            n = m[0],
            o = m[1],
            p = (j || (j = c("useReStore")))();
        r(function () {
            var a, e = !1,
                f = g.subscribe(function (b, c) {
                    switch (c.operation) {
                        case "delete":
                            a = void 0;
                            break;
                        case "put":
                            if (a === c.value) return;
                            b = (l || (l = d("I64"))).cast(a);
                            if (b != null) {
                                var f = (l || (l = d("I64"))).cast(c.value);
                                if (f != null && (l || (l = d("I64"))).equal(b, f)) return
                            }
                            case "add":
                                a = c.value;
                                break
                    }
                    e = !0
                }),
                i = F(p, function () {
                    e && (e = !1, o([a, g]))
                });
            c("promiseDone")((h || (h = b("Promise"))).resolve((k || (k = d("PromiseOrValue"))).map(g.iterator(d("SortedAsyncIterable").getOrCreateContext(g)).next(), function (b) {
                var c;
                q(function () {
                    return o(function (a) {
                        var c;
                        return a[0] === ((c = b.value) == null ? void 0 : c[1]) && a[1] === g ? a : [(c = b.value) == null ? void 0 : c[1], g]
                    })
                });
                a = (c = b.value) == null ? void 0 : c[1]
            })));
            return function () {
                i(), f()
            }
        }, [g, p]);
        return g === n[1] ? n[0] : i
    }

    function e(a, b) {//useFirstExn
        var d = arguments[2],
            e = A(a, b, d);
        if (e == null) throw c("FBLogger")("messenger_web").mustfixThrow("expected result");
        return e
    }

    function B(a, b, c, e) {
        var f = s(function () {
            var b = a();
            b.uniqueId = c;
            return b
        }, b == null ? [a] : w(b));
        return s(function () {
            return (o || (o = d("ReQLGlobalQueryContext"))).runFromContextThatHandlesThrownPromise(function () {
                return e(f)
            })
        }, [f, e])
    }

    function f(a, b) { // useArrayWithoutSubscribing
         return B(a, b, arguments[2], x)
    }

    function C(a, b) { //useFirstWithoutSubscribing
        return B(a, b, arguments[2], y)
    }

    function D(a, b) { // useFirstExnWithoutSubscribing
        return B(a, b, arguments[2], z)
    }
    var E = new Map();

    function F(a, b) {
        var c = E.get(a);
        if (c == null) {
            var d = new Map();
            c = {
                handlers: d,
                unsubscribe: a.subscribeToCommit(function () {
                    q(function () {
                        return d.forEach(function (a) {
                            return a()
                        })
                    })
                })
            };
            E.set(a, c)
        }
        var e = {};
        c.handlers.set(e, b);
        var f = c;
        return function () {
            f.handlers["delete"](e), f.handlers.size === 0 && (f.unsubscribe(), E["delete"](a))
        }
    }
    g.toArray = x;
    g.first = y;
    g.firstExn = z;
    g.useArray = a;
    g.useFirst = A;
    g.useFirstExn = e;
    g.useArrayWithoutSubscribing = f;
    g.useFirstWithoutSubscribing = C;
    g.useFirstExnWithoutSubscribing = D
}), 98);



import FBLogger from "FBLogger";
import I64 from "I64";
import Promise from "Promise";
import PromiseAnnotate from "PromiseAnnotate";
import PromiseOrValue from "PromiseOrValue";
import ReQL from "ReQL";
import ReQLGlobalQueryContext from "ReQLGlobalQueryContext";
import ReQLSuspenseSupportedContextTracking from "ReQLSuspenseSupportedContextTracking";
import SortedAsyncIterable from "SortedAsyncIterable";
import applyChangesToBPlusTree from "applyChangesToBPlusTree";
import createBPlusTreeFromSorted from "createBPlusTreeFromSorted";
import isPromise from "isPromise";
import promiseDone from "promiseDone";
import React, { startTransition, useEffect, useMemo, useState } from "react";
import shallowEqualI64 from "shallowEqualI64";
import useReStore from "useReStore";

const isWithinSupportedContext = () => {
  return (
    ReQLGlobalQueryContext.globalQueryContext.withinSupportedContext ||
    ReQLSuspenseSupportedContextTracking.isWithinReactRenderingContext()
  );
};
function handlePromiseOrValue(value: any, displayName?: string, shouldThrow: boolean = false): any {
  if (shouldThrow === true && !isWithinSupportedContext()) {
    FBLogger('messenger_web', 'reqlsuspense_unsupported_use')
      .blameToPreviousFile()
      .mustfix(
        'Detected use of ReQLSuspense method in unsupported context.\ntoArray/first/firstExn can only be used inside the body of a projection function passed to ReQL map operator.\nFor React rendering contexts, please use appropriate hook (useArray/useFirst/useFirstExn) variants instead.'
      );
  }
  if (isPromise(value)) {
    if (displayName != null) {
      PromiseAnnotate.setDisplayName(value, displayName);
    } else {
      throw value;
    }
  }
  return value;
 }
 
 function flattenArray(array: any[]): any[] {
  const flattened: any[] = [];
  for (const item of array) {
    if (Array.isArray(item) && item.length === 2 && Number.isInteger(item[0]) && Number.isInteger(item[1])) {
      flattened.push(item[0], item[1]);
    } else {
      flattened.push(item, undefined);
    }
  }
  return flattened;
 }

function toArray(query: any, displayName?: string): any[] {
  return handlePromiseOrValue(SortedAsyncIterable.toArray(query), displayName, true).map(([_, value]) => value);
}



function first(query: any, displayName?: string): any {
  return toArray(ReQL.prototype.take.call(query, 1), displayName)[0];
}
 
function firstExn(query: any, displayName?: string): any {
  const result = first(query, displayName);
  if (result == null) {
    throw FBLogger('messenger_web').mustfixThrow('expected result');
  }
  return result;
}

function useArray<T>(factory:() => any, dependencies?: any[], uniqueId?: string): T[] {
  const memoizedQuery = useMemo(() => {
    const query = factory();
    query.uniqueId = uniqueId;
    return query;
  }, dependencies == null ? [factory] : flattenArray(dependencies));

  const arrayResult = useMemo(
    () => handlePromiseOrValue(SortedAsyncIterable.toArray(memoizedQuery)).map(([_, value]) => value),
    [memoizedQuery]
  );

  const [state, setState] = useState([arrayResult, memoizedQuery]);
  const reStore = useReStore();

  useEffect(() => {
    let currentTree: any | undefined;
    const changes: [number, any][] = [];
    const subscription = memoizedQuery.subscribe((index, change) => {
      changes.push([index, change]);
    });

    function applyChanges() {
      if (changes.length && currentTree != null) {
        const tree = currentTree;
        if (applyChangesToBPlusTree(tree, changes)) {
          setState([Array.from(tree.entries(), ([_, value]) => value), memoizedQuery]);
        }
      }
    }

    const unsubscribeCommit = reStore.subscribeToCommit(applyChanges);

    promiseDone(
      Promise.resolve(
        PromiseOrValue.map(SortedAsyncIterable.toArray(memoizedQuery), (items) => {
          currentTree = createBPlusTreeFromSorted(items, memoizedQuery.direction);
          const tree = currentTree;
          applyChangesToBPlusTree(tree, changes);
          startTransition(() => {
            setState((prevState) =>
              shallowEqualI64(prevState[0], Array.from(tree.entries(), (entry: any) => entry[1])) && prevState[1] === memoizedQuery
                ? prevState
                : [Array.from(tree.entries(), (entry: any) => entry[1]), memoizedQuery]
            );
          });
        })
      )
    );

    return () => {
      unsubscribeCommit();
      subscription();
    };
  }, [memoizedQuery, reStore]);

  return memoizedQuery === state[1] ? state[0] : arrayResult;
}

function useFirst<T>(factory: () => any, dependencies?: any[], uniqueId?: string): T | undefined {
  const memoizedQuery = useMemo(() => {
    const query = factory().take(1);
    query.uniqueId = uniqueId;
    return query;
  }, dependencies == null ? [factory] : flattenArray(dependencies));

  const firstResult = useMemo(
    () => {
      const { value } = handlePromiseOrValue(memoizedQuery.iterator(SortedAsyncIterable.getOrCreateContext(memoizedQuery)).next(), memoizedQuery.uniqueId);
      return value?.[1];
    },
    [memoizedQuery, uniqueId]
  );

  const [state, setState] = useState([firstResult, memoizedQuery]);
  const reStore = useReStore();

  useEffect(() => {
    let currentValue: any | undefined;
    let hasChanged = false;
    const subscription = memoizedQuery.subscribe((_, change) => {
      switch (change.operation) {
        case "delete":
          currentValue = undefined;
          break;
        case "put":
          if (currentValue === change.value) return;
          const oldValue = I64.cast(currentValue);
          if (oldValue != null) {
            const newValue = I64.cast(change.value);
            if (newValue != null && I64.equal(oldValue, newValue)) return;
          }
        case "add":
          currentValue = change.value;
          break;
      }
      hasChanged = true;
    });

    const unsubscribeCommit = subscribeToCommit(reStore, () => {
      if (hasChanged) {
        hasChanged = false;
        setState([currentValue, memoizedQuery]);
      }
    });

    promiseDone(
      Promise.resolve(
        PromiseOrValue.map(memoizedQuery.iterator(SortedAsyncIterable.getOrCreateContext(memoizedQuery)).next(), (result) => {
          startTransition(() => {
            setState((prevState) =>
              prevState[0] === result.value?.[1] && prevState[1] === memoizedQuery ? prevState : [result.value?.[1], memoizedQuery]
            );
          });
          currentValue = result.value?.[1];
        })
      )
    );

    return () => {
      unsubscribeCommit();
      subscription();
    };
  }, [memoizedQuery, reStore]);

  return memoizedQuery === state[1] ? state[0] : firstResult;
}

function useFirstExn<T>(factory: () => AsyncIterable<T>, dependencies?: any[], uniqueId?: string): any {
  const firstResult = useFirst(factory, dependencies, uniqueId);
  if (firstResult === undefined) {
    throw FBLogger("messenger_web").mustfixThrow("expected result");
  }
  return firstResult;
}

function useQueryWithSubscription(getQuery: () => any, dependencies?: any[], uniqueId?: string, projectionFn?: (query: any) => any): any {
  const memoizedQuery = useMemo(() => {
  const query = getQuery();
  query.uniqueId = uniqueId;
  return query;
  }, dependencies == null ? [getQuery] : flattenArray(dependencies));
  
  return useMemo(() => {
  return ReQLGlobalQueryContext.runFromContextThatHandlesThrownPromise(() => projectionFn && projectionFn(memoizedQuery));
  }, [memoizedQuery, projectionFn]);
}

function useArrayWithoutSubscribing<T>(factory: () => any, dependencies?: any[]): T | undefined {
  return useQueryWithSubscription(factory, dependencies, arguments[2], toArray);
}

function useFirstWithoutSubscribing<T>(factory: () => any, dependencies?: any[]): T {
  return useQueryWithSubscription(factory, dependencies, arguments[2], first);
}

function useFirstExnWithoutSubscribing<T>(factory: () => any, dependencies?: any[]): T {
  return useQueryWithSubscription(factory, dependencies, arguments[2], firstExn);
}

const commitHandlerMap = new Map<ReturnType<typeof useReStore>, { handlers: Map<{}, () => void>; unsubscribe: () => void }>();

function subscribeToCommit(reStore: ReturnType<typeof useReStore>, handler: () => void): () => void {
  let handlerInfo = commitHandlerMap.get(reStore);
  if (!handlerInfo) {
    const handlers = new Map<{}, () => void>();
    handlerInfo = {
      handlers,
      unsubscribe: reStore.subscribeToCommit(() => {
        startTransition(() => {
          handlers.forEach((h) => h());
        });
      }),
    };
    commitHandlerMap.set(reStore, handlerInfo);
  }

  const key = {};
  handlerInfo.handlers.set(key, handler);

  return () => {
    handlerInfo!.handlers.delete(key);
    if (handlerInfo!.handlers.size === 0) {
      handlerInfo!.unsubscribe();
      commitHandlerMap.delete(reStore);
    }
  };
}

export {
  toArray,
  useArray,
  useFirst,
  useFirstExn,
  useArrayWithoutSubscribing,
  useFirstWithoutSubscribing,
  useFirstExnWithoutSubscribing,
};