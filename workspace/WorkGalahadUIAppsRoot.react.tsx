import React from "react";
import fbt from "fbt";

const WorkGalahadUIAppsRoot = ({ children, onMouseEnter }) => {
  return (
    <div
      role="navigation"
      aria-label={fbt._("Workplace")}
      className="x2atdfe x1qjc9v5 x2t7q83 x9f619 x78zum5 x2lah0s xl56j7k x6ikm8r x1odjw0f x1l90r2v xyamay9 x13oubkp x1vjfegm x1rr5fae xkbpzyx x5yr21d"
      onMouseEnter={onMouseEnter}
    >
      <div className="xwmqs3e x78zum5 xh8yej3 x150jy0e x1e558r4">{children}</div>
    </div>
  );
};

WorkGalahadUIAppsRoot.displayName = `${WorkGalahadUIAppsRoot.name} [from ${f.id}]`;

export default WorkGalahadUIAppsRoot;

// __d("WorkGalahadUIAppsRoot.react", ["fbt", "react"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i = d("react");

//     function a(a) {
//         var b = a.children;
//         a = a.onMouseEnter;
//         return i.jsx("div", {
//             role: "navigation",
//             "aria-label": h._("Workplace"),
//             className: "x2atdfe x1qjc9v5 x2t7q83 x9f619 x78zum5 x2lah0s xl56j7k x6ikm8r x1odjw0f x1l90r2v xyamay9 x13oubkp x1vjfegm x1rr5fae xkbpzyx x5yr21d",
//             onMouseEnter: a,
//             children: i.jsx("div", {
//                 className: "xwmqs3e x78zum5 xh8yej3 x150jy0e x1e558r4",
//                 children: b
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);