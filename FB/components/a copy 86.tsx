__d("CometSettingsDropdownTrigger.react", ["fbt", "ActorTypes$FbtEnum", "ActorTypesKeys", "BaseToasterStateManager", "ChevronDownFilled16IconSvg.react", "CometCircleButton.react", "CometContextualLayerAnchorRoot.react", "CometIcon.react", "CometProfilePhoto.react", "CometProfilePlusAdminEducationStrings", "CometRelay", "CometRouteParams", "CometSettingsDropdownTriggerQuery.graphql", "CometSwitcherGating", "TetraProfilePhoto.react", "TetraText.react", "TriangleDownFilled20IconSvg.react", "UserCategoryWithAdminsOrLimitedAccessRoles", "WebStorage", "cometPushToast", "cr:3923", "getJSEnumSafe", "mergeRefs", "previousProfileIdForToastSessionStorage", "promiseDone", "react", "useCometCallout", "useCometCalloutNUX", "useCometProfileChangeCallout", "useCometPromptProfileSwitcherEducation", "useCometSettingsDropdownTriggerNUXTours.react", "useEndCometNUXTour", "useFXSwitcherSwitchedSuccessLogger", "useProfileCometSOAPWelcomeDialog", "useTopMostRouteCometEntityKey", "useTopNavigationLogging"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k, l = k || (k = d("react"));
    e = k;
    var m = e.useCallback,
        n = e.useEffect,
        o = e.useMemo,
        p = e.useState,
        q = {
            personalProfilePageAdminSwitcherTooltip: {
                maxWidth: "xw5ewwj",
                $$css: !0
            },
            profileName: {
                fontWeight: "x117nqv4",
                $$css: !0
            },
            tooltip: {
                maxWidth: "x256u9z",
                $$css: !0
            }
        },
        r = {
            align: "end",
            arrowStyle: "edge",
            position: "below",
            type: "accent",
            xstyle: q.tooltip
        },
        s = h._("__JHASH__h1XR_i3Axas__JHASH__"),
        t = "8150",
        u = "8191",
        v = "8189",
        aa = "9348",
        ba = i !== void 0 ? i : i = b("CometSettingsDropdownTriggerQuery.graphql"),
        ca = h._("__JHASH__jN3j1k2S9o6__JHASH__"),
        da = h._("__JHASH__fHYmTaH3nh-__JHASH__"),
        ea = h._("__JHASH__ye5j_4B7uia__JHASH__");

    function a(a, e) {
        var f = a.onHoverIn,
            g = a.onHoverOut,
            i = a.onPress,
            k = a.onPressIn,
            w = a.profilePictureUri,
            x = a.size,
            y = a.testid;
        y = a.type;
        var z = d("CometRelay").useRelayEnvironment();
        a = p("");
        var A = a[0], // profileNane
            fa = a[1];
        a = p(c("ActorTypesKeys").PROFILE);
        var B = a[0],
            ga = a[1];
        a = p(!1);
        var C = a[0], // onPress
            D = a[1];
        a = p(!1);
        var E = a[0], // addons
            F = a[1];
        a = p(!1);
        var ha = a[0],
            G = a[1];
        a = p(!1);
        var H = a[0],
            I = a[1];
        a = p(!1);
        var J = a[0],
            K = a[1];
        a = p(!1);
        var ia = a[0],
            ja = a[1];
        a = p(!1);
        var L = a[0],
            ka = a[1];
        n(function () {
            if (L) return;
            var a = function () {
                L || ja(!0)
            };
            window.addEventListener(d("CometProfilePlusAdminEducationStrings").PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME, a);
            return function () {
                window.removeEventListener(d("CometProfilePlusAdminEducationStrings").PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME, a)
            }
        }, [L]);
        a = c("useTopMostRouteCometEntityKey")();
        var M = (a == null ? void 0 : a.entity_type) === "profile" && (a == null ? void 0 : a.section) === "timeline";
        a = (a == null ? void 0 : a.entity_type) === "pages" && ((a == null ? void 0 : a.section) === "your_pages" || (a == null ? void 0 : a.section) === "your_pages_original");
        var N = d("CometRouteParams").useRouteParams();
        N = (N == null ? void 0 : N.show_switched_tooltip) != null && ((N == null ? void 0 : N.show_switched_tooltip) === 1 || (N == null ? void 0 : N.show_switched_tooltip) === "1" || (N == null ? void 0 : N.show_switched_tooltip) === !0 || (N == null ? void 0 : N.show_switched_tooltip) === "true");
        n(function () {
            c("promiseDone")(d("CometRelay").fetchQuery(z, ba, {
                coreAppAdminProfileSwitcherNuxId: +v,
                pageManagementNuxId: +u,
                profileSwitcherAdminEducationNuxId: +aa,
                profileSwitcherNuxId: +t,
                showNewToast: !0
            }).toPromise().then(function (a) {
                var b, d, e, f, g;
                b = (a == null ? void 0 : (b = a.viewer) == null ? void 0 : (b = b.actor) == null ? void 0 : (b = b.profile_switcher_eligible_profiles) == null ? void 0 : b.count) || 0;
                d = (a == null ? void 0 : (d = a.page_management_nux) == null ? void 0 : d.should_show) === !0 && b > 0;
                e = (a == null ? void 0 : (e = a.profile_switcher_nux) == null ? void 0 : e.should_show) === !0 && b > 0;
                b = c("getJSEnumSafe")(c("UserCategoryWithAdminsOrLimitedAccessRoles"), a == null ? void 0 : (b = a.viewer) == null ? void 0 : (b = b.actor) == null ? void 0 : b.user_category_with_admins_or_limited_access_roles);
                f = (a == null ? void 0 : (f = a.core_app_admin_profile_switcher_nux) == null ? void 0 : f.should_show) === !0 && b === "can_have_admin_and_limited_access_roles";
                b = (a == null ? void 0 : (b = a.viewer) == null ? void 0 : (b = b.actor) == null ? void 0 : b.should_show_soap_onboarding_dialog) === !0;
                fa((g = a == null ? void 0 : (g = a.viewer) == null ? void 0 : (g = g.actor) == null ? void 0 : g.name) != null ? g : "");
                ga((a == null ? void 0 : (g = a.viewer) == null ? void 0 : (g = g.actor) == null ? void 0 : g.is_additional_profile_plus) === !0 ? c("ActorTypesKeys").PAGE : c("ActorTypesKeys").PROFILE);
                D(e);
                F(d);
                G(f);
                I(b);
                la(a)
            }))
        }, [M, z, N]);
        var O = c("useProfileCometSOAPWelcomeDialog")();
        n(function () {
            H && O(function () {
                K(!0), I(!1)
            })
        }, [A, H, O]);
        var P = c("useCometCallout")(o(function () {
                return babelHelpers["extends"]({}, r, {
                    label: ea
                })
            }, []), J),
            Q = c("useCometCalloutNUX")(t, o(function () {
                return babelHelpers["extends"]({}, r, {
                    label: ca
                })
            }, []), C),
            R = c("useCometCalloutNUX")(u, o(function () {
                return babelHelpers["extends"]({}, r, {
                    label: da
                })
            }, []), a && E),
            S = c("useFXSwitcherSwitchedSuccessLogger")(),
            la = m(function (a) {
                var e, f;
                e = a == null ? void 0 : (e = a.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : e.name;
                f = a == null ? void 0 : (f = a.viewer) == null ? void 0 : (f = f.actor) == null ? void 0 : (f = f.profile_picture) == null ? void 0 : f.uri;
                var g = (j || (j = c("WebStorage"))).getSessionStorage(),
                    i = c("previousProfileIdForToastSessionStorage").get();
                if (e != null && i != null) {
                    (g == null ? void 0 : g.getItem("did_profile_switch_come_from_switcher")) === "1" && S({
                        switch_type: "intra_app"
                    });
                    if (b("cr:3923") && a) var k = c("BaseToasterStateManager").getInstance(),
                        m = k.push(l.jsx(b("cr:3923"), {
                            onDismiss: function () {
                                k.expire(m)
                            },
                            previousProfileID: i,
                            query: a
                        }), 5e3);
                    else {
                        i = f != null ? l.jsx(c("TetraProfilePhoto.react"), {
                            shape: "circle",
                            size: 32,
                            source: {
                                uri: f
                            }
                        }) : null;
                        d("cometPushToast").cometPushToast({
                            icon: i,
                            message: h._("__JHASH__pj7jBTJLgFB__JHASH__", [h._param("profile name", l.jsx(c("TetraText.react"), {
                                type: "headlineEmphasized4",
                                children: e
                            }))])
                        }, 5e3)
                    }
                    c("previousProfileIdForToastSessionStorage").remove();
                    g == null ? void 0 : g.removeItem("did_profile_switch_come_from_switcher")
                }
            }, [S]),
            T = c("useCometCalloutNUX")(v, o(function () {
                return babelHelpers["extends"]({}, r, {
                    label: (M = h._enum(B, c("ActorTypes$FbtEnum")), h._("__JHASH__XrvIqubxcIN__JHASH__", [M, h._implicitParam("=m1", l.jsx("span", {
                        className: "x117nqv4",
                        children: h._("__JHASH__B_CQfx-9oXJ__JHASH__", [M, h._param("profile_name", A)])
                    }))]))
                })
            }, [A, B]), ha),
            U = c("useCometCalloutNUX")(d("CometProfilePlusAdminEducationStrings").PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID, o(function () {
                return babelHelpers["extends"]({}, r, {
                    disableOutsideClick: !0,
                    label: h._("__JHASH__z6AakHEMB8t__JHASH__"),
                    onClose: function () {
                        ka(!0)
                    },
                    xstyle: q.personalProfilePageAdminSwitcherTooltip
                })
            }, []), ia);
        N = d("useTopNavigationLogging").useSettingsButtonLoggingCallbacks();
        var V = N[0],
            W = N[1];
        J = c("useCometPromptProfileSwitcherEducation")();
        var X = J.hideCallout,
            Y = c("useEndCometNUXTour")();
        C = m(function (a) {
            i && i(a), D(!1), F(!1), G(!1), K(!1), V(), X(), Y()
        }, [i, V, X, Y]);
        var Z = c("useCometProfileChangeCallout")(),
            $ = c("useCometSettingsDropdownTriggerNUXTours.react")({
                profileName: A
            });
        a = o(function () {
            return c("mergeRefs")(P, T, R, Q, U, e, W, Z, $)
        }, [P, T, R, Q, U, e, W, Z, $]);
        E = d("CometSwitcherGating").shouldShowProfileSwitcherDropdownArrow();
        if (w != null) return l.jsx(c("CometContextualLayerAnchorRoot.react"), {
            children: l.jsx(c("CometProfilePhoto.react"), {
                addOn: E ? {
                    backgroundColor: "var(--secondary-button-background)",
                    icon: l.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: c("ChevronDownFilled16IconSvg.react"),
                        size: 12
                    }),
                    size: 28,
                    type: "activityBadge"
                } : void 0,
                alt: s,
                onHoverIn: f,
                onHoverOut: g,
                onPress: C,
                onPressIn: k,
                ref: a,
                size: x,
                source: {
                    uri: w
                },
                testid: void 0
            })
        });
        else return l.jsx(c("CometContextualLayerAnchorRoot.react"), {
            children: l.jsx(c("CometCircleButton.react"), {
                icon: c("TriangleDownFilled20IconSvg.react"),
                label: s,
                onHoverIn: f,
                onHoverOut: g,
                onPress: C,
                onPressIn: k,
                ref: a,
                size: x,
                testid: void 0,
                type: y
            })
        })
    }
    f = l.forwardRef(a);
    g["default"] = f
}), 98);




