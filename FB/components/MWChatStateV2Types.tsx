__d("MWChatStateV2Types", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = "UpsertTab";
    b = "UpdateState";
    c = "UpdateTab";
    d = "UpdateTabByThreadKey";
    e = {
        UpdateState: b,
        UpdateTab: c,
        UpdateTabByThreadKey: d,
        UpsertTab: a
    };
    b = "ChatTab";
    c = "ComposeTab";
    d = {
        ChatTab: b,
        ComposeTab: c
    };
    a = new Map();
    b = {
        focusedTabId: void 0,
        mediaViewerOpenWatermark: -1,
        nextTabId: 0,
        tabs: a
    };
    f.MWChatStateActionsType = e;
    f.MWChatStateTabType = d;
    f.emptyMWChatState = b
}), 66);

const MWChatStateActionsType = {
    UpsertTab: "UpsertTab",
    UpdateState: "UpdateState",
    UpdateTab: "UpdateTab",
    UpdateTabByThreadKey: "UpdateTabByThreadKey",
  } as const;
  
  type MWChatStateActionsType = typeof MWChatStateActionsType[keyof typeof MWChatStateActionsType];
  
  const MWChatStateTabType = {
    ChatTab: "ChatTab",
    ComposeTab: "ComposeTab",
  } as const;
  
  type MWChatStateTabType = typeof MWChatStateTabType[keyof typeof MWChatStateTabType];
  
  type MWChatState = {
    focusedTabId?: number;
    mediaViewerOpenWatermark: number;
    nextTabId: number;
    tabs: Map<number, { type: MWChatStateTabType }>;
  };
  
  const emptyMWChatState: MWChatState = {
    focusedTabId: undefined,
    mediaViewerOpenWatermark: -1,
    nextTabId: 0,
    tabs: new Map(),
  };
  
  export {
    MWChatStateActionsType,
    MWChatStateTabType,
    emptyMWChatState,
  };