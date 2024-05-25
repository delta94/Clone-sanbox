__d(
  "MWVerticalRhythm",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      a = a.height;
      a = a;
      return i.jsx("div", { style: { height: String(a) + "px" } });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";

type MWVerticalRhythmProps = {
  height: number;
};

const MWVerticalRhythm: React.FC<MWVerticalRhythmProps> = ({ height }) => {
  return <div style={{ height: `${height}px` }} />;
};

MWVerticalRhythm.displayName = `MWVerticalRhythm [from ${__filename}]`;

export default MWVerticalRhythm;
