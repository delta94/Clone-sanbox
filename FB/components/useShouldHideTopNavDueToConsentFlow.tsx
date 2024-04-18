__d("useShouldHideTopNavDueToConsentFlow", ["CometRouterRouteTopNavTypeContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext;

    function a() {
        var a = i(c("CometRouterRouteTopNavTypeContext"));
        return a === "hide_top_nav_for_consent_flow_only_donotuse"
    }
    g["default"] = a
}), 98);

import { useContext } from 'react';
import { CometRouterRouteTopNavTypeContext } from 'path-to-CometRouterRouteTopNavTypeContext'; // Update with the actual path

const useShouldHideTopNavDueToConsentFlow = (): boolean => {
    const topNavType = useContext(CometRouterRouteTopNavTypeContext);
    return topNavType === 'hide_top_nav_for_consent_flow_only_donotuse';
};

export default useShouldHideTopNavDueToConsentFlow;
