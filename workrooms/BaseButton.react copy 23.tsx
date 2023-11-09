__d("CometSuspendWhileWaitingOnDOM.react", ["react", "suspendOrThrowIfUsedInSSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        a = a.children;
        c("suspendOrThrowIfUsedInSSR")("CometSuspendWhileWaitingOnDOM: This component is marked to be client rendered");
        return h.jsx(h.Fragment, {
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);