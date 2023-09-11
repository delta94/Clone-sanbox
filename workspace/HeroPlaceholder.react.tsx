// __d("HeroPlaceholder.react", ["HeroFallbackTracker.react", "HeroInteractionContext", "HeroInteractionIDContext", "HeroPlaceholderUtils", "react", "useStable"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   var h = d("react");
//   b = d("react");
//   var i = b.useCallback,
//     j = b.useContext,
//     k = b.useLayoutEffect,
//     l = b.useRef;
//   e = function (a) {
//     a = a.children;
//     return a
//   };

//   function m(a) {
//     var b = a.cb,
//       c = l(!1);
//     k(function () {
//       c.current || (b(), c.current = !0)
//     });
//     return null
//   }

//   function a(a) {
//     var b = a.children,
//       e = a.fallback,
//       f = a.name,
//       g = a.unstable_avoidThisFallback,
//       n = a.unstable_onSuspense,
//       o = j(d("HeroInteractionContext").Context),
//       p = j(c("HeroInteractionIDContext")),
//       q = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
//       r = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
//       s = l(!1);
//     a = b;
//     b = i(function (a) {
//       if (p != null) {
//         var b;
//         o.suspenseCallback(p, q, o.pageletStack, a, (b = f) != null ? b : "Unnamed Suspense")
//       }
//       if (n) {
//         a = (b = d("HeroPlaceholderUtils").createThenableDescription(a)) != null ? b : "";
//         n(a)
//       }
//     }, [o, p, f, q, n]);
//     k(function () {
//       if (s.current === !1 && p != null && p != null) {
//         o.hold(p, o.pageletStack, "Hydration", r, f);
//         return function () {
//           return o.unhold(p, r)
//         }
//       }
//     }, [o, p, f, r]);
//     var t = function () {
//       s.current = !0, p != null && o.unhold(p, r)
//     };
//     return h.jsxs(h.Suspense, {
//       fallback: h.jsxs(h.Fragment, {
//         children: [e, h.jsx(m, {
//           cb: t
//         }), h.jsx(c("HeroFallbackTracker.react"), {
//           uuid: q
//         })]
//       }),
//       suspenseCallback: b,
//       unstable_avoidThisFallback: g,
//       children: [h.jsx(m, {
//         cb: t
//       }), a]
//     })
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   a.displayName = "HeroPlaceholder";
//   g["default"] = a
// }), 98);

import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import { HeroFallbackTracker } from 'HeroFallbackTracker.react';
import { HeroInteractionContext, HeroInteractionIDContext } from 'HeroInteractionContext';
import { HeroPlaceholderUtils } from 'HeroPlaceholderUtils';
import { useStable } from 'useStable';

const { Suspense, Fragment } = React;

function Placeholder({ cb }) {
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    if (!isMounted.current) {
      cb();
      isMounted.current = true;
    }
  }, [cb]);
  return null;
}

const HeroPlaceholder = ({ children, fallback, name, unstable_avoidThisFallback, unstable_onSuspense }) => {
  const interactionContext = useContext(HeroInteractionContext.Context);
  const interactionID = useContext(HeroInteractionIDContext);
  const generateUUID = useStable(HeroPlaceholderUtils.getSimpleUUID);
  const generateThenableUUID = useStable(HeroPlaceholderUtils.getSimpleUUID);
  const isHydrating = useRef(false);

  const handleSuspenseCallback = useCallback(
    (data) => {
      if (interactionID != null) {
        const description = name != null ? name : 'Unnamed Suspense';
        interactionContext.suspenseCallback(interactionID, generateUUID(), interactionContext.pageletStack, data, description);
      }
      if (unstable_onSuspense) {
        const fallbackDescription = HeroPlaceholderUtils.createThenableDescription(data) || '';
        unstable_onSuspense(fallbackDescription);
      }
    },
    [interactionContext, interactionID, name, generateUUID, unstable_onSuspense]
  );

  useLayoutEffect(() => {
    if (!isHydrating.current && interactionID != null) {
      interactionContext.hold(interactionID, interactionContext.pageletStack, 'Hydration', generateThenableUUID(), name);
      return () => interactionContext.unhold(interactionID, generateThenableUUID());
    }
  }, [interactionContext, interactionID, name, generateThenableUUID]);

  const handleComplete = () => {
    isHydrating.current = true;
    if (interactionID != null) {
      interactionContext.unhold(interactionID, generateThenableUUID());
    }
  };

  return (
    <Suspense
      fallback={
        <Fragment>
          {fallback}
          <Placeholder cb={handleComplete} />
          <HeroFallbackTracker uuid={generateUUID()} />
        </Fragment>
      }
      suspenseCallback={handleSuspenseCallback}
      unstable_avoidThisFallback={unstable_avoidThisFallback}
    >
      <Placeholder cb={handleComplete} />
      {children}
    </Suspense>
  );
};

HeroPlaceholder.displayName = `${HeroPlaceholder.name} [from ${f.id}]`;
HeroPlaceholder.displayName = 'HeroPlaceholder';

export default HeroPlaceholder;