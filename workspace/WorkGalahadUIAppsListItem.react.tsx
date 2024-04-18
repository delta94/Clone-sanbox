__d("WorkGalahadUIAppsListItem.react", ["react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = {
            listItem: {
                listStyle: "xe8uvvx",
                $$css: !0
            },
            "default": {
                borderTopStyle: "x13fuv20",
                borderStartStyle: "x26u7qi",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderTopWidth: "x972fbf",
                borderStartWidth: "xm0m39n",
                borderEndWidth: "xcfux6l",
                borderBottomWidth: "x1qhh985",
                boxSizing: "x9f619",
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexShrink: "xs83m0k",
                marginTop: "xdj266r",
                marginEnd: "x11i5rnm",
                marginLeft: null,
                marginRight: null,
                marginBottom: "xat24cr",
                marginStart: "x1mh8g0r",
                minHeight: "x2lwn1j",
                minWidth: "xeuugli",
                paddingTop: "xexx8yu",
                paddingEnd: "x4uap5",
                paddingLeft: null,
                paddingRight: null,
                paddingBottom: "x18d9i69",
                paddingStart: "xkhd6sd",
                position: "x1n2onr6",
                zIndex: "x1ja2u2z",
                flexGrow: "x1c4vz4f",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                $$css: !0
            },
            withTopSpacing: {
                marginTop: "x1gslohp",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.withTopSpacing;
        a = a.testid;
        return j.jsx("div", {
            "data-testid": void 0,
            role: "row",
            ref: b,
            className: (h || (h = c("stylex")))(k.listItem, e && k.withTopSpacing),
            children: j.jsx("div", {
                className: "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1c4vz4f x6s0dn4 xl56j7k",
                role: "gridcell",
                children: d
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b
}), 98);




import React, { ForwardRefRenderFunction } from 'react';
import { stylex } from 'stylex';

const styles = {
    listItem: {
        listStyle: "xe8uvvx",
        $$css: !0
    },

    "default": {
        borderTopStyle: "x13fuv20",
        borderStartStyle: "x26u7qi",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderTopWidth: "x972fbf",
        borderStartWidth: "xm0m39n",
        borderEndWidth: "xcfux6l",
        borderBottomWidth: "x1qhh985",
        boxSizing: "x9f619",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        flexShrink: "xs83m0k",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginLeft: null,
        marginRight: null,
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingLeft: null,
        paddingRight: null,
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        position: "x1n2onr6",
        zIndex: "x1ja2u2z",
        flexGrow: "x1c4vz4f",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0
    },
    withTopSpacing: {
        marginTop: "x1gslohp",
        $$css: !0
    }
};

export interface WorkGalahadUIAppsListItemProps {
  children: React.ReactNode;
  withTopSpacing?: boolean;
  testid?: string; 
}

const WorkGalahadUIAppsListItem: ForwardRefRenderFunction<
  HTMLDivElement,
  WorkGalahadUIAppsListItemProps
> = (
  { 
    children,
    withTopSpacing,
    testid
  },
  ref
) => {

  return (
    <div 
      data-testid={testid}
      role="row"
      ref={ref}
      className={stylex(
        styles.listItem,
        withTopSpacing && styles.withTopSpacing
      )}
    >
      <div
        className={styles["default"]}
        role="gridcell"
      >
        {children}
      </div>
    </div>
  );
};

WorkGalahadUIAppsListItem.displayName = `WorkGalahadUIAppsListItem [from ${__filename}]`;

export default WorkGalahadUIAppsListItem;