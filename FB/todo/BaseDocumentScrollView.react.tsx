__d("BaseDocumentScrollView.react", ["BaseView.react", "HiddenSubtreeContext", "HiddenSubtreeContextProvider.react", "react", "usePrevious", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback
      , k = e.useContext
      , l = e.useLayoutEffect
      , m = e.useRef
      , n = e.useState
      , o = {
        detached: {
            MsOverflowStyle: "x1pq812k",
            height: "x5yr21d",
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            position: "xixxii4",
            scrollbarWidth: "x1rohswg",
            start: "x17qophe",
            top: "x13vifvy",
            width: "xh8yej3",
            "::-webkit-scrollbar_display": "xfk6m8",
            "::-webkit-scrollbar_height": "x1yqm8si",
            "::-webkit-scrollbar_width": "xjx87ck",
            $$css: !0
        }
    }
      , p = new Map()
      , q = new Set()
      , r = null;
    function s(a, b) {
        return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
    }
    function t() {
        var a = null;
        p.forEach(function(b, c) {
            a == null ? a = c : a != null && c != null && s(a, c) && !q.has(c) && (a = c)
        });
        return a
    }
    function u(a) {
        return r == null || s(r, a)
    }
    function b(b) {
        var d = b.contextKey
          , e = d === void 0 ? null : d;
        d = b.detached;
        d = d === void 0 ? !1 : d;
        var f = b.detachedDefaultValue;
        f = f === void 0 ? !1 : f;
        b.detachedPageOffsets;
        var g = b.disableNavigationScrollReset
          , h = g === void 0 ? !1 : g;
        g = b.hiddenWhenDetached;
        g = g === void 0 ? !1 : g;
        var s = b.maintainScrollForContext
          , v = s === void 0 ? !1 : s
          , w = b.onInitialScroll;
        s = b.resetScrollOnMount;
        var x = s === void 0 ? !0 : s;
        s = babelHelpers.objectWithoutPropertiesLoose(b, ["contextKey", "detached", "detachedDefaultValue", "detachedPageOffsets", "disableNavigationScrollReset", "hiddenWhenDetached", "maintainScrollForContext", "onInitialScroll", "resetScrollOnMount"]);
        var y = m()
          , z = m({
            x: 0,
            y: 0
        })
          , A = c("useStable")(function() {
            return {}
        })
          , B = c("usePrevious")(e);
        b = n(f);
        var C = b[0]
          , D = b[1];
        f = n({
            x: 0,
            y: 0
        });
        var E = f[0]
          , F = f[1]
          , G = c("usePrevious")(C);
        b = k(c("HiddenSubtreeContext"));
        var H = b.hidden;
        l(function() {
            var a = y.current;
            if (a != null) {
                if (u(a)) {
                    if (r != null) {
                        var b = p.get(r);
                        b && b(!1)
                    }
                    r = a
                } else
                    D(!0);
                p.set(a, function(a) {
                    a || F(babelHelpers["extends"]({}, z.current)),
                    D(!a)
                });
                return function() {
                    p["delete"](a);
                    if (r === a) {
                        r = t();
                        if (r != null) {
                            var b = p.get(r);
                            b && b(!0)
                        }
                    }
                }
            }
        }, []);
        var I = j(function(b, c) {
            a.scrollTo && a.scrollTo(b, c),
            typeof w === "function" && w(b, c)
        }, [w]);
        l(function() {
            (x || G != null) && !C && C !== G && I(E.x, E.y)
        }, [C, E, G, I, x]);
        l(function() {
            if ((x || B != null) && e !== B) {
                var a = v && e != null && e in A ? A[e] : {
                    x: 0,
                    y: 0
                };
                C ? F(a) : h !== !0 && I(a.x, a.y)
            }
        }, [e, A, C, v, B, I, x, h]);
        l(function() {
            if (!C) {
                var b = function() {
                    var b = a.pageXOffset
                      , c = a.pageYOffset;
                    z.current = {
                        x: b,
                        y: c
                    };
                    e != null && (A[e] = {
                        x: b,
                        y: c
                    })
                };
                window.addEventListener("scroll", b, {
                    passive: !0
                });
                return function() {
                    return window.removeEventListener("scroll", b, {
                        passive: !0
                    })
                }
            }
        }, [C, e, A]);
        l(function() {
            var a = y.current;
            if (a != null)
                if (H) {
                    q.add(a);
                    if (!C) {
                        D(!0);
                        r = t();
                        if (r != null) {
                            var b = p.get(r);
                            b && b(!0)
                        }
                    }
                    return function() {
                        q["delete"](a)
                    }
                } else if (C && a !== r && a === t()) {
                    if (r != null) {
                        b = p.get(r);
                        b && b(!1)
                    }
                    r = a;
                    b = p.get(r);
                    b && b(!0)
                }
        }, [C, H]);
        f = d || C;
        b = g;
        var J = C && !g;
        l(function() {
            var a = y.current;
            J && a != null && (a.scrollTop = E.y)
        }, [E.y, J]);
        return i.jsx(c("HiddenSubtreeContextProvider.react"), {
            ignoreParent: !0,
            isBackgrounded: f,
            isHidden: b,
            children: i.jsx(c("BaseView.react"), babelHelpers["extends"]({}, s, {
                hidden: b
            }, J && {
                "aria-hidden": !0,
                id: "scrollview",
                style: {
                    left: -E.x
                },
                xstyle: o.detached
            }, {
                ref: y
            }))
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}
), 98);


import React, { useCallback, useContext, useLayoutEffect, useRef, useState } from 'react';
import BaseView from './BaseView.react';
import { HiddenSubtreeContext, HiddenSubtreeContextProvider } from './HiddenSubtreeContextProvider.react';
import usePrevious from './usePrevious';
import useStable from './useStable';

const styles = {
  detached: {
    MsOverflowStyle: "x1pq812k",
    height: "x5yr21d",
    overflowX: "xw2csxc",
    overflowY: "x1odjw0f",
    position: "xixxii4",
    scrollbarWidth: "x1rohswg",
    start: "x17qophe",
    top: "x13vifvy",
    width: "xh8yej3",
    "::-webkit-scrollbar_display": "xfk6m8",
    "::-webkit-scrollbar_height": "x1yqm8si",
    "::-webkit-scrollbar_width": "xjx87ck",
    $$css: true
  }
};

const activeElements = new Map<Element, (active: boolean) => void>();
const hiddenElements = new Set<Element>();
let currentElement: Element | null = null;

const isFollowing = (a: Node, b: Node) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

const findTopElement = () => {
  let topElement: Element | null = null;
  activeElements.forEach((_, elem) => {
    if (!topElement) {
      topElement = elem;
    } else if (topElement && elem && isFollowing(topElement, elem) && !hiddenElements.has(elem)) {
      topElement = elem;
    }
  });
  return topElement;
};

const isTopmost = (element: Element) => !currentElement || isFollowing(currentElement, element);

type BaseDocumentScrollViewProps = {
  contextKey?: string | null,
  detached?: boolean,
  detachedDefaultValue?: boolean,
  detachedPageOffsets?: any, // TODO: specify the exact type
  disableNavigationScrollReset?: boolean,
  hiddenWhenDetached?: boolean,
  maintainScrollForContext?: boolean,
  onInitialScroll?: (x: number, y: number) => void,
  resetScrollOnMount?: boolean
};

const BaseDocumentScrollView: React.FC<BaseDocumentScrollViewProps> = ({
  contextKey: contextKeyProp = null,
  detached = false,
  detachedDefaultValue = false,
  // detachedPageOffsets, // Not used
  disableNavigationScrollReset = false,
  hiddenWhenDetached = false,
  maintainScrollForContext = false,
  onInitialScroll,
  resetScrollOnMount = true,
  ...props
}) => {
  const scrollRef = useRef<Element | null>(null);
  const lastScrollPosition = useRef({ x: 0, y: 0 });
  const storedScrollPositions = useStable<Record<string, { x: number, y: number }>>(() => ({}));
  const previousContextKey = usePrevious(contextKeyProp);
  const [isDetached, setIsDetached] = useState(detachedDefaultValue);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const prevIsDetached = usePrevious(isDetached);
  const { hidden: isHidden } = useContext(HiddenSubtreeContext);

  useLayoutEffect(() => {
    const current = scrollRef.current;
    if (current) {
      if (isTopmost(current)) {
        if (currentElement) {
          const deactivate = activeElements.get(currentElement);
          if (deactivate) deactivate(false);
        }
        currentElement = current;
      } else {
        setIsDetached(true);
      }

      activeElements.set(current, (active: boolean) => {
        if (!active) {
          setScrollPosition({ ...lastScrollPosition.current });
        }
        setIsDetached(!active);
      });

      return () => {
        activeElements.delete(current);
        if (currentElement === current) {
          currentElement = findTopElement();
          if (currentElement) {
            const activate = activeElements.get(currentElement);
            if (activate) activate(true);
          }
        }
      };
    }
  }, []);

  const handleScroll = useCallback((x: number, y: number) => {
    if (window.scrollTo) {
      window.scrollTo(x, y);
    }
    if (onInitialScroll) {
      onInitialScroll(x, y);
    }
  }, [onInitialScroll]);

  useLayoutEffect(() => {
    if ((resetScrollOnMount || prevIsDetached !== null) && !isDetached && isDetached !== prevIsDetached) {
      handleScroll(scrollPosition.x, scrollPosition.y);
    }
  }, [isDetached, scrollPosition, prevIsDetached, handleScroll, resetScrollOnMount]);

  useLayoutEffect(() => {
    if ((resetScrollOnMount || previousContextKey !== null) && contextKeyProp !== previousContextKey) {
      const scrollPos = maintainScrollForContext && contextKeyProp !== null ? storedScrollPositions[contextKeyProp] : { x: 0, y: 0 };
      if (isDetached) {
        setScrollPosition(scrollPos);
      } else if (!disableNavigationScrollReset) {
        handleScroll(scrollPos.x, scrollPos.y);
      }
    }
  }, [contextKeyProp, storedScrollPositions, isDetached, maintainScrollForContext, previousContextKey, handleScroll, resetScrollOnMount, disableNavigationScrollReset]);

  useLayoutEffect(() => {
    if (!isDetached) {
      const handleWindowScroll = () => {
        const x = window.pageXOffset;
        const y = window.pageYOffset;
        lastScrollPosition.current = { x, y };
        if (contextKeyProp !== null) {
          storedScrollPositions[contextKeyProp] = { x, y };
        }
      };

      window.addEventListener('scroll', handleWindowScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleWindowScroll);
      };
    }
  }, [isDetached, contextKeyProp, storedScrollPositions]);

  useLayoutEffect(() => {
    const current = scrollRef.current;
    if (current) {
      if (isHidden) {
        hiddenElements.add(current);
        if (!isDetached) {
          setIsDetached(true);
          currentElement = findTopElement();
          if (currentElement) {
            const activate = activeElements.get(currentElement);
            if (activate) activate(true);
          }
        }
        return () => {
          hiddenElements.delete(current);
        };
      } else if (isDetached && current === findTopElement()) {
        if (currentElement) {
          const deactivate = activeElements.get(currentElement);
          if (deactivate) deactivate(false);
        }
        currentElement = current;
      }
    }
  }, [isDetached, isHidden]);

  const isBackgrounded = detached || isDetached;
  const shouldHide = hiddenWhenDetached;
  const forceAriaHidden = isDetached && !hiddenWhenDetached;

  useLayoutEffect(() => {
    const current = scrollRef.current;
    if (forceAriaHidden && current) {
        current.scrollTop = scrollPosition.y;
    }
}, [scrollPosition.y, forceAriaHidden]);

  return (
    <HiddenSubtreeContextProvider
        ignoreParent
        isBackgrounded={isBackgrounded}
        isHidden={shouldHide}
    >
     <BaseView
       {...props}
       ref={scrollRef}
       {...(forceAriaHidden && {
            'aria-hidden': true,
            id: 'scrollview',
            style: { left: -scrollPosition.x },
            xstyle: styles.detached
        })}
     />
 </HiddenSubtreeContextProvider>
  );
};

export default BaseDocumentScrollView;
