__d(
  "MDSLockSvgIcon.react",
  ["MDSSvgIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsx(
        c("MDSSvgIcon.react"),
        babelHelpers["extends"]({}, a, {
          children: i.jsx("path", {
            clipRule: "evenodd",
            d: "M12.25 15.5a.25.25 0 00.25-.25V12a5.5 5.5 0 1111 0v3.25c0 .138.112.25.25.25h.75a2 2 0 012 2v9a2 2 0 01-2 2h-13a2 2 0 01-2-2v-9a2 2 0 012-2h.75zm3 0h5.5a.25.25 0 00.25-.25V12a3 3 0 10-6 0v3.25c0 .138.112.25.25.25z",
            fillRule: "evenodd",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import MDSSvgIcon from "MDSSvgIcon.react";
import React from "react";

interface MDSLockSvgIconProps {
  color?: string;
  size?: number;
}

const MDSLockSvgIcon: React.FC<MDSLockSvgIconProps> = (props) => {
  return (
    <MDSSvgIcon {...props}>
      <path
        clipRule="evenodd"
        d="M12.25 15.5a.25.25 0 00.25-.25V12a5.5 5.5 0 1111 0v3.25c0 .138.112.25.25.25h.75a2 2 0 012 2v9a2 2 0 01-2 2h-13a2 2 0 01-2-2v-9a2 2 0 012-2h.75zm3 0h5.5a.25.25 0 00.25-.25V12a3 3 0 10-6 0v3.25c0 .138.112.25.25.25z"
        fillRule="evenodd"
      />
    </MDSSvgIcon>
  );
};

MDSLockSvgIcon.displayName = `MDSLockSvgIcon [from ${MDSLockSvgIcon.name}]`;

export default MDSLockSvgIcon;
