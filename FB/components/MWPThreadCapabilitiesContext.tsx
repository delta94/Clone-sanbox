__d(
  "MWPThreadCapabilitiesContext",
  [
    "I64",
    "Int64Hooks",
    "LSIntEnum",
    "LSMessageThreadUnsendabilityStatus",
    "LSThreadBitOffset",
    "ThreadStatus",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = h || (h = d("react"));
    e = h;
    var l = e.createContext,
      m = e.useContext,
      n = l({
        blurMediaEnabled: !1,
        canUnsendMessage: !1,
        communityMessagingChannelDescriptionCustomization: !1,
        communityMessagingChannelInvite: !1,
        disableLinks: !1,
        editMessageEnabled: !1,
        hasLSThreadBitOffset: function (a) {
          return !1;
        },
        isPaused: !1,
        localDeleteMessageEnabled: !1,
        messageForwardEnabled: !1,
        messageUnsendEnabled: !1,
        modifyPinnedMessageV2Enabled: !1,
        reactEnabled: !1,
        reactionsV2WriteEnabled: !1,
        replyEnabled: !1,
        reportMessageToAdminEnabled: !1,
        rtcVideoCallEnabled: !1,
        rtcVoiceCallEnabled: !1,
        seenCountV2Enabled: !1,
        subThreadCreationEnabled: !1,
      });
    function a(a) {
      var b = a.children,
        e = a.customCapabilityCheck,
        f = a.thread,
        g = f.capabilities,
        h = f.capabilities2,
        l = f.capabilities3,
        m = f.capabilities4,
        o = f.threadType,
        p = d("Int64Hooks").useCallbackInt64(
          function (a) {
            var b = {
              capabilities: g,
              capabilities2: h,
              capabilities3: l,
              capabilities4: m,
              threadType: o,
            };
            return d("LSThreadBitOffset").has(a, b);
          },
          [g, h, l, m, o]
        );
      a = d("Int64Hooks").useMemoInt64(
        function () {
          var a;
          return {
            blurMediaEnabled: p(46),
            canUnsendMessage:
              f.cannotUnsendReason != null
                ? (i || (i = d("I64"))).equal(
                    f.cannotUnsendReason,
                    (j || (j = d("LSIntEnum"))).ofNumber(
                      c("LSMessageThreadUnsendabilityStatus").CAN_UNSEND
                    )
                  )
                : !0,
            communityMessagingChannelDescriptionCustomization: p(135),
            communityMessagingChannelInvite: p(120),
            disableLinks: p(45),
            editMessageEnabled: p(194),
            hasLSThreadBitOffset: (a = p) != null ? a : e,
            isPaused:
              f.threadStatus != null &&
              (i || (i = d("I64"))).equal(
                f.threadStatus,
                (i || (i = d("I64"))).of_int32(c("ThreadStatus").PAUSED)
              ),
            localDeleteMessageEnabled: p(102),
            messageForwardEnabled: p(103),
            messageUnsendEnabled:
              p(122) && f.cannotUnsendReason != null
                ? (i || (i = d("I64"))).equal(
                    f.cannotUnsendReason,
                    (j || (j = d("LSIntEnum"))).ofNumber(
                      c("LSMessageThreadUnsendabilityStatus").CAN_UNSEND
                    )
                  )
                : !1,
            modifyPinnedMessageV2Enabled: p(172),
            reactEnabled: p(18),
            reactionsV2WriteEnabled: p(169),
            replyEnabled: p(42),
            reportMessageToAdminEnabled: p(93),
            rtcVideoCallEnabled: p(24),
            rtcVoiceCallEnabled: p(25),
            seenCountV2Enabled: p(140),
            subThreadCreationEnabled: p(167),
          };
        },
        [e, p, f.threadStatus, f.cannotUnsendReason]
      );
      return k.jsx(n.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return m(n);
    }
    g.Provider = a;
    g.useMWPThreadCapabilitiesContext = b;
  },
  98
);

import { I64 } from "I64";
import { useCallbackInt64, useMemoInt64 } from "Int64Hooks";
import { LSIntEnum } from "LSIntEnum";
import { LSMessageThreadUnsendabilityStatus } from "LSMessageThreadUnsendabilityStatus";
import { LSThreadBitOffset } from "LSThreadBitOffset";
import { ThreadStatus } from "ThreadStatus";
import React, { createContext, useContext, ReactNode } from "react";

interface Thread {
  capabilities: any;
  capabilities2: any;
  capabilities3: any;
  capabilities4: any;
  threadType: any;
  cannotUnsendReason: any;
  threadStatus: any;
}

interface CapabilitiesContextProps {
  blurMediaEnabled: boolean;
  canUnsendMessage: boolean;
  communityMessagingChannelDescriptionCustomization: boolean;
  communityMessagingChannelInvite: boolean;
  disableLinks: boolean;
  editMessageEnabled: boolean;
  hasLSThreadBitOffset: (a: number) => boolean;
  isPaused: boolean;
  localDeleteMessageEnabled: boolean;
  messageForwardEnabled: boolean;
  messageUnsendEnabled: boolean;
  modifyPinnedMessageV2Enabled: boolean;
  reactEnabled: boolean;
  reactionsV2WriteEnabled: boolean;
  replyEnabled: boolean;
  reportMessageToAdminEnabled: boolean;
  rtcVideoCallEnabled: boolean;
  rtcVoiceCallEnabled: boolean;
  seenCountV2Enabled: boolean;
  subThreadCreationEnabled: boolean;
}

const MWPThreadCapabilitiesContext = createContext<CapabilitiesContextProps>({
  blurMediaEnabled: false,
  canUnsendMessage: false,
  communityMessagingChannelDescriptionCustomization: false,
  communityMessagingChannelInvite: false,
  disableLinks: false,
  editMessageEnabled: false,
  hasLSThreadBitOffset: (a: number) => false,
  isPaused: false,
  localDeleteMessageEnabled: false,
  messageForwardEnabled: false,
  messageUnsendEnabled: false,
  modifyPinnedMessageV2Enabled: false,
  reactEnabled: false,
  reactionsV2WriteEnabled: false,
  replyEnabled: false,
  reportMessageToAdminEnabled: false,
  rtcVideoCallEnabled: false,
  rtcVoiceCallEnabled: false,
  seenCountV2Enabled: false,
  subThreadCreationEnabled: false,
});

interface ProviderProps {
  children: ReactNode;
  customCapabilityCheck?: (a: number) => boolean;
  thread: Thread;
}

const Provider: React.FC<ProviderProps> = ({
  children,
  customCapabilityCheck,
  thread,
}) => {
  const {
    capabilities,
    capabilities2,
    capabilities3,
    capabilities4,
    threadType,
    cannotUnsendReason,
    threadStatus,
  } = thread;

  const hasLSThreadBitOffset = useCallbackInt64(
    (a) =>
      LSThreadBitOffset.has(a, {
        capabilities,
        capabilities2,
        capabilities3,
        capabilities4,
        threadType,
      }),
    [capabilities, capabilities2, capabilities3, capabilities4, threadType]
  );

  const contextValue = useMemoInt64<CapabilitiesContextProps>(
    () => ({
      blurMediaEnabled: hasLSThreadBitOffset(46),
      canUnsendMessage:
        cannotUnsendReason != null
          ? I64.equal(
              cannotUnsendReason,
              LSIntEnum.ofNumber(LSMessageThreadUnsendabilityStatus.CAN_UNSEND)
            )
          : true,
      communityMessagingChannelDescriptionCustomization:
        hasLSThreadBitOffset(135),
      communityMessagingChannelInvite: hasLSThreadBitOffset(120),
      disableLinks: hasLSThreadBitOffset(45),
      editMessageEnabled: hasLSThreadBitOffset(194),
      hasLSThreadBitOffset: customCapabilityCheck ?? hasLSThreadBitOffset,
      isPaused:
        threadStatus != null &&
        I64.equal(threadStatus, I64.of_int32(ThreadStatus.PAUSED)),
      localDeleteMessageEnabled: hasLSThreadBitOffset(102),
      messageForwardEnabled: hasLSThreadBitOffset(103),
      messageUnsendEnabled:
        hasLSThreadBitOffset(122) && cannotUnsendReason != null
          ? I64.equal(
              cannotUnsendReason,
              LSIntEnum.ofNumber(LSMessageThreadUnsendabilityStatus.CAN_UNSEND)
            )
          : false,
      modifyPinnedMessageV2Enabled: hasLSThreadBitOffset(172),
      reactEnabled: hasLSThreadBitOffset(18),
      reactionsV2WriteEnabled: hasLSThreadBitOffset(169),
      replyEnabled: hasLSThreadBitOffset(42),
      reportMessageToAdminEnabled: hasLSThreadBitOffset(93),
      rtcVideoCallEnabled: hasLSThreadBitOffset(24),
      rtcVoiceCallEnabled: hasLSThreadBitOffset(25),
      seenCountV2Enabled: hasLSThreadBitOffset(140),
      subThreadCreationEnabled: hasLSThreadBitOffset(167),
    }),
    [
      customCapabilityCheck,
      hasLSThreadBitOffset,
      threadStatus,
      cannotUnsendReason,
    ]
  );

  return (
    <MWPThreadCapabilitiesContext.Provider value={contextValue}>
      {children}
    </MWPThreadCapabilitiesContext.Provider>
  );
};

Provider.displayName = `${Provider.name} [from ${f.id}]`;

const useMWPThreadCapabilitiesContext = (): CapabilitiesContextProps => {
  return useContext(MWPThreadCapabilitiesContext);
};

export {
  Provider as MWPThreadCapabilitiesContextProvider,
  useMWPThreadCapabilitiesContext,
};
