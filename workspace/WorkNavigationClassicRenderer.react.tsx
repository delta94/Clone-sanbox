import React, { memo } from 'react';
import CometRelay from 'CometRelay';
import WorkGalahadAppTabTopApps from 'WorkGalahadAppTabTopApps.react';
import WorkNavigationClassicRendererRenderer from 'WorkNavigationClassicRenderer_renderer.graphql';
import WorkNavigationCollapseButtonAndNubs from 'WorkNavigationCollapseButtonAndNubs.react';
import WorkNavigationList from 'WorkNavigationList.react';

let h;

const WorkNavigationClassicRenderer = ({ renderer }) => {
CometRelay.useFragment(WorkNavigationClassicRendererRenderer, renderer);

return (
<WorkNavigationList>
    <WorkGalahadAppTabTopApps />
    <WorkNavigationCollapseButtonAndNubs />
</WorkNavigationList>
);
};

WorkNavigationClassicRenderer.displayName = WorkNavigationClassicRenderer [from ${f.id}];

export default memo(WorkNavigationClassicRenderer);




// __d("WorkNavigationClassicRenderer.react", ["CometRelay", "WorkGalahadAppTabTopApps.react", "WorkNavigationClassicRenderer_renderer.graphql", "WorkNavigationCollapseButtonAndNubs.react", "WorkNavigationList.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = d("react");

//     function a(a) {
//         a = a.renderer;
//         d("CometRelay").useFragment(h !== void 0 ? h : h = b("WorkNavigationClassicRenderer_renderer.graphql"), a);
//         return i.jsxs(c("WorkNavigationList.react"), {
//             children: [i.jsx(c("WorkGalahadAppTabTopApps.react"), {}), i.jsx(c("WorkNavigationCollapseButtonAndNubs.react"), {})]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     e = i.memo(a);
//     g["default"] = e
// }), 98);