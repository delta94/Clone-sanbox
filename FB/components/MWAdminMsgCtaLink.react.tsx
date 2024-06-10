__d(
  "MWAdminMsgCtaLink.react",
  ["MWXLink.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.xstyle,
        d = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle", "children"]);
      return i.jsx(
        c("MWXLink.react"),
        babelHelpers["extends"](
          {
            style: { color: "var(--mwp-primary-theme-color)" },
            weight: "bold",
            xstyle: b,
          },
          a,
          { children: d }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import MWXLink from "MWXLink.react";

interface MWAdminMsgCtaLinkProps {
  xstyle?: React.CSSProperties;
  children: React.ReactNode;
  [key: string]: any; // for any other props
}

const MWAdminMsgCtaLink: React.FC<MWAdminMsgCtaLinkProps> = ({
  xstyle,
  children,
  ...props
}) => {
  return (
    <MWXLink
      style={{ color: "var(--mwp-primary-theme-color)" }}
      weight="bold"
      xstyle={xstyle}
      {...props}
    >
      {children}
    </MWXLink>
  );
};

MWAdminMsgCtaLink.displayName = `MWAdminMsgCtaLink [from ${module.id}]`;

export default MWAdminMsgCtaLink;
