__d(
  "MWV2MediaViewerFallback.react",
  [
    "fbt",
    "MWV2MediaViewerContainer.react",
    "MWXCircleButton.react",
    "MWXIconCross",
    "MWXRow.react",
    "MWXRowItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react");
    function a(a) {
      var b = a.onClose;
      a = a.shouldShowMessengerLogo;
      return j.jsx(c("MWV2MediaViewerContainer.react"), {
        actions: j.jsx(c("MWXRow.react"), {
          paddingTop: 0,
          spacing: 8,
          children: j.jsx(c("MWXRowItem.react"), {
            children: j.jsx(c("MWXCircleButton.react"), {
              color: "white",
              icon: c("MWXIconCross"),
              label: h._("__JHASH__tnRfHlva-bL__JHASH__"),
              onPress: b,
              size: 36,
              type: "dark-overlay",
            }),
          }),
        }),
        shouldShowMessengerLogo: a,
        children: null,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React from "react";
import { _ } from "fbt";
import MWV2MediaViewerContainer from "MWV2MediaViewerContainer.react";
import MWXCircleButton from "MWXCircleButton.react";
import MWXIconCross from "MWXIconCross";
import MWXRow from "MWXRow.react";
import MWXRowItem from "MWXRowItem.react";

type Props = {
  onClose: () => void;
  shouldShowMessengerLogo: boolean;
};

const MWV2MediaViewerFallback: React.FC<Props> = ({
  onClose,
  shouldShowMessengerLogo,
}) => {
  return (
    <MWV2MediaViewerContainer
      actions={
        <MWXRow paddingTop={0} spacing={8}>
          <MWXRowItem>
            <MWXCircleButton
              color="white"
              icon={<MWXIconCross />}
              label={_("__JHASH__tnRfHlva-bL__JHASH__")}
              onPress={onClose}
              size={36}
              type="dark-overlay"
            />
          </MWXRowItem>
        </MWXRow>
      }
      shouldShowMessengerLogo={shouldShowMessengerLogo}
    >
      {null}
    </MWV2MediaViewerContainer>
  );
};

MWV2MediaViewerFallback.displayName = `${MWV2MediaViewerFallback.name} [from 226]`;

export default MWV2MediaViewerFallback;
