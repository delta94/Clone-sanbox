__d("FocusGroup.react", ["FocusManager", "Locale", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "focusKeyboardEventPropagation", "gkx", "react", "setElementCanTab"], (function (a, b, c, d, e, f, g) {
  var h, i = h || (h = d("react"));
  b = h;
  var j = b.useContext,
    k = b.useMemo,
    l = b.useRef,
    m = 5;

  function n(a) {
    return a.length === 1
  }

  function o(a, b, c, e) {
    d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(c);
    b = b.DO_NOT_USE_queryFirstNode(a);
    b !== null && (document.activeElement != null && d("setElementCanTab").setElementCanTab(document.activeElement, !1), d("setElementCanTab").setElementCanTab(b, !0), d("FocusManager").focusElement(b, {
      preventScroll: e
    }), c.preventDefault())
  }

  function p(a, b, c, d, e, f) {
    b = b.onNavigate;
    if (b && d) {
      var g = !1,
        h = q(d, e);
      e = {
        currentIndex: h,
        event: c,
        focusItem: function (a, b) {
          a = a.scopeRef.current;
          a && o(b || f, a, c)
        },
        getItem: function (a) {
          return u(d, a)
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

  function q(a, b) {
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      if (d && d.scopeRef.current === b) return c
    }
    return -1
  }

  function r(a, b, c) {
    var d = a.scopeRef.current;
    if (d === null) return null;
    if (c !== null) {
      d = q(c, b);
      b = a.wrap;
      a = v(c, d - 1);
      return !a && b === !0 ? v(c, c.length - 1) : a
    }
    return null
  }

  function s(a, b, c) {
    var d = a.scopeRef.current;
    if (d === null) return null;
    if (c.length > 0) {
      d = q(c, b);
      b = a.wrap;
      a = t(c, d + 1);
      return !a && b === !0 ? t(c, 0) : a
    }
    return null
  }

  function t(a, b) {
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

  function u(a, b) {
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

  function v(a, b) {
    a = u(a, b);
    return a ? a.scopeRef.current : null
  }

  function w(a) {
    var b = a.altKey,
      c = a.ctrlKey,
      d = a.metaKey;
    a = a.shiftKey;
    return b === !0 || c === !0 || d === !0 || a === !0
  }

  function a(a) {
    var b = i.unstable_Scope,
      c = i.createContext(null),
      e = i.createContext(null);

    function g(e) {
      var f = e.children,
        g = e.orientation,
        j = e.wrap,
        n = e.tabScopeQuery,
        o = e.allowModifiers,
        p = e.preventScrollOnFocus,
        q = p === void 0 ? !1 : p;
      p = e.pageJumpSize;
      var r = p === void 0 ? m : p,
        s = e.onNavigate,
        t = l(null);
      p = k(function () {
        return {
          scopeRef: t,
          orientation: g,
          wrap: j,
          tabScopeQuery: n,
          allowModifiers: o,
          pageJumpSize: r,
          preventScrollOnFocus: q,
          onNavigate: s
        }
      }, [g, j, n, o, r, q, s]);
      var u = l(!1);
      e = d("ReactFocusEvent.react").useFocusWithin(t, k(function () {
        return {
          onFocusWithin: function (b) {
            u.current || (u.current = !0, t.current && a && (h(t.current, a), d("setElementCanTab").setElementCanTab(b.target, !0)))
          }
        }
      }, [u]));
      return i.jsx(c.Provider, {
        value: p,
        children: i.jsx(b, {
          ref: e,
          children: f
        })
      })
    }
    g.displayName = g.name + " [from " + f.id + "]";

    function h(a, b) {
      var c = document.activeElement;
      a = a.DO_NOT_USE_queryAllNodes(b);
      if (a !== null)
        for (b = 0; b < a.length; b++) {
          var e = a[b];
          e !== c ? d("setElementCanTab").setElementCanTab(e, !1) : d("setElementCanTab").setElementCanTab(e, !0)
        }
    }

    function u(f) {
      var g = f.children,
        m = f.disabled;
      f = f.tag;
      var u = l(null),
        x = j(c);
      d("ReactKeyboardEvent.react").useKeyboard(u, k(function () {
        return {
          onKeyDown: function (b) {
            if (d("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(b)) return;
            var c = u.current;
            if (c !== null && x !== null) {
              var f = x.orientation === "vertical" || x.orientation === "both",
                g = x.orientation === "horizontal" || x.orientation === "both",
                i = x.scopeRef.current,
                j = b.key,
                k = x.preventScrollOnFocus;
              if (j === "Tab" && i !== null) {
                var l = x.tabScopeQuery;
                if (l) {
                  if (x.onNavigate) {
                    var m = i.getChildContextValues(e);
                    if (p("TAB", x, b, m, c, l)) return
                  }
                  h(i, l)
                }
                return
              }
              if (w(b)) {
                m = x.allowModifiers;
                if (m !== !0) return
              }
              if (i === null) return;
              l = j;
              d("Locale").isRTL() && (j === "ArrowRight" ? l = "ArrowLeft" : j === "ArrowLeft" && (l = "ArrowRight"));
              switch (l) {
                case "Home":
                  m = i.getChildContextValues(e);
                  if (p("HOME", x, b, m, c, a)) return;
                  l = t(m, 0);
                  if (l) {
                    o(a, l, b, k);
                    return
                  }
                  break;
                case "End":
                  m = i.getChildContextValues(e);
                  if (p("END", x, b, m, c, a)) return;
                  l = v(m, m.length - 1);
                  if (l) {
                    o(a, l, b, k);
                    return
                  }
                  break;
                case "PageUp":
                  m = i.getChildContextValues(e);
                  if (p("PAGE_UP", x, b, m, c, a)) return;
                  l = x.pageJumpSize;
                  var y = q(m, c);
                  m = t(m, Math.max(0, y - l));
                  if (m) {
                    o(a, m, b, k);
                    return
                  }
                  break;
                case "PageDown":
                  y = i.getChildContextValues(e);
                  if (p("PAGE_DOWN", x, b, y, c, a)) return;
                  l = x.pageJumpSize;
                  m = q(y, c);
                  y = v(y, Math.min(y.length - 1, m + l));
                  if (y) {
                    o(a, y, b, k);
                    return
                  }
                  break;
                case "ArrowUp":
                  if (f) {
                    m = i.getChildContextValues(e);
                    if (p("PREV_ITEM", x, b, m, c, a)) return;
                    l = b.metaKey || b.ctrlKey ? t(m, 0) : r(x, c, m);
                    if (l) {
                      o(a, l, b, k);
                      return
                    }
                  }
                  break;
                case "ArrowDown":
                  if (f) {
                    y = i.getChildContextValues(e);
                    if (p("NEXT_ITEM", x, b, y, c, a)) return;
                    m = b.metaKey || b.ctrlKey ? v(y, y.length - 1) : s(x, c, y);
                    if (m) {
                      o(a, m, b, k);
                      return
                    }
                  }
                  break;
                case "ArrowLeft":
                  if (g) {
                    l = i.getChildContextValues(e);
                    if (p("PREV_ITEM", x, b, l, c, a)) return;
                    f = b.metaKey || b.ctrlKey ? t(l, 0) : r(x, c, l);
                    if (f) {
                      o(a, f, b, k);
                      return
                    }
                  }
                  break;
                case "ArrowRight":
                  if (g) {
                    y = i.getChildContextValues(e);
                    if (p("NEXT_ITEM", x, b, y, c, a)) return;
                    m = b.metaKey || b.ctrlKey ? v(y, y.length - 1) : s(x, c, y);
                    m && o(a, m, b, k)
                  }
                  break;
                default:
                  if (n(j) && x.onNavigate) {
                    l = i.getChildContextValues(e);
                    p("PRINT_CHAR", x, b, l, c, a)
                  }
              }
            }
          }
        }
      }, [x]));
      var y = d("ReactFocusEvent.react").useFocusWithin(u, k(function () {
        return {
          onFocusWithin: function (b) {
            if (a != null) {
              var c;
              c = (c = u.current) == null ? void 0 : c.DO_NOT_USE_queryFirstNode(a);
              b = b.target === c;
              if (b && (c && !d("setElementCanTab").canElementTab(c))) {
                b = x == null ? void 0 : x.scopeRef.current;
                b && h(b, a)
              }
            }
          }
        }
      }, [x == null ? void 0 : x.scopeRef]));
      m = {
        scopeRef: u,
        disabled: m,
        tag: f
      };
      return i.jsx(e.Provider, {
        value: m,
        children: i.jsx(b, {
          ref: y,
          children: g
        })
      })
    }
    u.displayName = u.name + " [from " + f.id + "]";
    return [g, u]
  }
  g.createFocusGroup = a
}), 98);

import React, { useContext, useMemo, useRef } from 'react'; 
import { focusKeyboardEventPropagation, setElementCanTab } from 'fbjs';
import { useFocusWithin } from 'ReactFocusEvent.react';
import { useKeyboard } from 'ReactKeyboardEvent.react';

import FocusManager from 'FocusManager';
import Locale from 'Locale';
import { hasFocusKeyboardEventPropagationStopped } from 'focusKeyboardEventPropagation';
import gkx from 'gkx';

const PAGE_JUMP_SIZE = 5;

function isSingleCharKey(key: string) {
  return key.length === 1;
}

function focusItem(scopeRef, itemRef, event, preventScroll = false) {
  focusKeyboardEventPropagation.stopFocusKeyboardEventPropagation(event);

  const firstNode = itemRef.DO_NOT_USE_queryFirstNode(scopeRef);
  if (firstNode !== null) {
    if (document.activeElement != null) {
      setElementCanTab(document.activeElement, false);
    }
    setElementCanTab(firstNode, true);
    FocusManager.focusElement(firstNode, {preventScroll});
    event.preventDefault();
  }
}

function onNavigate(type, state, event, items, focusedItemRef, tabScopeQuery) {
  const {onNavigate} = state;
  if (onNavigate && items) {
    let preventedDefault = false;
    const focusedIndex = getFocusedIndex(items, focusedItemRef);

    const navigation = {
      currentIndex: focusedIndex,
      event,
      focusItem: (itemRef, overrideRef) => {
        const scope = itemRef.scopeRef.current;
        if (scope) {
          focusItem(overrideRef || tabScopeQuery, scope, event);
        }
      },
      getItem: index => getItemByReverseIndex(items, index),
      getItemByTag: tag => {
        const length = items.length;
        let i = focusedIndex + 1;
        
        while (true) {
          if (i === focusedIndex) {
            return null;
          }
          if (i > length - 1) {
            i = 0;
            continue;
          }
          
          const item = items[i];
          if (item) {
            const {disabled, scopeRef, tag: itemTag} = item;
            const scope = scopeRef.current;
            if (scope && disabled !== true && itemTag === tag) {
              return item;
            }
          }
          
          i++;
        }
        
        return null;
      },
      preventDefault: () => {
        preventedDefault = true;
      },
      type,
    };

    onNavigate(navigation);

    if (preventedDefault) {
      return true; 
    }
  }

  return false;
}

function getFocusedIndex(items, focusedItemRef) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item && item.scopeRef.current === focusedItemRef) {
      return i;
    }
  }

  return -1;
}

function getPreviousItem(itemState, focusedItemRef, items) {
  const scope = itemState.scopeRef.current;
  if (scope === null) {
    return null;
  }

  if (items !== null) {
    let index = getFocusedIndex(items, focusedItemRef);
    const wrap = itemState.wrap;

    const prev = getItemByIndex(items, index - 1);
    if (!prev && wrap === true) {
      return getItemByIndex(items, items.length - 1);
    }

    return prev;
  }

  return null;
}

function getNextItem(itemState, focusedItemRef, items) {
  const scope = itemState.scopeRef.current;
  if (scope === null) {
    return null;
  }

  if (items.length > 0) {
    let index = getFocusedIndex(items, focusedItemRef);
    const wrap = itemState.wrap;

    const next = getItemByIndex(items, index + 1);
    if (!next && wrap === true) {
      return getItemByIndex(items, 0);
    }

    return next;
  }

  return null;
}

function getItemByIndex(items, index) {
  const length = items.length;
  if (index > length) {
    return null;
  }

  let i = index;
  while (i < length) {
    const item = items[i];

    if (gkx('5403')) {
      if (item !== null) {
        return item.scopeRef.current;
      }
    } else if (item !== null && item.disabled !== true) {
      return item.scopeRef.current;
    }

    i++;
  }

  return null;
}

function getItemByReverseIndex(items, index) {
  let i = index;
  while (i >= 0) {
    const item = items[i];
    if (gkx('5403')) {
      if (item !== null) return item;
    } else if (item !== null && item.disabled !== true) {
      return item;
    }
    i--; 
  }
  
  return null;
}

function getValidItemByIndex(items, index) {
  const item = getItemByReverseIndex(items, index);
  return item ? item.scopeRef.current : null;
}

function hasModifiers(event) {
  const {altKey, ctrlKey, metaKey, shiftKey} = event;
  return altKey === true || ctrlKey === true || metaKey === true || shiftKey === true;
}

function FocusGroup(props) {
  const Scope = React.unstable_Scope;
  const StateContext = React.createContext(null);
  const ItemContext = React.createContext(null);
  

  function Component({
    children,
    orientation,
    wrap,
    tabScopeQuery,
    allowModifiers,
    preventScrollOnFocus = false,
    pageJumpSize = PAGE_JUMP_SIZE,
    onNavigate  
  }) {
  
    const scopeRef = useRef(null);
  
    const state = useMemo(() => {
      return {
        scopeRef,
        orientation,
        wrap,
        tabScopeQuery,
        allowModifiers,
        pageJumpSize,
        preventScrollOnFocus,
        onNavigate
      };
    }, [orientation, wrap, tabScopeQuery, allowModifiers, pageJumpSize, preventScrollOnFocus, onNavigate]);
  
    const hasFocused = useRef(false);
  
    useFocusWithin(scopeRef, useMemo(() => {
      return {
        onFocusWithin: (event) => {
          if (!hasFocused.current) {
            hasFocused.current = true;
            if (scopeRef.current && tabScopeQuery) {
              syncTabIndex(scopeRef.current, tabScopeQuery);
              setElementCanTab(event.target, true);
            }
          }
        }
      };
    }, [hasFocused]));
  
    return (
      <StateContext.Provider value={state}>
        <Scope ref={scopeRef}>
          {children}  
        </Scope>
      </StateContext.Provider>
    );
  
  }

  function syncTabIndex(scope, query) {
    const nodes = scope.DO_NOT_USE_queryAllNodes(query);
  
    if (nodes !== null) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node !== document.activeElement) {
          setElementCanTab(node, false);
        } else {
          setElementCanTab(node, true);
        }
      }
    }
  }

  Component.displayName = `${Component.name} [from focusGroupIDs]`;

  function Item({
    children,
    disabled,
    tag  
  }) {

    const itemRef = useRef(null);
    const contextState = useContext(ItemContext);
  
    useKeyboard(itemRef, useMemo(() => {
      return {
        onKeyDown: (event) => {
          if (hasFocusKeyboardEventPropagationStopped(event)) {
            return;
          }
  
          const currentRef = itemRef.current;
          const state = contextState;

          if (currentRef && state) {
            const { orientation, allowModifiers, preventScrollOnFocus } = state;

            const isVertical = orientation === 'vertical' || orientation === 'both';
            const isHorizontal = orientation === 'horizontal' || orientation === 'both';

            const parentScope = state.scopeRef.current;
            let { key } = event;

            const preventScroll = preventScrollOnFocus;
  
            if (key === 'Tab' && parentScope) {
              const {tabScopeQuery, onNavigate} = state;

              if (tabScopeQuery) {
                if (onNavigate) {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('TAB', state, event, items, currentRef, tabScopeQuery)) {
                    return;
                  }
                }
  
                syncTabIndex(parentScope, tabScopeQuery);
                return;
              }
            }
  
            if (hasModifiers(event)) {
              if (allowModifiers !== true) {
                return;
              }
            }
  
            if (parentScope === null) return;

  
            if (Locale.isRTL()) {
              if (key === 'ArrowRight') {
                key = 'ArrowLeft';
              } else if (key === 'ArrowLeft') {
                key = 'ArrowRight';
              }
            }
  
            switch (key) {
              case 'Home':
                {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('HOME', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const firstItem = getItemByIndex(items, 0);
                  if (firstItem) {
                    focusItem(props, firstItem, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'End':
                {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('END', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const lastItem = getValidItemByIndex(items, items.length - 1);
                  if (lastItem) {
                    focusItem(props, lastItem, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'PageUp':
                {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('PAGE_UP', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const {pageJumpSize} = state; 
                  const focusedIndex = getFocusedIndex(items, currentRef);
                  const pageUpItem = getItemByIndex(items, Math.max(0, focusedIndex - pageJumpSize));
                  if (pageUpItem) {
                    focusItem(props, pageUpItem, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'PageDown':
                {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('PAGE_DOWN', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const {pageJumpSize} = state; 
                  const index = getItemByIndex(items, currentRef);
                  const pageDown = getValidItemByIndex(items, Math.min(items.length - 1, index + pageJumpSize));
                  if (pageDown) {
                    focusItem(props, pageDown, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'ArrowUp':
                if (isVertical) {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('PREV_ITEM', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const prev = event.metaKey || event.ctrlKey
                    ? getItemByIndex(items, 0)
                    : getPreviousItem(state, currentRef, items);
  
                  if (prev) {
                    focusItem(props, prev, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'ArrowDown':
                if (isVertical) {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('NEXT_ITEM', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const next = event.metaKey || event.ctrlKey
                    ? getValidItemByIndex(items, items.length - 1)
                    : getNextItem(state, currentRef, items);
  
                  if (next) {
                    focusItem(props, next, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'ArrowLeft':
                if (isHorizontal) {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('PREV_ITEM', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const prev = event.metaKey || event.ctrlKey
                    ? getItemByIndex(items, 0)
                    : getPreviousItem(state, currentRef, items);
  
                  if (prev) {
                    focusItem(props, prev, event, preventScroll);
                    return;
                  }
                }
                break;
  
              case 'ArrowRight':
                if (isHorizontal) {
                  const items = parentScope.getChildContextValues(state);
                  if (onNavigate('NEXT_ITEM', state, event, items, currentRef, props)) {
                    return;
                  }
  
                  const next = event.metaKey || event.ctrlKey 
                    ? getValidItemByIndex(items, items.length - 1)
                    : getNextItem(state, currentRef, items);
  
                  if (next) {
                    focusItem(props, next, event, preventScroll);
                  }
                }
                break;
  
              default:
                if (isSingleCharKey(key) && onNavigate) {
                  const items = parentScope.getChildContextValues(state);
                  onNavigate('PRINT_CHAR', state, event, items, currentRef, props);
                }  
            }
          }
        },
      };
    }, [contextState]));
  
    const focusWithinHandler = useFocusWithin(itemRef, useMemo(() => {
      return {
        onFocusWithin: (event) => {
          if (props) {
            let firstNode = itemRef.current?.DO_NOT_USE_queryFirstNode(props)
            const isFirstNodeFocused = event.target === firstNode;
            if (isFirstNodeFocused && firstNode && !setElementCanTab(firstNode)) {
              const parentScope = contextState?.scopeRef.current;
              parentScope && syncTabIndex(parentScope, props);
            }
          }
        },
      };
    }, [contextState?.scopeRef]));
  
    const itemState = {
      scopeRef: itemRef,
      disabled,
      tag
    };
  
    return (
      <ItemContext.Provider value={itemState}>
        <Scope ref={focusWithinHandler}>
          {children}
        </Scope>
      </ItemContext.Provider>
    );
  
  }

  return [Component, Item]; 
}
