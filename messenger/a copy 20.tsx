__d("FocusAppWrapper.react", ["ActiveFocusRegionUtilsContext", "FocusRegion.react", "react", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback
      , k = b.useRef;
    function a(a) {
        a = a.children;
        var b = k(null)
          , e = j(function() {
            return b.current
        }, [b])
          , f = j(function(a) {
            b.current = a
        }, [b]);
        e = c("useUnsafeRef_DEPRECATED")({
            getActiveFocusRegion: e,
            setActiveFocusRegion: f
        });
        return i.jsx(c("ActiveFocusRegionUtilsContext").Provider, {
            value: e.current,
            children: i.jsx(d("FocusRegion.react").FocusRegion, {
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React, { useCallback, useRef } from 'react';
import { ActiveFocusRegionUtilsContext } from './ActiveFocusRegionUtilsContext'; // Replace with the actual import path
import { FocusRegion } from './FocusRegion'; // Replace with the actual import path
import { useUnsafeRef_DEPRECATED } from './useUnsafeRef_DEPRECATED'; // Replace with the actual import path

const FocusAppWrapper = ({ children }) => {
  const activeFocusRegionRef = useRef(null);

  const getActiveFocusRegion = useCallback(() => {
    return activeFocusRegionRef.current;
  }, []);

  const setActiveFocusRegion = useCallback((focusRegion) => {
    activeFocusRegionRef.current = focusRegion;
  }, []);

  const focusRegionUtils = useUnsafeRef_DEPRECATED({
    getActiveFocusRegion,
    setActiveFocusRegion,
  });

  return (
    <ActiveFocusRegionUtilsContext.Provider value={focusRegionUtils.current}>
      <FocusRegion>{children}</FocusRegion>
    </ActiveFocusRegionUtilsContext.Provider>
  );
};

export default FocusAppWrapper;
