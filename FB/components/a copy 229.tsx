__d("SortedAsyncIterable", ["PromiseAnnotate", "PromiseOrValue", "ReQLGlobalQueryContext", "isPromise"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k;

    function l(a) {
        var b;
        if ((i || (i = d("ReQLGlobalQueryContext"))).globalQueryContext.contents == null) {
            var c = new WeakMap();
            (i || (i = d("ReQLGlobalQueryContext"))).globalQueryContext.contents = c;
            return c
        }
        c = (i || (i = d("ReQLGlobalQueryContext"))).globalQueryContext.contents;
        (b = (i || (i = d("ReQLGlobalQueryContext"))).getDependencies(c)) == null ? void 0 : b.push(a);
        return c
    }

    function a(a) {
        var b = [],
            e = a.iterator(l(a)),
            f = (k || (k = d("PromiseOrValue"))).loop(function () {
                return (k || (k = d("PromiseOrValue"))).map(e.next(), function (a) {
                    if (a.done) return {
                        action: "break",
                        value: b
                    };
                    b.push(a.value);
                    return {
                        action: "continue",
                        value: void 0
                    }
                })
            });
        return (h || (h = c("isPromise")))(f) ? (j || (j = d("PromiseAnnotate"))).setDisplayName(f, "ReQL" + (a.uniqueId != null ? "_" + a.uniqueId : "")) : f
    }
    g.getOrCreateContext = l;
    g.toArray = a
}), 98);