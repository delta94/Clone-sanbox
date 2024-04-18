__d("BaseTooltip.react", ["BaseTooltipGroup.react", "BaseTooltipTargetWrapper.react", "react", "useDelayedState"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
        k = b.useContext,
        l = b.useId,
        m = b.useRef,
        n = 50,
        o = 300;

    function p(a) {
        var b = a.delayTooltipMs,
            d = b === void 0 ? o : b;
        b = a.disabled;
        var e = b === void 0 ? !1 : b;
        b = a.tooltipImpl;
        var f = a.children,
            g = a.forceInlineDisplay,
            h = a.onVisibilityChange;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["delayTooltipMs", "disabled", "tooltipImpl", "children", "forceInlineDisplay", "onVisibilityChange"]);
        var k = c("useDelayedState")(!1),
            n = k[0],
            p = k[1];
        k = m(null);
        var q = l(),
            r = j(function () {
                if (e) return;
                p(!0, d, h)
            }, [d, e, h, p]),
            s = j(function () {
                p(!1, 0, h)
            }, [h, p]);
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("BaseTooltipTargetWrapper.react"), {
                forceInlineDisplay: g,
                onHide: s,
                onShow: r,
                ref: k,
                tooltipIdentifier: n ? q : void 0,
                children: f
            }), i.jsx(b, babelHelpers["extends"]({}, a, {
                contentKey: null,
                contextRef: k,
                id: n ? q : void 0,
                isVisible: n
            }))]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function a(a) {
        var b = k(d("BaseTooltipGroup.react").Context);
        if (b != null) {
            b = a.delayTooltipMs;
            b = b === void 0 ? o : b;
            a.tooltipImpl;
            var c = babelHelpers.objectWithoutPropertiesLoose(a, ["delayTooltipMs", "tooltipImpl"]);
            return i.jsx(d("BaseTooltipGroup.react").Child, babelHelpers["extends"]({}, c, {
                hideDelayMs: n,
                showDelayMs: b
            }))
        }
        return i.jsx(p, babelHelpers["extends"]({}, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { Fragment, useCallback, useContext, useRef, useId, JSX } from 'react';
import { BaseTooltipGroupContext, Child } from 'BaseTooltipGroup.react'; // Assuming these are the correct import paths
import BaseTooltipTargetWrapper from 'BaseTooltipTargetWrapper.react'; // Assuming this is the correct import path
import useDelayedState from 'useDelayedState'; // Assuming this is the correct import path

const delayShowMs = 50;
const delayHideMs = 300;

interface BaseTooltipProps {
  delayTooltipMs?: number;
  disabled?: boolean;
  tooltipImpl: React.ComponentType<any>;
  children: React.ReactNode;
  forceInlineDisplay?: boolean;
  onVisibilityChange?: (isVisible: boolean) => void;
}

function BaseTooltip({
  delayTooltipMs = delayHideMs,
  disabled = false,
  tooltipImpl: TooltipComponent,
  children,
  forceInlineDisplay,
  onVisibilityChange,
  ...rest
}: BaseTooltipProps): JSX.Element {
  const [isVisible, setIsVisible] = useDelayedState(false);
  const targetRef = useRef(null);
  const tooltipId = useId();

  const handleShow = useCallback(() => {
    if (disabled) return;
    setIsVisible(true, delayTooltipMs, onVisibilityChange);
  }, [delayTooltipMs, disabled, onVisibilityChange, setIsVisible]);

  const handleHide = useCallback(() => {
    setIsVisible(false, 0, onVisibilityChange);
  }, [onVisibilityChange, setIsVisible]);

  return (
    <Fragment>
      <BaseTooltipTargetWrapper
        forceInlineDisplay={forceInlineDisplay}
        onHide={handleHide}
        onShow={handleShow}
        ref={targetRef}
        tooltipIdentifier={isVisible ? tooltipId : undefined}
      >
        {children}
      </BaseTooltipTargetWrapper>
      <TooltipComponent
        {...rest}
        contentKey={null}
        contextRef={targetRef}
        id={isVisible ? tooltipId : undefined}
        isVisible={isVisible}
      />
    </Fragment>
  );
}

BaseTooltip.displayName = `${BaseTooltip.name} [from ${f.id}]`;

function BaseTooltipWrapper(props: BaseTooltipProps): JSX.Element {
  const tooltipGroupContext = useContext(BaseTooltipGroupContext);
  if (tooltipGroupContext != null) {
    const delayTooltipMs = props.delayTooltipMs ?? delayHideMs;
    const { tooltipImpl, ...rest } = props;
    return (
      <Child
        {...rest}
        hideDelayMs={delayShowMs}
        showDelayMs={delayTooltipMs}
      />
    );
  }
  return <BaseTooltip {...props} />;
}

BaseTooltipWrapper.displayName = `${BaseTooltipWrapper.name} [from ${f.id}]`;

export default BaseTooltipWrapper;
