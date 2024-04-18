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

    function x(a) {
        var b = arguments[1];
        return v(d("SortedAsyncIterable").toArray(a), b, !0).map(function (a) {
            a[0];
            a = a[1];
            return a
        })
    }

    function y(a) {
        var b = arguments[1];
        return x(d("ReQL").prototype.take.call(a, 1), b)[0]
    }

    function z(a) {
        var b = arguments[1],
            d = y(a, b);
        if (d == null) throw c("FBLogger")("messenger_web").mustfixThrow("expected result");
        return d
    }

    function a(a, e) {
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

    function A(a, e) {
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

    function e(a, b) {
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

    function f(a, b) {
        return B(a, b, arguments[2], x)
    }

    function C(a, b) {
        return B(a, b, arguments[2], y)
    }

    function D(a, b) {
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

function useWithinSupportedContext(): boolean {
    const { globalQueryContext } = ReQLGlobalQueryContext;
    const isWithinSupportedContext = globalQueryContext.withinSupportedContext === true;
    return isWithinSupportedContext ? true : ReQLSuspenseSupportedContextTracking.isWithinReactRenderingContext();
}

function wrapPromise<T>(
    promise: PromiseOrValue<T>,
    displayName?: string,
    throwInUnsupportedContext: boolean = true
  ): T {
    if (isPromise(promise)) {
      if (displayName != null) {
        PromiseAnnotate.setDisplayName(promise, displayName);
      } else {
        throw promise;
      }
    }
    if (throwInUnsupportedContext && !useWithinSupportedContext()) {
      FBLogger("messenger_web", "reqlsuspense_unsupported_use")
        .blameToPreviousFile()
        .mustfix(
          "Detected use of ReQLSuspense method in unsupported context.\ntoArray/first/firstExn can only be used inside the body of a projection function passed to ReQL map operator.\nFor React rendering contexts, please use appropriate hook (useArray/useFirst/useFirstExn) variants instead."
        );
    }
    return promise;
}

function promiseOrThrow<T>(promise: Promise<T>, displayName?: string) {
  if (isPromise(promise)) {
    if (displayName != null) {
      throw PromiseAnnotate.setDisplayName(promise, displayName);
    } else {
      throw promise;
    }
  }
  return promise;
}

function toArray<T>(iterable: [T]): T[] {
  const result: T[] = [];
  for (const item of iterable) {
    if (Array.isArray(item) && item.length === 2 && Number.isInteger(item[0]) && Number.isInteger(item[1])) {
      result.push(item[0], item[1]);
    } else {
      result.push(item, undefined);
    }
      }
  return result;
}

function useArray<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T[] {
  const queryIterable = useMemo(
    () => {
      const iterable = factory();
      iterable.uniqueId = dependencies?.length ?? 0;
      return iterable;
    },
    dependencies ?? [factory]
  );

  const arrayResult = useMemo(
    () => promiseOrThrow(SortedAsyncIterable.toArray(queryIterable), queryIterable.uniqueId).map((item) => item[1]),
    [queryIterable]
  );

  const [state, setState] = useState([arrayResult, queryIterable]);
  const reStore = useReStore();

  useEffect(() => {
    let currentTree: any | undefined;
    const changes: [number, any][] = [];
    const subscription = queryIterable.subscribe((index, change) => {
      changes.push([index, change]);
    });

    function applyChanges() {
      if (changes.length && currentTree != null) {
        const tree = currentTree;
        if (applyChangesToBPlusTree(tree, changes)) {
          setState([Array.from(tree.entries(), (entry) => entry[1]), queryIterable]);
        }
      }
    }

    const unsubscribeCommit = reStore.subscribeToCommit(applyChanges);

    promiseDone(
      Promise.resolve(
        PromiseOrValue.map(SortedAsyncIterable.toArray(queryIterable), (items) => {
          currentTree = createBPlusTreeFromSorted(items, queryIterable.direction);
          const tree = currentTree;
          applyChangesToBPlusTree(tree, changes);
          startTransition(() => {
            setState((prevState) =>
              shallowEqualI64(prevState[0], Array.from(tree.entries(), (entry) => entry[1])) && prevState[1] === queryIterable
                ? prevState
                : [Array.from(tree.entries(), (entry) => entry[1]), queryIterable]
            );
          });
        })
      )
    );

    return () => {
      unsubscribeCommit();
      subscription();
    };
  }, [queryIterable, reStore]);

  return queryIterable === state[1] ? state[0] : arrayResult;
}

function useFirst<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T | undefined {
  const queryIterable = useMemo(
    () => {
      const iterable = factory().take(1);
      iterable.uniqueId = dependencies?.length ?? 0;
      return iterable;
    },
    dependencies ?? [factory]
  );

  const firstResult = useMemo(
    () => {
      const { value } = promiseOrThrow(queryIterable.iterator(SortedAsyncIterable.getOrCreateContext(queryIterable)).next(), queryIterable.uniqueId);
      return value?.[1];
    },
    [queryIterable, queryIterable.uniqueId]
  );

  const [state, setState] = useState([firstResult, queryIterable]);
  const reStore = useReStore();

  useEffect(() => {
    let currentValue: any | undefined;
    let hasChanged = false;
    const subscription = queryIterable.subscribe((_, change) => {
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

    const unsubscribeCommit = F(reStore, () => {
      if (hasChanged) {
        hasChanged = false;
        setState([currentValue, queryIterable]);
      }
    });

    promiseDone(
      Promise.resolve(
        PromiseOrValue.map(queryIterable.iterator(SortedAsyncIterable.getOrCreateContext(queryIterable)).next(), (result) => {
          startTransition(() => {
            setState((prevState) =>
              prevState[0] === result.value?.[1] && prevState[1] === queryIterable ? prevState : [result.value?.[1], queryIterable]
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
  }, [queryIterable, reStore]);

  return queryIterable === state[1] ? state[0] : firstResult;
}

function useFirstExn<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T {
  const firstResult = useFirst(factory, dependencies);
  if (firstResult === undefined) {
    throw FBLogger("messenger_web").mustfixThrow("expected result");
  }
  return firstResult;
}

function useArrayWithoutSubscribing<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T[] {
  const queryIterable = useMemo(
    () => {
      const iterable = factory();
      iterable.uniqueId = dependencies?.length ?? 0;
      return iterable;
    },
    dependencies ?? [factory]
  );

  return useMemo(() => {
    return (ReQLGlobalQueryContext.runFromContextThatHandlesThrownPromise(() => toArray(queryIterable)));
  }, [queryIterable]);
}

function useFirstWithoutSubscribing<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T | undefined {
  return useArrayWithoutSubscribing(factory, dependencies)[0];
}

function useFirstExnWithoutSubscribing<T>(factory: () => AsyncIterable<T>, dependencies?: any[]): T {
  const firstResult = useFirstWithoutSubscribing(factory, dependencies);
  if (firstResult === undefined) {
    throw FBLogger("messenger_web").mustfixThrow("expected result");
  }
  return firstResult;
}

const commitHandlerMap = new Map<ReturnType<typeof useReStore>, { handlers: Map<{}, () => void>; unsubscribe: () => void }>();

function F(reStore: ReturnType<typeof useReStore>, handler: () => void): () => void {
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