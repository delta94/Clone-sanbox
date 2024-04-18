// __d("CometAppNavigationTabBarContentWrapper.react", ["CometAppNavigationLayout.react", "CometErrorBoundary.react", "CometTopNav.react", "JSResource", "gkx", "lazyLoadComponent", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || d("react"),
//         j = c("lazyLoadComponent")(c("JSResource")("CometAppNavigationFallbackTabBarContent.react").__setRef("CometAppNavigationTabBarContentWrapper.react"));

//     function a(a) {
//         var b = a.children;
//         a = a.inert;
//         return i.jsx(c("CometAppNavigationLayout.react"), {
//             inert: a,
//             children: i.jsx(c("CometTopNav.react"), {
//                 children: c("gkx")("2204") ? i.jsx(c("CometErrorBoundary.react"), {
//                     fallback: function () {
//                         return i.jsx(j, {})
//                     },
//                     children: b
//                 }) : b
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);



import React, { FC, ReactNode, Suspense } from 'react';
import CometAppNavigationLayout from './CometAppNavigationLayout'; // Replace with the actual import path
import CometTopNav from './CometTopNav'; // Replace with the actual import path
import CometAppNavigationFallbackTabBarContent from './CometAppNavigationFallbackTabBarContent'; // Replace with the actual import path
import gkx from 'gkx'; // Replace with the actual import path

import { lazyLoadComponent } from './lazyLoadComponent';
import { JSResource } from './JSResource';

interface CometAppNavigationTabBarContentWrapperProps {
  children: ReactNode;
  inert: boolean;
}

const CometAppNavigationFallbackTabBarContent = lazyLoadComponent(
    JSResource('CometAppNavigationFallbackTabBarContent.react')
);

const CometAppNavigationTabBarContentWrapper: FC<CometAppNavigationTabBarContentWrapperProps> = ({ children, inert }) => {
  return (
    <CometAppNavigationLayout inert={inert}>
      <CometTopNav>
        {gkx('2204') ? (
          <Suspense fallback={<CometAppNavigationFallbackTabBarContent />}>
            {children}
          </Suspense>
        ) : (
          children
        )}
      </CometTopNav>
    </CometAppNavigationLayout>
  );
};

CometAppNavigationTabBarContentWrapper.displayName = `${CometAppNavigationTabBarContentWrapper.name} [from ${f.id}]`; // Replace f.id with the actual identifier

export default CometAppNavigationTabBarContentWrapper;

