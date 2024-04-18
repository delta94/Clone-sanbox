__d("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useCallback;

    function a(a) {
        return function (b) {
            var c = b.inputRef,
                d = b.onChange,
                e = b.onPressEntry,
                f = b.shouldQueryStringUpdateFromSelectedEntryOnClick;
            f = f === void 0 ? !1 : f;
            b = babelHelpers.objectWithoutPropertiesLoose(b, ["inputRef", "onChange", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
            var g = j(function (a) {
                var b = a.metaData.markers,
                    c = a.subtype;
                c = c === "recent" && b.has("entity") || b.has("direct_nav");
                d(c ? "" : a.label);
                e && e(a)
            }, [d, e]);
            return i.jsx(a, babelHelpers["extends"]({}, b, {
                inputRef: c,
                onChange: d,
                onPressEntry: g,
                shouldQueryStringUpdateFromSelectedEntryOnClick: f
            }))
        }
    }
    g["default"] = a
}), 98);


import React, { FC, useCallback } from 'react';

const withSearchCometGlobalTypeaheadCleanStateOnEntrySelection: FC<
  withSearchCometGlobalTypeaheadCleanStateOnEntrySelectionProps
> = ({ WrappedComponent }) => {
  return ({
    inputRef,
    onChange,
    onPressEntry,
    shouldQueryStringUpdateFromSelectedEntryOnClick = false,
    ...restProps
  }) => {
    const handleEntryPress = useCallback(
      (entry) => {
        const { markers, subtype } = entry.metaData;
        const shouldClearInput =
          subtype === 'recent' &&
          (markers.has('entity') || markers.has('direct_nav'));
        onChange(shouldClearInput ? '' : entry.label);
        onPressEntry?.(entry);
      },
      [onChange, onPressEntry]
    );

    return <WrappedComponent {...restProps} inputRef={inputRef} onChange={onChange} onPressEntry={handleEntryPress} shouldQueryStringUpdateFromSelectedEntryOnClick={shouldQueryStringUpdateFromSelectedEntryOnClick} />;
  };
};

export default withSearchCometGlobalTypeaheadCleanStateOnEntrySelection;

interface withSearchCometGlobalTypeaheadCleanStateOnEntrySelectionProps {
  WrappedComponent: FC;
}
