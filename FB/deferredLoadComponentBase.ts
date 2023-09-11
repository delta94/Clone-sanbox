// __d("deferredLoadComponentBase", ["ExecutionEnvironment", "Promise", "PromiseAnnotate", "react", "suspendOrThrowIfUsedInSSR"], (function (a, b, c, d, e, f, g) {
//     var h = c("react"),
//         i = {},
//         j = {},
//         k = new Map();

//     function l(a, b) {
//         k.set(a, b)
//     }

//     function m(a) {
//         return k.get(a)
//     }

//     function a(a, e) {
//         var g = m(a);
//         if (g) return g;
//         var k, n = a.getModuleId();

//         function o() {
//             var c = j[n];
//             c || (c = j[n] = new(b("Promise"))(function (b) {
//                 a.loadImmediately(function (a) {
//                     delete j[n], k = e(a), b()
//                 })
//             }));
//             return c
//         }

//         function p() {
//             var c = i[n];
//             c || (c = i[n] = new(b("Promise"))(function (b) {
//                 a.onReady(function (a) {
//                     k = e(a), delete i[n], b()
//                 })
//             }));
//             return c
//         }

//         function q(b, f) {
//             var g = b.loadImmediately;
//             b = babelHelpers.objectWithoutPropertiesLoose(b, ["loadImmediately"]);
//             if (!k) {
//                 var i = a.getModuleIfRequireable();
//                 i != null && (k = e(i));
//                 if (!k) {
//                     !c("ExecutionEnvironment").isInBrowser && !a.isAvailableInSSR_DO_NOT_USE() && c("suspendOrThrowIfUsedInSSR")("Loading bootloaded and T3 components are disabled during SSR");
//                     i = g === !0 ? o() : p();
//                     d("PromiseAnnotate").setDisplayName(i, q.displayName);
//                     throw i
//                 }
//             }
//             return h.jsx(k, babelHelpers["extends"]({}, b, {
//                 ref: f
//             }))
//         }
//         q.displayName = q.name + " [from " + f.id + "]";
//         q.displayName = "deferredLoadComponent(" + a.getModuleId() + ")";
//         g = h.forwardRef(q);
//         l(a, g);
//         return g
//     }
//     g["default"] = a
// }), 98);






import React, { forwardRef } from 'react';
import { suspendOrThrowIfUsedInSSR } from 'suspendOrThrowIfUsedInSSR';
import { ExecutionEnvironment } from 'ExecutionEnvironment';
import { PromiseAnnotate } from 'PromiseAnnotate';
import { Promise } from 'Promise';

const moduleCache = {};
const readyPromises = {};
const moduleMap = new Map();

function setModule(module, component) {
  moduleMap.set(module, component);
}

function getModule(module) {
  return moduleMap.get(module);
}

function deferredLoadComponentBase(module, loader) {
  const cachedModule = getModule(module);
  if (cachedModule) return cachedModule;

  const moduleId = module.getModuleId();

  function loadImmediately() {
    const promise = readyPromises[moduleId];
    if (!promise) {
      readyPromises[moduleId] = new Promise((resolve) => {
        module.loadImmediately((module) => {
          delete readyPromises[moduleId];
          setModule(moduleId, loader(module));
          resolve();
        });
      });
    }
    return promise;
  }

  function onReady() {
    const promise = moduleCache[moduleId];
    if (!promise) {
      moduleCache[moduleId] = new Promise((resolve) => {
        module.onReady((module) => {
          setModule(moduleId, loader(module));
          delete moduleCache[moduleId];
          resolve();
        });
      });
    }
    return promise;
  }

  function loadComponent(props, ref) {
    const loadImmediatelyFlag = props.loadImmediately;
    const restProps = { ...props };
    delete restProps.loadImmediately;

    if (!cachedModule) {
      if (!ExecutionEnvironment.isInBrowser && !module.isAvailableInSSR_DO_NOT_USE()) {
        suspendOrThrowIfUsedInSSR("Loading bootloaded and T3 components are disabled during SSR");
      }

      const promise = loadImmediatelyFlag === true ? loadImmediately() : onReady();
      PromiseAnnotate.setDisplayName(promise, loadComponent.displayName);
      throw promise;
    }

    return <cachedModule {...restProps} ref={ref} />;
  }

  loadComponent.displayName = `deferredLoadComponent(${module.getModuleId()})`;

  return forwardRef(loadComponent);
}

export default deferredLoadComponentBase;
