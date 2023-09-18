// __d("useUnsafeRef_DEPRECATED", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react").useMemo;

//     function a(a) {
//         return h(function () {
//             return {
//                 current: a
//             }
//         }, [])
//     }
//     g["default"] = a
// }), 98);


import { useMemo, RefObject } from 'react';

function useUnsafeRef_DEPRECATED<T>(value: T): RefObject<T> {
    return useMemo(() => ({ current: value }), []);
}

export default useUnsafeRef_DEPRECATED;
