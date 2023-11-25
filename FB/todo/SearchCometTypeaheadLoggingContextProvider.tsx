// __d("SearchCometTypeaheadLoggingContextProvider", ["QPLUserFlow", "QPLUtils", "Random", "qpl", "react", "searchCometTypeaheadODSLogFocusEvent", "useCometSearchTypeaheadTraceProvider"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || (h = d("react"));
//     b = h;
//     var j = b.useCallback,
//         k = b.useState;
//     e = i.createContext({
//         logger: null,
//         onSessionStart: function () {},
//         setSessionEndCallback: function () {},
//         traceProvider: null
//     });
//     var l = e.Provider;

//     function a(a) {
//         var b = a.children,
//             e = a.logger;
//         a = k(!1);
//         var f = a[0],
//             g = a[1];
//         a = j(function (a) {
//             e.setSessionEndCallback(function (b) {
//                 a(b), g(!1)
//             })
//         }, [e, g]);
//         var h = j(function () {
//                 if (e && !f) {
//                     e.isSessionActive() || e.startSession();
//                     var a = 2;
//                     c("Random").coinflip(a) && c("searchCometTypeaheadODSLogFocusEvent")("comet.ta_global_event_focus", a);
//                     c("QPLUserFlow").start(c("qpl")._(195636649, "5429"), {
//                         instanceKey: d("QPLUtils").deriveInstanceKey(e.getSessionID())
//                     });
//                     g(!0)
//                 }
//             }, [e, g, f]),
//             m = c("useCometSearchTypeaheadTraceProvider")(e);
//         return i.jsx(l, {
//             value: {
//                 logger: e,
//                 onSessionStart: h,
//                 setSessionEndCallback: a,
//                 traceProvider: m
//             },
//             children: b
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g.CometLoggingProviderContext = e;
//     g.SearchCometTypeaheadLoggingContextProvider = a
// }), 98);

import React, { useState, useCallback, createContext } from 'react';
import QPLUserFlow from 'QPLUserFlow'; 
import { deriveInstanceKey } from 'QPLUtils';
import { coinflip } from 'Random';
import qpl from 'qpl';
import searchCometTypeaheadODSLogFocusEvent from 'searchCometTypeaheadODSLogFocusEvent';
import useCometSearchTypeaheadTraceProvider from 'useCometSearchTypeaheadTraceProvider';

interface Logger {
  isSessionActive(): boolean;
  startSession(): void;
  setSessionEndCallback(callback: (data: any) => void): void;
  getSessionID(): string; 
}

interface ContextValue {
  logger: Logger | null;
  onSessionStart: () => void;
  setSessionEndCallback: (callback: (data: any) => void) => void;
  traceProvider: ReturnType<typeof useCometSearchTypeaheadTraceProvider>; 
}

export const CometLoggingProviderContext = createContext<ContextValue>({
  logger: null,
  onSessionStart: () => {},
  setSessionEndCallback: () => {},
  traceProvider: null
});

interface Props {
  children: React.ReactNode;
  logger: Logger;
}

export const SearchCometTypeaheadLoggingContextProvider = ({
  children, 
  logger  
}: Props) => {

  const [sessionStarted, setSessionStarted] = useState(false);

  const setSessionEndCallback = useCallback((callback: (data: any) => void) => {
    logger.setSessionEndCallback((data) => {
      callback(data);
      setSessionStarted(false);
    });
  }, [logger, setSessionStarted]);

  const onSessionStart = useCallback(() => {
    if (logger && !sessionStarted) {
      if (!logger.isSessionActive()) {
        logger.startSession();
      }

      const coinflipValue = 2;
      if (coinflip(coinflipValue)) {
        searchCometTypeaheadODSLogFocusEvent('comet.ta_global_event_focus', coinflipValue);
      }

      QPLUserFlow.start(
        qpl._(195636649, '5429'), 
        { instanceKey: deriveInstanceKey(logger.getSessionID()) }
      );

      setSessionStarted(true);
    }
  }, [logger, setSessionStarted, sessionStarted]);

  const traceProvider = useCometSearchTypeaheadTraceProvider(logger);

  return (
    <CometLoggingProviderContext.Provider 
      value={{
        logger,
        onSessionStart,
        setSessionEndCallback,
        traceProvider
      }}
    >
      {children}
    </CometLoggingProviderContext.Provider>
  );
}