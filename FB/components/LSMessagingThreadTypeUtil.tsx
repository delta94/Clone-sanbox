__d("LSMessagingThreadTypeUtil", ["I64", "LSIntEnum", "LSMessageThreadUnsendabilityStatus", "LSThreadBitOffset", "MWCMIsAnyCMThread", "MessagingThreadSubtype", "MetaConfig"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;

    function a(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(2)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(8)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(16)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(5)) || c("MWCMIsAnyCMThread")(a) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(3)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(150)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(151)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(154)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(155)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(152)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(153)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(26))
    }

    function j(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(1)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(7)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(10)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(13)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(201))
    }

    function b(a) {
        return j(a) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(15))
    }

    function k(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(15)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(16))
    }

    function e(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(15)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(16)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(1)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(201)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(2))
    }

    function f(a) {
        return a === "e2ee_cutover" || a === "inbox"
    }

    function l(a, b) {
        b === void 0 && (b = !0);
        return !b && (h || (h = d("I64"))).equal(a.parentThreadKey, (i || (i = d("LSIntEnum"))).ofNumber(0)) ? !1 : d("LSThreadBitOffset").has(21, a)
    }

    function m(a) {
        return a != null && (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").IGD_BC_PARTNERSHIP))
    }

    function n(a) {
        return l(a, !1)
    }

    function o(a) {
        return (h || (h = d("I64"))).equal(a.parentThreadKey, (i || (i = d("LSIntEnum"))).ofNumber(-3))
    }

    function p(a) {
        return a == null ? !1 : (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").BUSINESS_SUPPORT_THREAD)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").SUPPORT_MESSAGING_THREAD))
    }

    function q(a) {
        var b = (h || (h = d("I64"))).equal(a.threadType, (i || (i = d("LSIntEnum"))).ofNumber(2)),
            c = (h || (h = d("I64"))).equal(a.threadType, (i || (i = d("LSIntEnum"))).ofNumber(1)) && !K(a);
        return !p(a.threadSubtype) && (b || c)
    }

    function r(a) {
        return a == null ? !1 : (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").PAGE_TO_USER))
    }

    function s(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(150)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(154)) && c("MetaConfig")._("36")
    }

    function t(a) {
        return (v(a) || w(a)) && c("MetaConfig")._("32")
    }

    function u(a) {
        return (v(a) || w(a)) && !c("MetaConfig")._("32")
    }

    function v(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(152))
    }

    function w(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(153))
    }

    function x(a) {
        return ((h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(155)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(154))) && c("MetaConfig")._("36")
    }

    function y(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(154)) && c("MetaConfig")._("36")
    }

    function z(a) {
        return a == null ? !1 : (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(150)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(154))
    }

    function A(a) {
        return z(a) || t(a)
    }

    function B(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(26))
    }

    function C(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(17))
    }

    function D(a) {
        return (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(19))
    }

    function E(a) {
        return a == null ? !1 : (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(151)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(155))
    }

    function F(a) {
        return a == null ? !1 : E(a) || w(a)
    }

    function G(a) {
        return a == null ? !1 : (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(201))
    }

    function H(a) {
        return d("LSThreadBitOffset").has(183, a)
    }

    function I(a) {
        return k(a) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(1)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(2)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(3)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(4)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(5)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(6)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(10)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(11))
    }

    function J(a) {
        return A(a) || E(a) || w(a) || c("MWCMIsAnyCMThread")(a) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(17)) || B(a)
    }

    function K(a) {
        return (h || (h = d("I64"))).equal(a.threadType, (i || (i = d("LSIntEnum"))).ofNumber(1)) && a.cannotUnsendReason != null && (h || (h = d("I64"))).equal(a.cannotUnsendReason, (i || (i = d("LSIntEnum"))).ofNumber(c("LSMessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD))
    }

    function L(a) {
        return a != null && ((h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").WORKCHAT_GROUP_THREAD)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").WORKROOM_GROUP_THREAD)) || (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(c("MessagingThreadSubtype").WORKCHAT_ONE_TO_ONE)))
    }
    g.isGroup = a;
    g.isOpenOneToOne = j;
    g.isOneToOne = b;
    g.isArmadilloSecure = k;
    g.isRecentsSectionAllowedTypes = e;
    g.isMessengerOrE2EEInbox = f;
    g.isMessageRequest = l;
    g.isPartnership = m;
    g.isIGDMessageRequest = n;
    g.isHiddenRequest = o;
    g.isBusinessSupportThread = p;
    g.isOpenFnFThread = q;
    g.isPageToUserThread = r;
    g.isJoinedSocialChannel = s;
    g.isDiscoverablePublicBroadcastChannel = t;
    g.isDiscoverablePublicBroadcastChannelWithNoAccessibility = u;
    g.isJoinedDiscoverablePublicBroadcastChannel = v;
    g.isUnjoinedDiscoverablePublicBroadcastChannel = w;
    g.isSocialChannelV2 = x;
    g.isJoinedSocialChannelV2 = y;
    g.isSocialChannel = z;
    g.isDiscoverableChannel = A;
    g.isCMSubthread = B;
    g.isCMFolder = C;
    g.isCMGroupUnjoined = D;
    g.isSocialChannelUnjoined = E;
    g.isChannelPreview = F;
    g.isAiBot = G;
    g.isAiBotSummoning = H;
    g.isPrivateThread = I;
    g.isPublicCMThread = J;
    g.isThreadForPage = K;
    g.isWorkThread = L
}), 98);




