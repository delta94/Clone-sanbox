__d(
  "MWV2SBGProactiveChatMutationUrl.react",
  [
    "CometRelay",
    "I64",
    "LWICometProactiveChatOptInMutation.react",
    "MWAdminMsgCtaLink.react",
    "MWAdminTextLayout.react",
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
      k = j || d("react");
    function a(a) {
      var b = a.message,
        e = a.opted_in,
        g = d("CometRelay").useRelayEnvironment(),
        j = (h || (h = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          var a;
          return d("ReQL")
            .fromTableAscending(j.tables.admin_message_ctas)
            .getKeyRange(
              b.threadKey,
              b.messageId,
              (a = b.adminMsgCtaId) != null ? a : (i || (i = d("I64"))).neg_one
            );
        },
        [j, b],
        f.id + ":32"
      );
      a = (a = a == null ? void 0 : a.title) != null ? a : "";
      var l = function () {
        return d(
          "LWICometProactiveChatOptInMutation.react"
        ).commitProactiveChatOptInMutation({
          entryPoint: "sbg_messenger_xmat",
          environment: g,
          optInValue: e,
          setLoading: function () {},
          setOptedIn: function () {},
        });
      };
      l =
        a != null
          ? k.jsx(c("MWAdminMsgCtaLink.react"), { onClick: l, children: a })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: l, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
