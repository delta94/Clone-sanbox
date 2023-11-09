__d("MWInboxProvider.react", ["react", "useMWInboxURIState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h.createContext;
    var j = b();
    function a(a) {
        var b = a.children;
        a = a.threadKey;
        a = d("useMWInboxURIState").useMWInboxURIState(a);
        return i.jsx(j.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MWInboxProviderContext = j;
    g.MWInboxProvider = a
}
), 98);