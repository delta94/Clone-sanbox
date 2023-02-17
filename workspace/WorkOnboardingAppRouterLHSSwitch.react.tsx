// __d("WorkOnboardingAppRouterLHSSwitch.react", ["BaseMultiStepContainer.react", "URI", "WorkOnboardingAppCodeVerificationRoute.react", "WorkOnboardingAppCreateProfileRoute.react", "WorkOnboardingAppCreateWorkplaceRoute.react", "WorkOnboardingAppFirstActionRoute.react", "WorkOnboardingAppFirstActionRoutePreview.react", "WorkOnboardingAppLoadingRoute.react", "WorkOnboardingAppPreview.react", "WorkOnboardingAppPreviewContext", "WorkOnboardingAppStepsContext", "WorkOnboardingTrackingPixels.react", "WorkSignupFlowQPL", "WorkSignupOnboardingAppContext", "WorkWebSignupFlowViewFalcoEvent", "gkx", "goInstanceURI", "goURI", "pushMultiStepContainerWithProps", "react", "setTimeout", "useEffectOnce"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     b = d("react");
//     var i = b.useCallback,
//         j = b.useContext,
//         k = b.useEffect,
//         l = b.useMemo,
//         m = 2e3;

//     function a() {
//         var a = j(c("WorkSignupOnboardingAppContext")).getInitialProps(),
//             b = a.nonce,
//             d = a.nextPath;
//         return h.jsx(c("BaseMultiStepContainer.react"), {
//             disableFocusContainment: !0,
//             children: function (a) {
//                 return b != null && b !== "" ? h.jsx(o, {
//                     pushPage: a,
//                     nonce: b,
//                     nextPath: d
//                 }) : h.jsx(n, {
//                     pushPage: a
//                 })
//             }
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";

//     function n(a) {
//         var b = a.pushPage;
//         return h.jsx(s, {
//             currentStep: 1,
//             totalSteps: 3,
//             phase: "code_verification",
//             children: h.jsx(c("WorkOnboardingAppCodeVerificationRoute.react"), {
//                 onSuccess: function (a) {
//                     c("pushMultiStepContainerWithProps")(o, b, {
//                         nonce: a
//                     })
//                 }
//             })
//         })
//     }
//     n.displayName = n.name + " [from " + f.id + "]";

//     function o(a) {
//         var b = a.pushPage,
//             d = a.nonce,
//             e = a.nextPath;
//         return h.jsx(s, {
//             currentStep: 2,
//             totalSteps: 3,
//             phase: "create_profile",
//             children: h.jsx(c("WorkOnboardingAppCreateProfileRoute.react"), {
//                 nonce: d,
//                 onSuccess: function () {
//                     c("pushMultiStepContainerWithProps")(p, b, {
//                         nonce: d,
//                         nextPath: e
//                     })
//                 }
//             })
//         })
//     }
//     o.displayName = o.name + " [from " + f.id + "]";

//     function p(a) {
//         var b = a.pushPage,
//             d = a.nonce,
//             e = a.nextPath;
//         return h.jsx(s, {
//             currentStep: 3,
//             totalSteps: 3,
//             phase: "create_workplace",
//             children: h.jsx(c("WorkOnboardingAppCreateWorkplaceRoute.react"), {
//                 nonce: d,
//                 onSuccess: function () {
//                     c("pushMultiStepContainerWithProps")(q, b, {
//                         nonce: d,
//                         nextPath: e
//                     })
//                 },
//                 onError: function () {
//                     c("pushMultiStepContainerWithProps")(n, b)
//                 }
//             })
//         })
//     }
//     p.displayName = p.name + " [from " + f.id + "]";

//     function q(a) {
//         var b = a.pushPage,
//             e = a.nonce;
//         a = a.nextPath;
//         var f = c("gkx")("1830232"),
//             g = i(function (a) {
//                 var e = a.canIgnoreNextURI,
//                     g = a.isInProductLobbyUser,
//                     h = a.nextURI;
//                 if (e && !f) {
//                     var i = (a = new(c("URI"))(h).getDomain()) != null ? a : "";
//                     g ? (d("WorkSignupFlowQPL").markSuccess(), c("setTimeout")(function () {
//                         c("goInstanceURI")("/", i)
//                     }, m)) : c("pushMultiStepContainerWithProps")(r, b, {
//                         domain: i
//                     })
//                 } else c("setTimeout")(function () {
//                     c("goURI")(h)
//                 }, m)
//             }, [f, b]);
//         return h.jsxs(s, {
//             currentStep: null,
//             totalSteps: null,
//             phase: "loading",
//             children: [h.jsx(c("WorkOnboardingAppLoadingRoute.react"), {
//                 nonce: e,
//                 nextPath: a,
//                 onFinish: g,
//                 onError: function () {
//                     c("pushMultiStepContainerWithProps")(n, b)
//                 }
//             }), h.jsx(c("WorkOnboardingTrackingPixels.react"), {})]
//         })
//     }
//     q.displayName = q.name + " [from " + f.id + "]";

