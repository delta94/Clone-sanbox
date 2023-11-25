__d("BaseGlimmer.react", ["BaseLoadingStateElement.react", "react", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback
      , k = b.useState
      , l = 200
      , m = {
        paused: {
            animationPlayState: "xorstpt",
            $$css: !0
        },
        root: {
            animationDirection: "x1iq0kzc",
            animationDuration: "x1i9sevy",
            animationIterationCount: "xa4qsjk",
            animationName: "x43zylw",
            animationTimingFunction: "x1ag7td9",
            opacity: "x11fwcs0",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.children
          , d = a.index;
        a = a.xstyle;
        var e = k(!0)
          , f = e[0]
          , g = e[1];
        e = j(function(a) {
            a = a.hiddenReason;
            a !== "COMPONENT_UNMOUNTED" && g(!0)
        }, []);
        var h = j(function() {
            g(!1)
        }, []);
        e = c("useVisibilityObserver")({
            onHidden: e,
            onVisible: h
        });
        return i.jsx(c("BaseLoadingStateElement.react"), {
            ref: e,
            style: {
                animationDelay: d % 10 * l + "ms"
            },
            xstyle: [m.root, f && m.paused, a],
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { useState, useCallback } from 'react';
import BaseLoadingStateElement from 'BaseLoadingStateElement.react';
import useVisibilityObserver from 'useVisibilityObserver';

interface Props {
  children: React.ReactNode;
  index: number;
  xstyle: string;
}

const ANIMATION_DURATION = 200; 

const cssStyles = {
  paused: {
    animationPlayState: 'xorstpt',
    $$css: true
  },
  root: {
    animationDirection: 'x1iq0kzc',
    animationDuration: 'x1i9sevy',
    animationIterationCount: 'xa4qsjk',
    animationName: 'x43zylw',
    animationTimingFunction: 'x1ag7td9',
    opacity: 'x11fwcs0',
    $$css: true
  }
};

const BaseGlimmer = ({
  children,
  index,
  xstyle  
}: Props) => {

  const [paused, setPaused] = useState(true);

  const onHidden = useCallback(({hiddenReason}) => {
    if (hiddenReason !== 'COMPONENT_UNMOUNTED') {
      setPaused(true); 
    }
  }, []);

  const onVisible = useCallback(() => {
    setPaused(false);
  }, []);

  const ref = useVisibilityObserver({
    onHidden,
    onVisible
  });

  return (
    <BaseLoadingStateElement
      ref={ref}
      style={{
        animationDelay: `${index % 10 * ANIMATION_DURATION}ms`
      }}
      xstyle={[
        cssStyles.root,
        paused && cssStyles.paused,
        xstyle
      ]}
    >
      {children}
    </BaseLoadingStateElement>
  );
}

export default BaseGlimmer;