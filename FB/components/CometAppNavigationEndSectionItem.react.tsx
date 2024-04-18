__d("CometAppNavigationEndSectionItem.react", ["react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = {
            displayNone: {
                display: "x1s85apg",
                $$css: !0
            },
            layoutEndButton: {
                alignItems: "x6s0dn4",
                display: "x78zum5",
                height: "x5yr21d",
                justifyContent: "xl56j7k",
                marginEnd: "x1emribx",
                marginLeft: null,
                marginRight: null,
                $$css: !0
            },
            widePivotLink: {
                "@media (max-width: 1260px)_display": "xfff67h",
                "@media (max-width: 1379px)_maxWidth": "xu1161g",
                "@media (min-width: 1380px) and (max-height: 789px)_maxWidth": "x12ca73t",
                "@media (min-width: 1380px) and (min-height: 790px)_maxWidth": "x5vlmd",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.children,
            d = a.displayNone;
        d = d === void 0 ? !1 : d;
        var e = a.noWrapper;
        e = e === void 0 ? !1 : e;
        a = a.widePivotLink;
        a = a === void 0 ? !1 : a;
        return e ? b : j.jsx("div", {
            className: (h || (h = c("stylex")))([k.layoutEndButton, a && k.widePivotLink, d && k.displayNone]),
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { FC } from 'react';
import stylex from 'stylex'; // Replace with the actual import path

interface CometAppNavigationEndSectionItemProps {
  children: React.ReactNode;
  displayNone?: boolean;
  noWrapper?: boolean;
  widePivotLink?: boolean;
}

const styles = {
    displayNone: {
        display: "x1s85apg",
        $$css: !0
    },
    layoutEndButton: {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        height: "x5yr21d",
        justifyContent: "xl56j7k",
        marginEnd: "x1emribx",
        marginLeft: null,
        marginRight: null,
        $$css: !0
    },
    widePivotLink: {
        "@media (max-width: 1260px)_display": "xfff67h",
        "@media (max-width: 1379px)_maxWidth": "xu1161g",
        "@media (min-width: 1380px) and (max-height: 789px)_maxWidth": "x12ca73t",
        "@media (min-width: 1380px) and (min-height: 790px)_maxWidth": "x5vlmd",
        $$css: !0
    }
};

const CometAppNavigationEndSectionItem: FC<CometAppNavigationEndSectionItemProps> = ({ children, displayNone = false, noWrapper = false, widePivotLink = false }) => {
  return noWrapper ? (
    <>{children}</>
  ) : (
    <div className={stylex([styles.layoutEndButton, widePivotLink && styles.widePivotLink, displayNone && styles.displayNone])}>
      {children}
    </div>
  );
};

CometAppNavigationEndSectionItem.displayName = `${CometAppNavigationEndSectionItem.name} [from ${f.id}]`; // Replace f.id with the actual identifier

export default CometAppNavigationEndSectionItem;

