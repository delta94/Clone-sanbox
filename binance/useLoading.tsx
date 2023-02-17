import { useEffect } from "react";
import useAsync from "useAsync";

const useLoading = (fn, dependencies = []) => {
  const [loading, setLoading] = useAsync(fn, dependencies, {
    loading: true,
  });

  useEffect(() => {
    setLoading();
  }, [setLoading]);

  return loading;
};

export default useLoading;

// "7rGg": (e,t,n)=>{
//     "use strict";
//     n.d(t, {
//         Z: ()=>i
//     });
//     var r = n("xIFI")
//       , l = n("uWnf");
//     function i(e, t) {
//         void 0 === t && (t = []);
//         var n = (0,
//         l.Z)(e, t, {
//             loading: !0
//         })
//           , i = n[0]
//           , a = n[1];
//         return (0,
//         r.useEffect)((function() {
//             a()
//         }
//         ), [a]),
//         i
//     }
// }