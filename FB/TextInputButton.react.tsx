// __d("TextInputButton.react", ["CometBadge.react", "CometLineClamp.react", "CometPressable.react", "TetraIcon.react", "TetraProfilePhoto.react", "react", "stylex"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   var h = d("react"),
//     i = 40,
//     j = {
//       badge: {
//         borderTopStartRadius: "x14yjl9h",
//         borderTopEndRadius: "xudhj91",
//         borderBottomEndRadius: "x18nykt9",
//         borderBottomStartRadius: "xww2gxu",
//         display: "x78zum5",
//         end: "x1qhkwwh",
//         overflowX: "x6ikm8r",
//         overflowY: "x10wlt62",
//         position: "x10l6tqk",
//         top: "x13vifvy",
//         $$css: !0
//       },
//       icon: {
//         height: "xlup9mm",
//         marginEnd: "x1w0mnb",
//         $$css: !0
//       },
//       linkLabel: {
//         color: "xi81zsa",
//         fontSize: "x1lkfr7t",
//         hyphens: "xkjl1po",
//         overflowWrap: "x1mzt3pk",
//         width: "xh8yej3",
//         wordBreak: "x13faqbe",
//         $$css: !0
//       },
//       linkLabelPlaceholder: {
//         color: "xzsf02u",
//         $$css: !0
//       },
//       linkLabelPreserveNewlines: {
//         whiteSpace: "x126k92a",
//         $$css: !0
//       },
//       profile: {
//         display: "x78zum5",
//         marginEnd: "x1w0mnb",
//         marginStart: "xp7jhwk",
//         $$css: !0
//       },
//       profileDisabled: {
//         opacity: "xuzhngd",
//         $$css: !0
//       },
//       root: {
//         alignItems: "x6s0dn4",
//         backgroundColor: "xmjcpbm",
//         borderTopStartRadius: "x107yiy2",
//         borderTopEndRadius: "xv8uw2v",
//         borderBottomEndRadius: "x1tfwpuw",
//         borderBottomStartRadius: "x2g32xy",
//         display: "x78zum5",
//         flexDirection: "x1q0g3np",
//         flexGrow: "x1iyjqo2",
//         height: "x1vqgdyp",
//         justifyContent: "x1nhvcw1",
//         paddingEnd: "xn6708d",
//         paddingStart: "x1ye3gou",
//         position: "x1n2onr6",
//         $$css: !0
//       },
//       rootMultiLine: {
//         height: "xt7dq6l",
//         minHeight: "x1ba4aug",
//         paddingTop: "x1y1aw1k",
//         paddingEnd: "xn6708d",
//         paddingBottom: "xwib8y2",
//         paddingStart: "x1ye3gou",
//         $$css: !0
//       },
//       selected: {
//         backgroundColor: "x1hr4nm9",
//         $$css: !0
//       }
//     };

//   function a(a, b) {
//     var d = a.disabled;
//     d = d === void 0 ? !1 : d;
//     var e = a.hasNewContentBadge;
//     e = e === void 0 ? !1 : e;
//     var f = a.image,
//       g = a.isUserEnteredPreviewText;
//     g = g === void 0 ? !1 : g;
//     var k = a.label,
//       l = a.labelMaxLines;
//     l = l === void 0 ? 2 : l;
//     var m = a.linkProps,
//       n = a.onHoverIn,
//       o = a.onHoverOut,
//       p = a.onPress,
//       q = a.onPressIn,
//       r = a.preserveLabelNewlines;
//     r = r === void 0 ? !1 : r;
//     var s = a.selected,
//       t = s === void 0 ? !1 : s;
//     s = a.testid;
//     s = a.testOnly_pressed;
//     a = null;
//     e && (a = h.jsx("div", {
//       className: "x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1qhkwwh x6ikm8r x10wlt62 x10l6tqk x13vifvy",
//       children: h.jsx(c("CometBadge.react"), {
//         border: "white",
//         color: d ? "gray" : "blue",
//         isProfileBadge: !0,
//         size: 6
//       })
//     }));
//     e = null;
//     if (f != null)
//       if (f.type === "icon") {
//         var u = t === !0 ? "highlight" : null;
//         e = h.jsx("div", {
//           className: "xlup9mm x1w0mnb",
//           children: h.jsx(c("TetraIcon.react"), {
//             color: d ? "disabled" : (u = u) != null ? u : "primary",
//             icon: f.icon,
//             size: 16
//           })
//         })
//       } else f.type === "profile-photo" && f.source != null && (e = h.jsx("div", {
//         className: c("stylex")(j.profile, d && j.profileDisabled),
//         children: h.jsx(c("TetraProfilePhoto.react"), {
//           shape: "circle",
//           size: 28,
//           source: f.source
//         })
//       }));
//     u = h.jsx("div", {
//       className: c("stylex")(j.linkLabel, g === !0 && j.linkLabelPlaceholder, r === !0 && j.linkLabelPreserveNewlines),
//       children: h.jsx(c("CometLineClamp.react"), {
//         lines: l,
//         children: k
//       })
//     });
//     return h.jsxs(c("CometPressable.react"), {
//       disabled: d,
//       display: "inline",
//       linkProps: m,
//       onHoverIn: n,
//       onHoverOut: o,
//       onPress: d ? void 0 : p,
//       onPressIn: d ? void 0 : q,
//       overlayRadius: i / 2,
//       ref: b,
//       testOnly_pressed: s,
//       testid: void 0,
//       xstyle: function () {
//         return [j.root, j.rootMultiLine, t === !0 && j.selected]
//       },
//       children: [a, e, u]
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   b = h.forwardRef(a);
//   g["default"] = b
// }), 98); /*FB_PKG_DELIM*/



