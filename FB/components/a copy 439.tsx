__d(
  "MWV2AdminMsgShowPinnedMessages.react",
  [
    "I64",
    "JSResourceForInteraction",
    "MWAdminMsgCtaLink.react",
    "MWAdminTextLayout.react",
    "MWPBumpEntityKey",
    "MessengerWebUXLogger",
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
        "MWPinnedMessagesDialog.react"
      ).__setRef("MWV2AdminMsgShowPinnedMessages.react");
    function a(a) {
      var b = a.message,
        e = (h || (h = c("useReStore")))();
      a = c("useMWXLazyDialog")(l);
      var g = a[0];
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
        f.id + ":34"
      );
      var j = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(e.tables.threads, ["threadType"])
              .getKeyRange(b.threadKey);
          },
          [e, b.threadKey],
          f.id + ":43"
        ),
        m = c("MessengerWebUXLogger").useInteractionLogger(),
        n = function () {
          var a = {
            eventName: "open_view_pinned_messages_dialog",
            threadKey: b.threadKey,
            threadType: j == null ? void 0 : j.threadType,
          };
          m == null ? void 0 : m(a);
          d("MWPBumpEntityKey").bumpEntityKeyWithAppId(
            "mw_pinned_messages",
            "see_all_admin_msg_cta"
          );
          return g({ threadKey: b.threadKey }, function () {});
        };
      a = a == null ? void 0 : a.title;
      n =
        a != null
          ? k.jsx(c("MWAdminMsgCtaLink.react"), { onClick: n, children: a })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: n, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
