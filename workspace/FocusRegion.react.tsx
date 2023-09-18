__d("FocusRegion.react", ["ActiveFocusRegionUtilsContext", "FocusManager", "FocusRegionType", "ReactEventHookPropagation", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "react", "setElementCanTab", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
  var h = d("react");
  e = d("react");
  var i = e.useCallback,
    j = e.useContext,
    k = e.useEffect,
    l = e.useLayoutEffect,
    m = e.useMemo,
    n = e.useRef;

  function o(a, b, c) {
    var e = document.activeElement;
    window.requestAnimationFrame(function () {
      document.activeElement === e && d("FocusManager").focusElement(a, {
        preventScroll: b,
        focusWithoutUserIntent: c
      })
    })
  }

  function p(a) {
    return a.offsetWidth === 0 && a.offsetHeight === 0
  }
  var q = h.unstable_Scope,
    r = new Map();

  function a(a) {
    var b = a.autoRestoreFocus,
      e = a.autoFocusQuery,
      f = a.children,
      g = a.containFocusQuery,
      s = a.forwardRef,
      t = a.id,
      u = a.onEscapeFocusRegion,
      v = a.recoverFocusStrategy,
      w = v === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : v,
      x = a.recoverFocusQuery;
    v = a.stopOnFocusWithinPropagation;
    var y = v === void 0 ? !0 : v,
      z = n(null),
      A = n(null),
      B = j(c("ActiveFocusRegionUtilsContext"));
    a = B === null && (b === !0 || u != null) ? document.activeElement : null;
    var C = c("useUnsafeRef_DEPRECATED")(a),
      D = (v = C.current) != null ? v : a,
      E = m(function () {
        return {
          lastFocused: null,
          scope: null,
          restorationFocusRegionItem: null,
          triggeredFocusRegionItems: new Set()
        }
      }, []),
      F = i(function () {
        if (B != null) {
          var a = B.getActiveFocusRegion();
          if (a !== E) {
            if (E.restorationFocusRegionItem !== a) {
              var b;
              if ((a == null ? void 0 : a.lastFocused) != null && !((b = z.current) == null ? void 0 : b.containsNode(a.lastFocused))) a != null && a.triggeredFocusRegionItems.add(E), E.restorationFocusRegionItem = a;
              else if (E.restorationFocusRegionItem == null) {
                b = a == null ? void 0 : a.restorationFocusRegionItem;
                E.restorationFocusRegionItem = b;
                a != null && (b == null ? void 0 : b.triggeredFocusRegionItems["delete"](a));
                b == null ? void 0 : b.triggeredFocusRegionItems.add(E);
                B.setActiveFocusRegion(E);
                return
              }
            }(a === null || a != null && E != null && a.lastFocused !== E.lastFocused) && B.setActiveFocusRegion(E)
          }
        }
      }, [B, E]),
      G = n(null);
    v = i(function (a) {
      z.current = a;
      E.scope = a;
      var b = G.current;
      s && (s.current = a);
      b !== null && b !== t && r.get(b) === null && r["delete"](b);
      t != null && (a !== null ? (G.current = t, r.set(t, a)) : r.get(t) === null && r["delete"](t))
    }, [s, t, E]);
    v = d("ReactFocusEvent.react").useFocusWithin(v, m(function () {
      return {
        onBeforeBlurWithin: function (a) {
          var b = z.current;
          if (b !== null && x !== void 0) {
            a.stopPropagation();
            if (x === null) return;
            a = a.target;
            b = d("FocusManager").getAllNodesFromOneOrManyQueries(x, b);
            if (b === null) return;
            var c = b.indexOf(a);
            a = a._tabIndexState;
            A.current = {
              detachedCanTab: a != null && a.canTab,
              recoveryIndex: c,
              recovery: b
            }
          }
        },
        onAfterBlurWithin: function () {
          var a = z.current,
            b = A.current;
          A.current = null;
          var c = document.activeElement;
          if (a !== null && x != null && b !== null && (c == null || c === document.body || !a.containsNode(c))) {
            c = !0;
            var e = !0,
              f = b.recovery,
              g = b.recoveryIndex,
              h = d("FocusManager").getAllNodesFromOneOrManyQueries(x, a);
            if (h !== null && f !== null) {
              var i = new Set(h),
                j = new Set(f);
              for (var k = g - 1; k >= 0; k--) {
                var l = f[k];
                if (i.has(l)) {
                  var m = h.indexOf(l);
                  m = m + 1;
                  if (m < h.length) {
                    m = h[m];
                    if (!j.has(m)) {
                      b.detachedCanTab && d("setElementCanTab").setElementCanTab(m, !0);
                      o(m, c, e);
                      return
                    }
                  }
                  b.detachedCanTab && d("setElementCanTab").setElementCanTab(l, !0);
                  o(l, c, e);
                  return
                }
              }
              if (w === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                for (m = g + 1; m < f.length; m++) {
                  l = f[m];
                  if (i.has(l)) {
                    j = h.indexOf(l);
                    k = j - 1;
                    if (k >= 0) {
                      g = h[k];
                      b.detachedCanTab && d("setElementCanTab").setElementCanTab(g, !0);
                      o(g, c, e);
                      return
                    }
                  }
                }
              l = d("FocusManager").getFirstNodeFromOneOrManyQueries(x, a);
              l && (b.detachedCanTab && d("setElementCanTab").setElementCanTab(l, !0), o(l, c, e))
            }
          }
        },
        onFocusWithin: function (a) {
          y && d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin"), E.lastFocused = a.target, F()
        }
      }
    }, [x, w, y, E, F]));
    a = i(function () {
      var a = z.current,
        b = document.activeElement;
      if (e != null && a !== null && (!b || !a.containsNode(b))) {
        b = E.lastFocused;
        b != null && a.containsNode(b) && !p(b) ? d("FocusManager").focusElement(b, {
          focusWithAutoFocus: !0,
          focusWithoutUserIntent: !0,
          preventScroll: !0
        }) : d("FocusManager").focusFirst(e, a, {
          focusWithAutoFocus: !0,
          focusWithoutUserIntent: !0,
          preventScroll: !0
        })
      }
    }, [e, E]);
    l(a, [a]);
    k(a, [a]);
    var H = i(function (a, c) {
        c === void 0 && (c = !1);
        var e = z.current,
          f = document.activeElement,
          g = C.current;
        C.current = null;
        var h = a == null ? void 0 : a.triggeredFocusRegionItems,
          i = a == null ? void 0 : a.restorationFocusRegionItem;
        (h == null ? void 0 : h.size) && h.forEach(function (a) {
          return a.restorationFocusRegionItem = i
        });
        a != null && i != null && (i.triggeredFocusRegionItems["delete"](a), (h == null ? void 0 : h.size) && h.forEach(function (a) {
          i.triggeredFocusRegionItems.add(a)
        }));
        E.lastFocused = null;
        h = B == null ? void 0 : B.getActiveFocusRegion();
        var j = h != null ? h.restorationFocusRegionItem : {
          lastFocused: g
        };
        h === a && (B == null ? void 0 : B.setActiveFocusRegion(i));
        g = e !== null && f !== null && e.containsNode(f) || f == null || f === document.body;
        if ((b === !0 || u != null) && g) {
          var k = function (a) {
            a === void 0 && (a = !1);
            if ((j == null ? void 0 : j.lastFocused) != null) {
              var b = !0,
                c = !0,
                e = document.activeElement;
              (a || e === null || e === document.body) && d("FocusManager").focusElement(j.lastFocused, {
                preventScroll: b,
                focusWithoutUserIntent: c
              })
            }
          };
          c ? k(c) : window.requestAnimationFrame(function () {
            return k()
          })
        }
      }, [B, b, u, E]),
      I = i(function () {
        H(E, !0), u && u()
      }, [H, u, E]);
    d("ReactKeyboardEvent.react").useKeyboard(z, m(function () {
      return {
        onKeyDown: function (a) {
          if (g == null || a.key !== "Tab" || a.isDefaultPrevented()) return;
          var b = z.current;
          b !== null && (a.shiftKey ? d("FocusManager").focusPreviousContained(g, b, a, !0, u != null ? I : void 0) : d("FocusManager").focusNextContained(g, b, a, !0, u != null ? I : void 0))
        }
      }
    }, [g, I, u]));
    l(function () {
      C.current = D;
      var a = E;
      return function () {
        H(a)
      }
    }, [B, b, H, E, D]);
    return h.jsx(q, {
      ref: v,
      id: t,
      children: f
    })
  }
  a.displayName = a.name + " [from " + f.id + "]";

  function b(a, b, c) {
    a = r.get(a);
    if (a) {
      a = a.DO_NOT_USE_queryFirstNode(b);
      if (a !== null) {
        d("FocusManager").focusElement(a, {
          preventScroll: c
        });
        return a
      }
    }
    return null
  }
  g.FocusRegion = a;
  g.focusRegionById = b
}), 98);