import React, { forwardRef } from 'react';
import CometBadge from 'CometBadge.react';
import CometLineClamp from 'CometLineClamp.react';
import CometPressable from 'CometPressable.react';
import TetraIcon from 'TetraIcon.react';
import TetraProfilePhoto from 'TetraProfilePhoto.react';
import stylex from 'stylex';

const ICON_SIZE = 40;

const styles = {
  badge: {
    borderTopStartRadius: 'x14yjl9h',
    borderTopEndRadius: 'xudhj91',
    borderBottomEndRadius: 'x18nykt9',
    borderBottomStartRadius: 'xww2gxu',
    display: 'x78zum5',
    end: 'x1qhkwwh',
    overflowX: 'x6ikm8r',
    overflowY: 'x10wlt62',
    position: 'x10l6tqk',
    top: 'x13vifvy',
  },
  icon: {
    height: 'xlup9mm',
    marginEnd: 'x1w0mnb',
  },
  linkLabel: {
    color: 'xi81zsa',
    fontSize: 'x1lkfr7t',
    hyphens: 'xkjl1po',
    overflowWrap: 'x1mzt3pk',
    width: 'xh8yej3',
    wordBreak: 'x13faqbe',
  },
  linkLabelPlaceholder: {
    color: 'xzsf02u',
  },
  linkLabelPreserveNewlines: {
    whiteSpace: 'x126k92a',
  },
  profile: {
    display: 'x78zum5',
    marginEnd: 'x1w0mnb',
    marginStart: 'xp7jhwk',
  },
  profileDisabled: {
    opacity: 'xuzhngd',
  },
  root: {
    alignItems: 'x6s0dn4',
    backgroundColor: 'xmjcpbm',
    borderTopStartRadius: 'x107yiy2',
    borderTopEndRadius: 'xv8uw2v',
    borderBottomEndRadius: 'x1tfwpuw',
    borderBottomStartRadius: 'x2g32xy',
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    flexGrow: 'x1iyjqo2',
    height: 'x1vqgdyp',
    justifyContent: 'x1nhvcw1',
    paddingEnd: 'xn6708d',
    paddingStart: 'x1ye3gou',
    position: 'x1n2onr6',
  },
  rootMultiLine: {
    height: 'xt7dq6l',
    minHeight: 'x1ba4aug',
    paddingTop: 'x1y1aw1k',
    paddingEnd: 'xn6708d',
    paddingBottom: 'xwib8y2',
    paddingStart: 'x1ye3gou',
  },
  selected: {
    backgroundColor: 'x1hr4nm9',
  },
};

const TextInputButton = forwardRef(
  (
    {
      disabled = false,
      hasNewContentBadge = false,
      image,
      isUserEnteredPreviewText = false,
      label,
      labelMaxLines = 2,
      linkProps,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      preserveLabelNewlines = false,
      selected = false,
      testid,
    },
    ref
  ) => {
    const badge = hasNewContentBadge ? (
      <div
        className={`${styles.badge} ${disabled && styles.profileDisabled}`}
      >
        <CometBadge border="white" color={disabled ? 'gray' : 'blue'} size={6} />
      </div>
    ) : null;

    let imageComponent = null;
    if (image != null) {
      if (image.type === 'icon') {
        const iconColor = disabled ? 'disabled' : selected ? 'highlight' : 'primary';
        imageComponent = (
          <div className={`${styles.icon} ${styles.icon}`}>
            <TetraIcon color={iconColor} icon={image.icon} size={16} />
          </div>
        );
      } else if (image.type === 'profile-photo' && image.source != null) {
        imageComponent = (
          <div className={stylex(styles.profile, disabled && styles.profileDisabled)}>
            <TetraProfilePhoto shape="circle" size={28} source={image.source} />
          </div>
        );
      }
    }

    const labelComponent = (
      <div
        className={stylex(
          styles.linkLabel,
          isUserEnteredPreviewText && styles.linkLabelPlaceholder,
          preserveLabelNewlines && styles.linkLabelPreserveNewlines
        )}
      >
        <CometLineClamp lines={labelMaxLines}>{label}</CometLineClamp>
      </div>
    );

    return (
      <CometPressable
        disabled={disabled}
        display="inline"
        linkProps={linkProps}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onPress={disabled ? undefined : onPress}
        onPressIn={disabled ? undefined : onPressIn}
        overlayRadius={ICON_SIZE / 2}
        ref={ref}
        testid={testid}
        xstyle={() => [
          styles.root,
          styles.rootMultiLine,
          selected && styles.selected,
        ]}
      >
        {badge}
        {imageComponent}
        {labelComponent}
      </CometPressable>
    );
  }
);

export default TextInputButton;
