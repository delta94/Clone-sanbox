__d("ImageCore.react", ["CometVisualCompletionAttributes", "URI", "coerceImageishSprited", "coerceImageishURL", "getImageSourceURLFromImageish", "joinClasses", "react", "warnUnsupportedProp"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    b = {
        alt: ""
    };

    function k(a) {
        return a instanceof(h || (h = c("URI"))) ? a.toString() : a
    }

    function l(a) {
        var b = a.forwardedRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["forwardedRef"]);
        var d = c("joinClasses")(a.className, "img"),
            e = k(a.src);
        if (e == null) return j.jsx("img", babelHelpers["extends"]({}, a, {
            className: d,
            ref: b
        }));
        var f = c("coerceImageishSprited")(e),
            g = !!f && a.alt != null && String(a.alt) !== "" ? j.jsx("u", {
                children: a.alt
            }) : null;
        if (typeof e === "string") return j.jsx("img", babelHelpers["extends"]({}, a, {
            className: d,
            ref: b,
            src: e,
            children: g
        }));
        if (f) {
            a.src;
            var h = a.style,
                i = babelHelpers.objectWithoutPropertiesLoose(a, ["src", "style"]);
            return j.jsx("i", babelHelpers["extends"]({}, i, c("CometVisualCompletionAttributes").CSS_IMG, {
                className: c("joinClasses")(d, f.type === "css" ? f.className : void 0),
                ref: b,
                style: f.type === "cssless" ? babelHelpers["extends"]({}, h, f.style) : h,
                children: g
            }))
        }
        i = c("getImageSourceURLFromImageish")(e);
        f = c("coerceImageishURL")(e);
        return a.width === void 0 && a.height === void 0 && f ? j.jsx("img", babelHelpers["extends"]({}, a, {
            className: d,
            height: f.height,
            src: i,
            ref: b,
            width: f.width,
            children: g
        })) : j.jsx("img", babelHelpers["extends"]({}, a, {
            className: d,
            ref: b,
            src: i,
            children: g
        }))
    }
    l.displayName = l.name + " [from " + f.id + "]";
    l.defaultProps = b;

    function a(a, b) {
        Object.prototype.hasOwnProperty.call(a, "source") && c("warnUnsupportedProp")("ImageCore", "source", "Did you mean `src`?");
        return j.jsx(l, babelHelpers["extends"]({}, a, {
            forwardedRef: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "ImageCore";
    e = j.forwardRef(a);
    g["default"] = e
}), 98);

import * as React from 'react';
import { joinClasses } from 'joinClasses'; 
import { URI } from 'URI';
import { coerceImageishSprited, coerceImageishURL } from 'coerceImageish';
import { getImageSourceURLFromImageish } from 'getImageSourceURLFromImageish';
import { warnUnsupportedProp } from 'warnUnsupportedProp';
import { CometVisualCompletionAttributes } from 'CometVisualCompletionAttributes';

interface ImageProps {
  alt?: string;
  className?: string;
  height?: number;
  src: string | URI;
  style?: React.CSSProperties;
  width?: number;
}

const defaultProps: Partial<ImageProps> = {
  alt: '',
};

function normalizeSrc(src: string | URI): string {
  if (src instanceof URI) {
    return src.toString();
  }
  return src;
}

const ImageCore = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ forwardedRef, className, src, ...otherProps }, ref) => {

    const normalizedClassName = joinClasses(className, 'img');
    const normalizedSrc = normalizeSrc(src);

    if (normalizedSrc == null) {
      return <img className={normalizedClassName} ref={forwardedRef} {...otherProps} />;
    }

    const imageish = coerceImageishSprited(normalizedSrc);
    const altText = otherProps.alt != null && String(otherProps.alt) !== ''
      ? <u>{otherProps.alt}</u>
      : null;

    if (typeof normalizedSrc === 'string') {
      return (
        <img
          className={normalizedClassName}
          ref={forwardedRef}
          src={normalizedSrc}
          {...otherProps}
        >
          {altText}
        </img>
      );
    }

    if (imageish) {
      const { src: _, style, ...imageishProps } = otherProps;

      return (
        <i
          {...imageishProps}
          {...CometVisualCompletionAttributes.CSS_IMG}
          className={joinClasses(
            normalizedClassName,
            imageish.type === 'css' ? imageish.className : undefined
          )}
          ref={forwardedRef}
          style={
            imageish.type === 'cssless'
              ? { ...style, ...imageish.style }
              : style
          }
        >
          {altText}
        </i>
      );
    }

    const url = getImageSourceURLFromImageish(normalizedSrc);
    const imageURL = coerceImageishURL(normalizedSrc);

    if (otherProps.width === undefined && otherProps.height === undefined && imageURL) {
      return (
        <img
          className={normalizedClassName}
          height={imageURL.height}
          ref={forwardedRef}
          src={url}
          width={imageURL.width}
          {...otherProps}
        >
          {altText}
        </img>
      );
    }

    return (
      <img
        className={normalizedClassName}
        ref={forwardedRef}
        src={url}
        {...otherProps}
      >
        {altText}
      </img>
    );
  }
);

ImageCore.displayName = 'ImageCore';
ImageCore.defaultProps = defaultProps;

export default ImageCore;