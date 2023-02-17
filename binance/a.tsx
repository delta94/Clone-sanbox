const r = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/;

const defineProp = (obj, prop, value) => {
    Object.defineProperty(obj, prop, {
        value: value
    });
};

const parseUserAgent = e => {
    if (typeof e !== "string") throw new TypeError("agent must be a string");
    const t = e.match(r);
    const n = Object.create({
        isHybrid: false
    });
    if (t) {
        const e = t[1];
        defineProp(n, "bridgeVersion", e);
        defineProp(n, "clientType", t[2]);
        defineProp(n, "clientVersion", t[3]);
        defineProp(n, "isHybrid", !!e);
    }
    return n;
};

let cache, userAgent;

const getUserAgent = () => userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : "");

function parse(e) {
    return arguments.length === 0 ? cache || (cache = parseUserAgent(getUserAgent())) : parseUserAgent(e);
}

// (e,t,n)=>{
//     "use strict";
//     n.d(t, {
//         L: ()=>l
//     });
//     const r = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/
//       , i = (e,t,n)=>Object.defineProperty(e, t, {
//         value: n
//     })
//       , o = e=>{
//         if ("string" !== typeof e)
//             throw new TypeError("agent must be a string");
//         const t = e.match(r)
//           , n = Object.create({
//             isHybrid: !1
//         });
//         if (t) {
//             const e = t[1];
//             i(n, "bridgeVersion", e),
//             i(n, "clientType", t[2]),
//             i(n, "clientVersion", t[3]),
//             i(n, "isHybrid", !!e)
//         }
//         return n
//     }
//     ;
//     let a, s;
//     const c = ()=>s || ("undefined" !== typeof navigator ? navigator.userAgent : "");
//     function l(e) {
//         return 0 === arguments.length ? a || (a = o(c())) : o(e)
//     }
// } 