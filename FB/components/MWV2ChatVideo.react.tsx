__d(
  "MWV2ChatVideo.react",
  [
    "fbt",
    "I64",
    "LSAuthorityLevel",
    "LSIntEnum",
    "MWChatImageInsetShadow.react",
    "MWLSThreadDisplayContext",
    "MWMessageListMediaPressableContainer.react",
    "MWResponsiveVideo.react",
    "MWV2AttachmentProgressBar.react",
    "MWV2LogMessageClick",
    "MWVideoPlayerControllerContext.react",
    "MWXGlimmer.react",
    "MWXMessageBubbleCornerStyles.react",
    "react",
    "recoverableViolation",
    "useCometRouterDispatcher",
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
      m = l || (l = d("react"));
    b = l;
    var n = b.useContext,
      o = b.useMemo,
      p = b.useRef,
      q = {
        glimmer: {
          height: "xpyat2d",
          marginTop: "x1gslohp",
          width: "x1oysuqx",
          $$css: !0,
        },
        root: {
          backfaceVisibility: "xlp1x4z",
          backgroundColor: "x1eb86dx",
          display: "x1lliihq",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function r(a) {
      var b = a.attachment,
        e = a.autoPlaySetting,
        f = a.connectTop,
        g = a.getPreviewUrl,
        l = a.mediaRenderQpl,
        o = a.message,
        p = a.navigateToRouteForMediaViewer,
        r = p === void 0 ? !0 : p;
      p = a.outgoing;
      a = a.renderUnsupportedAttachment;
      var s = (i || (i = c("useReStore")))(),
        t = c("useCometRouterDispatcher")(),
        u = c("useMWV2MediaViewerURL")(b);
      p = d("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
        align: p ? "right" : "left",
        connectTop: f,
      });
      var v = c("useMWV2FocusRowAfterClosingPushView")();
      f = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();
      var w = c("useMWV2MediaViewerShowDialog")(r),
        x = w[0],
        y = w[1],
        z = n(c("MWVideoPlayerControllerContext.react")),
        A = g(b, "MWV2ChatVideoInner", l);
      if (A == null || A === "") {
        l == null ? void 0 : l.addPoint("empty_preview_url");
        return a != null ? a(b) : null;
      }
      if (
        (b == null ? void 0 : b.playableUrlMimeType) === "video/x-ms-wmv" &&
        !(j || (j = d("I64"))).equal(
          o.sendStatusV2,
          (k || (k = d("LSIntEnum"))).ofNumber(2)
        )
      )
        return m.jsx(c("MWXGlimmer.react"), {
          index: 1,
          xstyle: [p, q.glimmer],
        });
      w = b.previewHeight;
      g = b.previewWidth;
      return m.jsxs(c("MWMessageListMediaPressableContainer.react"), {
        ariaLabel: h._("__JHASH__Sk-r4mWi0bD__JHASH__"),
        attachment: b,
        disabled: (j || (j = d("I64"))).le(
          o.authorityLevel,
          (k || (k = d("LSIntEnum"))).ofNumber(
            c("LSAuthorityLevel").CLIENT_PARTIAL
          )
        ),
        onHoverIn: function () {
          if (!r) return y();
        },
        onPress: function () {
          d("MWV2LogMessageClick").log(s, o, 27);
          v(function () {
            return !0;
          });
          if (!r) return x({ attachment: b }, function () {});
          var a = z.ref.current;
          if (a) {
            var e = a.getCurrentState();
            e = e.volume;
            var f = a.getPlayheadPosition();
            t == null
              ? void 0
              : t.go(u, {
                  passthroughProps: {
                    origSrc: A,
                    startTimestamp: f,
                    volumeSetting: e,
                  },
                });
            a.setMuted(!0, "product_initiated");
          } else
            c("recoverableViolation")(
              "Missing controller",
              "messenger_web_media",
              void 0,
              { trackOnly: !0 }
            );
        },
        overlayDisabled: !0,
        testid: void 0,
        xstyle: [q.root, p],
        children: [
          m.jsx(c("MWResponsiveVideo.react"), {
            autoPlaySetting: e,
            connectTopStyles: p,
            fbid: b.attachmentFbid,
            height: w != null ? (j || (j = d("I64"))).to_float(w) : void 0,
            maxHeight: 200,
            maxWidth: f === "Inbox" ? 500 : 167,
            mediaRenderQpl: l,
            shouldForcePauseOnClick: !0,
            src: A,
            width: g != null ? (j || (j = d("I64"))).to_float(g) : void 0,
          }),
          (j || (j = d("I64"))).le(
            o.authorityLevel,
            (k || (k = d("LSIntEnum"))).ofNumber(
              c("LSAuthorityLevel").CLIENT_PARTIAL
            )
          )
            ? m.jsx(c("MWV2AttachmentProgressBar.react"), { attachment: b })
            : null,
          m.jsx(c("MWChatImageInsetShadow.react"), { xstyle: p }),
        ],
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      var b = p(null),
        d = o(
          function () {
            return { ref: b };
          },
          [b]
        );
      return m.jsx(c("MWVideoPlayerControllerContext.react").Provider, {
        value: d,
        children: m.jsx(r, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import { _ as fbt } from "fbt";
import I64 from "I64";
import LSAuthorityLevel from "LSAuthorityLevel";
import LSIntEnum from "LSIntEnum";
import MWChatImageInsetShadow from "MWChatImageInsetShadow.react";
import { useMWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import MWMessageListMediaPressableContainer from "MWMessageListMediaPressableContainer.react";
import MWResponsiveVideo from "MWResponsiveVideo.react";
import MWV2AttachmentProgressBar from "MWV2AttachmentProgressBar.react";
import { log as MWV2LogMessageClick } from "MWV2LogMessageClick";
import {
  MWVideoPlayerControllerContext,
  MWVideoPlayerControllerContextType,
} from "MWVideoPlayerControllerContext.react";
import MWXGlimmer from "MWXGlimmer.react";
import { getMWXBubbleCornerStyles } from "MWXMessageBubbleCornerStyles.react";
import React, { useContext, useMemo, useRef } from "react";
import { recoverableViolation } from "recoverableViolation";
import { useCometRouterDispatcher } from "useCometRouterDispatcher";
import { useMWV2FocusRowAfterClosingPushView } from "useMWV2FocusRowAfterClosingPushView";
import { useMWV2MediaViewerShowDialog } from "useMWV2MediaViewerShowDialog";
import { useMWV2MediaViewerURL } from "useMWV2MediaViewerURL";
import { useReStore } from "useReStore";

const styles = {
  glimmer: {
    height: "xpyat2d",
    marginTop: "x1gslohp",
    width: "x1oysuqx",
    $$css: true,
  },
  root: {
    backfaceVisibility: "xlp1x4z",
    backgroundColor: "x1eb86dx",
    display: "x1lliihq",
    maxWidth: "x193iq5w",
    overflowX: "x6ikm8r",
    overflowY: "x10wlt62",
    position: "x1n2onr6",
    $$css: true,
  },
};

interface Attachment {
  playableUrlMimeType?: string;
  previewHeight?: number;
  previewWidth?: number;
  attachmentFbid?: string;
}

interface Message {
  sendStatusV2?: number;
  authorityLevel: number;
}

interface MWV2ChatVideoProps {
  attachment: Attachment;
  autoPlaySetting: any;
  connectTop: boolean;
  getPreviewUrl: (attachment: Attachment, source: string, qpl?: any) => string;
  mediaRenderQpl: any;
  message: Message;
  navigateToRouteForMediaViewer?: boolean;
  outgoing: boolean;
  renderUnsupportedAttachment?: (attachment: Attachment) => React.ReactNode;
}

const MWV2ChatVideoInner: React.FC<MWV2ChatVideoProps> = ({
  attachment,
  autoPlaySetting,
  connectTop,
  getPreviewUrl,
  mediaRenderQpl,
  message,
  navigateToRouteForMediaViewer = true,
  outgoing,
  renderUnsupportedAttachment,
}) => {
  const store = useReStore();
  const routerDispatcher = useCometRouterDispatcher();
  const mediaViewerURL = useMWV2MediaViewerURL(attachment);
  const bubbleCornerStyles = getMWXBubbleCornerStyles({
    align: outgoing ? "right" : "left",
    connectTop,
  });
  const focusRowAfterClosingPushView = useMWV2FocusRowAfterClosingPushView();
  const threadDisplayContext = useMWLSThreadDisplayContext();
  const [showDialog, hideDialog] = useMWV2MediaViewerShowDialog(
    navigateToRouteForMediaViewer
  );
  const videoPlayerControllerContext = useContext(
    MWVideoPlayerControllerContext
  );
  const previewUrl = getPreviewUrl(
    attachment,
    "MWV2ChatVideoInner",
    mediaRenderQpl
  );

  if (!previewUrl) {
    mediaRenderQpl?.addPoint("empty_preview_url");
    return renderUnsupportedAttachment
      ? renderUnsupportedAttachment(attachment)
      : null;
  }

  if (
    attachment.playableUrlMimeType === "video/x-ms-wmv" &&
    !I64.equal(message.sendStatusV2, LSIntEnum.ofNumber(2))
  ) {
    return (
      <MWXGlimmer index={1} xstyle={[bubbleCornerStyles, styles.glimmer]} />
    );
  }

  const previewHeight = attachment.previewHeight;
  const previewWidth = attachment.previewWidth;

  return (
    <MWMessageListMediaPressableContainer
      ariaLabel={fbt("__JHASH__Sk-r4mWi0bD__JHASH__")}
      attachment={attachment}
      disabled={I64.le(
        message.authorityLevel,
        LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL)
      )}
      onHoverIn={() => {
        if (!navigateToRouteForMediaViewer) hideDialog();
      }}
      onPress={() => {
        MWV2LogMessageClick(store, message, 27);
        focusRowAfterClosingPushView(() => true);

        if (!navigateToRouteForMediaViewer) {
          return showDialog({ attachment }, () => {});
        }

        const controller = videoPlayerControllerContext.ref.current;
        if (controller) {
          const currentState = controller.getCurrentState();
          const volume = currentState.volume;
          const playheadPosition = controller.getPlayheadPosition();

          routerDispatcher?.go(mediaViewerURL, {
            passthroughProps: {
              origSrc: previewUrl,
              startTimestamp: playheadPosition,
              volumeSetting: volume,
            },
          });

          controller.setMuted(true, "product_initiated");
        } else {
          recoverableViolation(
            "Missing controller",
            "messenger_web_media",
            undefined,
            { trackOnly: true }
          );
        }
      }}
      overlayDisabled={true}
      xstyle={[styles.root, bubbleCornerStyles]}
    >
      <MWResponsiveVideo
        autoPlaySetting={autoPlaySetting}
        connectTopStyles={bubbleCornerStyles}
        fbid={attachment.attachmentFbid}
        height={previewHeight ? I64.to_float(previewHeight) : undefined}
        maxHeight={200}
        maxWidth={threadDisplayContext === "Inbox" ? 500 : 167}
        mediaRenderQpl={mediaRenderQpl}
        shouldForcePauseOnClick={true}
        src={previewUrl}
        width={previewWidth ? I64.to_float(previewWidth) : undefined}
      />
      {I64.le(
        message.authorityLevel,
        LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL)
      ) ? (
        <MWV2AttachmentProgressBar attachment={attachment} />
      ) : null}
      <MWChatImageInsetShadow xstyle={bubbleCornerStyles} />
    </MWMessageListMediaPressableContainer>
  );
};

MWV2ChatVideoInner.displayName = `MWV2ChatVideoInner [from ${module.id}]`;

const MWV2ChatVideo: React.FC<MWV2ChatVideoProps> = (props) => {
  const ref = useRef<MWVideoPlayerControllerContextType | null>(null);

  const contextValue = useMemo(() => ({ ref }), [ref]);

  return (
    <MWVideoPlayerControllerContext.Provider value={contextValue}>
      <MWV2ChatVideoInner {...props} />
    </MWVideoPlayerControllerContext.Provider>
  );
};

MWV2ChatVideo.displayName = `MWV2ChatVideo [from ${module.id}]`;

export default MWV2ChatVideo;
