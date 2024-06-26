__d(
  "useTopNavigationLogging",
  [
    "CometPassiveGetRouterStateContext",
    "CometProductAttribution",
    "WebSession",
    "react",
    "requireDeferred",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    var i = a.useCallback,
      j = a.useContext,
      k = a.useMemo,
      l = c("requireDeferred")("CometTopnavItemClickFalcoEvent").__setRef(
        "useTopNavigationLogging"
      ),
      m = c("requireDeferred")("CometTopnavItemImpressionFalcoEvent").__setRef(
        "useTopNavigationLogging"
      ),
      n = function (a) {
        var b = a.badgeValue;
        b = b === void 0 ? "" : b;
        var c = a.itemKey,
          e = a.navItemType,
          f = a.passiveGetRouterState,
          g = a.position;
        g = g === void 0 ? 0 : g;
        a = a.selected;
        a = a === void 0 ? !1 : a;
        return {
          bt: "number",
          bv: b,
          nii: null,
          nin: c,
          nip: g,
          nit: e,
          pa: d(
            "CometProductAttribution"
          ).getMinifiedTopMostRouteProductAttribution(f),
          sel: a,
          si: d("WebSession").getId(),
        };
      },
      o = function (a) {
        return i(
          function () {
            l.onReady(function (b) {
              b.log(function () {
                return n(a);
              });
            });
          },
          [a]
        );
      },
      p = function (a) {
        var b = i(
          function () {
            m.onReady(function (b) {
              b.log(function () {
                return n(a);
              });
            });
          },
          [a]
        );
        return c("useVisibilityObserver")({ onVisible: b });
      },
      q = function (a) {
        var b = a.badgeValue,
          d = b === void 0 ? "" : b,
          e = a.itemKey,
          f = a.navItemType,
          g = a.position;
        b = a.selected;
        var h = b === void 0 ? !1 : b,
          i = j(c("CometPassiveGetRouterStateContext"));
        a = k(
          function () {
            return {
              badgeValue: d,
              itemKey: e,
              navItemType: f,
              passiveGetRouterState: i,
              position: g,
              selected: h,
            };
          },
          [i, d, e, f, g, h]
        );
        return [o(a), p(a)];
      };
    b = function () {
      return q({ itemKey: "logo", navItemType: "logo" });
    };
    e = function () {
      return q({ itemKey: "create-button", navItemType: "create" });
    };
    f = function () {
      return q({
        itemKey: "unified-creation-jewel",
        navItemType: "unified_creation",
      });
    };
    a = function (a, b) {
      return q({ itemKey: a, navItemType: "unified_creation", position: b });
    };
    var r = function () {
        return q({ itemKey: "mega-menu-jewel", navItemType: "mega_menu" });
      },
      s = function (a, b) {
        return q({ itemKey: a, navItemType: "create", position: b });
      },
      t = function () {
        return q({ itemKey: "settings-button", navItemType: "jewel" });
      },
      u = function () {
        return q({ itemKey: "home-link", navItemType: "topnav-link" });
      },
      v = function () {
        return q({ itemKey: "profile-link", navItemType: "topnav-link" });
      },
      w = function () {
        return q({ itemKey: "find-friends", navItemType: "topnav-link" });
      },
      x = function (a, b, c) {
        return q({
          itemKey: a,
          navItemType: "settings",
          position: b,
          selected: c,
        });
      },
      y = function (a) {
        return q({
          badgeValue: a,
          itemKey: "messenger-jewel",
          navItemType: "jewel",
        });
      },
      z = function () {
        return q({ itemKey: "friends-jewel", navItemType: "jewel" });
      },
      A = function (a) {
        return q({
          badgeValue: a,
          itemKey: "notifications-jewel",
          navItemType: "jewel",
        });
      },
      B = function () {
        return q({ itemKey: "birthdays", navItemType: "birthdays" });
      },
      C = function () {
        return q({
          itemKey: "inline-friends-rhc",
          navItemType: "inline_friends_rhc",
        });
      },
      D = function () {
        return q({ itemKey: "pages-rhc", navItemType: "pages_rhc" });
      },
      E = function () {
        return q({
          itemKey: "friends-count-rhc",
          navItemType: "friend_count_rhc",
        });
      },
      F = function () {
        return q({ itemKey: "event", navItemType: "events" });
      },
      G = function () {
        return q({ itemKey: "live-video-rhc", navItemType: "live_video_rhc" });
      },
      H = function () {
        return q({
          itemKey: "watch-video-rhc",
          navItemType: "watch_video_rhc",
        });
      };
    g.useLogoLoggingCallbacks = b;
    g.useCreateButtonLoggingCallbacks = e;
    g.useUnifiedCreationButtonLoggingCallbacks = f;
    g.useUnifiedCreationItemLoggingCallbacks = a;
    g.useMegaMenuLoggingCallbacks = r;
    g.useCreateItemLoggingCallbacks = s;
    g.useSettingsButtonLoggingCallbacks = t;
    g.useHomeLinkLoggingCallbacks = u;
    g.useProfileLinkLoggingCallbacks = v;
    g.useFindFriendsLinkLoggingCallbacks = w;
    g.useSettingsItemLoggingCallbacks = x;
    g.useMessengerButtonLoggingCallbacks = y;
    g.useFriendsButtonLoggingCallbacks = z;
    g.useNotificationsButtonLoggingCallbacks = A;
    g.useBirthdaysButtonLoggingCallbacks = B;
    g.useInlineFriendRequestsRHCLoggingCallbacks = C;
    g.usePagesRHCLoggingCallbacks = D;
    g.useFriendRequestsCountRHCLoggingCallbacks = E;
    g.useEventsButtonLoggingCallbacks = F;
    g.useLiveVideoRHCLoggingCallbacks = G;
    g.useWatchVideoRHCLoggingCallbacks = H;
  },
  98
);
