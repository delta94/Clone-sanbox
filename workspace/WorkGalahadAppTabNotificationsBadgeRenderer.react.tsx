__d("WorkGalahadAppTabNotificationsBadgeRenderer.react", ["WorkGalahadNotificationsBadge.react", "WorkGalahadUIBaseAppTabBadge.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = d("WorkGalahadNotificationsBadge.react").useCount();
        return i.jsx(c("WorkGalahadUIBaseAppTabBadge.react"), babelHelpers["extends"]({}, a, {
            count: b,
            showDot: !1
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React from 'react';
import { useCount as useNotificationsCount } from 'WorkGalahadNotificationsBadge.react';
import WorkGalahadUIBaseAppTabBadge from 'WorkGalahadUIBaseAppTabBadge.react';

interface Props {
  count: number;
  hovered?: boolean;
  maxCount?: number;
  selected?: boolean;
  showDot?: boolean;
  useGreyBadging?: boolean;
}

const WorkGalahadAppTabNotificationsBadgeRenderer: React.FC<Props> = (props: Props) => {
  const notificationsCount = useNotificationsCount();

  return (
    <WorkGalahadUIBaseAppTabBadge
      {...props}
      count={notificationsCount}
      showDot={false}
    />
  );
};

WorkGalahadAppTabNotificationsBadgeRenderer.displayName = `${WorkGalahadAppTabNotificationsBadgeRenderer.name} [from WorkGalahadAppTabNotificationsBadgeRenderer]`;

export default WorkGalahadAppTabNotificationsBadgeRenderer;


