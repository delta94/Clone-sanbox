__d(
  "useMWXLazyDialog",
  [
    "MWXDialogLoadingState.react",
    "react",
    "tracePolicyFromResource",
    "useBaseLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || c("react"),
      j = function (a) {
        return i.jsx(c("MWXDialogLoadingState.react"), { onClose: a });
      };
    function a(a, b, d) {
      var e = c("tracePolicyFromResource")("mwp.dialog", a);
      return c("useBaseLazyDialog")(a, (a = b) != null ? a : j, e, d);
    }
    g["default"] = a;
  },
  98
);

import MWXDialogLoadingState from "MWXDialogLoadingState.react";
import React from "react";
import tracePolicyFromResource from "tracePolicyFromResource";
import useBaseLazyDialog from "useBaseLazyDialog";

type DialogComponent = React.ComponentType<any>;

const DefaultLoadingComponent: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => <MWXDialogLoadingState onClose={onClose} />;

function useMWXLazyDialog(
  dialogResource: DialogComponent,
  LoadingComponent: DialogComponent = DefaultLoadingComponent,
  dialogProps?: any
) {
  const tracePolicy = tracePolicyFromResource("mwp.dialog", dialogResource);
  return useBaseLazyDialog(
    dialogResource,
    LoadingComponent,
    tracePolicy,
    dialogProps
  );
}

export default useMWXLazyDialog;
