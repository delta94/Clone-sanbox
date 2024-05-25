__d(
  "MWChatImageInsetShadow.react",
  ["react", "react-strict-dom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        imageShadow: {
          borderTopColor: "x1pdss0j",
          borderEndColor: "xtcpoma",
          borderBottomColor: "x81c4ja",
          borderStartColor: "x8g6rb3",
          borderBottomEndRadius: "x1gn5b1j",
          borderBottomStartRadius: "x230xth",
          borderTopEndRadius: "x1g8br2z",
          borderTopStartRadius: "x1tlxs6b",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x178xt8z",
          borderEndWidth: "xm81vs4",
          borderBottomWidth: "xso031l",
          borderStartWidth: "xy80clv",
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          end: "xds687c",
          left: null,
          right: null,
          start: "x17qophe",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.xstyle;
      return i.jsx(d("react-strict-dom").html.div, {
        style: [j.imageShadow, a],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { CSSProperties, FC } from "react";
import { html } from "react-strict-dom";

const styles: { [key: string]: CSSProperties } = {
  imageShadow: {
    borderTopColor: "x1pdss0j",
    borderEndColor: "xtcpoma",
    borderBottomColor: "x81c4ja",
    borderStartColor: "x8g6rb3",
    borderBottomEndRadius: "x1gn5b1j",
    borderBottomStartRadius: "x230xth",
    borderTopEndRadius: "x1g8br2z",
    borderTopStartRadius: "x1tlxs6b",
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    borderTopWidth: "x178xt8z",
    borderEndWidth: "xm81vs4",
    borderBottomWidth: "xso031l",
    borderStartWidth: "xy80clv",
    bottom: "x1ey2m1c",
    boxSizing: "x9f619",
    end: "xds687c",
    left: null,
    right: null,
    start: "x17qophe",
    pointerEvents: "x47corl",
    position: "x10l6tqk",
    top: "x13vifvy",
    $$css: true,
  },
};

interface MWChatImageInsetShadowProps {
  xstyle: CSSProperties;
}

const MWChatImageInsetShadow: FC<MWChatImageInsetShadowProps> = ({
  xstyle,
}) => {
  return <html.div style={{ ...styles.imageShadow, ...xstyle }} />;
};

MWChatImageInsetShadow.displayName = `${MWChatImageInsetShadow.name} [from MWChatImageInsetShadow.react]`;

export default MWChatImageInsetShadow;