//     function r(a) {
//         var b = a.domain;
//         return h.jsx(s, {
//             currentStep: null,
//             totalSteps: null,
//             phase: "first_action",
//             preview: h.jsx(c("WorkOnboardingAppFirstActionRoutePreview.react"), {}),
//             children: h.jsx(c("WorkOnboardingAppFirstActionRoute.react"), {
//                 onFinish: function (a) {
//                     d("WorkSignupFlowQPL").markSuccess(), c("goInstanceURI")(a, b)
//                 }
//             })
//         })
//     }
//     r.displayName = r.name + " [from " + f.id + "]";

//     function s(a) {
//         var b = a.currentStep,
//             e = a.totalSteps,
//             f = a.phase,
//             g = a.preview;
//         a = a.children;
//         var i = j(d("WorkOnboardingAppStepsContext").Context);
//         i[0];
//         var m = i[1];
//         i = j(c("WorkSignupOnboardingAppContext")).getInitialProps();
//         var n = i.email,
//             o = i.workPackage;
//         k(function () {
//             m({
//                 current: b,
//                 total: e
//             })
//         }, [b, e, m]);
//         var p = l(function () {
//             return h.jsx(c("WorkOnboardingAppPreview.react"), {})
//         }, []);
//         i = j(d("WorkOnboardingAppPreviewContext").Context);
//         i[0];
//         var q = i[1];
//         c("useEffectOnce")(function () {
//             var a;
//             q((a = g) != null ? a : p)
//         });
//         k(function () {
//             d("WorkSignupFlowQPL").maybeMarkStart(o), d("WorkSignupFlowQPL").addPoint("phase_change", f), c("WorkWebSignupFlowViewFalcoEvent").log(function () {
//                 return {
//                     flow: "company_creation",
//                     phase: f,
//                     email: n
//                 }
//             })
//         }, [f, n, o]);
//         return h.jsx(h.Fragment, {
//             children: a
//         })
//     }
//     s.displayName = s.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);

import React, { useCallback, useContext, useEffect, useMemo } from "react";
import BaseMultiStepContainer from "BaseMultiStepContainer.react";
import URI from "URI";
import WorkOnboardingAppCodeVerificationRoute from "WorkOnboardingAppCodeVerificationRoute.react";
import WorkOnboardingAppCreateProfileRoute from "WorkOnboardingAppCreateProfileRoute.react";
import WorkOnboardingAppCreateWorkplaceRoute from "WorkOnboardingAppCreateWorkplaceRoute.react";
import WorkOnboardingAppFirstActionRoute from "WorkOnboardingAppFirstActionRoute.react";
import WorkOnboardingAppFirstActionRoutePreview from "WorkOnboardingAppFirstActionRoutePreview.react";
import WorkOnboardingAppLoadingRoute from "WorkOnboardingAppLoadingRoute.react";
import WorkOnboardingAppPreview from "WorkOnboardingAppPreview.react";
import WorkOnboardingAppPreviewContext from "WorkOnboardingAppPreviewContext";
import WorkOnboardingAppStepsContext from "WorkOnboardingAppStepsContext";
import WorkOnboardingTrackingPixels from "WorkOnboardingTrackingPixels.react";
import WorkSignupFlowQPL from "WorkSignupFlowQPL";
import WorkSignupOnboardingAppContext from "WorkSignupOnboardingAppContext";
import WorkWebSignupFlowViewFalcoEvent from "WorkWebSignupFlowViewFalcoEvent";
import gkx from "gkx";
import goInstanceURI from "goInstanceURI";
import goURI from "goURI";
import pushMultiStepContainerWithProps from "pushMultiStepContainerWithProps";
import { setTimeout } from "setTimeout";
import { useEffectOnce } from "some_library";

const WAIT_TIME = 2000;

function WorkOnboardingAppRouterLHSSwitch() {
    const { getInitialProps } = useContext(WorkSignupOnboardingAppContext);
    const { nonce, nextPath } = getInitialProps();
    
    return (
        <BaseMultiStepContainer disableFocusContainment={true}>
            {(pushPage) =>
                nonce != null && nonce !== "" ? (
                    <CreateProfileStep pushPage={pushPage} nonce={nonce} nextPath={nextPath} />
                ) : (
                    <CodeVerificationStep pushPage={pushPage} />
                )
            }
        </BaseMultiStepContainer>
    );
}
    
WorkOnboardingAppRouterLHSSwitch.displayName = WorkOnboardingAppRouterLHSSwitch [from ${__filename}];
    
