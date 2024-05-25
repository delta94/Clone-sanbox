__d(
  "MWMessageRow.react",
  [
    "BaseView.react",
    "I64",
    "Int64Hooks",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MNLSXMALayoutType",
    "MWCMIsAnyCMThread",
    "MWCMThreadTypes.react",
    "MWMessageDisplayContext.react",
    "MWMessageEditContext.react",
    "MWMessageListAttachmentContainer.react",
    "MWMessageRowAdminMessage.react",
    "MWMessageRowBody.react",
    "MWMessageRowFooter.react",
    "MWMessageRowHeader.react",
    "MWMessageRowMissingMessagesIndicator.react",
    "MWMessageRowUnreadMessagesIndicator.react",
    "MWPActor.react",
    "MWPMessageListColumn.react",
    "MWPMessageListRowWithKeyboardInteractions.react",
    "MWPMessageParsingUtils",
    "MWPMessageRowCalculateStatus.react",
    "MWPThreadCapabilitiesContext",
    "MWShowMessagePromptPopoverContext.react",
    "MWV2MessageRowSimple.react",
    "MWV2MessageStartOfGroupContent.react",
    "cr:3932", // null
    "cr:7412", // null
    "react",
    "useMWMessageRowTheme",
    "useMWPEditMessageDeemphasizer",
    "useMWPGetAttachments",
    "useNextNonAdminMessage",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = h || (h = d("react"));
    a = h;
    e = a.memo;
    var l = a.startTransition,
      m = a.useCallback,
      n = a.useId,
      o = a.useState,
      p = {
        adminMessageAttachment: {
          boxSizing: "x9f619",
          maxWidth: "x4ndzw7",
          minWidth: "xwj5yc2",
          paddingBottom: "xdvlbce",
          paddingStart: "x5ib6vp",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "xc73u3c",
          paddingTop: "x1nn3v0j",
          $$css: !0,
        },
      },
      q = k.memo(c("MWPMessageRowCalculateStatus.react"));
    function r(a) {
      var b = a.message,
        c = a.nextMessage;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "message",
        "nextMessage",
      ]);
      return k.jsx(
        q,
        babelHelpers["extends"](
          {
            message: d("Int64Hooks").usePickInt64(b, [
              "senderId",
              "isUnsent",
              "threadKey",
              "primarySortKey",
              "timestampMs",
              "messageId",
              "isAdminMessage",
              "sendStatusV2",
            ]),
            nextMessage: d("Int64Hooks").usePickInt64(c, [
              "senderId",
              "timestampMs",
              "isAdminMessage",
            ]),
          },
          a
        )
      );
    }
    r.displayName = r.name + " [from " + f.id + "]";
    a = e(function (a) {
      var e = a.containerThreadKey,
        f = a.domElementRef,
        g = a.hasMessageEmphasisRing,
        h = a.isModal,
        q = a.isSecureMessage,
        s = a.lastEbMessageTime,
        t = a.message,
        u = a.navigateToRouteForMediaViewer,
        v = a.nextMessage,
        w = a.prevMessage,
        x = a.renderAttachment,
        y = a.shouldRenderUnreadIndicator,
        z = a.stopHoveringRef,
        A = a.threadType;
      a = a.useReactionsV2;
      var B = a === void 0 ? !1 : a;
      a =
        (a = d("MWMessageDisplayContext.react").useMWMessageDisplayContext()) !=
        null
          ? a
          : "standard";
      var C = a === "standard",
        D = a === "pinnedMessages";
      a = d("MWPActor.react").useActor();
      var E = D || d("MWPMessageParsingUtils").isStartOfGroup(t, w),
        F = c("MWCMIsAnyCMThread")(A),
        G = d("MWCMThreadTypes.react").isBroadcastThread(A),
        H = d("LSMessagingThreadTypeUtil").isDiscoverablePublicBroadcastChannel(
          A
        ),
        I = d("LSMessagingThreadTypeUtil").isGroup(A),
        J = d("LSMessagingThreadTypeUtil").isArmadilloSecure(A),
        K = d("MWPThreadCapabilitiesContext").useMWPThreadCapabilitiesContext();
      K = K.seenCountV2Enabled;
      K = !t.isUnsent && K;
      var L = K && !H && !d("LSMessagingThreadTypeUtil").isCMSubthread(A),
        M = !D && (i || (i = d("I64"))).equal(t.senderId, a);
      K = c("useNextNonAdminMessage")(t, v);
      var N = K == null,
        O = !M;
      a = o(!1);
      var P = a[0],
        Q = a[1];
      a = o(!1);
      var R = a[0],
        S = a[1],
        T = m(
          function (a) {
            return l(function () {
              return S(a);
            });
          },
          [S, l]
        ),
        U = m(
          function (a) {
            return l(function () {
              return Q(a);
            });
          },
          [Q, l]
        ),
        V = n();
      a = o(!1);
      var W = a[0],
        X = a[1],
        Y = c("useMWMessageRowTheme")(),
        Z;
      a = c("useMWPGetAttachments")(t);
      var $ =
        a.length > 0 &&
        a[0].xmaLayoutType != null &&
        (i || (i = d("I64"))).equal(
          a[0].xmaLayoutType,
          (j || (j = d("LSIntEnum"))).ofNumber(
            c("MNLSXMALayoutType").STANDARD_DXMA
          )
        );
      a =
        a.length > 0 &&
        a[0].xmaLayoutType != null &&
        (i || (i = d("I64"))).equal(
          a[0].xmaLayoutType,
          (j || (j = d("LSIntEnum"))).ofNumber(
            c("MNLSXMALayoutType").SHARED_STACK
          )
        );
      var aa = c("useMWPEditMessageDeemphasizer")(),
        ba =
          d("LSMessagingThreadTypeUtil").isCMSubthread(A) &&
          t.subthreadKey != null;
      t.isAdminMessage
        ? (Z = k.jsx(c("MWMessageRowAdminMessage.react"), {
            domElementRef: f,
            isDialogOpened: W,
            isFirstMessageInGroup: E,
            isFocused: P,
            isModal: h,
            message: t,
            messageDomID: V,
            nextMessage: v,
            outgoing: M,
            prevMessage: w,
            setFocusedInTransition: U,
            setHoveredInTransition: T,
            setIsDialogOpened: X,
            stopHoveringRef: z,
          }))
        : $ || a
        ? (Z = k.jsx(
            d("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap,
            {
              centered: !0,
              children: k.jsx(c("MWV2MessageRowSimple.react"), {
                children: k.jsx(c("BaseView.react"), {
                  xstyle: aa,
                  children: k.jsx(c("MWMessageListAttachmentContainer.react"), {
                    connectBottom: !1,
                    connectTop: !1,
                    message: t,
                    outgoing: M,
                    xstyle: p.adminMessageAttachment,
                  }),
                }),
              }),
            }
          ))
        : (Z = k.jsx(
            d("MWShowMessagePromptPopoverContext.react")
              .MWShowMessagePromptPopoverContextProvider,
            {
              children: k.jsx(
                d("MWMessageEditContext.react").MWMessageEditContextProvider,
                {
                  children: k.jsxs(k.Fragment, {
                    children: [
                      k.jsx(c("MWMessageRowUnreadMessagesIndicator.react"), {
                        shouldRenderUnreadIndicator: y,
                      }),
                      E && C
                        ? k.jsx(c("MWV2MessageStartOfGroupContent.react"), {
                            message: t,
                            prevMessage: w,
                          })
                        : null,
                      k.jsx(r, {
                        isBroadcastChannel: H,
                        isBroadcastThread: G,
                        isLargeGroup: !1,
                        isSecureGroupThread: J && I,
                        isSecureThread: J,
                        message: t,
                        nextMessage: K,
                        children: function (a) {
                          return k.jsxs(
                            c(
                              "MWPMessageListRowWithKeyboardInteractions.react"
                            ),
                            {
                              domElementRef: f,
                              isDialogOpened: W,
                              isFocused: P,
                              isModal: h,
                              message: t,
                              messageDomID: V,
                              outgoing: M,
                              setFocused: U,
                              setHovered: T,
                              setIsDialogOpened: X,
                              stopHoveringRef: z,
                              theme: Y,
                              children: [
                                k.jsx(c("MWMessageRowHeader.react"), {
                                  isCMThread: F,
                                  isFirstMessageInGroup: E,
                                  isGroupThread: I,
                                  isPinnedMessageList: D,
                                  isStandardMessageList: C,
                                  message: t,
                                  outgoing: M,
                                  threadType: A,
                                }),
                                k.jsx(c("MWMessageRowBody.react"), {
                                  containerThreadKey: e,
                                  focused: P,
                                  hasClickState: L,
                                  hasMessageEmphasisRing: g,
                                  hovered: R,
                                  incoming: O,
                                  isDialogOpened: W,
                                  isFirstMessageInGroup: E,
                                  isGroupThread: I,
                                  isModal: h,
                                  isPinnedMessageList: D,
                                  isSecureMessage: q,
                                  isStandardMessageList: C,
                                  message: t,
                                  navigateToRouteForMediaViewer: u,
                                  nextMessage: v,
                                  prevMessage: w,
                                  renderAttachment: x,
                                  shouldUseReactionsV2: B,
                                  threadType: A,
                                }),
                                k.jsx(c("MWMessageRowFooter.react"), {
                                  hasClickState: L,
                                  incoming: O,
                                  isBroadcastThread: G,
                                  isLastMessage: N,
                                  isStandardMessageList: C,
                                  message: t,
                                  nextMessage: v,
                                  outgoing: M,
                                  status: a,
                                }),
                              ],
                            }
                          );
                        },
                      }),
                      E &&
                      C &&
                      ba &&
                      t.subthreadKey != null &&
                      b("cr:7412") != null
                        ? k.jsx(b("cr:7412"), {
                            domElementRef: f,
                            message: t,
                            nextMessage: v,
                            subthreadKey: t.subthreadKey,
                          })
                        : null,
                    ],
                  }),
                }
              ),
            }
          ));
      return k.jsxs(k.Fragment, {
        children: [
          Z,
          k.jsx(c("MWMessageRowMissingMessagesIndicator.react"), {
            lastEbMessageTime: s,
            message: t,
            nextMessage: v,
          }),
          b("cr:3932") == null ? null : k.jsx(b("cr:3932"), {}),
        ],
      });
    });
    g.MWMessageRow = a;
  },
  98
);

