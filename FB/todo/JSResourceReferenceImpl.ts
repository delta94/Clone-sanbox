__d("JSResourceReferenceImpl", ["JSResourceEvents", "Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function(a, b, c, d, e, f, g) {
    var h, i = function(a) {
        return a
    }, j = [], k = null;
    function l(a) {
        k ? a(k) : j.push(a)
    }
    var m = "JSResource: unknown caller";
    a = function() {
        a.setBootloader = function(a) {
            k = a;
            for (a = 0; a < j.length; a++) {
                var b = j[a];
                b(k)
            }
            j = []
        }
        ;
        function a(a) {
            this.$1 = a
        }
        var e = a.prototype;
        e.getModuleId = function() {
            var a = this.$1;
            return a
        }
        ;
        e.getModuleIdAsRef = function() {
            return this.$1
        }
        ;
        e.load = function() {
            var a = this
              , c = this.$2;
            d("JSResourceEvents").notify(this.$1, c, "LOADED");
            var e = new (h || (h = b("Promise")))(function(b) {
                l(function(e) {
                    return e.loadModules([a.getModuleIdAsRef()], function(e) {
                        d("JSResourceEvents").notify(a.$1, c, "PROMISE_RESOLVED"),
                        b(e)
                    }, (e = a.$2) != null ? e : m)
                })
            }
            );
            d("PromiseAnnotate").setDisplayName(e, "Bootload(" + this.getModuleId() + ")");
            return e
        }
        ;
        e.preload = function() {
            var a, b = this, c = (a = this.$2) != null ? a : m;
            l(function(a) {
                return a.loadModules([b.getModuleIdAsRef()], function() {}, "preload: " + c)
            })
        }
        ;
        e.equals = function(a) {
            return this === a || this.$1 == a.$1
        }
        ;
        e.getModuleIfRequireable = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequireable").call(null, this.$1, i)
        }
        ;
        e.getModuleIfRequired = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequired").call(null, this.$1, i)
        }
        ;
        a.disableForSSR_DO_NOT_USE = function() {
            this.$3 = !1
        }
        ;
        e.isAvailableInSSR_DO_NOT_USE = function() {
            return this.constructor.$3
        }
        ;
        e.__setRef = function(a) {
            this.$2 = a;
            d("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this
        }
        ;
        a.loadAll = function(a, b) {
            var c = {}
              , e = !1;
            for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var i;
                if (g) {
                    if (h >= f.length)
                        break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done)
                        break;
                    i = h.value
                }
                i = i;
                var j = i.$2;
                j && (e = !0,
                c[j] = !0);
                d("JSResourceEvents").notify(i.$1, j, "LOADED")
            }
            l(function(d) {
                return d.loadModules(a.map(function(a) {
                    return a.getModuleId()
                }), b, e ? Object.keys(c).join(":") : "JSResource: unknown caller")
            })
        }
        ;
        return a
    }();
    a.$3 = !0;
    g["default"] = a
}
), 98);



import { JSResourceEvents } from 'your-module-path'; // Replace 'your-module-path' with the actual import path for JSResourceEvents
import { Promise, PromiseAnnotate, ifRequireable, ifRequired } from 'your-module-path'; // Replace 'your-module-path' with the actual import path for Promise, PromiseAnnotate, ifRequireable, and ifRequired

let globalBootloader = null;
const callbacks = [];

function waitForBootloader(callback) {
  if (globalBootloader) {
    callback(globalBootloader);
  } else {
    callbacks.push(callback);
  }
}

const unknownCallerMessage = 'JSResource: unknown caller';

class JSResourceReferenceImpl {
  static $3 = true;

  constructor(moduleId) {
    this.$1 = moduleId;
    this.$2 = null;
  }

  getModuleId() {
    return this.$1;
  }

  getModuleIdAsRef() {
    return this.$1;
  }

  load() {
    const moduleId = this.getModuleIdAsRef();
    JSResourceEvents.notify(this.$1, this.$2, 'LOADED');
    const promise = new Promise((resolve) => {
      waitForBootloader((bootloader) => {
        bootloader.loadModules([moduleId], (loadedModule) => {
          JSResourceEvents.notify(this.$1, this.$2, 'PROMISE_RESOLVED');
          resolve(loadedModule);
        }, this.$2 || unknownCallerMessage);
      });
    });

    PromiseAnnotate.setDisplayName(promise, `Bootload(${this.getModuleId()})`);
    return promise;
  }

  preload() {
    const moduleId = this.getModuleIdAsRef();
    const callerMessage = this.$2 || unknownCallerMessage;
    waitForBootloader((bootloader) => {
      bootloader.loadModules([moduleId], () => {}, `preload: ${callerMessage}`);
    });
  }

  equals(otherResource) {
    return this === otherResource || this.$1 === otherResource.$1;
  }

  getModuleIfRequireable() {
    JSResourceEvents.notify(this.$1, this.$2, 'ACCESSED');
    return ifRequireable(this.$1, (module) => module);
  }

  getModuleIfRequired() {
    JSResourceEvents.notify(this.$1, this.$2, 'ACCESSED');
    return ifRequired(this.$1, (module) => module);
  }

  static disableForSSR_DO_NOT_USE() {
    this.$3 = false;
  }

  isAvailableInSSR_DO_NOT_USE() {
    return this.constructor.$3;
  }

  __setRef(ref) {
    this.$2 = ref;
    JSResourceEvents.notify(this.$1, this.$2, 'CREATED');
    return this;
  }

  static loadAll(resources, callback) {
    const resourceMap = {};
    let hasRef = false;

    for (const resource of resources) {
      const ref = resource.$2;
      if (ref) {
        hasRef = true;
        resourceMap[ref] = true;
      }

      JSResourceEvents.notify(resource.$1, ref, 'LOADED');
    }

    waitForBootloader((bootloader) => {
      bootloader.loadModules(resources.map((resource) => resource.getModuleId()), callback, hasRef ? Object.keys(resourceMap).join(':') : unknownCallerMessage);
    });
  }
}

export default JSResourceReferenceImpl;
