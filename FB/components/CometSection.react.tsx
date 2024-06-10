__d(
  "CometSection.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");

    function a(a, b) {
      var c = a.children,
        d = a.className,
        e = a.name,
        f = a.role;
      a = a.testid;
      return i.jsx("div", {
        "aria-label": e,
        className: d,
        "data-testid": void 0,
        ref: b,
        role: f,
        children: c,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
import React, { forwardRef, ReactNode } from "react";

interface CometSectionProps {
  children: ReactNode;
  className?: string;
  name?: string;
  role?: string;
  testid?: string;
}

const CometSection = (
  { children, className, name, role, testid }: CometSectionProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div
      aria-label={name}
      className={className}
      data-testid={testid}
      ref={ref}
      role={role}
    >
      {children}
    </div>
  );
};

CometSection.displayName = "CometSection [from CometSection.react]";

export default forwardRef<HTMLDivElement, CometSectionProps>(CometSection);
