__d("CometVirtualization.react", ["BaseView.react", "HiddenSubtreeContextProvider.react", "HiddenSubtreePassiveContext", "VirtualizationContext", "gkx", "intersectionObserverEntryIsIntersecting", "justknobx", "nullIntersectionObserverEntryLogger", "react", "unrecoverableViolation", "useIntersectionObserver", "useMergeRefs", "usePrevious", "useVirtualizationContext"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useContext,
        k = e.useEffect,
        l = e.useRef,
        m = e.useState,
        n = function () {
            var a = null;
            return function () {
                if (a === null) {
                    var b;
                    b = (b = document) == null ? void 0 : b.documentElement;
                    if (b == null) throw c("unrecoverableViolation")("Scroll anchoring feature detection called in an environment without a documentElement", "comet_infra");
                    a = b.style.overflowAnchor != null
                }
                return a
            }
        }();

    function o() {
        var a = m(null),
            b = a[0],
            c = a[1];
        k(function () {
            b === null && c(function () {
                return n()
            })
        }, [b]);
        return (a = b) != null ? a : !1
    }
    var p = {
            invisible: {
                display: "x1s85apg",
                $$css: !0
            }
        },
        q = 4e3,
        r = 0,
        s = c("justknobx")._("1003");

    function t(a) {
        return typeof a.replace === "function" ? a.replace(/\n/g, " ").replace(/\s+/g, " ") : ""
    }

    function a() {
        if (typeof IntersectionObserver !== "function") return !1;
        return typeof IntersectionObserver.toString !== "function" ? !1 : t(IntersectionObserver.toString()).endsWith("{ [native code] }")
    }
    var u = a();

    function b(a) {
        var b = arguments,
            d, e, f = a.children,
            g = a.disableHidding,
            h = a.leftRightMargin,
            n = h === void 0 ? r : h,
            t = a.pinChildrenOnInteraction,
            v = a.pinChildrenWithPlayer,
            w = a.topBottomMargin,
            x = w === void 0 ? q : w,
            y = a.unmountHiddenChildren,
            z = l(null),
            A = l(null),
            B = j(c("HiddenSubtreePassiveContext")),
            C = m(!1),
            D = C[0],
            E = C[1],
            F = m(!0),
            G = F[0],
            H = F[1],
            I = m(null),
            J = I[0],
            K = I[1],
            L = c("usePrevious")(G),
            M = c("useVirtualizationContext")();
        k(function () {
            var a = function () {
                return J == null && !G
            }();
            A.current != null && a && K(A.current.getBoundingClientRect().height)
        }, [G, J, L]);
        var N = function (d) {
                c("nullIntersectionObserverEntryLogger")(d, "IntersectionObserverEntry is null. num_arguments=" + b.length);
                var a = B.getCurrentState().hiddenOrBackgrounded_FIXME;
                c("intersectionObserverEntryIsIntersecting")(d) ? (K(null), H(!0)) : a || H(!1)
            },
            O = {
                bottom: x,
                left: n,
                right: n,
                top: x
            },
            P = c("useIntersectionObserver")(N, {
                root: null,
                rootMargin: O,
                scrollMargin: babelHelpers["extends"]({}, O),
                threshold: 0
            }),
            Q = c("useMergeRefs")(P, z),
            R = function () {
                if (!G && J !== null && y !== !1) return {
                    minHeight: J
                }
            }(),
            S = !G && J !== null,
            T = o(),
            U = T ? Q : void 0;
        if (c("gkx")("22947")) return i.jsx("div", {
            className: "x78zum5 xdt5ytf",
            children: i.jsx(c("BaseView.react"), {
                children: f
            })
        });
        var V = function () {
                t === !0 && E(!0)
            },
            W = ((d = v) != null ? d : !1) && M.hasFlag("HAS_PLAYER"),
            X = u && s && y === !0 && S && !D && !M.hasPin() && !W,
            Y = !((e = g) != null ? e : !1) && S;
        return i.jsx(c("VirtualizationContext").Provider, {
            value: M,
            children: i.jsx("div", {
                className: "x78zum5 xdt5ytf",
                "data-testid": void 0,
                onClickCapture: V,
                onFocusCapture: V,
                onKeyPressCapture: V,
                ref: U,
                style: R,
                children: i.jsx(c("BaseView.react"), {
                    hidden: Y,
                    ref: A,
                    xstyle: Y && p.invisible,
                    children: X ? null : i.jsx(c("HiddenSubtreeContextProvider.react"), {
                        isHidden: Y,
                        children: f
                    })
                })
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}), 98);


import React, { useContext, useEffect, useRef, useState } from "react";
import BaseView from "BaseView.react";
import HiddenSubtreeContextProvider from "HiddenSubtreeContextProvider.react";
import { HiddenSubtreePassiveContext } from "HiddenSubtreePassiveContext";
import { VirtualizationContext } from "VirtualizationContext";
import { gkx } from "gkx";
import { intersectionObserverEntryIsIntersecting } from "intersectionObserverEntryIsIntersecting";
import { justknobx } from "justknobx";
import { nullIntersectionObserverEntryLogger } from "nullIntersectionObserverEntryLogger";
import { unrecoverableViolation } from "unrecoverableViolation";
import { useIntersectionObserver } from "useIntersectionObserver";
import { useMergeRefs } from "useMergeRefs";
import { usePrevious } from "usePrevious";
import { useVirtualizationContext } from "useVirtualizationContext";

const styles = {
  invisible: {
    display: "x1s85apg",
    $$css: true,
  },
};

const MAX_HEIGHT = 4000;
const DEFAULT_MARGIN = 0;
const JUSTKNOBX_1003 = justknobx._("1003");

function cleanString(str: string): string {
  return typeof str.replace === "function" ? str.replace(/\n/g, " ").replace(/\s+/g, " ") : "";
}

function hasNativeIntersectionObserver(): boolean {
  if (typeof IntersectionObserver !== "function") return false;
  return typeof IntersectionObserver.toString !== "function" ? false : cleanString(IntersectionObserver.toString()).endsWith("{ [native code] }");
}

const hasNativeObserver = hasNativeIntersectionObserver();

const CometVirtualization: React.FC<{
  children: React.ReactNode;
  disableHidding?: boolean;
  leftRightMargin?: number;
  pinChildrenOnInteraction?: boolean;
  pinChildrenWithPlayer?: boolean;
  topBottomMargin?: number;
  unmountHiddenChildren?: boolean;
}> = ({
  children,
  disableHidding,
  leftRightMargin = DEFAULT_MARGIN,
  pinChildrenOnInteraction,
  pinChildrenWithPlayer,
  topBottomMargin = MAX_HEIGHT,
  unmountHiddenChildren,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersectionObserverRef = useRef<HTMLDivElement>(null);
  const hiddenSubtreeContext = useContext(HiddenSubtreePassiveContext);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [height, setHeight] = useState<number | null>(null);
  const prevShouldRender = usePrevious(shouldRender);
  const virtContext = useVirtualizationContext();

  useEffect(() => {
    const shouldSetHeight = height === null && !shouldRender;
    if (intersectionObserverRef.current !== null && shouldSetHeight) {
      setHeight(intersectionObserverRef.current.getBoundingClientRect().height);
    }
  }, [shouldRender, height, prevShouldRender]);

  const onIntersection: IntersectionObserverCallback = (entries) => {
    nullIntersectionObserverEntryLogger(entries[0], `IntersectionObserverEntry is null. num_arguments=${arguments.length}`);
    const { hiddenOrBackgrounded_FIXME } = hiddenSubtreeContext.getCurrentState();
    if (intersectionObserverEntryIsIntersecting(entries[0])) {
      setHeight(null);
      setShouldRender(true);
    } else if (!hiddenOrBackgrounded_FIXME) {
      setShouldRender(false);
    }
  };

  const rootMargin = {
    bottom: topBottomMargin,
    left: leftRightMargin,
    right: leftRightMargin,
    top: topBottomMargin,
  };

  const observerRef = useIntersectionObserver(onIntersection, {
    root: null,
    rootMargin,
    scrollMargin: { ...rootMargin },
    threshold: 0,
  });

  const mergedRef = useMergeRefs(observerRef, ref);

  const style = shouldRender && height !== null && unmountHiddenChildren !== false ? { minHeight: height } : undefined;

  const shouldHide = !shouldRender && height !== null;
  const hasScrollAnchor = useHasScrollAnchor();
  const shouldUseObserver = hasScrollAnchor ? mergedRef : undefined;

  const onInteraction = () => {
    if (pinChildrenOnInteraction === true) {
      setIsVisible(true);
    }
  };

  const hasPlayer = (pinChildrenWithPlayer ?? false) && virtContext.hasFlag("HAS_PLAYER");
  const shouldUnmount = hasNativeObserver && JUSTKNOBX_1003 && unmountHiddenChildren === true && shouldHide && !isVisible && !virtContext.hasPin() && !hasPlayer;
  const shouldHideDiv = !((disableHidding ?? false) || false) && shouldHide;

  return (
    <VirtualizationContext.Provider value={virtContext}>
      <div
        className="x78zum5 xdt5ytf"
        data-testid={undefined}
        onClickCapture={onInteraction}
        onFocusCapture={onInteraction}
        onKeyPressCapture={onInteraction}
        ref={shouldUseObserver}
        style={style}
      >
        <BaseView
          hidden={shouldHideDiv}
          ref={intersectionObserverRef}
          xstyle={shouldHideDiv && styles.invisible}
        >
          {shouldUnmount ? null : (
            <HiddenSubtreeContextProvider isHidden={shouldHideDiv}>
              {children}
            </HiddenSubtreeContextProvider>
          )}
        </BaseView>
      </div>
    </VirtualizationContext.Provider>
  );
};

CometVirtualization.displayName = CometVirtualization.name + " [from " + __filename + "]";

export default CometVirtualization;

function useHasScrollAnchor(): boolean {
  const [hasAnchor, setHasAnchor] = useState<boolean | null>(null);

  useEffect(() => {
    if (hasAnchor === null) {
      setHasAnchor(() => {
        const documentElement = (document as any)?.documentElement;
        if (documentElement == null) {
          throw unrecoverableViolation(
            "Scroll anchoring feature detection called in an environment without a documentElement",
            "comet_infra"
          );
        }
        return documentElement.style.overflowAnchor != null;
      });
    }
  }, [hasAnchor]);

  return hasAnchor ?? false;
}