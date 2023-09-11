// __d("CometTypeaheadHelperText.react", ["TetraTextPairing.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         a = a.text;
//         return h.jsx("div", {
//             className: "x1xmf6yo",
//             children: h.jsx(c("TetraTextPairing.react"), {
//                 level: 4,
//                 meta: a,
//                 metaColor: "secondary"
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React from "react";
import { TetraTextPairing } from "TetraTextPairing.react";

const CometTypeaheadHelperText = ({ text }) => {
return (
<div className="x1xmf6yo">
<TetraTextPairing level={4} meta={text} metaColor="secondary" />
</div>
);
};

export default CometTypeaheadHelperText;