import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronDownFilled16Icon } from './ChevronDownFilled16IconSvg.react';
import { TriangleDownFilled20Icon } from './TriangleDownFilled20IconSvg.react';
import { CometCircleButton } from './CometCircleButton.react';
import { CometContextualLayerAnchorRoot } from './CometContextualLayerAnchorRoot.react';
import { CometIcon } from './CometIcon.react';
import { CometProfilePhoto } from './CometProfilePhoto.react';
import { CometRelayEnvironment } from 'CometRelay';
import { useRouteParams } from './CometRouteParams';  
import { graphql } from './CometSettingsDropdownTriggerQuery.graphql';
import { shouldShowProfileSwitcherDropdownArrow } from './CometSwitcherGating';
import { TetraProfilePhoto } from './TetraProfilePhoto.react';
import { TetraText } from './TetraText.react';
import { BaseToasterStateManager } from './BaseToasterStateManager';
import { ActorTypesKeys, getJSEnumSafe } from './ActorTypesKeys';
import { UserCategoryWithAdminsOrLimitedAccessRoles } from './UserCategoryWithAdminsOrLimitedAccessRoles';
import { WebStorage } from './WebStorage';
import { cometPushToast } from './cometPushToast';
import { previousProfileIdForToastSessionStorage } from './previousProfileIdForToastSessionStorage';
import { promiseDone } from './promiseDone';  
import { mergeRefs } from './mergeRefs';
import { useCometCallout } from './useCometCallout';
import { useCometCalloutNUX } from './useCometCalloutNUX';
import { useCometProfileChangeCallout } from './useCometProfileChangeCallout';
import { useCometPromptProfileSwitcherEducation } from './useCometPromptProfileSwitcherEducation';
import { useCometSettingsDropdownTriggerNUXTours } from './useCometSettingsDropdownTriggerNUXTours.react';
import { useEndCometNUXTour } from './useEndCometNUXTour';
import { useFXSwitcherSwitchedSuccessLogger } from './useFXSwitcherSwitchedSuccessLogger';
import { useProfileCometSOAPWelcomeDialog } from './useProfileCometSOAPWelcomeDialog';
import { useTopMostRouteCometEntityKey } from './useTopMostRouteCometEntityKey';
import { useTopNavigationLogging } from './useTopNavigationLogging';
import { CometSettingsDropdownTriggerQuery } from 'CometSettingsDropdownTriggerQuery';
import { CometRelay } from 'CometRelay';
import fbt from "fbt";
import ActorTypes$FbtEnum from "ActorTypes$FbtEnum"
import CometProfileSwitchedToastDeferred from "CometProfileSwitchedToastDeferred"
import type { CometSettingsDropdownTriggerQueryResponse } from './CometSettingsDropdownTriggerQuery.graphql';

