// /// <reference lib="webworker" />
// export default null;
// declare let self: ServiceWorkerGlobalScope;

const canUseDOM = !!(
    window != undefined &&
    window.document &&
    window.document.createElement
);

// const isInWorker = typeof WorkerGlobalScope === "function";

const executionEnvironment = {
    canUseDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: canUseDOM && !!(window.addEventListener /* || window.attachEvent*/ ),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: true,
    isInBrowser: canUseDOM || /*isInWorker*/ true,
};

export default executionEnvironment;
export {
    executionEnvironment
};


// __d("ExecutionEnvironment", [], (function (a, b, c, d, e, f) {
//     "use strict";
//     b = !!(a !== void 0 && a.document && a.document.createElement);
//     c = typeof WorkerGlobalScope === "function";
//     d = {
//         canUseDOM: b,
//         canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
//         canUseViewport: b && !!window.screen,
//         canUseWorkers: typeof Worker !== "undefined",
//         isInBrowser: b || c,
//         isInWorker: c
//     };
//     e = d;
//     f["default"] = e
// }), 66);