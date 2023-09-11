__d("BaseTypeahead.react", ["CometHeroInteractionContextPassthrough.react", "CometInternalTypeahead.react", "CometInternalTypeaheadFetchProvider", "CometInternalTypeaheadStateProvider", "emptyFunction", "react", "useCometUniqueID", "withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useMemo;

    function a(a) {
        var b = a.autoOpen;
        b = b === void 0 ? !1 : b;
        var d = a.autoFocus;
        d = d === void 0 ? !1 : d;
        var e = a.inputStrategyRenderer,
            f = a.dataSource,
            g = a.dataSourceFetchConfigParams,
            k = a.decorators,
            l = k === void 0 ? [] : k;
        k = a.emptyEntries_DO_NOT_USE;
        var m = a.id,
            n = a.isDisabled;
        n = n === void 0 ? !1 : n;
        var o = a.label;
        o = o === void 0 ? "" : o;
        var p = a.loggingContext,
            q = a.onBackspace;
        q = q === void 0 ? c("emptyFunction") : q;
        var r = a.onBlur;
        r = r === void 0 ? c("emptyFunction") : r;
        var s = a.onChange,
            t = a.onClose;
        t = t === void 0 ? c("emptyFunction") : t;
        var u = a.onEnter;
        u = u === void 0 ? c("emptyFunction") : u;
        var v = a.onEscape;
        v = v === void 0 ? c("emptyFunction") : v;
        var w = a.onFetchEntries_DO_NOT_USE,
            x = a.onFocus;
        x = x === void 0 ? c("emptyFunction") : x;
        var y = a.onOpen;
        y = y === void 0 ? c("emptyFunction") : y;
        var z = a.onPressEntry,
            A = a.placeholder;
        A = A === void 0 ? "" : A;
        var B = a.shouldQueryStringFollowHighlightedEntry,
            C = B === void 0 ? !0 : B;
        B = a.shouldQueryStringUpdateFromSelectedEntryOnClick;
        var D = B === void 0 ? !0 : B;
        B = a.testid;
        B = B === void 0 ? "" : B;
        B = a.traceProvider;
        var E = a.viewRole;
        E = E === void 0 ? "listbox" : E;
        var F = a.viewStrategyRenderer,
            G = a.inputRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["autoOpen", "autoFocus", "inputStrategyRenderer", "dataSource", "dataSourceFetchConfigParams", "decorators", "emptyEntries_DO_NOT_USE", "id", "isDisabled", "label", "loggingContext", "onBackspace", "onBlur", "onChange", "onClose", "onEnter", "onEscape", "onFetchEntries_DO_NOT_USE", "onFocus", "onOpen", "onPressEntry", "placeholder", "shouldQueryStringFollowHighlightedEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick", "testid", "traceProvider", "viewRole", "viewStrategyRenderer", "inputRef"]);
        var H = c("useCometUniqueID")(),
            I = j(function () {
                var a = c("CometInternalTypeahead.react");
                l.forEach(function (b) {
                    var c = b.decorate;
                    b = b.params;
                    a = c(a, b)
                });
                return a
            }, [l]),
            J = i(function (a) {
                D && s(a.label), z && z(a)
            }, [s, z, D]),
            K = j(function () {
                return c("withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry")(e, {
                    shouldQueryStringFollowHighlightedEntry: C
                })
            }, [e, C]);
        o = o || A;
        return h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
            clear: !0,
            children: h.jsx(c("CometInternalTypeaheadStateProvider"), {
                autoOpen: b,
                emptyEntries_DO_NOT_USE: k,
                onClose: t,
                onOpen: y,
                children: h.jsx(c("CometInternalTypeaheadFetchProvider"), {
                    dataSource: f,
                    dataSourceFetchConfigParams: g,
                    loggingContext: p,
                    onFetchEntries_DO_NOT_USE: w,
                    traceProvider: B,
                    children: h.jsx(I, babelHelpers["extends"]({}, a, {
                        autoFocus: d,
                        id: (b = m) != null ? b : H,
                        inputRef: G,
                        inputStrategyRenderer: K,
                        isDisabled: n,
                        label: o,
                        onBackspace: q,
                        onBlur: r,
                        onChange: s,
                        onDownArrow: c("emptyFunction"),
                        onEnter: u,
                        onEscape: v,
                        onFocus: x,
                        onHighlightEntry: c("emptyFunction"),
                        onPressEntry: J,
                        onShiftTab: c("emptyFunction"),
                        onTab: c("emptyFunction"),
                        onUpArrow: c("emptyFunction"),
                        placeholder: A,
                        testid: void 0,
                        traceProvider: B,
                        viewRole: E,
                        viewStrategyRenderer: F
                    }))
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { useCallback, useMemo } from "react";
import { CometHeroInteractionContextPassthrough } from "CometHeroInteractionContextPassthrough.react";
import {
CometInternalTypeahead,
CometInternalTypeaheadFetchProvider,
CometInternalTypeaheadStateProvider,
emptyFunction,
useCometUniqueID,
withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry,
} from "react";

const BaseTypeahead = ({
autoOpen = false,
autoFocus = false,
inputStrategyRenderer: InputStrategyRenderer,
dataSource,
dataSourceFetchConfigParams,
decorators = [],
emptyEntries_DO_NOT_USE,
id,
isDisabled = false,
label = "",
loggingContext,
onBackspace = emptyFunction,
onBlur = emptyFunction,
onChange = emptyFunction,
onClose = emptyFunction,
onEnter = emptyFunction,
onEscape = emptyFunction,
onFetchEntries_DO_NOT_USE,
onFocus = emptyFunction,
onOpen = emptyFunction,
onPressEntry,
placeholder = "",
shouldQueryStringFollowHighlightedEntry = true,
shouldQueryStringUpdateFromSelectedEntryOnClick = true,
testid = "",
traceProvider,
viewRole = "listbox",
viewStrategyRenderer: ViewStrategyRenderer,
inputRef: InputRef,
...props
}) => {
const uniqueID = useCometUniqueID();
const decoratedTypeahead = useMemo(() => {
let decoratedTypeahead = CometInternalTypeahead;
decorators.forEach((decorator) => {
const { decorate, params } = decorator;
decoratedTypeahead = decorate(decoratedTypeahead, params);
});
return decoratedTypeahead;
}, [decorators]);

const handlePressEntry = useCallback(
(entry) => {
if (shouldQueryStringUpdateFromSelectedEntryOnClick) {
onChange(entry.label);
}
if (onPressEntry) {
onPressEntry(entry);
}
},
[onChange, onPressEntry, shouldQueryStringUpdateFromSelectedEntryOnClick]
);

const inputStrategyRenderer = useMemo(
() =>
withCometTypeaheadInputStrategyShouldQueryStringFollowHighlightedEntry(InputStrategyRenderer, {
shouldQueryStringFollowHighlightedEntry,
}),
[InputStrategyRenderer, shouldQueryStringFollowHighlightedEntry]
);

label = label || placeholder;

return (
<CometHeroInteractionContextPassthrough clear={true}>
<CometInternalTypeaheadStateProvider
     autoOpen={autoOpen}
     emptyEntries_DO_NOT_USE={emptyEntries_DO_NOT_USE}
     onClose={onClose}
     onOpen={onOpen}
   >
<CometInternalTypeaheadFetchProvider
       dataSource={dataSource}
       dataSourceFetchConfigParams={dataSourceFetchConfigParams}
       loggingContext={loggingContext}
       onFetchEntries_DO_NOT_USE={onFetchEntries_DO_NOT_USE}
       traceProvider={traceProvider}
     >
<decoratedTypeahead
{...props}
autoFocus={autoFocus}
id={id !== null && id !== undefined ? id : uniqueID}
inputRef={InputRef}
inputStrategyRenderer={inputStrategyRenderer}
isDisabled={isDisabled}
label={label}
onBackspace={onBackspace}
onBlur={onBlur}
onChange={onChange}
onDownArrow={emptyFunction}
onEnter={onEnter}
onEscape={onEscape}
onFocus={onFocus}
onHighlightEntry={emptyFunction}
onPressEntry={handlePressEntry}
onShiftTab={emptyFunction}
onTab={emptyFunction}
onUpArrow={emptyFunction}
placeholder={placeholder}
testid={testid}
traceProvider={traceProvider}
viewRole={viewRole}
viewStrategyRenderer={ViewStrategyRenderer}
/>
</CometInternalTypeaheadFetchProvider>
</CometInternalTypeaheadStateProvider>
</CometHeroInteractionContextPassthrough>
);
};

export default BaseTypeahead;