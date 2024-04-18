__d("CometSettingsDropdownPopoverTrigger.react", ["CometSetProfileSwitcherEducationContext", "CometSettingsDropdownLoadingState.react", "CometSettingsDropdownPopoverTrigger.entrypoint", "cr:1875563", "gkx", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useContext;

    function a(a) {
        var d = a.children,
            e = a.dropdownPosition;
        e = e === void 0 ? "below" : e;
        var f = a.iconSize,
            g = a.onVisibilityChange;
        a = a.tracePolicy;
        var h = j(c("CometSetProfileSwitcherEducationContext")),
            k = h.resetSwitcherEducationState;
        h = c("gkx")("1266082");
        return i.jsx(b("cr:1875563"), {
            align: "end",
            entryPointParams: {},
            fallback: i.jsx(c("CometSettingsDropdownLoadingState.react"), {
                iconSize: f,
                shouldShowSimpleDropdownHeader: h
            }),
            onVisibilityChange: function (a) {
                a || k(), g == null ? void 0 : g(a)
            },
            otherProps: {},
            popoverEntryPoint: c("CometSettingsDropdownPopoverTrigger.entrypoint"),
            position: e,
            preloadTrigger: "button",
            tracePolicy: a,
            children: d
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);