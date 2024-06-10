__d(
  "MWV2Sticker.react",
  [
    "I64",
    "MWChatImageSize",
    "MWLSThreadDisplayContext",
    "MWV2ChatEmojiHotLike.react",
    "Sticker.react",
    "getMWHotlikeSizeFromStickerId",
    "getMWIsDefaultHotlikeStickerId",
    "gkx",
    "qex",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = i || (i = d("react"));
    b = i;
    var l = b.useEffect,
      m = b.useMemo;
    function n(a) {
      var b = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();
      return m(
        function () {
          var c = b != null ? (b === "Inbox" ? 0.75 : 0.5) : 0.5;
          if (a < 60) return 1;
          else return c;
        },
        [a, b]
      );
    }
    function a(a) {
      var b,
        e = a.attachment,
        f = a.getPreviewUrl,
        g = a.mediaRenderQpl,
        i = a.renderUnsupportedAttachment,
        m = a.scale;
      a = a.xstyle;
      var o = f(e, "MWV2Sticker", g);
      f =
        e.previewHeight != null
          ? (j || (j = d("I64"))).to_int32(e.previewHeight)
          : void 0;
      var p =
        e.previewWidth != null
          ? (j || (j = d("I64"))).to_int32(e.previewWidth)
          : void 0;
      b = n((b = f) != null ? b : 120);
      var q = p != null && f != null;
      q = d("MWChatImageSize").useImageSize(o, q);
      p =
        p != null && f != null
          ? [p, f]
          : q != null
          ? [q.width, q.height]
          : [24, 24];
      f = p[0];
      q = p[1];
      l(
        function () {
          o == null || o.length === 0
            ? g == null
              ? void 0
              : g.endFail("load-image-error")
            : g == null
            ? void 0
            : g.endSuccess();
        },
        [o, g]
      );
      if (
        c("getMWIsDefaultHotlikeStickerId")(e.attachmentFbid) &&
        !c("gkx")("23249") &&
        c("qex")._("131") === !0
      )
        return k.jsx(c("MWV2ChatEmojiHotLike.react"), {
          hotEmojiSize: c("getMWHotlikeSizeFromStickerId")(e.attachmentFbid),
        });
      if (o == null || o.length === 0) {
        g == null ? void 0 : g.addPoint("empty_preview_url");
        return i != null ? i(e) : null;
      }
      return k.jsx(c("Sticker.react"), {
        accessibilityLabel: (p = e.accessibilitySummaryText) != null ? p : "",
        animationTrigger: "load_and_hover",
        className: (h || (h = c("stylex")))(a),
        customColor: "var(--chat-composer-button-color)",
        enablePopoverIfPassesGK: !0,
        frameCount: 0,
        frameRate: void 0,
        framesPerCol: 0,
        framesPerRow: 0,
        packID: void 0,
        paddedSpriteURI: void 0,
        scale: (i = m) != null ? i : b,
        sourceHeight: q,
        sourceURI: o,
        sourceWidth: f,
        spriteURI: void 0,
        stickerID: e.attachmentFbid,
        tabIndex: -1,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { I64 } from "I64";
import { useImageSize } from "MWChatImageSize";
import { useMWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import MWV2ChatEmojiHotLike from "MWV2ChatEmojiHotLike.react";
import Sticker from "Sticker.react";
import { getMWHotlikeSizeFromStickerId } from "getMWHotlikeSizeFromStickerId";
import { getMWIsDefaultHotlikeStickerId } from "getMWIsDefaultHotlikeStickerId";
import { gkx } from "gkx";
import { qex } from "qex";
import React, { useEffect, useMemo } from "react";
import { stylex } from "stylex";

const useScale = (height: number) => {
  const displayContext = useMWLSThreadDisplayContext();
  return useMemo(() => {
    const scale =
      displayContext != null ? (displayContext === "Inbox" ? 0.75 : 0.5) : 0.5;
    return height < 60 ? 1 : scale;
  }, [height, displayContext]);
};

interface MWV2StickerProps {
  attachment: any;
  getPreviewUrl: (attachment: any, type: string, mediaRenderQpl: any) => string;
  mediaRenderQpl: any;
  renderUnsupportedAttachment?: (attachment: any) => React.ReactNode;
  scale?: number;
  xstyle?: any;
}

const MWV2Sticker: React.FC<MWV2StickerProps> = ({
  attachment,
  getPreviewUrl,
  mediaRenderQpl,
  renderUnsupportedAttachment,
  scale,
  xstyle,
}) => {
  const previewUrl = getPreviewUrl(attachment, "MWV2Sticker", mediaRenderQpl);
  const previewHeight =
    attachment.previewHeight != null
      ? I64.to_int32(attachment.previewHeight)
      : undefined;
  const previewWidth =
    attachment.previewWidth != null
      ? I64.to_int32(attachment.previewWidth)
      : undefined;
  const calculatedScale = useScale(previewHeight != null ? previewHeight : 120);
  const isCustomSize = previewWidth != null && previewHeight != null;
  const imageSize = useImageSize(previewUrl, isCustomSize);
  const [width, height] =
    previewWidth != null && previewHeight != null
      ? [previewWidth, previewHeight]
      : imageSize != null
      ? [imageSize.width, imageSize.height]
      : [24, 24];

  useEffect(() => {
    if (previewUrl == null || previewUrl.length === 0) {
      mediaRenderQpl?.endFail("load-image-error");
    } else {
      mediaRenderQpl?.endSuccess();
    }
  }, [previewUrl, mediaRenderQpl]);

  if (
    getMWIsDefaultHotlikeStickerId(attachment.attachmentFbid) &&
    !gkx("23249") &&
    qex._("131") === true
  ) {
    return (
      <MWV2ChatEmojiHotLike
        hotEmojiSize={getMWHotlikeSizeFromStickerId(attachment.attachmentFbid)}
      />
    );
  }

  if (previewUrl == null || previewUrl.length === 0) {
    mediaRenderQpl?.addPoint("empty_preview_url");
    return renderUnsupportedAttachment != null
      ? renderUnsupportedAttachment(attachment)
      : null;
  }

  return (
    <Sticker
      accessibilityLabel={attachment.accessibilitySummaryText ?? ""}
      animationTrigger="load_and_hover"
      className={stylex(xstyle)}
      customColor="var(--chat-composer-button-color)"
      enablePopoverIfPassesGK={true}
      frameCount={0}
      frameRate={undefined}
      framesPerCol={0}
      framesPerRow={0}
      packID={undefined}
      paddedSpriteURI={undefined}
      scale={scale ?? calculatedScale}
      sourceHeight={height}
      sourceURI={previewUrl}
      sourceWidth={width}
      spriteURI={undefined}
      stickerID={attachment.attachmentFbid}
      tabIndex={-1}
      testid={undefined}
    />
  );
};

MWV2Sticker.displayName = "MWV2Sticker [from MWV2Sticker.react]";

export default MWV2Sticker;
