__d(
  "TetraCircleButton.react",
  ["CometCircleButton.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    b = i.forwardRef(a);
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      return i.jsx(
        c("CometCircleButton.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e;
  },
  98
);

import React, { forwardRef } from "react";
import CometCircleButton from "CometCircleButton.react";

interface TetraCircleButtonProps {
  [key: string]: any;
}

const TetraCircleButton = (
  props: TetraCircleButtonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const extendedProps = { ...props };
  return <CometCircleButton {...extendedProps} ref={ref} />;
};

TetraCircleButton.displayName =
  "TetraCircleButton [from TetraCircleButton.react]";

export default forwardRef<HTMLButtonElement, TetraCircleButtonProps>(
  TetraCircleButton
);
