// __d("useCometPlaceholderImpl", ["CometSSRHydrationMarkerUtils", "CometSuspenseHUD.react", "ExecutionEnvironment", "gkx", "hero-tracing-placeholder", "react", "requireDeferred", "useStable"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   var h, i, j = i || (i = d("react"));
//   e = i;
//   var k = e.useCallback,
//     l = e.useLayoutEffect,
//     m = e.useRef,
//     n = c("requireDeferred")("CometSuspenseFalcoEvent").__setRef("useCometPlaceholderImpl"),
//     o = 5;

//   function p(a) {
//     var b = a.cb,
//       c = m(!1);
//     l(function () {
//       c.current || (b(), c.current = !0)
//     });
//     return null
//   }

//   function b(b) {
//     var e = b.children,
//       f = b.fallback,
//       g = b.name,
//       i = b.unstable_avoidThisFallback,
//       l = b.unstable_onSuspense,
//       q = c("useStable")(function () {
//         return c("CometSuspenseHUD.react") && (h || (h = c("ExecutionEnvironment"))).canUseDOM ? a.document.createElement("div") : null
//       }),
//       r = m(0),
//       s = m(null),
//       t = m(!1);
//     b = e;
//     e = f;
//     d("CometSSRHydrationMarkerUtils").addMarkersToChildren != null && d("CometSSRHydrationMarkerUtils").addMarkersToFallback != null && (b = d("CometSSRHydrationMarkerUtils").addMarkersToChildren(b), e = d("CometSSRHydrationMarkerUtils").addMarkersToFallback(e));
//     f = k(function (a) {
//       q != null && (q.textContent = a), s.current = a, l && l(a)
//     }, [q, l]);
//     var u = null;
//     q != null && c("CometSuspenseHUD.react") != null && (u = j.jsx(c("CometSuspenseHUD.react"), {
//       desc: q
//     }));
//     var v = k(function () {
//         r.current += 1, c("gkx")("1863055") && (t.current && r.current <= o && n.onReady(function (a) {
//           a.log(function () {
//             return {
//               event: "unexpected_suspense",
//               is_backup_placeholder: i === !0,
//               placeholder_name: g,
//               promise_name: s.current,
//               suspense_count: String(r.current)
//             }
//           })
//         }))
//       }, [g, i]),
//       w = k(function () {
//         t.current = !0
//       }, []);
//     return j.jsxs(d("hero-tracing-placeholder").HeroPlaceholder, {
//       fallback: j.jsxs(j.Fragment, {
//         children: [e, j.jsx(p, {
//           cb: v
//         }), u]
//       }),
//       name: g,
//       unstable_avoidThisFallback: i,
//       unstable_onSuspense: f,
//       children: [j.jsx(p, {
//         cb: w
//       }), b]
//     })
//   }
//   b.displayName = b.name + " [from " + f.id + "]";
//   g["default"] = b
// }), 98);




import React, { useCallback, useRef } from 'react';
import { addMarkersToChildren, addMarkersToFallback } from 'CometSSRHydrationMarkerUtils';
import { CometSuspenseHUD } from 'CometSuspenseHUD.react';
import ExecutionEnvironment from 'ExecutionEnvironment';
import gkx from 'gkx';
import { HeroPlaceholder } from 'hero-tracing-placeholder';
import useLayoutEffect from 'useLayoutEffect';
import useStable from 'useStable';
import requireDeferred from 'requireDeferred';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
  name: string;
  unstable_avoidThisFallback?: boolean;
  unstable_onSuspense?: (name: string) => void; 
}

const MAX_COUNT = 5;
const logSuspenseEvent = requireDeferred('CometSuspenseFalcoEvent');

function PlaceholderMountCallback({ cb }: {cb: () => void}) {
  const mountedRef = useRef(false);
  
  useLayoutEffect(() => {
    if (!mountedRef.current) {
      cb();
      mountedRef.current = true;
    }
  });

  return null;
}

export default function useCometPlaceholderImpl({
    children,
    fallback,
    name,
    unstable_avoidThisFallback,
    unstable_onSuspense
  }: Props) {
      const placeholderRef = useStable(() => {
        if (CometSuspenseHUD && ExecutionEnvironment?.canUseDOM) {
          return document.createElement('div');
        }
        return null;
      });

      const count = useRef(0);
      const promiseName = useRef<string | null>(null);
      const hasLoggedFirstSuspense = useRef(false);

      if (addMarkersToChildren && addMarkersToFallback) {
        children = addMarkersToChildren(children);
        fallback = addMarkersToFallback(fallback);
      }

      const onSuspense = useCallback((name: string) => {
        if (placeholderRef) {
          placeholderRef.textContent = name; 
        }
        promiseName.current = name;
        if (unstable_onSuspense) {
          unstable_onSuspense(name);
        }
      }, [placeholderRef, unstable_onSuspense]);

      let hud = null;
      if (CometSuspenseHUD?.react) {
        hud = <CometSuspenseHUD desc={placeholderRef} />; 
      }

      const callback = useCallback(() => {
        count.current += 1;
        if (gkx('1863055')) {
          if (hasLoggedFirstSuspense.current && count.current <= MAX_COUNT) {
            logSuspenseEvent.onReady((log) => {
              log.log(() => ({
                event: 'unexpected_suspense',
                is_backup_placeholder: unstable_avoidThisFallback === true,
                placeholder_name: name,
                promise_name: promiseName.current,
                suspense_count: String(count.current)
              }));
            });
          }
        }
      }, [name, unstable_avoidThisFallback]);

      const logFirstSuspense = useCallback(() => {
        hasLoggedFirstSuspense.current = true;
      }, []);

      return (
        <HeroPlaceholder
            fallback={
                <>
                    {fallback}
                    <PlaceholderMountCallback cb={callback} />
                    {hud}
                </>
            }
            name={name}
            unstable_avoidThisFallback={unstable_avoidThisFallback}
            unstable_onSuspense={onSuspense}
            children={
                <>
                    <PlaceholderMountCallback cb={logFirstSuspense} />
                    {children}
                </>
            }
        />
    );
  }
  