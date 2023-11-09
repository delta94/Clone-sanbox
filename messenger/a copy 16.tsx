__d("CometRouteRootWrapper.react", ["CometBackupPlaceholder.react", "CometErrorBoundary.react", "CometPlaceholder.react", "CometRouterFocusRegion.react", "CometRouterUIComponentContext", "CometTransientDialogProvider.react", "deferredLoadComponent", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")), j = h.useContext;
    function k(a) {
        a = a.deferredComponent;
        a = c("deferredLoadComponent")(a);
        return i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(a, {})
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
        var b = a.children
          , d = a.isDialog;
        a = a.loadingLayoutType;
        var e = j(c("CometRouterUIComponentContext"))
          , f = e.DialogErrorRoot
          , g = e.ErrorRoot
          , h = e.LoadingStates;
        e = e.RouterFocusRegion;
        e = (e = e) != null ? e : c("CometRouterFocusRegion.react");
        a = a ? (h = h == null ? void 0 : h[a]) != null ? h : null : null;
        h = i.jsx(e, {
            children: b
        });
        return i.jsx(c("CometErrorBoundary.react"), {
            context: {
                project: "router_comet_root"
            },
            fallback: function() {
                return d && f != null ? i.jsx(f, {}) : i.jsx(k, {
                    deferredComponent: g
                })
            },
            children: i.jsx(c("CometTransientDialogProvider.react"), {
                children: a ? i.jsx(c("CometPlaceholder.react"), {
                    fallback: i.jsx(a, {}),
                    children: h
                }) : i.jsx(c("CometBackupPlaceholder.react"), {
                    fallback: null,
                    children: h
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);