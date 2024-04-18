// __d("CometAppNavigationEndSection.react", ["fbt", "CometTooltipGroup.react", "react"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = i || d("react");

//     function a(a) {
//         a = a.children;
//         return j.jsx(c("CometTooltipGroup.react"), {
//             children: j.jsx("div", {
//                 "aria-label": h._("__JHASH__bGEsEiRYp-X__JHASH__"),
//                 className: "x6s0dn4 x78zum5 x15zctf7 x1s65kcs x1n2onr6 x1ja2u2z",
//                 role: "navigation",
//                 children: a
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { FC } from 'react';
import CometTooltipGroup from './CometTooltipGroup'; // Replace with the actual import path

interface CometAppNavigationEndSectionProps {
  children: React.ReactNode;
}

const CometAppNavigationEndSection: FC<CometAppNavigationEndSectionProps> = ({ children }) => {
  return (
    <CometTooltipGroup>
      <div
        aria-label="Account Controls and Settings"
        className="x6s0dn4 x78zum5 x15zctf7 x1s65kcs x1n2onr6 x1ja2u2z"
        role="navigation"
      >
        {children}
      </div>
    </CometTooltipGroup>
  );
};

CometAppNavigationEndSection.displayName = `${CometAppNavigationEndSection.name} [from ${f.id}]`; // Replace f.id with the actual identifier

export default CometAppNavigationEndSection;
