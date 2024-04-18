// __d("CometSSRMultipassBoundary.react", ["CometBackupPlaceholder.react", "CometPlaceholder.react", "CometSSRMultipassBoundaryUtils", "ExecutionEnvironment", "FBLogger", "Promise", "react", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i, j, k = j || (j = d("react")),
//         l = j.useContext;

//     function m(a) {
//         var e = this,
//             f = a.children;
//         a = a.id;
//         if ((i || (i = c("ExecutionEnvironment"))).canUseDOM || !d("CometSSRMultipassBoundaryUtils").isEnabled()) return f;
//         if (!d("CometSSRMultipassBoundaryUtils").isEnabledBoundary(a)) {
//             var g = d("CometSSRMultipassBoundaryUtils").tryGetBoundaryPromise(a);
//             if (g) throw g;
//             g = function () {};
//             var j = new(h || (h = b("Promise")))(function (a) {
//                 g = a.bind(e)
//             });
//             d("CometSSRMultipassBoundaryUtils").updateDisabledBoundariesMap(a, {
//                 promise: j,
//                 resolveFunc: g
//             });
//             throw j
//         }
//         return f
//     }
//     m.displayName = m.name + " [from " + f.id + "]";

//     function n(a) {
//         var b = a.children;
//         a = a.id;
//         d("CometSSRMultipassBoundaryUtils").isEnabledBoundary(a) && c("FBLogger")("comet_ssr").mustfix("SSR boundary suspended unexpectedly: " + a);
//         return b
//     }
//     var o = k.createContext();

//     function p(a) {
//         var b = a.boundaryId;
//         a = a.children;
//         var e = l(o);
//         if ((i || (i = c("ExecutionEnvironment"))).canUseDOM || !d("CometSSRMultipassBoundaryUtils").isEnabled()) return a;
//         if (e && e !== "root") throw c("unrecoverableViolation")("Nested SSR boundaries are unsupported. " + ("Found boundary '" + b + "' nested underneath ") + ("boundary '" + e + "'."), "comet_ssr");
//         return k.jsx(o.Provider, {
//             value: b,
//             children: a
//         })
//     }
//     p.displayName = p.name + " [from " + f.id + "]";

//     function a(a) {
//         var b = a.children,
//             d = a.fallback;
//         d = d === void 0 ? null : d;
//         var e = a.id;
//         a = a.useCometPlaceholder;
//         a = a === !0 ? c("CometPlaceholder.react") : c("CometBackupPlaceholder.react");
//         return k.jsx(p, {
//             boundaryId: e,
//             children: k.jsx(a, {
//                 fallback: k.jsx(n, {
//                     id: e,
//                     children: d
//                 }),
//                 children: k.jsx(m, {
//                     id: e,
//                     children: k.jsx(k.Fragment, {
//                         children: b
//                     })
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { useContext } from 'react';
import CometBackupPlaceholder from 'CometBackupPlaceholder.react';
import CometPlaceholder from 'CometPlaceholder.react';
import CometSSRMultipassBoundaryUtils from 'CometSSRMultipassBoundaryUtils';
import ExecutionEnvironment from 'ExecutionEnvironment';
import FBLogger from 'FBLogger';
import Promise from 'Promise';
import unrecoverableViolation from 'unrecoverableViolation';

const SSRBoundaryContext = React.createContext<string | null>(null);

interface Props {
  id: string;
  children: React.ReactNode;
}

function SSRBoundary(props: Props) {
  const { id, children } = props;

  if (!ExecutionEnvironment.canUseDOM || !CometSSRMultipassBoundaryUtils.isEnabled()) {
    return children; 
  }

  if (!CometSSRMultipassBoundaryUtils.isEnabledBoundary(id)) {
    const existingPromise = CometSSRMultipassBoundaryUtils.tryGetBoundaryPromise(id);
    if (existingPromise) {
      throw existingPromise;
    }

    let resolveFunc = () => {};
    const newPromise = new Promise(resolve => {
      resolveFunc = resolve;
    });

    CometSSRMultipassBoundaryUtils.updateDisabledBoundariesMap(id, {
      promise: newPromise,
      resolveFunc
    });
    
    throw newPromise;
  }

  return children;
}

function Fallback({ children, id }: Props) {
  if (CometSSRMultipassBoundaryUtils.isEnabledBoundary(id)) {
    FBLogger('comet_ssr').mustfix('SSR boundary suspended unexpectedly: ' + id);
  }

  return children;
}

function SSRBoundaryProvider({ boundaryId, children }: {boundaryId: string, children: React.ReactNode}) {
  const parentBoundaryId = useContext(SSRBoundaryContext);

  if (!ExecutionEnvironment.canUseDOM || !CometSSRMultipassBoundaryUtils.isEnabled()) {
    return children;
  }

  if (parentBoundaryId && parentBoundaryId !== 'root') {
    throw unrecoverableViolation('Nested SSR boundaries are unsupported. ' + 
      `Found boundary '${boundaryId}' nested underneath ` +
      `boundary '${parentBoundaryId}'.`,
      'comet_ssr'
    );
  }

  return (
    <SSRBoundaryContext.Provider value={boundaryId}>
      {children}
    </SSRBoundaryContext.Provider>
  );
}

interface CometSSRMultipassBoundaryProps {
  id: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  useCometPlaceholder?: boolean; 
}

function CometSSRMultipassBoundary(props: CometSSRMultipassBoundaryProps) {
  const { 
    children,
    fallback = null,
    id,
    useCometPlaceholder = true 
  } = props;

  const Placeholder = useCometPlaceholder ? CometPlaceholder : CometBackupPlaceholder;

  return (
    <SSRBoundaryProvider boundaryId={id}>
      <Placeholder
        fallback={
          <Fallback id={id}>
            {fallback}
          </Fallback>
        }
      >
        <SSRBoundary id={id}>
          <React.Fragment>{children}</React.Fragment>
        </SSRBoundary>
      </Placeholder>
    </SSRBoundaryProvider>
  );
}

export default CometSSRMultipassBoundary;