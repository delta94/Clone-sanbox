// __d("CometAppLoggedInNavigation.react", ["CometAppNavigationEndSection.react", "CometAppNavigationEndSectionItem.react", "CometAppNavigationTabBarContentWrapper.react", "CometBaseAppNavigation.react", "CometErrorBoundary.react", "CometMediaViewerFullscreenContext", "CometProfilePlusAPPageInboxMessageButton.react", "CometRouterPushViewStackContext", "CometSettingsDropdownTriggerWrapper.react", "CometTopNavLogoWithBackButton.react", "MWJewelDropdownTrigger.react", "ProfilePlusMessaging", "cr:12331", "cr:1266079", "cr:1528736", "cr:2026784", "cr:2351", "getGlobalSearchQueryFromRouterState", "getTopMostRoute", "gkx", "react", "unrecoverableViolation", "useCometNavigationBackButtonConfig", "useCometRouterState", "useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome", "useShouldHideTopNavDueToConsentFlow", "useShouldRenderFullTopNav", "useShouldShowMessagingEntrypointInCometRoot", "withAppLoggedInNavigationSwitcher"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h, i = h || (h = d("react"));
//     d = h;
//     var j = d.useContext,
//         k = d.useState,
//         l = c("gkx")("1890030"),
//         m = (d = c("ProfilePlusMessaging").mailboxID) != null ? d : "",
//         n = c("ProfilePlusMessaging").shouldRedirectMessagesForAP && m !== null,
//         o = i.memo(a);

//     function a() {
//         return n ? i.jsx(c("CometProfilePlusAPPageInboxMessageButton.react"), {
//             mailboxID: m
//         }) : i.jsx(c("MWJewelDropdownTrigger.react"), {})
//     }

//     function p(a) {
//         a = a.profileSwitcherConfig;
//         var d = c("useCometRouterState")();
//         if (d == null) throw c("unrecoverableViolation")("Cannot render comet app with no route provider", "comet_infra");
//         var e = k(!1),
//             f = e[0],
//             g = e[1];
//         e = c("useShouldShowMessagingEntrypointInCometRoot")("JEWEL");
//         var h = d.main.route.tabKey === "home",
//             m = d.main.route.tabKey === "notifications",
//             n = c("getTopMostRoute")(d).tabKey === "friends",
//             p = j(c("CometMediaViewerFullscreenContext")),
//             q = c("useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome")(),
//             r = c("useCometNavigationBackButtonConfig")(),
//             s = r.onPressBackButton,
//             t = r.shouldUseCloseButton;
//         r = r.showBackButton;
//         var u = j(c("CometRouterPushViewStackContext"));
//         u = u != null && u.length > 0;
//         d = (d = c("getGlobalSearchQueryFromRouterState")(d)) != null ? d : "";
//         var v = c("useShouldRenderFullTopNav")(),
//             w = c("useShouldHideTopNavDueToConsentFlow")(),
//             x = function () {
//                 return g(!0)
//             },
//             y = function () {
//                 return g(!1)
//             },
//             z = null;
//         a.hideProfileNavigationLink === !0 && (z = a.profilePictureUriForSettings);
//         return w ? i.jsx(i.Fragment, {}) : i.jsx(c("CometBaseAppNavigation.react"), {
//             endSection: u && p ? void 0 : i.jsxs(c("CometAppNavigationEndSection.react"), {
//                 children: [i.jsx(c("CometAppNavigationEndSectionItem.react"), {
//                     noWrapper: !0,
//                     children: i.jsx(c("CometErrorBoundary.react"), {
//                         children: i.jsx(c("CometSettingsDropdownTriggerWrapper.react"), {
//                             profilePictureUri: z
//                         })
//                     })
//                 }), v && b("cr:1266079") != null ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
//                     children: i.jsx(b("cr:1266079"), {
//                         isNotifications: m
//                     })
//                 }) : null, e ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
//                     children: i.jsx(o, {})
//                 }) : null, v && b("cr:2026784") != null ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
//                     children: i.jsx(b("cr:2026784"), {})
//                 }) : null, b("cr:2351") != null && l ? i.jsx(c("CometAppNavigationEndSectionItem.react"), {
//                     displayNone: u,
//                     widePivotLink: !0,
//                     children: i.jsx(b("cr:2351"), {
//                         isActive: n
//                     })
//                 }) : null]
//             }),
//             searchSection: v && b("cr:1528736") ? i.jsx(b("cr:1528736"), {
//                 handleCloseSearch: y,
//                 handleOpenSearch: x,
//                 initialGlobalSearchQuery: d,
//                 isHome: h,
//                 isSearchOpened: f,
//                 shouldHideGlobalTypeahead: u,
//                 showGlobalTypeaheadExpandedOutsideHome: q
//             }) : null,
//             startButtons: i.jsx(c("CometTopNavLogoWithBackButton.react"), {
//                 logoHidden: f,
//                 logoWithShadow: u,
//                 onPressBackButton: s,
//                 shouldUseCloseButton: t,
//                 showBackButton: r
//             }),
//             tabBar: i.jsx(c("CometAppNavigationTabBarContentWrapper.react"), {
//                 inert: u,
//                 children: i.jsx(b("cr:12331"), {})
//             })
//         })
//     }
//     p.displayName = p.name + " [from " + f.id + "]";
//     var q = c("withAppLoggedInNavigationSwitcher")(p);

