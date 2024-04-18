var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import ReactDOM from 'react-dom';
import inEU from '@segment/in-eu';
import inRegions from '@segment/in-regions';
import { ConsentManager, openConsentManager, doNotTrack } from '.';
import * as preferences from './consent-manager-builder/preferences';
export var version = process.env.VERSION;
export { openConsentManager, doNotTrack, inEU, preferences };
var props = {};
var containerRef;
var localWindow = window;
if (localWindow.consentManagerConfig && typeof localWindow.consentManagerConfig === 'function') {
    props = localWindow.consentManagerConfig({
        React: React,
        version: version,
        openConsentManager: openConsentManager,
        doNotTrack: doNotTrack,
        inEU: inEU,
        preferences: preferences,
        inRegions: inRegions
    });
    containerRef = props.container;
}
else {
    throw new Error("window.consentManagerConfig should be a function");
}
if (!containerRef) {
    throw new Error('ConsentManager: container is required');
}
if (!props.writeKey) {
    throw new Error('ConsentManager: writeKey is required');
}
if (!props.bannerContent) {
    throw new Error('ConsentManager: bannerContent is required');
}
if (!props.preferencesDialogContent) {
    throw new Error('ConsentManager: preferencesDialogContent is required');
}
if (!props.cancelDialogContent) {
    throw new Error('ConsentManager: cancelDialogContent is required');
}
if (typeof props.implyConsentOnInteraction === 'string') {
    props.implyConsentOnInteraction = props.implyConsentOnInteraction === 'true';
}
if (props.closeBehavior !== undefined && typeof props.closeBehavior === 'string') {
    var options = [
        "accept" /* ACCEPT */.toString(),
        "deny" /* DENY */.toString(),
        "dismiss" /* DISMISS */.toString()
    ];
    if (!options.includes(props.closeBehavior)) {
        throw new Error("ConsentManager: closeBehavior should be one of " + options);
    }
}
var container = document.querySelector(containerRef);
if (!container) {
    throw new Error('ConsentManager: container not found');
}
ReactDOM.render(React.createElement(ConsentManager, __assign({}, props)), container);
