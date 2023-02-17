1527: function (e, t, n) {
    "use strict";
    var a = n(0);
    t.a = function (e) {
        var t = Object(a.useRef)();
        return Object(a.useEffect)((function () {
                t.current = e
            })),
            t.current
    }
},