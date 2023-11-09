__d("CometDOMOnlyBoundary.react", ["CometPlaceholder.react", "CometSuspendWhileWaitingOnDOM.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        var b = a.children;
        a = a.fallback;
        return h.jsx(c("CometPlaceholder.react"), {
            fallback: a,
            children: h.jsx(c("CometSuspendWhileWaitingOnDOM.react"), {
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);