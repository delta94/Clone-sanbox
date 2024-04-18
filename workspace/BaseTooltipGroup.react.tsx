__d("BaseTooltipGroup.react", ["BaseTooltipTargetWrapper.react", "react", "recoverableViolation", "useDelayedState", "useStable"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback,
        k = e.useContext,
        l = e.useId,
        m = e.useMemo,
        n = e.useRef,
        o = e.useState,
        p = i.createContext(null);

    function a(a) {
        var b = a.children;
        a = a.tooltipImpl;
        var d = c("useDelayedState")(!1),
            e = d[0],
            f = d[1];
        d = o(null);
        var g = d[0],
            h = d[1],
            j = l(),
            k = g != null && g.contentKey != null ? g.contentKey : null;
        d = m(function () {
            return {
                activeContentKey: k,
                isVisible: e,
                onHide: function (a, b) {
                    f(!1, a, b)
                },
                onShow: function (a, b, c) {
                    h(a), f(!0, b, c)
                },
                tooltipIdentifier: j
            }
        }, [k, e, j, f]);
        return i.jsxs(i.Fragment, {
            children: [i.jsx(p.Provider, {
                value: d,
                children: b
            }), g != null ? i.jsx(a, babelHelpers["extends"]({}, g, {
                id: e ? j : void 0,
                isVisible: e
            })) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var q = 0;

    function r() {
        return "tooltip-" + q++
    }

    function b(a) {
        var b = a.disabled,
            d = b === void 0 ? !1 : b,
            e = a.hideDelayMs,
            f = a.showDelayMs;
        b = a.children;
        var g = a.forceInlineDisplay,
            h = a.onVisibilityChange,
            l = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "hideDelayMs", "showDelayMs", "children", "forceInlineDisplay", "onVisibilityChange"]),
            m = c("useStable")(r),
            o = n(null);
        a = k(p);
        var q = a || {},
            s = q.activeContentKey,
            t = q.isVisible;
        t = t === void 0 ? !1 : t;
        var u = q.onHide,
            v = q.onShow;
        q = q.tooltipIdentifier;
        var w = j(function () {
                !d && v && v(babelHelpers["extends"]({
                    contentKey: m,
                    contextRef: o
                }, l), f, h)
            }, [d, v, m, l, f, h]),
            x = j(function () {
                u && u(e, h)
            }, [e, u, h]);
        a == null && c("recoverableViolation")("BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ", "comet_ui");
        return i.jsx(c("BaseTooltipTargetWrapper.react"), {
            forceInlineDisplay: g,
            onHide: x,
            onShow: w,
            ref: o,
            tooltipIdentifier: t && s === m ? q : void 0,
            children: b
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.Context = p;
    g.Container = a;
    g.Child = b
}), 98);


import React, { useCallback, createContext, useContext, useMemo, useRef, useState, useId } from 'react';
import { recoverableViolation } from 'recoverableViolation'; // Assuming this is the correct import path
import useDelayedState from 'useDelayedState'; // Assuming this is the correct import path
import useStable from 'useStable'; // Assuming this is the correct import path
import { BaseTooltipTargetWrapper } from 'BaseTooltipTargetWrapper.react';

type TooltipContextType = {
  activeContentKey: string | null;
  isVisible: boolean;
  onHide: (delayMs: number, onVisibilityChange?: () => void) => void;
  onShow: (props: any, delayMs: number, onVisibilityChange?: () => void) => void;
  tooltipIdentifier: string;
};

const Context = createContext<TooltipContextType | null>(null);

const Container: React.FC<{ children: React.ReactNode; tooltipImpl: React.ComponentType<any> }> = (props) => {
  const  {
    children,
    tooltipImpl: TooltipImpl,
  } = props
  const [isVisible, setIsVisible] = useDelayedState(false);
  const [activeTooltip, setActiveTooltip] = useState<{
    contentKey: string | null;
    contextRef: any
  } | null>(null);  const tooltipIdentifierRef = useRef<string | null>(null);
  const id = useId();
  const contentKey = activeTooltip?.contentKey ?? null;

  const contextValue = useMemo(() => {
    const onHide = (delayMs: number, onVisibilityChange: () => void) => {
      setIsVisible(false, delayMs, onVisibilityChange);
    };

    const onShow = (props: any, delayMs: number, onVisibilityChange: () => void) => {
      setIsVisible(true, delayMs, onVisibilityChange);
      setActiveTooltip(props);
    };

    return {
      activeContentKey: contentKey,
      isVisible,
      onHide,
      onShow,
      tooltipIdentifier: id,
    };
  }, [setActiveTooltip, isVisible, setIsVisible, id]);

  return (
    <>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
      {isVisible && <TooltipImpl id={isVisible ? id : undefined} isVisible={isVisible} {...isVisible} />}
    </>
  );
};

Container.displayName = `Container [from ${__filename}]`;

let nextId = 0;
const generateUniqueId = () => `tooltip-${nextId++}`;

const Child: React.FC<{
  children: React.ReactNode;
  disabled?: boolean;
  hideDelayMs?: number;
  showDelayMs?: number;
  forceInlineDisplay?: boolean;
  onVisibilityChange?: (isVisible: boolean) => void;
}> = ({ children, disabled = false, hideDelayMs, showDelayMs, forceInlineDisplay, onVisibilityChange, ...rest }) => {
  const id = useStable(generateUniqueId);
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(Context);

  const {
    activeContentKey,
    isVisible = false,
    onHide,
    onShow,
    tooltipIdentifier,
  } = context ?? {};

  const showTooltip = useCallback(() => {
    if (!disabled) {
      onShow?.({
        contentKey: id,
        contextRef: ref,  
        ...rest
      }, showDelayMs, onVisibilityChange);
    }
  }, [disabled, onShow, id, rest, showDelayMs, onVisibilityChange]);

  const hideTooltip = useCallback(() => {
    onHide?.(hideDelayMs, onVisibilityChange);
  }, [hideDelayMs, onHide, onVisibilityChange]);

  if (!context) {
    recoverableViolation(
      'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component.',
      'comet_ui'
    );
  }

  return (
    <BaseTooltipTargetWrapper
      ref={ref}
      forceInlineDisplay={forceInlineDisplay}
      onHide={hideTooltip}
      onShow={showTooltip}
      tooltipIdentifier={
        isVisible && activeContentKey === id ? tooltipIdentifier : undefined
      }
    >
      {children}
    </BaseTooltipTargetWrapper>
  );
};

Child.displayName = `Child [from ${__filename}]`;

export default {
    Context,
    Container,
    Child
  };