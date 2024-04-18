__d("CometSSRContentInjector", ["CometSSRFizzContentInjector", "CometSSRHydrationHelpers", "CometSSRLogger", "cr:2010754", "gkx", "jestOnlyViolation", "performanceNow"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = d("CometSSRLogger").initNoopLogger(),
        j = !1,
        k = !1,
        l = null,
        m = null,
        n = {},
        o = null;

    function p(a) {
        switch (a) {
            case "fail_js_error":
                return "server_js_error";
            case "fail_infra_error":
                return "server_infra_error";
            case "fail_ssr_disabled":
                return "ssr_disabled";
            case "fail_feed_module_not_supported":
                return "feed_module_not_supported";
            case "fail_bad_preloaders":
                return "bad_preloaders";
            case "fail_unknown_boundaries":
                return "unknown_boundaries";
            case "fail_timed_out":
                return "timed_out";
            default:
                return "unknown"
        }
    }
    var q = {
            root: "pending"
        },
        r = 0,
        s = new Map();

    function t() {
        return {
            boundaryErrorStatuses: babelHelpers["extends"]({}, n),
            boundaryStatuses: babelHelpers["extends"]({}, q),
            globalBoundaryErrorStatus: m
        }
    }

    function u() {
        if (s.size === 0) return;
        var a = t();
        s.forEach(function (b) {
            return b(a)
        })
    }

    function a() {
        return t()
    }
    var v = null;

    function e(a) {
        v = a
    }

    function w(a) {
        if (b("cr:2010754")) {
            var d = (h || (h = c("performanceNow")))(),
                e = a.querySelectorAll("img");
            Array.from(e).forEach(function (a) {
                b("cr:2010754").trackImagePerf(a, d, a.currentSrc || a.src, {
                    mutationType: "ssrUnhide"
                })
            });
            e = a.querySelectorAll("image");
            Array.from(e).forEach(function (a) {
                b("cr:2010754").trackImagePerf(a, d, (a = a.getAttribute("xlink:href")) != null ? a : "", {
                    mutationType: "ssrUnhide"
                })
            })
        }
    }

    function f(a, b) {
        var c = document.getElementById("caa-reg-fb-welcome-content");
        c != null && (b.addAnnotationInt("enable_caa_welcome_screen_delay", 1), l != null && window.clearTimeout(l), l = window.setTimeout(function () {
            window.clearTimeout(l), l = null, k && x(a)
        }, 2e3))
    }

    function x(a) {
        if (c("gkx")("6830") || k) return;
        k = !0;
        var b = document.getElementById("caa-reg-fb-welcome-content");
        if (l != null && b != null) return;
        if (!j && c("gkx")("3728")) {
            b = document.getElementById("splash-screen");
            b !== null && (j = !0)
        }
        if (!j) {
            b = document.getElementById("splash-screen");
            b !== null && (b.remove(), j = !0)
        }
        a.style.visibility = "";
        a.style.display = "";
        w(a)
    }

    function y() {
        return o
    }

    function z(a) {
        var b = r++;
        s.set(b, a);
        return {
            release: function () {
                s["delete"](b)
            }
        }
    }

    function A(a, b, c) {
        b && (i = d("CometSSRLogger").initLogger(b), d("CometSSRHydrationHelpers").initHydrationHelperTraceAPIObj(b));
        var e = c.onAllPayloadsInjected,
            f = c.onFirstPayloadInjected,
            g = c.onPayloadInjected;
        d("CometSSRFizzContentInjector").eventEmitter.on("FIRSTPAYLOADINJECTED", function (a) {
            f == null ? void 0 : f(a)
        });
        d("CometSSRFizzContentInjector").eventEmitter.on("PAYLOADINJECTED", function (b, c) {
            g == null ? void 0 : g(b, c, function () {
                return x(a)
            })
        });
        d("CometSSRFizzContentInjector").eventEmitter.on("ALLPAYLOADSINJECTED", function (b) {
            x(a);
            e == null ? void 0 : e(b.status);
            if (!b) return;
            i.logPayloadReceivedFromInlineInjector(b);
            i.logSSRInjection(b.status === "INJECTED");
            b.status === "INJECTED" ? b.processedPayloads && b.processedPayloads.forEach(function (a) {
                a = a.id;
                a && (i.logSSRShown(a), q[a] = "content_injected")
            }) : (v == null ? void 0 : v(), B(b));
            u()
        })
    }

    function B(a) {
        a.processedPayloads && a.processedPayloads.forEach(function (a) {
            var b = a.id;
            a = a.status;
            if (a !== "success") {
                var c = p(a);
                b && (n[b] = c, q[b] = "client_rendered");
                m = m === null || m === "unknown" ? c : m;
                a !== "fail_ssr_disabled" && C(c)
            }
        })
    }

    function C(a) {
        c("gkx")("1501502") && c("jestOnlyViolation")("Encountered error during server rendering: " + a + "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)", "comet_infra")
    }
    window.__SSRFailJestOnError = C;
    g.__getDebugState = a;
    g.onForceHydration = e;
    g.maybeInitTimerForCaaRegistrationWelcomeScreen = f;
    g.getSSRDebugSnapshot = y;
    g.__onDebugStateChange = z;
    g.initFizz = A
}), 98);



import { initLogger, initHydrationHelperTraceAPIObj } from 'CometSSRLogger';
import { initNoopLogger } from 'CometSSRLogger';
import { eventEmitter } from 'CometSSRFizzContentInjector';
import { onForceHydration } from 'ReactDOMComet';
import { trackImagePerf } from 'cr:2010754'; 
import { gkx } from 'gkx';
import { jestOnlyViolation } from 'jestOnlyViolation';
import { performanceNow } from 'performanceNow';

interface Payload {
  id: string;
  status: string;
}

interface DebugState {
  boundaryErrorStatuses: { [key: string]: string };
  boundaryStatuses: { [key: string]: string }; 
  globalBoundaryErrorStatus: string | null;
}

interface InitOptions {
  onAllPayloadsInjected?: (status: string) => void;
  onFirstPayloadInjected?: (payload: Payload) => void;
  onPayloadInjected?: (payload: Payload, content: string, unhide: () => void) => void; 
}

let logger = initNoopLogger();
let welcomeScreenTimerStarted = false;
let welcomeScreenDisplayed = false;
let boundaryErrorStatuses: { [key: string]: string } = {};
let boundaryStatuses: { [key: string]: string } = {
  root: 'pending'
};
let globalBoundaryErrorStatus: string | null = null;
let debugStateChangeListeners = new Map<number, (state: DebugState) => void>();
let debugStateSnapshot: DebugState | null = null;

export function initFizz(element: HTMLElement, logger: any, options: InitOptions) {
  // init logger and APIs
  // attach event listeners
  // handle events
}

export function getDebugState(): DebugState {
  // return current state
}

export function onDebugStateChange(listener: (state: DebugState) => void) {
  // add listener to map
  // return deregister function
}

// other exported helper functions

function handleErrors(status: string) {
  // handle errors
}

function updateListeners() {
  // notify listeners of state changes  
}
