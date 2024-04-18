__d("WorkNavigationCollapseButtonAndNubs.react", ["GeminiNubs.react", "WorkGalahadAppTabProfileItem.react", "WorkNavigationCenteredChannelToggle.react", "GeminiLayoutNonResponsivenessNavigationExternal.react", "react"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = h || d("react");

  function a() {
      return i.jsxs(i.Fragment, {
          children: [i.jsx(c("WorkNavigationCenteredChannelToggle.react"), {}), i.jsx(c("GeminiNubs.react"), {}), i.jsx(c("WorkGalahadAppTabProfileItem.react"), {}), i.jsx(b("cr:6863").GeminiNavigationBurgerToggle, {})]
      })
  }
  a.displayName = a.name + " [from " + f.id + "]";
  e = i.memo(a);
  g["default"] = e
}), 98);

import React, { Fragment } from 'react';
import WorkNavigationCenteredChannelToggle from 'WorkNavigationCenteredChannelToggle.react';
import GeminiNubs from 'GeminiNubs.react';
import WorkGalahadAppTabProfileItem from 'WorkGalahadAppTabProfileItem.react';
import { GeminiNavigationBurgerToggle } from 'cr:6863';

const WorkNavigationCollapseButtonAndNubs: React.FC = () => {
return (
  <Fragment>
    <WorkNavigationCenteredChannelToggle />
    <GeminiNubs />
    <WorkGalahadAppTabProfileItem />
    <GeminiNavigationBurgerToggle />
  </Fragment>
);
};

WorkNavigationCollapseButtonAndNubs.displayName = `${WorkNavigationCollapseButtonAndNubs.name} [from ${WorkNavigationCollapseButtonAndNubs.id}]`;

export default React.memo(WorkNavigationCollapseButtonAndNubs);
