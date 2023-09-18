__d("CometImage.react", ["BaseImage.react", "CometImageFromIXValue.react", "cr:2010754", "gkx", "mergeRefs", "react", "useFeedImageErrorEventLoggerCbs", "xplatToDOMRef"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo
      , j = e.useRef
      , k = "1";
    function a(a, e) {
        var f = j(null)
          , g = i(function() {
            return c("mergeRefs")(f, e)
        }, [f, e])
          , l = a.alt
          , m = a.objectFit
          , n = a.onError
          , o = a.onLoad
          , p = a.src
          , q = a.testid;
        q = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "objectFit", "onError", "onLoad", "src", "testid", "xstyle"]);
        n = c("useFeedImageErrorEventLoggerCbs")({
            onError: n,
            onLoad: o,
            src: p
        });
        o = n._onError;
        n = n._onLoad;
        var r = c("gkx")("1690028") ? k : void 0;
        function s(a, c, d, e, g, h) {
            b("cr:2010754") && c === "mount" && f.current != null && typeof p === "string" && b("cr:2010754").trackImagePerf(f.current, h, p, {
                mutationType: "reactCommit"
            })
        }
        if (typeof p === "string") {
            a = h.jsx(c("BaseImage.react"), babelHelpers["extends"]({}, a, {
                alt: l,
                elementtiming: r,
                objectFit: m,
                onError: o,
                onLoad: n,
                ref: d("xplatToDOMRef").xplatToDOMRef(g),
                src: p,
                testid: void 0,
                xstyle: q
            }));
            return c("gkx")("1690028") ? h.jsx(h.Profiler, {
                id: k,
                onRender: s,
                children: a
            }) : a
        }
        return h.jsx(c("CometImageFromIXValue.react"), {
            alt: l,
            objectFit: m,
            ref: g,
            source: p,
            testid: void 0,
            xstyle: q
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}
), 98);



import React, { useMemo, useRef } from 'react';
import mergeRefs from 'mergeRefs';
import { useFeedImageErrorEventLoggerCbs } from './useFeedImageErrorEventLoggerCbs'; // Replace with the actual import path
import { xplatToDOMRef } from './xplatToDOMRef'; // Replace with the actual import path

const k = "1";

interface CometImageProps {
  alt: string;
  objectFit: string;
  onError: () => void;
  onLoad: () => void;
  src: string;
  testid?: string;
  xstyle?: any; // Define the appropriate type for xstyle
}

function CometImage(props: CometImageProps, ref: React.Ref<HTMLImageElement>) {
  const { alt, objectFit, onError, onLoad, src, testid, xstyle, ...rest } = props;
  const imageRef = useRef<HTMLImageElement | null>(null);

  const mergedRef = useMemo(() => mergeRefs(imageRef, ref), [imageRef, ref]);

  const { _onError, _onLoad } = useFeedImageErrorEventLoggerCbs({
    onError,
    onLoad,
    src,
  });

  const elementtiming = "1690028" ? k : undefined;

  function onRender(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: any[]
  ) {
    if (typeof src === "string" && phase === "mount" && imageRef.current != null) {
        trackImagePerf(imageRef.current, src, {mutationType: "reactCommit"});
    }
  }

  if (typeof src === "string") {
    const image = (
      <img
        {...rest}
        alt={alt}
        elementtiming={elementtiming}
        objectFit={objectFit}
        onError={_onError}
        onLoad={_onLoad}
        ref={xplatToDOMRef(mergedRef)}
        src={src}
        testid={undefined}
        xstyle={xstyle}
      />
    );

    return "1690028" ? (
      <React.Profiler id={k} onRender={onRender}>
        {image}
      </React.Profiler>
    ) : (
      image
    );
  }

  return (
    <CometImageFromIXValue
      alt={alt}
      objectFit={objectFit}
      ref={mergedRef}
      source={src}
      testid={undefined}
      xstyle={xstyle}
    />
  );
}

CometImage.displayName = `${CometImage.name} [from ${f.id}]`;

export default React.forwardRef(CometImage);

