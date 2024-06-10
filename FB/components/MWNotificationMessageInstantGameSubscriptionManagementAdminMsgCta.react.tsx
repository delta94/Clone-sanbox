__d(
  "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.react",
  [
    "I64",
    "LSFactory",
    "LSIntEnum",
    "LSUpdateBotSubscriptionStoredProcedure",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "promiseDone",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = k || (k = d("react")),
      m = k.useCallback;
    function a(a) {
      var b = a.message,
        e = a.shouldSubscribe,
        g = (h || (h = c("useReStore")))(),
        k = (i || (i = d("I64"))).to_string(b.threadKey),
        n = m(
          function () {
            var a = e
              ? (j || (j = d("LSIntEnum"))).ofNumber(0)
              : (j || (j = d("LSIntEnum"))).ofNumber(1);
            c("promiseDone")(
              g.runInTransaction(
                function (b) {
                  return c("LSUpdateBotSubscriptionStoredProcedure")(
                    c("LSFactory")(b),
                    {
                      threadKey: (i || (i = d("I64"))).of_string(k),
                      userActionType: a,
                    }
                  );
                },
                "readwrite",
                void 0,
                void 0,
                f.id + ":41"
              )
            );
          },
          [g, k, e]
        );
      a =
        b.adminMsgCtaTitle != null
          ? l.jsx(c("MWXLink.react"), {
              onClick: function () {
                return n();
              },
              target: "_blank",
              children: b.adminMsgCtaTitle,
            })
          : void 0;
      return l.jsx(c("MWAdminTextLayout.react"), { cta: a, message: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
import React, { useCallback } from "react";
import { I64 } from "I64";
import { LSFactory } from "LSFactory";
import { LSIntEnum } from "LSIntEnum";
import { LSUpdateBotSubscriptionStoredProcedure } from "LSUpdateBotSubscriptionStoredProcedure";
import { MWAdminTextLayout } from "MWAdminTextLayout.react";
import { MWXLink } from "MWXLink.react";
import { promiseDone } from "promiseDone";
import { useReStore } from "useReStore";

interface Message {
  threadKey: string;
  adminMsgCtaTitle?: string | null;
}

interface Props {
  message: Message;
  shouldSubscribe: boolean;
}

const MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta: React.FC<
  Props
> = ({ message, shouldSubscribe }) => {
  const { threadKey, adminMsgCtaTitle } = message;
  const reStore = useReStore();
  const threadKeyString = I64.to_string(threadKey);

  const handleClick = useCallback(() => {
    const userActionType = shouldSubscribe
      ? LSIntEnum.ofNumber(0)
      : LSIntEnum.ofNumber(1);

    promiseDone(
      reStore.runInTransaction(
        (db: any) =>
          LSUpdateBotSubscriptionStoredProcedure(LSFactory(db), {
            threadKey: I64.of_string(threadKeyString),
            userActionType,
          }),
        "readwrite"
      )
    );
  }, [reStore, threadKeyString, shouldSubscribe]);

  const cta =
    adminMsgCtaTitle != null ? (
      <MWXLink onClick={handleClick} target="_blank">
        {adminMsgCtaTitle}
      </MWXLink>
    ) : undefined;

  return <MWAdminTextLayout cta={cta} message={message} />;
};

MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta.displayName =
  "MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta [from MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta]";

export default MWNotificationMessageInstantGameSubscriptionManagementAdminMsgCta;
