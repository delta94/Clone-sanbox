__d("BaseBadge.react", ["CometVisualCompletionAttributes", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = {
        root: {
            alignItems: "x6s0dn4",
            borderTopStartRadius: "xzolkzo",
            borderTopEndRadius: "x12go9s9",
            borderBottomEndRadius: "x1rnf11y",
            borderBottomStartRadius: "xprq8jg",
            boxSizing: "x9f619",
            display: "x3nfvp2",
            justifyContent: "xl56j7k",
            $$css: !0
        }
    };
    a = function(a) {
        var b = a.children
          , d = a.testid
          , e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "testid", "xstyle"]);
        return h.jsx("span", babelHelpers["extends"]({}, a, {
            className: c("stylex")([i.root, e])
        }, c("testID")(d), c("CometVisualCompletionAttributes").IGNORE, {
            children: b
        }))
    }
    ;
    g["default"] = a
}
), 98);

import React, { ReactNode } from 'react';

import stylex from 'stylex';
import testID from 'testID';
import CometVisualCompletionAttributes from 'CometVisualCompletionAttributes';

const styles = {
  root: {
    alignItems: 'x6s0dn4',
    borderTopStartRadius: 'xzolkzo',
    borderTopEndRadius: 'x12go9s9',
    borderBottomEndRadius: 'x1rnf11y',
    borderBottomStartRadius: 'xprq8jg',
    boxSizing: 'x9f619',
    display: 'x3nfvp2',
    justifyContent: 'xl56j7k',
    $$css: true,
  },
};

interface BaseBadgeProps {
  children: ReactNode;
  testid?: string;
  xstyle?: any[]; // You can replace 'any[]' with the actual type
}

function BaseBadge({ children, testid, xstyle, ...props }: BaseBadgeProps) {
  return (
    <span
      {...props}
      className={stylex([styles.root, xstyle])}
      {...testID(testid)}
      {...CometVisualCompletionAttributes.IGNORE}
    >
      {children}
    </span>
  );
}

export default BaseBadge;


