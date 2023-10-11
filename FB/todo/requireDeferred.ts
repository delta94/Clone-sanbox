// _d("requireDeferred", ["RDRequireDeferredReference"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     var h = {};
//     function i(a, b) {
//         h[a] = b
//     }
//     function j(a) {
//         return h[a]
//     }
//     function a(a) {
//         var b = j(a);
//         if (b)
//             return b;
//         b = new (c("RDRequireDeferredReference"))(a);
//         i(a, b);
//         return b
//     }
//     g["default"] = a
// }
// ), 98);

import RDRequireDeferredReference from "./RDRequireDeferredReference";

const deferreds: { [key: string]: RDRequireDeferredReference } = {};

function registerDeferred(key: string, value: RDRequireDeferredReference): void {
    deferreds[key] = value;
}

function getDeferred(key: string): RDRequireDeferredReference | undefined {
    return deferreds[key];
}

export default function requireDeferred(key: string): RDRequireDeferredReference {
    let deferred = getDeferred(key);
    if (deferred) {
        return deferred;
    }
    deferred = new RDRequireDeferredReference();
    registerDeferred(key, deferred);
    return deferred;
}





