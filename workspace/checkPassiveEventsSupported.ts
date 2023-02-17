// const canUseDOM = !!(
//     typeof window !== "undefined" &&
//     typeof window.document !== "undefined" &&
//     typeof window.document.createElement !== "undefined"
// );

// // Check if browser support events with passive listeners
// // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support

// let checkPassiveEventsSupported = false;
// let options: any;
// // const _1703328 = true;

// if (canUseDOM /*&& !_1703328*/ ) {
//     try {
//         options = {};
//         // $FlowFixMe: Ignore Flow complaining about needing a value
//         Object.defineProperty(options, "passive", {
//             get: function () {
//                 checkPassiveEventsSupported = true;
//             },
//         });
//         window.addEventListener("test", options, options);
//         window.removeEventListener("test", options, options);
//     } catch (err) {
//         checkPassiveEventsSupported = false;
//     }
// }

export default function checkPassiveEventsSupported() {
    let canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
    let isPassiveSupported = false;
    if (canUseDOM) {
      try {
        let options = {};
        Object.defineProperty(options, 'passive', {
          get() {
            isPassiveSupported = true;
          },
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (e) {
        isPassiveSupported = false;
      }
    }
    return isPassiveSupported;
  }



// __d("checkPassiveEventsSupported", ["gkx"], (function (a, b, c, d, e, f, g) {
//     a = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
//     b = !1;
//     if (a && !c("gkx")("1703328")) try {
//         d = {};
//         Object.defineProperty(d, "passive", {
//             get: function () {
//                 b = !0
//             }
//         });
//         window.addEventListener("test", d, d);
//         window.removeEventListener("test", d, d)
//     } catch (a) {
//         b = !1
//     }
//     e = b;
//     g["default"] = e
// }), 98);