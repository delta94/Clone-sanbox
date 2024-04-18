// __d("useStable", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react").useRef;

//     function a(a) {
//         var b = h(null),
//             c = b.current;
//         if (c === null) {
//             a = a();
//             b.current = {
//                 value: a
//             };
//             return a
//         } else return c.value
//     }
//     g["default"] = a
// }), 98);

import { useRef } from 'react';

function useStable<T>(fn: () => T): T {
    const ref = useRef<{
      value: T 
    } | null>(null);
    let current = ref.current;
  
    if (current === null) {
      current = {value: fn()};
      ref.current = current;
      return current.value;
    } else {
      return current.value; 
    }
  }
  

export default useStable;