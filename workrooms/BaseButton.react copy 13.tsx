__d("usePrevious", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect
      , i = b.useRef;
    function a(a) {
        var b = i(null);
        h(function() {
            b.current = a
        });
        return b.current
    }
    g["default"] = a
}
), 98);