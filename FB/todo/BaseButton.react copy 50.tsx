__d("XPlatReactToasterStateManager", ["clearTimeout", "removeFromArray", "setTimeout", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};

    function i(a) {
        var b = !1;
        return function () {
            b || (a(), b = !0)
        }
    }
    a = function () {
        function a(a) {
            var b = a.callbackScheduler;
            a = a.maxQueuedToasts;
            this.$1 = 0;
            this.$2 = new Map();
            this.$3 = [];
            this.$4 = [];
            this.$5 = null;
            this.$7 = b;
            this.$6 = a
        }
        var b = a.prototype;
        b.push = function (a, b) {
            var c = "toast-" + this.$1++;
            b = {
                duration: b,
                expired: !1,
                id: c,
                shown: !1,
                timer: null,
                value: a
            };
            this.$8({
                node: b,
                type: "PUSH"
            });
            return c
        };
        b.replace = function (a, b) {
            this.$8({
                id: a,
                type: "REPLACE",
                value: b
            })
        };
        b.shown = function (a) {
            this.$8({
                id: a,
                type: "SHOWN"
            })
        };
        b["delete"] = function (a) {
            this.$8({
                id: a,
                type: "DELETE"
            })
        };
        b.expire = function (a) {
            this.$8({
                id: a,
                type: "EXPIRE"
            })
        };
        b.hidden = function (a) {
            this.$8({
                id: a,
                type: "HIDDEN"
            })
        };
        b.stopTimer = function (a) {
            this.$8({
                id: a,
                type: "STOP_TIMER"
            })
        };
        b.resetTimer = function (a) {
            this.$8({
                id: a,
                type: "RESET_TIMER"
            })
        };
        b.getState = function () {
            return Object.fromEntries(this.$2)
        };
        b.getEmptyState = function () {
            return h
        };
        b.addListener = function (a) {
            var b = this;
            this.$3.push(a);
            return {
                remove: i(function () {
                    c("removeFromArray")(b.$3, a)
                })
            }
        };
        b.$9 = function (a) {
            (this.$5 == null || a.priority > this.$5.priority) && (this.$5 = a)
        };
        b.registerView = function (a, b) {
            var d = this;
            b === void 0 && (b = 1);
            var e = {
                handler: a,
                priority: b
            };
            this.$4.push(e);
            this.$9(e);
            this.$10();
            return {
                remove: i(function () {
                    c("removeFromArray")(d.$4, e), d.$5 === e && (d.$5 = null, d.$4.forEach(function (a) {
                        return d.$9(a)
                    }))
                })
            }
        };
        b.$8 = function (a) {
            var b = this.$2;
            switch (a.type) {
                case "PUSH":
                    var c = a.node;
                    this.$2 = new Map([].concat(Array.from(this.$2), [
                        [c.id, c]
                    ]));
                    if (this.$6 !== 0) {
                        c = Array.from(this.$2.values()).filter(function (a) {
                            return !a.shown && !a.expired
                        });
                        if (c.length > this.$6) {
                            c = c[0];
                            this["delete"](c.id)
                        }
                    }
                    break;
                case "SHOWN":
                    if (this.$2.has(a.id) && !this.$11(a.id).shown) {   
                        c = babelHelpers["extends"]({}, this.$11(a.id), {
                            shown: !0
                        });
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [a.id, this.$12(c)]
                        ]))
                    }
                    break;
                case "EXPIRE":
                    if (this.$2.has(a.id)) {
                        c = babelHelpers["extends"]({}, this.$11(a.id), {
                            expired: !0
                        });
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [a.id, this.$13(c)]
                        ]));
                        this.$14(c)
                    }
                    break;
                case "HIDDEN":
                    if (this.$2.has(a.id)) {
                        c = this.$11(a.id);
                        (c.shown || c.expired) && (this.$2 = new Map(this.$2), this.$2["delete"](a.id), this.$13(c))
                    }
                    break;
                case "DELETE":
                    if (this.$2.has(a.id)) {
                        c = this.$11(a.id);
                        this.$2 = new Map(this.$2);
                        this.$2["delete"](a.id);
                        this.$13(c)
                    }
                    break;
                case "REPLACE":
                    if (this.$2.has(a.id)) {
                        c = this.$11(a.id);
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [a.id, babelHelpers["extends"]({}, c, {
                                value: a.value
                            })]
                        ]))
                    }
                    break;
                case "STOP_TIMER":
                    if (this.$2.has(a.id) && this.$15(this.$11(a.id))) {
                        c = babelHelpers["extends"]({}, this.$11(a.id));
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [a.id, this.$13(c)]
                        ]))
                    }
                    break;
                case "RESET_TIMER":
                    if (this.$2.has(a.id) && !this.$15(this.$11(a.id))) {
                        c = babelHelpers["extends"]({}, this.$11(a.id));
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [a.id, this.$12(c)]
                        ]))
                    }
                    break;
                default:
                    a.type
            }
            b !== this.$2 && this.$10()
        };
        b.$10 = function () {
            var a = this;
            this.$3.forEach(function (b) {
                return a.$7(function () {
                    b()
                })
            });
            this.$4.forEach(function (b) {
                return a.$7(function () {
                    b.handler(b === a.$5 ? a.getState() : a.getEmptyState())
                })
            })
        };
        b.$12 = function (a) {
            var b = this;
            a.duration !== null && a.timer == null && (a.timer = c("setTimeout")(function () {
                b.expire(a.id)
            }, a.duration));
            return a
        };
        b.$13 = function (a) {
            a.timer != null && (c("clearTimeout")(a.timer), a.timer = null);
            return a
        };
        b.$14 = function (a) {
            var b = this;
            this.$13(a);
            var d = a.id;
            c("setTimeout")(function () {
                b["delete"](d)
            }, 1e3)
        };
        b.$15 = function (a) {
            return a.timer != null
        };
        b.$11 = function (a) {
            a = this.$2.get(a);
            if (a == null) throw c("unrecoverableViolation")("Toast with given identifier was not found", "comet_ui");
            return a
        };
        a.getInstance = function (b) {
            a.$16 == null && (a.$16 = new a(b));
            return a.$16
        };
        a.resetInstance_DO_NOT_USE = function () {
            a.$16 = null
        };
        return a
    }();
    g["default"] = a
}), 98);



