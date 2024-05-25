__d("CometDebounce", ["clearTimeout", "setTimeout"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        b = b === void 0 ? {} : b;
        var d = b.leading,
            e = b.wait,
            f = !0,
            g;

        function h() {
            for (var b = arguments.length, i = new Array(b), j = 0; j < b; j++) i[j] = arguments[j];
            var k;
            if (d === !0) {
                k = function () {
                    f = !0, g = null
                };
                if (!f) {
                    c("clearTimeout")(g);
                    g = c("setTimeout")(k, e);
                    return
                }
                f = !1;
                a.apply(void 0, i)
            } else h.reset(), k = function () {
                g = null, a.apply(void 0, i)
            };
            g = c("setTimeout")(k, e)
        }
        h.isPending = function () {
            return g != null
        };
        h.reset = function () {
            c("clearTimeout")(g), g = null, f = !0
        };
        return h
    }
    g["default"] = a
}), 98);


const CometDebounce = <T extends (...args: any[]) => void>(
    callback: T,
    options: { leading?: boolean; wait?: number } = {}
  ): T => {
    let { leading = false, wait = 0 } = options;
    let isPending = false;
    let timeoutId: ReturnType<typeof setTimeout> | null;
  
    function debounced(...args: Parameters<T>) {
      const executeCallback = () => {
        isPending = false;
        timeoutId = null;
        callback(...args);
      };
  
      if (leading) {
        if (!isPending) {
          isPending = true;
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(executeCallback, wait);
          return;
        }
      } else {
        debounced.reset();
      }
  
      timeoutId = setTimeout(executeCallback, wait);
    }
  
    debounced.isPending = () => {
      return !!timeoutId;
    };
  
    debounced.reset = () => {
      if (timeoutId) clearTimeout(timeoutId);
      isPending = false;
      timeoutId = null;
    };
  
    return debounced as unknown as T;
  };
  
  export default CometDebounce;
  