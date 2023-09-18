__d("ReactDOMComet", ["cr:1108857", "cr:1294159", "cr:734", "qex"], (function(a, b, c, d, e, f, g) {
    e = b("cr:734") ? b("cr:734")(b("cr:1294159").createPortal) : b("cr:1294159").createPortal;
    function a(a, d) {
        return b("cr:1294159").createRoot(a, babelHelpers["extends"]({}, d, {
            unstable_concurrentUpdatesByDefault: c("qex")._("723") ? !1 : (a = d == null ? void 0 : d.unstable_concurrentUpdatesByDefault) != null ? a : !1
        }))
    }
    function d(a, d, e) {
        return b("cr:1294159").hydrateRoot(a, d, babelHelpers["extends"]({
            onRecoverableError: function(a) {
                if (a != null && typeof a.message === "string") {
                    var b = a.message;
                    if (b.indexOf("The server could not finish this Suspense boundary") !== -1 || b.indexOf("Minified React error #419;") !== -1 || b.indexOf("This Suspense boundary received an update") !== -1 || b.indexOf("Minified React error #421;") !== -1)
                        return
                }
                typeof reportError === "function" && reportError(a)
            }
        }, e, {
            unstable_concurrentUpdatesByDefault: c("qex")._("723") ? !1 : (a = e == null ? void 0 : e.unstable_concurrentUpdatesByDefault) != null ? a : !1
        }))
    }
    g.createPortal = e;
    g.unstable_batchedUpdates = b("cr:1294159").unstable_batchedUpdates;
    g.flushSync = b("cr:1294159").flushSync;
    g.createRoot = a;
    g.hydrateRoot = d;
    g.unstable_createEventHandle = b("cr:1294159").unstable_createEventHandle;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b("cr:1294159").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    g.version = b("cr:1294159").version
}
), 98);

import { createPortal as createReactPortal, createRoot as createReactRoot, hydrateRoot as hydrateReactRoot, unstable_batchedUpdates as unstableBatchedUpdates, flushSync as flushReactSync, unstable_createEventHandle as unstableCreateEventHandle, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED as ReactSecretInternals, version as ReactVersion } from 'cr:1294159';
import { reportError } from 'SomeErrorReportingModule'; // Replace with your error reporting module import

const createPortal = createReactPortal ? createReactPortal(createReactPortal) : createReactPortal;

function createRoot(container: Element, options: { unstable_concurrentUpdatesByDefault?: boolean } = {}) {
    return createReactRoot(container, {
        unstable_concurrentUpdatesByDefault: options.unstable_concurrentUpdatesByDefault === undefined
            ? !!(options.unstable_concurrentUpdatesByDefault && options.unstable_concurrentUpdatesByDefault)
            : false,
    });
}

function hydrateRoot(root: Element, initialElement: Element, options: { unstable_concurrentUpdatesByDefault?: boolean } = {}) {
    return hydrateReactRoot(root, initialElement, {
        onRecoverableError(error: Error) {
            if (error != null && typeof error.message === "string") {
                const errorMessage = error.message;
                if (
                    errorMessage.indexOf("The server could not finish this Suspense boundary") !== -1 ||
                    errorMessage.indexOf("Minified React error #419;") !== -1 ||
                    errorMessage.indexOf("This Suspense boundary received an update") !== -1 ||
                    errorMessage.indexOf("Minified React error #421;") !== -1
                ) {
                    return;
                }
            }
            if (typeof reportError === "function") {
                reportError(error);
            }
        },
        unstable_concurrentUpdatesByDefault: options.unstable_concurrentUpdatesByDefault === undefined
            ? !!(options.unstable_concurrentUpdatesByDefault && options.unstable_concurrentUpdatesByDefault)
            : false,
    });
}

export {
    createPortal,
    unstableBatchedUpdates,
    flushReactSync as flushSync,
    createRoot,
    hydrateRoot,
    unstableCreateEventHandle,
    ReactSecretInternals as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ReactVersion as version,
};
