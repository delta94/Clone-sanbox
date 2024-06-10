__d(
  "MWV2AdminMsgNotificationMessageManageNotifications.react",
  [
    "I64",
    "MWAdminTextLayout.react",
    "MWNotificationMessageManageNotificationsAdminMsgCta.react",
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
      var b = a.isOptOut,
        e = a.message,
        g = (h || (h = c("useReStore")))();
      a = d("ReQLSuspense").useFirst(
        function () {
          var a;
          return d("ReQL")
            .fromTableAscending(g.tables.admin_message_ctas)
            .getKeyRange(
              e.threadKey,
              e.messageId,
              (a = e.adminMsgCtaId) != null ? a : (i || (i = d("I64"))).neg_one
            );
        },
        [g, e],
        f.id + ":35"
      );
      var j = e.adminMsgCtaTitle,
        l = a == null ? void 0 : a.targetId;
      a =
        j != null && a != null && l != null
          ? k.jsx("div", {
              className: "x1rg5ohu x1s688f",
              children: k.jsx(
                c("MWNotificationMessageManageNotificationsAdminMsgCta.react"),
                { isOptOut: b, targetId: l, threadKey: e.threadKey, title: j }
              ),
            })
          : null;
      return k.jsx(c("MWAdminTextLayout.react"), { cta: a, message: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import I64 from "I64";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import MWNotificationMessageManageNotificationsAdminMsgCta from "MWNotificationMessageManageNotificationsAdminMsgCta.react";
import { ReQL, ReQLSuspense } from "ReQL";
import React from "react";
import { useReStore } from "useReStore";

interface MWV2AdminMsgNotificationMessageManageNotificationsProps {
  isOptOut: boolean;
  message: {
    threadKey: string;
    messageId: string;
    adminMsgCtaId?: string;
    adminMsgCtaTitle?: string;
  };
}

const MWV2AdminMsgNotificationMessageManageNotifications: React.FC<
  MWV2AdminMsgNotificationMessageManageNotificationsProps
> = ({ isOptOut, message }) => {
  const reStore = useReStore();
  const adminMessageCtas = ReQLSuspense.useFirst(
    () =>
      ReQL.fromTableAscending(reStore.tables.admin_message_ctas).getKeyRange(
        message.threadKey,
        message.messageId,
        message.adminMsgCtaId ?? I64.neg_one
      ),
    [reStore, message],
    "MWV2AdminMsgNotificationMessageManageNotifications.react:35"
  );

  const ctaTitle = message.adminMsgCtaTitle;
  const targetId = adminMessageCtas?.targetId;

  const cta =
    ctaTitle && adminMessageCtas && targetId ? (
      <div className="x1rg5ohu x1s688f">
        <MWNotificationMessageManageNotificationsAdminMsgCta
          isOptOut={isOptOut}
          targetId={targetId}
          threadKey={message.threadKey}
          title={ctaTitle}
        />
      </div>
    ) : null;

  return <MWAdminTextLayout cta={cta} message={message} />;
};

MWV2AdminMsgNotificationMessageManageNotifications.displayName = `MWV2AdminMsgNotificationMessageManageNotifications [from ${MWV2AdminMsgNotificationMessageManageNotifications.name}]`;

export default MWV2AdminMsgNotificationMessageManageNotifications;
