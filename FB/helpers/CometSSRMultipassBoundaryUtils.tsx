// __d("CometSSRMultipassBoundaryUtils", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || d("react"),
//         j = "<!--$-->",
//         k = "<!--$?-->",
//         l = "<!--$!-->",
//         m = "<!--/$-->",
//         n = !0;

//     function a(a) {
//         n = a
//     }

//     function b() {
//         return n
//     }
//     var o = new Map(),
//         p = new Set();
//     e = function (a) {
//         p = new Set(a)
//     };
//     f = function (a) {
//         return p.has(a)
//     };
//     d = function (a) {
//         return "ssrb_" + a + "_content"
//     };
//     var q = function (a) {
//             return "ssrb_" + a + "_start"
//         },
//         r = function (a) {
//             return "ssrb_" + a + "_end"
//         },
//         s = function (a) {
//             return '<span id="' + q(a) + '" style="display:none"></span>'
//         },
//         t = function (a) {
//             return '<span id="' + r(a) + '" style="display:none"></span>'
//         },
//         u = function (a, b) {
//             a = s(a);
//             var c = a.length;
//             a = b.indexOf(a);
//             if (a !== -1) {
//                 if (b.startsWith(j, a + c)) return [a, c + j.length, "hydrate"];
//                 if (b.startsWith(l, a + c)) return [a, c + l.length, "fallback"];
//                 if (b.startsWith(k, a + c)) return [a, c + k.length, "fallback"]
//             }
//             return null
//         },
//         v = function (a, b) {
//             a = m + t(a);
//             b = b.indexOf(a);
//             return b !== -1 ? [b, a.length] : null
//         },
//         w = function (a, b) {
//             return s(a) + ("" + k + b + m) + t(a)
//         },
//         x = function (a) {
//             return i.jsx("span", {
//                 id: q(a),
//                 style: {
//                     display: "none"
//                 }
//             })
//         },
//         y = function (a) {
//             return i.jsx("span", {
//                 id: r(a),
//                 style: {
//                     display: "none"
//                 }
//             })
//         };

//     function c(a) {
//         a.forEach(function (a) {
//             var b = o.get(a) || null;
//             b && b.resolveFunc && typeof b.resolveFunc === "function" && (b.resolveFunc(a), o["delete"](a))
//         })
//     }
//     var z = function (a) {
//             a = o.get(a);
//             return a ? a.promise : null
//         },
//         A = function (a, b) {
//             o.set(a, b)
//         };
//     g.setEnabled = a;
//     g.isEnabled = b;
//     g.setEnabledBoundaries = e;
//     g.isEnabledBoundary = f;
//     g.getBoundarySSRContentID = d;
//     g.getBoundaryStartID = q;
//     g.getBoundaryEndID = r;
//     g.getBoundaryStartOffset = u;
//     g.getBoundaryEndOffset = v;
//     g.getBoundaryString = w;
//     g.getBoundaryStartComponent = x;
//     g.getBoundaryEndComponent = y;
//     g.tryResolveDisabledBoundaries = c;
//     g.tryGetBoundaryPromise = z;
//     g.updateDisabledBoundariesMap = A
// }), 98);

// cometSSRMultipassBoundaryUtils.ts

import React from 'react';

export let localIsEnabled = true;

const boundaryStart = '<!--$-->';
const fallbackStart = '<!--$?-->'; 
const fallbackEnd = '<!--$!-->';
const boundaryEnd = '<!--/$-->';

const disabledBoundaries = new Map<string, {
  promise: Promise<void>;
  resolveFunc: (id: string) => void;  
}>();

let enabledBoundaries = new Set<string>();

export function setEnabled(enabled: boolean) {
    localIsEnabled = enabled;
}

export function isEnabled() {
  return localIsEnabled; 
}

export function setEnabledBoundaries(boundaries: string[]) {
  enabledBoundaries = new Set(boundaries);
}

export function isEnabledBoundary(boundaryId: string) {
  return enabledBoundaries.has(boundaryId);  
}

export function getBoundarySSRContentID(boundaryId: string) {
  return `ssrb_${boundaryId}_content`;  
}

export function getBoundaryStartID(boundaryId: string) {
  return `ssrb_${boundaryId}_start`;
}

export function getBoundaryEndID(boundaryId: string) {
  return `ssrb_${boundaryId}_end`;  
}

interface BoundaryOffset {
    start: number;
    length: number;
    type: 'hydrate' | 'fallback'; 
}

export function getBoundaryStartOffset(boundaryId: string, html: string): string[] | null {
    const startSpan = getBoundaryStartComponent(boundaryId);
    const startSpanLength = startSpan.length;

    const startIndex = html.indexOf(startSpan);
    if (startIndex !== -1) {
        if (html.startsWith(boundaryStart, startIndex + startSpanLength)) {
          return [
            startIndex,
            startSpanLength + boundaryStart.length,
            'hydrate'
          ];
        }
        
        if (html.startsWith(fallbackEnd, startIndex + startSpanLength)) {
          return [
            startIndex, 
            startSpanLength + fallbackEnd.length,
            'fallback'
          ];
        }

        if (html.startsWith(fallbackStart, startIndex + startSpanLength)) {
            return [
              startIndex, 
              startSpanLength + fallbackStart.length,
              'fallback'
            ];
        }
      }
    
      return null;

}

export function getBoundaryEndOffset(boundaryId: string, html: string): [number, number] | null {
  const endSpan = boundaryEnd + getBoundaryStartComponent(boundaryId);
  const endIndex = html.indexOf(endSpan);

  if (endIndex !== -1) {
    return [endIndex, endSpan.length]; 
  }

  return null;
}

export function getBoundaryString(boundaryId: string, content: string): string | null {
  return getBoundaryStartComponent(boundaryId) + fallbackStart + content + boundaryEnd + getBoundaryStartComponent(boundaryId)
}

export function getBoundaryStartComponent(boundaryId: string) {
  return (
    <span id={getBoundaryStartID(boundaryId)} style={{ display: 'none' }} />  
  );
}

export function getBoundaryEndComponent(boundaryId: string) {
  return (
    <span id={getBoundaryEndID(boundaryId)} style={{ display: 'none' }} />
  );
}

export function tryResolveDisabledBoundaries(boundaryIds: string[]) {
  boundaryIds.forEach(id => {
    const boundary = disabledBoundaries.get(id) || null;
    if (boundary && typeof boundary.resolveFunc === 'function') {
        boundary.resolveFunc(id);
        disabledBoundaries.delete(id); 
    }
  })
}

export function tryGetBoundaryPromise(boundaryId: string) {
  const data = disabledBoundaries.get(boundaryId);
  return data?.promise ?? null;  
}

export function updateDisabledBoundariesMap(
  boundaryId: string, 
  data: {
    promise: Promise<void>;
    resolveFunc: () => void;
  }
) {
  disabledBoundaries.set(boundaryId, data);  
}
