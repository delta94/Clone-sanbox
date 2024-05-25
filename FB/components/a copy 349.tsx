__d(
  "MWV2ChatImage.react",
  [
    "fbt",
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "MWChatImageInsetShadow.react",
    "MWChatImageStyles",
    "MWInboxInfoSharedContentQPLLogger",
    "MWLSThreadDisplayContext",
    "MWMessageListMediaPressableContainer.react",
    "MWPStableImage.react",
    "MWV2AttachmentProgressBar.react",
    "MWV2LogMessageClick",
    "gkx",
    "qex",
    "react",
    "stylex",
    "useMWMessageListAttachmentDimensions",
    "useMWV2FocusRowAfterClosingPushView",
    "useMWV2MediaViewerShowDialog",
    "useMWV2MediaViewerURL",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l,
      m,
      n = m || (m = d("react")),
      o = m.useCallback,
      p = {
        container: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        content: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function q(a) {
      a = a.attachment;
      var b = a.attributionAppName;
      if (b == null) return null;
      a = a.attributionAppIcon;
      return n.jsxs("div", {
        className:
          "x6s0dn4 x1gn5b1j x230xth x78zum5 x1rfph6h x1iorvi4 xsyo7zv xjkvuk6 x16hj40l",
        children: [
          a != null
            ? n.jsx("img", {
                className:
                  "x14yjl9h xudhj91 x18nykt9 xww2gxu xlup9mm x1w0mnb x19kjcj4 x1kky2od",
                role: "presentation",
                src: a,
              })
            : null,
          n.jsx("span", {
            className: "xzsf02u x1nxh6w3 x13faqbe",
            children: b,
          }),
        ],
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function a(a) {
      var b,
        e = a.attachment,
        f = a.connectBottom,
        g = a.connectTop;
      a.getPlayableUrl;
      var m = a.getPreviewUrl,
        r = a.mediaRenderQpl,
        s = a.message,
        t = a.navigateToRouteForMediaViewer,
        u = a.outgoing;
      a = a.renderUnsupportedAttachment;
      var v = o(
          function () {
            r == null ? void 0 : r.endFail("load-image-error");
          },
          [r]
        ),
        w = o(
          function () {
            r == null ? void 0 : r.endSuccess();
          },
          [r]
        ),
        x = (i || (i = c("useReStore")))(),
        y = (b = t) != null ? b : !0;
      b = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();
      var z = e.attributionAppName != null,
        A = c("useMWMessageListAttachmentDimensions")(b, e),
        B = A[0];
      A = A[1];
      var C = c("useMWV2MediaViewerURL")(e);
      f = d("MWChatImageStyles").calculateBorderStyles(f, g, z, u);
      g = c("gkx")("23009");
      var D = c("useMWV2FocusRowAfterClosingPushView")();
      u = c("useMWV2MediaViewerShowDialog")((z = t) != null ? z : !0);
      var E = u[0],
        F = u[1];
      t = m(e, "MWV2ChatImage", r);
      if (t == null || t.length === 0) {
        r == null ? void 0 : r.addPoint("empty_preview_url");
        return a != null ? a(e) : null;
      }
      z =
        y &&
        (k || (k = d("I64"))).gt(
          s.authorityLevel,
          (l || (l = d("LSIntEnum"))).ofNumber(
            c("LSAuthorityLevel").CLIENT_PARTIAL
          )
        )
          ? { passthroughProps: { origSrc: t }, url: C }
          : void 0;
      u = function () {
        d("MWV2LogMessageClick").log(x, s, 28);
        d("MWInboxInfoSharedContentQPLLogger").logOpenSharedContentFromThread(
          "media"
        );
        D(function () {
          return !0;
        });
        if (!y) return E({ attachment: e }, function () {});
      };
      a = (m = b === "Inbox" ? c("qex")._("23") : void 0) != null ? m : 200;
      m = (C = b === "Inbox" ? c("qex")._("33") : void 0) != null ? C : 480;
      return n.jsxs(
        c("MWMessageListMediaPressableContainer.react"),
        {
          attachment: e,
          disabled: (k || (k = d("I64"))).le(
            s.authorityLevel,
            (l || (l = d("LSIntEnum"))).ofNumber(
              c("LSAuthorityLevel").CLIENT_PARTIAL
            )
          ),
          linkProps_: z,
          onHoverIn: function () {
            if (!y) return F();
          },
          onPress: u,
          testid: void 0,
          xstyle: [p.container, f.imageStyles],
          children: [
            n.jsx(d("MWPStableImage.react").MWPStableImage, {
              alt:
                e.titleText != null && g
                  ? e.titleText
                  : h._("__JHASH__mrw3CpFXi7r__JHASH__"),
              className: (j || (j = c("stylex")))(p.content, f.imageStyles),
              height: A != null ? (k || (k = d("I64"))).to_float(A) : void 0,
              maxHeight: a,
              maxWidth: m,
              onError: v,
              onLoad: w,
              src: t,
              width: B != null ? (k || (k = d("I64"))).to_float(B) : void 0,
              children: n.jsx(q, { attachment: e }),
            }),
            (k || (k = d("I64"))).le(
              s.authorityLevel,
              (l || (l = d("LSIntEnum"))).ofNumber(
                c("LSAuthorityLevel").CLIENT_PARTIAL
              )
            )
              ? n.jsx(c("MWV2AttachmentProgressBar.react"), { attachment: e })
              : null,
            n.jsx(c("MWChatImageInsetShadow.react"), {
              xstyle: f.insetShadowStyles,
            }),
          ],
        },
        e.attachmentFbid
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { useCallback, JSX, FC } from "react";
import { fbt } from "fbt";
import I64 from "I64";
import LSAuthorityLevel from "LSAuthorityLevel";
import LSIntEnum from "LSIntEnum";
import MWChatImageInsetShadow from "MWChatImageInsetShadow.react";
import MWChatImageStyles from "MWChatImageStyles";
import MWInboxInfoSharedContentQPLLogger from "MWInboxInfoSharedContentQPLLogger";
import MWLSThreadDisplayContext from "MWLSThreadDisplayContext";
import MWMessageListMediaPressableContainer from "MWMessageListMediaPressableContainer.react";
import { MWPStableImage } from "MWPStableImage.react";
import MWV2AttachmentProgressBar from "MWV2AttachmentProgressBar.react";
import MWV2LogMessageClick from "MWV2LogMessageClick";
import gkx from "gkx";
import qex from "qex";
import { stylex } from "stylex";
import { useMWMessageListAttachmentDimensions } from "useMWMessageListAttachmentDimensions";
import { useMWV2FocusRowAfterClosingPushView } from "useMWV2FocusRowAfterClosingPushView";
import { useMWV2MediaViewerShowDialog } from "useMWV2MediaViewerShowDialog";
import { useMWV2MediaViewerURL } from "useMWV2MediaViewerURL";
import { useReStore } from "useReStore";

const containerStyle = {
  display: "x78zum5",
  overflowX: "x6ikm8r",
  overflowY: "x10wlt62",
  position: "x1n2onr6",
  $$css: true,
};

const contentStyle = {
  display: "x78zum5",
  flexDirection: "xdt5ytf",
  marginTop: "xdj266r",
  marginEnd: "x11i5rnm",
  marginBottom: "xat24cr",
  marginStart: "x1mh8g0r",
  position: "x1n2onr6",
  $$css: true,
};

interface Attachment {
  attributionAppName?: string;
  attributionAppIcon?: string;
  titleText?: string;
  attachmentFbid?: string;
}

interface MWV2ChatImageProps {
  attachment: Attachment;
  connectBottom: boolean;
  connectTop: boolean;
  getPlayableUrl?: () => string;
  getPreviewUrl: (
    attachment: Attachment,
    type: string,
    mediaRenderQpl: any
  ) => string;
  mediaRenderQpl?: any;
  message: {
    authorityLevel: number;
  };
  navigateToRouteForMediaViewer?: boolean;
  outgoing: boolean;
  renderUnsupportedAttachment?: (attachment: Attachment) => JSX.Element | null;
}

const Attribution: FC<{ attachment: Attachment }> = ({ attachment }) => {
  const appName = attachment.attributionAppName;
  const appIcon = attachment.attributionAppIcon;

  if (!appName) return null;

  return (
    <div className="x6s0dn4 x1gn5b1j x230xth x78zum5 x1rfph6h x1iorvi4 xsyo7zv xjkvuk6 x16hj40l">
      {appIcon && (
        <img
          className="x14yjl9h xudhj91 x18nykt9 xww2gxu xlup9mm x1w0mnb x19kjcj4 x1kky2od"
          role="presentation"
          src={appIcon}
        />
      )}
      <span className="xzsf02u x1nxh6w3 x13faqbe">{appName}</span>
    </div>
  );
};

const MWV2ChatImage: FC<MWV2ChatImageProps> = ({
  attachment,
  connectBottom,
  connectTop,
  getPreviewUrl,
  mediaRenderQpl,
  message,
  navigateToRouteForMediaViewer,
  outgoing,
  renderUnsupportedAttachment,
}) => {
  const handleLoadError = useCallback(() => {
    mediaRenderQpl?.endFail("load-image-error");
  }, [mediaRenderQpl]);

  const handleLoadSuccess = useCallback(() => {
    mediaRenderQpl?.endSuccess();
  }, [mediaRenderQpl]);

  const store = useReStore();
  const shouldNavigate = navigateToRouteForMediaViewer ?? true;

  const threadDisplayContext =
    MWLSThreadDisplayContext.useMWLSThreadDisplayContext();
  const hasAttribution = attachment.attributionAppName != null;
  const [width, height] = useMWMessageListAttachmentDimensions(
    threadDisplayContext,
    attachment
  );
  const mediaViewerURL = useMWV2MediaViewerURL(attachment);

  const borderStyles = MWChatImageStyles.calculateBorderStyles(
    connectBottom,
    connectTop,
    hasAttribution,
    outgoing
  );
  const shouldUseLargeImage = gkx("23009");
  const focusRowAfterClosingPushView = useMWV2FocusRowAfterClosingPushView();
  const [showDialog, closeDialog] =
    useMWV2MediaViewerShowDialog(shouldNavigate);

  const previewUrl = getPreviewUrl(attachment, "MWV2ChatImage", mediaRenderQpl);
  if (!previewUrl || previewUrl.length === 0) {
    mediaRenderQpl?.addPoint("empty_preview_url");
    return renderUnsupportedAttachment
      ? renderUnsupportedAttachment(attachment)
      : null;
  }

  const linkProps =
    shouldNavigate &&
    I64.gt(
      message.authorityLevel,
      LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL)
    )
      ? { passthroughProps: { origSrc: previewUrl }, url: mediaViewerURL }
      : undefined;

  const handlePress = () => {
    MWV2LogMessageClick.log(store, message, 28);
    MWInboxInfoSharedContentQPLLogger.logOpenSharedContentFromThread("media");
    focusRowAfterClosingPushView(() => true);
    if (!shouldNavigate) return showDialog({ attachment }, () => {});
  };

  const maxHeight = threadDisplayContext === "Inbox" ? qex("_23") ?? 200 : 200;
  const maxWidth = threadDisplayContext === "Inbox" ? qex("_33") ?? 480 : 480;

  return (
    <MWMessageListMediaPressableContainer
      attachment={attachment}
      disabled={I64.le(
        message.authorityLevel,
        LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL)
      )}
      linkProps_={linkProps}
      onHoverIn={() => {
        if (!shouldNavigate) return closeDialog();
      }}
      onPress={handlePress}
      testid={undefined}
      xstyle={[containerStyle, borderStyles.imageStyles]}
    >
      <MWPStableImage
        alt={
          attachment.titleText != null && shouldUseLargeImage
            ? attachment.titleText
            : fbt("__JHASH__mrw3CpFXi7r__JHASH__")
        }
        className={stylex(contentStyle, borderStyles.imageStyles)}
        height={height ? I64.to_float(height) : undefined}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onError={handleLoadError}
        onLoad={handleLoadSuccess}
        src={previewUrl}
        width={width ? I64.to_float(width) : undefined}
      >
        <Attribution attachment={attachment} />
      </MWPStableImage>
      {I64.le(
        message.authorityLevel,
        LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL)
      ) && <MWV2AttachmentProgressBar attachment={attachment} />}
      <MWChatImageInsetShadow xstyle={borderStyles.insetShadowStyles} />
    </MWMessageListMediaPressableContainer>
  );
};

export default MWV2ChatImage;
