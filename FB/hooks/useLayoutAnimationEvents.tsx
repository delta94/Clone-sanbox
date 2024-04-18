__d("useLayoutAnimationEvents", ["LayoutAnimationBoundaryContext", "LayoutAnimationEvents", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useEffect,
        k = b.useRef;

    function a(a) {
        var b = i(c("LayoutAnimationBoundaryContext")),
            e = k([]);
        j(function () {
            var c = (b == null ? void 0 : b.animationEventTargets) || [];
            c.forEach(function (b) {
                b = b.addListener(d("LayoutAnimationEvents").LAYOUT_ANIMATION_EVENT, a);
                e.current = [].concat(e.current, [b])
            });
            return function () {
                e.current.forEach(function (a) {
                    a.remove()
                }), e.current = []
            }
        }, [a, b])
    }
    g["default"] = a
}), 98);


import { useContext, useEffect, useRef } from 'react';

import { LayoutAnimationBoundaryContext } from 'LayoutAnimationBoundaryContext';
import { LAYOUT_ANIMATION_EVENT } from 'LayoutAnimationEvents';

function useLayoutAnimationEvents(
  callback: () => void
): void {

  const context = useContext(LayoutAnimationBoundaryContext);

  const listeners = useRef<Array<{remove: () => void}>>([]);

  useEffect(() => {

    const targets = context?.animationEventTargets || [];

    targets.forEach(target => {
      const listener = target.addListener(
        LAYOUT_ANIMATION_EVENT, 
        callback
      );
      listeners.current = [...listeners.current, listener];
    });

    return () => {
      listeners.current.forEach(listener => {
        listener.remove();
      });
      listeners.current = [];
    }

  }, [callback, context]);

}

export default useLayoutAnimationEvents;