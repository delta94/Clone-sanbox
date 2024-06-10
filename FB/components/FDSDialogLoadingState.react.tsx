__d(
  "FDSDialogLoadingState.react",
  [
    "fbt",
    "FDSDialog.react",
    "FDSDialogLoadingStateContext",
    "FDSDialogLoadingStateHeader.react",
    "FDSDialogLoadingStateImpl.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || d("react");
    function a(a) {
      var b = a["aria-label"],
        d = a.onClose;
      a = a.withCloseButton;
      return j.jsx(c("FDSDialogLoadingStateContext").Provider, {
        value: !0,
        children: j.jsx(c("FDSDialog.react"), {
          "aria-label":
            (b = b) != null ? b : h._("__JHASH__6lD-XyRyuHe__JHASH__"),
          footer: null,
          header: j.jsx(c("FDSDialogLoadingStateHeader.react"), {
            onClose: d,
            withCloseButton: a,
          }),
          onClose: d,
          children: j.jsx(c("FDSDialogLoadingStateImpl.react"), {}),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { fbt } from "fbt";
import FDSDialog from "FDSDialog.react";
import FDSDialogLoadingStateContext from "FDSDialogLoadingStateContext";
import FDSDialogLoadingStateHeader from "FDSDialogLoadingStateHeader.react";
import FDSDialogLoadingStateImpl from "FDSDialogLoadingStateImpl.react";
import React from "react";

interface FDSDialogLoadingStateProps {
  "aria-label"?: string;
  onClose: () => void;
  withCloseButton?: boolean;
}

const FDSDialogLoadingState: React.FC<FDSDialogLoadingStateProps> = ({
  "aria-label": ariaLabel,
  onClose,
  withCloseButton,
}) => {
  return (
    <FDSDialogLoadingStateContext.Provider value={true}>
      <FDSDialog
        aria-label={ariaLabel ?? fbt._("__JHASH__6lD-XyRyuHe__JHASH__")}
        footer={null}
        header={
          <FDSDialogLoadingStateHeader
            onClose={onClose}
            withCloseButton={withCloseButton}
          />
        }
        onClose={onClose}
      >
        <FDSDialogLoadingStateImpl />
      </FDSDialog>
    </FDSDialogLoadingStateContext.Provider>
  );
};

FDSDialogLoadingState.displayName = `${FDSDialogLoadingState.name} [from FDSDialogLoadingState.react]`;

export default FDSDialogLoadingState;
