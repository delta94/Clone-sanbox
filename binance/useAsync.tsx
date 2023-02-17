import React from "react"

const useAsync = (asyncFn, deps = [], initialValue = { loading: false }) => {
    const current = React.useRef(0);
    const isMounted = React.useRef(false);
    const checkIsMounted = React.useCallback(() => isMounted.current, []);

    React.useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);
    
    const [state, setState] = React.useState(initialValue);
    
    const execute = React.useCallback((...args) => {
        const id = ++current.current;
        if (!state.loading) {
            setState(prevState => ({ ...prevState, loading: true }));
        }
    
        return asyncFn(...args)
            .then(result => {
                if (checkIsMounted() && id === current.current) {
                    setState({ value: result, loading: false });
                }
                return result;
            })
            .catch(error => {
                if (checkIsMounted() && id === current.current) {
                    setState({ error, loading: false });
                }
                throw error;
            });
    }, [state.loading, ...deps]);
    
    return [state, execute];
    }
    
    export default useAsync;

    // uWnf: (e,t,n)=>{
    //     "use strict";
    //     n.d(t, {
    //         Z: ()=>o
    //     });
    //     var r = n("D57K")
    //       , i = n("xIFI");
    //     function o(e, t, n) {
    //         void 0 === t && (t = []),
    //         void 0 === n && (n = {
    //             loading: !1
    //         });
    //         var o = (0,
    //         i.useRef)(0)
    //           , a = function() {
    //             var e = (0,
    //             i.useRef)(!1)
    //               , t = (0,
    //             i.useCallback)((function() {
    //                 return e.current
    //             }
    //             ), []);
    //             return (0,
    //             i.useEffect)((function() {
    //                 return e.current = !0,
    //                 function() {
    //                     e.current = !1
    //                 }
    //             }
    //             ), []),
    //             t
    //         }()
    //           , s = (0,
    //         i.useState)(n)
    //           , c = s[0]
    //           , l = s[1]
    //           , u = (0,
    //         i.useCallback)((function() {
    //             for (var t = [], n = 0; n < arguments.length; n++)
    //                 t[n] = arguments[n];
    //             var i = ++o.current;
    //             return c.loading || l((function(e) {
    //                 return (0,
    //                 r.__assign)((0,
    //                 r.__assign)({}, e), {
    //                     loading: !0
    //                 })
    //             }
    //             )),
    //             e.apply(void 0, t).then((function(e) {
    //                 return a() && i === o.current && l({
    //                     value: e,
    //                     loading: !1
    //                 }),
    //                 e
    //             }
    //             ), (function(e) {
    //                 return a() && i === o.current && l({
    //                     error: e,
    //                     loading: !1
    //                 }),
    //                 e
    //             }
    //             ))
    //         }
    //         ), t);
    //         return [c, u]
    //     }
    // } 