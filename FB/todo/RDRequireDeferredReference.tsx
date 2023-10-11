// __d("RDRequireDeferredReference", ["RequireDeferredReference"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     a = function(a) {
//         babelHelpers.inheritsLoose(b, a);
//         function b() {
//             return a.apply(this, arguments) || this
//         }
//         b.disableForSSR_DO_NOT_USE = function() {
//             this.$RDRequireDeferredReference1 = !1
//         }
//         ;
//         var c = b.prototype;
//         c.isAvailableInSSR_DO_NOT_USE = function() {
//             return this.constructor.$RDRequireDeferredReference1
//         }
//         ;
//         return b
//     }(c("RequireDeferredReference"));
//     a.$RDRequireDeferredReference1 = !0;
//     g["default"] = a
// }
// ), 98);


export default class RDRequireDeferredReference {
    static $RDRequireDeferredReference1: boolean = true;

    constructor() {}

    static disableForSSR_DO_NOT_USE(): void {
        this.$RDRequireDeferredReference1 = false;
    }

    isAvailableInSSR_DO_NOT_USE(): boolean {
        return (this.constructor as typeof RDRequireDeferredReference).$RDRequireDeferredReference1;
    }
}