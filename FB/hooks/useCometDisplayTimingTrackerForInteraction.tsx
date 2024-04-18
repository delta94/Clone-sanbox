__d("useCometDisplayTimingTrackerForInteraction", ["InteractionTracingMetrics", "cr:449", "performanceNow", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    e = i || d("react");
    var j = e.useCallback,
        k = e.useRef;

    function a(a, d, e) {
        d === void 0 && (d = !1);
        var f = k(null);
        return j(function (g) {
            if (a != null && f.current !== g) {
                f.current = g;
                if (g) {
                    var i = (h || (h = c("performanceNow")))();
                    e != null ? c("InteractionTracingMetrics").addMountPoint(e, i, a) : c("InteractionTracingMetrics").currentInteractionLogger().forEach(function (b) {
                        return c("InteractionTracingMetrics").addMountPoint(b.traceId, i, a)
                    });
                    if (!d && b("cr:449")) {
                        var j = b("cr:449").getCurrentVCTraces();
                        j.forEach(function (a) {
                            a.interactionType !== "INTERACTION" && a.excludeElement(g)
                        })
                    }
                }
            }
        }, [e, d, a])
    }
    g["default"] = a
}), 98);


import * as React from 'react';
import { InteractionTracingMetrics } from 'InteractionTracingMetrics';
import performanceNow from 'performanceNow';
import { getCurrentVCTraces } from 'cr:449';

interface Props {
  element: React.ReactElement | null;
  isPersistent?: boolean;
  interactionId?: string; 
}

export default function useCometDisplayTimingTrackerForInteraction({
  element,
  isPersistent = false,
  interactionId  
}: Props) {

  const elementRef = React.useRef<React.ReactElement | null>(null);

  const onElementMount = React.useCallback((mountedElement: React.ReactElement) => {
    if (element && elementRef.current !== mountedElement) {
      elementRef.current = mountedElement;
      if (mountedElement) {
        const startTime = performanceNow();
        
        if (interactionId) {
          InteractionTracingMetrics.addMountPoint(
            interactionId, 
            startTime,
            mountedElement
          );
        } else {
          InteractionTracingMetrics.currentInteractionLogger().forEach(logger => {
            InteractionTracingMetrics.addMountPoint(
              logger.traceId,
              startTime,
              mountedElement  
            );
          });
        }

        if (!isPersistent && getCurrentVCTraces) {
          const traces = getCurrentVCTraces();
          traces.forEach(trace => {
            if (trace.interactionType !== 'INTERACTION') {
              trace.excludeElement(mountedElement);
            }
          });
        }
      }
    }
  }, [interactionId, isPersistent, element]);

  return onElementMount;

}