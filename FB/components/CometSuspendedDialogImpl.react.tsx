__d(
  "CometSuspendedDialogImpl.react",
  ["CometPlaceholder.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.dialog,
        d = a.dialogProps,
        e = a.fallback,
        f = a.onClose;
      a = a.onHide;
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: e(f),
        children: i.jsx(
          b,
          babelHelpers["extends"]({}, d, { onClose: f, onHide: a })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import CometPlaceholder from "CometPlaceholder.react";

interface Props {
  dialog: React.ComponentType<any>;
  dialogProps: any;
  fallback: (onClose: () => void) => React.ReactNode;
  onClose: () => void;
  onHide?: () => void;
}

const CometSuspendedDialogImpl: React.FC<Props> = ({
  dialog: Dialog,
  dialogProps,
  fallback,
  onClose,
  onHide,
}) => {
  return (
    <CometPlaceholder fallback={fallback(onClose)}>
      <Dialog {...dialogProps} onClose={onClose} onHide={onHide} />
    </CometPlaceholder>
  );
};

CometSuspendedDialogImpl.displayName = `CometSuspendedDialogImpl [from ${module.id}]`;

export default CometSuspendedDialogImpl;
