__d(
  "MWPStableImage.react",
  ["CometObjectFitContainer.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react")),
      k = i.useMemo,
      l = {
        image: {
          display: "x1lliihq",
          height: "xt7dq6l",
          maxWidth: "x193iq5w",
          width: "x14atkfc",
          $$css: !0,
        },
        imageFill: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function m(a) {
      var b = a.alt,
        d = a.aspectRatio,
        e = a.maxHeight,
        f = a.onError,
        g = a.onLoad,
        i = a.renderImagePlaceholder;
      a = a.src;
      var m = k(
        function () {
          return {
            display: "block",
            maxHeight: e.toString() + "px",
            maxWidth: "100%",
          };
        },
        [e]
      );
      i =
        (i = i == null ? void 0 : i()) != null
          ? i
          : j.jsx("img", {
              alt: b,
              className: (h || (h = c("stylex")))(
                l.image,
                d == null ? !1 : l.imageFill
              ),
              onError: f,
              onLoad: g,
              src: a,
              style: m,
            });
      if (d != null)
        return j.jsx(c("CometObjectFitContainer.react"), {
          contentAspectRatio: d,
          objectFitMode: "CONTAINER_WIDTH_BASED_ASPECT_RATIO",
          children: i,
        });
      else return i;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      var b = a.aspectRatio,
        c = a.children,
        d = a.className,
        e = a.height,
        f = a.maxHeight,
        g = a.maxWidth;
      a.width;
      c = (a = c) != null ? a : null;
      a = k(
        function () {
          if (b != null && e != null)
            return {
              maxWidth: "100%",
              width: (b * Math.min(f, e)).toString() + "px",
            };
        },
        [b, e, f]
      );
      var h = k(
        function () {
          if (g != null) return { maxWidth: g.toString() + "px" };
        },
        [g]
      );
      return j.jsx("div", {
        className: "x193iq5w",
        children: j.jsx("div", {
          style: h,
          children: j.jsx("div", { className: d, style: a, children: c }),
        }),
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.alt,
        c = a.children,
        d = a.className,
        e = a.height,
        f = a.maxHeight,
        g = a.maxWidth,
        h = a.onError,
        i = a.onLoad,
        k = a.renderImagePlaceholder,
        l = a.src;
      a = a.width;
      var o = a != null && e != null ? a / e : void 0;
      return j.jsxs(n, {
        aspectRatio: o,
        className: d,
        height: e,
        maxHeight: f,
        maxWidth: g,
        width: a,
        children: [
          j.jsx(m, {
            alt: b,
            aspectRatio: o,
            maxHeight: f,
            onError: h,
            onLoad: i,
            renderImagePlaceholder: k,
            src: l,
          }),
          c,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MWPStableImageContainer = n;
    g.MWPStableImage = a;
  },
  98
);

import React, { useMemo, CSSProperties } from "react";
import CometObjectFitContainer from "CometObjectFitContainer.react";
import stylex from "stylex";

type MWPStableImageProps = {
  alt: string;
  aspectRatio?: number;
  maxHeight?: number;
  maxWidth?: number;
  onError?: () => void;
  onLoad?: () => void;
  renderImagePlaceholder?: () => React.ReactNode;
  src: string;
};

const styles = {
  image: {
    display: "x1lliihq",
    height: "xt7dq6l",
    maxWidth: "x193iq5w",
    width: "x14atkfc",
    $$css: true,
  },
  imageFill: { height: "x5yr21d", width: "xh8yej3", $$css: true },
};

const MWPStableImageComponent: React.FC<MWPStableImageProps> = ({
  alt,
  aspectRatio,
  maxHeight,
  onError,
  onLoad,
  renderImagePlaceholder,
  src,
}) => {
  const imgStyle: CSSProperties = useMemo(
    () => ({
      display: "block",
      maxHeight: `${maxHeight}px`,
      maxWidth: "100%",
    }),
    [maxHeight]
  );

  const placeholder = renderImagePlaceholder?.() ?? (
    <img
      alt={alt}
      className={stylex(
        styles.image,
        aspectRatio == null ? undefined : styles.imageFill
      )}
      onError={onError}
      onLoad={onLoad}
      src={src}
      style={imgStyle}
    />
  );

  return aspectRatio != null ? (
    <CometObjectFitContainer
      contentAspectRatio={aspectRatio}
      objectFitMode="CONTAINER_WIDTH_BASED_ASPECT_RATIO"
    >
      {placeholder}
    </CometObjectFitContainer>
  ) : (
    placeholder
  );
};

type MWPStableImageContainerProps = {
  aspectRatio?: number;
  children?: React.ReactNode;
  className?: string;
  height?: number;
  maxHeight?: number;
  maxWidth?: number;
  width?: number;
};

const MWPStableImageContainer: React.FC<MWPStableImageContainerProps> = ({
  aspectRatio,
  children,
  className,
  height,
  maxHeight,
  maxWidth,
  width,
}) => {
  const divStyle: CSSProperties | undefined = useMemo(() => {
    if (aspectRatio != null && height != null) {
      return {
        maxWidth: "100%",
        width: `${aspectRatio * Math.min(maxHeight, height)}px`,
      };
    }
  }, [aspectRatio, height, maxHeight]);

  const innerDivStyle: CSSProperties | undefined = useMemo(() => {
    if (maxWidth != null) {
      return { maxWidth: `${maxWidth}px` };
    }
  }, [maxWidth]);

  return (
    <div className="x193iq5w">
      <div style={innerDivStyle}>
        <div className={className} style={divStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

const MWPStableImage: React.FC<
  MWPStableImageContainerProps & MWPStableImageProps
> = ({
  alt,
  children,
  className,
  height,
  maxHeight,
  maxWidth,
  onError,
  onLoad,
  renderImagePlaceholder,
  src,
  width,
}) => {
  const aspectRatio =
    width != null && height != null ? width / height : undefined;

  return (
    <MWPStableImageContainer
      aspectRatio={aspectRatio}
      className={className}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      width={width}
    >
      <MWPStableImageComponent
        alt={alt}
        aspectRatio={aspectRatio}
        maxHeight={maxHeight}
        onError={onError}
        onLoad={onLoad}
        renderImagePlaceholder={renderImagePlaceholder}
        src={src}
      />
      {children}
    </MWPStableImageContainer>
  );
};

MWPStableImage.displayName = `MWPStableImage [from ${__filename}]`;

export { MWPStableImage, MWPStableImageContainer };
