__d(
  "MWV2AdminMsgWebUrl.react",
  [
    "AdsMessengerContext.react",
    "I64",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "ReQL",
    "ReQLSuspense",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = j || (j = d("react")),
      l = j.useContext;
    function a(a) {
      var b = a.message,
        e = (h || (h = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          var a;
          return d("ReQL")
            .fromTableAscending(e.tables.admin_message_ctas)
            .getKeyRange(
              b.threadKey,
              b.messageId,
              (a = b.adminMsgCtaId) != null ? a : (i || (i = d("I64"))).neg_one
            );
        },
        [e, b],
        f.id + ":26"
      );
      var g = l(d("AdsMessengerContext.react").AdsMessengerContext),
        j = a == null ? void 0 : a.title;
      a = a == null ? void 0 : a.actionUrl;
      g = (g == null ? void 0 : g.messengerLinkColor) || "primary";
      g =
        j != null && a != null
          ? k.jsx(c("MWXLink.react"), {
              color: g,
              href: a,
              target: "_blank",
              children: j,
            })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: g, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
