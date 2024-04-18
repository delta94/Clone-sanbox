__d("GeminiNavAndChannelContext", ["FluxHooks", "WorkGalahadNavStore", "cr:8950", "emptyFunction", "gkx", "react", "useCometRouterState", "useGeminiHoverState", "usePrevious"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback,
        k = e.useContext,
        l = e.useEffect,
        m = e.useLayoutEffect,
        n = e.useMemo,
        o = e.useState,
        p = c("gkx")("6525");
    e = { 
        isAutoHideEnabled: !1,
        isChannelToggleSelected: !0,
        isChannelVisible: !0,
        isNavHovered: !1,
        setIsAutoHideEnabled: c("emptyFunction"),
        onMouseEnter: c("emptyFunction"),
        onMouseLeave: c("emptyFunction")
    };
    var q = i.createContext(e);
    q.displayName = "GeminiLayoutNavStateContext";

    function r() {
        return c("WorkGalahadNavStore").getSelectedAppTabID()
    }

    function s(a, b, e) {
        var f, g = d("FluxHooks").useFluxStore(c("WorkGalahadNavStore"), r),
            h = c("usePrevious")(g);
        f = (f = c("useCometRouterState")()) != null ? f : {};
        var i = f.routeKey,
            j = c("usePrevious")(i);
        f = o(function () {
            return !a && b === !0 ? !0 : e
        });
        var k = f[0],
            n = f[1];
        l(function () {
            g !== h && h != null && !a ? n(!1) : i !== j && j != null && !a && !k && n(!0)
        }, [i, j, a, b, e, k, g, h]);
        m(function () {
            a !== b && n(!a && b === !0 ? !0 : b == null || e)
        }, [e, a, b]);
        return [k, n]
    }

    function t(a, b, c, d) {
        return a ? p || !b || d : !c
    }

    function u(a, b, c) {
        return t(a, b, c, !1)
    }

    function a(a) {
        a = a.children;
        var d = c("useGeminiHoverState")(),
            e = d[0];
        d = d[1];
        var f = d.onMouseEnter,
            g = d.onMouseLeave;
        d = o(!1);
        var h = d[0],
            k = d[1],
            l = b("cr:8950").useGeminiLayoutShouldLHSBeVisibleByDefault();
        d = c("usePrevious")(l);
        d = s(l, d, h);
        var m = d[0],
            p = d[1],
            r = t(l, h, m, e),
            v = u(l, h, m),
            w = j(function (a) {
                l || p(a), k(a)
            }, [l, p, k]);
        d = n(function () {
            return {
                isNavHovered: l ? e : !1,
                isChannelToggleSelected: v,
                isChannelVisible: r,
                isAutoHideEnabled: l ? h : m,
                setIsAutoHideEnabled: w,
                onMouseEnter: f,
                onMouseLeave: g
            }
        }, [l, e, v, r, h, m, w, f, g]);
        return i.jsx(q.Provider, {
            value: d,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = function () {
        return k(q)
    };
    g.Provider = a;
    g.useNavUIState = e
}), 98);


import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState, createContext } from 'react';
import { useFluxStore } from 'FluxHooks';
import { WorkGalahadNavStore, getSelectedAppTabID } from 'WorkGalahadNavStore';
import { emptyFunction } from 'emptyFunction';
import { gkx } from 'gkx';
import { useCometRouterState } from 'useCometRouterState';
import { useGeminiHoverState } from 'useGeminiHoverState';
import { usePrevious } from 'usePrevious';
import useGeminiLayoutShouldLHSBeVisibleByDefault from "GeminiLayoutNonResponsiveBreakpoints"
interface GeminiNavAndChannelContextValue {
  isAutoHideEnabled: boolean;
  isChannelToggleSelected: boolean;
  isChannelVisible: boolean;
  isNavHovered: boolean;
  setIsAutoHideEnabled: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const defaultValue: GeminiNavAndChannelContextValue = {
  isAutoHideEnabled: false,
  isChannelToggleSelected: true,
  isChannelVisible: true,
  isNavHovered: false,
  setIsAutoHideEnabled: emptyFunction,
  onMouseEnter: emptyFunction,
  onMouseLeave: emptyFunction,
};

const GeminiNavAndChannelContext = createContext<GeminiNavAndChannelContextValue>(defaultValue);
GeminiNavAndChannelContext.displayName = 'GeminiLayoutNavStateContext';

function getSelectedTabID() {
  return WorkGalahadNavStore.getSelectedAppTabID();
}

function useAutoHideState(
  shouldHideByDefault: boolean,
  previousShouldHideByDefault: boolean,
  initialIsAutoHideEnabled: boolean
): [boolean, () => void] {
  const selectedTabID = useFluxStore(WorkGalahadNavStore, getSelectedTabID);
  const previousSelectedTabID = usePrevious(selectedTabID);
  const routerState = useCometRouterState() ?? {};
  const { routeKey } = routerState;
  const previousRouteKey = usePrevious(routeKey);

  const [isAutoHideEnabled, setIsAutoHideEnabled] = React.useState(() => {
    if (!shouldHideByDefault && previousShouldHideByDefault) {
      return true;
    }
    return initialIsAutoHideEnabled;
  });

  useEffect(() => {
    if (selectedTabID !== previousSelectedTabID && previousSelectedTabID != null && !shouldHideByDefault) {
        setIsAutoHideEnabled(false);
    } else if (routeKey !== previousRouteKey && previousRouteKey != null && !shouldHideByDefault && !isAutoHideEnabled) {
        setIsAutoHideEnabled(true);
    }
  }, [routeKey, previousRouteKey, shouldHideByDefault, previousShouldHideByDefault, isAutoHideEnabled, setIsAutoHideEnabled, selectedTabID, previousSelectedTabID]);

  useLayoutEffect(() => {
    if (shouldHideByDefault !== previousShouldHideByDefault) {
        setIsAutoHideEnabled(shouldHideByDefault && (previousShouldHideByDefault ? true : previousShouldHideByDefault === null || initialIsAutoHideEnabled));
    }
  }, [initialIsAutoHideEnabled, shouldHideByDefault, previousShouldHideByDefault]);

  return [isAutoHideEnabled, setIsAutoHideEnabled];
}

function shouldShowNav(shouldHideByDefault: boolean, isAutoHideEnabled: boolean, isNavHovered: boolean, forceShow: boolean): boolean {
  return shouldHideByDefault ? gkx('6525') || !isAutoHideEnabled || forceShow : !isNavHovered;
}

function shouldShowChannelToggle(shouldHideByDefault: boolean, isAutoHideEnabled: boolean, isNavHovered: boolean): boolean {
  return shouldShowNav(shouldHideByDefault, isAutoHideEnabled, isNavHovered, false);
}

function GeminiNavAndChannelProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, hoverHandlers] = useGeminiHoverState();
  const { onMouseEnter, onMouseLeave } = hoverHandlers
  const [wasAutoHidden, setWasAutoHidden] = React.useState(false);

  const shouldLHSBeVisibleByDefault = useGeminiLayoutShouldLHSBeVisibleByDefault();
  const prevShouldHideByDefault = usePrevious(shouldLHSBeVisibleByDefault);

   const [isAutoHidden, setIsAutoHidden] = useAutoHideState(
    shouldLHSBeVisibleByDefault, 
    prevShouldHideByDefault,
    wasAutoHidden
  );

  const isChannelVisible = shouldShowNav(
    shouldLHSBeVisibleByDefault, 
    wasAutoHidden,
    isAutoHidden,
    isHovered
  );

  const isChannelToggleSelected = shouldShowChannelToggle(
    shouldLHSBeVisibleByDefault,
    wasAutoHidden,
    isAutoHidden
  );

  const handleSetIsAutoHideEnabled = useCallback((nextIsAutoHideEnabled) => {
    if (!shouldLHSBeVisibleByDefault) {
        setIsAutoHidden()
        setWasAutoHidden(nextIsAutoHideEnabled);
    }
    setWasAutoHidden(nextIsAutoHideEnabled);
  }, [shouldLHSBeVisibleByDefault, setWasAutoHidden, setWasAutoHidden]);

  const value = useMemo(() => ({
    isNavHovered: shouldLHSBeVisibleByDefault ? isHovered : false,
    isChannelToggleSelected: isChannelToggleSelected,
    isChannelVisible: isChannelVisible,
    isAutoHideEnabled: shouldLHSBeVisibleByDefault ? wasAutoHidden : isAutoHidden,
    setIsAutoHideEnabled: handleSetIsAutoHideEnabled,
    onMouseEnter,
    onMouseLeave,
  }), [shouldLHSBeVisibleByDefault, isHovered, isChannelVisible, wasAutoHidden, isAutoHidden, handleSetIsAutoHideEnabled, onMouseEnter, onMouseLeave]);

  return (
    <GeminiNavAndChannelContext.Provider value={value}>
      {children}
    </GeminiNavAndChannelContext.Provider>
  );
}

export { GeminiNavAndChannelProvider, GeminiNavAndChannelContext };
