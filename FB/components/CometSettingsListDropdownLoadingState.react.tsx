__d(
  "CometSettingsListDropdownLoadingState.react",
  [
    "fbt",
    "FDSListCellGlimmer.react",
    "TetraText.react",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || (j = d("react")),
      l = j.useId,
      m = (b = c("qex")._("999")) != null ? b : !1,
      n = 76,
      o = {
        card: { boxSizing: "x9f619", width: "x1cvmir6", $$css: !0 },
        cardFullHeight: { height: "x20eyyc", maxWidth: "xvv7f4i", $$css: !0 },
      };
    function a(a) {
      var b = a.glimmerSize;
      b = b === void 0 ? 56 : b;
      var d = a.hasActions;
      d = d === void 0 ? !1 : d;
      var e = a.numberOfItems,
        f = a.shouldAnimate;
      f = f === void 0 ? !0 : f;
      a = a.title;
      var g = l();
      g = k.jsxs("div", {
        className: (i || (i = c("stylex")))(
          o.card,
          e == null && o.cardFullHeight
        ),
        children: [
          k.jsxs("div", {
            className:
              "x6s0dn4 x78zum5 x2lah0s x1qughib x21xpn4 xz9dl7a x1pi30zi xjkvuk6 x1swvt13",
            children: [
              k.jsx(c("TetraText.react"), {
                id: g,
                isSemanticHeading: !0,
                type: "headlineEmphasized1",
                children: a,
              }),
              d && k.jsx("div", { className: "x17rw0jw xvy4d1p" }),
            ],
          }),
          k.jsx(c("FDSListCellGlimmer.react"), {
            imageSize: b,
            imageStyle: "circle",
            numberOfItems:
              e != null
                ? e
                : Math.max(Math.ceil((window.innerHeight - 72 - 45) / n), 1),
          }),
        ],
      });
      return f && m
        ? g
        : k.jsx("div", {
            className: "x1emribx x1ok221b",
            children: k.jsx(
              "div",
              babelHelpers["extends"](
                { "aria-label": h._("__JHASH__ZmV7RuEynfV__JHASH__") },
                {
                  className:
                    "x1jx94hy x1qpq9i9 xdney7k xu5ydu1 xt3gfkd x8ii3r7 x9f619 x6ikm8r x10wlt62",
                },
                { role: "status", children: g }
              )
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React from "react";
import { fbt } from "fbt";
import FDSListCellGlimmer from "FDSListCellGlimmer.react";
import TetraText from "TetraText.react";
import { qex } from "qex";
import { stylex } from "stylex";

const shouldAnimateFallback = qex._("999") ?? false;

const ITEM_HEIGHT = 76;

const styles = {
  card: { boxSizing: "border-box", width: "100%", $$css: true },
  cardFullHeight: { height: "100%", maxWidth: "100%", $$css: true },
};

interface CometSettingsListDropdownLoadingStateProps {
  glimmerSize?: number;
  hasActions?: boolean;
  numberOfItems?: number;
  shouldAnimate?: boolean;
  title?: string;
}

const CometSettingsListDropdownLoadingState: React.FC<
  CometSettingsListDropdownLoadingStateProps
> = ({
  glimmerSize = 56,
  hasActions = false,
  numberOfItems,
  shouldAnimate = true,
  title,
}) => {
  const id = React.useId();

  const content = (
    <div
      className={stylex(
        styles.card,
        numberOfItems == null && styles.cardFullHeight
      )}
    >
      <div
        className={
          "x6s0dn4 x78zum5 x2lah0s x1qughib x21xpn4 xz9dl7a x1pi30zi xjkvuk6 x1swvt13"
        }
      >
        <TetraText id={id} isSemanticHeading type="headlineEmphasized1">
          {title}
        </TetraText>
        {hasActions && <div className="x17rw0jw xvy4d1p" />}
      </div>
      <FDSListCellGlimmer
        imageSize={glimmerSize}
        imageStyle="circle"
        numberOfItems={
          numberOfItems != null
            ? numberOfItems
            : Math.max(
                Math.ceil((window.innerHeight - 72 - 45) / ITEM_HEIGHT),
                1
              )
        }
      />
    </div>
  );

  return shouldAnimate && shouldAnimateFallback ? (
    content
  ) : (
    <div className="x1emribx x1ok221b">
      <div
        aria-label={fbt("Loading", "__JHASH__ZmV7RuEynfV__JHASH__")}
        className="x1jx94hy x1qpq9i9 xdney7k xu5ydu1 xt3gfkd x8ii3r7 x9f619 x6ikm8r x10wlt62"
        role="status"
      >
        {content}
      </div>
    </div>
  );
};

CometSettingsListDropdownLoadingState.displayName =
  "CometSettingsListDropdownLoadingState [from CometSettingsListDropdownLoadingState.react]";

export default CometSettingsListDropdownLoadingState;
