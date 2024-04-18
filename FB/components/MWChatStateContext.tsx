__d("MWChatStateContext", ["MWChatStateV2Types", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    c = b.createContext;
    var i = b.useContext,
        j = c(d("MWChatStateV2Types").emptyMWChatState);
    e = j.Provider;

    function a(a) {
        var b = i(j);
        return a(b)
    }
    g.stateContext = j;
    g.ChatStateContextProvider = e;
    g.useChatState = a
}), 98);


import React, { createContext, useContext } from "react";
import { emptyMWChatState } from "./MWChatStateV2Types";

const MWChatStateContext = createContext<MWChatStateV2Types>(emptyMWChatState);
const { Provider } = MWChatStateContext;

export const ChatStateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider value={emptyMWChatState}>{children}</Provider>;
};

export const useChatState = <T extends MWChatStateV2Types>(callback: (state: T) => void): void => {
  const state = useContext(MWChatStateContext);
  callback(state);
};