import removeFromArray from "removeFromArray"
import unrecoverableViolation from "unrecoverableViolation"


interface Toast {
    id: string;
    value: any;
    duration: number | null;
    expired: boolean;
    shown: boolean; 
    timer: ReturnType<typeof setTimeout> | null; 
}

interface ToastsState {
    [toastId: string]: Toast;
}

interface Listener {
    (): void;
}

interface View {
    handler: (toasts: ToastsState) => void;
    priority: number;
}

interface ConstructorOptions {
    callbackScheduler: (callback: () => void) => void;
    maxQueuedToasts: number; 
}

type ToastAction = 
  | {type: 'PUSH', node: Toast}
  | {type: 'EXPIRE', id: string}
  | {type: 'SHOWN', id: string}
  | {type: 'REPLACE', id: string, value: any }
  | {type: 'DELETE', id: string}
  | {type: 'HIDDEN', id: string}
  | {type: 'STOP_TIMER', id: string}
  | {type: 'RESET_TIMER', id: string}

export  class XPlatReactToasterStateManager {
    nextToastId = 0;
    toastsMap: Map<string, Toast> = new Map();
    listeners: Array<(() => void)> = [];
    views: Array<View> = [];
    topPriorityView: View | null = null;
    public callbackScheduler: (cb: () => void) => void;
    public maxQueuedToasts: number;
    
    constructor(options: ConstructorOptions) {
      this.nextToastId = 0; 
      this.toastsMap = new Map();
      this.listeners = [];
      this.views = [];
      this.topPriorityView = null;
      this.callbackScheduler = options.callbackScheduler;
      this.maxQueuedToasts = options.maxQueuedToasts;
    }
  
    push(value, duration: number) {
      const id = `toast-${this.nextToastId++}`;
      
      const toast = {
        duration,
        expired: false,
        id,
        shown: false,
        timer: null,
        value
      };
  
      this.updateState({
        node: toast,  
        type: 'PUSH'
      });
  
      return id;
    }

    replace(id: string, newValue: any) {
        this.updateState({
          id,
          type: 'REPLACE',
          value: newValue  
        });
    }

    shown(id: string) {
        this.updateState({
          id,
          type: 'SHOWN',
        });
    }

    delete(id: string) {
        this.updateState({
          id,
          type: 'DELETE',
        });
    }

    expire(id: string) {
        this.updateState({
            id,
            type: "EXPIRE"
        })
    };
    hidden(id: string) {
        this.updateState({
            id,
            type: "HIDDEN"
        })
    };

    stopTimer (id: string) {
        this.updateState({
            id,
            type: "STOP_TIMER"
        })
    };
    
    resetTimer (id: string) {
        this.updateState({
            id,
            type: "RESET_TIMER"
        })
    };

    getState(): ToastsState {
        return Object.fromEntries(this.toastsMap);
    }

    getEmptyState(): ToastsState {
        return {};
    }

    addListener(listener: Listener): { remove: () => void } {
        this.listeners.push(listener);
    
        return {
          remove: () => {
            removeFromArray(this.listeners, listener);  
          }
        };
    }

