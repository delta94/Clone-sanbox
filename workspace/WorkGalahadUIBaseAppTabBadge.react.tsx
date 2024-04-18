__d("WorkGalahadUIBaseAppTabBadge.react", ["fbt", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = j || d("react"),
        l = {
            badge: {
                borderTopStartRadius: "x1tlxs6b",
                borderTopEndRadius: "x1g8br2z",
                borderBottomEndRadius: "x1gn5b1j",
                borderBottomStartRadius: "x230xth",
                color: "x14ctfv",
                height: "xmix8c7",
                minWidth: "x19nz27s",
                paddingTop: "xexx8yu",
                paddingEnd: "xsyo7zv",
                paddingBottom: "x18d9i69",
                paddingStart: "x16hj40l",
                position: "x10l6tqk",
                borderTopWidth: "xamhcws",
                borderEndWidth: "xol2nv",
                borderBottomWidth: "xlxy82",
                borderStartWidth: "x19p7ews",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopColor: "xwvbi36",
                borderEndColor: "x18ttfsc",
                borderBottomColor: "x1odgm16",
                borderStartColor: "x1g4g3he",
                right: "x11jdl05",
                start: null,
                end: null,
                textAlign: "x2b8uid",
                top: "x1v4kod4",
                $$css: !0
            },
            showDot: {
                width: "xsmyaan",
                height: "x1kpxq89",
                top: "xtu2xtp",
                right: "xgzdjil",
                start: null,
                end: null,
                paddingTop: "xexx8yu",
                paddingEnd: "x4uap5",
                paddingBottom: "x18d9i69",
                paddingStart: "xkhd6sd",
                $$css: !0
            },
            badgeCherry: {
                backgroundColor: "x1cdvf7c",
                $$css: !0
            },
            badgeGrey: {
                backgroundColor: "x1r6zdsc",
                $$css: !0
            },
            badgeHovered: {
                borderTopWidth: "xamhcws",
                borderEndWidth: "xol2nv",
                borderBottomWidth: "xlxy82",
                borderStartWidth: "x19p7ews",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopColor: "x1jsc1m",
                borderEndColor: "x1bxnlhq",
                borderBottomColor: "x1cr0j1y",
                borderStartColor: "xfzdgqk",
                $$css: !0
            },
            blueBorder: {
                borderTopWidth: "xamhcws",
                borderEndWidth: "xol2nv",
                borderBottomWidth: "xlxy82",
                borderStartWidth: "x19p7ews",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopColor: "x1ptp9x",
                borderEndColor: "xmjetbc",
                borderBottomColor: "xi5va6r",
                borderStartColor: "x1vivegt",
                $$css: !0
            },
            badgeNumber: {
                lineHeight: "xwn7fz2",
                minHeight: "xdf7u50",
                fontSize: "x190qgfh",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.count,
            d = a.hovered,
            e = a.maxCount;
        e = e === void 0 ? 99 : e;
        var f = a.selected,
            g = a.showDot;
        g = g === void 0 ? !1 : g;
        a = a.useGreyBadging;
        return !b ? null : k.jsx("span", {
            className: (i || (i = c("stylex")))(l.badge, !a && l.badgeCherry, d && !f && l.badgeHovered, a && l.badgeGrey, f && l.blueBorder, g && l.showDot),
            "aria-label": h._("Unread count of {notifications or messages}", [h._param("notifications or messages", b)]),
            role: "status",
            children: !g && k.jsx("span", {
                className: "xwn7fz2 xdf7u50 x190qgfh",
                "aria-hidden": "true",
                children: b > e ? e + "+" : b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { FC } from 'react';
import { _param, _ } from 'fbt';
import { stylex } from 'stylex';

interface WorkGalahadUIBaseAppTabBadgeProps {
  count: number;
  hovered?: boolean;
  maxCount?: number;
  selected?: boolean;
  showDot?: boolean;
  useGreyBadging?: boolean;
}

const badgeStyles = stylex({
    badge: {
        borderTopStartRadius: "x1tlxs6b",
        borderTopEndRadius: "x1g8br2z",
        borderBottomEndRadius: "x1gn5b1j",
        borderBottomStartRadius: "x230xth",
        color: "x14ctfv",
        height: "xmix8c7",
        minWidth: "x19nz27s",
        paddingTop: "xexx8yu",
        paddingEnd: "xsyo7zv",
        paddingBottom: "x18d9i69",
        paddingStart: "x16hj40l",
        position: "x10l6tqk",
        borderTopWidth: "xamhcws",
        borderEndWidth: "xol2nv",
        borderBottomWidth: "xlxy82",
        borderStartWidth: "x19p7ews",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopColor: "xwvbi36",
        borderEndColor: "x18ttfsc",
        borderBottomColor: "x1odgm16",
        borderStartColor: "x1g4g3he",
        right: "x11jdl05",
        start: null,
        end: null,
        textAlign: "x2b8uid",
        top: "x1v4kod4",
        $$css: !0
    },
    showDot: {
        width: "xsmyaan",
        height: "x1kpxq89",
        top: "xtu2xtp",
        right: "xgzdjil",
        start: null,
        end: null,
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        $$css: !0
    },
    badgeCherry: {
        backgroundColor: "x1cdvf7c",
        $$css: !0
    },
    badgeGrey: {
        backgroundColor: "x1r6zdsc",
        $$css: !0
    },
    badgeHovered: {
        borderTopWidth: "xamhcws",
        borderEndWidth: "xol2nv",
        borderBottomWidth: "xlxy82",
        borderStartWidth: "x19p7ews",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopColor: "x1jsc1m",
        borderEndColor: "x1bxnlhq",
        borderBottomColor: "x1cr0j1y",
        borderStartColor: "xfzdgqk",
        $$css: !0
    },
    blueBorder: {
        borderTopWidth: "xamhcws",
        borderEndWidth: "xol2nv",
        borderBottomWidth: "xlxy82",
        borderStartWidth: "x19p7ews",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopColor: "x1ptp9x",
        borderEndColor: "xmjetbc",
        borderBottomColor: "xi5va6r",
        borderStartColor: "x1vivegt",
        $$css: !0
    },
    badgeNumber: {
        lineHeight: "xwn7fz2",
        minHeight: "xdf7u50",
        fontSize: "x190qgfh",
        $$css: !0
    }
});

const WorkGalahadUIBaseAppTabBadge: FC<WorkGalahadUIBaseAppTabBadgeProps> = ({
  count,
  hovered,
  maxCount = 99,
  selected,
  showDot = false,
  useGreyBadging,
}) => {
  return !count ? null : (
    <span
      className={stylex(
        badgeStyles.badge,
        !useGreyBadging && badgeStyles.badgeCherry,
        hovered && !selected && badgeStyles.badgeHovered,
        useGreyBadging && badgeStyles.badgeGrey,
        selected && badgeStyles.blueBorder,
        showDot && badgeStyles.showDot,
      )}
      aria-label={_(
        'Unread count of {notifications or messages}',
        [_param('notifications or messages', count)],
      )}
      role="status"
    >
      {!showDot && (
        <span
          className="xwn7fz2 xdf7u50 x190qgfh"
          aria-hidden="true"
        >
          {count > maxCount ? `${maxCount}+` : count}
        </span>
      )}
    </span>
  );
};

WorkGalahadUIBaseAppTabBadge.displayName = `${WorkGalahadUIBaseAppTabBadge.name} [from ${98}]`;

export default WorkGalahadUIBaseAppTabBadge;
