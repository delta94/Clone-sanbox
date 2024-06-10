__d(
  "MWV2AdminMsgDMLearnMore.react",
  [
    "fbt",
    "IGDDisappearingMessagesStrings",
    "MWAdminTextLayout.react",
    "MWXLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react");
    function a(a) {
      a = a.message;
      return j.jsx(c("MWAdminTextLayout.react"), {
        cta: j.jsx(c("MWXLink.react"), {
          href: d("IGDDisappearingMessagesStrings").LEARN_MORE_LINK,
          target: "_blank",
          children: h._("__JHASH__t0_WbzixXKp__JHASH__"),
        }),
        message: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React from "react";
import { LEARN_MORE_LINK } from "IGDDisappearingMessagesStrings";
import MWAdminTextLayout from "MWAdminTextLayout.react";
import MWXLink from "MWXLink.react";
import { fbt } from "fbt";

interface MWV2AdminMsgDMLearnMoreProps {
  message: string;
}

const MWV2AdminMsgDMLearnMore: React.FC<MWV2AdminMsgDMLearnMoreProps> = ({
  message,
}) => {
  return (
    <MWAdminTextLayout
      cta={
        <MWXLink href={LEARN_MORE_LINK} target="_blank">
          {fbt(
            "Learn more",
            "Button to learn more about disappearing messages"
          )}
        </MWXLink>
      }
      message={message}
    />
  );
};

MWV2AdminMsgDMLearnMore.displayName =
  "MWV2AdminMsgDMLearnMore [from " + f.id + "]";

export default MWV2AdminMsgDMLearnMore;
