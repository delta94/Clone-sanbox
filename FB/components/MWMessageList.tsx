__d(
  "MWMessageList",
  [
    "CometPageletWithDiv.react",
    "I64",
    "Int64Hooks",
    "LSCommunityBitOffset",
    "LSMessageRenderingType",
    "LSMessagingThreadTypeUtil",
    "MWBlockingProtectionContext.react",
    "MWCMIsAnyCMThread",
    "MWClickedMessageContext.react",
    "MWCollapsibleAdminMessages.react",
    "MWInboxThreadMessagesSpinner.react",
    "MWJumpToMostRecentMessageButton.react",
    "MWMessageListLoggingContext",
    "MWMessageRow.react",
    "MWMessageSendingContext.react",
    "MWPMessageListFocusTable.react",
    "MWPThreadCapabilitiesContext",
    "MWPTypingIndicators.react",
    "MWPVisibleMessageContext.react",
    "MWV2ChatAdminMessage.react",
    "MWV2MessageActionsVisibility.react",
    "WebUXLoggingSurfaceContextProvider",
    "cr:314", //MWPBaseMessageList
    "cr:3907", // null
    "gkx",
    "react",
    "useCommunityFolder",
    "useFirstUnreadMessage",
    "useIsReactionsV2Enabled",
    "useMWPAriaLabelForMessageListGrid",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || (h = d("react"));
    a = h;
    e = a.forwardRef;
    var k = a.useEffect,
      l = a.useId,
      m = a.useState;

    function n(a) {
      return (
        d("MWV2ChatAdminMessage.react").isAdminMessage(a) &&
        a != null &&
        (a.messageRenderingType == null ||
          !(i || (i = d("I64"))).equal(
            a.messageRenderingType,
            (i || (i = d("I64"))).of_int32(
              c("LSMessageRenderingType").NON_COLLAPSIBLE_ADMIN_MESSAGE
            )
          ))
      );
    }

    function o() {
      return j.jsx(c("MWInboxThreadMessagesSpinner.react"), {});
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p(a) {
      return j.jsx(c("MWJumpToMostRecentMessageButton.react"), {
        onPress: a,
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    a = e(function (a, e) {
      var f = a.entryPoint,
        g = a.renderFooter,
        h = a.renderHeader,
        q = a.thread,
        r = d("MWV2MessageActionsVisibility.react").useStopHoveringRef();
      a = m("");
      var s = a[0];
      a = a[1];
      var t = l(),
        u = d("LSMessagingThreadTypeUtil").isArmadilloSecure(q.threadType),
        v = c("useMWPAriaLabelForMessageListGrid")(q),
        w = d("MWPVisibleMessageContext.react").useMWPVisibleMessageContext(),
        x = w.setVisibleMessage,
        y = w.visibleMessage,
        z = d("Int64Hooks").useMemoInt64(
          function () {
            return q.threadType;
          },
          [q.threadType]
        ),
        A = c("useCommunityFolder")(q),
        B = A != null ? d("LSCommunityBitOffset").has(9, A) : !1,
        C = d("useIsReactionsV2Enabled").useIsReactionsV2Enabled(q.threadKey),
        D = c("useFirstUnreadMessage")(q.threadKey);
      w = m(!1);
      var E = w[0],
        F = w[1];
      d("Int64Hooks").useEffectInt64(
        function () {
          return x(void 0);
        },
        [q.threadKey, x]
      );
      k(
        function () {
          D &&
            !E &&
            x(function (a) {
              return (a = a) != null
                ? a
                : {
                    contextLine: "",
                    highlights: [],
                    messageId: D.messageId,
                    source: "LastReadWatermark",
                    timestamp: D.timestampMs,
                  };
            });
        },
        [D, x, E]
      );
      w = d("Int64Hooks").useCallbackInt64(
        function () {
          return j.jsxs(j.Fragment, {
            children: [
              j.jsx(d("MWPTypingIndicators.react").MWPTypingIndicators, {
                threadKey: q.threadKey,
                threadType: z,
              }),
              g && g(),
            ],
          });
        },
        [g, q.threadKey, z]
      );
      var G = new Map();
      f = j.jsx(b("cr:314"), {
        //MWPBaseMessageList
        entryPoint: f,
        onUserScroll: function () {
          return F(!0);
        },
        pageSize: c("gkx")("23432") ? 3 : 15,
        ref: e,
        renderFooter: w,
        renderHeader: h,
        renderJumpToMostRecentMessageButton: p,
        renderLoadingAnimation: o,
        renderRow: function (a) {
          var b = a.domElementRef,
            e = a.message,
            f = a.nextMessage;
          a = a.prevMessage;
          var g = u
              ? (i || (i = d("I64"))).equal(q.threadKey, e.threadKey)
              : !1,
            h = (D == null ? void 0 : D.messageId) === e.messageId,
            k = !n(a) && !n(f);
          if (
            (c("MWCMIsAnyCMThread")(q.threadType) ||
              d("LSMessagingThreadTypeUtil").isDiscoverableChannel(
                q.threadType
              )) &&
            n(e) &&
            !k
          ) {
            G.set(e.messageId, e);
            k = n(a) && !n(f);
            if (k) {
              k = Array.from(G.values());
              G.clear();
              return j.jsx(c("MWCollapsibleAdminMessages.react"), {
                domElementRef: b,
                fbGroupId: A == null ? void 0 : A.fbGroupId,
                hasMessageEmphasisRing:
                  y == null
                    ? !1
                    : y.messageId === e.messageId &&
                      (y.source === "Reply" || y.source === "Pinned"),
                isCMAdmin: B,
                isModal: s === e.messageId,
                isSecureMessage: g,
                messages: k,
                shouldRenderUnreadIndicator: h,
                threadType: z,
                useReactionsV2: C,
              });
            } else return null;
          }
          return j.jsx(d("MWMessageRow.react").MWMessageRow, {
            containerThreadKey: q.threadKey,
            domElementRef: b,
            fbGroupId: A == null ? void 0 : A.fbGroupId,
            hasMessageEmphasisRing:
              y == null
                ? !1
                : y.messageId === e.messageId &&
                  (y.source === "Reply" || y.source === "Pinned"),
            isCMAdmin: B,
            isModal: s === e.messageId,
            isSecureMessage: g,
            message: e,
            nextMessage: f,
            prevMessage: a,
            shouldRenderUnreadIndicator: h,
            stopHoveringRef: r,
            threadType: z,
            useReactionsV2: C,
          });
        },
        thread: q,
      });
      return j.jsx(c("MWMessageSendingContext.react").Provider, {
        children: j.jsx(c("MWClickedMessageContext.react").Provider, {
          children: j.jsx(c("MWBlockingProtectionContext.react").Provider, {
            children: j.jsx(d("CometPageletWithDiv.react").Placeholder, {
              className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d",
              fallback: j.jsx(c("MWInboxThreadMessagesSpinner.react"), {}),
              name: "MWMessageList",
              children: j.jsx(d("MWPThreadCapabilitiesContext").Provider, {
                thread: q,
                children: j.jsx(c("MWPMessageListFocusTable.react"), {
                  ariaLabel: v,
                  modal: s,
                  setModal: a,
                  children: j.jsx(
                    d("WebUXLoggingSurfaceContextProvider")
                      .WebUXSurfaceLoggingContext.Provider,
                    {
                      value: "message_list",
                      children: j.jsx(
                        d("MWMessageListLoggingContext")
                          .MWMessageListLoggingContext,
                        {
                          flowInstanceId: c("uuidv4")(),
                          children:
                            b("cr:3907") == null
                              ? f
                              : j.jsx(b("cr:3907"), {
                                  id: t,
                                  children: f,
                                }),
                        }
                      ),
                    }
                  ),
                }),
              }),
            }),
          }),
        }),
      });
    });
    g["default"] = a;
  },
  98
);

import React, { forwardRef, useEffect, useState } from "react";
import { I64 } from "I64";
import { LSMessageRenderingType } from "LSMessageRenderingType";
import { LSMessagingThreadTypeUtil } from "LSMessagingThreadTypeUtil";
import { MWBlockingProtectionContext } from "MWBlockingProtectionContext.react";
import { MWCMIsAnyCMThread } from "MWCMIsAnyCMThread";
import { MWClickedMessageContext } from "MWClickedMessageContext.react";
import { MWCollapsibleAdminMessages } from "MWCollapsibleAdminMessages.react";
import { MWInboxThreadMessagesSpinner } from "MWInboxThreadMessagesSpinner.react";
import { MWJumpToMostRecentMessageButton } from "MWJumpToMostRecentMessageButton.react";
import { MWMessageListLoggingContext } from "MWMessageListLoggingContext";
import { MWMessageRow } from "MWMessageRow.react";
import { MWMessageSendingContext } from "MWMessageSendingContext.react";
import { MWPMessageListFocusTable } from "MWPMessageListFocusTable.react";
import { MWPThreadCapabilitiesContext } from "MWPThreadCapabilitiesContext";
import { MWPTypingIndicators } from "MWPTypingIndicators.react";
import { CometPageletWithDiv } from "MWPTypingIndicators.react";
import { useMWPVisibleMessageContext } from "MWPVisibleMessageContext.react";
import { MWV2ChatAdminMessage } from "MWV2ChatAdminMessage.react";
import { useStopHoveringRef } from "MWV2MessageActionsVisibility.react";
import { WebUXLoggingSurfaceContextProvider } from "WebUXLoggingSurfaceContextProvider";
import { MWPBaseMessageList } from "cr:314";
import { gkx } from "gkx";
import { useCommunityFolder } from "useCommunityFolder";
import { useFirstUnreadMessage } from "useFirstUnreadMessage";
import { useIsReactionsV2Enabled } from "useIsReactionsV2Enabled";
import { useMWPAriaLabelForMessageListGrid } from "useMWPAriaLabelForMessageListGrid";
import { uuidv4 } from "uuidv4";
import { LSCommunityBitOffset } from "LSCommunityBitOffset";
import { Int64Hooks } from "Int64Hooks";

function isAdminMessage(message: any): boolean {
  return (
    MWV2ChatAdminMessage.isAdminMessage(message) &&
    message != null &&
    (message.messageRenderingType == null ||
      !I64.equal(
        message.messageRenderingType,
        I64.of_int32(LSMessageRenderingType.NON_COLLAPSIBLE_ADMIN_MESSAGE)
      ))
  );
}

function renderLoadingAnimation(): JSX.Element {
  return <MWInboxThreadMessagesSpinner />;
}
renderLoadingAnimation.displayName = `${renderLoadingAnimation.name} [from ${__DEV__}]`;

function renderJumpToMostRecentMessageButton(onPress: () => void): JSX.Element {
  return <MWJumpToMostRecentMessageButton onPress={onPress} />;
}
renderJumpToMostRecentMessageButton.displayName = `${renderJumpToMostRecentMessageButton.name} [from ${__DEV__}]`;

interface MWMessageListProps {
  entryPoint: any;
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  thread: any;
}

const MWMessageList = forwardRef<HTMLDivElement, MWMessageListProps>(
  (props, ref) => {
    const { entryPoint, renderFooter, renderHeader, thread } = props;
    const stopHoveringRef = useStopHoveringRef();
    const [modal, setModal] = useState("");
    const isArmadilloSecure = LSMessagingThreadTypeUtil.isArmadilloSecure(
      thread.threadType
    );
    const ariaLabel = useMWPAriaLabelForMessageListGrid(thread);
    const { setVisibleMessage, visibleMessage } = useMWPVisibleMessageContext();
    const threadTypeInt64 = Int64Hooks.useMemoInt64(
      () => thread.threadType,
      [thread.threadType]
    );
    const communityFolder = useCommunityFolder(thread);
    const isCMAdmin =
      communityFolder != null
        ? LSCommunityBitOffset.has(9, communityFolder)
        : false;
    const useReactionsV2 = useIsReactionsV2Enabled(thread.threadKey);
    const firstUnreadMessage = useFirstUnreadMessage(thread.threadKey);
    const [userScrolled, setUserScrolled] = useState(false);

    Int64Hooks.useEffectInt64(
      () => setVisibleMessage(undefined),
      [thread.threadKey, setVisibleMessage]
    );

    useEffect(() => {
      if (firstUnreadMessage && !userScrolled) {
        setVisibleMessage((prevVisibleMessage) => {
          return (
            prevVisibleMessage ?? {
              contextLine: "",
              highlights: [],
              messageId: firstUnreadMessage.messageId,
              source: "LastReadWatermark",
              timestamp: firstUnreadMessage.timestampMs,
            }
          );
        });
      }
    }, [firstUnreadMessage, setVisibleMessage, userScrolled]);

    const renderFooterCallback = Int64Hooks.useCallbackInt64(
      () => (
        <>
          <MWPTypingIndicators.MWPTypingIndicators
            threadKey={thread.threadKey}
            threadType={threadTypeInt64}
          />
          {renderFooter && renderFooter()}
        </>
      ),
      [renderFooter, thread.threadKey, threadTypeInt64]
    );

    const adminMessages = new Map<string, any>();

    const messageList = (
      <MWPBaseMessageList
        entryPoint={entryPoint}
        onUserScroll={() => setUserScrolled(true)}
        pageSize={gkx("23432") ? 3 : 15}
        ref={ref}
        renderFooter={renderFooterCallback}
        renderHeader={renderHeader}
        renderJumpToMostRecentMessageButton={
          renderJumpToMostRecentMessageButton
        }
        renderLoadingAnimation={renderLoadingAnimation}
        renderRow={({
          domElementRef,
          message,
          nextMessage,
          prevMessage,
        }: {
          domElementRef: React.RefObject<HTMLDivElement>;
          message: any;
          nextMessage: any;
          prevMessage: any;
        }) => {
          const isSecureMessage = isArmadilloSecure
            ? I64.equal(thread.threadKey, message.threadKey)
            : false;
          const shouldRenderUnreadIndicator =
            (firstUnreadMessage?.messageId ?? 0) === message.messageId;
          const shouldRenderSingleRow =
            !isAdminMessage(prevMessage) && !isAdminMessage(nextMessage);

          if (
            (MWCMIsAnyCMThread(thread.threadType) ||
              LSMessagingThreadTypeUtil.isDiscoverableChannel(
                thread.threadType
              )) &&
            isAdminMessage(message) &&
            !shouldRenderSingleRow
          ) {
            adminMessages.set(message.messageId, message);
            const shouldCollapseMessages =
              isAdminMessage(prevMessage) && !isAdminMessage(nextMessage);

            if (shouldCollapseMessages) {
              const collapsedMessages = Array.from(adminMessages.values());
              adminMessages.clear();

              return (
                <MWCollapsibleAdminMessages
                  domElementRef={domElementRef}
                  fbGroupId={communityFolder?.fbGroupId}
                  hasMessageEmphasisRing={
                    visibleMessage == null
                      ? false
                      : visibleMessage.messageId === message.messageId &&
                        (visibleMessage.source === "Reply" ||
                          visibleMessage.source === "Pinned")
                  }
                  isCMAdmin={isCMAdmin}
                  isModal={modal === message.messageId}
                  isSecureMessage={isSecureMessage}
                  messages={collapsedMessages}
                  shouldRenderUnreadIndicator={shouldRenderUnreadIndicator}
                  threadType={threadTypeInt64}
                  useReactionsV2={useReactionsV2}
                />
              );
            } else return null;
          }

          return (
            <MWMessageRow.MWMessageRow
              containerThreadKey={thread.threadKey}
              domElementRef={domElementRef}
              fbGroupId={communityFolder?.fbGroupId}
              hasMessageEmphasisRing={
                visibleMessage == null
                  ? false
                  : visibleMessage.messageId === message.messageId &&
                    (visibleMessage.source === "Reply" ||
                      visibleMessage.source === "Pinned")
              }
              isCMAdmin={isCMAdmin}
              isModal={modal === message.messageId}
              isSecureMessage={isSecureMessage}
              message={message}
              nextMessage={nextMessage}
              prevMessage={prevMessage}
              shouldRenderUnreadIndicator={shouldRenderUnreadIndicator}
              stopHoveringRef={stopHoveringRef}
              threadType={threadTypeInt64}
              useReactionsV2={useReactionsV2}
            />
          );
        }}
        thread={thread}
      />
    );

    return (
      <MWMessageSendingContext.Provider>
        <MWClickedMessageContext.Provider>
          <MWBlockingProtectionContext.Provider>
            <CometPageletWithDiv.Placeholder
              className="x78zum5 xdt5ytf x1iyjqo2 x5yr21d"
              fallback={<MWInboxThreadMessagesSpinner />}
              name="MWMessageList"
            >
              <MWPThreadCapabilitiesContext.Provider thread={thread}>
                <MWPMessageListFocusTable
                  ariaLabel={ariaLabel}
                  modal={modal}
                  setModal={setModal}
                >
                  <WebUXLoggingSurfaceContextProvider.WebUXSurfaceLoggingContext.Provider value="message_list">
                    <MWMessageListLoggingContext flowInstanceId={uuidv4()}>
                      {/* Render the messageList component here */}
                      {messageList}
                    </MWMessageListLoggingContext>
                  </WebUXLoggingSurfaceContextProvider.WebUXSurfaceLoggingContext.Provider>
                </MWPMessageListFocusTable>
              </MWPThreadCapabilitiesContext.Provider>
            </CometPageletWithDiv.Placeholder>
          </MWBlockingProtectionContext.Provider>
        </MWClickedMessageContext.Provider>
      </MWMessageSendingContext.Provider>
    );
  }
);

export default MWMessageList;
