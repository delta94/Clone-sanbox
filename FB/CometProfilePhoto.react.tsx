__d("CometProfilePhoto.react", ["BaseSvgImage.react", "CometErrorBoundary.react", "CometImage.react", "CometLoadingAnimation.react", "CometPlaceholder.react", "CometPressable.react", "CometPressableChildrenWithOverlay.react", "CometPressableOverlay.react", "CometProfilePhotoAvailabilityBadge.react", "CometProfilePhotoLastActiveTimeBadge.react", "CometProfilePhotoNotificationBadge.react", "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react", "CometSSRSuspendOnServer.react", "CometTrackingNodeProvider.react", "CometVisualCompletionAttributes", "LazyCometProfileVideoSection.react", "profilePhotoUtils", "react", "stylex", "useSetAttributeRef"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h = d("react"),
    i = d("react").useId,
    j = {
      activityBadge: {
        alignItems: "x6s0dn4",
        borderBottomStyle: "x1q0q8m5",
        borderBottomWidth: "x1qhh985",
        borderEndStyle: "xu3j5b3",
        borderEndWidth: "xcfux6l",
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        borderStartStyle: "x26u7qi",
        borderStartWidth: "xm0m39n",
        borderTopStyle: "x13fuv20",
        borderTopWidth: "x972fbf",
        boxSizing: "x9f619",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        justifyContent: "xl56j7k",
        marginBottom: "xat24cr",
        marginEnd: "x11i5rnm",
        marginStart: "x1mh8g0r",
        marginTop: "xdj266r",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        paddingBottom: "x18d9i69",
        paddingEnd: "x4uap5",        paddingStart: "xkhd6sd",
        paddingTop: "xexx8yu",
        position: "x1n2onr6",
        zIndex: "x1ja2u2z",
        $$css: !0
      },
      activityIcon10: {
        height: "x17rw0jw",
        paddingTop: "x123j3cw",
        paddingEnd: "x1mpkggp",
        paddingBottom: "xs9asl8",
        paddingStart: "x1t2a60a",
        width: "x17z2i9w",
        $$css: !0
      },
      activityIcon16: {
        height: "xd7y6wv",
        paddingTop: "x123j3cw",
        paddingEnd: "x1mpkggp",
        paddingBottom: "xs9asl8",
        paddingStart: "x1t2a60a",
        width: "x23j0i4",
        $$css: !0
      },
      activityIcon8: {
        height: "x1v9usgg",
        width: "x6jxa94",
        $$css: !0
      },
      badge: {
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        position: "x10l6tqk",
        zIndex: "xhtitgo",
        $$css: !0
      },
      badgeWithBorder: {
        borderTopColor: "x1aoij9j",
        borderEndColor: "xxpsvdv",
        borderBottomColor: "x2e7n7m",
        borderStartColor: "x9387xi",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        $$css: !0
      },
      badgeWithLastActiveTime: {
        bottom: "x1ey2m1c",
        display: "x78zum5",
        end: "xds687c",
        justifyContent: "x13a6bvl",
        start: "x17qophe",
        $$css: !0
      },
      badgeWithShadow: {
        boxShadow: "x14ihvte",
        $$css: !0
      },
      insetSVG: {
        fill: "xbh8q5q",
        stroke: "x1pwv2dq",
        strokeWidth: "xvlca1e",
        $$css: !0
      },
      photo: {
        verticalAlign: "x3ajldb",
        $$css: !0
      },
      photoCircle: {
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        $$css: !0
      },
      photoRoundedRect: {
        borderTopStartRadius: "x1lq5wgf",
        borderTopEndRadius: "xgqcy7u",
        borderBottomEndRadius: "x30kzoy",
        borderBottomStartRadius: "x9jhf4c",
        $$css: !0
      },
      pressable: {
        color: "xzsf02u",
        display: "x1rg5ohu",
        $$css: !0
      },
      pressed: {
        transform: "x1n5d1j9",
        $$css: !0
      },
      storyRingBlue: {
        stroke: "x1p5r69i",
        $$css: !0
      },
      storyRingGray: {
        stroke: "x1tbtn3x",
        $$css: !0
      },
      storyRingGreen: {
        stroke: "x1cm6qz0",
        $$css: !0
      },
      storyRingRed: {
        stroke: "x1c97i5p",
        $$css: !0
      },
      storyRingSize2: {
        strokeWidth: "xvlca1e",
        $$css: !0
      },
      storyRingSize3: {
        strokeWidth: "xqjr0vm",
        $$css: !0
      },
      storyRingSize4: {
        strokeWidth: "x17ld789",
        $$css: !0
      },
      svgOverlay: {
        fill: "x1tgjyoi",
        $$css: !0
      },
      videoContainer: {
        WebkitMaskImage: "x1u31j2f",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0
      },
      videoContainerRectRounded: {
        borderTopStartRadius: "x1lq5wgf",
        borderTopEndRadius: "xgqcy7u",
        borderBottomEndRadius: "x30kzoy",
        borderBottomStartRadius: "x9jhf4c",
        $$css: !0
      },
      videoContainerRounded: {
        borderTopStartRadius: "x14yjl9h",
        borderTopEndRadius: "xudhj91",
        borderBottomEndRadius: "x18nykt9",
        borderBottomStartRadius: "xww2gxu",
        $$css: !0
      },
      wrapper: {
        display: "x1rg5ohu",
        position: "x1n2onr6",
        verticalAlign: "x3ajldb",
        zIndex: "x1ja2u2z",
        $$css: !0
      }
    };

  function a(a, b) {
    var e = a.addOn,
      f = a.addOnTopEnd,
      g = a.alt,
      l = a.children,
      m = a.cursorDisabled,
      n = a.isOverlapped,
      o = n === void 0 ? !1 : n,
      p = a.linkProps,
      q = a.onHoverIn,
      r = a.onHoverOut,
      s = a.onPress,
      t = a.onPressIn;
    n = a.overlayDisabled;
    n = n === void 0 ? !1 : n;
    a.preview;
    var u = a.profileVideo,
      v = a.shape,
      w = v === void 0 ? "circle" : v;
    v = a.shouldShowCloseFriendsBadge;
    var x = v === void 0 ? !1 : v,
      y = a.size,
      z = a.source;
    v = a.storyStatus;
    var A = v === void 0 ? "none" : v;
    v = a.testid;
    v = a.testOnly_pressed;
    a.testOnly_previewDelay;
    var B = babelHelpers.objectWithoutPropertiesLoose(a, ["addOn", "addOnTopEnd", "alt", "children", "cursorDisabled", "isOverlapped", "linkProps", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "overlayDisabled", "preview", "profileVideo", "shape", "shouldShowCloseFriendsBadge", "size", "source", "storyStatus", "testid", "testOnly_pressed", "testOnly_previewDelay"]),
      C = i(),
      D = c("useSetAttributeRef")("id", C),
      E = "url(#" + C + ")",
      F = c("useSetAttributeRef")("mask", E),
      G = function (a, b) {
        var i, m = a.overlay;
        a = a.pressed;
        var n = A !== "none" ? d("profilePhotoUtils").getStoryRingSize(y) : 0,
          v = d("profilePhotoUtils").getBadgePosition(y / 2, !0),
          G = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(y, e == null ? void 0 : e.type),
          H = G[0]; 
        G = G[1];
        var I = u != null ? {
            borderWidth: G
          } : {},
          J = (e == null ? void 0 : e.type) === "lastActiveTimeBadge" && y > 28,
          K = J ? {} : d("profilePhotoUtils").getBadgePosition(y / 2, !1);
        J = e != null ? h.jsx("div", babelHelpers["extends"]({
          className: c("stylex")(j.badge, J && j.badgeWithLastActiveTime, y === 60 && e.type === "activityBadge" && j.badgeWithShadow, e.type === "activityBadge" && (u != null || e.withBorder) && j.badgeWithBorder)
        }, c("CometVisualCompletionAttributes").IGNORE, {
          style: babelHelpers["extends"]({}, K, I),
          children: h.jsx(k, {
            addOn: e,
            pressed: a,
            size: y
          })
        })) : null;
        I = f != null ? h.jsx("div", {
          className: "x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo",
          "data-testid": void 0,
          style: babelHelpers["extends"]({}, v),
          children: h.jsx(c("CometProfilePhotoNotificationBadge.react"), {
            number: f.number
          })
        }) : null;
        var L = typeof z.uri === "string" ? h.jsx(c("BaseSvgImage.react"), {
          src: z.uri,
          style: {
            height: y - n * 4,
            width: y - n * 4
          },
          x: 2 * n,
          y: 2 * n
        }) : h.jsx(c("CometImage.react"), {
          alt: g,
          height: y - 4 * n,
          src: z.uri,
          testid: void 0,
          width: y - 4 * n,
          xstyle: [j.photo, w === "circle" && j.photoCircle, w === "roundedRect" && j.photoRoundedRect]
        });
        H = typeof z.uri === "string" ? h.jsxs("svg", babelHelpers["extends"]({
          "aria-hidden": g == null ? !0 : void 0,
          "aria-label": g,
          className: "x3ajldb"
        }, c("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
          role: g != null ? "img" : "none",
          style: {
            height: y,
            width: y
          },
          children: [h.jsxs("mask", {
            id: C,
            ref: D,
            suppressHydrationWarning: !0,
            children: [w === "circle" ? h.jsx("circle", {
              cx: y / 2,
              cy: y / 2,
              fill: "white",
              r: y / 2
            }) : h.jsx("rect", {
              cy: y / 2,
              fill: "white",
              height: y,
              rx: w === "square" ? 0 : 8,
              ry: w === "square" ? 0 : 8,
              width: y,
              x: 0,
              y: 0
            }), h.jsx(c("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"), {
              useSuspenseDirectlyForSVG: !0,
              children: J != null && (e == null ? void 0 : e.type) !== "trigger" && (e == null ? void 0 : e.type) !== "lastActiveTimeBadge" && (e == null ? void 0 : e.backgroundColor) !== "none" && h.jsx("circle", babelHelpers["extends"]({
                cx: (i = K.left) != null ? i : y - ((i = K.right) != null ? i : 0),
                cy: (i = K.top) != null ? i : y - ((i = K.bottom) != null ? i : 0)
              }, c("CometVisualCompletionAttributes").IGNORE, {
                fill: "black",
                r: Math.max((e == null ? void 0 : e.type) === "activityBadge" ? 8 : 0, H / 2 + G)
              }))
            }), I != null && f != null && f.type === "notificationBadge" && h.jsx("rect", {
              height: 22,
              rx: 11,
              ry: 11,
              width: f.number <= 9 ? 22 : f.number <= 99 ? 33 : 44,
              x: v.left != null ? v.left - (f.number <= 9 ? 11 : f.number <= 99 ? 22 : 33) : y - ((K = v.right) != null ? K : 0) - 11,
              y: v.top != null ? v.top - 11 : y - ((i = v.bottom) != null ? i : 0) - 11
            }), A === "uploading" && (y === 36 || y === 60) ? h.jsx("circle", {
              cx: y / 2,
              cy: y / 2,
              fill: "transparent",
              r: y / 2 - 1 * n,
              stroke: "black",
              strokeWidth: n * 2
            }) : A !== "none" && n > 0 && h.jsx("circle", {
              cx: y / 2,
              cy: y / 2,
              fill: "transparent",
              r: y / 2 - 1.5 * n,
              stroke: "black",
              strokeWidth: n
            }), o && h.jsx("circle", {
              cx: -y / 2 + 4,
              cy: y / 2,
              fill: "black",
              r: y / 2 + 2
            })]
          }), h.jsxs("g", {
            mask: E,
            ref: F,
            suppressHydrationWarning: !0,
            children: [u != null ? h.jsx(c("CometErrorBoundary.react"), {
              fallback: function () {
                return L
              },
              children: h.jsx(c("CometPlaceholder.react"), {
                fallback: L,
                children: h.jsx(c("CometSSRSuspendOnServer.react"), {
                  children: h.jsx("foreignObject", {
                    height: "100%",
                    width: "100%",
                    x: 2 * n,
                    y: 2 * n,
                    children: h.jsx("div", {
                      className: c("stylex")(j.videoContainer, w === "roundedRect" && j.videoContainerRectRounded, w === "circle" && j.videoContainerRounded),
                      style: {
                        height: y - n * 4,
                        width: y - n * 4
                      },
                      children: h.jsx(c("LazyCometProfileVideoSection.react"), babelHelpers["extends"]({
                        linkProps: p,
                        onHoverIn: q,
                        onHoverOut: r,
                        onPress: s,
                        onPressIn: t,
                        profileVideo: u,
                        size: y - n * 4,
                        thumbnailUri: z.uri
                      }, B))
                    })
                  })
                })
              })
            }) : L, w === "circle" ? h.jsx("circle", {
              className: c("stylex")(j.insetSVG, a && j.svgOverlay),
              cx: y / 2,
              cy: y / 2,
              r: y / 2
            }) : h.jsx("rect", {
              className: c("stylex")(j.insetSVG, a && j.svgOverlay),
              cy: y / 2,
              fill: "white",
              height: y,
              rx: w === "square" ? 0 : 8,
              ry: w === "square" ? 0 : 8,
              width: y,
              x: 0,
              y: 0
            }), A === "uploading" && (y === 36 || y === 60) ? null : A !== "none" && n > 0 && h.jsx("circle", {
              className: c("stylex")(A === "unseen" && (x ? j.storyRingGreen : j.storyRingBlue), A === "seen" && j.storyRingGray, A === "live" && j.storyRingRed, n === 4 && j.storyRingSize4, n === 3 && j.storyRingSize3, n === 2 && j.storyRingSize2),
              cx: y / 2,
              cy: y / 2,
              fill: "transparent",
              r: y / 2 - n / 2,
              stroke: "var(--accent)",
              strokeWidth: n
            })]
          }), A === "uploading" && (y === 36 || y === 60) && h.jsx("g", {
            style: {
              transform: "scale(" + (y - Math.floor(y / 30)) / y + ")"
            },
            children: h.jsx(c("CometLoadingAnimation.react"), {
              size: y
            })
          })]
        })) : L;
        return h.jsxs("div", {
          className: "x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z",
          ref: b,
          children: [H, l, m, h.jsx(c("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"), {
            children: J
          }), I]
        })
      };
    return !s && !p && v !== !0 ? G({
      pressed: !1
    }, b) : h.jsx(c("CometTrackingNodeProvider.react"), {
      trackingNode: 3,
      children: h.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, B, {
        cursorDisabled: m,
        linkProps: p,
        onHoverIn: q,
        onHoverOut: r,
        onPress: s,
        onPressIn: t,
        overlayDisabled: n,
        overlayRadius: w === "circle" ? "50%" : w === "roundedRect" ? 8 : 0,
        ref: b,
        testOnly_pressed: v,
        testid: void 0,
        xstyle: function (a) {
          a = a.pressed;
          return [j.pressable, a && j.pressed]
        },
        children: function (a) {
          var b = a.overlay;
          a = a.pressed;
          return G({
            overlay: b,
            pressed: a
          }, null)
        }
      }))
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";

  function k(a) {
    var b = a.addOn,
      e = a.pressed;
    a = a.size;
    switch (b.type) {
      case "availabilityBadge":
        a = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(a, b == null ? void 0 : b.type);
        a = a[0];
        return h.jsx(c("CometProfilePhotoAvailabilityBadge.react"), {
          pressed: e,
          size: a
        });
      case "lastActiveTimeBadge":
        return h.jsx(c("CometProfilePhotoLastActiveTimeBadge.react"), {
          border: b.border,
          pressed: e,
          time: b.time
        });
      case "activityBadge":
        return h.jsx(l, {
          backgroundColor: b.backgroundColor,
          icon: b.icon,
          overflow: b.overflow,
          pressed: e,
          size: b.size
        });
      case "trigger":
        return b.icon;
      case "multipleVoicesForAction":
        return b.badge;
      default:
        return null
    }
  }
  k.displayName = k.name + " [from " + f.id + "]";

  function l(a) {
    var b = a.backgroundColor;
    b = b === void 0 ? "white" : b;
    var d = a.icon,
      e = a.overflow,
      f = a.pressed;
    a = a.size;
    return h.jsx(c("CometPressableChildrenWithOverlay.react"), {
      overlay: h.jsx(c("CometPressableOverlay.react"), {
        offset: 0,
        pressed: f,
        radius: "50%"
      }),
      children: h.jsx("div", {
        className: c("stylex")(j.activityBadge, a === 8 && j.activityIcon8, a === 10 && j.activityIcon10, a === 16 && j.activityIcon16),
        style: {
          backgroundColor: b,
          overflow: e
        },
        children: d
      })
    })
  }
  l.displayName = l.name + " [from " + f.id + "]";
  b = h.forwardRef(a);
  g["default"] = b
}), 98);




