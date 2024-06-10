__d(
  "MWMessageRowUnreadMessagesIndicator.react",
  [
    "MWChatMessageUnreadIndicator.react",
    "MWPMessageListColumn.react",
    "MWV2MessageRowSimple.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = a.shouldRenderUnreadIndicator;
      return a === !0
        ? i.jsx(c("MWV2MessageRowSimple.react"), {
            children: i.jsx(
              d("MWPMessageListColumn.react").MWPMessageListColumnGrow,
              { children: i.jsx(c("MWChatMessageUnreadIndicator.react"), {}) }
            ),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import { MWChatMessageUnreadIndicator } from "MWChatMessageUnreadIndicator";
import { MWPMessageListColumnGrow } from "MWPMessageListColumn";
import { MWV2MessageRowSimple } from "MWV2MessageRowSimple";

type Props = {
  shouldRenderUnreadIndicator: boolean;
};

const MWMessageRowUnreadMessagesIndicator: React.FC<Props> = ({
  shouldRenderUnreadIndicator,
}) => {
  return shouldRenderUnreadIndicator ? (
    <MWV2MessageRowSimple>
      <MWPMessageListColumnGrow>
        <MWChatMessageUnreadIndicator />
      </MWPMessageListColumnGrow>
    </MWV2MessageRowSimple>
  ) : null;
};

MWMessageRowUnreadMessagesIndicator.displayName =
  MWMessageRowUnreadMessagesIndicator.name + " [from " + __filename + "]";

export default MWMessageRowUnreadMessagesIndicator;
