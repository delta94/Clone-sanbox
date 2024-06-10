__d(
  "FBIconCrossFilled24.svg.react",
  ["XPlatReactSVG", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsxs(
        d("XPlatReactSVG").Svg,
        babelHelpers["extends"](
          {
            viewBox: "0 0 24 24",
            width: "1em",
            height: "1em",
            fill: "currentColor",
            title: a.title,
          },
          a,
          {
            children: [
              a.children != null &&
                i.jsx(d("XPlatReactSVG").Defs, { children: a.children }),
              i.jsx(d("XPlatReactSVG").G, {
                fillRule: "evenodd",
                transform: "translate(-444 -156)",
                children: i.jsxs(d("XPlatReactSVG").G, {
                  fillRule: "nonzero",
                  children: [
                    i.jsx(d("XPlatReactSVG").Path, {
                      d: "m94.043 1.957 15.5 15.5a1 1 0 0 0 1.414-1.414l-15.5-15.5a1 1 0 0 0-1.414 1.414z",
                      transform: "translate(353.5 159)",
                    }),
                    i.jsx(d("XPlatReactSVG").Path, {
                      d: "m109.543.543-15.5 15.5a1 1 0 0 0 1.414 1.414l15.5-15.5a1 1 0 0 0-1.414-1.414z",
                      transform: "translate(353.5 159)",
                    }),
                  ],
                }),
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);

import React from "react";
import { Svg, Defs, G, Path } from "XPlatReactSVG";

interface Props extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const FBIconCrossFilled24: React.FC<Props> = (props) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      title={props.title}
      {...props}
    >
      {props.children != null && <Defs>{props.children}</Defs>}
      <G fillRule="evenodd" transform="translate(-444 -156)">
        <G fillRule="nonzero">
          <Path
            d="m94.043 1.957 15.5 15.5a1 1 0 0 0 1.414-1.414l-15.5-15.5a1 1 0 0 0-1.414 1.414z"
            transform="translate(353.5 159)"
          />
          <Path
            d="m109.543.543-15.5 15.5a1 1 0 0 0 1.414 1.414l15.5-15.5a1 1 0 0 0-1.414-1.414z"
            transform="translate(353.5 159)"
          />
        </G>
      </G>
    </Svg>
  );
};

FBIconCrossFilled24.displayName = `FBIconCrossFilled24 [from ${module.id}]`;
FBIconCrossFilled24._isSVG = true;

export default FBIconCrossFilled24;
