__d(
  "CometEmoji.react",
  ["CometImage.react", "FBEmojiResource", "react", "react-strict-dom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react"),
      j = {
        root: {
          display: "x3nfvp2",
          fontStyle: "x1j61x8r",
          fontWeight: "x1fcty0u",
          marginTop: "xdj266r",
          marginEnd: "xhhsvwb",
          marginBottom: "xat24cr",
          marginStart: "xgzva0m",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        size10: { height: "x170jfvy", width: "x1fsd2vl", $$css: !0 },
        size12: { height: "x1kpxq89", width: "xsmyaan", $$css: !0 },
        size128: { height: "x1nbnut7", width: "x2pejg6", $$css: !0 },
        size16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
        size18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
        size20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        size24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        size28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        size30: { height: "x1gnnpzl", width: "x1849jeq", $$css: !0 },
        size32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        size40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        size48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        size56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        size8: { height: "xdk7pt", width: "x1xc55vz", $$css: !0 },
      };
    function a(a) {
      var b = a.emoji,
        e = a.resource,
        f = a.size;
      f = f === void 0 ? 16 : f;
      a = a.testid;
      a = e || c("FBEmojiResource").fromCodepoints(b);
      e = a != null ? a.getImageURL(f) : null;
      a = b.join("");
      return e == null
        ? i.jsx(d("react-strict-dom").html.span, { style: j.root, children: a })
        : i.jsx(d("react-strict-dom").html.span, {
            "data-testid": void 0,
            style: [
              j.root,
              f === 8 && j.size8,
              f === 10 && j.size10,
              f === 12 && j.size12,
              f === 16 && j.size16,
              f === 18 && j.size18,
              f === 20 && j.size20,
              f === 24 && j.size24,
              f === 28 && j.size28,
              f === 30 && j.size30,
              f === 32 && j.size32,
              f === 40 && j.size40,
              f === 48 && j.size48,
              f === 56 && j.size56,
              f === 128 && j.size128,
            ],
            children: i.jsx(c("CometImage.react"), {
              alt: a,
              height: f,
              src: e,
              width: f,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React from "react";
import CometImage from "CometImage.react";
import { FBEmojiResource } from "FBEmojiResource";
import { html } from "react-strict-dom";

type CometEmojiProps = {
  emoji: string[];
  resource?: any;
  size?: number;
  testid?: string;
};

const styles = {
  root: {
    display: "x3nfvp2",
    fontStyle: "x1j61x8r",
    fontWeight: "x1fcty0u",
    marginTop: "xdj266r",
    marginEnd: "xhhsvwb",
    marginBottom: "xat24cr",
    marginStart: "xgzva0m",
    verticalAlign: "xxymvpz",
    $$css: true,
  },
  size10: { height: "x170jfvy", width: "x1fsd2vl", $$css: true },
  size12: { height: "x1kpxq89", width: "xsmyaan", $$css: true },
  size128: { height: "x1nbnut7", width: "x2pejg6", $$css: true },
  size16: { height: "xlup9mm", width: "x1kky2od", $$css: true },
  size18: { height: "xmix8c7", width: "x1xp8n7a", $$css: true },
  size20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: true },
  size24: { height: "xxk0z11", width: "xvy4d1p", $$css: true },
  size28: { height: "x1fgtraw", width: "xgd8bvy", $$css: true },
  size30: { height: "x1gnnpzl", width: "x1849jeq", $$css: true },
  size32: { height: "x10w6t97", width: "x1td3qas", $$css: true },
  size40: { height: "x1vqgdyp", width: "x100vrsf", $$css: true },
  size48: { height: "xsdox4t", width: "x1useyqa", $$css: true },
  size56: { height: "xnnlda6", width: "x15yg21f", $$css: true },
  size8: { height: "xdk7pt", width: "x1xc55vz", $$css: true },
};

const CometEmoji: React.FC<CometEmojiProps> = ({
  emoji,
  resource,
  size = 16,
  testid,
}) => {
  const emojiResource = resource || FBEmojiResource.fromCodepoints(emoji);
  const imageURL =
    emojiResource != null ? emojiResource.getImageURL(size) : null;
  const emojiText = emoji.join("");

  return imageURL == null ? (
    <html.span style={styles.root}>{emojiText}</html.span>
  ) : (
    <html.span
      data-testid={testid}
      style={[
        styles.root,
        size === 8 && styles.size8,
        size === 10 && styles.size10,
        size === 12 && styles.size12,
        size === 16 && styles.size16,
        size === 18 && styles.size18,
        size === 20 && styles.size20,
        size === 24 && styles.size24,
        size === 28 && styles.size28,
        size === 30 && styles.size30,
        size === 32 && styles.size32,
        size === 40 && styles.size40,
        size === 48 && styles.size48,
        size === 56 && styles.size56,
        size === 128 && styles.size128,
      ]}
    >
      <CometImage alt={emojiText} height={size} src={imageURL} width={size} />
    </html.span>
  );
};

CometEmoji.displayName = `${CometEmoji.name} [from ${f.id}]`;

export default CometEmoji;
