__d("CometImageFromIXValue.react", ["BaseImage.react", "CometSSRBackgroundImageUtils", "CometVisualCompletionAttributes", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "react", "stylex", "testID", "xplatToDOMRef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
        var e = a.alt;
        e = e === void 0 ? "" : e;
        var f = a.objectFit
          , g = a.source
          , i = a.testid;
        a = a.xstyle;
        d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
        var j = c("coerceImageishSprited")(g);
        if (j != null) {
            var k = c("stylex")(a);
            return h.jsx("i", babelHelpers["extends"]({}, c("CometVisualCompletionAttributes").CSS_IMG, c("testID")(i), {
                "aria-label": e === "" ? null : e,
                className: j.type === "css" ? k !== "" ? j.className + " " + k : j.className : k,
                ref: b,
                role: e === "" ? null : "img",
                style: j.type === "cssless" ? j.style : void 0
            }))
        }
        i = c("coerceImageishURL")(g);
        if (i != null) {
            k = i.height;
            j = i.uri;
            g = i.width;
            return h.jsx(c("BaseImage.react"), {
                alt: e,
                draggable: !1,
                height: f === "cover" ? "100%" : k,
                objectFit: f,
                ref: d("xplatToDOMRef").xplatToDOMRef(b),
                src: j,
                testid: void 0,
                width: f === "cover" ? "100%" : g,
                xstyle: a
            })
        }
        return h.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "asset provided to CometImageFromIXValue cannot be transformed by Haste",
            projectName: "comet_ui"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}
), 98);


import React from 'react';
import { CSSProperties, ReactNode } from 'react'; // Add appropriate types if necessary

import { CometSSRBackgroundImageUtils } from 'path-to-CometSSRBackgroundImageUtils';
import { coerceImageishSprited } from 'path-to-coerceImageishSprited';
import { coerceImageishURL } from 'path-to-coerceImageishURL';
import { CometVisualCompletionAttributes } from 'path-to-CometVisualCompletionAttributes';
import { stylex } from 'path-to-stylex';
import { testID } from 'path-to-testID';
import { xplatToDOMRef } from 'path-to-xplatToDOMRef';
import { BaseImage } from 'path-to-BaseImage';
import { RecoverableViolationWithComponentStack } from 'path-to-RecoverableViolationWithComponentStack';

interface CometImageFromIXValueProps {
  alt?: string;
  objectFit?: string;
  source: string;
  testid?: string;
  xstyle?: CSSProperties;
}

function CometImageFromIXValue(
  props: CometImageFromIXValueProps,
  ref: React.Ref<HTMLImageElement>
): ReactNode {
  const { alt = '', objectFit, source, testid, xstyle } = props;
  CometSSRBackgroundImageUtils.processSpritedImagesForSSRPreload(source);
  const spritedImage = coerceImageishSprited(source);
  const imageUrl = coerceImageishURL(source);

  if (spritedImage != null) {
    const classNames = stylex(xstyle);
    return (
      <i
        {...CometVisualCompletionAttributes.CSS_IMG}
        {...testID(testid)}
        aria-label={alt === '' ? null : alt}
        className={spritedImage.type === 'css' ? classNames !== '' ? spritedImage.className + ' ' + classNames : spritedImage.className : classNames}
        ref={ref}
        role={alt === '' ? null : 'img'}
        style={spritedImage.type === 'cssless' ? spritedImage.style : undefined}
      />
    );
  }

  if (imageUrl != null) {
    const { height, uri, width } = imageUrl;
    return (
      <BaseImage
        alt={alt}
        draggable={false}
        height={objectFit === 'cover' ? '100%' : height}
        objectFit={objectFit}
        ref={xplatToDOMRef(ref)}
        src={uri}
        testid={undefined}
        width={objectFit === 'cover' ? '100%' : width}
        xstyle={xstyle}
      />
    );
  }

  return (
    <RecoverableViolationWithComponentStack
      errorMessage="asset provided to CometImageFromIXValue cannot be transformed by Haste"
      projectName="comet_ui"
    />
  );
}

CometImageFromIXValue.displayName = `${CometImageFromIXValue.name} [from ${f.id}]`;

export default React.forwardRef(CometImageFromIXValue);
