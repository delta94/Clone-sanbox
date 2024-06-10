__d(
  "MWNotificationMessageInstantGameCustomUpdateMuteManagementAdminMsgCta.react",
  [
    "LSCustomUpdateMuteManagementStoredProcedure",
    "LSFactory",
    "LSIntEnum",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "ReQL",
    "ReQLSuspense",
    "promiseDone",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = j || (j = d("react")),
      l = j.useCallback;
    function a(a) {
      var b = a.message,
        e = a.shouldMute,
        g = (h || (h = c("useReStore")))(),
        j = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(g.tables.admin_message_ctas)
              .getKeyRange(b.threadKey, b.messageId);
          },
          [g, b.messageId, b.threadKey],
          f.id + ":32"
        );
      a = l(
        function () {
          if ((j == null ? void 0 : j.targetId) == null) return;
          var a = j.targetId,
            h = e
              ? (i || (i = d("LSIntEnum"))).ofNumber(0)
              : (i || (i = d("LSIntEnum"))).ofNumber(1);
          c("promiseDone")(
            g.runInTransaction(
              function (d) {
                return c("LSCustomUpdateMuteManagementStoredProcedure")(
                  c("LSFactory")(d),
                  { gameId: a, mutedUserId: b.threadKey, userActionType: h }
                );
              },
              "readwrite",
              void 0,
              void 0,
              f.id + ":55"
            )
          );
        },
        [g, b.threadKey, e, j]
      );
      a =
        b.adminMsgCtaTitle != null
          ? k.jsx(c("MWXLink.react"), {
              onClick: a,
              target: "_blank",
              children: b.adminMsgCtaTitle,
            })
          : void 0;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: a, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
