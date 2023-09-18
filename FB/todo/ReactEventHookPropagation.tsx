__d("ReactEventHookPropagation", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        a = a._stopEventHookPropagation;
        return a !== void 0 && a[b]
    }
    function b(a, b) {
        var c = a._stopEventHookPropagation;
        c || (c = a._stopEventHookPropagation = {});
        c[b] = !0
    }
    f.hasEventHookPropagationStopped = a;
    f.stopEventHookPropagation = b
}
), 66);


export function hasEventHookPropagationStopped(event, eventName) {
    const _stopEventHookPropagation = event._stopEventHookPropagation;
    return (
        _stopEventHookPropagation !== undefined &&
        _stopEventHookPropagation[eventName]
    )
  }
  
export function stopEventHookPropagation(event, eventName) {
    let _stopEventHookPropagation = event._stopEventHookPropagation;

    _stopEventHookPropagation || (_stopEventHookPropagation = event._stopEventHookPropagation = {});
    _stopEventHookPropagation[eventName] = true;
}


const ReactEventHookPropagation = {
    hasEventHookPropagationStopped,
    stopEventHookPropagation,
  };
  
export default ReactEventHookPropagation;