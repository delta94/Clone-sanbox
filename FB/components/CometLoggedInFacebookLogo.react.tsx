// __d("CometLoggedInFacebookLogo.react", ["fbt", "CometIconLogo.react", "CometPressable.react", "XCometHomeControllerRouteBuilder", "react", "useTopNavigationLogging"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = i || d("react"),
//         k = c("XCometHomeControllerRouteBuilder").buildURL({});

//     function a(a) {
//         var b = a["aria-hidden"],
//             e = a.withShadow;
//         e = e === void 0 ? !1 : e;
//         a = a.xstyle;
//         var f = d("useTopNavigationLogging").useLogoLoggingCallbacks(),
//             g = f[0];
//         f = f[1];
//         return j.jsx(c("CometPressable.react"), {
//             "aria-hidden": b,
//             "aria-label": h._("__JHASH__TlJCmSOrUbl__JHASH__"),
//             expanding: !0,
//             linkProps: {
//                 prefetchQueriesOnHover: !0,
//                 productAttribution: {
//                     tap_point: "logo"
//                 },
//                 traceParams: {
//                     navigation_source: "logo_click"
//                 },
//                 url: k
//             },
//             onPress: g,
//             overlayDisabled: !0,
//             ref: f,
//             testid: void 0,
//             xstyle: a,
//             children: j.jsx(c("CometIconLogo.react"), {
//                 shadow: e,
//                 size: 40
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React from 'react';
import { CometPressable, CometIconLogo } from 'path/to/comet-components'; // Adjust import paths as necessary
import { buildURL as buildHomeControllerURL } from 'path/to/XCometHomeControllerRouteBuilder';
import { useLogoLoggingCallbacks } from 'path/to/useTopNavigationLogging';

interface LogoProps {
  'aria-hidden'?: boolean;
  withShadow?: boolean;
  xstyle?: any; // Replace 'any' with a more specific type as needed
}

const CometLoggedInFacebookLogo: React.FC<LogoProps> = ({ 'aria-hidden': ariaHidden, withShadow = false, xstyle }) => {
  const url = buildHomeControllerURL({});
  const [onPress, ref] = useLogoLoggingCallbacks();

  return (
    <CometPressable
      aria-hidden={ariaHidden}
      aria-label={"Facebook"} 
      expanding={true}
      linkProps={{
        prefetchQueriesOnHover: true,
        productAttribution: {
          tap_point: 'logo',
        },
        traceParams: {
          navigation_source: 'logo_click',
        },
        url,
      }}
      onPress={onPress}
      overlayDisabled={true}
      ref={ref}
      testid={undefined}
      xstyle={xstyle}
    >
      <CometIconLogo
        shadow={withShadow}
        size={40}
      />
    </CometPressable>
  );
};

CometLoggedInFacebookLogo.displayName = `${CometLoggedInFacebookLogo.name} [from ${'path/to/module'}]`; // Adjust the module path as necessary

export default CometLoggedInFacebookLogo;
