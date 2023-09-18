// __d("suspendOrThrowIfUsedInSSR", ["CometSSRClientRender", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     function a(a) {
//         if (!c("ExecutionEnvironment").isInBrowser)
//             throw d("CometSSRClientRender").CometSSRClientRender(a)
//     }
//     g["default"] = a
// }
// ), 98);


import { isInBrowser } from 'ExecutionEnvironment';
import { CometSSRClientRender } from 'CometSSRClientRender';

function suspendOrThrowIfUsedInSSR(message: string) {
  if (!isInBrowser) {
    throw CometSSRClientRender(message);
  }
}

export default suspendOrThrowIfUsedInSSR;
