// __d("BaseTooltipImpl.react", ["BaseContextualLayer.react", "BaseTooltipContainer.react", "CometHeroInteractionContextPassthrough.react", "CometPlaceholder.react", "react", "useCometDisplayTimingTrackerForInteraction", "useFadeEffect", "useTooltipDelayedContent"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || (h = d("react"));
//     b = h;
//     var j = b.useLayoutEffect,
//         k = b.useRef,
//         l = {
//             contextualLayer: {
//                 pointerEvents: "x47corl",
//                 $$css: !0
//             },
//             loadingState: {
//                 display: "x78zum5",
//                 justifyContent: "xl56j7k",
//                 $$css: !0
//             }
//         };

//     function m(a) {
//         var b = a.contextualLayerRef;
//         j(function () {
//             var a = b.current;
//             a && a.reposition({
//                 autoflip: !0
//             })
//         }, [b]);
//         return null
//     }

//     function a(a) {
//         var b = a.loadingState,
//             d = a.contentKey,
//             e = a.delayContentMs;
//         e = e === void 0 ? 0 : e;
//         a.headline;
//         var f = a.id,
//             g = a.isVisible,
//             h = a.themeWrapper;
//         h = h === void 0 ? i.Fragment : h;
//         var j = a.tooltip;
//         a.tooltipTheme;
//         var n = a.xstyle;
//         a = babelHelpers.objectWithoutPropertiesLoose(a, ["loadingState", "contentKey", "delayContentMs", "headline", "id", "isVisible", "themeWrapper", "tooltip", "tooltipTheme", "xstyle"]);
//         var o = k(null),
//             p = c("useFadeEffect")(g),
//             q = p[0],
//             r = p[1];
//         p = p[2];
//         var s = c("useCometDisplayTimingTrackerForInteraction")("ToolTip");
//         e = c("useTooltipDelayedContent")({
//             delayContentMs: e,
//             isVisible: g
//         });
//         g = e.isPending;
//         return j == null || !q ? null : i.jsx(c("CometHeroInteractionContextPassthrough.react"), {
//             clear: !0,
//             children: i.jsx(c("BaseContextualLayer.react"), babelHelpers["extends"]({
//                 align: "middle"
//             }, a, {
//                 imperativeRef: o,
//                 ref: s,
//                 xstyle: l.contextualLayer,
//                 children: i.jsx(h, {
//                     children: i.jsx(c("BaseTooltipContainer.react"), {
//                         id: f,
//                         ref: p,
//                         shouldFadeIn: r,
//                         xstyle: n,
//                         children: g ? i.jsx("div", {
//                             className: "x78zum5 xl56j7k",
//                             children: b
//                         }) : i.jsxs(c("CometPlaceholder.react"), {
//                             fallback: b,
//                             children: [i.jsx(m, {
//                                 contextualLayerRef: o
//                             }), j]
//                         }, d)
//                     })
//                 })
//             }))
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { JSX, FC, useRef, useLayoutEffect } from 'react';
import BaseContextualLayer from 'BaseContextualLayer.react';
import BaseTooltipContainer from 'BaseTooltipContainer.react';
import CometHeroInteractionContextPassthrough from 'CometHeroInteractionContextPassthrough.react';
import CometPlaceholder from 'CometPlaceholder.react';
import { useFadeEffect } from 'useFadeEffect';
import { useCometDisplayTimingTrackerForInteraction } from 'useCometDisplayTimingTrackerForInteraction';
import { useTooltipDelayedContent } from 'useTooltipDelayedContent';

interface BaseTooltipImplProps {
  loadingState: JSX.Element;
  contentKey?: string;
  delayContentMs?: number;
  headline?: string;
  id: string;
  isVisible: boolean;
  themeWrapper?: React.ReactNode;
  tooltip?: React.ReactNode;
  tooltipTheme?: string;
  xstyle?: Record<string, any>;
  /* Other props here */
}

const styles = {
    contextualLayer: {
      pointerEvents: "x47corl",
    },
    loadingState: {
      display: "x78zum5",
      justifyContent: "xl56j7k",
    },
};

const RepositionTooltip = ({ contextualLayerRef }: { contextualLayerRef: React.RefObject<BaseContextualLayer> }) => {
    useLayoutEffect(() => {
      const layer = contextualLayerRef.current;
      if (layer) {
        layer.reposition({
          autoflip: true
        });
      }
    }, [contextualLayerRef]);
  
    return null;
};

const BaseTooltipImpl: FC<BaseTooltipImplProps> = ({
  loadingState,
  contentKey,
  delayContentMs = 0,
  headline,
  id,
  isVisible,
  themeWrapper = React.Fragment,
  tooltip,
  tooltipTheme,
  xstyle,
  ...otherProps
}) => {
  const tooltipRef = useRef<any>(null);
  const [fadeIn, shouldFadeIn, setShouldFadeIn ] = useFadeEffect(isVisible);

  const displayTracker = useCometDisplayTimingTrackerForInteraction('ToolTip');

  const { isPending } = useTooltipDelayedContent({
    delayContentMs,
    isVisible
  });

  if (tooltip || !fadeIn) {
    return null;
  }
  
  return (
    <CometHeroInteractionContextPassthrough clear>
      <BaseContextualLayer
        align="middle"
        ref={displayTracker}
        imperativeRef={tooltipRef}
        xstyle={styles.contextualLayer}
        {...otherProps}
      >
        {React.createElement(
          themeWrapper,
          {},
          <BaseTooltipContainer
            id={id}
            ref={setShouldFadeIn}
            xstyle={xstyle}
            shouldFadeIn={shouldFadeIn}
          >
            {isPending ? (
              <div className={styles.loadingState}>{loadingState}</div>
            ) : (
              <CometPlaceholder fallback={loadingState}>
                <RepositionTooltip contextualLayerRef={tooltipRef} >
                    {tooltip}
                </RepositionTooltip>
              </CometPlaceholder>
            )}
          </BaseTooltipContainer>
        )}
      </BaseContextualLayer>
    </CometHeroInteractionContextPassthrough>
  );
};

BaseTooltipImpl.displayName = `${BaseTooltipImpl.name} [from ${98}]`;

export default BaseTooltipImpl;