    setTopPriorityView(view: View) {
        if (
          this.topPriorityView == null || 
          view.priority > this.topPriorityView.priority
        ) {  
          this.topPriorityView = view;
        }
    }

    registerView(
        handler: () => void,
        priority: number = 1
      ): { remove: () => void } {
        
        const view: View = {
          handler,
          priority  
        };
    
        this.views.push(view);
    
        this.setTopPriorityView(view);
    
        return {
          remove: () => {
            removeFromArray(this.views, view);
            
            if (this.topPriorityView === view) {
              this.topPriorityView = null;
              
              this.views.forEach(v => {
                this.setTopPriorityView(v);  
              });
            }
          } 
        };
    }
  
    updateState(action: ToastAction) {
        const prevToasts = this.toastsMap;
  
        switch (action.type) {
            case 'PUSH':
                const newToast = action.node;
                
                this.toastsMap.set(newToast.id, newToast);
        
                if (this.maxQueuedToasts !== 0) {
                    const pendingToasts = Array.from(this.toastsMap.values())
                        .filter(toast => !toast.shown && !toast.expired);
                    if (pendingToasts.length > this.maxQueuedToasts) {
                        const oldestToast = pendingToasts[0];  
            
                        this.delete(oldestToast.id);
                    }
                }
                break;
            case 'SHOWN':
                if (this.toastsMap.has(action.id)) {
                    const existingToast = this.toastsMap.get(action.id);
                    if (existingToast && !existingToast.shown) {
                        const updatedToast: Toast = {
                          ...existingToast,
                          shown: true,
                        };
                        this.toastsMap.set(action.id, updatedToast);
                        }
                }
                break;
            case 'EXPIRE':
                if (this.toastsMap.has(action.id)) {
                    const existingToast = this.toastsMap.get(action.id);
                    if (existingToast) {
                    const updatedToast = {
                        ...existingToast,
                        expired: true,
                    };
                    this.toastsMap.set(action.id, this.clearTimer(updatedToast));
                    this.scheduleDeletion(updatedToast);
                    }
                }
                break;
            case 'HIDDEN':
                if (this.toastsMap.has(action.id)) {
                    const toast = this.getToastById(action.id);
                    if (toast.shown || toast.expired) {
                    this.toastsMap.delete(action.id);
                    this.clearTimer(toast);
                    }
                }
                break;
            case 'DELETE':
                if (this.toastsMap.has(action.id)) {
                    const toastToDelete = this.getToastById(action.id);
                    this.toastsMap.delete(action.id);
                    this.clearTimer(toastToDelete)
                }
                break;
            case 'REPLACE':
                if (this.toastsMap.has(action.id)) {
                    const existingToast = this.getToastById(action.id);
                    const updatedToast = { ...existingToast, value: action.value };
                    this.toastsMap.set(action.id, updatedToast);
                }
                break;
            case 'STOP_TIMER':
                if (this.toastsMap.has(action.id)) {
                    const toast = this.getToastById(action.id);
                    if (this.hasTimer(toast)) {
                    const updatedToast = { ...toast };
                    this.clearTimer(updatedToast);
                    this.toastsMap.set(action.id, updatedToast);
                    }
                }
                break;
            case 'RESET_TIMER':
                if (this.toastsMap.has(action.id)) {
                    const toast = this.getToastById(action.id);
                    if (!this.hasTimer(toast)) {
                    const updatedToast = { ...toast };
                    this.setTimer(updatedToast);
                    this.toastsMap.set(action.id, updatedToast);
                    }
                }
                break;
            default:
                action.type
        }
  
      if (prevToasts !== this.toastsMap) {
        this.notifyListeners();
      }
    }

    scheduleDeletion(toast) {
        this.clearTimer(toast);
        const id = toast.id;
        setTimeout(() => {
          this.delete(id);
        }, 1000);
    }

    hasTimer(toast: Toast) {
        return toast.timer !== null;
    }

    clearTimer(toast: Toast) {
        if (toast.timer != null) {
        clearTimeout(toast.timer);
        toast.timer = null;
        } 
        return toast
    }

    setTimer(toast: Toast) {
        if (toast.duration !== null && toast.timer === null) {
            toast.timer = setTimeout(() => {
            this.expire(toast.id);
          }, toast.duration);
        }
        return toast;
    }

 
  
    notifyListeners() {
      this.listeners.forEach((listener) =>  {
        return this.callbackScheduler(listener)
      })

      this.views.forEach((view) =>  {
        return this.callbackScheduler(() => view.handler(view === this.topPriorityView ? this.getState() : this.getEmptyState()))
      })
      
    }
    
    getToastById(id) {
      const toast = this.toastsMap.get(id);
      if (!toast) {
        throw unrecoverableViolation('Toast with given identifier was not found');
      }
      return toast;
    }
  }