__d(
  "CometLoggedInFBApp.react",
  [
    "CastingProvider",
    "CometActorGatewayHandler",
    "CometAppContentComponent.react",
    "CometAppShell.react",
    "CometBackupPlaceholder.react",
    "CometBlinkingTitleMessageProvider.react",
    "CometCastingMiniplayerRootDeferred.react",
    "CometErrorBoundary.react",
    "CometHovercardSettingsProvider.react",
    "CometMediaViewerFullscreenProvider.react",
    "CometPlaceholder.react",
    "CometProfileSwitcherProvider.react",
    "CometProfiler.react",
    "CometQuickPromotionInterstitial.react",
    "CometSearchEventEmitterProvider",
    "CometToasterRoot.react",
    "CometTransientDialogProvider.react",
    "CometWatchAndScrollDeferred.react",
    "CometWatchAndScrollProvider.react",
    "HeroInteractionIgnoreWithDiv.react",
    "MAWCondWrapperDeferred.react",
    "MWChatBadgeUpdater.react",
    "MWChatEncryptedBackupsUpsellChatTabVisibilityContext",
    "MWChatStateV2.react",
    "MWChatVideoAutoplaySettingContext",
    "MWChatVisibilityOverrideContext",
    "PresenceStatusProvider.react",
    "QE2Logger",
    "RTWebPreCallProvider.react",
    "cr:1599331", // CometBrowserPushRoot
    "cr:5546", // null
    "cr:6365", // null
    "cr:764", // MWV2Chat
    "cr:7669", // null
    "cr:9887", // null
    "deferredLoadComponent",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometLogout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    e = h;
    var j = e.Fragment,
      k = e.useEffect,
      l = c("deferredLoadComponent")(
        c("requireDeferred")("RTWebCometCallInviteController.react").__setRef(
          "CometLoggedInFBApp.react"
        )
      );
    function m(a) {
      c("recoverableViolation")(
        "CometLoggedInApp level component did not catch own error",
        "CometLoggedInApp",
        { error: a }
      );
    }
    var n = "MWChatTab";
    function o() {
      k(function () {
        d("QE2Logger").logExposureForUser("comet_fbweb_react_forget");
      }, []);
    }
    var p = (e = b("cr:9887")) != null ? e : j,
      q = (e = b("cr:6365")) != null ? e : j;
    function a(a) {
      a = a.displayQueries;
      o();
      return i.jsx(c("CometProfiler.react"), {
        id: "CometApp",
        logDurationToQPL: !0,
        children: i.jsxs(c("CometAppShell.react"), {
          toaster: i.jsx(c("CometToasterRoot.react"), {}),
          children: [
            i.jsx(c("CometSearchEventEmitterProvider"), {
              children: i.jsxs(p, {
                children: [
                  i.jsx(d("MWChatStateV2.react").MWChatStateV2Provider, {
                    children: i.jsx(
                      d("MWChatVisibilityOverrideContext")
                        .MWChatVisibilityOverrideContextProvider,
                      {
                        children: i.jsx(
                          d(
                            "MWChatEncryptedBackupsUpsellChatTabVisibilityContext"
                          )
                            .MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider,
                          {
                            children: i.jsx(c("RTWebPreCallProvider.react"), {
                              children: i.jsx(
                                c("PresenceStatusProvider.react"),
                                {
                                  children: i.jsx(
                                    c(
                                      "CometBlinkingTitleMessageProvider.react"
                                    ),
                                    {
                                      children: i.jsx(
                                        c(
                                          "CometHovercardSettingsProvider.react"
                                        ),
                                        {
                                          children: i.jsxs(
                                            d("useCometLogout")
                                              .CometLogoutProvider,
                                            {
                                              children: [
                                                i.jsx(
                                                  c(
                                                    "CometWatchAndScrollProvider.react"
                                                  ),
                                                  {
                                                    children: i.jsx(
                                                      c("CastingProvider"),
                                                      {
                                                        children: i.jsx(
                                                          c(
                                                            "CometMediaViewerFullscreenProvider.react"
                                                          ),
                                                          {
                                                            children: i.jsxs(
                                                              c(
                                                                "CometProfileSwitcherProvider.react"
                                                              ),
                                                              {
                                                                children: [
                                                                  i.jsx(
                                                                    c(
                                                                      "CometAppContentComponent.react"
                                                                    ),
                                                                    {
                                                                      profileSwitcherConfigQuery:
                                                                        a.profileSwitcherConfigQueryRef,
                                                                    }
                                                                  ),
                                                                  i.jsx(
                                                                    c(
                                                                      "CometErrorBoundary.react"
                                                                    ),
                                                                    {
                                                                      onError:
                                                                        m,
                                                                      children:
                                                                        c(
                                                                          "CometWatchAndScrollDeferred.react"
                                                                        ) !=
                                                                        null
                                                                          ? i.jsx(
                                                                              c(
                                                                                "CometPlaceholder.react"
                                                                              ),
                                                                              {
                                                                                fallback:
                                                                                  null,
                                                                                children:
                                                                                  i.jsx(
                                                                                    c(
                                                                                      "CometTransientDialogProvider.react"
                                                                                    ),
                                                                                    {
                                                                                      children:
                                                                                        i.jsx(
                                                                                          c(
                                                                                            "CometWatchAndScrollDeferred.react"
                                                                                          ),
                                                                                          {}
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            )
                                                                          : null,
                                                                    }
                                                                  ),
                                                                  i.jsx(
                                                                    c(
                                                                      "CometErrorBoundary.react"
                                                                    ),
                                                                    {
                                                                      onError:
                                                                        m,
                                                                      children:
                                                                        i.jsx(
                                                                          c(
                                                                            "CometPlaceholder.react"
                                                                          ),
                                                                          {
                                                                            fallback:
                                                                              null,
                                                                            children:
                                                                              i.jsx(
                                                                                c(
                                                                                  "CometCastingMiniplayerRootDeferred.react"
                                                                                ),
                                                                                {}
                                                                              ),
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }
                                                ),
                                                i.jsxs(
                                                  c(
                                                    "CometBackupPlaceholder.react"
                                                  ),
                                                  {
                                                    fallback: null,
                                                    children: [
                                                      i.jsxs(
                                                        c(
                                                          "HeroInteractionIgnoreWithDiv.react"
                                                        ),
                                                        {
                                                          children: [
                                                            i.jsx(
                                                              c(
                                                                "CometPlaceholder.react"
                                                              ),
                                                              {
                                                                fallback: null,
                                                                children: i.jsx(
                                                                  c(
                                                                    "MWChatBadgeUpdater.react"
                                                                  ),
                                                                  {}
                                                                ),
                                                              }
                                                            ),
                                                            i.jsx(
                                                              c(
                                                                "CometProfiler.react"
                                                              ),
                                                              {
                                                                id: n,
                                                                children: i.jsx(
                                                                  c(
                                                                    "CometErrorBoundary.react"
                                                                  ),
                                                                  {
                                                                    onError: m,
                                                                    children:
                                                                      i.jsx(
                                                                        r,
                                                                        {}
                                                                      ),
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                      i.jsx(
                                                        c(
                                                          "CometErrorBoundary.react"
                                                        ),
                                                        {
                                                          onError: m,
                                                          children: i.jsx(
                                                            c(
                                                              "CometPlaceholder.react"
                                                            ),
                                                            {
                                                              fallback: null,
                                                              children: i.jsx(
                                                                l,
                                                                {}
                                                              ),
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                      b("cr:5546") != null
                                                        ? i.jsx(
                                                            c(
                                                              "CometErrorBoundary.react"
                                                            ),
                                                            {
                                                              onError: m,
                                                              children: i.jsx(
                                                                c(
                                                                  "CometPlaceholder.react"
                                                                ),
                                                                {
                                                                  fallback:
                                                                    null,
                                                                  children:
                                                                    i.jsx(
                                                                      b(
                                                                        "cr:5546"
                                                                      ),
                                                                      {}
                                                                    ),
                                                                }
                                                              ),
                                                            }
                                                          )
                                                        : null,
                                                    ],
                                                  }
                                                ),
                                              ],
                                            }
                                          ),
                                        }
                                      ),
                                    }
                                  ),
                                }
                              ),
                            }),
                          }
                        ),
                      }
                    ),
                  }),
                  i.jsx(q, {}),
                ],
              }),
            }),
            b("cr:1599331") != null
              ? i.jsx(c("CometErrorBoundary.react"), {
                  onError: m,
                  children: i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(b("cr:1599331"), {}),
                  }),
                })
              : null,
            i.jsx(c("CometErrorBoundary.react"), {
              onError: m,
              children: i.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children: i.jsx(c("CometQuickPromotionInterstitial.react"), {}),
              }),
            }),
            i.jsx(c("CometBackupPlaceholder.react"), {
              fallback: null,
              children: i.jsx(c("CometErrorBoundary.react"), {
                onError: m,
                children: i.jsx(c("CometBackupPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(
                    d("CometActorGatewayHandler").CometActorGatewayHandler,
                    {}
                  ),
                }),
              }),
            }),
            b("cr:7669") !== null && i.jsx(b("cr:7669"), {}),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function r() {
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(c("MAWCondWrapperDeferred.react"), {
          children: i.jsx(c("CometPlaceholder.react"), {
            fallback: null,
            children: i.jsx(
              d("MWChatVideoAutoplaySettingContext")
                .MWChatVideoAutoplaySettingContextProvider,
              { children: i.jsx(b("cr:764"), {}) }
            ),
          }),
        }),
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    e = i.memo(a);
    g["default"] = e;
  },
  98
);

import {
  CastingProvider,
  CometActorGatewayHandler,
  CometAppContentComponent,
  CometAppShell,
  CometBackupPlaceholder,
  CometBlinkingTitleMessageProvider,
  CometCastingMiniplayerRootDeferred,
  CometErrorBoundary,
  CometHovercardSettingsProvider,
  CometMediaViewerFullscreenProvider,
  CometPlaceholder,
  CometProfileSwitcherProvider,
  CometProfiler,
  CometQuickPromotionInterstitial,
  CometSearchEventEmitterProvider,
  CometToasterRoot,
  CometTransientDialogProvider,
  CometWatchAndScrollDeferred,
  CometWatchAndScrollProvider,
  HeroInteractionIgnoreWithDiv,
  MAWCondWrapperDeferred,
  MWChatBadgeUpdater,
  MWChatEncryptedBackupsUpsellChatTabVisibilityContext,
  MWChatStateV2,
  MWChatVideoAutoplaySettingContext,
  MWChatVisibilityOverrideContext,
  PresenceStatusProvider,
  QE2Logger,
  RTWebPreCallProvider,
  recoverableViolation,
  requireDeferred,
  useCometLogout,
} from "some-library";
import React, { Fragment, useEffect, memo } from "react";

const RTWebCometCallInviteController = requireDeferred(
  "RTWebCometCallInviteController.react"
).__setRef("CometLoggedInFBApp.react");

const MWChatTab = "MWChatTab";

const CometLoggedInFBApp: React.FC<{ displayQueries: any }> = ({
  displayQueries,
}) => {
  useEffect(() => {
    QE2Logger.logExposureForUser("comet_fbweb_react_forget");
  }, []);

  const logError = (error: Error) => {
    recoverableViolation(
      "CometLoggedInApp level component did not catch own error",
      "CometLoggedInApp",
      { error }
    );
  };

  const ProfileSwitcherConfigQuery =
    displayQueries?.profileSwitcherConfigQueryRef;

  return (
    <CometProfiler id="CometApp" logDurationToQPL>
      <CometAppShell
        toaster={<CometToasterRoot />}
        children={[
          <CometSearchEventEmitterProvider key="search-event-emitter">
            <Fragment key="main">
              <MWChatStateV2.MWChatStateV2Provider>
                <MWChatVisibilityOverrideContext.MWChatVisibilityOverrideContextProvider>
                  <MWChatEncryptedBackupsUpsellChatTabVisibilityContext.MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider>
                    <RTWebPreCallProvider>
                      <PresenceStatusProvider>
                        <CometBlinkingTitleMessageProvider>
                          <CometHovercardSettingsProvider>
                            <useCometLogout.CometLogoutProvider>
                              <CometWatchAndScrollProvider>
                                <CastingProvider>
                                  <CometMediaViewerFullscreenProvider>
                                    <CometProfileSwitcherProvider>
                                      <CometAppContentComponent
                                        profileSwitcherConfigQuery={
                                          ProfileSwitcherConfigQuery
                                        }
                                      />
                                      <CometErrorBoundary onError={logError}>
                                        {CometWatchAndScrollDeferred && (
                                          <CometPlaceholder fallback={null}>
                                            <CometTransientDialogProvider>
                                              <CometWatchAndScrollDeferred />
                                            </CometTransientDialogProvider>
                                          </CometPlaceholder>
                                        )}
                                      </CometErrorBoundary>
                                      <CometErrorBoundary onError={logError}>
                                        <CometPlaceholder fallback={null}>
                                          <CometCastingMiniplayerRootDeferred />
                                        </CometPlaceholder>
                                      </CometErrorBoundary>
                                    </CometProfileSwitcherProvider>
                                  </CometMediaViewerFullscreenProvider>
                                </CastingProvider>
                              </CometWatchAndScrollProvider>
                              <CometBackupPlaceholder fallback={null}>
                                <HeroInteractionIgnoreWithDiv>
                                  <CometPlaceholder fallback={null}>
                                    <MWChatBadgeUpdater />
                                  </CometPlaceholder>
                                  <CometProfiler id={MWChatTab}>
                                    <CometErrorBoundary onError={logError}>
                                      <RenderChatState />
                                    </CometErrorBoundary>
                                  </CometProfiler>
                                </HeroInteractionIgnoreWithDiv>
                                <CometErrorBoundary onError={logError}>
                                  <CometPlaceholder fallback={null}>
                                    <RTWebCometCallInviteController />
                                  </CometPlaceholder>
                                </CometErrorBoundary>
                              </CometBackupPlaceholder>
                            </useCometLogout.CometLogoutProvider>
                          </CometHovercardSettingsProvider>
                        </CometBlinkingTitleMessageProvider>
                      </PresenceStatusProvider>
                    </RTWebPreCallProvider>
                  </MWChatEncryptedBackupsUpsellChatTabVisibilityContext.MWChatEncryptedBackupsUpsellChatTabVisibilityContextProvider>
                </MWChatVisibilityOverrideContext.MWChatVisibilityOverrideContextProvider>
              </MWChatStateV2.MWChatStateV2Provider>
            </Fragment>
          </CometSearchEventEmitterProvider>,
          React.createElement(requireDeferred("CometBrowserPushRoot")) !=
            null && (
            <CometErrorBoundary key="browser-push" onError={logError}>
              <CometPlaceholder fallback={null}>
                {React.createElement(requireDeferred("CometBrowserPushRoot"))}
              </CometPlaceholder>
            </CometErrorBoundary>
          ),
          <CometErrorBoundary key="quick-promotion" onError={logError}>
            <CometPlaceholder fallback={null}>
              <CometQuickPromotionInterstitial />
            </CometPlaceholder>
          </CometErrorBoundary>,
          <CometBackupPlaceholder key="backup" fallback={null}>
            <CometErrorBoundary onError={logError}>
              <CometBackupPlaceholder fallback={null}>
                <CometActorGatewayHandler.CometActorGatewayHandler />
              </CometBackupPlaceholder>
            </CometErrorBoundary>
          </CometBackupPlaceholder>,
        ]}
      />
    </CometProfiler>
  );
};

const RenderChatState = () => (
  <CometPlaceholder fallback={null}>
    <MAWCondWrapperDeferred>
      <CometPlaceholder fallback={null}>
        <MWChatVideoAutoplaySettingContext.MWChatVideoAutoplaySettingContextProvider>
          {React.createElement(requireDeferred("MWV2Chat"))}
        </MWChatVideoAutoplaySettingContext.MWChatVideoAutoplaySettingContextProvider>
      </CometPlaceholder>
    </MAWCondWrapperDeferred>
  </CometPlaceholder>
);

CometLoggedInFBApp.displayName = "CometLoggedInFBApp [from 98]";

const RenderChatStateMemo = memo(RenderChatState);
RenderChatStateMemo.displayName = "RenderChatStateMemo [from 98]";

export default memo(CometLoggedInFBApp);
