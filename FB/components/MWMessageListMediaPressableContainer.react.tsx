__d(
  "MWMessageListMediaPressableContainer.react",
  [
    "I64",
    "LSIntEnum",
    "LSMediaUrlAttachment",
    "MWPThreadCapabilitiesContext",
    "MWXPressable.react",
    "MessagingAttachmentType",
    "cr:4509", //MWMessageListProtectedMedia
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k = h || d("react");
    function a(a) {
      var e = a.allowClickEventPropagation,
        f = a.ariaLabel,
        g = a.attachment,
        h = a.children,
        l = a.disabled,
        m = a.linkProps_,
        n = a.onHoverIn,
        o = a.onPress,
        p = a.overlayDisabled;
      p = p === void 0 ? !1 : p;
      var q = a.testid;
      q = a.xstyle;
      a = d("MWPThreadCapabilitiesContext").useMWPThreadCapabilitiesContext();
      a = a.blurMediaEnabled;
      a = c("gkx")("24098") && a;
      var r = (i || (i = d("I64"))).equal(
          g.attachmentType,
          (j || (j = d("LSIntEnum"))).ofNumber(
            c("MessagingAttachmentType").IMAGE
          )
        ),
        s = i.equal(
          g.attachmentType,
          j.ofNumber(c("MessagingAttachmentType").VIDEO)
        ),
        t = r ? "Image" : s ? "Video" : "Media";
      return b("cr:4509") != null && (r || s) && a
        ? k.jsx(b("cr:4509"), {
            ariaLabel: f,
            disabled: l,
            linkProps: m,
            mediaType: t,
            onPress: o,
            overlayDisabled: p,
            testid: void 0,
            type: s ? "video" : "image",
            url: d("LSMediaUrlAttachment").previewUrl(g),
            xstyle: q,
            children: h,
          })
        : k.jsx(c("MWXPressable.react"), {
            allowClickEventPropagation: e,
            "aria-label": f,
            disabled: l,
            linkProps: m,
            onHoverIn: n,
            onPress: function () {
              return o();
            },
            overlayDisabled: p,
            testid: void 0,
            xstyle: q,
            children: h,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import { I64 } from "I64";
import { LSIntEnum } from "LSIntEnum";
import { LSMediaUrlAttachment } from "LSMediaUrlAttachment";
import { useMWPThreadCapabilitiesContext } from "MWPThreadCapabilitiesContext";
import MWXPressable from "MWXPressable.react";
import { MessagingAttachmentType } from "MessagingAttachmentType";
import MWMessageListProtectedMedia from "cr:4509";
import { gkx } from "gkx";
import React, { FC, ReactNode } from "react";

interface MWMessageListMediaPressableContainerProps {
  allowClickEventPropagation?: boolean;
  ariaLabel?: string;
  attachment: any; // Define a more specific type if possible
  children: ReactNode;
  disabled?: boolean;
  linkProps_?: any; // Define a more specific type if possible
  onHoverIn?: () => void;
  onPress: () => void;
  overlayDisabled?: boolean;
  testid?: string;
  xstyle?: any; // Define a more specific type if possible
}

const MWMessageListMediaPressableContainer: FC<
  MWMessageListMediaPressableContainerProps
> = ({
  allowClickEventPropagation,
  ariaLabel,
  attachment,
  children,
  disabled,
  linkProps_,
  onHoverIn,
  onPress,
  overlayDisabled = false,
  testid,
  xstyle,
}) => {
  const { blurMediaEnabled } = useMWPThreadCapabilitiesContext();
  const isBlurMediaEnabled = gkx("24098") && blurMediaEnabled;

  const isImage = I64.equal(
    attachment.attachmentType,
    LSIntEnum.ofNumber(MessagingAttachmentType.IMAGE)
  );
  const isVideo = I64.equal(
    attachment.attachmentType,
    LSIntEnum.ofNumber(MessagingAttachmentType.VIDEO)
  );

  const mediaType = isImage ? "Image" : isVideo ? "Video" : "Media";

  return MWMessageListProtectedMedia != null &&
    (isImage || isVideo) &&
    isBlurMediaEnabled ? (
    <MWMessageListProtectedMedia
      ariaLabel={ariaLabel}
      disabled={disabled}
      linkProps={linkProps_}
      mediaType={mediaType}
      onPress={onPress}
      overlayDisabled={overlayDisabled}
      testid={testid}
      type={isVideo ? "video" : "image"}
      url={LSMediaUrlAttachment.previewUrl(attachment)}
      xstyle={xstyle}
    >
      {children}
    </MWMessageListProtectedMedia>
  ) : (
    <MWXPressable
      allowClickEventPropagation={allowClickEventPropagation}
      aria-label={ariaLabel}
      disabled={disabled}
      linkProps={linkProps_}
      onHoverIn={onHoverIn}
      onPress={onPress}
      overlayDisabled={overlayDisabled}
      testid={testid}
      xstyle={xstyle}
    >
      {children}
    </MWXPressable>
  );
};

MWMessageListMediaPressableContainer.displayName = `MWMessageListMediaPressableContainer [from ${MWMessageListMediaPressableContainer.name}]`;

export default MWMessageListMediaPressableContainer;
