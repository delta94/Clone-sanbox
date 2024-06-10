__d(
  "MWV2AdminMsgP2BPrivacyDisclosure.react",
  [
    "I64",
    "JSResourceForInteraction",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "P2bDifferentiationPrivacyDisclosureOpenClickWebFalcoEvent",
    "ReQL",
    "ReQLSuspense",
    "react",
    "useMWXLazyDialog",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = j || d("react"),
      l = c("JSResourceForInteraction")(
        "MWPrivacyDisclosureDialog.react"
      ).__setRef("MWV2AdminMsgP2BPrivacyDisclosure.react");
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
        f.id + ":31"
      );
      var g = c("useMWXLazyDialog")(l),
        j = g[0];
      g = a == null ? void 0 : a.title;
      a =
        g != null
          ? k.jsx(c("MWXLink.react"), {
              onClick: function () {
                j(
                  { entryPoint: "ADMIN_TEXT", threadKey: b.threadKey },
                  function () {}
                ),
                  c(
                    "P2bDifferentiationPrivacyDisclosureOpenClickWebFalcoEvent"
                  ).log(function () {
                    return {
                      consumer_id: "0",
                      entry_point: "ADMIN_TEXT",
                      page_id: (i || (i = d("I64"))).to_string(b.threadKey),
                    };
                  });
              },
              children: g,
            })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: a, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
