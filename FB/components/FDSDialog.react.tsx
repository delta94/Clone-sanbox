__d(
  "FDSDialog.react",
  [
    "BaseDialogLabelIDProvider",
    "FDSDialogContainer.react",
    "FDSDialogPage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    b = i.forwardRef(a);
    function a(a, b) {
      var e = a.anchorXStyle,
        f = a["aria-label"],
        g = a.disableClosingWithMask,
        h = a.header,
        j = a.onClose,
        k = a.size,
        l = a.testid;
      l = babelHelpers.objectWithoutPropertiesLoose(a, [
        "anchorXStyle",
        "aria-label",
        "disableClosingWithMask",
        "header",
        "onClose",
        "size",
        "testid",
      ]);
      return i.jsx(d("BaseDialogLabelIDProvider").BaseDialogLabelIDProvider, {
        children: i.jsx(c("FDSDialogContainer.react"), {
          anchorXStyle: e,
          "aria-label": f,
          disableClosingWithMask: g,
          onClose: j,
          ref: b,
          size: k,
          testid: void 0,
          children: i.jsx(
            c("FDSDialogPage.react"),
            babelHelpers["extends"]({ header: h }, l)
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e;
  },
  98
);

import { BaseDialogLabelIDProvider } from "BaseDialogLabelIDProvider";
import FDSDialogContainer from "FDSDialogContainer.react";
import FDSDialogPage from "FDSDialogPage.react";
import React, { forwardRef } from "react";

interface FDSDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorXStyle?: React.CSSProperties;
  "aria-label"?: string;
  disableClosingWithMask?: boolean;
  header?: React.ReactNode;
  onClose: () => void;
  size?: string;
  testid?: string;
}

const FDSDialog = forwardRef<HTMLDivElement, FDSDialogProps>((props, ref) => {
  const {
    anchorXStyle,
    "aria-label": ariaLabel,
    disableClosingWithMask,
    header,
    onClose,
    size,
    testid,
    ...rest
  } = props;

  return (
    <BaseDialogLabelIDProvider>
      <FDSDialogContainer
        anchorXStyle={anchorXStyle}
        aria-label={ariaLabel}
        disableClosingWithMask={disableClosingWithMask}
        onClose={onClose}
        ref={ref}
        size={size}
        testid={undefined}
      >
        <FDSDialogPage header={header} {...rest} />
      </FDSDialogContainer>
    </BaseDialogLabelIDProvider>
  );
});

FDSDialog.displayName = `${FDSDialog.name} [from FDSDialog.react]`;

export default FDSDialog;
