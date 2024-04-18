// __d("useTooltipDelayedContent", ["clearTimeout", "react", "setTimeout"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     b = h || d("react");
//     var i = b.useLayoutEffect,
//         j = b.useRef,
//         k = b.useState;

//     function a(a) {
//         var b = a.delayContentMs,
//             d = a.isVisible,
//             e = j(d),
//             f = j(null);
//         a = k(function () {
//             return d === !0 && e.current === !1 && b > 0
//         });
//         var g = a[0],
//             h = a[1];
//         i(function () {
//             if (d === !0 && e.current === !1 && b > 0) {
//                 h(!0);
//                 f.current = c("setTimeout")(function () {
//                     h(!1), f.current = null
//                 }, b);
//                 return function () {
//                     c("clearTimeout")(f.current), f.current = null
//                 }
//             } else f.current != null && (h(!1), c("clearTimeout")(f.current), f.current = null);
//             e.current = d
//         }, [b, d, e]);
//         return {
//             isPending: g
//         }
//     }
//     g["default"] = a
// }), 98);

import { clearTimeout, setTimeout } from 'timers';
import { useLayoutEffect, useRef, useState } from 'react';

interface TooltipDelayedContentProps {
  delayContentMs: number;
  isVisible: boolean;
}

interface TooltipDelayedContentReturn {
  isPending: boolean;
}

function useTooltipDelayedContent({ delayContentMs, isVisible }: TooltipDelayedContentProps): TooltipDelayedContentReturn {
  const isVisibleRef = useRef(isVisible);
  const timeoutRef = useRef(null);
  const [isPending, setPending] = useState(() => isVisible && !isVisibleRef.current && delayContentMs > 0);

  useLayoutEffect(() => {
    if (isVisible && !isVisibleRef.current && delayContentMs > 0) {
      setPending(true);
      timeoutRef.current = setTimeout(() => {
        setPending(false);
        timeoutRef.current = null;
      }, delayContentMs);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    } else if (timeoutRef.current) {
      setPending(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isVisibleRef.current = isVisible;
  }, [delayContentMs, isVisible, isVisibleRef]);

  return { isPending };
}

export default useTooltipDelayedContent;
