__d("QPLAddCometRequestHeaders", ["QuickPerformanceLogger", "cometAsyncRequestHeaders"], (function(a, b, c, d, e, f, g) {

    "use strict";

    var h;

    function a() {

        d("cometAsyncRequestHeaders").registerHeaderProvider(function() {

            var a = (h || (h = c("QuickPerformanceLogger"))).getActiveMarkerIds({

                type: 2

            });

            if (a.length > 0) {

                var b = {};

                b["X-FB-QPL-Active-Flows"] = a.sort().join(",");

                return b

            }

            return {}

        })

    }

    g["default"] = a

}

), 98);




import QuickPerformanceLogger from 'QuickPerformanceLogger';
import { registerHeaderProvider } from 'cometAsyncRequestHeaders';

function addQPLHeaders() {
  registerHeaderProvider(() => {
    const activeFlowIDs = QuickPerformanceLogger.getActiveMarkerIds({
      type: 2
    });

    if (activeFlowIDs.length > 0) {
      return {
        'X-FB-QPL-Active-Flows': activeFlowIDs.sort().join(',')  
      };
    }

    return {};
  });
}

export default addQPLHeaders;