__d("CometPlatformAppWrapper.react", ["CometAccessibilityAlertProvider.react", "CometErrorBoundary.react", "CometErrorProjectContext", "CometPlaceholder.react", "CometSSRMultipassBoundary.react", "CometSetKeyCommandWrapperDialogs.react", "CometTimeSpentEventListener.react", "CometTransientDialogProvider.react", "TopLevelKeyCommandListener.react", "deferredLoadComponent", "hero-tracing-placeholder", "react", "recoverableViolation", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = c("deferredLoadComponent")(c("requireDeferred")("CometUncaughtError.react").__setRef("CometPlatformAppWrapper.react"))
      , j = function() {
        return h.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(i, {})
        })
    };
    function k(a) {
        a = (a = d("hero-tracing-placeholder").HeroPlaceholderUtils.createThenableDescription(a)) != null ? a : "";
        c("recoverableViolation")("Top level suspense boundary triggered, a component suspended outside of a CometPlaceholder, description: " + a, "comet_infra")
    }
    function a(a) {
        var b = a.KeyboardSettingsStateProvider
          , d = a.children;
        a = a.disableTimeSpentLogging;
        a = a === void 0 ? !1 : a;
        b = (b = b) != null ? b : h.Fragment;
        return h.jsx(c("CometErrorProjectContext").Provider, {
            value: "comet_root",
            children: h.jsx(h.Suspense, {
                fallback: null,
                suspenseCallback: k,
                children: h.jsx(c("CometErrorBoundary.react"), {
                    context: {
                        project: "comet_platform_root_boundary"
                    },
                    fallback: j,
                    children: h.jsxs(c("CometSSRMultipassBoundary.react"), {
                        fallback: null,
                        id: "root",
                        children: [h.jsx(b, {
                            children: h.jsx(c("TopLevelKeyCommandListener.react"), {
                                children: h.jsxs(c("CometTransientDialogProvider.react"), {
                                    children: [h.jsx(c("CometAccessibilityAlertProvider.react"), {
                                        children: d
                                    }), h.jsx(c("CometSetKeyCommandWrapperDialogs.react"), {})]
                                })
                            })
                        }), a !== !0 && h.jsx(c("CometTimeSpentEventListener.react"), {})]
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);