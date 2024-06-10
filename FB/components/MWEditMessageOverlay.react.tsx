__d(
  "MWEditMessageOverlay.react",
  ["react", "useMAWEditMessageData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = a.messageId;
      var b = c("useMAWEditMessageData")(),
        d = b != null;
      a = a != null && a === (b == null ? void 0 : b.messageId);
      return !d || a
        ? null
        : i.jsx("div", {
            className:
              "xyl4keb x5yr21d x1ks1olk x10l6tqk x17qophe x13vifvy xh8yej3 x1vjfegm",
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import useMAWEditMessageData from "useMAWEditMessageData";

interface MWEditMessageOverlayProps {
  messageId: string;
}

const MWEditMessageOverlay: React.FC<MWEditMessageOverlayProps> = ({
  messageId,
}) => {
  const editMessageData = useMAWEditMessageData();
  const hasEditMessageData = editMessageData != null;
  const isEditingMessage =
    messageId != null && messageId === editMessageData?.messageId;

  if (!hasEditMessageData || isEditingMessage) {
    return null;
  }

  return (
    <div className="xyl4keb x5yr21d x1ks1olk x10l6tqk x17qophe x13vifvy xh8yej3 x1vjfegm"></div>
  );
};

MWEditMessageOverlay.displayName = `MWEditMessageOverlay [from ${MWEditMessageOverlay.name}]`;

export default MWEditMessageOverlay;
