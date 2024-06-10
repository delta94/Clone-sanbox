__d(
  "CometSettingsDropdownTrigger.react",
  [
    "fbt",
    "ActorTypes$FbtEnum",
    "ActorTypesKeys",
    "BaseToasterStateManager",
    "ChevronDownFilled16IconSvg.react",
    "CometCircleButton.react",
    "CometContextualLayerAnchorRoot.react",
    "CometProfilePhoto.react",
    "CometProfilePlusAdminEducationStrings",
    "CometRelay",
    "CometRouteParams",
    "CometSettingsDropdownTriggerQuery.graphql",
    "CometSwitcherGating",
    "FDSIcon.react",
    "TetraProfilePhoto.react",
    "TetraText.react",
    "TriangleDownFilled20IconSvg.react",
    "UserCategoryWithAdminsOrLimitedAccessRoles",
    "WebStorage",
    "cometPushToast",
    "cr:3923", // CometProfileSwitchedToastDeferred
    "getJSEnumSafe",
    "mergeRefs",
    "previousProfileIdForToastSessionStorage",
    "promiseDone",
    "react",
    "useCometCalloutNUX",
    "useCometProfileChangeCallout",
    "useCometPromptProfileSwitcherEducation",
    "useCometSettingsDropdownTriggerNUXTours.react",
    "useEndCometNUXTour",
    "useFDSCallout",
    "useFXSwitcherSwitchedSuccessLogger",
    "useProfileCometSOAPWelcomeDialog",
    "useTopMostRouteCometEntityKey",
    "useTopNavigationLogging",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = k || (k = d("react"));
    e = k;
    var m = e.useCallback,
      n = e.useEffect,
      o = e.useMemo,
      p = e.useState,
      q = {
        personalProfilePageAdminSwitcherTooltip: {
          maxWidth: "xw5ewwj",
          $$css: !0,
        },
        tooltip: { maxWidth: "x256u9z", $$css: !0 },
      },
      r = {
        align: "end",
        arrowStyle: "edge",
        position: "below",
        type: "accent",
        xstyle: q.tooltip,
      },
      s = h._("Your profile"),
      t = h._("Switch profile tip"),
      u = "8150",
      v = "8191",
      w = "8189",
      aa = "9348",
      ba =
        i !== void 0 ? i : (i = b("CometSettingsDropdownTriggerQuery.graphql"));
    e = l.forwardRef(a);
    function a(a, e) {
      var f = a.isExpanded,
        g = a.onHoverIn,
        i = a.onHoverOut,
        k = a.onPress,
        x = a.onPressIn,
        y = a.profilePictureUri,
        z = a.size,
        A = a.testid;
      A = a.type;
      var B = d("CometRelay").useRelayEnvironment();
      a = p("");
      var C = a[0],
        ca = a[1];
      a = p(c("ActorTypesKeys").PROFILE);
      var D = a[0],
        da = a[1];
      a = p(!1);
      var E = a[0],
        F = a[1];
      a = p(!1);
      var G = a[0],
        H = a[1];
      a = p(!1);
      var ea = a[0],
        I = a[1];
      a = p(!1);
      var J = a[0],
        K = a[1];
      a = p(!1);
      var L = a[0],
        M = a[1];
      a = p(!1);
      var fa = a[0],
        ga = a[1];
      a = p(!1);
      var N = a[0],
        ha = a[1];
      n(
        function () {
          if (N) return;
          var a = function () {
            N || ga(!0);
          };
          window.addEventListener(
            d("CometProfilePlusAdminEducationStrings")
              .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
            a
          );
          return function () {
            window.removeEventListener(
              d("CometProfilePlusAdminEducationStrings")
                .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
              a
            );
          };
        },
        [N]
      );
      a = c("useTopMostRouteCometEntityKey")();
      var O =
        (a == null ? void 0 : a.entity_type) === "profile" &&
        (a == null ? void 0 : a.section) === "timeline";
      a =
        (a == null ? void 0 : a.entity_type) === "pages" &&
        ((a == null ? void 0 : a.section) === "your_pages" ||
          (a == null ? void 0 : a.section) === "your_pages_original");
      var P = d("CometRouteParams").useRouteParams();
      P =
        (P == null ? void 0 : P.show_switched_tooltip) != null &&
        ((P == null ? void 0 : P.show_switched_tooltip) === 1 ||
          (P == null ? void 0 : P.show_switched_tooltip) === "1" ||
          (P == null ? void 0 : P.show_switched_tooltip) === !0 ||
          (P == null ? void 0 : P.show_switched_tooltip) === "true");
      n(
        function () {
          c("promiseDone")(
            d("CometRelay")
              .fetchQuery(B, ba, {
                coreAppAdminProfileSwitcherNuxId: +w,
                pageManagementNuxId: +v,
                profileSwitcherAdminEducationNuxId: +aa,
                profileSwitcherNuxId: +u,
                showNewToast: !0,
              })
              .toPromise()
              .then(function (a) {
                var b, d, e, f, g;
                b =
                  (a == null
                    ? void 0
                    : (b = a.viewer) == null
                    ? void 0
                    : (b = b.actor) == null
                    ? void 0
                    : (b = b.profile_switcher_eligible_profiles) == null
                    ? void 0
                    : b.count) || 0;
                d =
                  (a == null
                    ? void 0
                    : (d = a.page_management_nux) == null
                    ? void 0
                    : d.should_show) === !0 && b > 0;
                e =
                  (a == null
                    ? void 0
                    : (e = a.profile_switcher_nux) == null
                    ? void 0
                    : e.should_show) === !0 && b > 0;
                b = c("getJSEnumSafe")(
                  c("UserCategoryWithAdminsOrLimitedAccessRoles"),
                  a == null
                    ? void 0
                    : (b = a.viewer) == null
                    ? void 0
                    : (b = b.actor) == null
                    ? void 0
                    : b.user_category_with_admins_or_limited_access_roles
                );
                f =
                  (a == null
                    ? void 0
                    : (f = a.core_app_admin_profile_switcher_nux) == null
                    ? void 0
                    : f.should_show) === !0 &&
                  b === "can_have_admin_and_limited_access_roles";
                b =
                  (a == null
                    ? void 0
                    : (b = a.viewer) == null
                    ? void 0
                    : (b = b.actor) == null
                    ? void 0
                    : b.should_show_soap_onboarding_dialog) === !0;
                ca(
                  (g =
                    a == null
                      ? void 0
                      : (g = a.viewer) == null
                      ? void 0
                      : (g = g.actor) == null
                      ? void 0
                      : g.name) != null
                    ? g
                    : ""
                );
                da(
                  (a == null
                    ? void 0
                    : (g = a.viewer) == null
                    ? void 0
                    : (g = g.actor) == null
                    ? void 0
                    : g.is_additional_profile_plus) === !0
                    ? c("ActorTypesKeys").PAGE
                    : c("ActorTypesKeys").PROFILE
                );
                F(e);
                H(d);
                I(f);
                K(b);
                ia(a);
              })
          );
        },
        [O, B, P]
      );
      var Q = c("useProfileCometSOAPWelcomeDialog")();
      n(
        function () {
          J &&
            Q(function () {
              M(!0), K(!1);
            });
        },
        [C, J, Q]
      );
      O = c("useFDSCallout")(
        o(function () {
          return babelHelpers["extends"]({}, r, {
            "aria-label": t,
            content: h._(
              "Tap to see your new profile or switch to another profile."
            ),
          });
        }, []),
        L
      );
      var R = O.anchorRef,
        S = c("useCometCalloutNUX")(
          u,
          o(function () {
            return babelHelpers["extends"]({}, r, {
              "aria-label": t,
              content: h._(
                "A Page you manage was updated. Click here to switch to your Page."
              ),
            });
          }, []),
          E
        ),
        T = c("useCometCalloutNUX")(
          v,
          o(function () {
            return babelHelpers["extends"]({}, r, {
              "aria-label": t,
              content: h._("Switch to your updated Page"),
            });
          }, []),
          a && G
        ),
        U = c("useFXSwitcherSwitchedSuccessLogger")(),
        ia = m(
          function (a) {
            var e, f;
            e =
              a == null
                ? void 0
                : (e = a.viewer) == null
                ? void 0
                : (e = e.actor) == null
                ? void 0
                : e.name;
            f =
              a == null
                ? void 0
                : (f = a.viewer) == null
                ? void 0
                : (f = f.actor) == null
                ? void 0
                : (f = f.profile_picture) == null
                ? void 0
                : f.uri;
            var g = (j || (j = c("WebStorage"))).getSessionStorage(),
              i = c("previousProfileIdForToastSessionStorage").get();
            if (e != null && i != null) {
              (g == null
                ? void 0
                : g.getItem("did_profile_switch_come_from_switcher")) === "1" &&
                U({ switch_type: "intra_app" });
              if (b("cr:3923") && a)
                var k = c("BaseToasterStateManager").getInstance(),
                  m = k.push(
                    l.jsx(b("cr:3923"), {
                      onDismiss: function () {
                        k.expire(m);
                      },
                      previousProfileID: i,
                      query: a,
                    }),
                    5e3
                  );
              else {
                i =
                  f != null
                    ? l.jsx(c("TetraProfilePhoto.react"), {
                        shape: "circle",
                        size: 32,
                        source: { uri: f },
                      })
                    : null;
                d("cometPushToast").cometPushToast(
                  {
                    icon: i,
                    message: h._("Switched into ", [
                      h._param(
                        "profile name",
                        l.jsx(c("TetraText.react"), {
                          type: "headlineEmphasized4",
                          children: e,
                        })
                      ),
                    ]),
                  },
                  5e3
                );
              }
              c("previousProfileIdForToastSessionStorage").remove();
              g == null
                ? void 0
                : g.removeItem("did_profile_switch_come_from_switcher");
            }
          },
          [U]
        ),
        V = c("useCometCalloutNUX")(
          w,
          o(
            function () {
              return babelHelpers["extends"]({}, r, {
                "aria-label": t,
                content:
                  ((P = h._enum(D, c("ActorTypes$FbtEnum"))),
                  h._("__JHASH__XrvIqubxcIN__JHASH__", [
                    //{"PAGE":"You've switched into {=m1}'s Page. You can switch back to your profile anytime.","PROFILE":"You've switched into {=m1}'s Profile. You can switch back to your profile anytime."}
                    P,
                    h._implicitParam(
                      "=m1",
                      l.jsx("span", {
                        className: "x117nqv4",
                        children: h._("__JHASH__B_CQfx-9oXJ__JHASH__", [
                          //{"PAGE":"{profile_name}","PROFILE":"{profile_name}"}
                          P,
                          h._param("profile_name", C),
                        ]),
                      })
                    ),
                  ])),
              });
            },
            [C, D]
          ),
          ea
        ),
        W = c("useCometCalloutNUX")(
          d("CometProfilePlusAdminEducationStrings")
            .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID,
          o(function () {
            return babelHelpers["extends"]({}, r, {
              "aria-label": t,
              content: h._(
                "Welcome! You can switch between your Page and profile here."
              ),
              disableOutsideClick: !0,
              onClose: function () {
                ha(!0);
              },
              xstyle: q.personalProfilePageAdminSwitcherTooltip,
            });
          }, []),
          fa
        );
      L = d("useTopNavigationLogging").useSettingsButtonLoggingCallbacks();
      var X = L[0],
        Y = L[1];
      O = c("useCometPromptProfileSwitcherEducation")();
      var Z = O.hideCallout,
        $ = c("useEndCometNUXTour")();
      E = m(
        function (a) {
          k && k(a), F(!1), H(!1), I(!1), M(!1), X(), Z(), $();
        },
        [k, X, Z, $]
      );
      var ja = c("useCometProfileChangeCallout")(),
        ka = c("useCometSettingsDropdownTriggerNUXTours.react")({
          profileName: C,
        });
      a = o(
        function () {
          return c("mergeRefs")(R, V, T, S, W, e, Y, ja, ka);
        },
        [R, V, T, S, W, e, Y, ja, ka]
      );
      G = d("CometSwitcherGating").shouldShowProfileSwitcherDropdownArrow();
      if (y != null)
        return l.jsx(c("CometContextualLayerAnchorRoot.react"), {
          children: l.jsx(c("CometProfilePhoto.react"), {
            addOn: G
              ? {
                  backgroundColor: "var(--secondary-button-background)",
                  icon: l.jsx(c("FDSIcon.react"), {
                    color: "primary",
                    icon: c("ChevronDownFilled16IconSvg.react"),
                    size: 12,
                  }),
                  size: 28,
                  type: "activityBadge",
                }
              : void 0,
            alt: s,
            "aria-expanded": f,
            "aria-label": s,
            onHoverIn: g,
            onHoverOut: i,
            onPress: E,
            onPressIn: x,
            ref: a,
            size: z,
            source: { uri: y },
            testid: void 0,
          }),
        });
      else
        return l.jsx(c("CometContextualLayerAnchorRoot.react"), {
          children: l.jsx(c("CometCircleButton.react"), {
            "aria-expanded": f,
            icon: c("TriangleDownFilled20IconSvg.react"),
            label: s,
            onHoverIn: g,
            onHoverOut: i,
            onPress: E,
            onPressIn: x,
            ref: a,
            size: z,
            testid: void 0,
            type: A,
          }),
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a;
  },
  226
);

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  forwardRef,
} from "react";
import { fbt } from "fb-localize";
import * as ActorTypes$FbtEnum from "ActorTypes$FbtEnum";
import * as ActorTypesKeys from "ActorTypesKeys";
import BaseToasterStateManager from "BaseToasterStateManager";
import ChevronDownFilled16IconSvg from "ChevronDownFilled16IconSvg.react";
import CometCircleButton from "CometCircleButton.react";
import CometContextualLayerAnchorRoot from "CometContextualLayerAnchorRoot.react";
import CometProfilePhoto from "CometProfilePhoto.react";
import * as CometProfilePlusAdminEducationStrings from "CometProfilePlusAdminEducationStrings";
import { fetchQuery, useRelayEnvironment } from "CometRelay";
import { useRouteParams } from "CometRouteParams";
import CometSettingsDropdownTriggerQuery from "CometSettingsDropdownTriggerQuery.graphql";
import CometSwitcherGating from "CometSwitcherGating";
import FDSIcon from "FDSIcon.react";
import TetraProfilePhoto from "TetraProfilePhoto.react";
import TetraText from "TetraText.react";
import TriangleDownFilled20IconSvg from "TriangleDownFilled20IconSvg.react";
import * as UserCategoryWithAdminsOrLimitedAccessRoles from "UserCategoryWithAdminsOrLimitedAccessRoles";
import WebStorage from "WebStorage";
import { cometPushToast } from "cometPushToast";
import CometProfileSwitchedToastDeferred from "cr:3923";
import getJSEnumSafe from "getJSEnumSafe";
import mergeRefs from "mergeRefs";
import previousProfileIdForToastSessionStorage from "previousProfileIdForToastSessionStorage";
import promiseDone from "promiseDone";
import useCometCalloutNUX from "useCometCalloutNUX";
import useCometProfileChangeCallout from "useCometProfileChangeCallout";
import useCometPromptProfileSwitcherEducation from "useCometPromptProfileSwitcherEducation";
import useCometSettingsDropdownTriggerNUXTours from "useCometSettingsDropdownTriggerNUXTours.react";
import useEndCometNUXTour from "useEndCometNUXTour";
import useFDSCallout from "useFDSCallout";
import useFXSwitcherSwitchedSuccessLogger from "useFXSwitcherSwitchedSuccessLogger";
import useProfileCometSOAPWelcomeDialog from "useProfileCometSOAPWelcomeDialog";
import useTopMostRouteCometEntityKey from "useTopMostRouteCometEntityKey";
import { useSettingsButtonLoggingCallbacks } from "useTopNavigationLogging";

const personalProfilePageAdminSwitcherTooltip = {
  maxWidth: "xw5ewwj",
  $$css: true,
};

const tooltip = { maxWidth: "x256u9z", $$css: true };

const styles = {
  personalProfilePageAdminSwitcherTooltip,
  tooltip,
};

const defaultTooltipOptions = {
  align: "end",
  arrowStyle: "edge",
  position: "below",
  type: "accent",
  xstyle: styles.tooltip,
};

const yourProfileString = fbt._("Your profile");
const switchProfileTipString = fbt._("Switch profile tip");

const PROFILE_SWITCHER_NUX_ID = "8150";
const PAGE_MANAGEMENT_NUX_ID = "8191";
const CORE_APP_ADMIN_PROFILE_SWITCHER_NUX_ID = "8189";
const PROFILE_SWITCHER_ADMIN_EDUCATION_NUX_ID = "9348";

const CometSettingsDropdownTrigger = forwardRef<
  HTMLElement,
  CometSettingsDropdownTriggerProps
>(
  (
    {
      isExpanded,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressIn,
      profilePictureUri,
      size,
      testid,
      type,
    },
    ref
  ) => {
    const relayEnvironment = useRelayEnvironment();
    const [profileName, setProfileName] = useState("");
    const [actorType, setActorType] = useState(ActorTypesKeys.PROFILE);
    const [showProfileSwitcherNUX, setShowProfileSwitcherNUX] = useState(false);
    const [showPageManagementNUX, setShowPageManagementNUX] = useState(false);
    const [
      showCoreAppAdminProfileSwitcherNUX,
      setShowCoreAppAdminProfileSwitcherNUX,
    ] = useState(false);
    const [
      showProfileSOAPOnboardingDialog,
      setShowProfileSOAPOnboardingDialog,
    ] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [hasClosedProfileSwitcher, setHasClosedProfileSwitcher] =
      useState(false);
    const [
      isInitialProfileSwitcherEducationClosed,
      setIsInitialProfileSwitcherEducationClosed,
    ] = useState(false);

    useEffect(() => {
      if (isInitialProfileSwitcherEducationClosed) return;
      const handleClosedProfileSwitcherEvent = () => {
        if (!isInitialProfileSwitcherEducationClosed) {
          setHasClosedProfileSwitcher(true);
        }
      };
      window.addEventListener(
        CometProfilePlusAdminEducationStrings.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
        handleClosedProfileSwitcherEvent
      );
      return () => {
        window.removeEventListener(
          CometProfilePlusAdminEducationStrings.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
          handleClosedProfileSwitcherEvent
        );
      };
    }, [isInitialProfileSwitcherEducationClosed]);

    const topMostRouteCometEntityKey = useTopMostRouteCometEntityKey();
    const isOnPersonalProfileTimeline =
      topMostRouteCometEntityKey?.entity_type === "profile" &&
      topMostRouteCometEntityKey?.section === "timeline";
    const isOnPagesTab =
      topMostRouteCometEntityKey?.entity_type === "pages" &&
      (topMostRouteCometEntityKey?.section === "your_pages" ||
        topMostRouteCometEntityKey?.section === "your_pages_original");
    const routeParams = useRouteParams();
    const shouldShowSwitchedTooltip =
      routeParams?.show_switched_tooltip != null &&
      (routeParams?.show_switched_tooltip === 1 ||
        routeParams?.show_switched_tooltip === "1" ||
        routeParams?.show_switched_tooltip === true ||
        routeParams?.show_switched_tooltip === "true");

    useEffect(() => {
      promiseDone(
        fetchQuery<CometSettingsDropdownTriggerQuery>(
          relayEnvironment,
          CometSettingsDropdownTriggerQuery,
          {
            coreAppAdminProfileSwitcherNuxId:
              +CORE_APP_ADMIN_PROFILE_SWITCHER_NUX_ID,
            pageManagementNuxId: +PAGE_MANAGEMENT_NUX_ID,
            profileSwitcherAdminEducationNuxId:
              +PROFILE_SWITCHER_ADMIN_EDUCATION_NUX_ID,
            profileSwitcherNuxId: +PROFILE_SWITCHER_NUX_ID,
            showNewToast: true,
          }
        )
          .toPromise()
          .then((data) => {
            const eligibleProfilesCount =
              data?.viewer?.actor?.profile_switcher_eligible_profiles?.count ||
              0;
            const showPageManagementNUX =
              data?.page_management_nux?.should_show === true &&
              eligibleProfilesCount > 0;
            const showProfileSwitcherNUX =
              data?.profile_switcher_nux?.should_show === true &&
              eligibleProfilesCount > 0;
            const userCategoryWithAdminsOrLimitedAccessRoles = getJSEnumSafe(
              UserCategoryWithAdminsOrLimitedAccessRoles,
              data?.viewer?.actor
                ?.user_category_with_admins_or_limited_access_roles
            );
            const showCoreAppAdminProfileSwitcherNUX =
              data?.core_app_admin_profile_switcher_nux?.should_show === true &&
              userCategoryWithAdminsOrLimitedAccessRoles ===
                "can_have_admin_and_limited_access_roles";
            const showProfileSOAPOnboardingDialog =
              data?.viewer?.actor?.should_show_soap_onboarding_dialog === true;

            setProfileName(data?.viewer?.actor?.name ?? "");
            setActorType(
              data?.viewer?.actor?.is_additional_profile_plus === true
                ? ActorTypesKeys.PAGE
                : ActorTypesKeys.PROFILE
            );
            setShowProfileSwitcherNUX(showProfileSwitcherNUX);
            setShowPageManagementNUX(showPageManagementNUX);
            setShowCoreAppAdminProfileSwitcherNUX(
              showCoreAppAdminProfileSwitcherNUX
            );
            setShowProfileSOAPOnboardingDialog(showProfileSOAPOnboardingDialog);
            onFetchQuerySuccess(data);
          })
      );
    }, [
      isOnPersonalProfileTimeline,
      relayEnvironment,
      shouldShowSwitchedTooltip,
    ]);

    const handleProfileSOAPWelcomeDialog = useProfileCometSOAPWelcomeDialog();
    useEffect(() => {
      if (showProfileSOAPOnboardingDialog) {
        handleProfileSOAPWelcomeDialog(() => {
          setIsShown(true);
          setShowProfileSOAPOnboardingDialog(false);
        });
      }
    }, [showProfileSOAPOnboardingDialog, handleProfileSOAPWelcomeDialog]);

    const fdsCalloutOptions = useFDSCallout(
      useMemo(
        () => ({
          ...defaultTooltipOptions,
          "aria-label": switchProfileTipString,
          content: fbt._(
            "Tap to see your new profile or switch to another profile."
          ),
        }),
        []
      ),
      isShown
    );
    const { anchorRef: fdsAnchorRef } = fdsCalloutOptions;

    const profileSwitcherNUXCalloutOptions = useCometCalloutNUX(
      PROFILE_SWITCHER_NUX_ID,
      useMemo(
        () => ({
          ...defaultTooltipOptions,
          "aria-label": switchProfileTipString,
          content: fbt._(
            "A Page you manage was updated. Click here to switch to your Page."
          ),
        }),
        []
      ),
      showProfileSwitcherNUX
    );

    const pageManagementNUXCalloutOptions = useCometCalloutNUX(
      PAGE_MANAGEMENT_NUX_ID,
      useMemo(
        () => ({
          ...defaultTooltipOptions,
          "aria-label": switchProfileTipString,
          content: fbt._("Switch to your updated Page"),
        }),
        []
      ),
      isOnPagesTab && showPageManagementNUX
    );

    const logFXSwitcherSwitchedSuccess = useFXSwitcherSwitchedSuccessLogger();
    const onFetchQuerySuccess = useCallback(
      (data) => {
        const actorName = data?.viewer?.actor?.name;
        const profilePictureUri = data?.viewer?.actor?.profile_picture?.uri;
        const sessionStorage = WebStorage.getSessionStorage();
        const previousProfileId = previousProfileIdForToastSessionStorage.get();

        if (actorName != null && previousProfileId != null) {
          if (
            sessionStorage?.getItem("did_profile_switch_come_from_switcher") ===
            "1"
          ) {
            logFXSwitcherSwitchedSuccess({ switch_type: "intra_app" });
          }

          if (CometProfileSwitchedToastDeferred && data) {
            const toasterStateManager = BaseToasterStateManager.getInstance();
            const toastKey = toasterStateManager.push(
              <CometProfileSwitchedToastDeferred
                onDismiss={() => toasterStateManager.expire(toastKey)}
                previousProfileID={previousProfileId}
                query={data}
              />,
              5000
            );
          } else {
            const icon =
              profilePictureUri != null ? (
                <TetraProfilePhoto
                  shape="circle"
                  size={32}
                  source={{ uri: profilePictureUri }}
                />
              ) : null;
            cometPushToast(
              {
                icon,
                message: fbt._("Switched into ", [
                  fbt._param(
                    "profile name",
                    <TetraText type="headlineEmphasized4">
                      {actorName}
                    </TetraText>
                  ),
                ]),
              },
              5000
            );
          }
          previousProfileIdForToastSessionStorage.remove();
          sessionStorage?.removeItem("did_profile_switch_come_from_switcher");
        }
      },
      [logFXSwitcherSwitchedSuccess]
    );

    const coreAppAdminProfileSwitcherNUXCalloutOptions = useCometCalloutNUX(
      CORE_APP_ADMIN_PROFILE_SWITCHER_NUX_ID,
      useMemo(
        () => ({
          ...defaultTooltipOptions,
          "aria-label": switchProfileTipString,
          content: fbt._(
            "__JHASH__XrvIqubxcIN__JHASH__",
            [
              fbt._enum(actorType, ActorTypes$FbtEnum),
              fbt._implicitParam(
                "=m1",
                <span className="x117nqv4">
                  {fbt._("__JHASH__B_CQfx-9oXJ__JHASH__", [
                    fbt._enum(actorType, ActorTypes$FbtEnum),
                    fbt._param("profile_name", profileName),
                  ])}
                </span>
              ),
            ]
            /*{
              PAGE: "You've switched into {=m1}'s Page. You can switch back to your profile anytime.",
              PROFILE: "You've switched into {=m1}'s Profile. You can switch back to your profile anytime."
            }*/
          ),
        }),
        [actorType, profileName]
      ),
      showCoreAppAdminProfileSwitcherNUX
    );

    const profilePlusEducationClosedCalloutOptions = useCometCalloutNUX(
      CometProfilePlusAdminEducationStrings.PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID,
      useMemo(
        () => ({
          ...defaultTooltipOptions,
          "aria-label": switchProfileTipString,
          content: fbt._(
            "Welcome! You can switch between your Page and profile here."
          ),
          disableOutsideClick: true,
          onClose: () => setIsInitialProfileSwitcherEducationClosed(true),
          xstyle: styles.personalProfilePageAdminSwitcherTooltip,
        }),
        []
      ),
      hasClosedProfileSwitcher
    );

    const [onHoverInLoggingCallback, onPressLoggingCallback] =
      useSettingsButtonLoggingCallbacks();

    const { hideCallout } = useCometPromptProfileSwitcherEducation();
    const endTour = useEndCometNUXTour();
    const handlePress = useCallback(
      (e) => {
        onPress?.(e);
        setShowProfileSwitcherNUX(false);
        setShowPageManagementNUX(false);
        setShowCoreAppAdminProfileSwitcherNUX(false);
        setIsShown(false);
        onHoverInLoggingCallback();
        hideCallout();
        endTour();
      },
      [onPress, onHoverInLoggingCallback, hideCallout, endTour]
    );

    const handleProfileChangeCallout = useCometProfileChangeCallout();
    const handleSettingsDropdownTriggerNUXTours =
      useCometSettingsDropdownTriggerNUXTours({ profileName });

    const mergedRefs = useMemo(
      () =>
        mergeRefs(
          fdsAnchorRef,
          profileSwitcherNUXCalloutOptions.anchorRef,
          pageManagementNUXCalloutOptions.anchorRef,
          coreAppAdminProfileSwitcherNUXCalloutOptions.anchorRef,
          profilePlusEducationClosedCalloutOptions.anchorRef,
          ref,
          onPressLoggingCallback,
          handleProfileChangeCallout,
          handleSettingsDropdownTriggerNUXTours
        ),
      [
        fdsAnchorRef,
        profileSwitcherNUXCalloutOptions.anchorRef,
        pageManagementNUXCalloutOptions.anchorRef,
        coreAppAdminProfileSwitcherNUXCalloutOptions.anchorRef,
        profilePlusEducationClosedCalloutOptions.anchorRef,
        ref,
        onPressLoggingCallback,
        handleProfileChangeCallout,
        handleSettingsDropdownTriggerNUXTours,
      ]
    );

    const shouldShowProfileSwitcherDropdownArrow =
      CometSwitcherGating.shouldShowProfileSwitcherDropdownArrow();

    if (profilePictureUri != null) {
      return (
        <CometContextualLayerAnchorRoot>
          <CometProfilePhoto
            addOn={
              shouldShowProfileSwitcherDropdownArrow
                ? {
                    backgroundColor: "var(--secondary-button-background)",
                    icon: (
                      <FDSIcon
                        color="primary"
                        icon={ChevronDownFilled16IconSvg}
                        size={12}
                      />
                    ),
                    size: 28,
                    type: "activityBadge",
                  }
                : undefined
            }
            alt={yourProfileString}
            aria-expanded={isExpanded}
            aria-label={yourProfileString}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onPress={handlePress}
            onPressIn={onPressIn}
            ref={mergedRefs}
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
            aria-expanded={isExpanded}
            icon={TriangleDownFilled20IconSvg}
            label={yourProfileString}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onPress={handlePress}
            onPressIn={onPressIn}
            ref={mergedRefs}
            size={size}
            testid={testid}
            type={type}
          />
        </CometContextualLayerAnchorRoot>
      );
    }
  }
);

export default CometSettingsDropdownTrigger;

interface CometSettingsDropdownTriggerProps {
  isExpanded: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  onPress: (e: React.MouseEvent<HTMLElement>) => void;
  onPressIn: () => void;
  profilePictureUri?: string;
  size: number;
  testid?: string;
  type: string;
}

interface CometSettingsDropdownTriggerQuery {
  viewer: {
    actor: {
      is_additional_profile_plus: boolean;
      name: string;
      profile_picture: {
        uri: string;
      };
      profile_switcher_eligible_profiles: {
        count: number;
      };
      should_show_soap_onboarding_dialog: boolean;
      user_category_with_admins_or_limited_access_roles:
        | "can_have_admin_and_limited_access_roles"
        | string;
    };
  };
  core_app_admin_profile_switcher_nux: {
    should_show: boolean;
  };
  page_management_nux: {
    should_show: boolean;
  };
  profile_switcher_nux: {
    should_show: boolean;
  };
}
