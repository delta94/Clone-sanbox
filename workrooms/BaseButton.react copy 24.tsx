__d("RelayEnvironmentFactoryProvider", ["CometRelayEnvironmentFactory", "FBLogger", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useContext;
    function j() {
        c("FBLogger")("comet_root").warn("RelayEnvironmentFactoryContext called without parent provider - using CometRelayEnvironmentFactory as fallback");
        return d("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
    }
    var k = h.createContext(null);
    function a() {
        var a = i(k);
        return a ? a : j()
    }
    function b(a) {
        var b = i(k);
        if (b)
            return b;
        return a ? a : j()
    }
    function e(a) {
        return h.jsx(k.Provider, {
            value: a.factory,
            children: a.children
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.useRelayEnvironmentFactory = a;
    g.useRelayEnvironmentFactoryWithFallback = b;
    g.RelayEnvironmentFactoryProvider = e
}
), 98);