interface Props {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onPress?: () => void;
  onPressIn?: () => void;
  profilePictureUri?: string;
  size?: number;
  testid?: string;
  type?: string;
}

interface CalloutConfig {
    align: string;
    arrowStyle: string;
    position: string;
    type: string;
    xstyle: any; 
}

const styles = {
    personalProfilePageAdminSwitcherTooltip: {
      maxWidth: 'xw5ewwj',
      $$css: true
    },
    profileName: {
      fontWeight: 'x117nqv4',
      $$css: true
    },
    tooltip: {  
      maxWidth: 'x256u9z',  
      $$css: true
    }
};

const defaultCalloutConfig: CalloutConfig = {
    align: 'end',
    arrowStyle: 'edge',
    position: 'below',
    type: 'accent',
    xstyle: styles.tooltip
};

const PROFILE_PHOTO_ALT = "Your profile";

const PROFILE_SWITCHER_NUX_ID = '8150';

const PAGE_MANAGEMENT_NUX_ID = '8191';

const PROFILE_SWITCHER_ADMIN_EDUCATION_NUX_ID = '8189'; 

const CORE_APP_ADMIN_PROFILE_SWITCHER_NUX_ID = '9348';

const graphqlQuery = CometSettingsDropdownTriggerQuery;
  
const PROFILE_SWITCHER_NUX_LABEL = "A Page you manage was updated. Click here to switch to your Page.";