import React, {
  memo,
  startTransition,
  useCallback,
  useId,
  useState,
} from "react";
import { usePickInt64 } from "Int64Hooks";
import { I64 } from "I64";
import { LSIntEnum } from "LSIntEnum";
import {
  isDiscoverablePublicBroadcastChannel,
  isGroup,
  isArmadilloSecure,
  isCMSubthread,
} from "LSMessagingThreadTypeUtil";
import { MNLSXMALayoutType } from "MNLSXMALayoutType";
import { isAnyCMThread } from "MWCMIsAnyCMThread";
import { isBroadcastThread } from "MWCMThreadTypes.react";
import { useMWMessageDisplayContext } from "MWMessageDisplayContext.react";
import { MWMessageEditContextProvider } from "MWMessageEditContext.react";
import { MWMessageListAttachmentContainer } from "MWMessageListAttachmentContainer.react";
import { MWMessageRowAdminMessage } from "MWMessageRowAdminMessage.react";
import { MWMessageRowBody } from "MWMessageRowBody.react";
import { MWMessageRowFooter } from "MWMessageRowFooter.react";
import { MWMessageRowHeader } from "MWMessageRowHeader.react";
import { MWMessageRowMissingMessagesIndicator } from "MWMessageRowMissingMessagesIndicator.react";
import { MWMessageRowUnreadMessagesIndicator } from "MWMessageRowUnreadMessagesIndicator.react";
import { useActor } from "MWPActor.react";
import { BaseView } from "BaseView.react";
import { MWPMessageListColumnShrinkwrap } from "MWPMessageListColumn.react";
import { MWPMessageListRowWithKeyboardInteractions } from "MWPMessageListRowWithKeyboardInteractions.react";
import { isStartOfGroup } from "MWPMessageParsingUtils";
import { MWPMessageRowCalculateStatus } from "MWPMessageRowCalculateStatus.react";
import { useMWPThreadCapabilitiesContext } from "MWPThreadCapabilitiesContext";
import { MWShowMessagePromptPopoverContextProvider } from "MWShowMessagePromptPopoverContext.react";
import { MWV2MessageRowSimple } from "MWV2MessageRowSimple.react";
import { MWV2MessageStartOfGroupContent } from "MWV2MessageStartOfGroupContent.react";
import { useNextNonAdminMessage } from "useNextNonAdminMessage";
import { useMWMessageRowTheme } from "useMWMessageRowTheme";
import { useMWPEditMessageDeemphasizer } from "useMWPEditMessageDeemphasizer";
import { useMWPGetAttachments } from "useMWPGetAttachments";

