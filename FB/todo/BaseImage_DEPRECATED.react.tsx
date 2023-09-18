__d("BaseImage_DEPRECATED.react", ["CometSSRBackgroundImageUtils", "CometVisualCompletionAttributes", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "cr:2010754", "gkx", "joinClasses", "mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect
      , j = e.useMemo
      , k = e.useRef
      , l = "2";
    function m(a) {
        return a != null && typeof a === "string" && a !== "" && a !== "[object Object]"
    }
    function a(a, e) {
        var f = a.alt
          , g = a.testid
          , n = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "testid"])
          , o = n.onLoad;
        g = n.src;
        var p = k(null);
        a = j(function() {
            return c("mergeRefs")(p, e)
        }, [p, e]);
        d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
        var q = c("coerceImageishSprited")(g)
          , r = c("coerceImageishURL")(g);
        i(function() {
            var a;
            o != null && p.current instanceof HTMLImageElement && ((a = p.current) == null ? void 0 : a.complete) && o()
        }, [o, g]);
        if (r != null && r.uri != null) {
            return !m(r.uri) ? h.jsx(c("RecoverableViolationWithComponentStack.react"), {
                errorMessage: "Invalid src provided as imageish uri",
                projectName: "comet_ui"
            }) : h.jsx("img", babelHelpers["extends"]({}, n, {
                alt: (g = f) != null ? g : "",
                "data-testid": void 0,
                height: n.height != null ? n.height : r.height,
                ref: a,
                src: r.uri,
                width: n.width != null ? n.width : r.width
            }))
        } else if (q != null) {
            n.height;
            n.src;
            g = n.style;
            n.width;
            r = babelHelpers.objectWithoutPropertiesLoose(n, ["height", "src", "style", "width"]);
            return h.jsx("i", babelHelpers["extends"]({}, c("CometVisualCompletionAttributes").CSS_IMG, r, {
                "aria-label": f === "" ? null : f,
                className: c("joinClasses")(n.className, q.type === "css" ? q.className : void 0),
                "data-testid": void 0,
                ref: a,
                role: f === "" ? null : "img",
                style: q.type === "cssless" ? babelHelpers["extends"]({}, g, q.style) : g
            }))
        }
        if (!m(n.src))
            return h.jsx(c("RecoverableViolationWithComponentStack.react"), {
                errorMessage: "Invalid src provided to image",
                projectName: "comet_ui"
            });
        r = c("gkx")("1690028") ? l : void 0;
        function s(a, c, d, e, f, g) {
            b("cr:2010754") && c === "mount" && p.current != null && b("cr:2010754").trackImagePerf(p.current, g, typeof n.src === "string" ? n.src : "", {
                mutationType: "reactCommit"
            })
        }
        g = h.jsx("img", babelHelpers["extends"]({}, n, {
            alt: (q = f) != null ? q : "",
            "data-testid": void 0,
            elementtiming: r,
            ref: a
        }));
        return c("gkx")("1690028") ? h.jsx(h.Profiler, {
            id: l,
            onRender: s,
            children: g
        }) : g
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}
), 98);






import React, { useEffect, useMemo, useRef } from 'react';
import { mergeRefs } from 'mergeRefs'; // You might need to replace this with the actual import
import { processSpritedImagesForSSRPreload } from 'CometSSRBackgroundImageUtils'; // You might need to replace this with the actual import
import { coerceImageishSprited, coerceImageishURL } from 'coerceImageish'; // You might need to replace this with the actual import
import { gkx } from 'gkx'; // You might need to replace this with the actual import
import { joinClasses } from 'joinClasses'; // You might need to replace this with the actual import
import { RecoverableViolationWithComponentStack } from 'RecoverableViolationWithComponentStack.react'; // You might need to replace this with the actual import
import { CometVisualCompletionAttributes } from 'CometVisualCompletionAttributes'; // You might need to replace this with the actual import
import { cr } from 'cr'; // You might need to replace this with the actual import

const l = "2";

function isStringNotEmpty(value) {
  return value != null && typeof value === "string" && value !== "" && value !== "[object Object]";
}

function BaseImage(props, ref) {
  const { alt, testid, onLoad, src, ...otherProps } = props;
  const imgRef = useRef(null);

  const forwardRef = useMemo(() => mergeRefs(imgRef, ref), [imgRef, ref]);

  processSpritedImagesForSSRPreload(src);

  const spritedImage = coerceImageishSprited(src);
  const urlImage = coerceImageishURL(src);

  useEffect(() => {
    if (onLoad != null && imgRef.current instanceof HTMLImageElement && imgRef.current.complete) {
      onLoad();
    }
  }, [onLoad, src]);

  if (urlImage != null && urlImage.uri != null) {
    if (!isStringNotEmpty(urlImage.uri)) {
      return (
        <RecoverableViolationWithComponentStack
          errorMessage="Invalid src provided as imageish uri"
          projectName="comet_ui"
        />
      );
    }

    return (
      <img
        {...otherProps}
        alt={alt != null ? alt : ""}
        data-testid={undefined}
        height={otherProps.height != null ? otherProps.height : urlImage.height}
        ref={forwardRef}
        src={urlImage.uri}
        width={otherProps.width != null ? otherProps.width : urlImage.width}
      />
    );
  } else if (spritedImage != null) {
    const { height, src: imageSrc, style, width, ...restProps } = otherProps;
    return (
      <i
        {...CometVisualCompletionAttributes.CSS_IMG}
        {...restProps}
        aria-label={alt === "" ? null : alt}
        className={joinClasses(otherProps.className, spritedImage.type === "css" ? spritedImage.className : undefined)}
        data-testid={undefined}
        ref={forwardRef}
        role={alt === "" ? null : "img"}
        style={spritedImage.type === "cssless" ? { ...style, ...spritedImage.style } : style}
      />
    );
  }

  if (!isStringNotEmpty(otherProps.src)) {
    return (
      <RecoverableViolationWithComponentStack
        errorMessage="Invalid src provided to image"
        projectName="comet_ui"
      />
    );
  }

  const elementTiming = gkx("1690028") ? l : undefined;

  function handleProfilerCallback(phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    if (cr("2010754") && phase === "mount" && imgRef.current != null) {
      cr("2010754").trackImagePerf(imgRef.current, interactions, typeof src === "string" ? src : "", {
        mutationType: "reactCommit"
      });
    }
  }

  const imageElement = (
    <img
      {...otherProps}
      alt={alt != null ? alt : ""}
      data-testid={undefined}
      elementtiming={elementTiming}
      ref={forwardRef}
    />
  );

  return gkx("1690028") ? (
    <React.Profiler id={l} onRender={handleProfilerCallback}>
      {imageElement}
    </React.Profiler>
  ) : imageElement;
}

BaseImage.displayName = `${BaseImage.name} [from ${98}]`;

export default React.forwardRef(BaseImage);


