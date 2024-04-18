// TODO: remove duplicate cookie library from bundle
import cookies from 'js-cookie';
import topDomain from '@segment/top-domain';
import { EventEmitter } from 'events';
var COOKIE_KEY = 'tracking-preferences';
// TODO: Make cookie expiration configurable
var COOKIE_EXPIRES = 365;
// TODO: harden against invalid cookies
// TODO: harden against different versions of cookies
export function loadPreferences() {
    var preferences = cookies.getJSON(COOKIE_KEY);
    if (!preferences) {
        return {};
    }
    return {
        destinationPreferences: preferences.destinations,
        customPreferences: preferences.custom
    };
}
var emitter = new EventEmitter();
/**
 * Subscribes to consent preferences changing over time and returns
 * a cleanup function that can be invoked to remove the instantiated listener.
 *
 * @param listener a function to be invoked when ConsentPreferences are saved
 */
export function onPreferencesSaved(listener) {
    emitter.on('preferencesSaved', listener);
    return function () { return emitter.off('preferencesSaved', listener); };
}
export function savePreferences(_a) {
    var destinationPreferences = _a.destinationPreferences, customPreferences = _a.customPreferences, cookieDomain = _a.cookieDomain;
    var wd = window;
    if (wd.analytics) {
        wd.analytics.identify({
            destinationTrackingPreferences: destinationPreferences,
            customTrackingPreferences: customPreferences
        });
    }
    var domain = cookieDomain || topDomain(window.location.href);
    var value = {
        version: 1,
        destinations: destinationPreferences,
        custom: customPreferences
    };
    cookies.set(COOKIE_KEY, value, {
        expires: COOKIE_EXPIRES,
        domain: domain
    });
    emitter.emit('preferencesSaved', {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences
    });
}
