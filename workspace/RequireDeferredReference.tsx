__d("RequireDeferredReference", ["CallbackDependencyManager", "Promise", "RequireDeferredFactoryEvent", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i;
  a = 1;
  d = 2;
  e = 16;
  var j = a | d | e,
    k = null;

  function l() {
    k == null && (k = new(c("CallbackDependencyManager"))());
    return k
  }

  function m(a, b) {
    return a + ":" + b
  }
  var n = new Set();
  f = function () {
    function a(a) {
      this.$1 = a
    }
    var d = a.prototype;
    d.getModuleId = function () {
      var a = this.$1;
      return a
    };
    d.getModuleIdAsRef = function () {
      return this.$1
    };
    d.preload = function () {};
    d.getModuleIfRequired = function () {
      return c("ifRequired").call(null, this.$1, function (a) {
        return a
      })
    };
    d.getModuleIfRequireable = function () {
      return c("ifRequireable").call(null, this.$1, function (a) {
        return a
      })
    };
    d.isAvailableInSSR_DO_NOT_USE = function () {
      return !0
    };
    d.$2 = function (a) {
      var b = this,
        d = c("ifRequireable")("InteractionTracingMetrics", function (a) {
          return a.currentInteractionLogger().addRequireDeferred(b.getModuleId(), (i || (i = c("performanceNow")))())
        }),
        e = !1,
        f = function (b, f) {
          d == null ? void 0 : d((i || (i = c("performanceNow")))(), f), e || a(b)
        };
      c("ifRequireable").call(null, this.$1, function (a) {
        return f(a, !0)
      }, function () {
        c("requireWeak").call(null, b.$1, function (a) {
          return f(a, !1)
        })
      });
      return {
        remove: function () {
          e = !0
        }
      }
    };
    d.load = function () {
      var a = this;
      return new(h || (h = b("Promise")))(function (b) {
        return a.$2(b)
      })
    };
    d.__setRef = function (a) {
      return this
    };
    d.onReadyImmediately = function (a) {
      return this.$2(a)
    };
    d.onReady = function (a) {
      var d = !1,
        e = this.$2(function (e) {
          c("promiseDone")((h || (h = b("Promise"))).resolve().then(function () {
            d || a(e)
          }))
        });
      return {
        remove: function () {
          d = !0, e.remove()
        }
      }
    };
    d.loadImmediately = function (a) {
      return this.$2(a)
    };
    a.getRDModuleName_DO_NOT_USE = function (a) {
      return "rd:" + a
    };
    a.unblock = function (d, e) {
      var f = l(),
        g = function () {
          var g = d[h];
          n.has(g) || (n.add(g), f.registerCallback(function () {
            define(a.getRDModuleName_DO_NOT_USE(g), [g], function () {
              b.call(null, g)
            }, j)
          }, Array.from(c("RequireDeferredFactoryEvent").members(), function (a) {
            return m(g, a)
          })));
          f.satisfyPersistentDependency(m(g, e))
        };
      for (var h = 0; h < d.length; h++) g()
    };
    return a
  }();
  g["default"] = f
}), 98);


import CallbackDependencyManager from 'CallbackDependencyManager';
import Promise from 'Promise';
import { members as RequireDeferredFactoryEventMembers } from 'RequireDeferredFactoryEvent'; 
import ifRequireable from 'ifRequireable';
import ifRequired from 'ifRequired';
import performanceNow from 'performanceNow';
import promiseDone from 'promiseDone';
import requireWeak from 'requireWeak';

const PRIORITY = 1; 
const TIMEOUT = 2;
const READY_STATE = 16;
const DEPENDENCIES = PRIORITY | TIMEOUT | READY_STATE;

let dependencyManager: CallbackDependencyManager | null = null;

function getDependencyManager() {
  if (!dependencyManager) {
    dependencyManager = new CallbackDependencyManager();
  }
  return dependencyManager; 
}

function getCallbackKey(moduleId: string, event: string) {
  return `${moduleId}:${event}`;  
}

const loadedModules = new Set();

class RequireDeferredReference {

  moduleId: string;

  constructor(moduleId: string) {
    this.moduleId = moduleId;
  }

  getModuleId() {
    return this.moduleId; 
  }

  getModuleIdAsRef() {
    return this.moduleId;
  }
  
  preload() {}
  
  getModuleIfRequired() {
    return ifRequired(this.moduleId, module => module);
  }
  
  getModuleIfRequireable() {
    return ifRequireable(this.moduleId, module => module);
  }

  isAvailableInSSR_DO_NOT_USE() {
    return true;
  }

  loadModule(callback: (module: any) => void) {
    const manager = getDependencyManager();

    const startLogTime = ifRequireable('InteractionTracingMetrics', 
      metrics => metrics.currentInteractionLogger().addRequireDeferred(this.getModuleId(), performanceNow())
    );

    let removed = false;

    const invokeCallback = (module: any, success: boolean) => {
      startLogTime?.(performanceNow(), success);
      if (!removed) {
        callback(module);  
      }
    };

    ifRequireable(this.moduleId, 
      module => invokeCallback(module, true),
      () => requireWeak(this.moduleId, module => invokeCallback(module, false))
    );

    return {
      remove: () => {
        removed = true;
      }
    };
  }

  load() {
    return new Promise<any>(resolve => {
      this.loadModule(resolve); 
    });
  }

  __setRef(ref: any) {
    return this;
  }

  onReadyImmediately(callback: (module: any) => void) {
    return this.loadModule(callback);
  }

  onReady(callback: (module: any) => void) {
    let removed = false;
    const remover = this.loadModule(module => {
      promiseDone(Promise.resolve().then(() => {
        if (!removed) {
          callback(module);
        }  
      }));
    });

    return {
      remove: () => {
        removed = true;
        remover.remove();
      }
    };
  }

  loadImmediately(callback: (module: any) => void) {
    return this.loadModule(callback);
  }

  static getRDModuleName_DO_NOT_USE(moduleId: string) {
    return `rd:${moduleId}`;
  }
  static unblock(moduleIds: string[], event: string) {
    const manager = getDependencyManager();

    const registerModule = (moduleId: string) => {
      if (!loadedModules.has(moduleId)) {
        loadedModules.add(moduleId);

        manager.registerCallback(() => {
          define(
            RequireDeferredReference.getRDModuleName_DO_NOT_USE(moduleId), 
            [moduleId], 
            () => require(moduleId),
            DEPENDENCIES
          );
        }, 
        RequireDeferredFactoryEventMembers.map(member => getCallbackKey(moduleId, member))
        );
      }

      manager.satisfyPersistentDependency(getCallbackKey(moduleId, event));
    };

    for (let i = 0; i < moduleIds.length; i++) {
      registerModule(moduleIds[i]); 
    }
  }
}

