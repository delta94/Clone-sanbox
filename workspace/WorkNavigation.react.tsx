import React from 'react';
import { useLazyLoadQuery, MatchContainer } from 'CometRelay';
import WorkNavigationQuery from 'WorkNavigationQuery.graphql';

const WorkNavigation = () => {
const { company } = useLazyLoadQuery(WorkNavigationQuery, {});
return <MatchContainer match={company.navigation_renderer} />;
};

export default React.memo(WorkNavigation);


// __d("WorkNavigation.react", ["CometRelay", "WorkNavigationQuery.graphql", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = d("react");

//     function a() {
//         var a = d("CometRelay").useLazyLoadQuery(h !== void 0 ? h : h = b("WorkNavigationQuery.graphql"), {});
//         a = a.company;
//         return i.jsx(d("CometRelay").MatchContainer, {
//             match: a.navigation_renderer
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     c = i.memo(a);
//     g["default"] = c
// }), 98);