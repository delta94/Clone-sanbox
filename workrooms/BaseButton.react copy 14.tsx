__d("CometRelayEnvironmentFactory", ["CometRelayMultiActorEnvironment", "RelayAPIConfig", "cometCreateLocalEnvironment", "cometHandlerProvider", "configureRelayForWWW", "createCometRelayEnvironmentConfig", "relay-runtime/multi-actor-environment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c("configureRelayForWWW")();
    function a(a, b) {
        return d("CometRelayMultiActorEnvironment").forActor(d("relay-runtime/multi-actor-environment").getActorIdentifier(a), b)
    }
    e = a(c("RelayAPIConfig").actorID);
    function b(a) {
        return d("CometRelayMultiActorEnvironment").commitMultiActorUpdate(a)
    }
    f = {
        commitLocalUpdateForEachEnvironment: b,
        configEnvironment: d("createCometRelayEnvironmentConfig").createCometRelayEnvironmentConfig,
        createLocalEnvironment: c("cometCreateLocalEnvironment"),
        defaultEnvironment: e,
        getForActor: d("CometRelayMultiActorEnvironment").forActor,
        getForActorID: a,
        handlerProvider: c("cometHandlerProvider")
    };
    g.createLocalEnvironment = c("cometCreateLocalEnvironment");
    g.configEnvironment = d("createCometRelayEnvironmentConfig").createCometRelayEnvironmentConfig;
    g.cometHandlerProvider = c("cometHandlerProvider");
    g.commitLocalUpdateForEachEnvironment = b;
    g.defaultEnvironment = e;
    g.getForActorID = a;
    g.CometRelayEnvironmentFactory = f
}
), 98);