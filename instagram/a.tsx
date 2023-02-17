__d("PolarisStoryTrayContainer.react", ["PolarisLinkBuilder", "PolarisReactRedux", "PolarisStoryActions", "PolarisStoryTray.react", "PolarisZeroActions", "PolarisZeroRatingUtils", "PolarisstorySelectors", "nullthrows", "qex", "react", "useCometRouterDispatcher"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useEffect,
        j = 5;

    function a(a) {
        var b = d("PolarisReactRedux").useSelector(function (a) {
                return d("PolarisstorySelectors").getSeenCountInStoryTray(a)
            }),
            e = d("PolarisReactRedux").useDispatch(),
            f = c("useCometRouterDispatcher")(),
            g = d("PolarisReactRedux").useStore(),
            k = g.getState().users.users,
            l = d("PolarisReactRedux").useSelector(function (a) {
                return {
                    dataFetchStatus: a.feed.extrasDataFetchStatus,
                    hasOwnReel: d("PolarisstorySelectors").userHasReel(a, c("nullthrows")(a.users.viewerId)),
                    hasSeenZeroNUX: !!a.zero.nuxPreference.story,
                    isFullySeen: d("PolarisstorySelectors").getIsFullySeen(a),
                    items: d("PolarisstorySelectors").getFeedStoryItemsWithoutOwn(a),
                    loadingId: a.stories.trayLoadingId,
                    newReelCount: a.stories.feedTray && a.stories.feedTray.count() - c("nullthrows")(b),
                    reels: d("PolarisstorySelectors").getFeedStoryTrayWithoutOwn(a),
                    seenReelCount: b,
                    storyPrefetchFinished: a.feed.storyPrefetchComplete,
                    traySession: a.stories.traySession,
                    viewerId: a.users.viewerId,
                    viewportHeight: a.displayProperties.viewportHeight,
                    viewportWidth: a.displayProperties.viewportWidth
                }
            }, d("PolarisReactRedux").shallowEqual);
        g = function (a, b, c) {
            e(d("PolarisStoryActions").openReelsMedia(a, "reel_feed_timeline", b, c))
        };
        var m = function () {
                e(d("PolarisZeroActions").updateZeroNUXPreference(d("PolarisZeroRatingUtils").ZeroNUXMedia.story))
            },
            n = function (a, b) {
                e(d("PolarisStoryActions").loadReelsMediaForTray(b, a, {
                    batchSize: 15,
                    fetchDistance: 5
                }))
            };
        i(function () {
            if (c("qex")._("1358") === !0) {
                var a;
                (a = l.reels) == null ? void 0 : a.forEach(function (a, b) {
                    if (b < j && a.userId != null) {
                        b = k.get(a.userId);
                        a = a.itemIds != null && a.itemIds.length > 0 ? a.itemIds[0] : null;
                        if (b != null && b.username != null && a != null) {
                            b = d("PolarisLinkBuilder").buildUserStoryLinkWithMediaId(b.username, a);
                            f == null ? void 0 : f.prefetchRouteDefinition(b)
                        }
                    }
                })
            }
        }, [f, l.reels, k]);
        return h.jsx(d("PolarisStoryTray.react").StoryTray, babelHelpers["extends"]({}, a, l, {
            onLoadReel: g,
            onStoryItemScrollEnter: n,
            onUpdateZeroNUXPreference: m
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);