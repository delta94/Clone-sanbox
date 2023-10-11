
// V0mm: (t,e,n)=>{
//   "use strict";
//   n.d(e, {
//       To: ()=>h,
//       fH: ()=>l
//   });
//   var r = n("React")
//     , o = n.n(r)
//     , s = n("doura")
//     , i = n("useSyncExternalStore")
//     , a = n("ReactDOM");
//   const c = (t,e)=>(n,o,s,a)=>{
//       const c = (0,
//       r.useRef)(s)
//         , {modelInstance: u, subscribe: l} = function(t, e, n, o) {
//           const {modelInstance: s, subscribe: i} = (0,
//           r.useMemo)((()=>{
//               const r = n.getModel(t, e);
//               return {
//                   modelInstance: r,
//                   subscribe: t=>o.addSubscribe(r, t)
//               }
//           }
//           ), [t, n]);
//           return {
//               modelInstance: s,
//               subscribe: i
//           }
//       }(n, o, t, e);
//       return c.current ? function(t, e, n, o) {
//           const s = (0,
//           r.useRef)(void 0)
//             , a = (0,
//           r.useMemo)((()=>{
//               const e = s.current;
//               return e && e.destory(),
//               s.current = t.$createView(n)
//           }
//           ), [t, ...o || [n]])
//             , c = (0,
//           i.useSyncExternalStore)(e, a, a);
//           return (0,
//           r.useDebugValue)(c),
//           c
//       }(u, l, s, a) : function(t, e) {
//           const n = (0,
//           r.useMemo)((()=>()=>t.$getApi()), [t])
//             , o = (0,
//           i.useSyncExternalStore)(e, n, n);
//           return (0,
//           r.useDebugValue)(o),
//           o
//       }(u, l)
//   }
//     , u = ()=>{
//       const t = new WeakMap
//         , e = new WeakMap
//         , n = function(n, r) {
//           const o = t.get(n);
//           if (o && (o.delete(r),
//           0 === o.size && e.has(n))) {
//               t.delete(n);
//               const r = e.get(n);
//               r && (r(),
//               e.delete(n))
//           }
//       }
//         , r = function(e) {
//           const n = Array.from(t.get(e) || []);
//           (0,
//           a.unstable_batchedUpdates)((()=>{
//               let t = n.pop();
//               for (; t; )
//                   t(),
//                   t = n.pop()
//           }
//           ))
//       };
//       return {
//           addSubscribe: function(o, s) {
//               let i = t.get(o);
//               if (i)
//                   i.add(s);
//               else {
//                   i = new Set,
//                   i.add(s);
//                   const n = o.$subscribe((function() {
//                       r(o)
//                   }
//                   ));
//                   t.set(o, i),
//                   e.set(o, n)
//               }
//               return function() {
//                   return n(o, s)
//               }
//           },
//           triggerSubscribe: r
//       }
//   }
//   ;
//   const l = function(t) {
//       const e = (0,
//       r.createContext)(null);
//       const n = ()=>(0,
//       r.useContext)(e);
//       return {
//           Provider: function(n) {
//               const {children: i, store: a} = n
//                 , c = (0,
//               r.useMemo)((function() {
//                   let e;
//                   e = a || (0,
//                   s.defineModel)(t);
//                   return {
//                       store: e,
//                       batchManager: u()
//                   }
//               }
//               ), [a])
//                 , [l,h] = (0,
//               r.useState)(c);
//               return (0,
//               r.useEffect)((function() {
//                   h(c)
//               }
//               ), [a]),
//               o().createElement(e.Provider, {
//                   value: l
//               }, i)
//           },
//           useSharedModel: (t,e,o,s)=>{
//               const {store: i, batchManager: a} = n();
//               return (0,
//               r.useMemo)((()=>c(i, a)), [i, a])(t, e, o, s)
//           }
//           ,
//           useStaticModel: (t,e)=>{
//               const {store: o} = n();
//               return (0,
//               r.useMemo)((()=>(t=>(e,n)=>{
//                   const o = (0,
//                   r.useMemo)((()=>t.getModel(e, n)), [e, t]);
//                   return (0,
//                   r.useMemo)((()=>o), [o])
//               }
//               )(o)), [o])(t, e)
//           }
//       }
//   }
//     , {Provider: h, useSharedModel: f, useStaticModel: p} = l({
//       plugins: []
//   })
// }
import React, { useRef, useMemo, useContext, useState, useEffect, createContext } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useSyncExternalStore } from 'useSyncExternalStore';
import doura from 'doura';

