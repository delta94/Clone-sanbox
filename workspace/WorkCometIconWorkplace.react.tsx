__d("WorkCometIconWorkplace.react", ["CometSVGIcon.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        return i.jsx(c("CometSVGIcon.react"), babelHelpers["extends"]({
            viewBox: "0 0 32 32"
        }, a, {
            children: i.jsx("path", {
                d: "M16.57,2.29A13.88,13.88,0,0,0,11,3.42a14.28,14.28,0,0,0,0,26.31,14.06,14.06,0,0,0,5.56,1.13,14.3,14.3,0,0,0,5.25-1l-1.08-2.73a11.1,11.1,0,0,1-4.17.8,11.36,11.36,0,0,1,0-22.71,9.6,9.6,0,0,1,8,14.91L22.1,14c-.37-.9-.81-2.25-2.47-2.25s-2.1,1.36-2.46,2.25l-2.29,5.68-3.09-7.78H8.55l3.84,9.46c.39,1,.82,2.26,2.49,2.26s2.08-1.3,2.47-2.26l2.28-5.62,2.29,5.62c.46,1.16.95,2.26,2.47,2.26a2.78,2.78,0,0,0,2.14-1.15,12.54,12.54,0,0,0-10-20.16Z"
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { JSXElementConstructor, SVGProps } from 'react';
import CometSVGIcon from "CometSVGIcon"

interface WorkCometIconProps extends SVGProps<SVGSVGElement> {}

const WorkCometIconWorkplace: JSXElementConstructor<WorkCometIconProps> = (props: WorkCometIconProps) => {
  return (
    <CometSVGIcon
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16.57,2.29A13.88,13.88,0,0,0,11,3.42a14.28,14.28,0,0,0,0,26.31,14.06,14.06,0,0,0,5.56,1.13,14.3,14.3,0,0,0,5.25-1l-1.08-2.73a11.1,11.1,0,0,1-4.17.8,11.36,11.36,0,0,1,0-22.71,9.6,9.6,0,0,1,8,14.91L22.1,14c-.37-.9-.81-2.25-2.47-2.25s-2.1,1.36-2.46,2.25l-2.29,5.68-3.09-7.78H8.55l3.84,9.46c.39,1,.82,2.26,2.49,2.26s2.08-1.3,2.47-2.26l2.28-5.62,2.29,5.62c.46,1.16.95,2.26,2.47,2.26a2.78,2.78,0,0,0,2.14-1.15,12.54,12.54,0,0,0-10-20.16Z"
      />
    </CometSVGIcon>
  );
};

WorkCometIconWorkplace.displayName = `${WorkCometIconWorkplace.name} [from ${f.id}]`;

export default WorkCometIconWorkplace;
