__d("CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react", ["CometMessagingJewelDropdownClassicEntrypoint", "CometSettingsBadgedDropdownTrigger.react", "MWJewelPopoverDialogContext.react", "MessageRequestsBulkActionsContext.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useContext;
    d("CometMessagingJewelDropdownClassicEntrypoint").DeferredRoot.getModuleId();

    function a(a) {
        var b = j(c("MessageRequestsBulkActionsContext.react"));
        b = b.isBulkActionsEditMode;
        var e = j(c("MWJewelPopoverDialogContext.react"));
        e = e.isOpenForDialog;
        return i.jsx(c("CometSettingsBadgedDropdownTrigger.react"), babelHelpers["extends"]({}, a, {
            doNotCloseOnOutsideClick: e || b,
            dropdownEntryPoint: d("CometMessagingJewelDropdownClassicEntrypoint").Entrypoint,
            preloadTrigger: "tooltip"
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);