import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { unstable_Scope as Scope } from 'react';
import { FocusManager, FocusRegionType } from './FocusManager';
import { ReactEventHookPropagation } from 'ReactEventHookPropagation';
import { ReactFocusEvent } from './ReactFocusEvent';
import { ReactKeyboardEvent } from './ReactKeyboardEvent';
import { setElementCanTab } from './setElementCanTab';
import { useUnsafeRef_DEPRECATED } from './useUnsafeRef_DEPRECATED';
import { ActiveFocusRegionUtilsContext } from 'ActiveFocusRegionUtilsContext';

function focusElementWithDelay(element, preventScroll, focusWithoutUserIntent) {
  const previousActiveElement = document.activeElement;
  window.requestAnimationFrame(() => {
    if (document.activeElement === previousActiveElement) {
      FocusManager.focusElement(element, {
        preventScroll,
        focusWithoutUserIntent,
      });
    }
  });
}

function isElementHidden(element) {
  return element.offsetWidth === 0 && element.offsetHeight === 0;
}

const activeFocusRegions = new Map();

function FocusRegion({
  autoRestoreFocus,
  autoFocusQuery,
  children,
  containFocusQuery,
  forwardRef,
  id,
  onEscapeFocusRegion,
  recoverFocusStrategy = FocusRegionType.RecoverFocusStrategy.Nearest,
  recoverFocusQuery,
  stopOnFocusWithinPropagation = true,
}) {
  const activeFocusRegionUtils = useContext(ActiveFocusRegionUtilsContext);
  const scopeRef = useRef(null);
  const triggerRef = useRef(null);
  const currentActiveFocusRegionRef = useRef(null);


  const activeFocusRegion = activeFocusRegionUtils === null && (autoRestoreFocus === true || onEscapeFocusRegion != null)
    ? document.activeElement
    : null;
  const activeFocusRegionRef = useUnsafeRef_DEPRECATED(activeFocusRegion);
  const activeFocusRegionData = useMemo(
    () => ({
      lastFocused: null,
      scope: null,
      restorationFocusRegionItem: null,
      triggeredFocusRegionItems: new Set(),
    }),
    []
  );

  const updateActiveFocusRegion = useCallback(() => {
    if (activeFocusRegionUtils != null) {
      const currentActiveFocusRegion = activeFocusRegionUtils.getActiveFocusRegion();
      if (currentActiveFocusRegion !== activeFocusRegionData) {
        if (activeFocusRegionData.restorationFocusRegionItem !== currentActiveFocusRegion) {
          let container;
          if (
            currentActiveFocusRegion?.lastFocused != null &&
            !scopeRef.current?.containsNode(currentActiveFocusRegion.lastFocused)
          ) {
            currentActiveFocusRegion != null &&
              currentActiveFocusRegion.triggeredFocusRegionItems.add(activeFocusRegionData);
            activeFocusRegionData.restorationFocusRegionItem = currentActiveFocusRegion;
          } else if (activeFocusRegionData.restorationFocusRegionItem == null) {
            container = currentActiveFocusRegion?.restorationFocusRegionItem;
            activeFocusRegionData.restorationFocusRegionItem = container;
            currentActiveFocusRegion != null &&
              container != null &&
              container.triggeredFocusRegionItems.delete(currentActiveFocusRegion);
            container != null && container.triggeredFocusRegionItems.add(activeFocusRegionData);
            activeFocusRegionUtils.setActiveFocusRegion(activeFocusRegionData);
            return;
          }
        }

        if (
          currentActiveFocusRegion === null ||
          (currentActiveFocusRegion != null &&
            activeFocusRegionData != null &&
            currentActiveFocusRegion.lastFocused !== activeFocusRegionData.lastFocused)
        ) {
          activeFocusRegionUtils.setActiveFocusRegion(activeFocusRegionData);
        }
      }
    }
  }, [activeFocusRegionUtils, activeFocusRegionData]);


  const scopeRefCallback = useCallback(
    (ref) => {
      scopeRef.current = ref;
      activeFocusRegionData.scope = ref;

      const previousActiveFocusRegionId = currentActiveFocusRegionRef.current;
      if (forwardRef) {
        forwardRef.current = ref;
      }
      if (
        previousActiveFocusRegionId !== null &&
        previousActiveFocusRegionId !== id &&
        activeFocusRegions.get(previousActiveFocusRegionId) === null
      ) {
        activeFocusRegions.delete(previousActiveFocusRegionId);
      }
      if (id != null) {
        if (ref !== null) {
          currentActiveFocusRegionRef.current = id;
          activeFocusRegions.set(id, ref);
        } else if (activeFocusRegions.get(id) === null) {
          activeFocusRegions.delete(id);
        }
      }
    },
    [forwardRef, id, activeFocusRegionData]
  );

  const focusWithinHandlers = ReactFocusEvent.useFocusWithin(scopeRefCallback,useMemo(() => {
    return {
      onBeforeBlurWithin: function (event) {
        const scope = scopeRef.current;
        if (scope !== null && recoverFocusQuery !== void 0) {
          event.stopPropagation();
          if (recoverFocusQuery === null) {
            return;
          }
          const target = event.target;
          const queryScope = FocusManager.getAllNodesFromOneOrManyQueries(recoverFocusQuery, scope);
         
          if (queryScope === null) {
            return;
          }

          const recoveryIndex = queryScope.indexOf(target);
          const tabIndexState = target._tabIndexState;
          scopeRef.current = {
            detachedCanTab: tabIndexState !== null && tabIndexState.canTab,
            recoveryIndex,
            recovery: queryScope,
          };
        }
      },
      onAfterBlurWithin: function () {
        const currentScope = scopeRef.current;
        const recoveryData = triggerRef.current;
        triggerRef.current = null;
        const activeElement = document.activeElement;

        if (currentScope !== null && autoFocusQuery != null && recoveryData !== null && (activeElement == null || activeElement === document.body || !currentScope.containsNode(activeElement))) {
          const preventScroll = true;
          const focusWithoutUserIntent = true;
          const {recovery,recoveryIndex} = recoveryData;
          const focusableNodes = FocusManager.getAllNodesFromOneOrManyQueries(recoverFocusQuery, currentScope);
          if (focusableNodes !== null && recovery !== null) {
            const focusableSet = new Set(focusableNodes);
            const recoverSet = new Set(recovery);
            for (let i = recoveryIndex - 1; i >= 0; i--) {
              const recoverNode = recovery[i];
              if (focusableSet.has(recoverNode)) {
                const nextIndex = focusableNodes.indexOf(recoverNode) + 1;

                if(nextIndex < focusableNodes.length) {
                  const nextNode = focusableNodes[nextIndex];

                  if (!recoverSet.has(nextNode)) {
                    recoveryData.detachedCanTab && setElementCanTab(nextNode, true);
                    focusElementWithDelay(nextNode, preventScroll, focusWithoutUserIntent);
                    return;
                  }
                }
              }
            }
            if (recoverFocusStrategy === FocusRegionType.RecoverFocusStrategy.Nearest) {
              for (let i = recoveryIndex + 1; i < recovery.length; i++) {
                const recoverNode = recovery[i];
                if (focusableSet.has(recoverNode)) {
                  const previousFocusNode = focusableNodes[focusableNodes.indexOf(recoverNode) - 1];
                  recoveryData.detachedCanTab && setElementCanTab(previousFocusNode, true);
                  focusElementWithDelay(previousFocusNode, preventScroll, focusWithoutUserIntent);
                  return;
                }
              }
            }
            const firstFocusNode = FocusManager.getFirstNodeFromOneOrManyQueries(recoverFocusQuery, currentScope);
            if (firstFocusNode) {
              recoveryData.detachedCanTab && setElementCanTab(firstFocusNode, true);
              focusElementWithDelay(firstFocusNode, preventScroll, focusWithoutUserIntent);
            }
          }
        }
      },
      onFocusWithin: function (event) {
        stopOnFocusWithinPropagation && ReactEventHookPropagation.stopEventHookPropagation(event, "useFocusWithin");
        activeFocusRegionData.lastFocused = event.target;
        updateActiveFocusRegion();
      }
    }
  }), [recoverFocusQuery, recoverFocusStrategy, stopOnFocusWithinPropagation, activeFocusRegionData, updateActiveFocusRegion])

  const autoRestoreFocusCallback = useCallback(() => {
    const scope = scopeRef.current;
    const activeElement = document.activeElement;
    if (autoFocusQuery != null && scope !== null && (!activeElement || !scope.containsNode(activeElement))) {
      const lastFocused = activeFocusRegionData.lastFocused;
      if (lastFocused != null && scope.containsNode(lastFocused) && !isElementHidden(lastFocused)) {
        FocusManager.focusElement(lastFocused, {
          focusWithAutoFocus: true,
          focusWithoutUserIntent: true,
          preventScroll: true,
        });
      } else {
        FocusManager.focusFirst(autoFocusQuery, scope, {
          focusWithAutoFocus: true,
          focusWithoutUserIntent: true,
          preventScroll: true,
        });
      }
    }
  }, [autoFocusQuery, activeFocusRegionData]);

  useLayoutEffect(autoRestoreFocusCallback, [autoRestoreFocusCallback]);
  useEffect(autoRestoreFocusCallback, [autoRestoreFocusCallback]);

  const handleBlur = useCallback(
    (previousActiveFocusRegion, shouldPreventScroll = false) => {
      const currentScope = scopeRef.current;
      const currentActiveElement = document.activeElement;
      const previousActiveScope = activeFocusRegionRef.current;
      activeFocusRegionRef.current = null;
  
      const triggeredFocusRegionItems = previousActiveFocusRegion?.triggeredFocusRegionItems;
      const restorationFocusRegionItem = previousActiveFocusRegion?.restorationFocusRegionItem;
  
      triggeredFocusRegionItems?.forEach((item) => {
        item.restorationFocusRegionItem = restorationFocusRegionItem;
      });
  
      if (previousActiveFocusRegion != null && restorationFocusRegionItem != null) {
        restorationFocusRegionItem.triggeredFocusRegionItems.delete(previousActiveFocusRegion);
        triggeredFocusRegionItems?.forEach((item) => {
          restorationFocusRegionItem.triggeredFocusRegionItems.add(item);
        });
      }
  
      activeFocusRegionData.lastFocused = null;
      
      const currentActiveFocusRegion = activeFocusRegionUtils?.getActiveFocusRegion();
      const lastFocused = currentActiveFocusRegion != null ? currentActiveFocusRegion.restorationFocusRegionItem : { lastFocused: previousActiveScope.current };
  
      if (currentActiveFocusRegion === previousActiveFocusRegion) {
        activeFocusRegionUtils?.setActiveFocusRegion(restorationFocusRegionItem);
      }
  
      const isFocusWithinScope =
        currentScope !== null && currentActiveElement !== null && currentScope.containsNode(currentActiveElement);
  
      if ((autoRestoreFocus === true || onEscapeFocusRegion != null) && isFocusWithinScope) {
        const focusAfterBlur = (shouldPreventScroll = false) => {
          if (lastFocused?.lastFocused != null) {
            const preventScroll = true;
            const focusWithoutUserIntent = true;
            const currentActiveElement = document.activeElement;
            if (shouldPreventScroll || currentActiveElement === null || currentActiveElement === document.body) {
              FocusManager.focusElement(lastFocused.lastFocused, {
                preventScroll,
                focusWithoutUserIntent,
              });
            }
          }
        };
  
        if (shouldPreventScroll) {
          focusAfterBlur(shouldPreventScroll);
        } else {
          window.requestAnimationFrame(() => {
            focusAfterBlur();
          });
        }
      }
    },
    [activeFocusRegionUtils, autoRestoreFocus, onEscapeFocusRegion]
  );
  
  const handleEscapeFocusRegion = useCallback(() => {
    handleBlur(activeFocusRegionRef, true);
    onEscapeFocusRegion && onEscapeFocusRegion();
  }, [handleBlur, onEscapeFocusRegion, activeFocusRegionRef]);
  

  const handleKeyDown = useCallback(
    (event) => {
      if (containFocusQuery === null || event.key !== 'Tab' || event.isDefaultPrevented()) {
        return;
      }
      const scope = scopeRef.current;
      if (scope !== null) {
        if (event.shiftKey) {
          FocusManager.focusPreviousContained(containFocusQuery, scope, event, true, onEscapeFocusRegion != null ? handleEscapeFocusRegion : undefined);
        } else {
          FocusManager.focusNextContained(containFocusQuery, scope, event, true, onEscapeFocusRegion != null ? handleEscapeFocusRegion : undefined);
        }
      }
    },
    [containFocusQuery, onEscapeFocusRegion, handleEscapeFocusRegion]
  );

  ReactKeyboardEvent.useKeyboard(scopeRef, () => ({
    onKeyDown: handleKeyDown,
  }));

  useLayoutEffect(() => {
    activeFocusRegionRef.current = activeFocusRegionRef.current ? activeFocusRegionRef.current : activeFocusRegion;
    const currentFocusRegion = activeFocusRegionData;
  
    return handleBlur(currentFocusRegion);
  }, [activeFocusRegionUtils, autoRestoreFocus, handleBlur, activeFocusRegionData, activeFocusRegion]);

  return (
    <Scope ref={focusWithinHandlers} id={id}>
      {children}
    </Scope>
  );
}

function focusRegionById(id, query, preventScroll) {
  const focusRegion = activeFocusRegions.get(id);
  if (focusRegion) {
    const element = focusRegion.DO_NOT_USE_queryFirstNode(query);
    if (element !== null) {
      FocusManager.focusElement(element, { preventScroll: preventScroll });
      return element;
    }
  }
  return null;
}

export { FocusRegion, focusRegionById };
