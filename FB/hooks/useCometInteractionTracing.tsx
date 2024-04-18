__d("useCometInteractionTracing", ["CometInteractionTracingConfig", "CometNavigationTracing", "CometOfflineTracing", "InteractionTracing", "forEachObject", "justknobx", "react", "useGetCometRouteTracePolicy", "uuidv4"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useCallback,
        j = 0;

    function k() {
        return j++
    }

    function a(a, b, e, f, g) {
        var h = c("useGetCometRouteTracePolicy")(),
            j = "" + k();
        return i(function (i, k, l, m, n) {
            var o = c("uuidv4")(),
                p = (m = (m = (m = m) != null ? m : f) != null ? m : h()) != null ? m : "comet.app",
                q = p + "_" + j + (n != null ? "_" + n : "");
            if (c("justknobx")._("1845")) {
                q = "" + p + ((m = n) != null ? m : j)
            }
            c("InteractionTracing").trace(a, function (a) {
                var b = c("InteractionTracing").checkAndMarkRevisit(p),
                    e = c("InteractionTracing").checkAndMarkRevisit(q);
                a.addMetadata("revisit", b ? 1 : 0);
                a.addMetadata("instance_revisit", e ? 1 : 0);
                g != null && c("forEachObject")(g, function (b, c) {
                    c != null && b != null && a.addMetadata(c, b)
                });
                a.addAnnotationInt(d("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION, d("CometOfflineTracing").getOfflineCount());
                a.onComplete(function (a) {
                    d("CometNavigationTracing").addServerTags(a)
                });
                i(a)
            }, b, e, p, o, k, l, d("CometInteractionTracingConfig").tracingConfig)
        }, [a, b, e, f])
    }
    g["default"] = a
}), 98);


import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { tracingConfig } from 'CometInteractionTracingConfig';
import { addServerTags } from 'CometNavigationTracing';
import { OFFLINE_NETWORK_STATUS_ANNOTATION, getOfflineCount } from 'CometOfflineTracing';  
import { trace, checkAndMarkRevisit } from 'InteractionTracing';
import forEachObject from 'forEachObject';
import useGetCometRouteTracePolicy from 'useGetCometRouteTracePolicy';
import justknobx from 'justknobx';

let interactionId = 0;

function generateInteractionId() {
    return interactionId++;  
}
  
function useCometInteractionTracing(
    interactionTracing: string,
    qplEvent: (trace: any) => void,
    tracingConfig: any, 
    defaultTracePolicy?: any,
    metadata?: any
) {

  const getRouteTracePolicy = useGetCometRouteTracePolicy();

  const interactionId = `${generateInteractionId()}`;

  const traceHandler = useCallback((traceCallback, loadType, loggerName, tracePolicy, instanceId) => {

    const traceId = uuidv4();
    const routeTraceId = (tracePolicy ?? getRouteTracePolicy?.()) ?? 'comet.app';
    let fullTraceId = `${routeTraceId}_${interactionId}${instanceId ? `_${instanceId}` : ''}`;
    
    if (justknobx.__('1845')) {
      fullTraceId = `${routeTraceId}${instanceId ?? interactionId}`; 
    }

    trace(interactionTracing, (trace) => {

      const isRevisit = checkAndMarkRevisit(routeTraceId);
      const isInstanceRevisit = checkAndMarkRevisit(fullTraceId);

      trace.addMetadata('revisit', isRevisit ? 1 : 0);
      trace.addMetadata('instance_revisit', isInstanceRevisit ? 1 : 0);

      if (metadata) {
        forEachObject(metadata, (value, key) => {
          if (value != null && key != null) {
            trace.addMetadata(key, value);
          }
        });
      }

      trace.addAnnotationInt(
        OFFLINE_NETWORK_STATUS_ANNOTATION,
        getOfflineCount()
      );

      trace.onComplete((completedTrace) => {
        addServerTags(completedTrace);
      });

      traceCallback(trace);

    }, qplEvent, tracingConfig, routeTraceId, traceId, loadType, loggerName, tracingConfig);

  }, [interactionTracing, qplEvent, tracingConfig, defaultTracePolicy]);

  return traceHandler;

}

export default useCometInteractionTracing;