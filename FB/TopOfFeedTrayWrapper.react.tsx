// __d("TopOfFeedTrayWrapper.react", ["CometContextualLayerAnchorRoot.react", "CometRelay", "TopOfFeedConsts", "TopOfFeedLoggingContextProvider", "TopOfFeedTrayStoriesDefault.react", "TopOfFeedTrayWrapperQuery.graphql", "cr:4969", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = d("react"),
//         j = h !== void 0 ? h : h = b("TopOfFeedTrayWrapperQuery.graphql");

//     function a(a) {
//         var e = a.reelsTrayQueryReference,
//             f = a.storiesTrayQueryReference;
//         a = a.topOfFeedTrayWrapperQueryReference;
//         a = d("CometRelay").usePreloadedQuery(j, a);
//         a = d("TopOfFeedConsts").UnifiedTofuTrayDefaultLandingTabEnum.cast(a == null ? void 0 : a.xfb_default_landing_tab_tofu_interface) === d("TopOfFeedConsts").UnifiedTofuTrayDefaultLandingTabEnum.REELS;
//         return i.jsx(c("CometContextualLayerAnchorRoot.react"), {
//             children: i.jsx(c("TopOfFeedLoggingContextProvider"), {
//                 children: b("cr:4969") != null && a ? i.jsx(b("cr:4969"), {
//                     reelsTrayQueryReference: e
//                 }) : i.jsx(c("TopOfFeedTrayStoriesDefault.react"), {
//                     storiesTrayQueryReference: f
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React from 'react';
import { usePreloadedQuery } from 'react-relay';
import {
UnifiedTofuTrayDefaultLandingTabEnum,
CometContextualLayerAnchorRoot,
TopOfFeedLoggingContextProvider,
TopOfFeedTrayStoriesDefault,
} from 'path-to-modules';
import TopOfFeedTrayWrapperQuery from 'TopOfFeedTrayWrapperQuery.graphql';
import cr4969 from 'cr:4969';

const TopOfFeedTrayWrapper = ({ reelsTrayQueryReference, storiesTrayQueryReference, topOfFeedTrayWrapperQueryReference }) => {
const data = usePreloadedQuery(TopOfFeedTrayWrapperQuery, topOfFeedTrayWrapperQueryReference);
const defaultLandingTab = data?.xfb_default_landing_tab_tofu_interface;
const isReelsTab = UnifiedTofuTrayDefaultLandingTabEnum.cast(defaultLandingTab) === UnifiedTofuTrayDefaultLandingTabEnum.REELS;

return (
    <CometContextualLayerAnchorRoot>
        <TopOfFeedLoggingContextProvider>
        {cr4969 != null && isReelsTab ? (
            <cr4969 reelsTrayQueryReference={reelsTrayQueryReference} />
        ) : (
            <TopOfFeedTrayStoriesDefault storiesTrayQueryReference={storiesTrayQueryReference} />
        )}
        </TopOfFeedLoggingContextProvider>
    </CometContextualLayerAnchorRoot>
);
};

export default TopOfFeedTrayWrapper;