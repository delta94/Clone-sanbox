import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const getCookies = (state) => {
    return state.cookies || {};
};

const useCookies = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    ref.current = useSelector(getCookies);
    return {
        cookies: ref.current,
        saveCookie: useCallback((key, value) => {
            const newValue = typeof value === "function" ? value(ref.current[key]) : value;
            dispatch.cookies.save({ key, value: newValue });
        }, []),
    };
};


const themeDark = "dark";
const themeLight = "light";
const themeKey = "theme";
const shouldResetTradingViewKey = "shouldResetTradingView";

const useTheme = () => {
    const { cookies, saveCookie } = useCookies();

    const getThemeCounter = useCallback(() => {
        return JSON.parse(localStorage.getItem(shouldResetTradingViewKey) || "0");
    }, []);


    const incThemeCounter = useCallback(() => {
        const themeCounter = getThemeCounter();
        localStorage.setItem(shouldResetTradingViewKey, JSON.stringify(themeCounter + 1));      
    }, [getThemeCounter]);
        
        

    return {
        isLight: cookies[themeKey] !== themeDark,
        shouldResetTradingViewKey,
        getThemeCounter,
        incThemeCounter,
        toggleTheme: useCallback(() => {
            saveCookie(themeKey, (current) => (current !== themeLight ? themeLight : themeDark));
            incThemeCounter();
        }, [saveCookie, incThemeCounter]),
    }
}


const userPreferredCurrencyKey = "userPreferredCurrency";



const useFiat = () => {
    const { cookies, saveCookie } = useCookies();
    return {
        cachePreferFiat: cookies[userPreferredCurrencyKey],
        setCacheFiat: useCallback((value) => {
            saveCookie(userPreferredCurrencyKey, value);
        }, []),
    };
};

const getCacheFiat = () => {
    return useFiat().cachePreferFiat;
};

const fiatPreferCurrencyKey = "fiat-prefer-currency";

const useFiatPreferCurrency = () => {
    const { cookies, saveCookie } = useCookies();
    return {
        getCurrency: cookies[fiatPreferCurrencyKey],
        setCurrency: useCallback((value) => {
            saveCookie(fiatPreferCurrencyKey, value);
        }, []),
    };
};

export { useTheme, useFiat, getCacheFiat, useFiatPreferCurrency };




// "use strict";
// n.d(t, {
//     Fg: ()=>p,
//     CE: ()=>f,
//     Y7: ()=>m,
//     uh: ()=>y
// });
// var r = n("xIFI")
//   , i = n("UHkU")
//   , o = function(e) {
//     return e.cookies || {}
// }
//   , a = function() {
//     var e = (0,
//     r.useRef)(null)
//       , t = (0,
//     i.useDispatch)();
//     return e.current = (0,
//     i.useSelector)(o),
//     {
//         cookies: e.current,
//         saveCookie: (0,
//         r.useCallback)((function(n, r) {
//             var i = "function" === typeof r ? r(e.current[n]) : r;
//             t.cookies.save({
//                 key: n,
//                 value: i
//             })
//         }
//         ), [])
//     }
// }
//   , s = "dark"
//   , c = "light"
//   , l = "theme"
//   , u = "shouldResetTradingView"
//   , p = function() {
//     var e = a()
//       , t = e.cookies
//       , n = e.saveCookie
//       , i = (0,
//     r.useCallback)((function() {
//         return JSON.parse(localStorage.getItem(u) || "0")
//     }
//     ), [])
//       , o = (0,
//     r.useCallback)((function() {
//         var e = i();
//         localStorage.setItem(u, JSON.stringify(e + 1))
//     }
//     ), [i]);
//     return {
//         isLight: t.theme !== s,
//         shouldResetTradingViewKey: u,
//         getThemeCounter: i,
//         incThemeCounter: o,
//         toggleTheme: (0,
//         r.useCallback)((function() {
//             n(l, (function(e) {
//                 return e !== c ? c : s
//             }
//             )),
//             o()
//         }
//         ), [o])
//     }
// }
//   , d = "userPreferredCurrency"
//   , f = function() {
//     var e = a()
//       , t = e.cookies
//       , n = e.saveCookie;
//     return {
//         cachePreferFiat: t[d],
//         setCacheFiat: (0,
//         r.useCallback)((function(e) {
//             n(d, e)
//         }
//         ), [])
//     }
// }
//   , m = function() {
//     return f().cachePreferFiat
// }
//   , g = "fiat-prefer-currency"
//   , y = function() {
//     var e = a()
//       , t = e.cookies
//       , n = e.saveCookie;
//     return {
//         getCurrency: t[g],
//         setCurrency: (0,
//         r.useCallback)((function(e) {
//             n(g, e)
//         }
//         ), [])
//     }
// }
// }