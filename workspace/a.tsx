__d("FocusGroup.react", ["FocusManager", "Locale", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "focusKeyboardEventPropagation", "gkx", "react", "setElementCanTab"], (function (a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useMemo,
        k = b.useRef,
        l = 5;

    function m(a) {
        return a.length === 1
    }

    function n(a, b, c, e) {
        d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(c);
        b = b.DO_NOT_USE_queryFirstNode(a);
        b !== null && (document.activeElement != null && d("setElementCanTab").setElementCanTab(document.activeElement, !1), d("setElementCanTab").setElementCanTab(b, !0), d("FocusManager").focusElement(b, {
            preventScroll: e
        }), c.preventDefault())
    }

    function o(a, b, c, d, e, f) {
        b = b.onNavigate;
        if (b && d) {
            var g = !1,
                h = p(d, e);
            e = {
                currentIndex: h,
                event: c,
                focusItem: function (a, b) {
                    a = a.scopeRef.current;
                    a && n(b || f, a, c)
                },
                getItem: function (a) {
                    return t(d, a)
                },
                getItemByTag: function (a) {
                    var b = d.length,
                        c = h + 1;
                    while (!0) {
                        if (c === h) return null;
                        if (c > b - 1) {
                            c = 0;
                            continue
                        }
                        var e = d[c];
                        if (e) {
                            var f = e.disabled,
                                g = e.scopeRef,
                                i = e.tag;
                            g = g.current;
                            if (g && f !== !0 && i === a) return e
                        }
                        c++
                    }
                    return null
                },
                preventDefault: function () {
                    g = !0
                },
                type: a
            };
            b(e);
            if (g) return !0
        }
        return !1
    }

    function p(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (d && d.scopeRef.current === b) return c
        }
        return -1
    }

    function q(a, b, c) {
        var d = a.scopeRef.current;
        if (d === null) return null;
        if (c !== null) {
            d = p(c, b);
            b = a.wrap;
            a = u(c, d - 1);
            return !a && b === !0 ? u(c, c.length - 1) : a
        }
        return null
    }

    function r(a, b, c) {
        var d = a.scopeRef.current;
        if (d === null) return null;
        if (c.length > 0) {
            d = p(c, b);
            b = a.wrap;
            a = s(c, d + 1);
            return !a && b === !0 ? s(c, 0) : a
        }
        return null
    }

    function s(a, b) {
        var d = a.length;
        if (b > d) return null;
        b = b;
        while (b < d) {
            var e = a[b];
            if (c("gkx")("5403")) {
                if (e !== null) return e.scopeRef.current
            } else if (e !== null && e.disabled !== !0) return e.scopeRef.current;
            b++
        }
        return null
    }

    function t(a, b) {
        b = b;
        while (b >= 0) {
            var d = a[b];
            if (c("gkx")("5403")) {
                if (d !== null) return d
            } else if (d !== null && d.disabled !== !0) return d;
            b--
        }
        return null
    }

    function u(a, b) {
        a = t(a, b);
        return a ? a.scopeRef.current : null
    }

    function v(a) {
        var b = a.altKey,
            c = a.ctrlKey,
            d = a.metaKey;
        a = a.shiftKey;
        return b === !0 || c === !0 || d === !0 || a === !0
    }

    function a(a) {
        var b = h.unstable_Scope,
            c = h.createContext(null),
            e = h.createContext(null);

        function g(e) {
            var f = e.children,
                g = e.orientation,
                i = e.wrap,
                m = e.tabScopeQuery,
                n = e.allowModifiers,
                o = e.preventScrollOnFocus,
                p = o === void 0 ? !1 : o;
            o = e.pageJumpSize;
            var q = o === void 0 ? l : o,
                r = e.onNavigate,
                s = k(null);
            o = j(function () {
                return {
                    scopeRef: s,
                    orientation: g,
                    wrap: i,
                    tabScopeQuery: m,
                    allowModifiers: n,
                    pageJumpSize: q,
                    preventScrollOnFocus: p,
                    onNavigate: r
                }
            }, [g, i, m, n, q, p, r]);
            var u = k(!1);
            e = d("ReactFocusEvent.react").useFocusWithin(s, j(function () {
                return {
                    onFocusWithin: function (b) {
                        u.current || (u.current = !0, s.current && a && (t(s.current, a), d("setElementCanTab").setElementCanTab(b.target, !0)))
                    }
                }
            }, [u]));
            return h.jsx(c.Provider, {
                value: o,
                children: h.jsx(b, {
                    ref: e,
                    children: f
                })
            })
        }
        g.displayName = g.name + " [from " + f.id + "]";

        function t(a, b) {
            var c = document.activeElement;
            a = a.DO_NOT_USE_queryAllNodes(b);
            if (a !== null)
                for (b = 0; b < a.length; b++) {
                    var e = a[b];
                    e !== c ? d("setElementCanTab").setElementCanTab(e, !1) : d("setElementCanTab").setElementCanTab(e, !0)
                }
        }

        function w(f) {
            var g = f.children,
                l = f.disabled;
            f = f.tag;
            var w = k(null),
                x = i(c);
            d("ReactKeyboardEvent.react").useKeyboard(w, j(function () {
                return {
                    onKeyDown: function (b) {
                        if (d("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(b)) return;
                        var c = w.current;
                        if (c !== null && x !== null) {
                            var f = x.orientation === "vertical" || x.orientation === "both",
                                g = x.orientation === "horizontal" || x.orientation === "both",
                                h = x.scopeRef.current,
                                i = b.key,
                                j = x.preventScrollOnFocus;
                            if (i === "Tab" && h !== null) {
                                var k = x.tabScopeQuery;
                                if (k) {
                                    if (x.onNavigate) {
                                        var l = h.getChildContextValues(e);
                                        if (o("TAB", x, b, l, c, k)) return
                                    }
                                    t(h, k)
                                }
                                return
                            }
                            if (v(b)) {
                                l = x.allowModifiers;
                                if (l !== !0) return
                            }
                            if (h === null) return;
                            k = i;
                            d("Locale").isRTL() && (i === "ArrowRight" ? k = "ArrowLeft" : i === "ArrowLeft" && (k = "ArrowRight"));
                            switch (k) {
                                case "Home":
                                    l = h.getChildContextValues(e);
                                    if (o("HOME", x, b, l, c, a)) return;
                                    k = s(l, 0);
                                    if (k) {
                                        n(a, k, b, j);
                                        return
                                    }
                                    break;
                                case "End":
                                    l = h.getChildContextValues(e);
                                    if (o("END", x, b, l, c, a)) return;
                                    k = u(l, l.length - 1);
                                    if (k) {
                                        n(a, k, b, j);
                                        return
                                    }
                                    break;
                                case "PageUp":
                                    l = h.getChildContextValues(e);
                                    if (o("PAGE_UP", x, b, l, c, a)) return;
                                    k = x.pageJumpSize;
                                    var y = p(l, c);
                                    l = s(l, Math.max(0, y - k));
                                    if (l) {
                                        n(a, l, b, j);
                                        return
                                    }
                                    break;
                                case "PageDown":
                                    y = h.getChildContextValues(e);
                                    if (o("PAGE_DOWN", x, b, y, c, a)) return;
                                    k = x.pageJumpSize;
                                    l = p(y, c);
                                    y = u(y, Math.min(y.length - 1, l + k));
                                    if (y) {
                                        n(a, y, b, j);
                                        return
                                    }
                                    break;
                                case "ArrowUp":
                                    if (f) {
                                        l = h.getChildContextValues(e);
                                        if (o("PREV_ITEM", x, b, l, c, a)) return;
                                        k = b.metaKey || b.ctrlKey ? s(l, 0) : q(x, c, l);
                                        if (k) {
                                            n(a, k, b, j);
                                            return
                                        }
                                    }
                                    break;
                                case "ArrowDown":
                                    if (f) {
                                        y = h.getChildContextValues(e);
                                        if (o("NEXT_ITEM", x, b, y, c, a)) return;
                                        l = b.metaKey || b.ctrlKey ? u(y, y.length - 1) : r(x, c, y);
                                        if (l) {
                                            n(a, l, b, j);
                                            return
                                        }
                                    }
                                    break;
                                case "ArrowLeft":
                                    if (g) {
                                        k = h.getChildContextValues(e);
                                        if (o("PREV_ITEM", x, b, k, c, a)) return;
                                        f = b.metaKey || b.ctrlKey ? s(k, 0) : q(x, c, k);
                                        if (f) {
                                            n(a, f, b, j);
                                            return
                                        }
                                    }
                                    break;
                                case "ArrowRight":
                                    if (g) {
                                        y = h.getChildContextValues(e);
                                        if (o("NEXT_ITEM", x, b, y, c, a)) return;
                                        l = b.metaKey || b.ctrlKey ? u(y, y.length - 1) : r(x, c, y);
                                        l && n(a, l, b, j)
                                    }
                                    break;
                                default:
                                    if (m(i) && x.onNavigate) {
                                        k = h.getChildContextValues(e);
                                        o("PRINT_CHAR", x, b, k, c, a)
                                    }
                            }
                        }
                    }
                }
            }, [x]));
            var y = d("ReactFocusEvent.react").useFocusWithin(w, j(function () {
                return {
                    onFocusWithin: function (b) {
                        if (a != null) {
                            var c;
                            c = (c = w.current) == null ? void 0 : c.DO_NOT_USE_queryFirstNode(a);
                            b = b.target === c;
                            if (b && (c && !d("setElementCanTab").canElementTab(c))) {
                                b = x == null ? void 0 : x.scopeRef.current;
                                b && t(b, a)
                            }
                        }
                    }
                }
            }, [x == null ? void 0 : x.scopeRef]));
            l = {
                scopeRef: w,
                disabled: l,
                tag: f
            };
            return h.jsx(e.Provider, {
                value: l,
                children: h.jsx(b, {
                    ref: y,
                    children: g
                })
            })
        }
        w.displayName = w.name + " [from " + f.id + "]";
        return [g, w]
    }
    g.createFocusGroup = a
}), 98);




import { useContext, useMemo, useRef } from 'react';
import { useFocusWithin } from 'react-focus-lock';
import { useKeyboard } from 'react-keyboard';
import { stopFocusKeyboardEventPropagation, hasFocusKeyboardEventPropagationStopped } from 'focus-keyboard-event-propagation';
import { gkx } from 'gkx';
import { setElementCanTab } from 'setElementCanTab';

const createFocusGroup = () => {
  const ScopeContext = useContext(null);
  const DisabledContext = useContext(null);

  const ScopeProvider = useMemo(() => {
    return { scopeRef: useRef(ScopeContext), disabled: DisabledContext };
  }, [ScopeContext, DisabledContext]);

  const useFocusWithinContext = useFocusWithin(ScopeContext, useMemo(() => {
    return {
      onFocusWithin: ({ target }) => {
        if (ScopeContext) {
          const element = ScopeContext.current?.DO_NOT_USE_queryFirstNode(ScopeContext);
          const isFocused = target === element;
          if (isFocused && element && !setElementCanTab.canElementTab(element)) {
            const scope = ScopeContext.scopeRef.current;
            scope && setTabbable(scope, ScopeContext);
          }
        }
      },
    };
  }, [ScopeContext]));

  const useKeyboardContext = useKeyboard(ScopeContext, useMemo(() => {
    return {
      onKeyDown: (event) => {
        if (hasFocusKeyboardEventPropagationStopped(event)) {
          return;
        }
        const scope = ScopeContext.current;
        const { orientation, wrap, tabScopeQuery, allowModifiers, pageJumpSize, preventScrollOnFocus, onNavigate } = ScopeContext;
        
        if (!scope || !ScopeContext) {
          return;
        }

        const key = event.key;
        stopFocusKeyboardEventPropagation(event);

        if (key === 'Tab' && scope) {
          const query = tabScopeQuery;
          if (query) {
            const values = scope.getChildContextValues(orientation);
            if (onNavigate && navigateTab('TAB', ScopeContext, event, values, scope, query)) {
              return;
            }
            setTabbable(values, query);
          }
          return;
        }

        if (allowModifiers !== true && event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        }

        if (!scope) {
          return;
        }

        let targetKey = key;
        if (Locale.isRTL()) {
          if (key === 'ArrowRight') {
            targetKey = 'ArrowLeft';
          } else if (key === 'ArrowLeft') {
            targetKey = 'ArrowRight';
          }
        }

        switch (targetKey) {
          case 'Home': {
            const values = scope.getChildContextValues(orientation);
            if (onNavigate && navigateTab('HOME', ScopeContext, event, values, scope, allowModifiers)) {
              return;
            }
            const firstItem = getFirstItem(values);
            if (firstItem) {
              focusItem(event, firstItem.scopeRef.current);
              return;
            }
            break;
          }
          case 'End': {
            const values = scope.getChildContextValues(orientation);
            if (onNavigate && navigateTab('END', ScopeContext, event, values, scope, allowModifiers)) {
              return;
            }
            const lastItem = getLastItem(values);
            if (lastItem) {
              focusItem(event, lastItem.scopeRef.current);
              return;
            }
            break;
          }
          case 'PageUp': {
            const values = scope.getChildContextValues(orientation);
            if (onNavigate && navigateTab('PAGE_UP', ScopeContext, event, values, scope, allowModifiers)) {
              return;
            }
            const jumpSize = pageJumpSize;
            const currentIndex = getCurrentIndex(values, scope);
            const startIndex = Math.max(0, currentIndex - jumpSize);
            const targetItem = getItemByIndex(values, startIndex);
            if (targetItem) {
              focusItem(event, targetItem.scopeRef.current);
              return;
            }
            break;
          }
          case 'PageDown': {
            const values = scope.getChildContextValues(orientation);
            if (onNavigate && navigateTab('PAGE_DOWN', ScopeContext, event, values, scope, allowModifiers)) {
              return;
            }
            const jumpSize = pageJumpSize;
            const currentIndex = getCurrentIndex(values, scope);
            const endIndex = Math.min(values.length - 1, currentIndex + jumpSize);
            const targetItem = getItemByIndex(values, endIndex);
            if (targetItem) {
              focusItem(event, targetItem.scopeRef.current);
              return;
            }
            break;
          }
          case 'ArrowUp': {
            if (allowModifiers) {
              const values = scope.getChildContextValues(orientation);
              if (onNavigate && navigateTab('PREV_ITEM', ScopeContext, event, values, scope, allowModifiers)) {
                return;
              }
              const targetItem = allowModifiers || event.metaKey || event.ctrlKey ? getItemByIndex(values, 0) : getPrevItem(ScopeContext, scope);
              if (targetItem) {
                focusItem(event, targetItem.scopeRef.current);
                return;
              }
            }
            break;
          }
          case 'ArrowDown': {
            if (allowModifiers) {
              const values = scope.getChildContextValues(orientation);
              if (onNavigate && navigateTab('NEXT_ITEM', ScopeContext, event, values, scope, allowModifiers)) {
                return;
              }
              const targetItem = allowModifiers || event.metaKey || event.ctrlKey ? getItemByIndex(values, values.length - 1) : getNextItem(ScopeContext, scope);
              if (targetItem) {
                focusItem(event, targetItem.scopeRef.current);
                return;
              }
            }
            break;
          }
          case 'ArrowLeft': {
            if (allowModifiers) {
              const values = scope.getChildContextValues(orientation);
              if (onNavigate && navigateTab('PREV_ITEM', ScopeContext, event, values, scope, allowModifiers)) {
                return;
              }
              const targetItem = allowModifiers || event.metaKey || event.ctrlKey ? getItemByIndex(values, 0) : getPrevItem(ScopeContext, scope);
              if (targetItem) {
                focusItem(event, targetItem.scopeRef.current);
                return;
              }
            }
            break;
          }
          case 'ArrowRight': {
            if (allowModifiers) {
              const values = scope.getChildContextValues(orientation);
              if (onNavigate && navigateTab('NEXT_ITEM', ScopeContext, event, values, scope, allowModifiers)) {
                return;
              }
              const targetItem = allowModifiers || event.metaKey || event.ctrlKey ? getItemByIndex(values, values.length - 1) : getNextItem(ScopeContext, scope);
              if (targetItem) {
                focusItem(event, targetItem.scopeRef.current);
              }
            }
            break;
          }
          default:
            if (isPrintableChar(targetKey) && onNavigate) {
              const values = scope.getChildContextValues(orientation);
              navigateTab('PRINT_CHAR', ScopeContext, event, values, scope, allowModifiers);
            }
        }
      },
    };
  }, [ScopeContext]));

  const FocusGroup = ({ children }) => {
    return (
      <ScopeProvider>
        <DisabledContext.Provider value={false}>
          <ScopeContext.Provider value={ScopeProvider.scopeRef}>
            <div
              ref={useFocusWithinContext}
              onKeyDown={useKeyboardContext.onKeyDown}
              tabIndex={gkx('focus_scope_keyboard_interactions') ? undefined : -1}
            >
              {children}
            </div>
          </ScopeContext.Provider>
        </DisabledContext.Provider>
      </ScopeProvider>
    );
  };

  return FocusGroup;
};

export default createFocusGroup;
