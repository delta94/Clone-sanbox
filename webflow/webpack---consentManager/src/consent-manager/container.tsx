import EventEmitter from 'events';
import React from 'react';
import Banner from './banner';
import PreferenceDialog from './preference-dialog';
import CancelDialog from './cancel-dialog';
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories';
var emitter = new EventEmitter();
export function openDialog() {
    emitter.emit('openDialog');
}
function normalizeDestinations(destinations) {
    var marketingDestinations = [];
    var advertisingDestinations = [];
    var functionalDestinations = [];
    var _loop_1 = function (destination) {
        if (ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; })) {
            advertisingDestinations.push(destination);
        }
        else if (FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; })) {
            functionalDestinations.push(destination);
        }
        else {
            // Fallback to marketing
            marketingDestinations.push(destination);
        }
    };
    for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
        var destination = destinations_1[_i];
        _loop_1(destination);
    }
    return { marketingDestinations: marketingDestinations, advertisingDestinations: advertisingDestinations, functionalDestinations: functionalDestinations };
}
var Container = function (props) {
    var _a = React.useState(false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')), isDialogOpen = _a[0], toggleDialog = _a[1];
    var _b = React.useState(true), showBanner = _b[0], toggleBanner = _b[1];
    var _c = React.useState(false), isCancelling = _c[0], toggleCancel = _c[1];
    var banner = React.useRef(null);
    var preferenceDialog = React.useRef(null);
    var cancelDialog = React.useRef(null);
    var _d = normalizeDestinations(props.destinations), marketingDestinations = _d.marketingDestinations, advertisingDestinations = _d.advertisingDestinations, functionalDestinations = _d.functionalDestinations;
    var handleBodyClick = function (e) {
        // Do nothing if no new implicit consent needs to be saved
        if (!props.isConsentRequired ||
            !props.implyConsentOnInteraction ||
            props.newDestinations.length === 0) {
            return;
        }
        // Ignore propogated clicks from inside the consent manager
        if ((banner.current && banner.current.contains(e.target)) ||
            (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
            (cancelDialog.current && cancelDialog.current.contains(e.target))) {
            return;
        }
        props.saveConsent(undefined, false);
    };
    var showDialog = function () { return toggleDialog(true); };
    React.useEffect(function () {
        emitter.on('openDialog', showDialog);
        if (props.isConsentRequired && props.implyConsentOnInteraction) {
            document.body.addEventListener('click', handleBodyClick, false);
        }
        return function () {
            emitter.removeListener('openDialog', showDialog);
            document.body.removeEventListener('click', handleBodyClick, false);
        };
    });
    var onClose = function () {
        if (props.closeBehavior === undefined || props.closeBehavior === "dismiss" /* DISMISS */) {
            return toggleBanner(false);
        }
        if (props.closeBehavior === "accept" /* ACCEPT */) {
            return props.saveConsent();
        }
        if (props.closeBehavior === "deny" /* DENY */) {
            var falsePreferences = Object.keys(props.preferences).reduce(function (acc, category) {
                acc[category] = false;
                return acc;
            }, {});
            props.setPreferences(falsePreferences);
            return props.saveConsent();
        }
        // closeBehavior is a custom function
        var customClosePreferences = props.closeBehavior(props.preferences);
        props.setPreferences(customClosePreferences);
        props.saveConsent();
        return toggleBanner(false);
    };
    var handleCategoryChange = function (category, value) {
        var _a;
        props.setPreferences((_a = {},
            _a[category] = value,
            _a));
    };
    var handleSave = function () {
        toggleDialog(false);
        props.saveConsent();
    };
    var handleCancel = function () {
        toggleDialog(false);
        // Only show the cancel confirmation if there's unconsented destinations
        if (props.newDestinations.length > 0) {
            toggleCancel(true);
        }
        else {
            props.resetPreferences();
        }
    };
    var handleCancelBack = function () {
        toggleDialog(true);
        toggleCancel(false);
    };
    var handleCancelConfirm = function () {
        toggleCancel(false);
        props.resetPreferences();
    };
    return (React.createElement("div", null,
        showBanner && props.isConsentRequired && props.newDestinations.length > 0 && (React.createElement(Banner, { innerRef: function (current) { return (banner = { current: current }); }, onClose: onClose, onChangePreferences: function () { return toggleDialog(true); }, content: props.bannerContent, subContent: props.bannerSubContent, textColor: props.bannerTextColor, backgroundColor: props.bannerBackgroundColor })),
        isDialogOpen && (React.createElement(PreferenceDialog, { customCategories: props.customCategories, destinations: props.destinations, preferences: props.preferences, innerRef: function (current) { return (preferenceDialog = { current: current }); }, onCancel: handleCancel, onSave: handleSave, onChange: handleCategoryChange, marketingDestinations: marketingDestinations, advertisingDestinations: advertisingDestinations, functionalDestinations: functionalDestinations, marketingAndAnalytics: props.preferences.marketingAndAnalytics, advertising: props.preferences.advertising, functional: props.preferences.functional, title: props.preferencesDialogTitle, content: props.preferencesDialogContent })),
        isCancelling && (React.createElement(CancelDialog, { innerRef: function (current) { return (cancelDialog = { current: current }); }, onBack: handleCancelBack, onConfirm: handleCancelConfirm, title: props.cancelDialogTitle, content: props.cancelDialogContent }))));
};
export default Container;
