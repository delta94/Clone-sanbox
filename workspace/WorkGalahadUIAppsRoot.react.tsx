__d("WorkGalahadUIAppsRoot.react", ["cr:6863", "react"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = h || d("react");

  function a(a) {
    var c = a.children;
    a = a.onMouseEnter;
    return i.jsx(b("cr:6863").GeminiNavigationNavArea, {
      onMouseEnter: a,
      children: c
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";
  g["default"] = a
}), 98);

import React from 'react';
import { GeminiNavigationNavArea } from 'GeminiLayoutNonResponsivenessNavigationExternal';

const WorkGalahadUIAppsRoot: React.FC<{ onMouseEnter?: React.MouseEventHandler<HTMLElement>; children: React.ReactNode }> = ({
  children,
  onMouseEnter,
}) => {
  return <GeminiNavigationNavArea onMouseEnter={onMouseEnter}>{children}</GeminiNavigationNavArea>;
};

WorkGalahadUIAppsRoot.displayName =
  WorkGalahadUIAppsRoot.name + ' [from WorkGalahadUIAppsRoot.react]';

export default WorkGalahadUIAppsRoot;
