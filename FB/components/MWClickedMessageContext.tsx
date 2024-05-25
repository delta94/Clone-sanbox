__d(
  "MWClickedMessageContext.react",
  [
    "GroupsCometChatsEngagementLogger",
    "I64",
    "LSFactory",
    "LSFetchMessageSeenCountStoredProcedure",
    "emptyFunction",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = j || (j = d("react"));
    b = j;
    e = b.createContext;
    var l = b.useCallback,
      m = b.useContext,
      n = b.useMemo,
      o = b.useState,
      p = e({
        clickedMessageId: null,
        fetchMessageSeenCount: c("emptyFunction"),
        hasError: !1,
        isLoading: !1,
        setClickedMessageId: c("emptyFunction"),
      });
    function a(a) {
      a = a.children;
      var b = o(null),
        e = b[0],
        g = b[1];
      b = o(!1);
      var j = b[0],
        m = b[1];
      b = o(!1);
      var q = b[0],
        r = b[1],
        s = (h || (h = c("useReStore")))(),
        t = l(
          function (a, b, e) {
            r(!0),
              g(b),
              s
                .runInTransaction(
                  function (d) {
                    return c("LSFetchMessageSeenCountStoredProcedure")(
                      c("LSFactory")(d),
                      { messageId: b, threadKey: a }
                    );
                  },
                  "readwrite",
                  void 0,
                  void 0,
                  f.id + ":53"
                )
                .then(function () {
                  r(!1),
                    m(!1),
                    d("GroupsCometChatsEngagementLogger").log({
                      action: "impression",
                      client_extras: { mid: b },
                      community_id: e
                        ? (i || (i = d("I64"))).to_string(e.folderId)
                        : null,
                      event: "seen_count_rendered",
                      group_id: e
                        ? (i || (i = d("I64"))).to_string(e.fbGroupId)
                        : null,
                      source: "message_bubble",
                      surface: "thread_view",
                      thread_id: (i || (i = d("I64"))).to_string(a),
                    });
                })
                ["catch"](function () {
                  r(!1), m(!0);
                });
          },
          [s]
        );
      b = n(
        function () {
          return {
            clickedMessageId: e,
            fetchMessageSeenCount: t,
            hasError: j,
            isLoading: q,
            setClickedMessageId: g,
          };
        },
        [e, t, j, q]
      );
      return k.jsx(p.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = {
      Provider: a,
      useHook: function () {
        return m(p);
      },
    };
    g["default"] = b;
  },
  98
);

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
  FC,
} from "react";
import GroupsCometChatsEngagementLogger from "GroupsCometChatsEngagementLogger";
import { I64 } from "I64";
import LSFactory from "LSFactory";
import LSFetchMessageSeenCountStoredProcedure from "LSFetchMessageSeenCountStoredProcedure";
import emptyFunction from "emptyFunction";
import useReStore from "useReStore";

interface MWClickedMessageContextType {
  clickedMessageId: string | null;
  fetchMessageSeenCount: (
    threadKey: string,
    messageId: string,
    communityInfo: CommunityInfo | null
  ) => void;
  hasError: boolean;
  isLoading: boolean;
  setClickedMessageId: (id: string | null) => void;
}

interface CommunityInfo {
  folderId: string;
  fbGroupId: string;
}

const MWClickedMessageContext = createContext<MWClickedMessageContextType>({
  clickedMessageId: null,
  fetchMessageSeenCount: emptyFunction,
  hasError: false,
  isLoading: false,
  setClickedMessageId: emptyFunction,
});

interface ProviderProps {
  children: ReactNode;
}

const MWClickedMessageProvider: FC<ProviderProps> = ({ children }) => {
  const [clickedMessageId, setClickedMessageId] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const store = useReStore();

  const fetchMessageSeenCount = useCallback(
    (
      threadKey: string,
      messageId: string,
      communityInfo: CommunityInfo | null
    ) => {
      setIsLoading(true);
      messageId;

      store
        .runInTransaction(
          (tx) =>
            LSFetchMessageSeenCountStoredProcedure(LSFactory(tx), {
              messageId,
              threadKey,
            }),
          "readwrite",
          undefined,
          undefined,
          `${MWClickedMessageProvider.displayName}:53`
        )
        .then(() => {
          setIsLoading(false);
          setHasError(false);
          GroupsCometChatsEngagementLogger.log({
            action: "impression",
            client_extras: { mid: messageId },
            community_id: communityInfo
              ? I64.to_string(communityInfo.folderId)
              : null,
            event: "seen_count_rendered",
            group_id: communityInfo
              ? I64.to_string(communityInfo.fbGroupId)
              : null,
            source: "message_bubble",
            surface: "thread_view",
            thread_id: I64.to_string(threadKey),
          });
        })
        .catch(() => {
          setIsLoading(false);
          setHasError(true);
        });
    },
    [store]
  );

  const value = useMemo(
    () => ({
      clickedMessageId,
      fetchMessageSeenCount,
      hasError,
      isLoading,
      setClickedMessageId,
    }),
    [clickedMessageId, fetchMessageSeenCount, hasError, isLoading]
  );

  return (
    <MWClickedMessageContext.Provider value={value}>
      {children}
    </MWClickedMessageContext.Provider>
  );
};

MWClickedMessageProvider.displayName = `${
  MWClickedMessageProvider.name
} [from ${import.meta.url}]`;

const useMWClickedMessage = () => useContext(MWClickedMessageContext);

export default {
  Provider: MWClickedMessageProvider,
  useHook: useMWClickedMessage,
};