type ModelInstance = {
  $createView: (args: any) => any;
  $getApi: () => any;
  $subscribe: (callback: () => void) => any;
};

type Store = {
  getModel: () => ModelInstance;
};

type BatchManager = {
  addSubscribe: (modelInstance: ModelInstance, callback: () => void) => () => void;
  triggerSubscribe: (modelInstance: ModelInstance) => void;
};

type ContextValue = {
  store: Store;
  batchManager: BatchManager;
};

const createUseModel = (store: Store, batchManager: BatchManager) => {
  const modelInstanceRef = useRef(null);
  const { modelInstance, subscribe } = useMemo(() => {
    const instance = store.getModel();
    return {
      modelInstance: instance,
      subscribe: (callback: () => void) => batchManager.addSubscribe(instance, callback)
    };
  }, [name, store]);

  if (modelInstanceRef.current) {
    const previousViewRef = useRef(undefined);
    const view = useMemo(() => {
      const prevView = previousViewRef.current;
      if (prevView) {
        prevView.destory();
      }
      return modelInstance.$createView(args);
    }, [modelInstance, ...argsOrDeps || [args]]);

    const state = useSyncExternalStore(subscribe, view, view);
    return state;
  } else {
    const apiGetter = useMemo(() => () => modelInstance.$getApi(), [modelInstance]);
    const state = useSyncExternalStore(subscribe, apiGetter, apiGetter);
    return state;
  }
};

const createBatchManager = (): BatchManager => {
  const instanceCallbackMap = new WeakMap<ModelInstance, Set<() => void>>();
  const unsubscribeMap = new WeakMap<ModelInstance, () => void>();

  const removeSubscription = (instance: ModelInstance, callback: () => void) => {
    const callbacks = instanceCallbackMap.get(instance);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        instanceCallbackMap.delete(instance);
        const unsubscribe = unsubscribeMap.get(instance);
        if (unsubscribe) {
          unsubscribe();
          unsubscribeMap.delete(instance);
        }
      }
    }
  };

  const triggerSubscribers = (instance: ModelInstance) => {
    const callbacks = Array.from(instanceCallbackMap.get(instance) || []);
    unstable_batchedUpdates(() => {
      let callback = callbacks.pop();
      while (callback) {
        callback();
        callback = callbacks.pop();
      }
    });
  };

  return {
    addSubscribe: (modelInstance: ModelInstance, callback: () => void) => {
      let callbacks = instanceCallbackMap.get(modelInstance);
      if (!callbacks) {
        callbacks = new Set();
        instanceCallbackMap.set(modelInstance, callbacks);
        const unsubscribe = modelInstance.$subscribe(() => triggerSubscribers(modelInstance));
        unsubscribeMap.set(modelInstance, unsubscribe);
      }
      callbacks.add(callback);

      return () => removeSubscription(modelInstance, callback);
    },
    triggerSubscribe: triggerSubscribers
  };
};

export const createSharedModel = (config: { plugins: any[] }) => {
  const context = createContext<ContextValue | null>(null);

  const useSharedModelContext = (): ContextValue => {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error('useSharedModelContext must be used within a Provider');
    }
    return ctx;
  };

  const Provider: React.FC<{ children: React.ReactNode, store?: Store }> = ({ children, store }) => {
    const value = useMemo(() => {
      return {
        store: store || doura.defineModel(config),
        batchManager: createBatchManager()
      };
    }, [store]);

    const [state, setState] = useState(value);

    useEffect(() => {
      setState(value);
    }, [store]);

    return <context.Provider value={state}>{children}</context.Provider>;
  };

  const useSharedModel = (name: string, args: any, argsOrDeps?: any[], callback?: any) => {
    const { store, batchManager } = useSharedModelContext();
    return useMemo(() => createUseModel(store, batchManager), [store, batchManager])(name, args, argsOrDeps, callback);
  };

  const useStaticModel = (name: string, instance: any) => {
    const { store } = useSharedModelContext();
    const getModel = useMemo(() => (name: string, instance: any) => store.getModel(name, instance), [store]);
    const model = useMemo(() => getModel(name, instance), [getModel, name, instance]);
    return model;
  };

  return {
    Provider,
    useSharedModel,
    useStaticModel
  };
};
