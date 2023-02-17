import React, { useEffect } from 'react';
import { useLazyLoadQuery } from 'RelayHooks';
import fbt from 'fbt';
import WorkOnboardingAppSkeleton from 'WorkOnboardingAppSkeleton.react';
import WorkOnboardingAppRouterLHSSwitch from 'WorkOnboardingAppRouterLHSSwitch.react';
import WorkOnboardingAppRouterRHSSwitch from 'WorkOnboardingAppRouterRHSSwitch.react';
import { WorkSignupFlowQPL } from 'WorkSignupFlowQPL';
import { WorkSignupOnboardingAppContext } from 'WorkSignupOnboardingAppContext';
import { WorkOnboardingAppStepsContext } from 'WorkOnboardingAppStepsContext';
import { WorkOnboardingAppPreviewContext } from 'WorkOnboardingAppPreviewContext';
import { WorkOnboardingAppCompanyDataContext } from 'WorkOnboardingAppCompanyDataContext';
import { FocusRegion } from 'FocusRegion.react';
import CometPlaceholder from 'CometPlaceholder.react';
import CometProgressIndicator from 'CometProgressIndicator.react';
import ErrorBoundary from 'ErrorBoundary.react';
import WorkGalahadServerCallableProvider from 'WorkGalahadServerCallableProvider.react';
import WorkOnboardingAppQuery from 'WorkOnboardingAppQuery.graphql';

const WorkOnboardingApp = (props) => {
    let query = useLazyLoadQuery(WorkOnboardingAppQuery, {});
    query = query.work_signup;
    query = (query && query.locale_options) ? query.locale_options.map( option => ({ name: option.display_name || '', value: option.value || '' })) : [];
   
    return (
        <WorkOnboardingAppSkeleton
        layout="TWO_COLUMNS"
        localeOptions={query}
        leftContent={<WorkOnboardingAppRouterLHSSwitch />}
        rightContent={<WorkOnboardingAppRouterRHSSwitch />}
        />
    )
}

const WrappedWorkOnboardingApp = (props) => {
    useEffect(() => {
    WorkSignupFlowQPL.markStart(props.workPackage);
    }, [props.workPackage]);


    return (
        <WorkGalahadServerCallableProvider>
            <ErrorBoundary fallback={(error, moduleName) => <div>{`Something went wrong. Please try again later.`}</div>}>
                <WorkSignupOnboardingAppContext.Provider value={{ getInitialProps: () => props }}>
                    <WorkOnboardingAppStepsContext.Provider>
                        <WorkOnboardingAppPreviewContext.Provider>
                            <WorkOnboardingAppCompanyDataContext.WorkOnboardingAppCompanyDataContextProvider>
                                <FocusRegion id="work-signup-onboarding">
                                    <CometPlaceholder fallback={<CometProgressIndicator />}>
                                        <WorkOnboardingApp />
                                    </CometPlaceholder>
                                </FocusRegion>
                            </WorkOnboardingAppCompanyDataContext.WorkOnboardingAppCompanyDataContextProvider>
                        </WorkOnboardingAppPreviewContext.Provider>
                    </WorkOnboardingAppStepsContext.Provider>
                </WorkSignupOnboardingAppContext.Provider>
            </ErrorBoundary>
        </WorkGalahadServerCallableProvider>
    )
}   

WrappedWorkOnboardingApp.displayName = `WorkOnboardingApp [from ${__filename}]`;

const ErrorMessage = ({ error, moduleName }) => {
    return fbt._("Something went wrong. Please try again later.", "Error message shown when an error occurs in the WorkOnboardingApp module");
};

ErrorMessage.displayName = `ErrorMessage [from ${__filename}]`;

export default WrappedWorkOnboardingApp;




// __d("WorkOnboardingApp.react", ["fbt", "CometPlaceholder.react", "CometProgressIndicator.react", "ErrorBoundary.react", "FocusRegion.react", "RelayHooks", "WorkGalahadServerCallableProvider.react", "WorkOnboardingAppCompanyDataContext", "WorkOnboardingAppPreviewContext", "WorkOnboardingAppQuery.graphql", "WorkOnboardingAppRouterLHSSwitch.react", "WorkOnboardingAppRouterRHSSwitch.react", "WorkOnboardingAppSkeleton.react", "WorkOnboardingAppStepsContext", "WorkSignupFlowQPL", "WorkSignupOnboardingAppContext", "react"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i, j = d("react"),
//         k = d("react").useEffect;

//     function l() {
//         var a = d("RelayHooks").useLazyLoadQuery(i !== void 0 ? i : i = b("WorkOnboardingAppQuery.graphql"), {});
//         a = a.work_signup;
//         a = (a = a == null ? void 0 : (a = a.locale_options) == null ? void 0 : a.map(function (a) {
//             var b;
//             return {
//                 name: (b = a.display_name) != null ? b : "",
//                 value: (b = a.value) != null ? b : ""
//             }
//         })) != null ? a : [];
//         return j.jsx(c("WorkOnboardingAppSkeleton.react"), {
//             layout: "TWO_COLUMNS",
//             localeOptions: a,
//             leftContent: j.jsx(c("WorkOnboardingAppRouterLHSSwitch.react"), {}),
//             rightContent: j.jsx(c("WorkOnboardingAppRouterRHSSwitch.react"), {})
//         })
//     }
//     l.displayName = l.name + " [from " + f.id + "]";

//     function a(a) {
//         k(function () {
//             d("WorkSignupFlowQPL").markStart(a.workPackage)
//         }, [a.workPackage]);
//         return j.jsx(c("WorkGalahadServerCallableProvider.react"), {
//             children: j.jsx(c("ErrorBoundary.react"), {
//                 fallback: function (a, b) {
//                     return j.jsx(m, {
//                         error: a,
//                         moduleName: b
//                     })
//                 },
//                 children: j.jsx(c("WorkSignupOnboardingAppContext").Provider, {
//                     value: {
//                         getInitialProps: function () {
//                             return a
//                         }
//                     },
//                     children: j.jsx(d("WorkOnboardingAppStepsContext").Provider, {
//                         children: j.jsx(d("WorkOnboardingAppPreviewContext").Provider, {
//                             children: j.jsx(d("WorkOnboardingAppCompanyDataContext").WorkOnboardingAppCompanyDataContextProvider, {
//                                 children: j.jsx(d("FocusRegion.react").FocusRegion, {
//                                     id: "work-signup-onboarding",
//                                     children: j.jsx(c("CometPlaceholder.react"), {
//                                         fallback: j.jsx(c("CometProgressIndicator.react"), {}),
//                                         children: j.jsx(l, {})
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";

//     function m() {
//         return h._("Something went wrong. Please try again later.")
//     }
//     m.displayName = m.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);