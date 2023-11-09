__d("Actor", ["BaseActorProvider", "CometRelayEnvironmentFactory", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = d("react").useContext;
    function a(a) {
        return h.jsx(d("BaseActorProvider").BaseActorProvider, babelHelpers["extends"]({}, a, {
            relayEnvironmentFactory: d("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory,
            children: a.children
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
        var a = i(d("BaseActorProvider").ActorContext);
        return [a.get(), a.set]
    }
    g.ActorProvider = a;
    g.useActor = b
}
), 98);