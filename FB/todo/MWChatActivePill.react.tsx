__d("MWChatActivePill.react", ["CometPressableChildrenWithOverlay.react", "CometPressableOverlay.react", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
        badge: {
            backgroundColor: "xbb192p",
            borderTopStartRadius: "xhw592a",
            borderTopEndRadius: "xwihvcr",
            borderBottomEndRadius: "x7wuybg",
            borderBottomStartRadius: "xb9tvrk",
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopWidth: "xamhcws",
            borderEndWidth: "xol2nv",
            borderBottomWidth: "xlxy82",
            borderStartWidth: "x19p7ews",
            boxSizing: "x9f619",
            display: "x78zum5",
            fontWeight: "x117nqv4",
            justifyContent: "xl56j7k",
            marginTop: "x1kgmq87",
            marginEnd: "xwrv7xz",
            marginBottom: "xmgb6t1",
            marginStart: "x8182xy",
            paddingStart: "x1h0ha7o",
            paddingEnd: "xg83lxy",
            $$css: !0
        },
        badgeContainer: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            maxWidth: "x193iq5w",
            $$css: !0
        },
        inner: {
            color: "x6u5lvz",
            fontSize: "x190qgfh",
            lineHeight: "x132q4wb",
            whiteSpace: "xuxw1ft",
            $$css: !0
        }
    }
      , j = {
        "card-background": {
            borderTopColor: "x6zyg47",
            borderEndColor: "x1xm1mqw",
            borderBottomColor: "xpn8fn3",
            borderStartColor: "xtct9fg",
            $$css: !0
        },
        "secondary-button-background-floating": {
            borderTopColor: "x1bmsi4x",
            borderEndColor: "xrcl4xe",
            borderBottomColor: "x17j0sh5",
            borderStartColor: "x14li8yl",
            $$css: !0
        },
        "web-wash": {
            borderTopColor: "x1516sgx",
            borderEndColor: "x1fjwj1m",
            borderBottomColor: "x1khxuxv",
            borderStartColor: "x4gm0zg",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.border;
        b = b === void 0 ? "card-background" : b;
        var d = a.children;
        a = a.pressed;
        return h.jsx("div", {
            className: "x78zum5 xl56j7k x193iq5w",
            children: h.jsx(c("CometPressableChildrenWithOverlay.react"), {
                overlay: h.jsx(c("CometPressableOverlay.react"), {
                    pressed: a,
                    radius: 7
                }),
                children: h.jsx("div", {
                    className: c("stylex")(i.badge, j[b]),
                    children: h.jsx("span", {
                        className: "x6u5lvz x190qgfh x132q4wb xuxw1ft",
                        children: d
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React from 'react';
import CometPressableChildrenWithOverlay from "CometPressableChildrenWithOverlay.react";
import CometPressableOverlay from "CometPressableOverlay.react";


const styles = {
  badge: {
    backgroundColor: 'xbb192p',
    borderTopStartRadius: 'xhw592a',
    borderTopEndRadius: 'xwihvcr',
    borderBottomEndRadius: 'x7wuybg',
    borderBottomStartRadius: 'xb9tvrk',
    borderTopStyle: 'x13fuv20',
    borderEndStyle: 'xu3j5b3',
    borderBottomStyle: 'x1q0q8m5',
    borderStartStyle: 'x26u7qi',
    borderTopWidth: 'xamhcws',
    borderEndWidth: 'xol2nv',
    borderBottomWidth: 'xlxy82',
    borderStartWidth: 'x19p7ews',
    boxSizing: 'x9f619',
    display: 'x78zum5',
    fontWeight: 'x117nqv4',
    justifyContent: 'xl56j7k',
    marginTop: 'x1kgmq87',
    marginEnd: 'xwrv7xz',
    marginBottom: 'xmgb6t1',
    marginStart: 'x8182xy',
    paddingStart: 'x1h0ha7o',
    paddingEnd: 'xg83lxy',
    $$css: true,
  },
  badgeContainer: {
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    maxWidth: 'x193iq5w',
    $$css: true,
  },
  inner: {
    color: 'x6u5lvz',
    fontSize: 'x190qgfh',
    lineHeight: 'x132q4wb',
    whiteSpace: 'xuxw1ft',
    $$css: true,
  },
};

const borderColors = {
  'card-background': {
    borderTopColor: 'x6zyg47',
    borderEndColor: 'x1xm1mqw',
    borderBottomColor: 'xpn8fn3',
    borderStartColor: 'xtct9fg',
    $$css: true,
  },
  'secondary-button-background-floating': {
    borderTopColor: 'x1bmsi4x',
    borderEndColor: 'xrcl4xe',
    borderBottomColor: 'x17j0sh5',
    borderStartColor: 'x14li8yl',
    $$css: true,
  },
  'web-wash': {
    borderTopColor: 'x1516sgx',
    borderEndColor: 'x1fjwj1m',
    borderBottomColor: 'x1khxuxv',
    borderStartColor: 'x4gm0zg',
    $$css: true,
  },
};

type BorderType = keyof typeof borderColors;

interface MWChatActivePillProps {
  border?: BorderType;
  children: React.ReactNode;
  pressed?: boolean;
}

const MWChatActivePill: React.FC<MWChatActivePillProps> = ({
  border = 'card-background',
  children,
  pressed = false,
}) => {
  return (
    <div className="x78zum5 xl56j7k x193iq5w">
      <CometPressableChildrenWithOverlay
        overlay={
          <CometPressableOverlay pressed={pressed} radius={7} />
        }
      >
        <div className={stylex(styles.badge, borderColors[border])}>
          <span className="x6u5lvz x190qgfh x132q4wb xuxw1ft">
            {children}
          </span>
        </div>
      </CometPressableChildrenWithOverlay>
    </div>
  );
};

export default MWChatActivePill;

