const isBrowser = () => typeof window !== "undefined" && window.document;

export default {
    isBrowser
};

// (e,t,n)=>{
//     "use strict";
//     n.d(t, {
//         C: ()=>r
//     });
//     var r = !("undefined" === typeof window || !window.document)
// } 