// __d("HeroPlaceholder.react", ["HeroFallbackTracker.react", "HeroInteractionContext", "HeroInteractionIDContext", "HeroPlaceholderUtils", "react", "useStable"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useCallback,
//         j = b.useContext,
//         k = b.useLayoutEffect,
//         l = b.useRef;
//     e = function (a) {
//         a = a.children;
//         return a
//     };

//     function m(a) {
//         var b = a.cb,
//             c = l(!1);
//         k(function () {
//             c.current || (b(), c.current = !0)
//         });
//         return null
//     }

//     function a(a) {
//         var b = a.children,
//             e = a.fallback,
//             f = a.name,
//             g = a.unstable_avoidThisFallback,
//             n = a.unstable_onSuspense,
//             o = j(d("HeroInteractionContext").Context),
//             p = j(c("HeroInteractionIDContext")),
//             q = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
//             r = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
//             s = l(!1);
//         a = b;
//         b = i(function (a) {
//             if (p != null) {
//                 var b;
//                 o.suspenseCallback(p, q, o.pageletStack, a, (b = f) != null ? b : "Unnamed Suspense")
//             }
//             if (n) {
//                 a = (b = d("HeroPlaceholderUtils").createThenableDescription(a)) != null ? b : "";
//                 n(a)
//             }
//         }, [o, p, f, q, n]);
//         k(function () {
//             if (s.current === !1 && p != null && p != null) {
//                 o.hold(p, o.pageletStack, "Hydration", r, f);
//                 return function () {
//                     return o.unhold(p, r)
//                 }
//             }
//         }, [o, p, f, r]);
//         var t = function () {
//             s.current = !0, p != null && o.unhold(p, r)
//         };
//         return h.jsxs(h.Suspense, {
//             fallback: h.jsxs(h.Fragment, {
//                 children: [e, h.jsx(m, {
//                     cb: t
//                 }), h.jsx(c("HeroFallbackTracker.react"), {
//                     uuid: q
//                 })]
//             }),
//             suspenseCallback: b,
//             unstable_avoidThisFallback: g,
//             children: [h.jsx(m, {
//                 cb: t
//             }), a]
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     a.displayName = "HeroPlaceholder";
//     g["default"] = a
// }), 98);








import React, { useCallback, useContext, useLayoutEffect, useRef } from 'react';
import { HeroInteractionContext, HeroInteractionIDContext } from 'HeroInteractionContext';
import { getSimpleUUID, createThenableDescription } from 'HeroPlaceholderUtils';
import HeroFallbackTracker from 'HeroFallbackTracker';

function PlaceholderMountCallback({ cb }) {
  const mountedRef = useRef(false);
  
  useLayoutEffect(() => {
    if (!mountedRef.current) {
      cb();
      mountedRef.current = true;
    }
  }, [cb]);
  
  return null;
}

export default function HeroPlaceholder(props) {
  const { children, fallback, name, unstable_avoidThisFallback, unstable_onSuspense } = props;
  const interactionContext = useContext(HeroInteractionContext.Context);
  const interactionID = useContext(HeroInteractionIDContext);
  const uuid = getSimpleUUID();
  const pageletID = getSimpleUUID();
  const isMountedRef = useRef(false);
  
  const handleSuspense = useCallback((description) => {
    if (interactionID) {
      const interactionData = {
        interactionID,
        uuid,
        pageletStack: interactionContext.pageletStack,
        description: description || `Unnamed Suspense`,
      };
      interactionContext.suspenseCallback(interactionID, uuid, interactionData);
    }
    if (unstable_onSuspense) {
      const descriptionText = createThenableDescription(description) || "";
      unstable_onSuspense(descriptionText);
    }
  }, [interactionContext, interactionID, uuid, unstable_onSuspense]);
  
  useLayoutEffect(() => {
    if (!isMountedRef.current && interactionID) {
      interactionContext.hold(interactionID, interactionContext.pageletStack, "Hydration", pageletID, name);
      return () => interactionContext.unhold(interactionID, pageletID);
    }
  }, [interactionContext, interactionID, pageletID, name]);
  
  const handleMount = () => {
    isMountedRef.current = true;
    if (interactionID) {
      interactionContext.unhold(interactionID, pageletID);
    }
  };
  
  return (
    <React.Suspense
      fallback={
        <>
          {fallback}
          <PlaceholderMountCallback cb={handleMount} />
          <HeroFallbackTracker uuid={uuid} />
        </>
      }
      suspenseCallback={handleSuspense}
      unstable_avoidThisFallback={unstable_avoidThisFallback}
    >
      <PlaceholderMountCallback cb={handleMount} />
      {children}
    </React.Suspense>
  );
}

HeroPlaceholder.displayName = "HeroPlaceholder";

