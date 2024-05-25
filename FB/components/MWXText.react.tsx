__d(
  "MWXText.react",
  ["cr:4600", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    c = i.forwardRef(a);
    function a(a, c) {
      a = babelHelpers["extends"]({}, a);
      return i.jsx(b("cr:4600"), babelHelpers["extends"]({ ref: c }, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = c;
    g["default"] = e;
  },
  98
);

import React, { forwardRef, HTMLProps } from "react";

type MWXTextProps = HTMLProps<HTMLDivElement>;
import MWXTextImpl from "cr:4600";

const MWXText: React.ForwardRefRenderFunction<HTMLDivElement, MWXTextProps> = (
  props,
  ref
) => {
  return <MWXTextImpl {...props} ref={ref} />;
};

MWXText.displayName = `MWXText [from ${__filename}]`;

export default forwardRef(MWXText);
