__d("CometSettingsBadge.react", ["CometBadge.react", "CometRelay", "CometSettingsBadgeQuery.graphql", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")),
        k = i.useState;

    function a(a) {
        a = a.isActive;
        var e = d("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("CometSettingsBadgeQuery.graphql"), {}),
            f = k(!1),
            g = f[0];
        f = f[1];
        a && !g && f(!0);
        if (g) return null;
        f = Boolean(e == null ? void 0 : (a = e.viewer) == null ? void 0 : a.device_switchable_account_has_notification);
        return f === !1 ? null : j.jsx(c("CometBadge.react"), {
            border: "white",
            color: "red",
            isProfileBadge: !0,
            size: 10
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { useState } from 'react';
import { CometBadge } from './CometBadge.react';
import { useLazyLoadQuery } from 'react-relay';
import { CometSettingsBadgeQuery } from './CometSettingsBadgeQuery.graphql';

const CometSettingsBadge = ({ isActive }) => {
  const data = useLazyLoadQuery(CometSettingsBadgeQuery, {});
  const [showBadge, setShowBadge] = useState(false);

  if (isActive && !showBadge) {
    setShowBadge(true);
  }

  if (showBadge) {
    return null;
  }

  const hasNotification = Boolean(data?.viewer?.device_switchable_account_has_notification);
  if (!hasNotification) {
    return null;
  }

  return (
    <CometBadge
      border="white"
      color="red"
      isProfileBadge={true}
      size={10}
    />
  );
};

export default CometSettingsBadge;
