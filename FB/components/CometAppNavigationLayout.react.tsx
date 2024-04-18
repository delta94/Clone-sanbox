__d("CometAppNavigationLayout.react", ["CometAppNavigationTabBarContainer.react", "CometContextualLayerAnchorRoot.react", "CometTooltipGroup.react", "FocusInertRegion.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.children;
        a = a.inert;
        return i.jsx(c("FocusInertRegion.react"), {
            disabled: !a,
            children: i.jsx("div", {
                "aria-hidden": a,
                className: "xds687c xixxii4 x17qophe x13vifvy x1vjfegm",
                children: i.jsx(c("CometAppNavigationTabBarContainer.react"), {
                    children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
                        children: i.jsx(c("CometTooltipGroup.react"), {
                            children: b
                        })
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React from 'react';
import { FocusInertRegion } from 'react-focus-lock';
import { CometAppNavigationTabBarContainer, CometContextualLayerAnchorRoot, CometTooltipGroup } from 'comet-app-navigation';

const CometAppNavigationLayout = ({ children, inert = false }) => {
  return (
    <FocusInertRegion disabled={!inert}>
      <div
        aria-hidden={inert}
        className="xds687c xixxii4 x17qophe x13vifvy x1vjfegm"
      >
        <CometAppNavigationTabBarContainer>
          <CometContextualLayerAnchorRoot>
            <CometTooltipGroup>
              {children}
            </CometTooltipGroup>
          </CometContextualLayerAnchorRoot>
        </CometAppNavigationTabBarContainer>
      </div>
    </FocusInertRegion>
  );
};

export default CometAppNavigationLayout;
