// __d("CometBaseAppNavigation.react", ["CometContextualLayerAnchorRoot.react", "CometProductAttributionContextProvider.react", "CometSection.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || d("react");

//     function a(a) {
//         var b = a.endSection,
//             d = a.searchSection,
//             e = a.startButtons;
//         a = a.tabBar;
//         return i.jsx(c("CometSection.react"), {
//             role: "banner",
//             children: i.jsxs(c("CometProductAttributionContextProvider.react"), {
//                 value: "topnav",
//                 children: [i.jsx("div", {
//                     className: "x6s0dn4 x9f619 x78zum5 x1iyjqo2 x1s65kcs x1d52u69 xixxii4 x17qophe x13vifvy xzkaem6",
//                     children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
//                         children: e
//                     })
//                 }), d, a, i.jsx("div", {
//                     className: "xds687c x1pi30zi x1e558r4 xixxii4 x13vifvy xzkaem6",
//                     children: i.jsx(c("CometContextualLayerAnchorRoot.react"), {
//                         children: b
//                     })
//                 })]
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React, { FC } from 'react';

import CometContextualLayerAnchorRoot from './CometContextualLayerAnchorRoot';
import CometProductAttributionContextProvider from './CometProductAttributionContextProvider';
import CometSection from './CometSection';

interface Props {
  endSection?: React.ReactNode;
  searchSection?: React.ReactNode;
  startButtons: React.ReactNode;
  tabBar: React.ReactNode;
}

const CometBaseAppNavigation: FC<Props> = ({
  endSection,
  searchSection,
  startButtons,
  tabBar  
}) => {

  return (
    <CometSection role="banner">
      <CometProductAttributionContextProvider value="topnav">
        <div className="header-wrapper">
          <CometContextualLayerAnchorRoot>
            {startButtons}
          </CometContextualLayerAnchorRoot>
        </div>
        {searchSection}
        {tabBar}
        <div className="end-section-wrapper">
          <CometContextualLayerAnchorRoot>
            {endSection}
          </CometContextualLayerAnchorRoot>
        </div>
      </CometProductAttributionContextProvider>
    </CometSection>
  );
};

CometBaseAppNavigation.displayName = `${CometBaseAppNavigation.name} [from ${f.id}]`; 

export default CometBaseAppNavigation;
