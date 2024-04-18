__d("MWCMJewelContextProvider.react", ["LSIntEnum", "MWCMJewelContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || (h = d("react"));
    b = h;
    var k = b.useMemo,
        l = b.useState;

    function a(a) {
        a = a.children;
        var b = l(function () {
                return (i || (i = d("LSIntEnum"))).ofNumber(0)
            }),
            e = b[0],
            f = b[1];
        b = k(function () {
            return {
                selectedFolderTab: e,
                setSelectedFolderTab: f
            }
        }, [e]);
        return j.jsx(c("MWCMJewelContext").Provider, {
            value: b,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);




