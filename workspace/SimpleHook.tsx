__d("SimpleHook", [], (function (a, b, c, d, e, f) {
  "use strict";
  a = function () {
    function a() {
      this.__callbacks = [], this.call = this.$2
    }
    var b = a.prototype;
    b.hasCallback = function (a) {
      var b = this.__callbacks;
      return b.length > 0 && (a == null || b.some(function (b) {
        return b === a || b.$1 === a
      }))
    };
    b.add = function (a, b) {
      var c = this,
        d;
      if ((b == null ? void 0 : b.once) === !0) {
        b = function () {
          c.remove(d), a.apply(null, arguments)
        };
        b.$1 = a;
        d = b
      } else d = a;
      this.__callbacks.push(d);
      return d
    };
    b.removeLast = function () {
      return this.__callbacks.pop()
    };
    b.remove = function (a) {
      return this.removeIf(function (b) {
        return b === a
      })
    };
    b.removeIf = function (a) {
      var b = this.__callbacks;
      this.__callbacks = b.filter(function (b) {
        return !a(b)
      });
      return b.length > this.__callbacks.length
    };
    b.clear = function () {
      this.__callbacks = []
    };
    b.$2 = function () {
      var a = this.__callbacks;
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b];
        d.apply(null, arguments)
      }
    };
    return a
  }();
  f.SimpleHook = a
}), 66);

class SimpleHook {
  private __callbacks: Function[];

  constructor() {
    this.__callbacks = [];
    this.callCallbacks = this.callCallbacks.bind(this);
  }

  hasCallback(callback: Function | null): boolean {
    const { __callbacks } = this;
    return __callbacks.length > 0 && (__callbacks.some((cb) => cb === callback || cb.$1 === callback));
  }

  add(callback: Function, options?: { once?: boolean }): Function {
    let cb: Function;
    if (options?.once === true) {
      cb = () => {
        this.remove(cb);
        callback.apply(null, arguments);
      };
      cb.$1 = callback;
    } else {
      cb = callback;
    }
    this.__callbacks.push(cb);
    return cb;
  }

  removeLast(): Function | undefined {
    return this.__callbacks.pop();
  }

  remove(callback: Function): Function[] {
    return this.removeIf((cb) => cb === callback);
  }

  removeIf(predicate: (callback: Function) => boolean): Function[] {
    const { __callbacks } = this;
    this.__callbacks = __callbacks.filter((cb) => !predicate(cb));
    return __callbacks.length > this.__callbacks.length ? __callbacks : [];
  }

  clear(): void {
    this.__callbacks = [];
  }

  callCallbacks(...args: any[]): void {
    const { __callbacks } = this;
    for (let i = 0, len = __callbacks.length; i < len; ++i) {
      const callback = __callbacks[i];
      callback.apply(null, args);
    }
  }

}

export { SimpleHook };
