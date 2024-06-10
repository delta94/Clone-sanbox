__d(
  "MWResponsiveVideo.react",
  [
    "CometObjectFitContainer.react",
    "CometPlaceholder.react",
    "MWLSThreadDisplayContext",
    "MWPThreadCapabilitiesContext",
    "MWXGlimmer.react",
    "deferredLoadComponent",
    "gkx",
    "justknobx",
    "react",
    "requireDeferredForDisplay",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react")),
      k = i.useMemo,
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("MWChatVideoPlayer.react").__setRef(
          "MWResponsiveVideo.react"
        )
      ),
      m = {
        glimmer: {
          height: "x5yr21d",
          position: "x10l6tqk",
          width: "xh8yej3",
          $$css: !0,
        },
        glimmerFallback: {
          borderBottomEndRadius: "x1gn5b1j",
          borderBottomStartRadius: "x230xth",
          borderTopEndRadius: "x1g8br2z",
          borderTopStartRadius: "x1tlxs6b",
          display: "x78zum5",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function n(a) {
      return [a === "Inbox" ? 240 : 180, 140];
    }
    function a(a) {
      var b = a.autoPlaySetting,
        e = a.connectTopStyles,
        f = a.fbid,
        g = a.height,
        i = a.maxHeight,
        o = a.maxWidth,
        p = a.mediaRenderQpl,
        q = a.shouldForcePauseOnClick,
        r = a.src,
        s = a.width,
        t = d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(),
        u = k(
          function () {
            var a = s != null ? (g != null ? [s, g] : [500, 300]) : [500, 300];
            return a[0] / a[1];
          },
          [s, g]
        );
      a = d("MWPThreadCapabilitiesContext").useMWPThreadCapabilitiesContext();
      a = a.hasLSThreadBitOffset;
      var v = c("gkx")("24098") && a(46);
      a = k(
        function () {
          var a = n(t);
          if (c("justknobx")._("1704") === !0) {
            var b;
            b = Math.min((b = s) != null ? b : 500, o, i * u).toString() + "px";
          } else {
            var d;
            b = Math.min((d = s) != null ? d : 500, o).toString() + "px";
          }
          return {
            maxHeight: i.toString() + "px",
            minHeight: v ? a[1].toString(10) + "px" : "",
            minWidth: v ? a[0].toString(10) + "px" : "",
            width: b,
          };
        },
        [i, s, o, v, t, u]
      );
      return j.jsxs("div", {
        className: "x193iq5w x11md1zd x450l9j x6ikm8r x10wlt62 x1n2onr6",
        style: a,
        children: [
          j.jsx("div", {
            className: "x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x1vjfegm",
            children: j.jsx(c("CometPlaceholder.react"), {
              fallback: j.jsx("div", {
                className: (h || (h = c("stylex")))(m.glimmerFallback, e),
                children: j.jsx(c("MWXGlimmer.react"), {
                  index: 0,
                  xstyle: m.glimmer,
                }),
              }),
              children: j.jsx(l, {
                autoPlaySetting: v ? "off" : b,
                controls: "mwchat",
                fbid: f,
                hideExpandButton: !0,
                mediaRenderQpl: p,
                originalHeight: (a = g) != null ? a : 300,
                originalWidth: (e = s) != null ? e : 500,
                sdSrc: r,
                shouldForcePauseOnClick: q,
              }),
            }),
          }),
          j.jsx(c("CometObjectFitContainer.react"), {
            contentAspectRatio: u,
            objectFitMode: "CONTAINER_WIDTH_BASED_ASPECT_RATIO",
            children: null,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);

import React, { useMemo } from "react";
import { CometObjectFitContainer } from "CometObjectFitContainer.react";
import { CometPlaceholder } from "CometPlaceholder.react";
import { useMWLSThreadDisplayContext } from "MWLSThreadDisplayContext";
import { useMWPThreadCapabilitiesContext } from "MWPThreadCapabilitiesContext";
import { MWXGlimmer } from "MWXGlimmer.react";
import deferredLoadComponent from "deferredLoadComponent";
import gkx from "gkx";
import justknobx from "justknobx";
import requireDeferredForDisplay from "requireDeferredForDisplay";
import stylex from "stylex";

const MWChatVideoPlayer = deferredLoadComponent(
  requireDeferredForDisplay("MWChatVideoPlayer.react").__setRef(
    "MWResponsiveVideo.react"
  )
);

const styles = {
  glimmer: {
    height: "x5yr21d",
    position: "x10l6tqk",
    width: "xh8yej3",
    $$css: true,
  },
  glimmerFallback: {
    borderBottomEndRadius: "x1gn5b1j",
    borderBottomStartRadius: "x230xth",
    borderTopEndRadius: "x1g8br2z",
    borderTopStartRadius: "x1tlxs6b",
    display: "x78zum5",
    height: "x5yr21d",
    overflowX: "x6ikm8r",
    overflowY: "x10wlt62",
    position: "x10l6tqk",
    width: "xh8yej3",
    $$css: true,
  },
};

function getDimensions(threadType: string): [number, number] {
  return threadType === "Inbox" ? [240, 140] : [180, 140];
}

interface Props {
  autoPlaySetting: string;
  connectTopStyles: any;
  fbid: string;
  height?: number;
  maxHeight: number;
  maxWidth: number;
  mediaRenderQpl: any;
  shouldForcePauseOnClick: boolean;
  src: string;
  width?: number;
}

const MWResponsiveVideo: React.FC<Props> = ({
  autoPlaySetting,
  connectTopStyles,
  fbid,
  height,
  maxHeight,
  maxWidth,
  mediaRenderQpl,
  shouldForcePauseOnClick,
  src,
  width,
}) => {
  const threadDisplayContext = useMWLSThreadDisplayContext();
  const contentAspectRatio = useMemo(() => {
    return width != null
      ? height != null
        ? [width, height]
        : [500, 300]
      : [500, 300];
  }, [width, height]);
  const aspectRatio = contentAspectRatio[0] / contentAspectRatio[1];

  const capabilitiesContext = useMWPThreadCapabilitiesContext();
  const hasLSThreadBitOffset = capabilitiesContext.hasLSThreadBitOffset;
  const enableCustomDimensions = gkx("24098") && hasLSThreadBitOffset(46);

  const containerStyles = useMemo(() => {
    const dimensions = getDimensions(threadDisplayContext);
    let calculatedWidth;
    if (justknobx._("1704") === true) {
      calculatedWidth =
        Math.min(
          width != null ? width : 500,
          maxWidth,
          maxHeight * aspectRatio
        ) + "px";
    } else {
      calculatedWidth = Math.min(width != null ? width : 500, maxWidth) + "px";
    }
    return {
      maxHeight: maxHeight + "px",
      minHeight: enableCustomDimensions ? dimensions[1] + "px" : "",
      minWidth: enableCustomDimensions ? dimensions[0] + "px" : "",
      width: calculatedWidth,
    };
  }, [
    maxHeight,
    width,
    maxWidth,
    enableCustomDimensions,
    threadDisplayContext,
    aspectRatio,
  ]);

  return (
    <div
      className="x193iq5w x11md1zd x450l9j x6ikm8r x10wlt62 x1n2onr6"
      style={containerStyles}
    >
      <div className="x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x1vjfegm">
        <CometPlaceholder
          fallback={
            <div className={stylex(styles.glimmerFallback, connectTopStyles)}>
              <MWXGlimmer index={0} xstyle={styles.glimmer} />
            </div>
          }
        >
          <MWChatVideoPlayer
            autoPlaySetting={enableCustomDimensions ? "off" : autoPlaySetting}
            controls="mwchat"
            fbid={fbid}
            hideExpandButton
            mediaRenderQpl={mediaRenderQpl}
            originalHeight={height != null ? height : 300}
            originalWidth={width != null ? width : 500}
            sdSrc={src}
            shouldForcePauseOnClick={shouldForcePauseOnClick}
          />
        </CometPlaceholder>
      </div>
      <CometObjectFitContainer
        contentAspectRatio={aspectRatio}
        objectFitMode="CONTAINER_WIDTH_BASED_ASPECT_RATIO"
      >
        {null}
      </CometObjectFitContainer>
    </div>
  );
};

MWResponsiveVideo.displayName = "MWResponsiveVideo [from " + f.id + "]";

export default MWResponsiveVideo;
