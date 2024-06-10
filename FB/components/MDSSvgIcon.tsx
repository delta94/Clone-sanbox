__d(
  "MDSSvgIcon.react",
  ["CometSVGIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.children,
        d = a.color,
        e = a.dataTestId;
      e = a.inline;
      e = e === void 0 ? !1 : e;
      var f = a.size;
      f = f === void 0 ? 24 : f;
      a = a.viewBox;
      a = a === void 0 ? "0 0 36 36" : a;
      return i.jsx(c("CometSVGIcon.react"), {
        color: d,
        "data-testid": void 0,
        inline: e,
        size: f,
        viewBox: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import CometSVGIcon from "CometSVGIcon.react";
import React from "react";

interface MDSSvgIconProps {
  children: React.ReactNode;
  color?: string;
  dataTestId?: string;
  inline?: boolean;
  size?: number;
  viewBox?: string;
}

const MDSSvgIcon: React.FC<MDSSvgIconProps> = ({
  children,
  color,
  dataTestId,
  inline = false,
  size = 24,
  viewBox = "0 0 36 36",
}) => {
  return (
    <CometSVGIcon
      color={color}
      data-testid={dataTestId}
      inline={inline}
      size={size}
      viewBox={viewBox}
    >
      {children}
    </CometSVGIcon>
  );
};

MDSSvgIcon.displayName = `MDSSvgIcon [from ${MDSSvgIcon.name}]`;

export default MDSSvgIcon;