const PAGE_MANAGEMENT_NUX_LABEL = "Switch to your updated Page";

const PROFILE_BUTTON_LABEL = "Tap to see your new profile or switch to another profile."

const CometSettingsDropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  Props
>((props, ref) => {
  const {
    onHoverIn,
    onHoverOut,
    onPress,
    onPressIn,
    profilePictureUri,
    size,
    testid,
    type,
  } = props;

  const environment = CometRelay.useCometRelayEnvironment();

  const [profileName, setProfileName] = useState('');
  const [profileType, setProfileType] = useState(ActorTypesKeys.PROFILE);
  const [showProfileSwitcherNUX, setShowProfileSwitcherNUX] = useState(false);
  const [showPageManagementNUX, setShowPageManagementNUX] = useState(false);
  const [showCoreAppAdminProfileSwitcherNUX, setShowCoreAppAdminProfileSwitcherNUX] = useState(false);
  const [showSOAPOnboardingDialog, setShowSOAPOnboardingDialog] = useState(false);
  const [showOnboardingClosedProfileSwitcherNUX, setShowOnboardingClosedProfileSwitcherNUX] = useState(false);
  const [showEducationPrompt, setShowEducationPrompt] = useState(false);
  const [showEducationClosedProfileSwitcherNUX, setShowEducationClosedProfileSwitcherNUX] = useState(false);

  useEffect(() => {
    if (showEducationClosedProfileSwitcherNUX) {
      return;
    }

    const handleEducationClosed = () => {
        showEducationClosedProfileSwitcherNUX || setShowEducationPrompt(true);
    };

    window.addEventListener(
      'PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME',
      handleEducationClosed
    );

    return () => {
      window.removeEventListener(
        'PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME',
        handleEducationClosed
      );
    };
  }, [showEducationClosedProfileSwitcherNUX]);

  const topRouteKey = useTopMostRouteCometEntityKey();
  const isOnProfileTimeline =
    topRouteKey?.entity_type === 'profile' && topRouteKey?.section === 'timeline';
  const isOnYourPages =
    topRouteKey?.entity_type === 'pages' &&
    (topRouteKey?.section === 'your_pages' ||
      topRouteKey?.section === 'your_pages_original');

  const routeParams = useRouteParams();
  const showSwitchedTooltip =
    routeParams?.show_switched_tooltip === 1 ||
    routeParams?.show_switched_tooltip === '1' ||
    routeParams?.show_switched_tooltip === true ||
    routeParams?.show_switched_tooltip === 'true';

  useEffect(() => {
    promiseDone(
      CometRelayEnvironment.fetchQuery<CometSettingsDropdownTriggerQueryResponse>(
        environment,
        graphqlQuery,
        {
          coreAppAdminProfileSwitcherNuxId: +CORE_APP_ADMIN_PROFILE_SWITCHER_NUX_ID,
          pageManagementNuxId: +PAGE_MANAGEMENT_NUX_ID,
          profileSwitcherAdminEducationNuxId: +PROFILE_SWITCHER_ADMIN_EDUCATION_NUX_ID, 
          profileSwitcherNuxId: +PROFILE_SWITCHER_NUX_ID,
          showNewToast: true,
        }
      ).toPromise()
    ).then(data => {
      const eligibleProfilesCount =
        data?.viewer?.actor?.profile_switcher_eligible_profiles?.count ?? 0;

      const shouldShowPageManagementNUX =
        data?.page_management_nux?.should_show === true && eligibleProfilesCount > 0;

      const shouldShowProfileSwitcherNUX =
        data?.profile_switcher_nux?.should_show === true && eligibleProfilesCount > 0;

      const userCategory = getJSEnumSafe(
        UserCategoryWithAdminsOrLimitedAccessRoles,
        data?.viewer?.actor?.user_category_with_admins_or_limited_access_roles
      );

      const shouldShowCoreAppAdminProfileSwitcherNUX =
        data?.core_app_admin_profile_switcher_nux?.should_show === true &&
        userCategory === 'can_have_admin_and_limited_access_roles';

      const shouldShowSOAPOnboardingDialog =
        data?.viewer?.actor?.should_show_soap_onboarding_dialog === true;

      setProfileName(data?.viewer?.actor?.name ?? '');
      setProfileType(
        data?.viewer?.actor?.is_additional_profile_plus === true
          ? ActorTypesKeys.PAGE
          : ActorTypesKeys.PROFILE
      );
      setShowProfileSwitcherNUX(shouldShowProfileSwitcherNUX);
      setShowPageManagementNUX(shouldShowPageManagementNUX);
      setShowCoreAppAdminProfileSwitcherNUX(
        shouldShowCoreAppAdminProfileSwitcherNUX
      );
      setShowSOAPOnboardingDialog(shouldShowSOAPOnboardingDialog);

      handleSwitchedTooltip(data);
    })
  }, [isOnProfileTimeline, environment, showSwitchedTooltip]);

  const soapOnboardingDialog = useProfileCometSOAPWelcomeDialog();

  useEffect(() => {
    if (showSOAPOnboardingDialog) {
      soapOnboardingDialog(() => {
        setShowOnboardingClosedProfileSwitcherNUX(true);
        setShowSOAPOnboardingDialog(false);
      });
    }
  }, [profileName, showSOAPOnboardingDialog, soapOnboardingDialog]);
  // ...other state hooks


  const profileButtonCallout = useCometCallout(useMemo(() => ({
    ...defaultCalloutConfig,
    label: "Tap to see your new profile or switch to another profile."
   }), []), showOnboardingClosedProfileSwitcherNUX);

  const profileSwitcherNUXCallout = useCometCalloutNUX(PROFILE_SWITCHER_NUX_ID, useMemo(() => ({
   ...defaultCalloutConfig,
   label: "A Page you manage was updated. Click here to switch to your Page."
  }), []), showProfileSwitcherNUX);

  const pageManagementNUXCallout = useCometCalloutNUX(PAGE_MANAGEMENT_NUX_ID, useMemo(() => ({
   ...defaultCalloutConfig,
   label: "Switch to your updated Page"
  }), []), showPageManagementNUX && isOnYourPages);


  const switchedTooltipLogger = useFXSwitcherSwitchedSuccessLogger();

  const handleSwitchedTooltip = useCallback((data: CometSettingsDropdownTriggerQueryResponse | null) => {
    const name = data?.viewer?.actor?.name ?? null;
    
    const profilePicture = data?.viewer?.actor?.profile_picture?.uri ?? null;

    const sessionStorage = WebStorage.getSessionStorage();
    const previousProfileId = previousProfileIdForToastSessionStorage.get();

    if (name != null && previousProfileId != null) {
        sessionStorage?.getItem("did_profile_switch_come_from_switcher") === "1" && switchedTooltipLogger({
            switch_type: "intra_app"
        })

        if(CometProfileSwitchedToastDeferred && data) {
            const toastManager = BaseToasterStateManager.getInstance();

            const toast = toastManager.push(
                <CometProfileSwitchedToastDeferred 
                    onDismiss={() => toastManager.expire(toast)}
                    previousProfileID={previousProfileId}
                    query={data} 
                />
            , 5000)
        } else {
            const icon = profilePicture 
            ? <TetraProfilePhoto size={32} shape="circle" uri={profilePicture} />
            : null;

            cometPushToast.cometPushToast({
                icon,
                message: <TetraText>{profileName}</TetraText>
            }, 5000)
        }

        previousProfileIdForToastSessionStorage.remove();
        sessionStorage?.removeItem('didProfileSwitchFromSwitcher');

    }
  }, [switchedTooltipLogger]);

  const actorTypeEnum = fbt._enum(profileType, ActorTypes$FbtEnum);

  const adminEducationNUX = useCometCalloutNUX(PROFILE_SWITCHER_ADMIN_EDUCATION_NUX_ID, useMemo(() => ({
    ...defaultCalloutConfig,
    label: (
        fbt._("__JHASH__XrvIqubxcIN__JHASH__", [
            actorTypeEnum,
            fbt._implicitParam("=m1", 
              <span className="profileNameClass">
                {fbt._("__JHASH__B_CQfx-9oXJ__JHASH__", [
                  actorTypeEnum,
                  fbt._param("profileName", profileName)  
                ])}
              </span>
            )
        ])  
    )
   }), []), showPageManagementNUX && isOnYourPages);

   const adminTooltip = useCometCalloutNUX(
    CometProfilePlusAdminEducationStrings.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID,
    useMemo(() => {
      return {
        ...defaultCalloutConfig,
        disableOutsideClick: true,
        label: "Welcome! You can switch between your Page and profile here.", 
        onClose: () => {
            setShowEducationClosedProfileSwitcherNUX(true);  
        },
        xstyle: styles.personalProfilePageAdminSwitcherTooltip,
      };
    }, []),
    showEducationPrompt  
  );

  const [onSettingsClick, onSettingsClickEnd] = useTopNavigationLogging.useSettingsButtonLoggingCallbacks();
  const {hideCallout} = useCometPromptProfileSwitcherEducation();
  const endNUXTour = useEndCometNUXTour();


  const onPressHandler = useCallback((event) => {
    onPress && onPress(event);

  
    setShowProfileSwitcherNUX(false);
    setShowPageManagementNUX(false);
    setShowCoreAppAdminProfileSwitcherNUX(false);
    setShowOnboardingClosedProfileSwitcherNUX(false);
    onSettingsClick()
    hideCallout();
    endNUXTour();
  }, [onPress, onPressProfileSwitcherEducation, onEndCometNUXTour]);
  
  const profileChangeCallout = useCometProfileChangeCallout();
  const tours = useCometSettingsDropdownTriggerNUXTours({
    profileName
  });
  
  const rootProps = useMemo(() => {
    return mergeRefs(
      profileSwitcherNUXCallout,
      pageManagementNUXCallout,
      // ...other refs
  
      onPressLogging,
      profileChangeCallout,
      tours
    );
  }, [
    profileSwitcherNUXCallout,
    pageManagementNUXCallout,
  
    // ...other refs
  
    onPressLogging,
    profileChangeCallout,
    tours
  ]);
  
  const showDropdownArrow = shouldShowProfileSwitcherDropdownArrow();
  
  if (profilePictureUri) {
    return (
      <CometContextualLayerAnchorRoot>
        <CometProfilePhoto
          addOn={
            showDropdownArrow ? {
              backgroundColor: 'var(--secondary-button-background)',
              icon: <CometIcon icon={ChevronDownFilled16Icon} size={12} color="primary" />,
              size: 28,
              type: 'activityBadge'
            } : undefined
          }
          alt={PROFILE_PHOTO_ALT}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onPress={onPressHandler}
          onPressIn={onPressIn}
          ref={rootProps}
          size={size}
          source={{ uri: profilePictureUri }}
          testid={testid} 
        />
      </CometContextualLayerAnchorRoot>
    );
  } else {
    return (
      <CometContextualLayerAnchorRoot>
        <CometCircleButton
          icon={TriangleDownFilled20Icon}
          label={PROFILE_BUTTON_LABEL}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onPress={onPressHandler}
          onPressIn={onPressIn}
          ref={rootProps}
          size={size}
          testid={testid}
          type={type}
        />
      </CometContextualLayerAnchorRoot>
    );
  }
  });
  
  export default CometSettingsDropdownTrigger;