const LSIntEnum = {
    ofNumber: (n: number | bigint) => BigInt(n),
};
  
const I64 = {
    equal: (a: bigint, b: bigint) => a === b,
};
  
const LSThreadBitOffset = {
    has: (offset: number, thread: any) => {
        // Implement bit offset checking logic here
        return false;
    },
};
  
const MessagingThreadSubtype = {
    IGD_BC_PARTNERSHIP: BigInt(0),
    BUSINESS_SUPPORT_THREAD: BigInt(0),
    SUPPORT_MESSAGING_THREAD: BigInt(0),
    PAGE_TO_USER: BigInt(0),
    WORKCHAT_GROUP_THREAD: BigInt(0),
    WORKROOM_GROUP_THREAD: BigInt(0),
    WORKCHAT_ONE_TO_ONE: BigInt(0),
};
  
  const LSMessageThreadUnsendabilityStatus = {
    DENY_IF_PAGE_THREAD: BigInt(0),
  };
  
  const MWCMIsAnyCMThread = (threadKey: bigint) => {
    // Implement logic to check if the thread is a CM thread
    return false;
  };
  
  const MetaConfig = {
    _: (configKey: string) => {
      // Implement logic to retrieve config value based on the key
      return false;
    },
  };
  
const isGroup = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(2)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(8)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(16)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(5)) ||
    MWCMIsAnyCMThread(threadType) ||
    I64.equal(threadType, LSIntEnum.ofNumber(3)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(150)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(151)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(154)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(155)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(152)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(153)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(26));

const isOpenOneToOne = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(1)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(7)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(10)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(13)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(201));
  
const isOneToOne = (threadType: bigint) =>
    isOpenOneToOne(threadType) || I64.equal(threadType, LSIntEnum.ofNumber(15));
  
const isArmadilloSecure = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(15)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(16));
  
const isRecentsSectionAllowedTypes = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(15)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(16)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(1)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(201)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(2));
  
const isMessengerOrE2EEInbox = (inboxType: string) =>
    inboxType === "e2ee_cutover" || inboxType === "inbox";
  
const isMessageRequest = (thread: any, shouldCheckParentThread = true) =>
    !shouldCheckParentThread &&
    I64.equal(thread.parentThreadKey, LSIntEnum.ofNumber(0))
    ? false
    : LSThreadBitOffset.has(21, thread);
  
const isPartnership = (threadSubtype: bigint | null) =>
    threadSubtype != null &&
    I64.equal(
    threadSubtype,
    LSIntEnum.ofNumber(MessagingThreadSubtype.IGD_BC_PARTNERSHIP)
    );
  
const isIGDMessageRequest = (thread: any) => isMessageRequest(thread, false);
  
const isHiddenRequest = (thread: any) =>
    I64.equal(thread.parentThreadKey, LSIntEnum.ofNumber(-3));
  
const isBusinessSupportThread = (threadSubtype: bigint | null) =>
    threadSubtype != null &&
    (I64.equal(
    threadSubtype,
    LSIntEnum.ofNumber(MessagingThreadSubtype.BUSINESS_SUPPORT_THREAD)
    ) ||
    I64.equal(
        threadSubtype,
        LSIntEnum.ofNumber(MessagingThreadSubtype.SUPPORT_MESSAGING_THREAD)
    ));
  
const isOpenFnFThread = (thread: any) => {
    const isGroup =
    I64.equal(thread.threadType, LSIntEnum.ofNumber(2));
    const isOneToOne =
    I64.equal(thread.threadType, LSIntEnum.ofNumber(1)) && !isThreadForPage(thread);
    return !isBusinessSupportThread(thread.threadSubtype) && (isGroup || isOneToOne);
};
  
const isPageToUserThread = (threadSubtype: bigint | null) =>
    threadSubtype != null &&
    I64.equal(threadSubtype, LSIntEnum.ofNumber(MessagingThreadSubtype.PAGE_TO_USER));
  
const isJoinedSocialChannel = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(150)) ||
    (I64.equal(threadType, LSIntEnum.ofNumber(154)) && MetaConfig._("36"));
  
const isDiscoverablePublicBroadcastChannel = (threadType: bigint) =>
    (isJoinedDiscoverablePublicBroadcastChannel(threadType) ||
    isUnjoinedDiscoverablePublicBroadcastChannel(threadType)) &&
    MetaConfig._("32");

