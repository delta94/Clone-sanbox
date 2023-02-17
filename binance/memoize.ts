import MapCache from 'MapCache';

const memoize = (func, transform) => {
    if (typeof func !== 'function' || (transform && typeof transform !== 'function')) {
        throw new TypeError("Expected a function");
    }

    const memoized = function() {
        const args = transform ? transform.apply(this, arguments) : arguments[0];
        let cache = memoized.cache;
        if (cache.has(args)) {
            return cache.get(args);
        }
        const result = func.apply(this, arguments);
        memoized.cache = cache.set(args, result) || cache;
        return result;
    };

    memoized.cache = new MapCache();
    return memoized;
};

export default memoize;



// pFSi: (e,t,n)=>{
//     var r = n("MapCache"); 
//     function i(e, t) {
//         if ("function" != typeof e || null != t && "function" != typeof t)
//             throw new TypeError("Expected a function");
//         var n = function() {
//             var r = arguments
//               , i = t ? t.apply(this, r) : r[0]
//               , o = n.cache;
//             if (o.has(i))
//                 return o.get(i);
//             var a = e.apply(this, r);
//             return n.cache = o.set(i, a) || o,
//             a
//         };
//         return n.cache = new (i.Cache || r),
//         n
//     }
//     i.Cache = r,
//     e.exports = i
// }
