__d("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react", ["CometPlaceholder.react", "CometSSRSuspendOnServer.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        var b = a.children;
        a = a.useSuspenseDirectlyForSVG;
        a = a === !0 ? h.Suspense : c("CometPlaceholder.react");
        return h.jsx(a, {
            fallback: b,
            children: h.jsx(c("CometSSRSuspendOnServer.react"), {
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React, { ReactNode, Suspense } from 'react';
import CometPlaceholder from 'CometPlaceholder.react';
import CometSSRSuspendOnServer from 'CometSSRSuspendOnServer.react';

interface CometSSRReplaceContentOnHydrationAndBreakEventReplayingProps {
  children: ReactNode;
  useSuspenseDirectlyForSVG?: boolean;
}

const CometSSRReplaceContentOnHydrationAndBreakEventReplaying: React.FC<CometSSRReplaceContentOnHydrationAndBreakEventReplayingProps> = ({
  children,
  useSuspenseDirectlyForSVG = false,
}) => {
  const SuspenseComponent = useSuspenseDirectlyForSVG ? Suspense : CometPlaceholder;

  return (
    <SuspenseComponent fallback={children}>
      <CometSSRSuspendOnServer>{children}</CometSSRSuspendOnServer>
    </SuspenseComponent>
  );
};

export default CometSSRReplaceContentOnHydrationAndBreakEventReplaying;
