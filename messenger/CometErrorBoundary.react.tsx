import React, { forwardRef } from 'react';
import ErrorBoundary from 'ErrorBoundary.react';
import useHeroErrorMetadata from 'useHeroErrorMetadata';

const CometErrorBoundary = forwardRef((props, ref) => {
  const augmentError = useHeroErrorMetadata();
  return <ErrorBoundary {...props} augmentError={augmentError} ref={ref} />;
});

CometErrorBoundary.displayName = `CometErrorBoundary [from ${__filename}]`;

export default CometErrorBoundary;


// __d("CometErrorBoundary.react", ["ErrorBoundary.react", "react", "useHeroErrorMetadata"], (function (a, b, c, d, e, f, g) {
//   "use strict";
//   var h = d("react");
//   b = d("react").forwardRef;

//   function a(a, b) {
//       var d = c("useHeroErrorMetadata")();
//       return h.jsx(c("ErrorBoundary.react"), babelHelpers["extends"]({}, a, {
//           augmentError: d,
//           fallback: a.fallback,
//           ref: b
//       }))
//   }
//   a.displayName = a.name + " [from " + f.id + "]";
//   e = b(a);
//   g["default"] = e
// }), 98);