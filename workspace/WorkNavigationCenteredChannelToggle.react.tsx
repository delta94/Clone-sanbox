__d("WorkNavigationCenteredChannelToggle.react", ["WorkGalahadUIAppsListItem.react", "cr:6863", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
                className: "x1iyjqo2"
            }), i.jsx(c("WorkGalahadUIAppsListItem.react"), {
                withTopSpacing: !1,
                children: i.jsx(b("cr:6863").GeminiNavigationChannelToggle, {})
            }, "channel-collapse-lock"), i.jsx("div", {
                className: "x1iyjqo2"
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { Fragment } from 'react';
import WorkGalahadUIAppsListItem from 'WorkGalahadUIAppsListItem.react';
import { GeminiNavigationChannelToggle } from 'cr:6863';

const WorkNavigationCenteredChannelToggle: React.FC = () => {
  return (
    <Fragment>
      <div className="x1iyjqo2" />
      <WorkGalahadUIAppsListItem withTopSpacing={false}>
        <GeminiNavigationChannelToggle />
        {"channel-collapse-lock"}
      </WorkGalahadUIAppsListItem>
      <div className="x1iyjqo2" />
    </Fragment>
  );
};

WorkNavigationCenteredChannelToggle.displayName = `${WorkNavigationCenteredChannelToggle.name} [from ${WorkNavigationCenteredChannelToggle.id}]`;

export default WorkNavigationCenteredChannelToggle;
