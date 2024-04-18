__d("ReQLScrollAnchored.react", ["BaseScrollableAreaContext", "BaseThemeProvider.react", "CometPlaceholder.react", "CometSSRSuspendOnServer.react", "gkx", "intersectionObserverEntryIsIntersecting", "react", "stylex", "useResizeObserver"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    e = b.forwardRef;
    var k = b.useCallback,
        aa = b.useContext,
        ba = b.useEffect,
        ca = b.useImperativeHandle,
        da = b.useLayoutEffect,
        l = b.useMemo,
        m = b.useRef,
        ea = b.useState,
        n = function (b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a, c;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                return (a = c = b.call.apply(b, [this].concat(e)) || this, c.render = function () {
                    return c.props.children
                }, a) || babelHelpers.assertThisInitialized(c)
            }
            var c = a.prototype;
            c.componentDidUpdate = function (a, b, c) {
                b = a.children;
                this.props.componentDidUpdate(b, c)
            };
            c.getSnapshotBeforeUpdate = function (a) {
                a = a.children;
                return this.props.getSnapshotBeforeUpdate(a)
            };
            return a
        }(j.PureComponent),
        o = {
            contentMinHeight: {
                minHeight: "x1us19tq",
                $$css: !0
            },
            disableScrollAnchoring: {
                overflowAnchor: "x1xzczws",
                $$css: !0
            },
            scrollArea: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                flexShrink: "xs83m0k",
                overflowAnchor: "x1xzczws",
                overflowX: "x6ikm8r",
                overflowY: "x1rife3k",
                position: "x1n2onr6",
                scrollbarColor: "x1l87tbt",
                width: "xh8yej3",
                $$css: !0
            },
            wrapper: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                flexGrow: "x1iyjqo2",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                position: "x1n2onr6",
                $$css: !0
            }
        },
        p = typeof ResizeObserver !== "undefined";

    function fa(a) {
        var b = a.clientHeight;
        a = a.scrollTop;
        return a > b * 2
    }

    function ga(a, b) {
        return a - b.scrollTop > b.clientHeight * 2
    }
    var ha = 5;

    function a(a, b) {
        var d = a.hasReachedBottom,
            e = d === void 0 ? !0 : d;
        d = a.hasReachedTop;
        var f = d === void 0 ? !0 : d;
        d = a.setScrollTopInResetForBottomAnchor;
        var g = d === void 0 ? !0 : d,
            i = a.initialAnchor,
            q = a.initialRenderComplete,
            r = a.onReachingBottom,
            s = a.onReachingTop,
            t = a.onScroll,
            u = a.onUserScroll,
            v = a.renderEmptyContent,
            w = a.renderFooter,
            x = a.renderHeader,
            y = a.renderHeaderContentSpacer,
            z = a.renderLoadingAnimation;
        d = a.isSufficientContentLoadedAbove;
        var A = d === void 0 ? fa : d;
        d = a.isSufficientContentLoadedBelow;
        var B = d === void 0 ? ga : d,
            ia = a.headerStyle;
        d = a.snapThreshold;
        var C = d === void 0 ? 5 : d;
        d = a.xstyle;
        var D = a.elements,
            E = aa(c("BaseScrollableAreaContext")),
            F = m();
        a = l(function () {
            return [].concat(E, [{
                getDOMNode: function () {
                    return F == null ? void 0 : F.current
                }
            }])
        }, [E]);
        var G = m(),
            H = m(),
            I = ea(i),
            J = I[0],
            K = I[1],
            L = m(i),
            M = m(null),
            N = k(function () {
                var a = F.current,
                    b = H.current;
                if (a == null || b == null || a.offsetParent === null || b.offsetParent === null) return;
                b = B(b.clientHeight, a);
                M.current = a.scrollTop;
                if (!b && !e && r != null) {
                    r();
                    return
                }
                b = A(a);
                M.current = a.scrollTop;
                !b && !f && s != null && s()
            }, [e, f, A, B, r, s]);
        ba(N, [N, D.length]);
        var O = k(function (a) {
                if (a.scrollHeight === a.clientHeight) return;
                var b = a.scrollHeight - a.clientHeight - a.scrollTop < C && e ? "bottom" : "top";
                K(L.current = b);
                M.current = a.scrollTop
            }, [e, C]),
            P = k(function () {
                var a = F.current,
                    b = M.current;
                if (b == null || a == null) return;
                a.scrollTop !== b && (a.scrollTop = b, t && t(a))
            }, [t]),
            Q = k(function () {
                var a = F.current,
                    b = H.current;
                if (a == null || b == null) return;
                i === "bottom" ? (g && (a.scrollTop = a.scrollHeight), t && t(a)) : f || (a.scrollTop = b.offsetTop, t && t(a));
                e && a.scrollHeight - a.clientHeight - a.scrollTop < C ? K(L.current = "bottom") : K(L.current = i);
                M.current = a.scrollTop
            }, [e, f, i, t, C, g]),
            R = m(!1);
        da(function () {
            if (R.current) return;
            Q();
            R.current = !0
        }, [Q]);
        var S = k(function (a) {
                a === void 0 && (a = !1);
                var b = F.current;
                if (b == null) return;
                q && b.scrollHeight > b.clientHeight && q();
                if (L.current === "bottom") {
                    var d = b.scrollTop;
                    b.scrollTop = b.scrollHeight;
                    var e = b.scrollTop;
                    t && t(b);
                    e - d > 0 && a && c("gkx")("26394") && (b.animate == null ? void 0 : b.animate([{
                        transform: "translateY(" + (e - d) + "px)"
                    }, {
                        transform: "translateY(0)"
                    }], {
                        duration: 150,
                        easing: "ease-out",
                        iterations: 1
                    }))
                }
                M.current = b.scrollTop
            }, [q, t]),
            ja = k(function () {
                var a = F.current;
                if (a == null) return;
                t && t(a);
                if (a.scrollTop === M.current) return;
                M.current = null;
                N();
                O(a);
                u && u()
            }, [N, t, u, O]),
            T = k(function () {
                S(!1), N()
            }, [S, N]);
        I = k(function () {
            return S(!0)
        }, [S]);
        var U = c("useResizeObserver")(I),
            V = c("useResizeObserver")(T),
            ka = k(function (a) {
                U(a), H.current = a
            }, [U]),
            la = k(function (a) {
                V(a), F.current = a
            }, [V]),
            W = k(function (a, b) {
                if (b != null) {
                    a = b.element;
                    var c = b.height;
                    b = b.scrollAreaElement;
                    a = a.clientHeight;
                    M.current = b.scrollTop;
                    a !== c && !(a <= c && L.current === "bottom") && (b.scrollTop += a - c, M.current = b.scrollTop, t && t(b))
                }
            }, [t]),
            X = k(function () {
                if (F.current != null) {
                    var a = F.current;
                    a.scrollTop = a.scrollHeight;
                    M.current = a.scrollTop;
                    t && t(a)
                }
                K(L.current = e ? "bottom" : "top")
            }, [e, t]);

        function ma() {
            if (F.current != null) {
                var a = F.current,
                    b = a.scrollHeight - a.scrollTop - a.clientHeight < ha;
                M.current = a.scrollTop;
                return b
            } else return !1
        }
        var Y = m(null),
            Z = k(function (a, b) {
                var d = Y.current,
                    e = F.current;
                if (d != null && e != null) {
                    var f = new IntersectionObserver(function (a) {
                        a = a[0];
                        (a.boundingClientRect.height !== 0 || a.boundingClientRect.width !== 0) && b(c("intersectionObserverEntryIsIntersecting")(a))
                    }, {
                        root: e,
                        rootMargin: a + "px"
                    });
                    f.observe(d);
                    return function () {
                        return f.disconnect()
                    }
                }
            }, []),
            $ = k(function () {
                var a = F.current;
                if (a != null) {
                    var b = a.scrollHeight - a.clientHeight > 0;
                    M.current = a.scrollTop;
                    return b
                }
                return !1
            }, []);

        function na() {
            var a = F.current;
            if (a == null) return null;
            var b = {
                clientHeight: a.clientHeight,
                scrollHeight: a.scrollHeight,
                scrollTop: a.scrollTop
            };
            M.current = a.scrollTop;
            return b
        }
        ca(b, function () {
            return {
                doesContentFillScroll: $,
                getScrollAreaElement: function () {
                    return F.current
                },
                getScrollerMeasurements: na,
                isAtBottom: ma,
                onCloseToBottom: Z,
                resetScrollPosition: Q,
                restoreScrollPosition: P,
                scrollToBottom: X
            }
        }, [$, Z, Q, P, X]);
        var oa = l(function () {
            return j.jsx(n, {
                componentDidUpdate: W,
                getSnapshotBeforeUpdate: function (a) {
                    var b = H.current,
                        c = F.current;
                    if (b != null && c != null && !(f && c.scrollTop === 0) && (!a.length || D.length && a[0].key !== D[0].key && a.length !== D.length)) {
                        a = b.clientHeight;
                        M.current = c.scrollTop;
                        return {
                            element: b,
                            height: a,
                            scrollAreaElement: c
                        }
                    }
                    return null
                },
                children: D
            })
        }, [D, W, f]);
        return j.jsx(c("BaseScrollableAreaContext").Provider, {
            value: a,
            children: j.jsx("div", {
                className: (h || (h = c("stylex")))(d),
                children: j.jsx("div", {
                    className: h(o.wrapper, J === "bottom" && o.disableScrollAnchoring),
                    children: j.jsx(c("BaseThemeProvider.react"), {
                        children: function (a, b) {
                            return j.jsxs("div", {
                                className: (h || (h = c("stylex")))(o.scrollArea, a),
                                "data-testid": void 0,
                                onScroll: ja,
                                ref: la,
                                style: b,
                                children: [j.jsx(c("CometPlaceholder.react"), {
                                    fallback: null,
                                    children: j.jsx(c("CometSSRSuspendOnServer.react"), {
                                        children: !p && j.jsx("iframe", {
                                            className: "x76ihet xwmqs3e x112ta8 xxxdfa6 x5yr21d x17qophe x1ty9z65 xg01cxk x47corl x10l6tqk x1yhy09f xh8yej3",
                                            ref: function (a) {
                                                a != null && (a.contentWindow.onresize = T)
                                            }
                                        })
                                    })
                                }), j.jsxs(n, {
                                    componentDidUpdate: W,
                                    getSnapshotBeforeUpdate: function () {
                                        if (J === "bottom") {
                                            var a = G.current,
                                                b = F.current;
                                            if (a != null && b != null) {
                                                var c = a.clientHeight;
                                                return {
                                                    element: a,
                                                    height: c,
                                                    scrollAreaElement: b
                                                }
                                            }
                                        }
                                        return null
                                    },
                                    children: [j.jsx("div", {
                                        className: h(ia),
                                        ref: G,
                                        children: f ? x && x() : z && z()
                                    }), v != null ? v() : null]
                                }), y != null && y(), j.jsx("div", {
                                    className: h(D.length !== 0 && !f && !e && o.contentMinHeight),
                                    children: j.jsxs("div", {
                                        className: "x1n2onr6",
                                        ref: ka,
                                        children: [j.jsx(c("CometPlaceholder.react"), {
                                            fallback: null,
                                            children: j.jsx(c("CometSSRSuspendOnServer.react"), {
                                                children: !p && j.jsx("iframe", {
                                                    className: "x76ihet xwmqs3e x112ta8 xxxdfa6 x5yr21d x17qophe x1ty9z65 xg01cxk x47corl x10l6tqk x1yhy09f xh8yej3",
                                                    ref: function (a) {
                                                        a != null && (a.contentWindow.onresize = S)
                                                    }
                                                })
                                            })
                                        }), oa, j.jsx("div", {
                                            className: "x1ey2m1c xjm9jq1 x1y332i5 x47corl x10l6tqk",
                                            ref: Y
                                        }), e ? w && w() : z && z()]
                                    })
                                })]
                            })
                        }
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = e(a);
    g.default = d
}), 98);


import * as React from 'react';
import { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { BaseScrollableAreaContext } from './BaseScrollableAreaContext';
import { BaseThemeProvider } from './BaseThemeProvider.react';
import { CometPlaceholder } from './CometPlaceholder.react';
import { CometSSRSuspendOnServer } from './CometSSRSuspendOnServer.react';
import { gkx } from './gkx';
import { intersectionObserverEntryIsIntersecting } from './intersectionObserverEntryIsIntersecting';
import { removeFromArray } from './removeFromArray';
import { stylex } from './stylex';
import { useResizeObserver } from './useResizeObserver';

interface Props {
  hasReachedBottom?: boolean;
  hasReachedTop?: boolean;
  setScrollTopInResetForBottomAnchor?: boolean;
  initialAnchor?: 'top' | 'bottom';
  initialRenderComplete?: () => void;
  onReachingBottom?: () => void;
  onReachingTop?: () => void;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onUserScroll?: () => void;
  renderEmptyContent?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  renderHeaderContentSpacer?: () => React.ReactNode;
  renderLoadingAnimation?: () => React.ReactNode;
  isSufficientContentLoadedAbove?: (element: HTMLDivElement) => boolean;
  isSufficientContentLoadedBelow?: (
    clientHeight: number,
    element: HTMLDivElement
  ) => boolean;
  headerStyle?: Record<string, string>;
  snapThreshold?: number;
  xstyle?: Record<string, string>;
  elements: React.ReactNode[];
}

interface SnapshotWrapperProps {
    componentDidUpdate: (prevChildren: React.ReactNode, snapshot: any) => void;
    getSnapshotBeforeUpdate: (prevChildren: React.ReactNode) => any;
    children: React.ReactNode;
}

const styles = {
  contentMinHeight: {
    minHeight: 'x1us19tq',
  },
  disableScrollAnchoring: {
    overflowAnchor: 'x1xzczws',
  },
  scrollArea: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    flexGrow: 'x1iyjqo2',
    flexShrink: 'xs83m0k',
    overflowAnchor: 'x1xzczws',
    overflowX: 'x6ikm8r',
    overflowY: 'x1rife3k',
    position: 'x1n2onr6',
    scrollbarColor: 'x1l87tbt',
    width: 'xh8yej3',
  },
  wrapper: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    flexGrow: 'x1iyjqo2',
    overflowX: 'x6ikm8r',
    overflowY: 'x10wlt62',
    position: 'x1n2onr6',
  },
};

const isResizeObserverAvailable = typeof ResizeObserver !== 'undefined';

function isContentSufficientlyLoadedAbove(element: HTMLDivElement): boolean {
  const { clientHeight, scrollTop } = element;
  return scrollTop > clientHeight * 2;
}

function isContentSufficientlyLoadedBelow(
  clientHeight: number,
  element: HTMLDivElement,
): boolean {
  return element.scrollHeight - element.scrollTop > clientHeight * 2;
}

const SCROLL_SNAP_THRESHOLD = 5;

class SnapshotWrapper extends React.PureComponent<SnapshotWrapperProps> {
    props: SnapshotWrapperProps;

    render() {
      return this.props.children;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      this.props.componentDidUpdate(prevProps.children, snapshot);
    }
  
    getSnapshotBeforeUpdate(prevProps) {
      return this.props.getSnapshotBeforeUpdate(prevProps.children);
    }
}

export const ReQLScrollAnchored = forwardRef<
  {
    doesContentFillScroll: () => boolean;
    getScrollAreaElement: () => HTMLDivElement | null;
    getScrollerMeasurements: () => {
      clientHeight: number;
      scrollHeight: number;
      scrollTop: number;
    } | null;
    isAtBottom: () => boolean;
    onCloseToBottom: (
      rootMargin: number,
      callback: (isIntersecting: boolean) => void
    ) => () => void;
    resetScrollPosition: () => void;
    restoreScrollPosition: () => void;
    scrollToBottom: () => void;
  },
  Props
>(
  (
    {
      hasReachedBottom = true,
      hasReachedTop = true,
      setScrollTopInResetForBottomAnchor = true,
      initialAnchor = 'top',
      initialRenderComplete,
      onReachingBottom,
      onReachingTop,
      onScroll,
      onUserScroll,
      renderEmptyContent,
      renderFooter,
      renderHeader,
      renderHeaderContentSpacer,
      renderLoadingAnimation,
      isSufficientContentLoadedAbove = isContentSufficientlyLoadedAbove,
      isSufficientContentLoadedBelow = isContentSufficientlyLoadedBelow,
      headerStyle,
      snapThreshold = SCROLL_SNAP_THRESHOLD,
      xstyle,
      elements,
    },
    ref
  ) => {
    const parentContext = useContext(BaseScrollableAreaContext);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const contextValues = useMemo(() => [...parentContext, { getDOMNode: () => scrollAreaRef.current }], [parentContext]);

    const currentAnchorRef = useRef<'top' | 'bottom'>(initialAnchor);
    const currentScrollTopRef = useRef<number | null>(null);
    const [currentAnchor, setCurrentAnchor] = useState<'top' | 'bottom'>(initialAnchor);

    const handleScroll = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      const contentElement = contentRef.current;
      if (!scrollArea || !contentElement || scrollArea.offsetParent === null || contentElement.offsetParent === null) return;

      const isContentSufficientlyLoadedBelow = isSufficientContentLoadedBelow(contentElement.clientHeight, scrollArea);
      currentScrollTopRef.current = scrollArea.scrollTop;
      if (!isContentSufficientlyLoadedBelow && !hasReachedBottom && onReachingBottom) {
        onReachingBottom();
        return;
      }

      const isContentSufficientlyLoadedAbove = isSufficientContentLoadedAbove(scrollArea);
      currentScrollTopRef.current = scrollArea.scrollTop;
      if (!isContentSufficientlyLoadedAbove && !hasReachedTop && onReachingTop) {
        onReachingTop();
      }
    }, [hasReachedBottom, hasReachedTop, isSufficientContentLoadedAbove, isSufficientContentLoadedBelow, onReachingBottom, onReachingTop]);

    useEffect(handleScroll, [handleScroll, elements.length]);

    const handleScrollPositioning = useCallback((event: React.UIEvent<HTMLDivElement>) => {
      const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
      if (scrollHeight === clientHeight) return;

      const newAnchor =
        scrollHeight - clientHeight - scrollTop < snapThreshold && hasReachedBottom
          ? 'bottom'
          : 'top';
      setCurrentAnchor((currentAnchorRef.current = newAnchor));
      currentScrollTopRef.current = event.currentTarget.scrollTop;
    }, [hasReachedBottom, snapThreshold]);

    const restoreScrollPosition = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      const currentScrollTop = currentScrollTopRef.current;
      if (currentScrollTop === null || scrollArea === null) return;
      if (scrollArea.scrollTop !== currentScrollTop) {
        scrollArea.scrollTop = currentScrollTop;
        onScroll && onScroll(event);
      }
    }, [onScroll]);

    const resetScrollPosition = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      const contentElement = contentRef.current;
      if (scrollArea === null || contentElement === null) return;

      if (initialAnchor === 'bottom') {
        if (setScrollTopInResetForBottomAnchor) {
          scrollArea.scrollTop = scrollArea.scrollHeight;
        }
        onScroll && onScroll(event);
      } else if (!hasReachedTop) {
        scrollArea.scrollTop = contentElement.offsetTop;
        onScroll && onScroll(event);
      }

      if (hasReachedBottom && scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop < snapThreshold) {
        setCurrentAnchor((currentAnchorRef.current = 'bottom'));
      } else {
        setCurrentAnchor((currentAnchorRef.current = initialAnchor));
      }
      currentScrollTopRef.current = scrollArea.scrollTop;
    }, [
      currentAnchor,
      hasReachedBottom,
      hasReachedTop,
      onScroll,
      snapThreshold,
      setScrollTopInResetForBottomAnchor,
      initialAnchor,
    ]);

    const isInitialRenderRef = useRef(false);
    useLayoutEffect(() => {
      if (isInitialRenderRef.current) return;
      resetScrollPosition();
      isInitialRenderRef.current = true;
    }, [resetScrollPosition]);

    const scrollToBottom = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea === null) return;

      initialRenderComplete && scrollArea.scrollHeight > scrollArea.clientHeight && initialRenderComplete();

      if (currentAnchor === 'bottom') {
        const prevScrollTop = scrollArea.scrollTop;
        scrollArea.scrollTop = scrollArea.scrollHeight;
        const newScrollTop = scrollArea.scrollTop;
        onScroll && onScroll(event);
        if (newScrollTop - prevScrollTop > 0 && gkx('26394') && scrollArea.animate) {
          scrollArea.animate(
            [
              {
                transform: `translateY(${newScrollTop - prevScrollTop}px)`,
              },
              {
                transform: 'translateY(0)',
              },
            ],
            {
              duration: 150,
              easing: 'ease-out',
              iterations: 1,
            }
          );
        }
      }
      currentScrollTopRef.current = scrollArea.scrollTop;
    }, [initialRenderComplete, onScroll]);

    const handleUserScroll = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea === null) return;

      onScroll && onScroll(event);
      if (scrollArea.scrollTop === currentScrollTopRef.current) return;
      currentScrollTopRef.current = null;
      handleScroll();
      handleScrollPositioning(event);
      onUserScroll && onUserScroll();
    }, [handleScroll, handleScrollPositioning, onScroll, onUserScroll]);

    const handleResize = useCallback(() => {
      scrollToBottom(false);
      handleScroll();
    }, [handleScroll, scrollToBottom]);

    const handleResizeFooter = useCallback(() => {
      scrollToBottom(true);
    }, [scrollToBottom]);

    const setContentRef = useCallback((node) => {
      useResizeObserver(handleResize)(node);
      contentRef.current = node;
    }, [handleResizeFooter]);

    const setScrollAreaRef = useCallback((node) => {
      useResizeObserver(handleResizeFooter)(node);

      scrollAreaRef.current = node;
    }, [handleResize]);

    const handleSnapshotUpdate = useCallback((prevProps, snapshot) => {
        if (snapshot != null) {
          const { element, height, scrollAreaElement } = snapshot;
          const currentHeight = element.clientHeight;
          currentScrollTopRef.current = scrollAreaElement.scrollTop;
          if (currentHeight !== height && !(currentHeight <= height && currentAnchorRef === "bottom")) {
            scrollAreaElement.scrollTop += currentHeight - height;
            currentScrollTopRef.current = scrollAreaElement.scrollTop;
            onScroll && onScroll(scrollAreaElement);
          }
        }
    }, [onScroll]);

    const handleSnapshotBeforeUpdate = useCallback(
      (prevElements: React.ReactNode[]) => {
        if (currentAnchor === 'bottom') {
          const footerElement = contentRef.current;
          const scrollArea = scrollAreaRef.current;
          if (footerElement !== null && scrollArea !== null) {
            const footerHeight = footerElement.clientHeight;
            currentScrollTopRef.current = scrollArea.scrollTop;
            if (footerHeight !== footerElement.clientHeight && !(footerHeight <= footerElement.clientHeight && currentAnchor === 'bottom')) {
              scrollArea.scrollTop += footerHeight - footerElement.clientHeight;
              currentScrollTopRef.current = scrollArea.scrollTop;
              onScroll && onScroll(event);
            }
          }
        }
      },
      [currentAnchor, onScroll]
    );

    const scrollToBottomIfAtBottom = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea !== null) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
        currentScrollTopRef.current = scrollArea.scrollTop;
        onScroll && onScroll(event);
      }
      setCurrentAnchor((currentAnchorRef.current = hasReachedBottom ? 'bottom' : 'top'));
    }, [hasReachedBottom, onScroll]);

    const isAtBottom = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea !== null) {
        const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop - scrollArea.clientHeight < SCROLL_SNAP_THRESHOLD;
        currentScrollTopRef.current = scrollArea.scrollTop;
        return isAtBottom;
      } else {
        return false;
      }
    }, []);

    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
    const onCloseToBottom = useCallback(
      (rootMargin: number, callback: (isIntersecting: boolean) => void) => {
        const observerElement = intersectionObserverRef.current;
        const scrollArea = scrollAreaRef.current;
        if (observerElement !== null && scrollArea !== null) {
          const observer = new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              if (entry.boundingClientRect.height !== 0 || entry.boundingClientRect.width !== 0) {
                callback(intersectionObserverEntryIsIntersecting(entry));
              }
            },
            {
              root: scrollArea,
              rootMargin: `${rootMargin}px`,
            }
          );
          observer.observe(observerElement);
          return () => observer.disconnect();
        }
      },
      []
    );

    const doesContentFillScroll = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea !== null) {
        const hasScrollableContent = scrollArea.scrollHeight - scrollArea.clientHeight > 0;
        currentScrollTopRef.current = scrollArea.scrollTop;
        return hasScrollableContent;
      }
      return false;
    }, []);

    const getScrollerMeasurements = useCallback(() => {
      const scrollArea = scrollAreaRef.current;
      if (scrollArea !== null) {
        const { clientHeight, scrollHeight, scrollTop } = scrollArea;
        currentScrollTopRef.current = scrollTop;
        return { clientHeight, scrollHeight, scrollTop };
      }
      return null;
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        doesContentFillScroll,
        getScrollAreaElement: () => scrollAreaRef.current,
        getScrollerMeasurements,
        isAtBottom,
        onCloseToBottom,
        resetScrollPosition,
        restoreScrollPosition,
        scrollToBottom: scrollToBottomIfAtBottom,
      }),
      [doesContentFillScroll, onCloseToBottom, resetScrollPosition, restoreScrollPosition, scrollToBottom]
    );

    const renderContent = useMemo(() => {
        return (
          <SnapshotWrapper
            componentDidUpdate={handleSnapshotUpdate}
            getSnapshotBeforeUpdate={(prevElements) => {
              const footerElement = contentRef.current;
              const scrollArea = scrollAreaRef.current;
              if (
                footerElement !== null &&
                scrollArea !== null &&
                !(hasReachedTop && scrollArea.scrollTop === 0) &&
                (!prevElements.length || (elements.length && prevElements[0].key !== elements[0].key && prevElements.length !== elements.length))
              ) {
                const footerHeight = footerElement.clientHeight;
                currentScrollTopRef.current = scrollArea.scrollTop;
                return {
                  element: footerElement,
                  height: footerHeight,
                  scrollAreaElement: scrollArea,
                };
              }
              return null;
            }}
          >
            {elements}
          </SnapshotWrapper>
        );
    }, [elements, handleSnapshotBeforeUpdate, hasReachedTop]);
      
      return (
        <BaseScrollableAreaContext.Provider value={contextValues}>
          <div className={stylex(xstyle)}>
            <div
              className={stylex(
                styles.wrapper,
                currentAnchor === 'bottom' && styles.disableScrollAnchoring
              )}
            >
              <BaseThemeProvider>
                {(themeClassName, themeStyles) => (
                  <div
                    className={stylex(styles.scrollArea, themeClassName)}
                    data-testid={undefined}
                    onScroll={handleUserScroll}
                    ref={setScrollAreaRef}
                    style={themeStyles}
                  >
                    <CometPlaceholder fallback={null}>
                      <CometSSRSuspendOnServer>
                        {!isResizeObserverAvailable &&
                          (
                            <iframe
                              className="x76ihet xwmqs3e x112ta8 xxxdfa6 x5yr21d x17qophe x1ty9z65 xg01cxk x47corl x10l6tqk x1yhy09f xh8yej3"
                              ref={(node) => {
                                if (node !== null) {
                                  node.contentWindow.onresize = handleResize;
                                }
                              }}
                            />
                          )}
                      </CometSSRSuspendOnServer>
                    </CometPlaceholder>
                    <SnapshotWrapper
                      componentDidUpdate={handleSnapshotUpdate}
                      getSnapshotBeforeUpdate={() => {
                        if (currentAnchor === 'bottom') {
                          const footerElement = contentRef.current;
                          const scrollArea = scrollAreaRef.current;
                          if (footerElement !== null && scrollArea !== null) {
                            const footerHeight = footerElement.clientHeight;
                            return {
                              element: footerElement,
                              height: footerHeight,
                              scrollAreaElement: scrollArea,
                            };
                          }
                        }
                        return null;
                      }}
                    >
                      <div className={stylex(headerStyle)}
                           ref={setContentRef}>
                        {hasReachedTop ? (renderHeader ? renderHeader() : null) : (renderLoadingAnimation ? renderLoadingAnimation() : null)}
                      </div>
                      {renderEmptyContent !== null ? renderEmptyContent() : null}
                    </SnapshotWrapper>
                    {renderHeaderContentSpacer !== null && renderHeaderContentSpacer()}
                    <div
                      className={stylex(
                        elements.length !== 0 && !hasReachedTop && !hasReachedBottom && styles.contentMinHeight
                      )}
                    >
                      <div className="x1n2onr6" ref={setContentRef}>
                        <CometPlaceholder fallback={null}>
                          <CometSSRSuspendOnServer>
                            {!isResizeObserverAvailable &&
                              (
                                <iframe
                                  className="x76ihet xwmqs3e x112ta8 xxxdfa6 x5yr21d x17qophe x1ty9z65 xg01cxk x47corl x10l6tqk x1yhy09f xh8yej3"
                                  ref={(node) => {
                                    if (node !== null) {
                                      node.contentWindow.onresize = scrollToBottom;
                                    }
                                  }}
                                />
                              )}
                          </CometSSRSuspendOnServer>
                        </CometPlaceholder>
                        {renderContent}
                        <div className="x1ey2m1c xjm9jq1 x1y332i5 x47corl x10l6tqk" ref={intersectionObserverRef} />
                        {hasReachedBottom ? (renderFooter ? renderFooter() : null) : (renderLoadingAnimation ? renderLoadingAnimation() : null)}
                      </div>
                    </div>
                  </div>
                )}
              </BaseThemeProvider>
            </div>
          </div>
        </BaseScrollableAreaContext.Provider>
      )
})
