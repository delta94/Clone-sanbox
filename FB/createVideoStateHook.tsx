__d("createVideoStateHook", ["VideoPlayerHooks", "emptyFunction", "gkx", "react", "unrecoverableViolation", "useStable"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.useEffect,
        k = b.useMemo,
        l = b.useRef,
        m = b.useState,
        n = b.useSyncExternalStore,
        o = new Set();
    e = function (a) {
        var b = new Map();
        o.add(b);

        function e() {
            var a = (i || (i = d("VideoPlayerHooks"))).useInstanceKey();
            b.has(a) || b.set(a, {
                consumers: new Set(),
                key: a,
                lastValue: void 0
            });
            var e = b.get(a);
            if (e == null) throw c("unrecoverableViolation")('createVideoStateHook useInstance missing instance by key "' + a + '"', "comet_video_player");
            return e
        }

        function f(a, b) {
            a.consumers.add(b)
        }

        function g(a, b) {
            a.consumers["delete"](b)
        }

        function h(a, b, c) {
            a.lastValue = b, a.consumers.forEach(function (a) {
                c !== a && a(b)
            })
        }

        function k(a) {
            var b = e(),
                c = l(b);
            c.current = b;
            a = b.lastValue != null ? b.lastValue : a;
            var d = l(a);
            d.current = a;
            a = m(a);
            var i = a[0],
                k = a[1];
            j(function () {
                k(d.current);
                f(b, k);
                return function () {
                    g(b, k)
                }
            }, [b]);
            j(function () {
                h(c.current, i, k)
            }, [i]);
            return [i, k]
        }

        function a(a) {
            a = k(a);
            a[0];
            a = a[1];
            return a
        }

        function n(a) {
            a = k(a);
            var b = a[0];
            a[1];
            return b
        }
        return {
            setterHook: a,
            stateHook: k,
            valueHook: n
        }
    };
    f = function (a) {
        var b = new Map();
        o.add(b);
        var e = c("emptyFunction");

        function f(a, c) {
            var d = b.get(a);
            d || (d = {
                consumers: new Set(),
                key: a,
                lastValue: c
            }, b.set(a, d));
            return d
        }

        function g(a, c) {
            return {
                getSnapshot: function () {
                    var d = b.get(a);
                    return d == null ? c : d.lastValue
                },
                setValue: function (b) {
                    var d = f(a, c),
                        e;
                    typeof b === "function" ? e = b(d.lastValue) : e = b;
                    d.lastValue = e;
                    d.consumers.forEach(function (a) {
                        a(e)
                    })
                },
                subscribe: function (b) {
                    var d = f(a, c);
                    d.consumers.add(b);
                    return function () {
                        d.consumers["delete"](b)
                    }
                }
            }
        }

        function a(a) {
            var b = c("useStable")(function () {
                    return a
                }),
                e = (i || (i = d("VideoPlayerHooks"))).useInstanceKey(),
                f = k(function () {
                    return g(e, b)
                }, [b, e]),
                h = f.getSnapshot,
                j = f.setValue;
            f = f.subscribe;
            f = n(f, h);
            return [f, j]
        }

        function h(a) {
            var b = c("useStable")(function () {
                    return a
                }),
                e = (i || (i = d("VideoPlayerHooks"))).useInstanceKey(),
                f = k(function () {
                    return g(e, b)
                }, [b, e]);
            f = f.setValue;
            return f
        }

        function j(a) {
            var b = c("useStable")(function () {
                    return a
                }),
                e = (i || (i = d("VideoPlayerHooks"))).useInstanceKey(),
                f = k(function () {
                    return g(e, b)
                }, [b, e]),
                h = f.getSnapshot;
            f = f.subscribe;
            return n(f, h)
        }
        return {
            setterHook: h,
            stateHook: a,
            valueHook: j
        }
    };

    function a(a) {
        j(function () {
            return function () {
                o.forEach(function (b) {
                    b["delete"](a)
                })
            }
        }, [a])
    }
    b = c("gkx")("24343") ? f : e;
    a = a;
    g.createVideoStateHookImpl_UnsafeForConcurrentRendering = e;
    g.createVideoStateHookImpl_SafeForConcurrentRendering = f;
    g.createVideoStateHook = b;
    g.useCleanupVideoStateHooks_INTERNAL = a
}), 98);

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { useInstanceKey } from 'VideoPlayerHooks';
import { emptyFunction } from 'emptyFunction';
import { gkx } from 'gkx';
import { unrecoverableViolation } from 'unrecoverableViolation';
import { useStable } from 'useStable';

const instanceMaps: Set<Map<any, InstanceData<any>>> = new Set();

interface InstanceData<T> {
  consumers: Set<(value: T) => void>;
  key: any;
  lastValue: T | undefined;
}

