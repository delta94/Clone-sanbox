__d(
  "MWMessageListAttachment.react",
  [
    "fbt",
    "LSMediaUrlAttachment",
    "MWAudioPlayer.react",
    "MWLSThreadDisplayContext",
    "MWV2ChatImage.react",
    "MWV2ChatVideo.react",
    "MWV2Sticker.react",
    "MWV2TombstonedMessage.react",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = j || (j = d("react")),
      l = j.useCallback;
    function a(a) {
      var b = a.connectBottom,
        d = a.connectTop;
      a = a.xstyle;
      return k.jsx("div", {
        className: (i || (i = c("stylex")))(a),
        children: k.jsx(c("MWV2TombstonedMessage.react"), {
          connectBottom: b,
          connectTop: d,
          children: h._("__JHASH__962PS6SI-P2__JHASH__"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.attachment,
        e = a.connectTop,
        f = a.message,
        g = a.navigateToRouteForMediaViewer;
      a = a.outgoing;
      var h = l(function (a) {
        return d("LSMediaUrlAttachment").playableUrl(a);
      }, []);
      return k.jsx(c("MWV2ChatVideo.react"), {
        attachment: b,
        connectTop: e,
        getPreviewUrl: h,
        mediaRenderQpl: null,
        message: f,
        navigateToRouteForMediaViewer: g,
        outgoing: a,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      var b = a.attachment,
        c = a.connectBottom,
        e = a.connectTop,
        f = a.isReply,
        g = a.message;
      a = a.outgoing;
      var h = l(function (a) {
        return d("LSMediaUrlAttachment").playableUrl(a);
      }, []);
      return k.jsx(d("MWAudioPlayer.react").MWAudioPlayer, {
        attachment: b,
        connectBottom: c,
        connectTop: e,
        getPlayableUrl: h,
        isReply: f,
        mediaRenderQpl: null,
        message: g,
        outgoing: a,
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.attachment,
        e = a.connectBottom,
        f = a.connectTop,
        g = a.message,
        h = a.navigateToRouteForMediaViewer,
        i = a.outgoing;
      a = a.renderUnsupportedAttachment;
      var j = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),
        m = l(
          function (a) {
            var b = a.previewUrlLarge;
            return b != null && j === "Inbox"
              ? b
              : d("LSMediaUrlAttachment").previewUrl(a);
          },
          [j]
        ),
        n = function (a) {
          return d("LSMediaUrlAttachment").playableUrl(a);
        };
      return k.jsx(c("MWV2ChatImage.react"), {
        attachment: b,
        connectBottom: e,
        connectTop: f,
        getPlayableUrl: n,
        getPreviewUrl: m,
        mediaRenderQpl: null,
        message: g,
        navigateToRouteForMediaViewer: h,
        outgoing: i,
        renderUnsupportedAttachment: a,
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      a = a.attachment;
      var b = l(function (a) {
        var b;
        b =
          (b = d("LSMediaUrlAttachment").playableUrl(a)) != null
            ? b
            : d("LSMediaUrlAttachment").previewUrl(a);
        if (b != null) return b;
        c("recoverableViolation")(
          "Sticker Attachment has no preview_url or playable_url: " +
            a.attachmentFbid,
          "messenger_privacy_web"
        );
      }, []);
      return k.jsx(c("MWV2Sticker.react"), {
        attachment: a,
        getPreviewUrl: b,
        mediaRenderQpl: null,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    g.MWMessageListAttachmentError = a;
    g.MWMessageListAttachmentVideo = b;
    g.MWMessageListAttachmentAudio = e;
    g.MWMessageListAttachmentImage = m;
    g.MWMessageListAttachmentSticker = n;
  },
  226
);

import React, { useCallback } from "react";
import { fbt } from "fbt";
import { LSMediaUrlAttachment } from "LSMediaUrlAttachment";
import { MWAudioPlayer } from "MWAudioPlayer.react";
import { useMWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import { MWV2ChatImage } from "MWV2ChatImage.react";
import { MWV2ChatVideo } from "MWV2ChatVideo.react";
import { MWV2Sticker } from "MWV2Sticker.react";
import { MWV2TombstonedMessage } from "MWV2TombstonedMessage.react";
import { recoverableViolation } from "recoverableViolation";
import { stylex } from "stylex";

// Types for the props
interface AttachmentProps {
  connectBottom?: boolean;
  connectTop?: boolean;
  xstyle?: any;
}

interface VideoAttachmentProps {
  attachment: any;
  connectTop?: boolean;
  message: any;
  navigateToRouteForMediaViewer: (route: string) => void;
  outgoing?: boolean;
}

interface AudioAttachmentProps {
  attachment: any;
  connectBottom?: boolean;
  connectTop?: boolean;
  isReply?: boolean;
  message: any;
  outgoing?: boolean;
}

interface ImageAttachmentProps {
  attachment: any;
  connectBottom?: boolean;
  connectTop?: boolean;
  message: any;
  navigateToRouteForMediaViewer: (route: string) => void;
  outgoing?: boolean;
  renderUnsupportedAttachment?: () => React.ReactNode;
}

interface StickerAttachmentProps {
  attachment: any;
}

const MWMessageListAttachmentError: React.FC<AttachmentProps> = ({
  connectBottom,
  connectTop,
  xstyle,
}) => {
  return (
    <div className={stylex(xstyle)}>
      <MWV2TombstonedMessage
        connectBottom={connectBottom}
        connectTop={connectTop}
      >
        "Error rendering media"
      </MWV2TombstonedMessage>
    </div>
  );
};

MWMessageListAttachmentError.displayName =
  "MWMessageListAttachmentError [from 226]";

const MWMessageListAttachmentVideo: React.FC<VideoAttachmentProps> = ({
  attachment,
  connectTop,
  message,
  navigateToRouteForMediaViewer,
  outgoing,
}) => {
  const getPlayableUrl = useCallback(
    (attachment) => LSMediaUrlAttachment.playableUrl(attachment),
    []
  );
  return (
    <MWV2ChatVideo
      attachment={attachment}
      connectTop={connectTop}
      getPreviewUrl={getPlayableUrl}
      mediaRenderQpl={null}
      message={message}
      navigateToRouteForMediaViewer={navigateToRouteForMediaViewer}
      outgoing={outgoing}
    />
  );
};

MWMessageListAttachmentVideo.displayName =
  "MWMessageListAttachmentVideo [from 226]";

const MWMessageListAttachmentAudio: React.FC<AudioAttachmentProps> = ({
  attachment,
  connectBottom,
  connectTop,
  isReply,
  message,
  outgoing,
}) => {
  const getPlayableUrl = useCallback(
    (attachment) => LSMediaUrlAttachment.playableUrl(attachment),
    []
  );
  return (
    <MWAudioPlayer
      attachment={attachment}
      connectBottom={connectBottom}
      connectTop={connectTop}
      getPlayableUrl={getPlayableUrl}
      isReply={isReply}
      mediaRenderQpl={null}
      message={message}
      outgoing={outgoing}
    />
  );
};

MWMessageListAttachmentAudio.displayName =
  "MWMessageListAttachmentAudio [from 226]";

const MWMessageListAttachmentImage: React.FC<ImageAttachmentProps> = ({
  attachment,
  connectBottom,
  connectTop,
  message,
  navigateToRouteForMediaViewer,
  outgoing,
  renderUnsupportedAttachment,
}) => {
  const threadDisplayContext = useMWLSThreadDisplayContext();
  const getPreviewUrl = useCallback(
    (attachment) => {
      const previewUrlLarge = attachment.previewUrlLarge;
      return previewUrlLarge != null && threadDisplayContext === "Inbox"
        ? previewUrlLarge
        : LSMediaUrlAttachment.previewUrl(attachment);
    },
    [threadDisplayContext]
  );

  const getPlayableUrl = useCallback(
    (attachment) => LSMediaUrlAttachment.playableUrl(attachment),
    []
  );

  return (
    <MWV2ChatImage
      attachment={attachment}
      connectBottom={connectBottom}
      connectTop={connectTop}
      getPlayableUrl={getPlayableUrl}
      getPreviewUrl={getPreviewUrl}
      mediaRenderQpl={null}
      message={message}
      navigateToRouteForMediaViewer={navigateToRouteForMediaViewer}
      outgoing={outgoing}
      renderUnsupportedAttachment={renderUnsupportedAttachment}
    />
  );
};

MWMessageListAttachmentImage.displayName =
  "MWMessageListAttachmentImage [from 226]";

const MWMessageListAttachmentSticker: React.FC<StickerAttachmentProps> = ({
  attachment,
}) => {
  const getPreviewUrl = useCallback((attachment) => {
    const playableUrl = LSMediaUrlAttachment.playableUrl(attachment);
    if (playableUrl) return playableUrl;
    const previewUrl = LSMediaUrlAttachment.previewUrl(attachment);
    if (previewUrl) return previewUrl;
    recoverableViolation(
      `Sticker Attachment has no preview_url or playable_url: ${attachment.attachmentFbid}`,
      "messenger_privacy_web"
    );
  }, []);

  return (
    <MWV2Sticker
      attachment={attachment}
      getPreviewUrl={getPreviewUrl}
      mediaRenderQpl={null}
    />
  );
};

MWMessageListAttachmentSticker.displayName =
  "MWMessageListAttachmentSticker [from 226]";

export {
  MWMessageListAttachmentError,
  MWMessageListAttachmentVideo,
  MWMessageListAttachmentAudio,
  MWMessageListAttachmentImage,
  MWMessageListAttachmentSticker,
};
