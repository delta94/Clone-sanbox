__d("HelpCenterCookiesConsentedProvider", ["CookieConsent", "react", "useFacebookCookieConsentHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = d("react");
    var i = a.useContext
      , j = a.useMemo
      , k = h.createContext({
        consented: c("CookieConsent").hasConsent(1),
        onConsented: function() {}
    });
    b = function() {
        var a = i(k)
          , b = a.consented;
        a = a.onConsented;
        return {
            consented: b,
            onConsented: a
        }
    }
    ;
    e = function(a) {
        a = a.children;
        var b = c("useFacebookCookieConsentHandler")()
          , d = b[0]
          , e = b[1];
        b = j(function() {
            return {
                consented: d,
                onConsented: e
            }
        }, [d, e]);
        return h.jsx(k.Provider, {
            value: b,
            children: a
        })
    }
    ;
    g.useHelpCenterCookiesConsentedContext = b;
    g.HelpCenterCookiesConsentedContextProvider = e
}
), 98);