//     function e(a) {
//         a = a.profileSwitcherConfigQuery;
//         return a ? i.jsx(q, {
//             profileSwitcherConfigQuery: a
//         }) : i.jsx(p, {
//             profileSwitcherConfig: {
//                 hideProfileNavigationLink: !1,
//                 profilePictureUriForSettings: null
//             }
//         })
//     }
//     e.displayName = e.name + " [from " + f.id + "]";
//     g["default"] = e
// }), 98);


import React, { useContext, useState, memo } from 'react';
import {
  CometAppNavigationEndSection,
  CometAppNavigationEndSectionItem,
  CometAppNavigationTabBarContentWrapper,
  CometBaseAppNavigation,
  CometErrorBoundary,
  CometMediaViewerFullscreenContext,
  CometProfilePlusAPPageInboxMessageButton,
  CometRouterPushViewStackContext,
  CometSettingsDropdownTriggerWrapper,
  CometTopNavLogoWithBackButton,
  MWJewelDropdownTrigger,
  ProfilePlusMessaging,
  useCometNavigationBackButtonConfig,
  useCometRouterState,
  useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome,
  useShouldHideTopNavDueToConsentFlow,
  useShouldRenderFullTopNav,
  useShouldShowMessagingEntrypointInCometRoot,
  withAppLoggedInNavigationSwitcher,
  gkx,
  getGlobalSearchQueryFromRouterState,
  getTopMostRoute,
  unrecoverableViolation,
  CometNotificationsDropdownTrigger,
  CometHomeCreateOrMegaMenuJewel,
  CometAppNavigationTargetedTabBarContent,
  CometAppLoggedInNavigationSearchSection
} from 'module-aliases'; // Replace 'module-aliases' with actual module names

const mailboxID: string | null = ProfilePlusMessaging.mailboxID ?? "";
const shouldRedirectMessagesForAP: boolean = ProfilePlusMessaging.shouldRedirectMessagesForAP && mailboxID !== null;

const MessagingButton = memo(() => {
  return shouldRedirectMessagesForAP ? (
    <CometProfilePlusAPPageInboxMessageButton mailboxID={mailboxID} />
  ) : (
    <MWJewelDropdownTrigger />
  );
});

