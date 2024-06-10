__d(
  "CometTopNavTabRenderer.react",
  [
    "fbt",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometTooltip.react",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || d("react"),
      l = {
        badgeContainer: {
          position: "x10l6tqk",
          start: "x11f4b5y",
          left: null,
          right: null,
          top: "x1v4kod4",
          $$css: !0,
        },
        hideMore: { display: "x1s85apg", $$css: !0 },
        iconContainer: { position: "x1n2onr6", $$css: !0 },
        link: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        linkOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        linkUnderline: {
          backgroundColor: "xtvsq51",
          borderTopEndRadius: "x11t77rh",
          borderTopStartRadius: "x146dn1l",
          bottom: "x1ey2m1c",
          end: "x177n6bx",
          left: null,
          right: null,
          height: "xuoj239",
          position: "x10l6tqk",
          start: "xb1c2wi",
          transform: "xxa6egd",
          transformOrigin: "xhmqdbg",
          transitionDuration: "x1k90msu",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1qfuztq",
          $$css: !0,
        },
        linkUnderlineSelected: { transform: "x1c071of", $$css: !0 },
        linkWrapper: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x1s65kcs",
          position: "x1n2onr6",
          $$css: !0,
        },
        moreTab: { "@media (min-width: 1100px)_display": "xma1kzc", $$css: !0 },
        tab: {
          flexGrow: "x1iyjqo2",
          maxWidth: "xmlsiyf",
          minWidth: "x1hxoosp",
          $$css: !0,
        },
        tab500: { maxWidth: "xrb9xsn", $$css: !0 },
        tab584: { maxWidth: "xrrss0q", $$css: !0 },
        tabHiddenAtLargeViewport: {
          "@media (max-width: 1099px)_display": "x9e5oc1",
          $$css: !0,
        },
        tabHiddenAtSmallViewport: {
          "@media (max-width: 700px)_display": "x1gz44f",
          $$css: !0,
        },
        tabResponsive: {
          "@media (max-width: 1099px)_maxWidth": "x1l38jg0",
          "@media (min-width: 1100px) and (max-height: 789px), (min-width: 1100px) and (max-width: 1379px)_maxWidth":
            "x1awlv9s",
          $$css: !0,
        },
        tabSpacing: {
          marginStart: "x1i64zmx",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        tabStyles1: {
          "@media (max-width: 999px)_display": "x11yr7xz",
          $$css: !0,
        },
        tabStyles2: {
          "@media (max-width: 899px)_display": "x1daaz14",
          $$css: !0,
        },
        tabStyles3: {
          "@media (max-width: 799px)_display": "xte6x5b",
          $$css: !0,
        },
        tabStyles4: {
          "@media (max-width: 699px)_display": "x1t782dm",
          $$css: !0,
        },
        tabStyles5: {
          "@media (max-width: 599px)_display": "xjwlzi0",
          $$css: !0,
        },
      },
      m = 9;
    function a(a) {
      var b = a.activeIcon,
        d = a.badgeCount,
        e = a.badgeRenderer,
        f = a.icon,
        g = a.iconSize;
      g = g === void 0 ? 28 : g;
      var j = a.isActiveTab,
        n = a.isBadgeHidden;
      n = n === void 0 ? !1 : n;
      var o = a.isPendingTab,
        p = a.label,
        q = a.linkProps,
        r = a.nuxRef,
        s = a.onPress,
        t = a.position,
        u = a.responsiveStyle,
        v = a.selected,
        w = a.tabKey;
      a = a.testid;
      a = null;
      if (f != null && b != null) {
        b = j ? b : f;
        a = k.jsxs("span", {
          className: "x1n2onr6",
          children: [
            k.jsx(b, { color: j ? "active-tab" : "inactive-tab", size: g }),
            e != null &&
              k.jsx(c("CometErrorBoundary.react"), {
                fallback: function () {
                  return k.jsx("span", {});
                },
                children: k.jsx(c("CometPlaceholder.react"), {
                  fallback: k.jsx("span", {}),
                  children: k.jsx("span", {
                    className: "x10l6tqk x11f4b5y x1v4kod4",
                    children: e({ isBadgeHidden: n, isTab: !0, overflow: m }),
                  }),
                }),
              }),
          ],
        });
      }
      f =
        d > 0
          ? h._("__JHASH__8R80vfw61_2__JHASH__", [
              h._plural(d, "number"),
              h._param("label", p),
            ])
          : p;
      b = k.jsxs("div", {
        className: "x6s0dn4 x78zum5 x1s65kcs x1n2onr6",
        children: [
          k.jsx("div", {
            className: (i || (i = c("stylex")))(
              l.linkUnderline,
              j && l.linkUnderlineSelected
            ),
          }),
          k.jsx(c("CometPressable.react"), {
            "aria-current": j ? "page" : void 0,
            "aria-label": f,
            display: "inline",
            linkProps: q,
            onPress: s,
            overlayDisabled: v,
            overlayHoveredStyle: o ? l.linkOverlayPressed : void 0,
            overlayOffset: { bottom: -4, left: 0, right: 0, top: -4 },
            overlayRadius: 8,
            testid: void 0,
            xstyle: l.link,
            children: a,
          }),
        ],
      });
      g =
        u === !0
          ? [
              t != null && t < 4 && l.tabHiddenAtSmallViewport,
              t != null && t === 4 && l.tabHiddenAtLargeViewport,
              w === "more" && l.moreTab,
            ]
          : [
              t != null && t === 0 && l.tabStyles1,
              t != null && t === 1 && l.tabStyles2,
              t != null && t === 2 && l.tabStyles3,
              t != null && t === 3 && l.tabStyles4,
              t != null && t === 4 && l.tabStyles5,
              w === "more" && l.hideMore,
            ];
      e = null;
      switch (c("qex")._("1008")) {
        case "500":
          e = l.tab500;
          break;
        case "584":
          e = l.tab584;
          break;
      }
      n =
        w === "home"
          ? r == null
            ? void 0
            : r.apNux
          : w === "most_recent_feed"
          ? r == null
            ? void 0
            : r.feedsNux
          : void 0;
      return k.jsx("li", {
        className: i(l.tab, l.tabResponsive, e, t !== 0 && l.tabSpacing, g),
        ref: n,
        children: k.jsx(c("CometTooltip.react"), {
          align: "middle",
          tooltip: p,
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = k.memo(a);
    g["default"] = b;
  },
  98
);
