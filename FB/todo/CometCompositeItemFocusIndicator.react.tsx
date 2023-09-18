__d("CometCompositeItemFocusIndicator.react", ["ix", "CometCompositeStructureContext", "CometIcon.react", "fbicon", "gkx", "react", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react")
      , j = d("react").useContext;
    b = {
        downArrow: {
            bottom: "xqd3l62",
            marginStart: "x1orzsq4",
            start: "xtzzx4i",
            $$css: !0
        },
        focusArrow: {
            backgroundColor: "x2bj2ny",
            borderTop: "xn7ya7q",
            borderEnd: "x1su9jv1",
            borderBottom: "xt02mhb",
            borderStart: "xb4krs4",
            borderTopStartRadius: "x1npaq5j",
            borderTopEndRadius: "x1c83p5e",
            borderBottomEndRadius: "x1enjb0b",
            borderBottomStartRadius: "x199158v",
            height: "xdk7pt",
            lineHeight: "x14ju556",
            paddingTop: "x1nn3v0j",
            paddingEnd: "xg83lxy",
            paddingBottom: "xg8j3zb",
            paddingStart: "x1k2j06m",
            position: "x10l6tqk",
            width: "x1xc55vz",
            $$css: !0
        },
        leftArrow: {
            marginTop: "x9otpla",
            start: "x67uiyb",
            top: "xwa60dl",
            $$css: !0
        },
        rightArrow: {
            end: "x1wtad8d",
            marginTop: "x9otpla",
            top: "xwa60dl",
            $$css: !0
        },
        upArrow: {
            marginStart: "x1orzsq4",
            start: "xtzzx4i",
            top: "x1fur4o1",
            $$css: !0
        }
    };
    e = {
        focusArrow: {
            backgroundColor: "x2bj2ny",
            borderTopWidth: "x178xt8z",
            borderEndWidth: "xm81vs4",
            borderBottomWidth: "xso031l",
            borderStartWidth: "xy80clv",
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopColor: "x1xqsql5",
            borderEndColor: "x1sn40xs",
            borderBottomColor: "x1gkuw16",
            borderStartColor: "xg1yei2",
            borderTopStartRadius: "x1npaq5j",
            borderTopEndRadius: "x1c83p5e",
            borderBottomEndRadius: "x1enjb0b",
            borderBottomStartRadius: "x199158v",
            height: "xdk7pt",
            lineHeight: "x14ju556",
            paddingTop: "x1nn3v0j",
            paddingEnd: "xg83lxy",
            paddingBottom: "xg8j3zb",
            paddingStart: "x1k2j06m",
            position: "x10l6tqk",
            width: "x1xc55vz",
            $$css: !0
        }
    };
    var k = c("gkx")("4855") ? babelHelpers["extends"]({}, b, e) : b
      , l = c("gkx")("1721477") || c("gkx")("1459");
    function a() {
        var a = j(c("CometCompositeStructureContext"));
        return !l || a.hideArrowSignifiers === !0 ? null : i.jsxs(i.Fragment, {
            children: [a.horizontal === !0 ? i.jsxs(i.Fragment, {
                children: [i.jsx("div", {
                    className: c("stylex")(k.focusArrow, k.leftArrow),
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("1739808"), 8)
                    })
                }), i.jsx("div", {
                    className: c("stylex")(k.focusArrow, k.rightArrow),
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("897949"), 8)
                    })
                })]
            }) : null, a.vertical === !0 ? i.jsxs(i.Fragment, {
                children: [i.jsx("div", {
                    className: c("stylex")(k.focusArrow, k.upArrow),
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("702721"), 8)
                    })
                }), i.jsx("div", {
                    className: c("stylex")(k.focusArrow, k.downArrow),
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("701592"), 8)
                    })
                })]
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { Fragment } from 'react';
import { useContext } from 'react';
import { CometCompositeStructureContext } from 'CometCompositeStructureContext';
import CometIcon from 'CometIcon.react';
import { _ } from 'fbicon';
import { gkx } from 'gkx';
import { stylex } from 'stylex';

const focusArrowStyles = {
  backgroundColor: 'x2bj2ny',
  borderTop: 'xn7ya7q',
  borderEnd: 'x1su9jv1',
  borderBottom: 'xt02mhb',
  borderStart: 'xb4krs4',
  borderTopStartRadius: 'x1npaq5j',
  borderTopEndRadius: 'x1c83p5e',
  borderBottomEndRadius: 'x1enjb0b',
  borderBottomStartRadius: 'x199158v',
  height: 'xdk7pt',
  lineHeight: 'x14ju556',
  paddingTop: 'x1nn3v0j',
  paddingEnd: 'xg83lxy',
  paddingBottom: 'xg8j3zb',
  paddingStart: 'x1k2j06m',
  position: 'x10l6tqk',
  width: 'x1xc55vz',
  $$css: true,
};

const arrowStyles = {
  downArrow: {
    bottom: 'xqd3l62',
    marginStart: 'x1orzsq4',
    start: 'xtzzx4i',
    $$css: true,
  },
  leftArrow: {
    marginTop: 'x9otpla',
    start: 'x67uiyb',
    top: 'xwa60dl',
    $$css: true,
  },
  rightArrow: {
    end: 'x1wtad8d',
    marginTop: 'x9otpla',
    top: 'xwa60dl',
    $$css: true,
  },
  upArrow: {
    marginStart: 'x1orzsq4',
    start: 'xtzzx4i',
    top: 'x1fur4o1',
    $$css: true,
  },
};

const combinedStyles = gkx('4855') ? { ...arrowStyles, ...focusArrowStyles } : arrowStyles;

const shouldHideArrowSignifiers = gkx('1721477') || gkx('1459');

function CometCompositeItemFocusIndicator() {
  const context = useContext(CometCompositeStructureContext);

  if (!shouldHideArrowSignifiers || context.hideArrowSignifiers === true) {
    return null;
  }

  return (
    <Fragment>
      {context.horizontal === true ? (
        <Fragment>
          <div className={stylex(combinedStyles.focusArrow, combinedStyles.leftArrow)}>
            <CometIcon color="primary" icon={_(1739808, 8)} />
          </div>
          <div className={stylex(combinedStyles.focusArrow, combinedStyles.rightArrow)}>
            <CometIcon color="primary" icon={_(897949, 8)} />
          </div>
        </Fragment>
      ) : null}
      {context.vertical === true ? (
        <Fragment>
          <div className={stylex(combinedStyles.focusArrow, combinedStyles.upArrow)}>
            <CometIcon color="primary" icon={_(702721, 8)} />
          </div>
          <div className={stylex(combinedStyles.focusArrow, combinedStyles.downArrow)}>
            <CometIcon color="primary" icon={_(701592, 8)} />
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
}

export default CometCompositeItemFocusIndicator;
