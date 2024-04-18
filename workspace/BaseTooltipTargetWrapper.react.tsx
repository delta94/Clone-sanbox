__d("BaseTooltipTargetWrapper.react", ["FocusWithinHandler.react", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useEffect,
        m = b.useRef,
        n = b.useState,
        o = {
            inheritAll: {
                alignContent: "x4k7w5x",
                alignItems: "x1h91t0o",
                alignSelf: "x1h9r5lt",
                display: "x1jfb8zj",
                flexBasis: "xv2umb2",
                flexDirection: "x1beo9mf",
                flexGrow: "xaigb6o",
                flexShrink: "x12ejxvf",
                height: "x3igimt",
                justifyContent: "xarpa2k",
                maxHeight: "xedcshv",
                maxWidth: "x1lytzrv",
                minHeight: "x1t2pt76",
                minWidth: "x7ja8zs",
                width: "x1qrby5j",
                $$css: !0
            },
            wrapperInline: {
                display: "x3nfvp2",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.forceInlineDisplay,
            f = a.onHide,
            g = a.onShow,
            i = a.tooltipIdentifier;
        a = n(!1);
        var p = a[0];
        a = a[1];
        var q = n(!1),
            r = q[0];
        q = q[1];
        var s = p && r,
            t = m(s);
        l(function () {
            t.current !== s && (s ? g() : f()), t.current = s
        }, [f, g, s]);
        p = k(function (a) {
            var b = a.key;
            b === "Escape" && i != null && (f(), a.stopPropagation())
        }, [f, i]);
        return j.jsx("span", {
            "aria-describedby": i,
            className: (h || (h = c("stylex")))(o.inheritAll, e === !0 && o.wrapperInline),
            "data-testid": void 0,
            onKeyDown: p,
            onPointerEnter: g,
            onPointerLeave: f,
            onPointerUp: f,
            ref: b,
            children: j.jsx(c("FocusWithinHandler.react"), {
                onFocusChange: a,
                onFocusVisibleChange: q,
                children: d
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e
}), 98);

import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { FocusWithinHandler } from 'FocusWithinHandler'; // Assuming this is the correct import path
import { stylex } from 'stylex'; // Assuming this is the correct import path

interface BaseTooltipTargetWrapperProps {
  children: React.ReactNode;
  forceInlineDisplay?: boolean;
  onHide: () => void;
  onShow: () => void;
  tooltipIdentifier: string | null;
}

const styles = {
  inheritAll: {
    alignContent: "x4k7w5x",
    alignItems: "x1h91t0o",
    alignSelf: "x1h9r5lt",
    display: "x1jfb8zj",
    flexBasis: "xv2umb2",
    flexDirection: "x1beo9mf",
    flexGrow: "xaigb6o",
    flexShrink: "x12ejxvf",
    height: "x3igimt",
    justifyContent: "xarpa2k",
    maxHeight: "xedcshv",
    maxWidth: "x1lytzrv",
    minHeight: "x1t2pt76",
    minWidth: "x7ja8zs",
    width: "x1qrby5j",
    $$css: !0
  },
  wrapperInline: {
    display: "x3nfvp2",
    $$css: !0
  },
};

const BaseTooltipTargetWrapper: React.ForwardRefRenderFunction<any, BaseTooltipTargetWrapperProps> = (
  {
    children,
    forceInlineDisplay,
    onHide,
    onShow,
    tooltipIdentifier,
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedVisible, setIsFocusedVisible] = useState(false);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const { key } = event;
      if (key === 'Escape' && tooltipIdentifier != null) {
        onHide();
        event.stopPropagation();
      }
    },
    [onHide, tooltipIdentifier]
  );

  const handlePointerEnter = () => {
    onShow();
  };

  const handlePointerLeave = () => {
    onHide();
  };

  const handlePointerUp = () => {
    onHide();
  };

  const isVisible = isFocused && isFocusedVisible;

  const previousVisibilityRef = useRef(isVisible);

  useEffect(() => {
    if (previousVisibilityRef.current !== isVisible) {
      if (isVisible) {
        onShow();
      } else {
        onHide();
      }
      previousVisibilityRef.current = isVisible;
    }
  }, [isVisible, onShow, onHide]);

  return (
    <span
      aria-describedby={tooltipIdentifier}
      className={stylex(styles.inheritAll, forceInlineDisplay === true && styles.wrapperInline)}
      data-testid={undefined}
      onKeyDown={handleKeyDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      ref={ref}
    >
      <FocusWithinHandler
        onFocusChange={setIsFocused}
        onFocusVisibleChange={setIsFocusedVisible}
        children={children}
      />
    </span>
  );
};

BaseTooltipTargetWrapper.displayName = `${BaseTooltipTargetWrapper.name} [from ${f.id}]`;

export default forwardRef(BaseTooltipTargetWrapper);
