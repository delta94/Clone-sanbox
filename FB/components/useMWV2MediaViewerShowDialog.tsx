__d(
  "useMWV2MediaViewerShowDialog",
  [
    "JSResourceForInteraction",
    "MWV2MediaViewerFallback.react",
    "react",
    "useMWXLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useEffect;
    function k(a) {
      return i.jsx(c("MWV2MediaViewerFallback.react"), { onClose: a });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = c("useMWXLazyDialog")(
          c("JSResourceForInteraction")("MWV2MediaViewer.react").__setRef(
            "useMWV2MediaViewerShowDialog"
          ),
          k
        ),
        d = b[0],
        e = b[1];
      j(
        function () {
          a || e();
        },
        [e, a]
      );
      return [d, e];
    }
    g["default"] = a;
  },
  98
);

import React, { useEffect } from "react";
import { JSResourceForInteraction } from "JSResourceForInteraction";
import { MWV2MediaViewerFallback } from "MWV2MediaViewerFallback";
import { useMWXLazyDialog } from "useMWXLazyDialog";

type DialogClosureType = () => void;

function FallbackComponent({ onClose }: { onClose: DialogClosureType }) {
  return <MWV2MediaViewerFallback onClose={onClose} />;
}

FallbackComponent.displayName = `${FallbackComponent.name} [from MWV2MediaViewerFallback]`;

export default function useMWV2MediaViewerShowDialog(
  closeDialogCondition: boolean
): [DialogClosureType, DialogClosureType] {
  const [openDialog, closeDialog] = useMWXLazyDialog(
    JSResourceForInteraction("MWV2MediaViewer.react").__setRef(
      "useMWV2MediaViewerShowDialog"
    ),
    FallbackComponent
  );

  useEffect(() => {
    if (!closeDialogCondition) {
      closeDialog();
    }
  }, [closeDialog, closeDialogCondition]);

  return [openDialog, closeDialog];
}