const isDiscoverablePublicBroadcastChannelWithNoAccessibility = (
    threadType: bigint
) =>
    (isJoinedDiscoverablePublicBroadcastChannel(threadType) ||
    isUnjoinedDiscoverablePublicBroadcastChannel(threadType)) &&
    !MetaConfig._("32");
    
const isJoinedDiscoverablePublicBroadcastChannel = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(152));

const isUnjoinedDiscoverablePublicBroadcastChannel = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(153));

const isSocialChannelV2 = (threadType: bigint) =>
    (I64.equal(threadType, LSIntEnum.ofNumber(155)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(154))) &&
    MetaConfig._("36");

const isJoinedSocialChannelV2 = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(154)) && MetaConfig._("36");

const isSocialChannel = (threadType: bigint | null) =>
    threadType != null &&
    (I64.equal(threadType, LSIntEnum.ofNumber(150)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(154)));

const isDiscoverableChannel = (threadType: bigint | null) =>
    isSocialChannel(threadType) || isDiscoverablePublicBroadcastChannel(threadType!);

const isCMSubthread = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(26));

const isCMFolder = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(17));

const isCMGroupUnjoined = (threadType: bigint) =>
    I64.equal(threadType, LSIntEnum.ofNumber(19));

const isSocialChannelUnjoined = (threadType: bigint | null) =>
    threadType != null &&
    (I64.equal(threadType, LSIntEnum.ofNumber(151)) ||
        I64.equal(threadType, LSIntEnum.ofNumber(155)));

const isChannelPreview = (threadType: bigint | null) =>
    threadType != null &&
    (isSocialChannelUnjoined(threadType) ||
        isUnjoinedDiscoverablePublicBroadcastChannel(threadType));

const isAiBot = (threadType: bigint | null) =>
    threadType != null && I64.equal(threadType, LSIntEnum.ofNumber(201));

    const isAiBotSummoning = (thread: any) =>
    LSThreadBitOffset.has(183, thread);

const isPrivateThread = (threadType: bigint) =>
    isArmadilloSecure(threadType) ||
    I64.equal(threadType, LSIntEnum.ofNumber(1)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(2)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(3)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(4)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(5)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(6)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(10)) ||
    I64.equal(threadType, LSIntEnum.ofNumber(11));

const isPublicCMThread = (threadType: bigint | null) =>
    isDiscoverableChannel(threadType) ||
    isSocialChannelUnjoined(threadType) ||
    isUnjoinedDiscoverablePublicBroadcastChannel(threadType!) ||
    MWCMIsAnyCMThread(threadType!) ||
    I64.equal(threadType!, LSIntEnum.ofNumber(17)) ||
    isCMSubthread(threadType!);

const isThreadForPage = (thread: any) =>
    I64.equal(thread.threadType, LSIntEnum.ofNumber(1)) &&
    thread.cannotUnsendReason != null &&
    I64.equal(
        thread.cannotUnsendReason,
        LSIntEnum.ofNumber(LSMessageThreadUnsendabilityStatus.DENY_IF_PAGE_THREAD)
);

const isWorkThread = (threadSubtype: bigint | null) =>
    threadSubtype != null &&
    (I64.equal(
        threadSubtype,
        LSIntEnum.ofNumber(MessagingThreadSubtype.WORKCHAT_GROUP_THREAD)
    ) ||
        I64.equal(
        threadSubtype,
        LSIntEnum.ofNumber(MessagingThreadSubtype.WORKROOM_GROUP_THREAD)
        ) ||
        I64.equal(
        threadSubtype,
        LSIntEnum.ofNumber(MessagingThreadSubtype.WORKCHAT_ONE_TO_ONE)
    ));

export default {
    isGroup,
    isOpenOneToOne,
    isOneToOne,
    isArmadilloSecure,
    isRecentsSectionAllowedTypes,
    isMessengerOrE2EEInbox,
    isMessageRequest,
    isPartnership,
    isIGDMessageRequest,
    isHiddenRequest,
    isBusinessSupportThread,
    isOpenFnFThread,
    isPageToUserThread,
    isJoinedSocialChannel,
    isDiscoverablePublicBroadcastChannel,
    isDiscoverablePublicBroadcastChannelWithNoAccessibility,
    isJoinedDiscoverablePublicBroadcastChannel,
    isUnjoinedDiscoverablePublicBroadcastChannel,
    isSocialChannelV2,
    isJoinedSocialChannelV2,
    isSocialChannel,
    isDiscoverableChannel,
    isCMSubthread,
    isCMFolder,
    isCMGroupUnjoined,
    isSocialChannelUnjoined,
    isChannelPreview,
    isAiBot,
    isAiBotSummoning,
    isPrivateThread,
    isPublicCMThread,
    isThreadForPage,
    isWorkThread,
};