__d("MWInboxUnsupportedThreadNullState.react", ["fbt", "CometContentArea.react", "I64", "LSMessagingThreadTypeUtil", "MDSColumn.react", "MDSColumnItem.react", "MWInboxDetailNullState.react", "MWLSThread", "MWXProfilePhoto.react", "MWXTextPairing.react", "getValidMediaURL", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = i || d("react");
    function a(a) {
        a = a.threadKey;
        a = d("MWLSThread").useThread(a, function(f) {
            var a = f.memberCount
              , b = f.threadName
              , c = f.threadPictureUrl
              , d = f.threadPictureUrlExpirationTimestampMs
              , e = f.threadPictureUrlFallback;
            f = f.threadType;
            return {
                memberCount: a,
                threadName: b,
                threadPictureUrl: c,
                threadPictureUrlExpirationTimestampMs: d,
                threadPictureUrlFallback: e,
                threadType: f
            }
        });
        if (a == null)
            return k.jsx(c("MWInboxDetailNullState.react"), {});
        var b = a.memberCount
          , e = a.threadName
          , f = a.threadPictureUrl
          , g = a.threadPictureUrlExpirationTimestampMs
          , i = a.threadPictureUrlFallback;
        a = a.threadType;
        var l = h._("__JHASH__h6CU2zjp4yD__JHASH__")
          , m = h._("__JHASH__N97UR99dffD__JHASH__");
        a = d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(a);
        return k.jsx(c("CometContentArea.react"), {
            hasNoRole: !0,
            verticalAlign: "middle",
            children: k.jsxs(c("MDSColumn.react"), {
                align: "center",
                spacing: 20,
                children: [f != null && i != null && k.jsx(c("MDSColumnItem.react"), {
                    children: k.jsx(c("MWXProfilePhoto.react"), {
                        "aria-label": h._("__JHASH__nrVQmru0HGP__JHASH__"),
                        shape: "roundedRect",
                        size: 80,
                        source: {
                            uri: c("getValidMediaURL")(g, f, i)
                        }
                    })
                }), k.jsx(c("MDSColumnItem.react"), {
                    children: k.jsx(c("MWXTextPairing.react"), {
                        body: b != null ? h._("__JHASH__UPhL6_m46CP__JHASH__", [h._plural((j || (j = d("I64"))).to_int32(b), "number")]) : void 0,
                        bodyColor: "secondary",
                        headline: e,
                        headlineColor: "primary",
                        level: 3,
                        meta: a ? m : l,
                        metaColor: "primary",
                        textAlign: "center"
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);