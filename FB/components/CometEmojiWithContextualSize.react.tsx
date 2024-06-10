__d(
  "CometEmojiWithContextualSize.react",
  ["CometTextContext", "CometTextTypography", "cr:244", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react")),
      j = h.useContext,
      k = new Map([
        [16, 16],
        [20, 16],
        [24, 20],
        [28, 24],
        [32, 30],
        [38, 32],
      ]);
    function l() {
      var a = j(c("CometTextContext"));
      a = (a = a == null ? void 0 : a.type) != null ? a : "body4";
      var b = 16;
      a != null &&
        a in c("CometTextTypography") &&
        (b = c("CometTextTypography")[a].lineHeight);
      return (a = k.get(b)) != null ? a : 16;
    }
    function a(a) {
      var c = l();
      c = a.size != null ? a.size : c;
      return a.renderCustomEmoji
        ? a.renderCustomEmoji(c)
        : i.jsx(b("cr:244"), babelHelpers["extends"]({}, a, { size: c }));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useContext } from "react";
import CometTextContext from "CometTextContext";
import CometTextTypography from "CometTextTypography";
import CometEmoji from "cr:244";

type CometEmojiWithContextualSizeProps = {
  size?: number;
  renderCustomEmoji?: (size: number) => React.ReactNode;
  [key: string]: any;
};

const sizeMap = new Map<number, number>([
  [16, 16],
  [20, 16],
  [24, 20],
  [28, 24],
  [32, 30],
  [38, 32],
]);

function getDefaultSize(): number {
  const textContext = useContext(CometTextContext);
  const textType = textContext?.type ?? "body4";
  const lineHeight =
    textType in CometTextTypography
      ? CometTextTypography[textType].lineHeight
      : 16;
  return sizeMap.get(lineHeight) ?? 16;
}

function CometEmojiWithContextualSize(
  props: CometEmojiWithContextualSizeProps
): React.ReactElement {
  const defaultSize = getDefaultSize();
  const size = props.size ?? defaultSize;
  return props.renderCustomEmoji ? (
    props.renderCustomEmoji(size)
  ) : (
    <CometEmoji {...props} size={size} />
  );
}

CometEmojiWithContextualSize.displayName = `${CometEmojiWithContextualSize.name} [from ${f.id}]`;

export default CometEmojiWithContextualSize;
