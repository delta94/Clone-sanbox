__d(
  "MWXSpinner.react",
  ["CometProgressRingIndeterminate", "CometProgressRingIndeterminate", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var c = a.color;
      a = a.size;
      if (b("cr:5023") != null)
        return i.jsx(b("cr:5023"), { color: c, size: a });
      return b("CometProgressRingIndeterminate") != null
        ? i.jsx(b("CometProgressRingIndeterminate"), {
            color: c === "blue" ? "blue" : "grey",
            size: a <= 12 ? 12 : a < 32 ? 24 : 32,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import CometProgressRingIndeterminate from "CometProgressRingIndeterminate";

type SpinnerProps = {
  color: string;
  size: number;
};

const MWXSpinner: React.FC<SpinnerProps> = ({ color, size }) => {
  return (
    <CometProgressRingIndeterminate
      color={color === "blue" ? "blue" : "grey"}
      size={size <= 12 ? 12 : size < 32 ? 24 : 32}
    />
  );
};

MWXSpinner.displayName = MWXSpinner.name + " [from " + f.id + "]";

export default MWXSpinner;
