__d("VideoPlayerHooks", ["DOMRectIsEqual", "VideoPlayerContexts", "VideoPlayerVideoPixelsFitContext", "VideoPlayerViewabilityContexts", "clearTimeout", "react", "removeFromArray", "setTimeout", "unrecoverableViolation", "useStable"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || d("react"),
        k = j.useContext,
        l = j.useEffect,
        m = j.useRef,
        n = j.useState;

    function a(a) {
        var b = m(a);
        l(function () {
            b.current = a
        }, [a]);
        return b
    }

    function o() {
        var a = k((i || (i = d("VideoPlayerContexts"))).ControllerContext);
        if (a == null) throw c("unrecoverableViolation")("Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?", "comet_video_player");
        return a
    }

    function b() {
        var a = k((i || (i = d("VideoPlayerContexts"))).InstanceKeyContext);
        if (a == null) throw c("unrecoverableViolation")("Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?", "comet_video_player");
        return a
    }

    function p() {
        var a = T();
        return a === "LIVE"
    }

    function e() {
        var a = T();
        return a === "LIVE" || a === "VOD_READY"
    }

    function f() {
        return k((i || (i = d("VideoPlayerContexts"))).BufferEndContext)
    }

    function q() {
        return k((i || (i = d("VideoPlayerContexts"))).DurationContext)
    }

    function r() {
        return k((i || (i = d("VideoPlayerContexts"))).SeekingContext)
    }

    function s() {
        return k((i || (i = d("VideoPlayerContexts"))).EndedContext)
    }

    function t() {
        return k((i || (i = d("VideoPlayerContexts"))).ErrorContext)
    }

    function u() {
        return k((i || (i = d("VideoPlayerContexts"))).PlayingContext)
    }

    function v() {
        var a = n(0),
            b = a[0],
            c = a[1],
            d = o();
        l(function () {
            var a = d.subscribe(function () {
                c(d.getPlayheadPosition())
            });
            c(d.getPlayheadPosition());
            return function () {
                return a.remove()
            }
        }, [d]);
        return b
    }

    function w(a, b) {
        var d = n(0),
            e = d[0],
            f = d[1],
            g = o(),
            h = m(null),
            i = m(e);
        l(function () {
            var d = g.subscribe(function () {
                i.current = b ? b(g) : g.getPlayheadPosition();
                if (h.current != null) return;
                h.current = c("setTimeout")(function () {
                    f(i.current), h.current = null
                }, a)
            });
            f(g.getPlayheadPosition());
            return d.remove
        }, [g, a]);
        l(function () {
            return function () {
                h.current !== null && (c("clearTimeout")(h.current), h.current = null)
            }
        }, []);
        return e
    }

    function x(a) {
        a === void 0 && (a = 200);
        var b = n(0),
            d = b[0],
            e = b[1],
            f = o(),
            g = p(),
            h = m(null),
            i = m(d);
        l(function () {
            if (!g) return;
            var b = f.subscribe(function () {
                if (h.current != null) return;
                h.current = c("setTimeout")(function () {
                    f.getCurrentState().paused || (i.current += a / 1e3, e(i.current)), h.current = null
                }, a)
            });
            e(0);
            return function () {
                return b.remove()
            }
        }, [f, a, g]);
        l(function () {
            return function () {
                h.current !== null && (c("clearTimeout")(h.current), h.current = null)
            }
        }, []);
        return !g ? null : d
    }

    function y() {
        var a = o(),
            b = m([]),
            d = m(a.isFrozen()),
            e = c("useStable")(function () {
                return {
                    getCurrentState: function () {
                        return a.isFrozen()
                    },
                    subscribeToChanges: function (a) {
                        var d = b.current;
                        d.push(a);
                        return {
                            remove: function () {
                                return c("removeFromArray")(d, a)
                            }
                        }
                    }
                }
            });
        l(function () {
            var c = a.subscribe(function () {
                var c = d.current,
                    e = a.isFrozen();
                d.current = e;
                if (e !== c) {
                    c = b.current;
                    c.forEach(function (a) {
                        return a(e)
                    })
                }
            });
            return function () {
                c.remove()
            }
        }, [a]);
        return e
    }

    function z() {
        return k((i || (i = d("VideoPlayerContexts"))).WatchTimeContext)
    }

    function A() {
        return k((i || (i = d("VideoPlayerContexts"))).LastPlayedTimeContext)
    }

    function B() {
        return k((i || (i = d("VideoPlayerContexts"))).PausedContext)
    }

    function C() {
        return k((i || (i = d("VideoPlayerContexts"))).StallingContext)
    }

    function D() {
        return k((i || (i = d("VideoPlayerContexts"))).InPlayStallingContext)
    }

    function E() {
        return k((i || (i = d("VideoPlayerContexts"))).LastMuteReasonContext)
    }

    function F() {
        return k((i || (i = d("VideoPlayerContexts"))).LastPauseReasonContext)
    }

    function G() {
        return k((i || (i = d("VideoPlayerContexts"))).LastPlayReasonContext)
    }

    function H() {
        return k((i || (i = d("VideoPlayerContexts"))).AvailableVideoQualitiesContext)
    }

    function I() {
        return k((i || (i = d("VideoPlayerContexts"))).AvailableAudioTracksContext)
    }

    function J() {
        return k((i || (i = d("VideoPlayerContexts"))).AvailableVideoTracksContext)
    }

    function K() {
        return k((i || (i = d("VideoPlayerContexts"))).CaptionsVisibleContext)
    }

    function L() {
        return k((i || (i = d("VideoPlayerContexts"))).CaptionDisplayStyleContext)
    }

    function M() {
        return k((i || (i = d("VideoPlayerContexts"))).ActiveCaptionsContext)
    }

    function N() {
        return k((i || (i = d("VideoPlayerContexts"))).CurrentAudioTrackIDContext)
    }

    function O() {
        return k((i || (i = d("VideoPlayerContexts"))).CurrentVideoQualityContext)
    }

    function P() {
        return k((i || (i = d("VideoPlayerContexts"))).CurrentVideoTrackIDContext)
    }

    function Q() {
        return k((i || (i = d("VideoPlayerContexts"))).SelectedVideoQualityContext)
    }

    function R() {
        return k((i || (i = d("VideoPlayerContexts"))).TargetAudioTrackContext)
    }

    function aa() {
        return k((i || (i = d("VideoPlayerContexts"))).MutedContext)
    }

    function ba() {
        return k((i || (i = d("VideoPlayerContexts"))).VolumeContext)
    }

    function ca() {
        return k(d("VideoPlayerViewabilityContexts").VideoPlayerDesktopPictureInPictureContext)
    }

    function da() {
        return k(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext)
    }

    function ea() {
        return k((i || (i = d("VideoPlayerContexts"))).DimensionsContext)
    }

    function fa() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoPixelsAspectRatioContext)
    }

    function ga() {
        return k((i || (i = d("VideoPlayerContexts"))).PlayerVersionContext)
    }

    function ha() {
        return k((i || (i = d("VideoPlayerContexts"))).CaptionsLoadedContext)
    }

    function ia() {
        return k((i || (i = d("VideoPlayerContexts"))).IsAbrEnabledContext)
    }

    function ja() {
        return k((i || (i = d("VideoPlayerContexts"))).TargetVideoQualityContext)
    }

    function ka() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoPlayerMouseHoverContext)
    }

    function la() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoPlayerMouseIdleContext)
    }

    function S() {
        return k(d("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext)
    }

    function ma() {
        return k(d("VideoPlayerViewabilityContexts").VideoPlayerExtendedPassiveViewabilityInfoContext)
    }

    function na() {
        var a = S(),
            b = n(null),
            d = b[0],
            e = b[1],
            f = m(d);
        l(function () {
            f.current = d
        }, [d]);
        l(function () {
            if (a) {
                var b = function () {
                        var b = a.getCurrent();
                        if (b) {
                            var d = b.positionToViewport;
                            b = b.visiblePercentage;
                            var g = f.current;
                            (g == null || b !== g.visiblePercentage || !c("DOMRectIsEqual")(d, g.positionToViewport)) && e({
                                positionToViewport: d,
                                visiblePercentage: b
                            })
                        }
                    },
                    d = a.subscribe(function () {
                        b()
                    });
                return function () {
                    return d.remove()
                }
            }
        }, [e, a]);
        return d
    }

    function T() {
        return k((i || (i = d("VideoPlayerContexts"))).BroadcastStatusContext)
    }

    function oa() {
        return k((i || (i = d("VideoPlayerContexts"))).CanAutoplayContext)
    }

    function pa() {
        return k((i || (i = d("VideoPlayerContexts"))).VolumeSettingContext)
    }

    function qa() {
        return k((i || (i = d("VideoPlayerContexts"))).AutoplayGatingResultContext)
    }

    function ra() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoFBIDContext)
    }

    function U() {
        return k((i || (i = d("VideoPlayerContexts"))).AdClientTokenContext)
    }

    function V() {
        return k((i || (i = d("VideoPlayerContexts"))).LoopCurrentContext)
    }

    function W() {
        return k((i || (i = d("VideoPlayerContexts"))).LoopCountContext)
    }

    function sa() {
        return k((i || (i = d("VideoPlayerContexts"))).InbandCaptionsAutogeneratedContext)
    }

    function ta() {
        return k((i || (i = d("VideoPlayerContexts"))).IsExternalMediaContext)
    }

    function ua() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoPlayerCaptionsReservationsContext)
    }

    function va() {
        return k((i || (i = d("VideoPlayerContexts"))).VideoPlayerCaptionsReservationActionsContext)
    }

    function wa() {
        return k((i || (i = d("VideoPlayerContexts"))).StreamInterruptedContext)
    }

    function xa() {
        return k((i || (i = d("VideoPlayerContexts"))).SeekableRangesContext)
    }

    function X() {
        return k((i || (i = d("VideoPlayerContexts"))).IsLiveRewindActiveContext)
    }

    function Y() {
        var a = s(),
            b = V(),
            c = W();
        a = a && (c === -1 || c > 0 && b < c);
        return a
    }

    function ya() {
        var a = s(),
            b = Y();
        return a && !b
    }

    function za() {
        return k((i || (i = d("VideoPlayerContexts"))).PlaybackRateContext)
    }

    function Aa() {
        return k((i || (i = d("VideoPlayerContexts"))).IsNCSRContext)
    }

    function Z() {
        return k((i || (i = d("VideoPlayerContexts"))).IsPremiumMusicVideoContext)
    }

    function Ba() {
        var a = U() != null,
            b = p(),
            c = Z(),
            d = X();
        if (a || c) return !1;
        if (b) return d;
        else return !0
    }

    function Ca() {
        return k((i || (i = d("VideoPlayerContexts"))).InitialTracePolicyContext)
    }

    function Da() {
        return k((i || (i = d("VideoPlayerContexts"))).LatencyLevelContext)
    }

    function Ea() {
        return k((i || (i = d("VideoPlayerContexts"))).AudioAvailabilityInfoContext)
    }

    function Fa() {
        var a = U() != null,
            b = p(),
            c = Z();
        return a || c || b ? !1 : !0
    }

    function $(a) {
        a === void 0 && (a = !0);
        var b = o();
        l(function () {
            if (a) {
                var c = b.registerEmsgObserver();
                return function () {
                    b.unregisterEmsgObserver(c)
                }
            }
        }, [b, a])
    }

    function Ga() {
        $();
        return k((i || (i = d("VideoPlayerContexts"))).ActiveEmsgBoxesContext)
    }

    function Ha() {
        return k(c("VideoPlayerVideoPixelsFitContext"))
    }
    g.useLatestValueRef = a;
    g.useController = o;
    g.useInstanceKey = b;
    g.useIsLive = p;
    g.useIsVideoBroadcast = e;
    g.useBufferEnd = f;
    g.useDuration = q;
    g.useSeeking = r;
    g.useEnded = s;
    g.useError = t;
    g.usePlaying = u;
    g.useCurrentTime_DO_NOT_USE = v;
    g.useCurrentTimeThrottled = w;
    g.useLiveTimeElapsedThrottled = x;
    g.useIsFrozenPassive = y;
    g.useWatchTime = z;
    g.useLastPlayedTime = A;
    g.usePaused = B;
    g.useStalling = C;
    g.useInPlayStalling = D;
    g.useLastMuteReason = E;
    g.useLastPauseReason = F;
    g.useLastPlayReason = G;
    g.useAvailableVideoQualities = H;
    g.useAvailableAudioTracks = I;
    g.useAvailableVideoTracks = J;
    g.useCaptionsVisible = K;
    g.useCaptionDisplayStyle = L;
    g.useActiveCaptions = M;
    g.useCurrentAudioTrackID = N;
    g.useCurrentVideoQuality = O;
    g.useCurrentVideoTrackID = P;
    g.useSelectedVideoQuality = Q;
    g.useTargetAudioTrack = R;
    g.useMuted = aa;
    g.useVolume = ba;
    g.useIsDesktopPictureInPicture = ca;
    g.useIsFullscreen = da;
    g.useDimensions = ea;
    g.useVideoPixelsAspectRatio = fa;
    g.usePlayerVersion = ga;
    g.useCaptionsLoaded = ha;
    g.useIsAbrEnabled = ia;
    g.useTargetVideoQuality = ja;
    g.useIsHovering = ka;
    g.useIsMouseIdle = la;
    g.useVideoPlayerPassiveViewabilityInfo = S;
    g.useVideoPlayerExtendedPassiveViewabilityInfo = ma;
    g.useVideoPlayerViewabilityInfo = na;
    g.useBroadcastStatus = T;
    g.useCanAutoplay = oa;
    g.useVolumeSetting = pa;
    g.useAutoplayGatingResult = qa;
    g.useVideoFbid = ra;
    g.useAdClientToken = U;
    g.useVideoPlayerCurrentLoop = V;
    g.useVideoPlayerTotalLoops = W;
    g.useInbandCaptionsAutogenerated = sa;
    g.useIsExternalMedia = ta;
    g.useVideoPlayerCaptionsReservations = ua;
    g.useVideoPlayerCaptionsReservationActions = va;
    g.useStreamInterrupted = wa;
    g.useSeekableRanges_DO_NOT_USE = xa;
    g.useIsLiveRewindActive = X;
    g.useIsTransitioningToNextLoop = Y;
    g.useVideoPlaybackEnded = ya;
    g.usePlaybackRate = za;
    g.useIsNCSR = Aa;
    g.useIsPremiumMusicVideo = Z;
    g.useShouldShowPlaybackRateControl = Ba;
    g.useVideoPlayerInitialTracePolicy = Ca;
    g.useLatencyLevel = Da;
    g.useAudioAvailabilityInfo = Ea;
    g.useShouldPersistPlaybackRate = Fa;
    g.useEmsgObserver = $;
    g.useActiveEmsgBoxes = Ga;
    g.useVideoPlayerVideoPixelsFit = Ha
}), 98);