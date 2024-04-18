__d("WorkNavigationAppBarContainerExternal.react", ["CometPlaceholder.react", "GeminiAppsGlimmer.react", "WorkGalahadUIAppsRoot.react", "deferredLoadComponent", "react", "requireDeferredForDisplay"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = h || d("react"),
    j = c("deferredLoadComponent")(c("requireDeferredForDisplay")("WorkNavigation.react").__setRef("WorkNavigationAppBarContainerExternal.react"));

  function a() {
    return i.jsx(c("WorkGalahadUIAppsRoot.react"), {
      children: i.jsx(c("CometPlaceholder.react"), {
        fallback: i.jsx(c("GeminiAppsGlimmer.react"), {}),
        children: i.jsx(j, {})
      })
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";
  g["default"] = a
}), 98);

import React from 'react';
import CometPlaceholder from './CometPlaceholder.react';
import GeminiAppsGlimmer from './GeminiAppsGlimmer.react';
import WorkGalahadUIAppsRoot from 'WorkGalahadUIAppsRoot.react';
import { deferredLoadComponent, requireDeferredForDisplay } from './deferredUtils';

const WorkNavigation = deferredLoadComponent(requireDeferredForDisplay('WorkNavigation.react'));

const WorkNavigationAppBarContainerExternal: React.FC = () => {
  return (
    <WorkGalahadUIAppsRoot>
      <CometPlaceholder fallback={<GeminiAppsGlimmer />}>
        <WorkNavigation />
      </CometPlaceholder>
    </WorkGalahadUIAppsRoot>
  );
};

WorkNavigationAppBarContainerExternal.displayName =
  WorkNavigationAppBarContainerExternal.name + ' [from WorkNavigationAppBarContainerExternal.react]';

export default WorkNavigationAppBarContainerExternal;
