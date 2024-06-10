__d(
  "CometLegacyListItemBase.react",
  ["joinClasses", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.addon,
        d = a.children,
        e = a.className,
        f = a.right;
      a = a.testid;
      return i.jsxs("div", {
        className: c("joinClasses")("x78zum5", e),
        "data-testid": void 0,
        children: [
          b != null
            ? i.jsx("div", {
                className: "x1cy8zhl x78zum5 xl56j7k xq8finb",
                children: b,
              })
            : null,
          i.jsx("div", {
            className: "xamitd3 x1r8uery x1iyjqo2 xs83m0k xeuugli",
            children: d,
          }),
          f != null
            ? i.jsx("div", {
                className: "x78zum5 xdt5ytf xl56j7k x16n37ib",
                children: f,
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import joinClasses from "joinClasses";

interface CometLegacyListItemBaseProps {
  addon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  right?: React.ReactNode;
  testid?: string;
}

const CometLegacyListItemBase: React.FC<CometLegacyListItemBaseProps> = ({
  addon,
  children,
  className,
  right,
  testid,
}) => {
  return (
    <div className={joinClasses("x78zum5", className)} data-testid={testid}>
      {addon && <div className="x1cy8zhl x78zum5 xl56j7k xq8finb">{addon}</div>}
      <div className="xamitd3 x1r8uery x1iyjqo2 xs83m0k xeuugli">
        {children}
      </div>
      {right && <div className="x78zum5 xdt5ytf xl56j7k x16n37ib">{right}</div>}
    </div>
  );
};

CometLegacyListItemBase.displayName =
  "CometLegacyListItemBase [from CometLegacyListItemBase.react]";

export default CometLegacyListItemBase;
