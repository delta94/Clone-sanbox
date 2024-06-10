__d(
  "MWAdminTextLayout.react",
  [
    "CometTextWithEntities.react",
    "LSMessagingThreadTypeUtil",
    "MAWVault",
    "MWChatTextTransform",
    "ReQL",
    "ReQLSuspense",
    "react",
    "useReStore",
    "useStringWithSubstitutions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function a(a) {
      var b = a.cta,
        e = a.message,
        g = (h || (h = c("useReStore")))();
      a =
        (a = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableAscending(g.tables.threads, ["threadType"])
              .getKeyRange(e.threadKey);
          },
          [g, e.threadKey],
          f.id + ":29"
        )) == null
          ? void 0
          : a.threadType;
      a = a == null ? !1 : d("LSMessagingThreadTypeUtil").isArmadilloSecure(a);
      var i = e.text == null ? null : d("MAWVault").unvault(e.text);
      a =
        (a = d("useStringWithSubstitutions").useStringWithSubstitutions(
          a ? i : null,
          e.threadKey
        )) != null
          ? a
          : i;
      if (a != null)
        if (b != null)
          return j.jsxs(j.Fragment, {
            children: [
              j.jsx(c("CometTextWithEntities.react"), {
                text: a,
                transforms: d("MWChatTextTransform").textTransformsNoVault,
              }),
              " ",
              b,
            ],
          });
        else
          return j.jsx(c("CometTextWithEntities.react"), {
            text: a,
            transforms: d("MWChatTextTransform").textTransformsNoVault,
          });
      else if (b != null) return b;
      else return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { FC, Fragment } from "react";
import { CometTextWithEntities } from "CometTextWithEntities.react";
import { isArmadilloSecure } from "LSMessagingThreadTypeUtil";
import { unvault } from "MAWVault";
import { textTransformsNoVault } from "MWChatTextTransform";
import { fromTableAscending } from "ReQL";
import { useFirst as useReQLSuspenseFirst } from "ReQLSuspense";
import { useReStore } from "useReStore";
import { useStringWithSubstitutions } from "useStringWithSubstitutions";

interface Message {
  cta?: React.ReactNode;
  message: {
    threadKey: string;
    text?: string | null;
  };
}

const MWAdminTextLayout: FC<Message> = ({ cta, message }) => {
  const reStore = useReStore();

  const threadType = useReQLSuspenseFirst(
    () =>
      fromTableAscending(reStore.tables.threads, ["threadType"]).getKeyRange(
        message.threadKey
      ),
    [reStore, message.threadKey],
    `${MWAdminTextLayout.displayName}:29`
  )?.threadType;

  const isSecure = threadType != null ? isArmadilloSecure(threadType) : false;
  const messageText = message.text == null ? null : unvault(message.text);

  const text =
    useStringWithSubstitutions(
      isSecure ? messageText : null,
      message.threadKey
    ) ?? messageText;

  if (text != null) {
    if (cta != null) {
      return (
        <Fragment>
          <CometTextWithEntities
            text={text}
            transforms={textTransformsNoVault}
          />{" "}
          {cta}
        </Fragment>
      );
    } else {
      return (
        <CometTextWithEntities text={text} transforms={textTransformsNoVault} />
      );
    }
  } else if (cta != null) {
    return <>{cta}</>;
  } else {
    return null;
  }
};

MWAdminTextLayout.displayName = `MWAdminTextLayout [from Meta]`;

export default MWAdminTextLayout;
