__d("withAppLoggedInNavigationSwitcher", ["CometAppNavigationProfileSwitcherConfig", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        return function (b) {
            b = c("CometAppNavigationProfileSwitcherConfig")(b.profileSwitcherConfigQuery);
            return i.jsx(a, {
                profileSwitcherConfig: b
            })
        }
    }
    g["default"] = a
}), 98);

import * as React from 'react';

import { CometAppNavigationProfileSwitcherConfig } from './CometAppNavigationProfileSwitcherConfig';

function withLoggedInNavigationSwitcher<P>(
  Component: React.ComponentType<P>
) {
  return function EnhancedComponent(props: P) {
    const profileSwitcherConfig = CometAppNavigationProfileSwitcherConfig(
      props.profileSwitcherConfigQuery
    );

    return (
      <Component
        {...props}
        profileSwitcherConfig={profileSwitcherConfig}  
      />
    );
  }
}

export default withLoggedInNavigationSwitcher;