const createVideoStateHookUnsafe = <T extends unknown>(initialValue: T) => {
  const instanceMap: Map<any, InstanceData<T>> = new Map();
  instanceMaps.add(instanceMap);

  function useInstance(): InstanceData<T> {
    const instanceKey = useInstanceKey();
    if (!instanceMap.has(instanceKey)) {
      instanceMap.set(instanceKey, {
        consumers: new Set(),
        key: instanceKey,
        lastValue: undefined,
      });
    }
    const instance = instanceMap.get(instanceKey);
    if (instance == null)
      throw unrecoverableViolation(
        'createVideoStateHook useInstance missing instance by key "' + instanceKey + '"',
        'comet_video_player',
      );
    return instance;
  }

  function addConsumer(instance: InstanceData<T>, consumer: (value: T) => void): void {
    instance.consumers.add(consumer);
  }

  function removeConsumer(instance: InstanceData<T>, consumer: (value: T) => void): void {
    instance.consumers.delete(consumer);
  }

  function updateValue(instance: InstanceData<T>, value: T, currentConsumer: (value: T) => void): void {
    instance.lastValue = value;
    instance.consumers.forEach((consumer) => {
      if (currentConsumer !== consumer) {
        consumer(value);
      }
    });
  }

  function stateHook(initialValue: T): [T, (value: T) => void] {
    const instance = useInstance();
    const instanceRef = useRef(instance);
    instanceRef.current = instance;

    const initialValueRef = useRef(instance.lastValue != null ? instance.lastValue : initialValue);
    initialValueRef.current = instance.lastValue != null ? instance.lastValue : initialValue;

    const [value, setValue] = useState(initialValueRef.current);

    useEffect(() => {
      setValue(initialValueRef.current);
      addConsumer(instance, setValue);
      return () => {
        removeConsumer(instance, setValue);
      };
    }, [instance]);

    useEffect(() => {
      updateValue(instanceRef.current, value, setValue);
    }, [value]);

    return [value, setValue];
  }

  function setterHook(initialValue: T): (value: T) => void {
    const [, setValue] = stateHook(initialValue);
    return setValue;
  }

  function valueHook(initialValue: T): T {
    const [value] = stateHook(initialValue);
    return value;
  }

  return {
    setterHook,
    stateHook,
    valueHook,
  };
};

const createVideoStateHookSafe = <T extends unknown>(initialValue: T) => {
  const instanceMap: Map<any, InstanceData<T>> = new Map();
  instanceMaps.add(instanceMap);

  function createStore(key: any, initialValue: T) {
    let data = instanceMap.get(key);
    if (!data) {
      data = {
        consumers: new Set(),
        key,
        lastValue: initialValue,
      };
      instanceMap.set(key, data);
    }
    return data;
  }

  function createSubscription(key: any, initialValue: T) {
    return {
      getSnapshot: () => {
        const data = instanceMap.get(key);
        return data == null ? initialValue : data.lastValue;
      },
      setValue: (value: T | ((prevValue: T) => T)) => {
        const data = createStore(key, initialValue);
        let newValue: T;
        if (typeof value === 'function') {
            newValue = (value as (prevValue: T | undefined) => T)(data.lastValue);
        } else {
          newValue = value;
        }        data.lastValue = newValue;
        data.consumers.forEach((consumer) => {
          consumer(newValue);
        });
      },
      subscribe: (consumer: (value: T) => void) => {
        const data = createStore(key, initialValue);
        data.consumers.add(consumer);
        return () => {
          data.consumers.delete(consumer);
        };
      },
    };
  }

  function stateHook(initialValue: T): [T, (value: T | ((prevValue: T) => T)) => void] {
    const stableInitialValue = useStable(() => initialValue);
    const instanceKey = useInstanceKey();
    const subscription = useMemo(() => createSubscription(instanceKey, stableInitialValue), [
      stableInitialValue,
      instanceKey,
    ]);
    const { getSnapshot, setValue, subscribe } = subscription;
    const value = useSyncExternalStore(subscribe, getSnapshot);
    return [value, setValue];
  }

  function setterHook(initialValue: T): (value: T | ((prevValue: T) => T)) => void {
    const stableInitialValue = useStable(() => initialValue);
    const instanceKey = useInstanceKey();
    const { setValue } = useMemo(() => createSubscription(instanceKey, stableInitialValue), [
      stableInitialValue,
      instanceKey,
    ]);
    return setValue;
  }

  function valueHook(initialValue: T): T {
    const stableInitialValue = useStable(() => initialValue);
    const instanceKey = useInstanceKey();
    const { getSnapshot, subscribe } = useMemo(() => createSubscription(instanceKey, stableInitialValue), [
      stableInitialValue,
      instanceKey,
    ]);
    return useSyncExternalStore(subscribe, getSnapshot);
  }

  return {
    setterHook,
    stateHook,
    valueHook,
  };
};

function useCleanupVideoStateHooks(key: any): void {
  useEffect(() => {
    return () => {
      instanceMaps.forEach((instanceMap) => {
        instanceMap.delete(key);
      });
    };
  }, [key]);
}

const createVideoStateHook = gkx('24343')
  ? createVideoStateHookSafe
  : createVideoStateHookUnsafe;

export {
  createVideoStateHookUnsafe,
  createVideoStateHookSafe,
  createVideoStateHook,
  useCleanupVideoStateHooks,
};