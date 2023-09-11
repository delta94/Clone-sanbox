// __d("deferredLoadComponentBase", ["Promise", "PromiseAnnotate", "react"], (function (a, b, c, d, e, f, g) {
//   var h = c("react"),
//     i = {},
//     j = {},
//     k = new Map();

//   function l(a, b) {
//     k.set(a, b)
//   }

//   function m(a) {
//     return k.get(a)
//   }

//   function a(a, c) {
//     var e = m(a);
//     if (e) return e;
//     var g, k = a.getModuleId();

//     function n() {
//       var d = j[k];
//       d || (d = j[k] = new(b("Promise"))(function (b) {
//         a.loadImmediately(function (a) {
//           delete j[k], g = c(a), b()
//         })
//       }));
//       return d
//     }

//     function o() {
//       var d = i[k];
//       d || (d = i[k] = new(b("Promise"))(function (b) {
//         a.onReady(function (a) {
//           g = c(a), delete i[k], b()
//         })
//       }));
//       return d
//     }

//     function p(b, e) {
//       var f = b.loadImmediately;
//       b = babelHelpers.objectWithoutPropertiesLoose(b, ["loadImmediately"]);
//       if (!g) {
//         var i = a.getModuleIfRequireable();
//         i != null && (g = c(i));
//         if (!g) {
//           i = f === !0 ? n() : o();
//           d("PromiseAnnotate").setDisplayName(i, p.displayName);
//           throw i
//         }
//       }
//       return h.jsx(g, babelHelpers["extends"]({}, b, {
//         ref: e
//       }))
//     }
//     p.displayName = p.name + " [from " + f.id + "]";
//     p.displayName = "deferredLoadComponent(" + a.getModuleId() + ")";
//     e = h.forwardRef(p);
//     l(a, e);
//     return e
//   }
//   g["default"] = a
// }), 98);


import React from 'react';

const deferredLoadComponentBase = (function () {
  const modules = {};
  const modulePromises = {};
  const moduleComponents = new Map();

  function registerModule(module, component) {
    moduleComponents.set(module, component);
  }

  function getModuleComponent(module) {
    return moduleComponents.get(module);
  }

  function deferredLoadComponent(module, component) {
    const existingComponent = getModuleComponent(module);
    if (existingComponent) {
      return existingComponent;
    }

    let componentInstance;
    const moduleId = module.getModuleId();

    function loadImmediately() {
      let promise = modulePromises[moduleId];
      if (!promise) {
        promise = modulePromises[moduleId] = new Promise((resolve) => {
          module.loadImmediately((module) => {
            delete modulePromises[moduleId];
            componentInstance = component(module);
            resolve();
          });
        });
      }
      return promise;
    }

    function loadOnReady() {
      let promise = modules[moduleId];
      if (!promise) {
        promise = modules[moduleId] = new Promise((resolve) => {
          module.onReady((module) => {
            componentInstance = component(module);
            delete modules[moduleId];
            resolve();
          });
        });
      }
      return promise;
    }

    function renderComponent(props, ref) {
      const loadImmediatelyFlag = props.loadImmediately;
      const componentProps = { ...props };
      delete componentProps.loadImmediately;

      if (!componentInstance) {
        const moduleIfRequireable = module.getModuleIfRequireable();
        if (moduleIfRequireable != null) {
          componentInstance = component(moduleIfRequireable);
        }
        if (!componentInstance) {
          const promise = loadImmediatelyFlag ? loadImmediately() : loadOnReady();
          throw promise;
        }
      }

      return React.createElement(componentInstance, { ...componentProps, ref });
    }

    renderComponent.displayName = component.name + ' [from ' + module.id + ']';
    renderComponent.displayName = 'deferredLoadComponent(' + module.getModuleId() + ')';

    const WrappedComponent = React.forwardRef(renderComponent);
    registerModule(module, WrappedComponent);

    return WrappedComponent;
  }

  return deferredLoadComponent;
})();

export default deferredLoadComponentBase;