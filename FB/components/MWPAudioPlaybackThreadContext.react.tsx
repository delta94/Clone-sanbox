__d(
  "MWPAudioPlaybackThreadContext.react",
  ["I64", "Int64Hooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || (h = d("react"));
    c = h;
    e = c.createContext;
    var k = c.useContext;
    c = { threadKey: (i || (i = d("I64"))).zero };
    var l = e(c);
    function a() {
      return k(l).threadKey;
    }
    function b(a) {
      var b = a.children,
        c = a.threadKey;
      a = d("Int64Hooks").useMemoInt64(
        function () {
          return { threadKey: c };
        },
        [c]
      );
      return j.jsx(l.Provider, { value: a, children: b });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.useMWPAudioPlaybackThreadKey = a;
    g.MWPAudioPlaybackThreadContextProvider = b;
  },
  98
);

import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { I64 } from "I64";
import { useMemoInt64 } from "Int64Hooks";

interface ThreadContextType {
  threadKey: I64;
}

const defaultThreadContext: ThreadContextType = { threadKey: I64.zero };
const ThreadContext = createContext<ThreadContextType>(defaultThreadContext);

export function useMWPAudioPlaybackThreadKey(): I64 {
  return useContext(ThreadContext).threadKey;
}

interface ThreadContextProviderProps {
  children: ReactNode;
  threadKey: I64;
}

export const MWPAudioPlaybackThreadContextProvider: React.FC<
  ThreadContextProviderProps
> = ({ children, threadKey }) => {
  const contextValue = useMemoInt64(() => ({ threadKey }), [threadKey]);
  return (
    <ThreadContext.Provider value={contextValue}>
      {children}
    </ThreadContext.Provider>
  );
};

MWPAudioPlaybackThreadContextProvider.displayName =
  MWPAudioPlaybackThreadContextProvider.name + " [from " + "f.id" + "]";
