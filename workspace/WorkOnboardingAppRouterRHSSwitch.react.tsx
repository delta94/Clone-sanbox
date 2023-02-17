// __d("WorkOnboardingAppRouterRHSSwitch.react", ["WorkOnboardingAppPreviewContext", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react"),
//         i = d("react").useContext;

//     function a() {
//         var a = i(d("WorkOnboardingAppPreviewContext").Context);
//         a = a[0];
//         return h.jsx(h.Fragment, {
//             children: a
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { useContext } from 'react';
import { Context as WorkOnboardingAppPreviewContext } from 'WorkOnboardingAppPreviewContext';

const WorkOnboardingAppRouterRHSSwitch = () => {
const context = useContext(WorkOnboardingAppPreviewContext);
const { preview } = context;
return <>{preview}</>;
};

export default WorkOnboardingAppRouterRHSSwitch;