export default WorkOnboardingAppRouterLHSSwitch;


function CodeVerificationStep({ pushPage }) {
    return (
      <WorkOnboardingAppSteps
        currentStep={1}
        totalSteps={3}
        phase="code_verification"
      >
        <WorkOnboardingAppCodeVerificationRoute
          onSuccess={(nonce) => {
            pushMultiStepContainerWithProps(CreateProfileStep, pushPage, {
              nonce,
            });
          }}
        />
      </WorkOnboardingAppSteps>
    );
  }
  
  function CreateProfileStep({ pushPage, nonce, nextPath }) {
    return (
      <WorkOnboardingAppSteps
        currentStep={2}
        totalSteps={3}
        phase="create_profile"
      >
        <WorkOnboardingAppCreateProfileRoute
          nonce={nonce}
          onSuccess={() => {
            pushMultiStepContainerWithProps(CreateWorkplaceStep, pushPage, {
              nonce,
              nextPath,
            });
          }}
        />
      </WorkOnboardingAppSteps>
    );
  }
  
  function CreateWorkplaceStep({ pushPage, nonce, nextPath }) {
    return (
      <WorkOnboardingAppSteps
        currentStep={3}
        totalSteps={3}
        phase="create_workplace"
      >
        <WorkOnboardingAppCreateWorkplaceRoute
          nonce={nonce}
          onSuccess={() => {
            pushMultiStepContainerWithProps(PreviewStep, pushPage, {
              nonce,
              nextPath,
            });
          }}
          onError={() => {
            pushMultiStepContainerWithProps(CodeVerificationStep, pushPage);
          }}
        />
      </WorkOnboardingAppSteps>
    );
  }

  const firstActionRoute = (props) => {
    const { domain } = props;
    return (
        <BaseMultiStepContainer
            currentStep={null}
            totalSteps={null}
            phase="first_action"
            preview={<WorkOnboardingAppFirstActionRoutePreview />}
        >
            <WorkOnboardingAppFirstActionRoute onFinish={(next) => {
                WorkSignupFlowQPL.markSuccess();
                goInstanceURI(next, domain);
            }}
            />
        </BaseMultiStepContainer>
    );
};

const PreviewStep = (props) => {
    const { pushPage, nonce, nextPath } = props;
    const isFeatureEnabled = gkx('1830232');

    const handleFinish = useCallback((data) => {
        const { canIgnoreNextURI, isInProductLobbyUser, nextURI } = data;
        const domain = new URI(nextURI).getDomain() || '';
        if (canIgnoreNextURI && !isFeatureEnabled) {
            if (isInProductLobbyUser) {
                WorkSignupFlowQPL.markSuccess();
                setTimeout(() => goInstanceURI('/', domain), WAIT_TIME);
            } else {
                pushMultiStepContainerWithProps(firstActionRoute, pushPage, { domain });
            }
        } else {
            setTimeout(() => goURI(nextURI), WAIT_TIME);
        }
    }, [isFeatureEnabled, pushPage]);
``
    const handleError = useCallback(() => {
        pushMultiStepContainerWithProps(CodeVerificationStep, pushPage);
    }, [pushPage]);

    return (
        <WorkOnboardingAppSteps
            currentStep={null}
            totalSteps={null}
            phase="loading"
        >
            <WorkOnboardingAppLoadingRoute nonce={nonce} nextPath={nextPath} onFinish={handleFinish} onError={handleError} />
            <WorkOnboardingTrackingPixels />
        </WorkOnboardingAppSteps>
    );
};


const WorkOnboardingAppSteps = ({
    currentStep,
    totalSteps,
    phase,
    preview,
    children
  }) => {
    const [, setSteps] = useContext(WorkOnboardingAppStepsContext);
    const { email, workPackage } = useContext(WorkSignupOnboardingAppContext).getInitialProps();
  
    useEffect(() => {
      setSteps({ current: currentStep, total: totalSteps });
    }, [currentStep, totalSteps, setSteps]);
  
    const previewComponent = useMemo(() => {
      return <WorkOnboardingAppPreview />;
    }, []);
  
    const [, setPreview] = useContext(WorkOnboardingAppPreviewContext);
    useEffectOnce(() => {
      setPreview(preview || previewComponent);
    });
  
    useEffect(() => {
      WorkSignupFlowQPL.maybeMarkStart(workPackage);
      WorkSignupFlowQPL.addPoint("phase_change", phase);
      WorkWebSignupFlowViewFalcoEvent.log(() => {
        return {
          flow: "company_creation",
          phase: phase,
          email: email
        };
      });
    }, [phase, email, workPackage]);
  
    return <React.Fragment>{children}</React.Fragment>;
  };