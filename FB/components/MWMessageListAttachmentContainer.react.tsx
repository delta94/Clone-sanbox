__d(
  "MWMessageListAttachmentContainer.react",
  [
    "CometErrorBoundary.react",
    "MWChatBubbleEmphasisRing.react",
    "MWLSThreadDisplayContext",
    "MWMessageListAttachment.react",
    "MWPMessageIsReply",
    "MWPMessageListAttachment.react",
    "MWV2ChatFileV2.react",
    "MWV2ChatImagesGrid.react",
    "MWV2UnsupportedAttachment.react",
    "MWXMAAttachment.react",
    "MWXMessageBubble.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      var b = a.connectBottom,
        e = a.connectTop,
        f = a.hasEmphasisRing;
      f = f === void 0 ? !1 : f;
      var g = a.hasText,
        h = g === void 0 ? !1 : g,
        j = a.message,
        k = a.navigateToRouteForMediaViewer,
        l = a.outgoing,
        m = a.xstyle;
      g = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();
      var n = g === "ChatTab" ? 180 : void 0;
      return i.jsx(c("MWPMessageListAttachment.react"), {
        connectBottom: b,
        connectTop: e,
        message: j,
        renderAudioAttachment: function (a) {
          return i.jsx(
            d("MWMessageListAttachment.react").MWMessageListAttachmentAudio,
            {
              attachment: a,
              connectBottom: b,
              connectTop: e,
              isReply: c("MWPMessageIsReply")(j),
              message: j,
              outgoing: l,
            }
          );
        },
        renderEmphasisRing: f
          ? function (a, b) {
              return i.jsx(c("MWChatBubbleEmphasisRing.react"), {
                connectBottom: !1,
                connectTop: e,
                hasXMA: a,
                outgoing: l,
                precedesXMA: !1,
                children: b,
              });
            }
          : void 0,
        renderEphemeralMediaAttachment: function () {
          return null;
        },
        renderFileAttachment: function (a) {
          return i.jsx(c("MWXMessageBubble.react"), {
            align: l ? "right" : "left",
            color: "incoming",
            connectBottom: b,
            connectTop: e,
            style: { padding: 0 },
            children: i.jsx(c("MWV2ChatFileV2.react"), { attachment: a }),
          });
        },
        renderImageAttachment: function (c, b, a, e) {
          return i.jsx(
            d("MWMessageListAttachment.react").MWMessageListAttachmentImage,
            {
              attachment: c,
              connectBottom: a,
              connectTop: b,
              message: j,
              navigateToRouteForMediaViewer: k,
              outgoing: l,
              renderUnsupportedAttachment: e,
            }
          );
        },
        renderImageGrid: function (a) {
          return i.jsx(c("MWV2ChatImagesGrid.react"), { attachments: a });
        },
        renderStickerAttachment: function (a) {
          return i.jsx(
            d("MWMessageListAttachment.react").MWMessageListAttachmentSticker,
            { attachment: a }
          );
        },
        renderUnsupportedAttachment: function (a) {
          return i.jsx(c("MWXMessageBubble.react"), {
            align: l ? "right" : "left",
            color: "incoming",
            connectBottom: b,
            connectTop: e,
            children: i.jsx(c("MWV2UnsupportedAttachment.react"), {
              attachment: a,
            }),
          });
        },
        renderVideoAttachment: function (a) {
          return i.jsx(
            d("MWMessageListAttachment.react").MWMessageListAttachmentVideo,
            {
              attachment: a,
              connectTop: e,
              message: j,
              navigateToRouteForMediaViewer: k,
              outgoing: l,
            }
          );
        },
        renderXMAAttachment: function (a) {
          return i.jsx(c("CometErrorBoundary.react"), {
            fallback: function (a) {
              return i.jsx(
                d("MWMessageListAttachment.react").MWMessageListAttachmentError,
                { connectBottom: b, connectTop: e, xstyle: m }
              );
            },
            children: i.jsx(d("MWXMAAttachment.react").MWXMAAttachment, {
              attachment: a,
              cardWidth: n,
              connectBottom: b,
              connectTop: e,
              hasText: h,
              mediaRenderQpl: null,
              outgoing: l,
              xstyle: m,
            }),
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.memo(a);
    g["default"] = b;
  },
  98
);
