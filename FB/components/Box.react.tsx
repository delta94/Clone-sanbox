__d("Box.react", ["react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = {
            box: {
                alignItems: "x1qjc9v5",
                boxSizing: "x9f619",
                display: "x78zum5",
                flexBasis: "xdl72j9",
                flexDirection: "xdt5ytf",
                flexShrink: "x2lah0s",
                minHeight: "x2lwn1j",
                minWidth: "xeuugli",
                position: "x1n2onr6",
                zIndex: "x1ja2u2z",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.as;
        d = d === void 0 ? "div" : d;
        var e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["as", "xstyle"]);
        return j.jsx(d, babelHelpers["extends"]({}, a, {
            className: (h || (h = c("stylex")))(k.box, e),
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b
}), 98);


import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { stylex } from 'stylex'; // Assuming stylex import

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: string;
  xstyle?: Record<string, any>;
  children?: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const styles = {
  box: {
    alignItems: "x1qjc9v5",
    boxSizing: "x9f619",
    display: "x78zum5",
    flexBasis: "xdl72j9",
    flexDirection: "xdt5ytf",
    flexShrink: "x2lah0s",
    minHeight: "x2lwn1j",
    minWidth: "xeuugli",
    position: "x1n2onr6",
    zIndex: "x1ja2u2z",
    $$css: true
  }
};

const Box: React.ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  { as: Component = 'div', xstyle, children, ...rest },
  ref
) => {
  return (
    <Component
      {...rest}
      className={stylex(styles.box, xstyle)}
      ref={ref}
    >
      {children}
    </Component>
  );
};

Box.displayName = `${Box.name} [from ${module.id}]`;

export default forwardRef(Box);
