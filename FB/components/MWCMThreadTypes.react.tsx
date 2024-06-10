__d(
  "MWCMThreadTypes.react",
  [
    "I64",
    "LSCommunityBitOffset",
    "LSIntEnum",
    "MessagingThreadSubtype",
    "MetaConfig",
    "isUnjoinedCMThread",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      return (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(18)
        ) ||
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(23)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(21))
      );
    }
    function j(a) {
      return (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(18)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(19))
      );
    }
    function k(a) {
      return (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(23)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(24))
      );
    }
    function b(a) {
      return a == null
        ? !1
        : (h || (h = d("I64"))).equal(
            a,
            (i || (i = d("LSIntEnum"))).ofNumber(
              c("MessagingThreadSubtype").MARKETPLACE_THREAD
            )
          );
    }
    function e(a) {
      return a == null
        ? !1
        : (h || (h = d("I64"))).equal(
            a,
            (i || (i = d("LSIntEnum"))).ofNumber(
              c("MessagingThreadSubtype").IG_CREATOR_SUBSCRIBER_BROADCAST_CHAT
            )
          );
    }
    function l(a) {
      return (
        (h || (h = d("I64"))).equal(
          a,
          (i || (i = d("LSIntEnum"))).ofNumber(21)
        ) ||
        (h || (h = d("I64"))).equal(a, (i || (i = d("LSIntEnum"))).ofNumber(22))
      );
    }
    function f(a, b) {
      var e = d("LSCommunityBitOffset").has(1, b),
        f = (h || (h = d("I64"))).equal(
          a.threadType,
          (i || (i = d("LSIntEnum"))).ofNumber(21)
        ),
        g = k(a.threadType) && c("MetaConfig")._("34"),
        m = l(a.threadType) && c("MetaConfig")._("35");
      b =
        b.takedownState != null &&
        (h || (h = d("I64"))).equal(
          b.takedownState,
          (i || (i = d("LSIntEnum"))).ofNumber(1)
        );
      return (
        !b &&
        (j(a.threadType) || g || m || e || f || a.hasPendingInvitation === !0)
      );
    }
    g.isJoinedCMThread = a;
    g.isUnjoinedCMThread = d("isUnjoinedCMThread").isUnjoinedCMThread;
    g.isStandardCMThread = j;
    g.isBroadcastThread = k;
    g.isMarketplaceThread = b;
    g.isIGBroadcastChannelThread = e;
    g.isPrivateThread = l;
    g.isThreadEnabled = f;
  },
  98
);

import { I64 } from "I64";
import { LSCommunityBitOffset } from "LSCommunityBitOffset";
import { LSIntEnum } from "LSIntEnum";
import { MessagingThreadSubtype } from "MessagingThreadSubtype";
import { MetaConfig } from "MetaConfig";
import { isUnjoinedCMThread as isUnjoinedCMThreadUtil } from "isUnjoinedCMThread";

const isJoinedCMThread = (a: number): boolean => {
  return (
    I64.equal(a, LSIntEnum.ofNumber(18)) ||
    I64.equal(a, LSIntEnum.ofNumber(23)) ||
    I64.equal(a, LSIntEnum.ofNumber(21))
  );
};

const isStandardCMThread = (a: number): boolean => {
  return (
    I64.equal(a, LSIntEnum.ofNumber(18)) || I64.equal(a, LSIntEnum.ofNumber(19))
  );
};

const isBroadcastThread = (a: number): boolean => {
  return (
    I64.equal(a, LSIntEnum.ofNumber(23)) || I64.equal(a, LSIntEnum.ofNumber(24))
  );
};

const isMarketplaceThread = (a: number | null): boolean => {
  return a != null
    ? I64.equal(
        a,
        LSIntEnum.ofNumber(MessagingThreadSubtype.MARKETPLACE_THREAD)
      )
    : false;
};

const isIGBroadcastChannelThread = (a: number | null): boolean => {
  return a != null
    ? I64.equal(
        a,
        LSIntEnum.ofNumber(
          MessagingThreadSubtype.IG_CREATOR_SUBSCRIBER_BROADCAST_CHAT
        )
      )
    : false;
};

const isPrivateThread = (a: number): boolean => {
  return (
    I64.equal(a, LSIntEnum.ofNumber(21)) || I64.equal(a, LSIntEnum.ofNumber(22))
  );
};

interface Thread {
  threadType: number;
  hasPendingInvitation: boolean;
}

interface Bitfield {
  takedownState: number | null;
}

const isThreadEnabled = (a: Thread, b: Bitfield): boolean => {
  const hasCommunityBit = LSCommunityBitOffset.has(1, b);
  const isPrivate = I64.equal(a.threadType, LSIntEnum.ofNumber(21));
  const broadcastThread = isBroadcastThread(a.threadType) && MetaConfig._("34");
  const privateThread = isPrivateThread(a.threadType) && MetaConfig._("35");
  const isTakedown =
    b.takedownState != null &&
    I64.equal(b.takedownState, LSIntEnum.ofNumber(1));

  return (
    !isTakedown &&
    (isStandardCMThread(a.threadType) ||
      broadcastThread ||
      privateThread ||
      hasCommunityBit ||
      isPrivate ||
      a.hasPendingInvitation)
  );
};

export {
  isJoinedCMThread,
  isUnjoinedCMThreadUtil as isUnjoinedCMThread,
  isStandardCMThread,
  isBroadcastThread,
  isMarketplaceThread,
  isIGBroadcastChannelThread,
  isPrivateThread,
  isThreadEnabled,
};
