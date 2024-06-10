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


import { notify } from 'JSResourceEvents';
import { setDisplayName } from 'PromiseAnnotate';
import { ifRequireable, ifRequired } from 'ifRequireable';
import Promise from 'Promise';

let bootLoader = null;
const pendingCallbacks: ((loader: any) => void)[] = [];

function runPendingCallbacks(loader: any): void {
    if (bootLoader) {
        loader(bootLoader);
        pendingCallbacks.length = 0;
    } else {
        pendingCallbacks.push(loader);
    }
}

const unknownCallerMessage = "JSResource: unknown caller";

class JSResourceReferenceImpl {
    static disableForSSR_DO_NOT_USE: boolean = true;

    constructor(private moduleId: string, private ref?: string) {}

    getModuleId(): string {
        return this.moduleId;
    }

    getModuleIdAsRef(): string {
        return this.ref || this.moduleId;
    }

    load(): Promise<any> {
        const moduleId = this.getModuleIdAsRef();
        notify(this.moduleId, this.ref, "LOADED");

        const promise = new Promise<any>((resolve) => {
            runPendingCallbacks(loader => {
                loader.loadModules([moduleId], (modules) => {
                    notify(this.moduleId, this.ref, "PROMISE_RESOLVED");
                    resolve(modules);
                }, this.ref || unknownCallerMessage);
            });
        });

        setDisplayName(promise, `Bootload(${moduleId})`);
        return promise;
    }

    preload(): void {
        const moduleId = this.getModuleIdAsRef();
        const callerMessage = this.ref || unknownCallerMessage;
        runPendingCallbacks(loader => {
            loader.loadModules([moduleId], () => {}, `preload: ${callerMessage}`);
        });
    }

    equals(other: JSResourceReferenceImpl): boolean {
        return this === other || this.moduleId === other.moduleId;
    }

    getModuleIfRequireable(): any {
        notify(this.moduleId, this.ref, "ACCESSED");
        return ifRequireable(this.moduleId, moduleId => moduleId);
    }

    getModuleIfRequired(): any {
        notify(this.moduleId, this.ref, "ACCESSED");
        return ifRequired(this.moduleId, moduleId => moduleId);
    }

    static loadAll(resources: JSResourceReferenceImpl[], callback: () => void): void {
        const modules: { [key: string]: boolean } = {};
        let hasRef = false;

        resources.forEach(resource => {
            const ref = resource.ref;
            if (ref) {
                hasRef = true;
                modules[ref] = true;
            }
            notify(resource.moduleId, ref, "LOADED");
        });

        runPendingCallbacks(loader => {
            loader.loadModules(resources.map(resource => resource.getModuleId()), callback, hasRef ? Object.keys(modules).join(":") : unknownCallerMessage);
        });
    }
}

export default JSResourceReferenceImpl;
