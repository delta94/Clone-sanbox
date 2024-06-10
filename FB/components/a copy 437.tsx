__d(
  "MWV2AdminMsgViewPoll.react",
  [
    "I64",
    "MWAdminMsgCtaLink.react",
    "MWAdminTextLayout.react",
    "ReQL",
    "ReQLSuspense",
    "justknobx",
    "react",
    "useMWChatPollXMAActionHandler",
    "useMWHasPollsVotingEnabled",
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
        e = (h || (h = c("useReStore")))(),
        g = d("ReQLSuspense").useFirst(
          function () {
            var a;
            return d("ReQL")
              .fromTableAscending(e.tables.admin_message_ctas)
              .getKeyRange(
                b.threadKey,
                b.messageId,
                (a = b.adminMsgCtaId) != null
                  ? a
                  : (i || (i = d("I64"))).neg_one
              );
          },
          [e, b],
          f.id + ":28"
        );
      a = c("useMWHasPollsVotingEnabled")(b.threadKey);
      var j = c("useMWChatPollXMAActionHandler")(),
        m = l(
          function () {
            j(
              g == null ? void 0 : g.targetId,
              g == null ? void 0 : g.targetTitle
            );
          },
          [
            g == null ? void 0 : g.targetId,
            g == null ? void 0 : g.targetTitle,
            j,
          ]
        );
      if (!c("justknobx")._("1987") || !a || g == null)
        return k.jsx(c("MWAdminTextLayout.react"), { message: b });
      a = g == null ? void 0 : g.title;
      m =
        a != null
          ? k.jsx(c("MWAdminMsgCtaLink.react"), { onClick: m, children: a })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: m, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
