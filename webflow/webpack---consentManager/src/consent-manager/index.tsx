var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { PureComponent } from 'react';
import ConsentManagerBuilder from '../consent-manager-builder';
import Container from './container';
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories';
var zeroValuePreferences = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
};
var ConsentManager = /** @class */ (function (_super) {
    __extends(ConsentManager, _super);
    function ConsentManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getInitialPreferences = function () {
            var _a = _this.props, initialPreferences = _a.initialPreferences, customCategories = _a.customCategories;
            if (initialPreferences) {
                return initialPreferences;
            }
            if (!customCategories) {
                return zeroValuePreferences;
            }
            var initialCustomPreferences = {};
            Object.keys(customCategories).forEach(function (category) {
                initialCustomPreferences[category] = null;
            });
            return initialCustomPreferences;
        };
        _this.handleMapCustomPreferences = function (destinations, preferences) {
            var customCategories = _this.props.customCategories;
            var destinationPreferences = {};
            var customPreferences = {};
            if (customCategories) {
                for (var _i = 0, _a = Object.keys(customCategories); _i < _a.length; _i++) {
                    var preferenceName = _a[_i];
                    var value = preferences[preferenceName];
                    if (typeof value === 'boolean') {
                        customPreferences[preferenceName] = value;
                    }
                    else {
                        customPreferences[preferenceName] = true;
                    }
                }
                destinations.forEach(function (destination) {
                    // Mark custom categories 
                    Object.entries(customCategories).forEach(function (_a) {
                        var categoryName = _a[0], integrations = _a[1].integrations;
                        var consentAlreadySetToFalse = destinationPreferences[destination.id] === false;
                        var shouldSetConsent = integrations.includes(destination.id);
                        if (shouldSetConsent && !consentAlreadySetToFalse) {
                            destinationPreferences[destination.id] = customPreferences[categoryName];
                        }
                    });
                });
                return { destinationPreferences: destinationPreferences, customPreferences: customPreferences };
            }
            // Default unset preferences to true (for implicit consent)
            for (var _b = 0, _c = Object.keys(preferences); _b < _c.length; _b++) {
                var preferenceName = _c[_b];
                var value = preferences[preferenceName];
                if (typeof value === 'boolean') {
                    customPreferences[preferenceName] = value;
                }
                else {
                    customPreferences[preferenceName] = true;
                }
            }
            var customPrefs = customPreferences;
            var _loop_1 = function (destination) {
                // Mark advertising destinations
                if (ADVERTISING_CATEGORIES.find(function (c) { return c === destination.category; }) && destinationPreferences[destination.id] !== false) {
                    destinationPreferences[destination.id] = customPrefs.advertising;
                }
                // Mark function destinations
                if (FUNCTIONAL_CATEGORIES.find(function (c) { return c === destination.category; }) && destinationPreferences[destination.id] !== false) {
                    destinationPreferences[destination.id] = customPrefs.functional;
                }
                // Fallback to marketing
                if (!(destination.id in destinationPreferences)) {
                    destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics;
                }
            };
            for (var _d = 0, destinations_1 = destinations; _d < destinations_1.length; _d++) {
                var destination = destinations_1[_d];
                _loop_1(destination);
            }
            return { destinationPreferences: destinationPreferences, customPreferences: customPreferences };
        };
        return _this;
    }
    ConsentManager.prototype.render = function () {
        var _this = this;
        var _a = this.props, writeKey = _a.writeKey, otherWriteKeys = _a.otherWriteKeys, shouldRequireConsent = _a.shouldRequireConsent, implyConsentOnInteraction = _a.implyConsentOnInteraction, cookieDomain = _a.cookieDomain, bannerContent = _a.bannerContent, bannerSubContent = _a.bannerSubContent, bannerTextColor = _a.bannerTextColor, bannerBackgroundColor = _a.bannerBackgroundColor, preferencesDialogTitle = _a.preferencesDialogTitle, preferencesDialogContent = _a.preferencesDialogContent, cancelDialogTitle = _a.cancelDialogTitle, cancelDialogContent = _a.cancelDialogContent, customCategories = _a.customCategories, defaultDestinationBehavior = _a.defaultDestinationBehavior, onError = _a.onError;
        return (React.createElement(ConsentManagerBuilder, { onError: onError, writeKey: writeKey, otherWriteKeys: otherWriteKeys, shouldRequireConsent: shouldRequireConsent, cookieDomain: cookieDomain, initialPreferences: this.getInitialPreferences(), mapCustomPreferences: this.handleMapCustomPreferences, customCategories: customCategories, defaultDestinationBehavior: defaultDestinationBehavior }, function (_a) {
            var destinations = _a.destinations, customCategories = _a.customCategories, newDestinations = _a.newDestinations, preferences = _a.preferences, isConsentRequired = _a.isConsentRequired, setPreferences = _a.setPreferences, resetPreferences = _a.resetPreferences, saveConsent = _a.saveConsent, havePreferencesChanged = _a.havePreferencesChanged, workspaceAddedNewDestinations = _a.workspaceAddedNewDestinations;
            return React.createElement(Container, { customCategories: customCategories, destinations: destinations, newDestinations: newDestinations, preferences: preferences, isConsentRequired: isConsentRequired, setPreferences: setPreferences, resetPreferences: resetPreferences, saveConsent: saveConsent, closeBehavior: _this.props.closeBehavior, implyConsentOnInteraction: (implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0 ? implyConsentOnInteraction : ConsentManager.defaultProps.implyConsentOnInteraction), bannerContent: bannerContent, bannerSubContent: bannerSubContent, bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor, bannerBackgroundColor: bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor, preferencesDialogTitle: preferencesDialogTitle, preferencesDialogContent: preferencesDialogContent, cancelDialogTitle: cancelDialogTitle, cancelDialogContent: cancelDialogContent, havePreferencesChanged: havePreferencesChanged, defaultDestinationBehavior: defaultDestinationBehavior, workspaceAddedNewDestinations: workspaceAddedNewDestinations });
        }));
    };
    ConsentManager.displayName = 'ConsentManager';
    ConsentManager.defaultProps = {
        otherWriteKeys: [],
        shouldRequireConsent: function () { return true; },
        implyConsentOnInteraction: false,
        onError: undefined,
        cookieDomain: undefined,
        customCategories: undefined,
        bannerTextColor: '#fff',
        bannerSubContent: 'You can change your preferences at any time.',
        bannerBackgroundColor: '#1f4160',
        preferencesDialogTitle: 'Website Data Collection Preferences',
        cancelDialogTitle: 'Are you sure you want to cancel?',
        defaultDestinationBehavior: 'disable'
    };
    return ConsentManager;
}(PureComponent));
export default ConsentManager;
