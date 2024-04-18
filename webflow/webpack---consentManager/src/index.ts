import CMB from './consent-manager-builder';
import CM from './consent-manager';
export { openDialog as openConsentManager } from './consent-manager/container';
export { loadPreferences, savePreferences, onPreferencesSaved } from './consent-manager-builder/preferences';
export var ConsentManagerBuilder = CMB;
export var ConsentManager = CM;
export function doNotTrack() {
    if (typeof window !== 'undefined' && (window.navigator || navigator)) {
        var nav = navigator;
        var doNotTrackValue = nav.doNotTrack || window.doNotTrack || nav.msDoNotTrack;
        // Normalise Firefox < 32
        // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack
        if (doNotTrackValue === 'yes') {
            doNotTrackValue = '1';
        }
        else if (doNotTrackValue === 'no') {
            doNotTrackValue = '0';
        }
        if (doNotTrackValue === '1') {
            return true;
        }
        if (doNotTrackValue === '0') {
            return false;
        }
    }
    return null;
}