const NavigationComponent: React.FC<{ profileSwitcherConfig: any }> = ({ profileSwitcherConfig }) => {
  const routerState = useCometRouterState();
  if (routerState == null) throw unrecoverableViolation("Cannot render comet app with no route provider", "comet_infra");

  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const shouldShowMessagingEntrypoint = useShouldShowMessagingEntrypointInCometRoot("JEWEL");
  const isHome = routerState.main.route.tabKey === "home";
  const isNotifications = routerState.main.route.tabKey === "notifications";
  // const isActive = getTopMostRoute(routerState).tabKey === "friends";
  const isMediaViewerFullscreen = useContext(CometMediaViewerFullscreenContext);
  const showGlobalTypeaheadExpandedOutsideHome = useSearchCometGlobalTypeaheadShouldShowExpandedOutsideHome();
  const navigationBackButtonConfig = useCometNavigationBackButtonConfig();
  const { onPressBackButton, shouldUseCloseButton, showBackButton } = navigationBackButtonConfig;
  const routerPushViewStackContext = useContext(CometRouterPushViewStackContext);
  const hasPushViewStack = routerPushViewStackContext != null && routerPushViewStackContext.length > 0;
  const globalSearchQuery: string = getGlobalSearchQueryFromRouterState(routerState) ?? "";
  const shouldRenderFullTopNav = useShouldRenderFullTopNav();
  const shouldHideTopNavDueToConsentFlow = useShouldHideTopNavDueToConsentFlow();

  const handleOpenSearch = () => setIsSearchOpened(true);
  const handleCloseSearch = () => setIsSearchOpened(false);

  let profilePictureUriForSettings: string | null = null;
  if (profileSwitcherConfig.hideProfileNavigationLink) {
    profilePictureUriForSettings = profileSwitcherConfig.profilePictureUriForSettings;
  }

  if (shouldHideTopNavDueToConsentFlow) {
    return <></>;
  }

  return (
    <CometBaseAppNavigation
      endSection={
        hasPushViewStack && isMediaViewerFullscreen ? undefined : (
          <CometAppNavigationEndSection>
            <CometAppNavigationEndSectionItem noWrapper={true}>
              <CometErrorBoundary>
                <CometSettingsDropdownTriggerWrapper profilePictureUri={profilePictureUriForSettings} />
              </CometErrorBoundary>
            </CometAppNavigationEndSectionItem>
            {/* ... other items */}
            {shouldRenderFullTopNav && CometNotificationsDropdownTrigger ? 
            (
                <CometAppNavigationEndSectionItem>
                    <CometNotificationsDropdownTrigger isNotifications={isNotifications} />
                </CometAppNavigationEndSectionItem>
            ) : null}

            {shouldShowMessagingEntrypoint ? (
              <CometAppNavigationEndSectionItem>
                <MessagingButton />
              </CometAppNavigationEndSectionItem>
            ): null}

            {shouldRenderFullTopNav && CometHomeCreateOrMegaMenuJewel ? (
              <CometHomeCreateOrMegaMenuJewel />
            ): null}
          </CometAppNavigationEndSection>
        )
      }

      searchSection={
        shouldRenderFullTopNav && CometAppLoggedInNavigationSearchSection ? (
          <CometAppLoggedInNavigationSearchSection
            handleCloseSearch={handleCloseSearch}
            handleOpenSearch={handleOpenSearch}
            initialGlobalSearchQuery={globalSearchQuery}
            isHome={isHome}
            isSearchOpened={isSearchOpened}
            shouldHideGlobalTypeahead={hasPushViewStack}
            showGlobalTypeaheadExpandedOutsideHome={showGlobalTypeaheadExpandedOutsideHome}
          />
        ) : null
      }

      startButtons={
        <CometTopNavLogoWithBackButton
          logoHidden={isSearchOpened}
          logoWithShadow={hasPushViewStack}
          onPressBackButton={onPressBackButton}
          shouldUseCloseButton={shouldUseCloseButton}
          showBackButton={showBackButton}
        />
      }

      tabBar={
        <CometAppNavigationTabBarContentWrapper
          inert={hasPushViewStack}
        >
          <CometAppNavigationTargetedTabBarContent />
        </CometAppNavigationTabBarContentWrapper>
      }
    />
  );
};

NavigationComponent.displayName = `${NavigationComponent.name} [from ${ProfilePlusMessaging.id}]`;

const AppLoggedInNavigationSwitcher = withAppLoggedInNavigationSwitcher(NavigationComponent);

const AppNavigation: React.FC<{ profileSwitcherConfigQuery?: any }> = ({ profileSwitcherConfigQuery }) => {
  return profileSwitcherConfigQuery ? (
    <AppLoggedInNavigationSwitcher profileSwitcherConfigQuery={profileSwitcherConfigQuery} />
  ) : (
    <NavigationComponent profileSwitcherConfig={{ hideProfileNavigationLink: false, profilePictureUriForSettings: null }} />
  );
};

AppNavigation.displayName = `${AppNavigation.name} [from ${ProfilePlusMessaging.id}]`;

export default AppNavigation;
