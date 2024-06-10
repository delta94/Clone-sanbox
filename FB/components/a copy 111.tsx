__d(
  "CometLoggedInTargetedTabsListWithIcons",
  [
    "CometIconAdCenter.react",
    "CometIconAdCenterFilled.react",
    "CometIconAppInstantGames.react",
    "CometIconAppInstantGamesFilled.react",
    "CometIconEvents.react",
    "CometIconEventsFilled.react",
    "CometIconFeed.react",
    "CometIconFeedFilled.react",
    "CometIconFriends.react",
    "CometIconFriendsFilled.react",
    "CometIconGroups.react",
    "CometIconGroupsFilled.react",
    "CometIconMarketplace.react",
    "CometIconMarketplaceFilled.react",
    "CometIconMoreFilled.react",
    "CometIconMostRecentFeed.react",
    "CometIconMostRecentFeedFilled.react",
    "CometIconNews.react",
    "CometIconNewsFilled.react",
    "CometIconPages.react",
    "CometIconPagesFilled.react",
    "CometIconProfessionalDashboard.react",
    "CometIconProfessionalDashboardFilled.react",
    "CometIconWatch.react",
    "CometIconWatchFilled.react",
    "CometLoggedInTargetedTabsList",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = "4748854339";
    b = "1606854132932955";
    d = "2392950137";
    e = "2361831622";
    f = "2356318349";
    var i = "250100865708545",
      j = "192618159033122",
      k = "513746992167374",
      l = "2344061033",
      m = "2166827706737654",
      n = "608920319153834",
      o = "1146105192114219",
      p = c("gkx")("9547") ? 24 : 28,
      q =
        ((h = {}),
        (h[o] = {
          activeIcon: c("CometIconAdCenterFilled.react"),
          icon: c("CometIconAdCenter.react"),
          iconSize: p,
        }),
        (h[m] = {
          activeIcon: c("CometIconNewsFilled.react"),
          icon: c("CometIconNews.react"),
          iconSize: p,
        }),
        (h[l] = {
          activeIcon: c("CometIconEventsFilled.react"),
          icon: c("CometIconEvents.react"),
          iconSize: p,
        }),
        (h[f] = {
          activeIcon: c("CometIconFriendsFilled.react"),
          icon: c("CometIconFriends.react"),
          iconSize: p,
        }),
        (h[k] = {
          activeIcon: c("CometIconAppInstantGamesFilled.react"),
          icon: c("CometIconAppInstantGames.react"),
          iconSize: p,
        }),
        (h[e] = {
          activeIcon: c("CometIconGroupsFilled.react"),
          icon: c("CometIconGroups.react"),
          iconSize: p,
        }),
        (h[b] = {
          activeIcon: c("CometIconMarketplaceFilled.react"),
          icon: c("CometIconMarketplace.react"),
          iconSize: p,
        }),
        (h.More = {
          activeIcon: c("CometIconMoreFilled.react"),
          icon: c("CometIconMoreFilled.react"),
          iconSize: p,
        }),
        (h[n] = {
          activeIcon: c("CometIconMostRecentFeedFilled.react"),
          icon: c("CometIconMostRecentFeed.react"),
          iconSize: p,
        }),
        (h[a] = {
          activeIcon: c("CometIconFeedFilled.react"),
          icon: c("CometIconFeed.react"),
          iconSize: p,
        }),
        (h[i] = {
          activeIcon: c("CometIconPagesFilled.react"),
          icon: c("CometIconPages.react"),
          iconSize: p,
        }),
        (h[j] = {
          activeIcon: c("CometIconProfessionalDashboardFilled.react"),
          icon: c("CometIconProfessionalDashboard.react"),
          iconSize: p,
        }),
        (h[d] = {
          activeIcon: c("CometIconWatchFilled.react"),
          icon: c("CometIconWatch.react"),
          iconSize: p,
        }),
        h),
      r = new Map([]);
    c("CometLoggedInTargetedTabsList").forEach(function (a, b) {
      r.set(b, a);
      if (q[b] != null) {
        a = babelHelpers["extends"]({}, r.get(b), q[b]);
        r.set(b, a);
      }
    });
    o = r;
    g["default"] = o;
  },
  98
);
