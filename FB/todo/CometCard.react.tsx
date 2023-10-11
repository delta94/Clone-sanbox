__d("CometCard.react", ["BaseView.react", "isBlueprintStylesEnabled", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"), k = {
        "base-wash": {
            backgroundColor: "x1vtvx1t",
            $$css: !0
        },
        "card-flat": {
            backgroundColor: "xlhe6ec",
            $$css: !0
        },
        "dark-wash": {
            backgroundColor: "xatbrnm",
            $$css: !0
        },
        error: {
            backgroundColor: "x1ciooss",
            $$css: !0
        },
        highlight: {
            backgroundColor: "xwnonoy",
            $$css: !0
        },
        "light-wash": {
            backgroundColor: "x443n21",
            $$css: !0
        },
        transparent: {
            backgroundColor: "xjbqb8w",
            $$css: !0
        },
        white: {
            backgroundColor: "x2bj2ny",
            $$css: !0
        }
    }, l = {
        borderHighlightAnimation: {
            animationDuration: "x1q3qbx4",
            animationFillMode: "x1u6ievf",
            animationName: "x1raiwjw",
            animationTimingFunction: "x11wifem",
            $$css: !0
        },
        borderHighlightOverlay: {
            borderTopColor: "x1tz4bnf",
            borderEndColor: "xmds5ef",
            borderBottomColor: "x25epmt",
            borderStartColor: "x11y6y4w",
            borderTopStartRadius: "x1a2cdl4",
            borderTopEndRadius: "xnhgr82",
            borderBottomEndRadius: "x1qt0ttw",
            borderBottomStartRadius: "xgk8upj",
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopWidth: "xamhcws",
            borderEndWidth: "xol2nv",
            borderBottomWidth: "xlxy82",
            borderStartWidth: "x19p7ews",
            bottom: "x1t1qrwb",
            end: "x15jmxi0",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            start: "x1uvgrom",
            top: "x1qiirwl",
            zIndex: "x1vjfegm",
            $$css: !0
        },
        borderInset: {
            borderTopStartRadius: "x1lq5wgf",
            borderTopEndRadius: "xgqcy7u",
            borderBottomEndRadius: "x30kzoy",
            borderBottomStartRadius: "x9jhf4c",
            bottom: "x1ey2m1c",
            boxShadow: "xlg9a9y",
            boxSizing: "x9f619",
            end: "xds687c",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            start: "x17qophe",
            top: "x13vifvy",
            $$css: !0
        },
        borderOnWash: {
            borderTopColor: "x8cjs6t",
            borderEndColor: "x1ch86jh",
            borderBottomColor: "x80vd3b",
            borderStartColor: "xckqwgs",
            $$css: !0
        },
        borderOnWhite: {
            borderTopColor: "x8cjs6t",
            borderEndColor: "x1ch86jh",
            borderBottomColor: "x80vd3b",
            borderStartColor: "xckqwgs",
            $$css: !0
        },
        borderSolid: {
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopWidth: "x178xt8z",
            borderEndWidth: "xm81vs4",
            borderBottomWidth: "xso031l",
            borderStartWidth: "xy80clv",
            $$css: !0
        },
        container: {
            display: "x78zum5",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: !0
        },
        expanding: {
            flexGrow: "x1iyjqo2",
            $$css: !0
        },
        overflowHidden: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: !0
        },
        root: {
            borderTopStartRadius: "x1qpq9i9",
            borderTopEndRadius: "xdney7k",
            borderBottomEndRadius: "xu5ydu1",
            borderBottomStartRadius: "xt3gfkd",
            width: "xh8yej3",
            $$css: !0
        }
    }, m = {
        1: {
            boxShadow: "xquyuld",
            $$css: !0
        },
        2: {
            boxShadow: "x10h3on",
            $$css: !0
        }
    };
    function a(a, b) {
        var d = a.allowOverflow;
        d = d === void 0 ? !1 : d;
        var e = a.background;
        e = e === void 0 ? "transparent" : e;
        var f = a.border;
        f = f === void 0 ? "none" : f;
        var g = a.borderHighlight
          , i = a.children
          , n = a.dropShadow;
        n = n === void 0 ? 0 : n;
        var o = a.expanding;
        o = o === void 0 ? !1 : o;
        var p = a.testid;
        a = a.xstyle;
        n = m[n];
        return j.jsxs("div", babelHelpers["extends"]({
            className: (h || (h = c("stylex")))(l.container, o && l.expanding)
        }, c("testID")(p), {
            children: [j.jsx(c("BaseView.react"), {
                ref: b,
                style: {
                    borderRadius: c("isBlueprintStylesEnabled")() ? "max(0px, min(12px, calc((100vw - 4px - 100%) * 9999))) / 12px" : "max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px"
                },
                xstyle: [k[e], f === "solid" && e !== "white" && l.borderOnWash, f === "solid" && e === "white" && l.borderOnWhite, f === "solid" && l.borderSolid, l.root, !d && l.overflowHidden, n, a],
                children: i
            }), f === "inset" ? j.jsx("div", {
                className: "x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ey2m1c xlg9a9y x9f619 xds687c x47corl x10l6tqk x17qophe x13vifvy"
            }) : null, g != null ? j.jsx("div", {
                className: (h || (h = c("stylex")))(l.borderHighlightOverlay, g === "animated" && l.borderHighlightAnimation)
            }) : null]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b
}
), 98);





import React, { forwardRef, JSXElementConstructor, Ref } from "react";
import { isBlueprintStylesEnabled } from "./isBlueprintStylesEnabled"; // Assuming it's in the same directory
import stylex from "./stylex"; // Assuming it's in the same directory
import BaseView from "./BaseView.react"; // Assuming it's in the same directory

type CardProps = {
  allowOverflow?: boolean;
  background?: string;
  border?: string;
  borderHighlight?: any; // Replace 'any' with a proper type if known
  children?: React.ReactNode;
  dropShadow?: number;
  expanding?: boolean;
  testid?: string;
  xstyle?: any; // Replace 'any' with a proper type if known
};

const backgroundStyles = {
    "base-wash": {
        backgroundColor: "x1vtvx1t",
        $$css: !0
    },
    "card-flat": {
        backgroundColor: "xlhe6ec",
        $$css: !0
    },
    "dark-wash": {
        backgroundColor: "xatbrnm",
        $$css: !0
    },
    error: {
        backgroundColor: "x1ciooss",
        $$css: !0
    },
    highlight: {
        backgroundColor: "xwnonoy",
        $$css: !0
    },
    "light-wash": {
        backgroundColor: "x443n21",
        $$css: !0
    },
    transparent: {
        backgroundColor: "xjbqb8w",
        $$css: !0
    },
    white: {
        backgroundColor: "x2bj2ny",
        $$css: !0
    }
};

const borderStyles = {
    borderHighlightAnimation: {
        animationDuration: "x1q3qbx4",
        animationFillMode: "x1u6ievf",
        animationName: "x1raiwjw",
        animationTimingFunction: "x11wifem",
        $$css: !0
    },
    borderHighlightOverlay: {
        borderTopColor: "x1tz4bnf",
        borderEndColor: "xmds5ef",
        borderBottomColor: "x25epmt",
        borderStartColor: "x11y6y4w",
        borderTopStartRadius: "x1a2cdl4",
        borderTopEndRadius: "xnhgr82",
        borderBottomEndRadius: "x1qt0ttw",
        borderBottomStartRadius: "xgk8upj",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopWidth: "xamhcws",
        borderEndWidth: "xol2nv",
        borderBottomWidth: "xlxy82",
        borderStartWidth: "x19p7ews",
        bottom: "x1t1qrwb",
        end: "x15jmxi0",
        pointerEvents: "x47corl",
        position: "x10l6tqk",
        start: "x1uvgrom",
        top: "x1qiirwl",
        zIndex: "x1vjfegm",
        $$css: !0
    },
    borderInset: {
        borderTopStartRadius: "x1lq5wgf",
        borderTopEndRadius: "xgqcy7u",
        borderBottomEndRadius: "x30kzoy",
        borderBottomStartRadius: "x9jhf4c",
        bottom: "x1ey2m1c",
        boxShadow: "xlg9a9y",
        boxSizing: "x9f619",
        end: "xds687c",
        pointerEvents: "x47corl",
        position: "x10l6tqk",
        start: "x17qophe",
        top: "x13vifvy",
        $$css: !0
    },
    borderOnWash: {
        borderTopColor: "x8cjs6t",
        borderEndColor: "x1ch86jh",
        borderBottomColor: "x80vd3b",
        borderStartColor: "xckqwgs",
        $$css: !0
    },
    borderOnWhite: {
        borderTopColor: "x8cjs6t",
        borderEndColor: "x1ch86jh",
        borderBottomColor: "x80vd3b",
        borderStartColor: "xckqwgs",
        $$css: !0
    },
    borderSolid: {
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopWidth: "x178xt8z",
        borderEndWidth: "xm81vs4",
        borderBottomWidth: "xso031l",
        borderStartWidth: "xy80clv",
        $$css: !0
    },
    container: {
        display: "x78zum5",
        position: "x1n2onr6",
        width: "xh8yej3",
        $$css: !0
    },
    expanding: {
        flexGrow: "x1iyjqo2",
        $$css: !0
    },
    overflowHidden: {
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0
    },
    root: {
        borderTopStartRadius: "x1qpq9i9",
        borderTopEndRadius: "xdney7k",
        borderBottomEndRadius: "xu5ydu1",
        borderBottomStartRadius: "xt3gfkd",
        width: "xh8yej3",
        $$css: !0
    }
};

const shadowStyles = {
    1: {
        boxShadow: "xquyuld",
        $$css: !0
    },
    2: {
        boxShadow: "x10h3on",
        $$css: !0
    }
};

const CometCard: JSXElementConstructor<CardProps> = forwardRef((props: CardProps, ref: Ref<any>) => {
  const {
    allowOverflow = false,
    background = "transparent",
    border = "none",
    borderHighlight,
    children,
    dropShadow = 0,
    expanding = false,
    testid,
    xstyle,
  } = props;

  const computedBorderRadius = isBlueprintStylesEnabled()
    ? "max(0px, min(12px, calc((100vw - 4px - 100%) * 9999))) / 12px"
    : "max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px";

  return (
    <div className={stylex(borderStyles.container, expanding && borderStyles.expanding)} data-testid={testid}>
      <BaseView
        ref={ref}
        style={{ borderRadius: computedBorderRadius }}
        xstyle={[
          backgroundStyles[background],
          border === "solid" && background !== "white" && borderStyles.borderOnWash,
          border === "solid" && background === "white" && borderStyles.borderOnWhite,
          border === "solid" && borderStyles.borderSolid,
          borderStyles.root,
          !allowOverflow && borderStyles.overflowHidden,
          shadowStyles[dropShadow],
          xstyle,
        ]}
      >
        {children}
      </BaseView>
      {border === "inset" && <div className={stylex(borderStyles.borderInset)}></div>}
      {borderHighlight && <div className={stylex(borderStyles.borderHighlightOverlay, borderHighlight === "animated" && borderStyles.borderHighlightAnimation)}></div>}
    </div>
  );
});

export default CometCard;