const styles = {
  adminMessageAttachment: {
    boxSizing: "x9f619",
    maxWidth: "x4ndzw7",
    minWidth: "xwj5yc2",
    paddingBottom: "xdvlbce",
    paddingStart: "x5ib6vp",
    paddingLeft: null,
    paddingRight: null,
    paddingEnd: "xc73u3c",
    paddingTop: "x1nn3v0j",
    $$css: true,
  },
};

const MWPMessageRowCalculateStatusMemo = memo(MWPMessageRowCalculateStatus);

function MessageStatusWrapper({
  message,
  nextMessage,
  ...props
}: {
  message: any;
  nextMessage: any;
  [key: string]: any;
}) {
  return (
    <MWPMessageRowCalculateStatusMemo
      message={usePickInt64(message, [
        "senderId",
        "isUnsent",
        "threadKey",
        "primarySortKey",
        "timestampMs",
        "messageId",
        "isAdminMessage",
        "sendStatusV2",
      ])}
      nextMessage={usePickInt64(nextMessage, [
        "senderId",
        "timestampMs",
        "isAdminMessage",
      ])}
      {...props}
    />
  );
}

const MWMessageRow = memo(
  ({
    containerThreadKey,
    domElementRef,
    hasMessageEmphasisRing,
    isModal,
    isSecureMessage,
    lastEbMessageTime,
    message,
    navigateToRouteForMediaViewer,
    nextMessage,
    prevMessage,
    renderAttachment,
    shouldRenderUnreadIndicator,
    stopHoveringRef,
    threadType,
    useReactionsV2 = false,
  }: {
    containerThreadKey: any;
    domElementRef: React.RefObject<HTMLDivElement>;
    hasMessageEmphasisRing: boolean;
    isModal: boolean;
    isSecureMessage: boolean;
    lastEbMessageTime: any;
    message: any;
    navigateToRouteForMediaViewer: any;
    nextMessage: any;
    prevMessage: any;
    renderAttachment: any;
    shouldRenderUnreadIndicator: boolean;
    stopHoveringRef: React.RefObject<HTMLDivElement>;
    threadType: any;
    useReactionsV2?: boolean;
  }) => {
    const displayContext = useMWMessageDisplayContext() ?? "standard";
    const isStandardMessageList = displayContext === "standard";
    const isPinnedMessages = displayContext === "pinnedMessages";

    const actor = useActor();
    const isFirstMessageInGroup =
      isPinnedMessages || isStartOfGroup(message, prevMessage);
    const isCMThread = isAnyCMThread(threadType);
    const isBroadcastThreadType = isBroadcastThread(threadType);
    const isDiscoverableBroadcastChannel =
      isDiscoverablePublicBroadcastChannel(threadType);
    const isGroupThread = isGroup(threadType);
    const isSecureGroupThread = isArmadilloSecure(threadType) && isGroupThread;

    const { seenCountV2Enabled } = useMWPThreadCapabilitiesContext();
    const hasClickState = !message.isUnsent && seenCountV2Enabled;
    const isMessageClickableInThread =
      hasClickState &&
      !isDiscoverableBroadcastChannel &&
      !isCMSubthread(threadType);

    const isOutgoing = I64.equal(message.senderId, actor);
    const { nextNonAdminMessage, isLastMessage } = useNextNonAdminMessage(
      message,
      nextMessage
    );
    const isIncoming = !isOutgoing;

    const [isFocused, setFocused] = useState(false);
    const [isHovered, setHovered] = useState(false);

    const setFocusedInTransition = useCallback(
      (focused: boolean) =>
        startTransition(() => {
          setFocused(focused);
        }),
      [setFocused]
    );

    const setHoveredInTransition = useCallback(
      (hovered: boolean) =>
        startTransition(() => {
          setHovered(hovered);
        }),
      [setHovered]
    );

    const messageDomID = useId();

    const [isDialogOpened, setIsDialogOpened] = useState(false);
    const theme = useMWMessageRowTheme();

    const attachments = useMWPGetAttachments(message);
    const isXMAStandardLayout =
      attachments.length > 0 &&
      attachments[0].xmaLayoutType != null &&
      I64.equal(
        attachments[0].xmaLayoutType,
        LSIntEnum.ofNumber(MNLSXMALayoutType.STANDARD_DXMA)
      );
    const isXMASharedStackLayout =
      attachments.length > 0 &&
      attachments[0].xmaLayoutType != null &&
      I64.equal(
        attachments[0].xmaLayoutType,
        LSIntEnum.ofNumber(MNLSXMALayoutType.SHARED_STACK)
      );

    const deemphasizeStyle = useMWPEditMessageDeemphasizer();

    let messageContent;
    if (message.isAdminMessage) {
      messageContent = (
        <MWMessageRowAdminMessage
          domElementRef={domElementRef}
          isDialogOpened={isDialogOpened}
          isFirstMessageInGroup={isFirstMessageInGroup}
          isFocused={isFocused}
          isModal={isModal}
          message={message}
          messageDomID={messageDomID}
          nextMessage={nextMessage}
          outgoing={isOutgoing}
          prevMessage={prevMessage}
          setFocusedInTransition={setFocusedInTransition}
          setHoveredInTransition={setHoveredInTransition}
          setIsDialogOpened={setIsDialogOpened}
          stopHoveringRef={stopHoveringRef}
        />
      );
    } else if (isXMAStandardLayout || isXMASharedStackLayout) {
      messageContent = (
        <MWPMessageListColumnShrinkwrap centered>
          <MWV2MessageRowSimple>
            <BaseView xstyle={deemphasizeStyle}>
              <MWMessageListAttachmentContainer
                connectBottom={false}
                connectTop={false}
                message={message}
                outgoing={isOutgoing}
                xstyle={styles.adminMessageAttachment}
              />
            </BaseView>
          </MWV2MessageRowSimple>
        </MWPMessageListColumnShrinkwrap>
      );
    } else {
      messageContent = (
        <MWShowMessagePromptPopoverContextProvider>
          <MWMessageEditContextProvider>
            <>
              <MWMessageRowUnreadMessagesIndicator
                shouldRenderUnreadIndicator={shouldRenderUnreadIndicator}
              />
              {isFirstMessageInGroup && isStandardMessageList ? (
                <MWV2MessageStartOfGroupContent
                  message={message}
                  prevMessage={prevMessage}
                />
              ) : null}
              <MessageStatusWrapper
                isBroadcastChannel={isDiscoverableBroadcastChannel}
                isBroadcastThread={isBroadcastThreadType}
                isLargeGroup={false}
                isSecureGroupThread={isSecureGroupThread}
                isSecureThread={isArmadilloSecure(threadType)}
                message={message}
                nextMessage={nextNonAdminMessage}
              >
                {(status) => (
                  <MWPMessageListRowWithKeyboardInteractions
                    domElementRef={domElementRef}
                    isDialogOpened={isDialogOpened}
                    isFocused={isFocused}
                    isModal={isModal}
                    message={message}
                    messageDomID={messageDomID}
                    outgoing={isOutgoing}
                    setFocused={setFocusedInTransition}
                    setHovered={setHoveredInTransition}
                    setIsDialogOpened={setIsDialogOpened}
                    stopHoveringRef={stopHoveringRef}
                    theme={theme}
                  >
                    <MWMessageRowHeader
                      isCMThread={isCMThread}
                      isFirstMessageInGroup={isFirstMessageInGroup}
                      isGroupThread={isGroupThread}
                      isPinnedMessageList={isPinnedMessages}
                      isStandardMessageList={isStandardMessageList}
                      message={message}
                      outgoing={isOutgoing}
                      threadType={threadType}
                    />
                    <MWMessageRowBody
                      containerThreadKey={containerThreadKey}
                      focused={isFocused}
                      hasClickState={isMessageClickableInThread}
                      hasMessageEmphasisRing={hasMessageEmphasisRing}
                      hovered={isHovered}
                      incoming={isIncoming}
                      isDialogOpened={isDialogOpened}
                      isFirstMessageInGroup={isFirstMessageInGroup}
                      isGroupThread={isGroupThread}
                      isModal={isModal}
                      isPinnedMessageList={isPinnedMessages}
                      isSecureMessage={isSecureMessage}
                      isStandardMessageList={isStandardMessageList}
                      message={message}
                      navigateToRouteForMediaViewer={
                        navigateToRouteForMediaViewer
                      }
                      nextMessage={nextMessage}
                      prevMessage={prevMessage}
                      renderAttachment={renderAttachment}
                      shouldUseReactionsV2={useReactionsV2}
                      threadType={threadType}
                    />
                    <MWMessageRowFooter
                      hasClickState={isMessageClickableInThread}
                      incoming={isIncoming}
                      isBroadcastThread={isBroadcastThread}
                      isLastMessage={isLastMessage}
                      isStandardMessageList={isStandardMessageList}
                      message={message}
                      nextMessage={nextMessage}
                      outgoing={isOutgoing}
                      status={status}
                    />
                  </MWPMessageListRowWithKeyboardInteractions>
                )}
              </MessageStatusWrapper>
            </>
          </MWMessageEditContextProvider>
        </MWShowMessagePromptPopoverContextProvider>
      );
    }

    return (
      <>
        {messageContent}
        <MWMessageRowMissingMessagesIndicator
          lastEbMessageTime={lastEbMessageTime}
          message={message}
          nextMessage={nextMessage}
        />
      </>
    );
  }
);

export default MWMessageRow;
