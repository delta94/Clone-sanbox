import React from "react";
import { ChannelGeminiNavFocusableGroup, WorkGalahadNavFocusableScopeQuery } from "ChannelGeminiNavFocusableGroup.react";
import WorkGalahadUIAppsLists from "WorkGalahadUIAppsLists.react";  // done

const WorkNavigationList = ({ children }) => (
  <ChannelGeminiNavFocusableGroup
    allowModifiers
    orientation="vertical"
    tabScopeQuery={WorkGalahadNavFocusableScopeQuery}
    wrap
    children={<WorkGalahadUIAppsLists children={children} />}
  />
);

export default WorkNavigationList;