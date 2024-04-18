// __d("CometBackupPlaceholder.react", ["react", "useCometPlaceholderImpl"], (function(a, b, c, d, e, f, g) {
//     "use strict";
//     var h;
//     h || d("react");
//     function a(a) {
//         return c("useCometPlaceholderImpl")(babelHelpers["extends"]({}, a, {
//             unstable_avoidThisFallback: !0
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }
// ), 98);

import { useCometPlaceholderImpl, UseCometPlaceholderImplOptions } from 'useCometPlaceholderImpl';

interface CometBackupPlaceholderProps extends UseCometPlaceholderImplOptions {
  unstable_avoidThisFallback?: boolean;
}

export default function CometBackupPlaceholder(props: CometBackupPlaceholderProps) {
  return useCometPlaceholderImpl({
    ...props,
    unstable_avoidThisFallback: true  
  });
}