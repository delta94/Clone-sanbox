// __d("HeroPlaceholderUtils", ["PromiseAnnotate"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = 0;

//     function a() {
//         return String(h++)
//     }

//     function b(a) {
//         if (a != null && a.size > 0) return Array.from(a).map(function (a) {
//             a = d("PromiseAnnotate").getDisplayName(a);
//             if (a != null) return a;
//             else return "Promise"
//         }).join(",");
//         else return null
//     }
//     g.getSimpleUUID = a;
//     g.createThenableDescription = b
// }), 98);


import PromiseAnnotate from "PromiseAnnotate"

const getSimpleUUID = (): string => {
    let count = 0;
    return String(count++);
  };
  
  const createThenableDescription = (promises: Set<Promise<any>> | null | undefined): string | null => {
    if (promises != null && promises.size > 0) {
      const promiseArray = Array.from(promises);
      return promiseArray.map((promise) => {
        const displayName = PromiseAnnotate.getDisplayName(promise);
        if (displayName != null) {
          return displayName;
        } else {
          return "Promise";
        }
      }).join(",");
    } else {
      return null;
    }
  };
  
  export {
    getSimpleUUID,
    createThenableDescription
  };

  