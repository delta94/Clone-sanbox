__d("MXRDiv.react", ["react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
        var d = a.style;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["style"]);
        return h.jsx("div", babelHelpers["extends"]({}, a, c("stylex").spread(d), {
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);


import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import { spread } from 'stylex'; 

interface MXRDivProps extends HTMLProps<HTMLDivElement> {
  style?: React.CSSProperties;
  children?: ReactNode;
}

const MXRDiv: React.ForwardRefRenderFunction<HTMLDivElement, MXRDivProps> = (props, ref) => {
  const { style, ...rest } = props;

  return (
    <div {...rest} {...spread(style)} ref={ref} />
  );
};

export default forwardRef<HTMLDivElement, MXRDivProps>(MXRDiv);
