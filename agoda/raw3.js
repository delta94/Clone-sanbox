"use strict";
(self.webpackChunkagoda_webpack_clientside_webpack5 = self.webpackChunkagoda_webpack_clientside_webpack5 || []).push([[1120], {
    31120: function(e, n, t) {
        t.r(n);
        var a = t(67294)
          , l = t(90993)
          , r = t(79697)
          , i = function(e) {
            return (0,
            r.Z)(null == e ? void 0 : e.bannerText) ? null : a.createElement(l.Box, {
                textAlign: "center",
                py: "M",
                px: "XXL",
                backgroundColor: {
                    color: "price",
                    variant: "light"
                },
                "data-element-name": "emergency-banner"
            }, a.createElement(l.Box, {
                me: "XXL",
                clone: !0
            }, a.createElement(l.Span, {
                textSize: "M"
            }, null == e ? void 0 : e.bannerText)), a.createElement(l.Box, {
                px: "S",
                clone: !0
            }, a.createElement("form", {
                target: "_blank",
                style: {
                    display: "inline"
                },
                action: null == e ? void 0 : e.learnMoreLink
            }, a.createElement(l.Button, {
                style: {
                    width: "89px",
                    height: "24px",
                    borderRadius: "4px",
                    padding: "0px"
                },
                variant: "outlined",
                "data-element-name": "emergency-banner-btn"
            }, a.createElement(l.Span, {
                textSize: "S"
            }, null == e ? void 0 : e.learnMoreText)))))
        };
        i.displayName = "EmergencyBanner",
        n.default = i
    }
}]);
