import React from "react";
import { createFocusGroup, tabbableScopeQuery } from "focusScopeQueries";

const [ChannelGeminiNavFocusableGroup, WorkGalahadNavFocusableItem] = createFocusGroup(tabbableScopeQuery);

export { ChannelGeminiNavFocusableGroup, WorkGalahadNavFocusableItem, tabbableScopeQuery as WorkGalahadNavFocusableScopeQuery };