// __d("CometHomeCreateOrMegaMenuJewel.react", ["CometHomeCreateJewel.react", "CometMegaMenuJewel.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || d("react");

//     function a() {
//         return i.jsxs(i.Fragment, {
//             children: [i.jsx("div", {
//                 className: "x9e5oc1",
//                 children: i.jsx(c("CometMegaMenuJewel.react"), {})
//             }), i.jsx("div", {
//                 className: "xma1kzc",
//                 children: i.jsx(c("CometHomeCreateJewel.react"), {})
//             })]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { FC } from "react";
import CometHomeCreateJewel from "path-to-CometHomeCreateJewel"; // Update path accordingly
import CometMegaMenuJewel from "path-to-CometMegaMenuJewel"; // Update path accordingly

interface CometHomeCreateOrMegaMenuJewelProps {}

const CometHomeCreateOrMegaMenuJewel: FC<CometHomeCreateOrMegaMenuJewelProps> = () => {
  return (
    <>
      <div className="x9e5oc1">
        <CometMegaMenuJewel />
      </div>
      <div className="xma1kzc">
        <CometHomeCreateJewel />
      </div>
    </>
  );
};

export default CometHomeCreateOrMegaMenuJewel;
