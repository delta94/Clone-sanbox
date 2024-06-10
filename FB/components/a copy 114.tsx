__d(
  "CometTargetedTabsGlimmers.react",
  ["CometGlimmer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react"),
      k = {
        glimmer: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "x1fgtraw",
          width: "xgd8bvy",
          $$css: !0,
        },
        glimmerWrapper: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "x1s65kcs",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        tab: {
          flexGrow: "x1iyjqo2",
          maxWidth: "xmlsiyf",
          minWidth: "x1hxoosp",
          $$css: !0,
        },
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
      };
    function a(a) {
      a = a.numberOfItems;
      a = a === void 0 ? 5 : a;
      a = Array.from({ length: a }).map(function (a, b) {
        a = [
          b < 4 && k.tabHiddenAtSmallViewport,
          b === 4 && k.tabHiddenAtLargeViewport,
        ];
        return j.jsx(
          "li",
          {
            className: (h || (h = c("stylex")))(
              k.tab,
              k.tabResponsive,
              b !== 0 && k.tabSpacing,
              a
            ),
            children: j.jsx("div", {
              className: "x6s0dn4 x78zum5 x1s65kcs xl56j7k",
              children: j.jsx(c("CometGlimmer.react"), {
                index: b,
                xstyle: k.glimmer,
              }),
            }),
          },
          "targeted-tabs-glimmer-" + b
        );
      });
      return j.jsx(j.Fragment, { children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
