__d("WorkGalahadAppTabKeyUpdatesBadgeRenderer.react", ["WorkGalahadUIBaseAppTabBadge.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = 0;
        return i.jsx(c("WorkGalahadUIBaseAppTabBadge.react"), babelHelpers["extends"]({}, a, {
            count: b ? 1 : 0,
            showDot: !0
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { FC } from 'react';
import WorkGalahadUIBaseAppTabBadge from 'WorkGalahadUIBaseAppTabBadge.react';



const WorkGalahadAppTabKeyUpdatesBadge= (props) => {
  const count = 0; 
  return (
    <WorkGalahadUIBaseAppTabBadge
      {...props}
      count={count ? 1 : 0}
      showDot={true}
    />
  );
};

WorkGalahadAppTabKeyUpdatesBadge.displayName = `${WorkGalahadAppTabKeyUpdatesBadge.name} [from ${98}]`;

export default WorkGalahadAppTabKeyUpdatesBadge;
