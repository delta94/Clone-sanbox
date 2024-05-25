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
