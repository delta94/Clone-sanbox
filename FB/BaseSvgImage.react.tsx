// __d("BaseSvgImage.react", ["react", "useFeedImageErrorEventLoggerCbs"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useEffect,
//         j = b.useRef;

//     function a(a) {
//         var b = a.onError,
//             d = a.src,
//             e = a.testid;
//         e = babelHelpers.objectWithoutPropertiesLoose(a, ["onError", "src", "testid"]);
//         a = c("useFeedImageErrorEventLoggerCbs")({
//             onError: b,
//             src: d
//         });
//         b = a._onError;
//         a = a._onLoad;
//         var f = j(null),
//             g = j(d);
//         i(function () {
//             f.current && f.current.getAttribute("xlink:href") !== g.current && f.current.setAttribute("xlink:href", g.current)
//         }, [f, g]);
//         return h.jsx("image", babelHelpers["extends"]({}, e, {
//             "data-testid": void 0,
//             height: "100%",
//             onError: b,
//             onLoad: a,
//             preserveAspectRatio: "xMidYMid slice",
//             ref: f,
//             width: "100%",
//             xlinkHref: d
//         }))
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React, { useEffect, useRef } from 'react';
import useFeedImageErrorEventLoggerCbs from 'useFeedImageErrorEventLoggerCbs';

function BaseSvgImage({ onError, src, testid, ...restProps }) {
  const { _onError, _onLoad } = useFeedImageErrorEventLoggerCbs({ onError, src });
  const ref = useRef(null);
  const srcRef = useRef(src);

  useEffect(() => {
    if (ref.current && ref.current.getAttribute('xlink:href') !== srcRef.current) {
      ref.current.setAttribute('xlink:href', srcRef.current);
    }
  }, [ref, srcRef]);

  return (
    <image
      {...restProps}
      data-testid={undefined}
      height="100%"
      onError={_onError}
      onLoad={_onLoad}
      preserveAspectRatio="xMidYMid slice"
      ref={ref}
      width="100%"
      xlinkHref={src}
    />
  );
}

BaseSvgImage.displayName = `${BaseSvgImage.name} [from ${f.id}]`;

export default BaseSvgImage;
