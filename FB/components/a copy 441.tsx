__d(
  "MWV2AdminMsgPostMessageRemoveActions.react",
  [
    "C4GFalcoLoggerDeferred",
    "I64",
    "JSResourceForInteraction",
    "MWAdminTextLayout.react",
    "MWXLink.react",
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
      k = i || (i = d("react")),
      l = i.useCallback,
      m = c("JSResourceForInteraction")(
        "MWCMAdmodRemoveMessageOtherActionsDialog.react"
      ).__setRef("MWV2AdminMsgPostMessageRemoveActions.react");
    function n(a) {
      var b = a.senderId,
        e = a.threadKey;
      a = a.title;
      var f = c("useMWXLazyDialog")(m),
        g = f[0];
      f = l(
        function () {
          d("C4GFalcoLoggerDeferred").logC4GEngagementFalcoEvent({
            action: "tap",
            event: "message_removed_more_actions_sheet_rendered",
            surface: "thread_view",
            thread_id: (j || (j = d("I64"))).to_string(e),
          }),
            g({ senderId: b, threadKey: e });
        },
        [g, b, e]
      );
      return k.jsx(c("MWXLink.react"), {
        color: "highlight",
        onClick: f,
        role: "button",
        children: a,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
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
              (a = b.adminMsgCtaId) != null ? a : (j || (j = d("I64"))).neg_one
            );
        },
        [e, b],
        f.id + ":60"
      );
      var g = a == null ? void 0 : a.title;
      a = a == null ? void 0 : a.actionUrl;
      var i = null;
      if (a != null) {
        a = new URL(a);
        i = a.searchParams.get("removed_msg_sender_id");
      }
      a =
        i != null && g != null
          ? k.jsx(n, { senderId: i, threadKey: b.threadKey, title: g })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: a, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
