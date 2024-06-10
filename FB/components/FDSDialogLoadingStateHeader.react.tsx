__d(
  "FDSDialogLoadingStateHeader.react",
  [
    "fbt",
    "BaseDialogLabelIDProvider",
    "BaseDivider.react",
    "CometCircleButton.react",
    "FBIconCrossFilled24.svg.react",
    "react",
    "react-strict-dom",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react"),
      k = {
        headerContainer: { width: "xh8yej3", $$css: !0 },
        headerRow: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "x13a6bvl",
          marginStart: "x1d52u69",
          marginLeft: null,
          marginRight: null,
          marginEnd: "xktsk01",
          minHeight: "x879a55",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.onClose;
      a = a.withCloseButton;
      a = a === void 0 ? !0 : a;
      var e = d("BaseDialogLabelIDProvider").useDialogHeaderID();
      return j.jsxs(d("react-strict-dom").html.div, {
        style: k.headerContainer,
        children: [
          j.jsx(d("react-strict-dom").html.div, {
            id: e,
            style: k.headerRow,
            children: a
              ? j.jsx(c("CometCircleButton.react"), {
                  icon: c("FBIconCrossFilled24.svg.react"),
                  label: h._("__JHASH__tnRfHlva-bL__JHASH__"),
                  onPress: b,
                  size: 36,
                  testid: void 0,
                })
              : null,
          }),
          j.jsx(c("BaseDivider.react"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { _ as fbt } from "fbt";
import { useDialogHeaderID } from "BaseDialogLabelIDProvider";
import BaseDivider from "BaseDivider.react";
import CometCircleButton from "CometCircleButton.react";
import FBIconCrossFilled24 from "FBIconCrossFilled24.svg.react";
import React from "react";
import { html as strictDomHtml } from "react-strict-dom";

const styles = {
  headerContainer: { width: "xh8yej3", $$css: true },
  headerRow: {
    alignItems: "x6s0dn4",
    display: "x78zum5",
    flexShrink: "x2lah0s",
    justifyContent: "x13a6bvl",
    marginStart: "x1d52u69",
    marginLeft: null,
    marginRight: null,
    marginEnd: "xktsk01",
    minHeight: "x879a55",
    $$css: true,
  },
};

interface Props {
  onClose: () => void;
  withCloseButton?: boolean;
}

const FDSDialogLoadingStateHeader: React.FC<Props> = ({
  onClose,
  withCloseButton = true,
}) => {
  const headerID = useDialogHeaderID();

  return (
    <strictDomHtml.div style={styles.headerContainer}>
      <strictDomHtml.div id={headerID} style={styles.headerRow}>
        {withCloseButton && (
          <CometCircleButton
            icon={FBIconCrossFilled24}
            label={fbt("__JHASH__tnRfHlva-bL__JHASH__")}
            onPress={onClose}
            size={36}
            testid={undefined}
          />
        )}
      </strictDomHtml.div>
      <BaseDivider />
    </strictDomHtml.div>
  );
};

FDSDialogLoadingStateHeader.displayName = `FDSDialogLoadingStateHeader [from ${module.id}]`;

export default FDSDialogLoadingStateHeader;