import React, { useRef, useState } from 'react';
import { useId } from 'react';
import { stylex } from 'stylex';
import {
  CometErrorBoundary,
  CometImage,
  CometPlaceholder,
  CometPressable,
  CometPressableChildrenWithOverlay,
  CometPressableOverlay,
  CometProfilePhotoAvailabilityBadge,
  CometProfilePhotoLastActiveTimeBadge,
  CometProfilePhotoNotificationBadge,
  CometSSRReplaceContentOnHydrationAndBreakEventReplaying,
  CometSSRSuspendOnServer,
  CometTrackingNodeProvider,
  CometVisualCompletionAttributes,
  LazyCometProfileVideoSection,
  BaseSvgImage,
  getBadgePosition,
  CometLoadingAnimation,
  getStoryRingSize,
  getBadgeSizeAndStrokeWidth
} from 'your-imports-here';

import profilePhotoUtils from 'profilePhotoUtils'; // Please replace with the correct import path
import useSetAttributeRef from 'useSetAttributeRef'; // Please replace with the correct import path

const styles = {
  activityBadge: {
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderEndStyle: 'solid',
    borderEndWidth: '1px',
    borderTopStartRadius: '8px',
    borderTopEndRadius: '8px',
    borderBottomEndRadius: '8px',
    borderBottomStartRadius: '8px',
    borderStartStyle: 'solid',
    borderStartWidth: '1px',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: '1',
    flexShrink: '1',
    justifyContent: 'center',
    marginBottom: '4px',
    marginEnd: '4px',
    marginStart: '4px',
    marginTop: '4px',
    minHeight: '24px',
    minWidth: '24px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    paddingBottom: '4px',
    paddingEnd: '4px',
    paddingStart: '4px',
    paddingTop: '4px',
    position: 'relative',
    zIndex: '1',
  },
  activityIcon10: {
    height: '16px',
    paddingTop: '4px',
    paddingEnd: '4px',
    paddingBottom: '2px',
    paddingStart: '4px',
    width: '16px',
  },
  activityIcon16: {
    height: '24px',
    paddingTop: '4px',
    paddingEnd: '4px',
    paddingBottom: '2px',
    paddingStart: '4px',
    width: '24px',
  },
  activityIcon8: {
    height: '16px',
    width: '16px',
  },
  badge: {
    borderTopStartRadius: '8px',
    borderTopEndRadius: '8px',
    borderBottomEndRadius: '8px',
    borderBottomStartRadius: '8px',
    position: 'relative',
    zIndex: '3',
  },
  badgeWithBorder: {
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderEndColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderStartColor: 'rgba(0, 0, 0, 0.1)',
    borderTopStyle: 'solid',
    borderEndStyle: 'solid',
    borderBottomStyle: 'solid',
    borderStartStyle: 'solid',
  },
  badgeWithLastActiveTime: {
    bottom: '2px',
    display: 'flex',
    end: '0',
    justifyContent: 'center',
    start: '0',
  },
  badgeWithShadow: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  insetSVG: {
    fill: '#1877F2',
    stroke: '#1C1E21',
    strokeWidth: '1.5',
  },
  photo: {
    verticalAlign: 'middle',
  },
  photoCircle: {
    borderTopStartRadius: '50%',
    borderTopEndRadius: '50%',
    borderBottomEndRadius: '50%',
    borderBottomStartRadius: '50%',
  },
  photoRoundedRect: {
    borderTopStartRadius: '8px',
    borderTopEndRadius: '8px',
    borderBottomEndRadius: '8px',
    borderBottomStartRadius: '8px',
  },
  pressable: {
    color: '#1C1E21',
    display: 'inline',
  },
  pressed: {
    transform: 'scale(0.95)',
  },
  svgOverlay: {
    fill: 'rgba(0, 0, 0, 0.6)',
  },
};

const CometProfilePhoto = ({
  addOn,
  addOnTopEnd,
  alt,
  children,
  cursorDisabled,
  isOverlapped = false,
  linkProps,
  onHoverIn,
  onHoverOut,
  onPress,
  onPressIn,
  overlayDisabled = false,
  preview,
  profileVideo,
  shape = 'circle',
  shouldShowCloseFriendsBadge = false,
  size,
  source,
  storyStatus = 'none',
  testid,
  testOnly_pressed,
  testOnly_previewDelay,
  ...restProps
},ref) => {
  const id = useId();
  const maskRef = useSetAttributeRef("id", id);
  const maskId = `url(#${id})`;
  const maskMaskRef = useSetAttributeRef("mask", maskId);

  const renderBadge = ({addOn, pressed, size}) => {
    switch (addOn.type) {
      case "availabilityBadge":
        const badgeSize = profilePhotoUtils.getBadgeSizeAndStrokeWidth(
          size,
          addOn.type
        )[0];
        return (
          <CometProfilePhotoAvailabilityBadge pressed={pressed} size={badgeSize} />
        );
      case "lastActiveTimeBadge":
        return (
          <CometProfilePhotoLastActiveTimeBadge
            border={addOn.border}
            pressed={pressed}
            time={addOn.time}
          />
        );
      case "activityBadge":
        return (
          <ActivityBadge
            backgroundColor={addOn.backgroundColor}
            icon={addOn.icon}
            overflow={addOn.overflow}
            pressed={pressed}
            size={addOn.size}
          />
        );
      case "trigger":
        return addOn.icon;
      case "multipleVoicesForAction":
        return addOn.badge;
      default:
        return null;
    }
  };

  const ActivityBadge = ({ backgroundColor = "white", icon, overflow, pressed, size }) => {
    return (
      <CometPressableChildrenWithOverlay overlay={<CometPressableOverlay offset={0} pressed={pressed} radius="50%" />}>
        <div
          className={stylex(
            styles.activityBadge,
            size === 8 && styles.activityIcon8,
            size === 10 && styles.activityIcon10,
            size === 16 && styles.activityIcon16
          )}
          style={{
            backgroundColor,
            overflow,
          }}
        >
          {icon}
        </div>
      </CometPressableChildrenWithOverlay>
    );
  };

  const G = ({ overlay, pressed }, ref) => {
    const storyRingSize = storyStatus !== "none" ? getStoryRingSize(size) : 0;
    const badgePosition = getBadgePosition(size / 2, true);
    const [badgeSize, badgeStrokeWidth] = getBadgeSizeAndStrokeWidth(size, addOn?.type);
    
    const badgeStyle = profileVideo != null ? { borderWidth: badgeStrokeWidth } : {};
    const isLastActiveTimeBadge = addOn?.type === "lastActiveTimeBadge" && size > 28;
  
    const badgePositionStyle = isLastActiveTimeBadge ? {} : getBadgePosition(size / 2, false);

  
    const badge = addOn != null ? (
      <div
        className={stylex(styles.badge, isLastActiveTimeBadge && styles.badgeWithLastActiveTime, size === 60 && addOn.type === "activityBadge" && styles.badgeWithShadow, addOn.type === "activityBadge" && (profileVideo != null || addOn.withBorder) && styles.badgeWithBorder)}
        style={{...badgeStyle,...badgePositionStyle}}
        {...CometVisualCompletionAttributes.IGNORE}
      >
        {renderBadge({ addOn, pressed, size })}
      </div>
    ) : null;
  
    const notificationBadge = addOnTopEnd != null ? (
      <div className="x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo" data-testid={void 0} style={{ ...badgePosition }}>
        <CometProfilePhotoNotificationBadge number={addOnTopEnd.number} />
      </div>
    ) : null;
  
    const photoElement = typeof source.uri === "string" ? (
      <BaseSvgImage
        src={source.uri}
        style={{ height: size - storyRingSize * 4, width: size - storyRingSize * 4 }}
        x={2 * storyRingSize}
        y={2 * storyRingSize}
      />
    ) : (
      <CometImage
        alt={alt}
        height={size - 4 * storyRingSize}
        src={source.uri}
        testid={undefined}
        width={size - 4 * storyRingSize}
        xstyle={[styles.photo, shape === "circle" && styles.photoCircle, shape === "roundedRect" && styles.photoRoundedRect]}
      />
    );
  
    const mask = typeof source.uri === "string" ? (
      <svg
        aria-hidden={alt == null ? true : undefined}
        aria-label={alt}
        className={stylex(styles.photo)}
        {...CometVisualCompletionAttributes.IGNORE_DYNAMIC}
        role={alt != null ? "img" : "none"}
        style={{ height: size, width: size }}
      >
        <mask id={id} ref={maskRef} suppressHydrationWarning={true}>
          {shape === "circle" ? (
            <circle cx={size / 2} cy={size / 2} fill="white" r={size / 2} />
          ) : (
            <rect cx={size / 2} fill="white" height={size} rx={shape === "square" ? 0 : 8} ry={shape === "square" ? 0 : 8} width={size} x={0} y={0} />
          )}
          <CometSSRReplaceContentOnHydrationAndBreakEventReplaying useSuspenseDirectlyForSVG={true}>
            {badge != null &&
              addOn?.type !== "trigger" &&
              addOn?.type !== "lastActiveTimeBadge" &&
              addOn?.backgroundColor !== "none" && (
                <circle
                  cx={isLastActiveTimeBadge ? badgePositionStyle.left ?? size - (badgePositionStyle.right ?? 0) : badgePositionStyle.left ?? size - (badgePositionStyle.right ?? 0)}
                  cy={isLastActiveTimeBadge ? badgePositionStyle.top ?? size - (badgePositionStyle.bottom ?? 0) : badgePositionStyle.top ?? size - (badgePositionStyle.bottom ?? 0)}
                  fill="black"
                  {...CometVisualCompletionAttributes.IGNORE}
                  r={Math.max(addOn?.type === "activityBadge" ? 8 : 0, badgeSize / 2 + badgeStrokeWidth)}
                />
              )}
          </CometSSRReplaceContentOnHydrationAndBreakEventReplaying>
          {notificationBadge != null && addOnTopEnd.type === "notificationBadge" && (
            <rect
              height={22}
              rx={11}
              ry={11}
              width={addOnTopEnd.number <= 9 ? 22 : addOnTopEnd.number <= 99 ? 33 : 44}
              x={badgePosition.left != null ? badgePosition.left - (addOnTopEnd.number <= 9 ? 11 : addOnTopEnd.number <= 99 ? 22 : 33) : size - (badgePosition.right ?? 0) - 11}
              y={badgePosition.top != null ? badgePosition.top - 11 : size - (badgePosition.bottom ?? 0) - 11}
            />
          )}
          {storyStatus === "uploading" && (size === 36 || size === 60) ? (
            <circle cx={size / 2} cy={size / 2} fill="transparent" r={size / 2 - 1 * storyRingSize} stroke="black" strokeWidth={storyRingSize * 2} />
          ) : storyStatus !== "none" && storyRingSize > 0 && (
            <circle cx={size / 2} cy={size / 2} fill="transparent" r={size / 2 - 1.5 * storyRingSize} stroke="black" strokeWidth={storyRingSize} />
          )}
          {isOverlapped && <circle cx={-size / 2 + 4} cy={size / 2} fill="black" r={size / 2 + 2} />}
        </mask>
        <g mask={maskId} ref={maskMaskRef} suppressHydrationWarning={true}>
          {profileVideo != null ? (
            <CometErrorBoundary
              fallback={() => photoElement}
              children={
                <CometPlaceholder
                  fallback={photoElement}
                  children={
                    <CometSSRSuspendOnServer>
                      <foreignObject height="100%" width="100%" x={2 * storyRingSize} y={2 * storyRingSize}>
                        <div
                          className={stylex(styles.videoContainer, shape === "roundedRect" && styles.videoContainerRectRounded, shape === "circle" && styles.videoContainerRounded)}
                          style={{ height: size - storyRingSize * 4, width: size - storyRingSize * 4 }}
                        >
                          <LazyCometProfileVideoSection
                            linkProps={linkProps}
                            onHoverIn={onHoverIn}
                            onHoverOut={onHoverOut}
                            onPress={onPress}
                            onPressIn={onPressIn}
                            profileVideo={profileVideo}
                            size={size - storyRingSize * 4}
                            thumbnailUri={source.uri}
                            {...restProps}
                          />
                        </div>
                      </foreignObject>
                    </CometSSRSuspendOnServer>
                  }
                />
              }
            />
          ) : (
            photoElement
          )}
          {shape === "circle" ? (
            <circle className={stylex(styles.insetSVG, pressed && styles.svgOverlay)} cx={size / 2} cy={size / 2} r={size / 2} />
          ) : (
            <rect className={stylex(styles.insetSVG, pressed && styles.svgOverlay)} cx={size / 2} fill="white" height={size} rx={shape === "square" ? 0 : 8} ry={shape === "square" ? 0 : 8} width={size} x={0} y={0} />
          )}
          {storyStatus === "uploading" && (size === 36 || size === 60) ? null : storyStatus !== "none" && storyRingSize > 0 && (
            <circle
              className={stylex(
                storyStatus === "unseen" && (shouldShowCloseFriendsBadge ? styles.storyRingGreen : styles.storyRingBlue),
                storyStatus === "seen" && styles.storyRingGray,
                storyStatus === "live" && styles.storyRingRed,
                storyRingSize === 4 && styles.storyRingSize4,
                storyRingSize === 3 && styles.storyRingSize3,
                storyRingSize === 2 && styles.storyRingSize2
              )}
              cx={size / 2}
              cy={size / 2}
              fill="transparent"
              r={size / 2 - storyRingSize / 2}
              stroke="var(--accent)"
              strokeWidth={storyRingSize}
            />
          )}
        </g>
        {storyStatus === "uploading" && (size === 36 || size === 60) && (
          <g style={{ transform: `scale(${size - Math.floor(size / 30) / size})` }}>
            <CometLoadingAnimation size={size} />
          </g>
        )}
      </svg>
    ): photoElement;


    return (
      <div className="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z" ref={ref}>
        {badge}
        {children}
        {overlay}
        {cursorDisabled}
        <CometSSRReplaceContentOnHydrationAndBreakEventReplaying>{badge}</CometSSRReplaceContentOnHydrationAndBreakEventReplaying>
        {notificationBadge}
      </div>
    );
  };


  if (!onPress && !linkProps && shouldShowCloseFriendsBadge !== true) {
    return G({ pressed: false }, ref);
  }

  return (
    <CometTrackingNodeProvider trackingNode={3}>
      <CometPressable
        {...restProps}
        cursorDisabled={cursorDisabled}
        linkProps={linkProps}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onPress={onPress}
        onPressIn={onPressIn}
        overlayDisabled={overlayDisabled}
        overlayRadius={shape === "circle" ? "50%" : shape === "roundedRect" ? 8 : 0}
        ref={ref}
        testOnly_pressed={testOnly_pressed}
        testid={void 0}
        xstyle={a => [stylex(styles.pressable, a.pressed && styles.pressed)]}
      >
        {a => {
          const { overlay, pressed } = a;
          return G({ overlay, pressed }, null);
        }}
      </CometPressable>
    </CometTrackingNodeProvider>
  );
};





export default CometProfilePhoto;
