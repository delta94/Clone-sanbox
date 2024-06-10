__d(
  "FocusRegionStrictMode.react",
  [
    "ActiveFocusRegionUtilsContext",
    "FocusManager",
    "FocusRegionType",
    "ReactEventHookPropagation",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "react",
    "setElementCanTab",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = i || (i = d("react"));
    e = i;
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useLayoutEffect,
      o = e.useMemo,
      p = e.useRef;
    function q(a, b, c) {
      var e = document.activeElement;
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d("FocusManager").focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          });
      });
    }
    function r(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0;
    }
    var s = j.unstable_Scope,
      t = new Map();
    function a(a) {
      var b = a.autoRestoreFocus,
        e = a.autoFocusQuery,
        f = a.children,
        g = a.containFocusQuery,
        i = a.forwardRef,
        u = a.id,
        v = a.onEscapeFocusRegion,
        w = a.recoverFocusStrategy,
        x =
          w === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : w,
        y = a.recoverFocusQuery;
      w = a.stopOnFocusWithinPropagation;
      var z = w === void 0 ? !0 : w,
        A = p(null),
        B = p(null),
        C = l(c("ActiveFocusRegionUtilsContext"));
      a = C === null && (b === !0 || v != null) ? document.activeElement : null;
      var D = (h || (h = c("useUnsafeRef_DEPRECATED")))(a),
        E = (w = D.current) != null ? w : a,
        F = o(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        G = k(
          function () {
            if (C != null) {
              var a = C.getActiveFocusRegion();
              if (a !== F) {
                if (F.restorationFocusRegionItem !== a) {
                  var b;
                  if (
                    (a == null ? void 0 : a.lastFocused) != null &&
                    !((b = A.current) == null
                      ? void 0
                      : b.containsNode(a.lastFocused))
                  )
                    a != null && a.triggeredFocusRegionItems.add(F),
                      (F.restorationFocusRegionItem = a);
                  else if (F.restorationFocusRegionItem == null) {
                    b = a == null ? void 0 : a.restorationFocusRegionItem;
                    F.restorationFocusRegionItem = b;
                    a != null &&
                      (b == null
                        ? void 0
                        : b.triggeredFocusRegionItems["delete"](a));
                    b == null ? void 0 : b.triggeredFocusRegionItems.add(F);
                    C.setActiveFocusRegion(F);
                    return;
                  }
                }
                (a === null ||
                  (a != null &&
                    F != null &&
                    a.lastFocused !== F.lastFocused)) &&
                  C.setActiveFocusRegion(F);
              }
            }
          },
          [C, F]
        ),
        H = p(null),
        I = k(
          function (a) {
            A.current = a;
            F.scope = a;
            var b = H.current;
            i && (i.current = a);
            b !== null && b !== u && t.get(b) === null && t["delete"](b);
            u != null &&
              (a !== null
                ? ((H.current = u), t.set(u, a))
                : t.get(u) === null && t["delete"](u));
          },
          [i, u, F]
        );
      I = d("ReactFocusEvent.react").useFocusWithinStrictMode(
        o(
          function () {
            return {
              initializer: I,
              onBeforeBlurWithin: function (a) {
                var b = A.current;
                if (b !== null && y !== void 0) {
                  a.stopPropagation();
                  if (y === null) return;
                  a = a.target;
                  b = d("FocusManager").getAllNodesFromOneOrManyQueries(y, b);
                  if (b === null) return;
                  var c = b.indexOf(a);
                  a = a._tabIndexState;
                  B.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var a = A.current,
                  b = B.current;
                B.current = null;
                var c = document.activeElement;
                if (
                  a !== null &&
                  y != null &&
                  b !== null &&
                  (c == null || c === document.body || !a.containsNode(c))
                ) {
                  c = !0;
                  var e = !0,
                    f = b.recovery,
                    g = b.recoveryIndex,
                    h = d("FocusManager").getAllNodesFromOneOrManyQueries(y, a);
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
                            b.detachedCanTab &&
                              d("setElementCanTab").setElementCanTab(m, !0);
                            q(m, c, e);
                            return;
                          }
                        }
                        b.detachedCanTab &&
                          d("setElementCanTab").setElementCanTab(l, !0);
                        q(l, c, e);
                        return;
                      }
                    }
                    if (x === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                      for (m = g + 1; m < f.length; m++) {
                        l = f[m];
                        if (i.has(l)) {
                          j = h.indexOf(l);
                          k = j - 1;
                          if (k >= 0) {
                            g = h[k];
                            b.detachedCanTab &&
                              d("setElementCanTab").setElementCanTab(g, !0);
                            q(g, c, e);
                            return;
                          }
                        }
                      }
                    l = d("FocusManager").getFirstNodeFromOneOrManyQueries(
                      y,
                      a
                    );
                    l &&
                      (b.detachedCanTab &&
                        d("setElementCanTab").setElementCanTab(l, !0),
                      q(l, c, e));
                  }
                }
              },
              onFocusWithin: function (a) {
                z &&
                  d("ReactEventHookPropagation").stopEventHookPropagation(
                    a,
                    "useFocusWithin"
                  ),
                  (F.lastFocused = a.target),
                  G();
              },
            };
          },
          [y, x, z, F, G]
        )
      );
      w = k(
        function () {
          var a = A.current,
            b = document.activeElement;
          if (e != null && a !== null && (!b || !a.containsNode(b))) {
            b = F.lastFocused;
            b != null && a.containsNode(b) && !r(b)
              ? d("FocusManager").focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d("FocusManager").focusFirst(e, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                });
          }
        },
        [e, F]
      );
      n(w, [w]);
      m(w, [w]);
      var J = k(
          function (a, c) {
            c === void 0 && (c = !1);
            var e = A.current,
              f = document.activeElement,
              g = D.current;
            D.current = null;
            var h = a == null ? void 0 : a.triggeredFocusRegionItems,
              i = a == null ? void 0 : a.restorationFocusRegionItem;
            (h == null ? void 0 : h.size) &&
              h.forEach(function (a) {
                return (a.restorationFocusRegionItem = i);
              });
            a != null &&
              i != null &&
              (i.triggeredFocusRegionItems["delete"](a),
              (h == null ? void 0 : h.size) &&
                h.forEach(function (a) {
                  i.triggeredFocusRegionItems.add(a);
                }));
            F.lastFocused = null;
            h = C == null ? void 0 : C.getActiveFocusRegion();
            var j =
              h != null ? h.restorationFocusRegionItem : { lastFocused: g };
            h === a && (C == null ? void 0 : C.setActiveFocusRegion(i));
            g =
              (e !== null && f !== null && e.containsNode(f)) ||
              f == null ||
              f === document.body;
            if ((b === !0 || v != null) && g) {
              var k = function (a) {
                a === void 0 && (a = !1);
                if ((j == null ? void 0 : j.lastFocused) != null) {
                  var b = !0,
                    c = !0,
                    e = document.activeElement;
                  (a || e === null || e === document.body) &&
                    d("FocusManager").focusElement(j.lastFocused, {
                      preventScroll: b,
                      focusWithoutUserIntent: c,
                    });
                }
              };
              c
                ? k(c)
                : window.requestAnimationFrame(function () {
                    return k();
                  });
            }
          },
          [C, b, v, F]
        ),
        K = k(
          function () {
            J(F, !0), v && v();
          },
          [J, v, F]
        );
      d("ReactKeyboardEvent.react").useKeyboard(
        A,
        o(
          function () {
            return {
              onKeyDown: function (a) {
                if (g == null || a.key !== "Tab" || a.isDefaultPrevented())
                  return;
                var b = A.current;
                b !== null &&
                  (a.shiftKey
                    ? d("FocusManager").focusPreviousContained(
                        g,
                        b,
                        a,
                        !0,
                        v != null ? K : void 0
                      )
                    : d("FocusManager").focusNextContained(
                        g,
                        b,
                        a,
                        !0,
                        v != null ? K : void 0
                      ));
              },
            };
          },
          [g, K, v]
        )
      );
      n(
        function () {
          D.current = E;
          var a = F;
          return function () {
            J(a);
          };
        },
        [C, b, J, F, E]
      );
      return j.jsx(s, { ref: I, id: u, children: f });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b, c) {
      a = t.get(a);
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b);
        if (a !== null) {
          d("FocusManager").focusElement(a, { preventScroll: c });
          return a;
        }
      }
      return null;
    }
    g.FocusRegion = a;
    g.focusRegionById = b;
  },
  98
);

import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  MutableRefObject,
} from "react";
import {
  ActiveFocusRegionUtilsContext,
  FocusManager,
  FocusRegionType,
  ReactEventHookPropagation,
  ReactFocusEvent,
  ReactKeyboardEvent,
  setElementCanTab,
  useUnsafeRef_DEPRECATED,
} from "some-module";

const Scope = React.unstable_Scope;
const focusRegionMap = new Map<string, any>();

interface FocusRegionStrictModeProps {
  autoRestoreFocus?: boolean;
  autoFocusQuery?: string;
  children: React.ReactNode;
  containFocusQuery?: string;
  forwardRef?: MutableRefObject<any>;
  id?: string;
  onEscapeFocusRegion?: () => void;
  recoverFocusStrategy?: string;
  recoverFocusQuery?: string;
  stopOnFocusWithinPropagation?: boolean;
}

const FocusRegionStrictMode: React.FC<FocusRegionStrictModeProps> = ({
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
}) => {
  const scopeRef = useRef<any>(null);
  const lastFocusedRef = useRef<any>(null);
  const restorationFocusRegionItemRef = useRef<any>(null);
  const activeFocusRegionUtilsContext = useContext(
    ActiveFocusRegionUtilsContext
  );
  const initialActiveElement = useUnsafeRef_DEPRECATED(document.activeElement);
  const contextActiveElement =
    initialActiveElement.current || document.activeElement;

  const regionInfo = useMemo(
    () => ({
      lastFocused: null,
      scope: null,
      restorationFocusRegionItem: null,
      triggeredFocusRegionItems: new Set<any>(),
    }),
    []
  );

  const setActiveFocusRegion = useCallback(() => {
    if (activeFocusRegionUtilsContext) {
      const currentActiveFocusRegion =
        activeFocusRegionUtilsContext.getActiveFocusRegion();
      if (currentActiveFocusRegion !== regionInfo) {
        if (
          regionInfo.restorationFocusRegionItem !== currentActiveFocusRegion
        ) {
          if (
            currentActiveFocusRegion?.lastFocused &&
            !scopeRef.current?.containsNode(
              currentActiveFocusRegion.lastFocused
            )
          ) {
            currentActiveFocusRegion?.triggeredFocusRegionItems.add(regionInfo);
            regionInfo.restorationFocusRegionItem = currentActiveFocusRegion;
          } else if (!regionInfo.restorationFocusRegionItem) {
            regionInfo.restorationFocusRegionItem =
              currentActiveFocusRegion?.restorationFocusRegionItem;
            currentActiveFocusRegion?.restorationFocusRegionItem?.triggeredFocusRegionItems.delete(
              currentActiveFocusRegion
            );
            currentActiveFocusRegion?.restorationFocusRegionItem?.triggeredFocusRegionItems.add(
              regionInfo
            );
            activeFocusRegionUtilsContext.setActiveFocusRegion(regionInfo);
            return;
          }
        }
        if (
          currentActiveFocusRegion === null ||
          currentActiveFocusRegion?.lastFocused !== regionInfo.lastFocused
        ) {
          activeFocusRegionUtilsContext.setActiveFocusRegion(regionInfo);
        }
      }
    }
  }, [activeFocusRegionUtilsContext, regionInfo]);

  const refCallback = useCallback(
    (node: any) => {
      scopeRef.current = node;
      regionInfo.scope = node;
      if (forwardRef) forwardRef.current = node;
      const previousId = lastFocusedRef.current;
      if (previousId && !focusRegionMap.has(previousId)) {
        focusRegionMap.delete(previousId);
      }
      if (id) {
        if (node) {
          lastFocusedRef.current = id;
          focusRegionMap.set(id, node);
        } else {
          if (!focusRegionMap.has(id)) {
            focusRegionMap.delete(id);
          }
        }
      }
    },
    [forwardRef, id, regionInfo]
  );

  const onFocusWithinStrictMode = ReactFocusEvent.useFocusWithinStrictMode(
    useMemo(
      () => ({
        initializer: refCallback,
        onBeforeBlurWithin: (event) => {
          const scope = scopeRef.current;
          if (scope && recoverFocusQuery) {
            event.stopPropagation();
            if (!recoverFocusQuery) return;
            const target = event.target;
            const nodes = FocusManager.getAllNodesFromOneOrManyQueries(
              recoverFocusQuery,
              scope
            );
            if (!nodes) return;
            const recoveryIndex = nodes.indexOf(target);
            const tabIndexState = target._tabIndexState;
            lastFocusedRef.current = {
              detachedCanTab: tabIndexState?.canTab,
              recoveryIndex,
              recovery: nodes,
            };
          }
        },
        onAfterBlurWithin: () => {
          const scope = scopeRef.current;
          const lastFocused = lastFocusedRef.current;
          lastFocusedRef.current = null;
          const activeElement = document.activeElement;
          if (
            scope &&
            recoverFocusQuery &&
            lastFocused &&
            (!activeElement ||
              activeElement === document.body ||
              !scope.containsNode(activeElement))
          ) {
            const nodes = FocusManager.getAllNodesFromOneOrManyQueries(
              recoverFocusQuery,
              scope
            );
            const { recovery, recoveryIndex, detachedCanTab } = lastFocused;
            if (nodes && recovery) {
              const recoverySet = new Set(recovery);
              const nodesSet = new Set(nodes);
              for (let i = recoveryIndex - 1; i >= 0; i--) {
                const node = recovery[i];
                if (nodesSet.has(node)) {
                  const index = nodes.indexOf(node);
                  if (index + 1 < nodes.length) {
                    const nextNode = nodes[index + 1];
                    if (!recoverySet.has(nextNode)) {
                      if (detachedCanTab) setElementCanTab(nextNode, true);
                      FocusManager.focusElement(nextNode, {
                        preventScroll: true,
                        focusWithoutUserIntent: true,
                      });
                      return;
                    }
                  }
                  if (detachedCanTab) setElementCanTab(node, true);
                  FocusManager.focusElement(node, {
                    preventScroll: true,
                    focusWithoutUserIntent: true,
                  });
                  return;
                }
              }
              if (
                recoverFocusStrategy ===
                FocusRegionType.RecoverFocusStrategy.Nearest
              ) {
                for (let i = recoveryIndex + 1; i < recovery.length; i++) {
                  const node = recovery[i];
                  if (nodesSet.has(node)) {
                    const index = nodes.indexOf(node);
                    if (index - 1 >= 0) {
                      const prevNode = nodes[index - 1];
                      if (detachedCanTab) setElementCanTab(prevNode, true);
                      FocusManager.focusElement(prevNode, {
                        preventScroll: true,
                        focusWithoutUserIntent: true,
                      });
                      return;
                    }
                  }
                }
              }
              const firstNode = FocusManager.getFirstNodeFromOneOrManyQueries(
                recoverFocusQuery,
                scope
              );
              if (firstNode) {
                if (detachedCanTab) setElementCanTab(firstNode, true);
                FocusManager.focusElement(firstNode, {
                  preventScroll: true,
                  focusWithoutUserIntent: true,
                });
              }
            }
          }
        },
        onFocusWithin: (event) => {
          if (stopOnFocusWithinPropagation) {
            ReactEventHookPropagation.stopEventHookPropagation(
              event,
              "useFocusWithin"
            );
          }
          regionInfo.lastFocused = event.target;
          setActiveFocusRegion();
        },
      }),
      [
        recoverFocusQuery,
        recoverFocusStrategy,
        stopOnFocusWithinPropagation,
        regionInfo,
        setActiveFocusRegion,
      ]
    )
  );

  const autoFocusHandler = useCallback(() => {
    const scope = scopeRef.current;
    const activeElement = document.activeElement;
    if (
      autoFocusQuery &&
      scope &&
      (!activeElement || !scope.containsNode(activeElement))
    ) {
      const lastFocused = regionInfo.lastFocused;
      if (
        lastFocused &&
        scope.containsNode(lastFocused) &&
        lastFocused.offsetWidth !== 0 &&
        lastFocused.offsetHeight !== 0
      ) {
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
  }, [autoFocusQuery, regionInfo]);

  useLayoutEffect(autoFocusHandler, [autoFocusHandler]);
  useEffect(autoFocusHandler, [autoFocusHandler]);

  const onEscapeFocusRegionCallback = useCallback(
    (region, force = false) => {
      const scope = scopeRef.current;
      const activeElement = document.activeElement;
      initialActiveElement.current = null;
      const triggeredFocusRegionItems = region?.triggeredFocusRegionItems;
      const restorationFocusRegionItem = region?.restorationFocusRegionItem;
      triggeredFocusRegionItems?.forEach(
        (item) => (item.restorationFocusRegionItem = restorationFocusRegionItem)
      );
      restorationFocusRegionItem?.triggeredFocusRegionItems.delete(region);
      triggeredFocusRegionItems?.forEach((item) =>
        restorationFocusRegionItem?.triggeredFocusRegionItems.add(item)
      );
      regionInfo.lastFocused = null;
      const currentActiveFocusRegion =
        activeFocusRegionUtilsContext?.getActiveFocusRegion();
      const focusRegionToRestore =
        currentActiveFocusRegion?.restorationFocusRegionItem || {
          lastFocused: initialActiveElement,
        };

      if (currentActiveFocusRegion === region) {
        activeFocusRegionUtilsContext?.setActiveFocusRegion(
          restorationFocusRegionItem
        );
      }
      const isInsideScope =
        scope && activeElement && scope.containsNode(activeElement);
      if (
        (autoRestoreFocus === true || onEscapeFocusRegion != null) &&
        isInsideScope
      ) {
        const restoreFocus = (immediate = false) => {
          const lastFocusedElement = focusRegionToRestore?.lastFocused;
          if (lastFocusedElement) {
            if (
              immediate ||
              !activeElement ||
              activeElement === document.body
            ) {
              FocusManager.focusElement(lastFocusedElement, {
                preventScroll: true,
                focusWithoutUserIntent: true,
              });
            }
          }
        };
        if (force) {
          restoreFocus(true);
        } else {
          window.requestAnimationFrame(() => restoreFocus());
        }
      }
    },
    [
      activeFocusRegionUtilsContext,
      autoRestoreFocus,
      onEscapeFocusRegion,
      regionInfo,
    ]
  );

  const handleEscape = useCallback(() => {
    onEscapeFocusRegionCallback(regionInfo, true);
    if (onEscapeFocusRegion) {
      onEscapeFocusRegion();
    }
  }, [onEscapeFocusRegionCallback, onEscapeFocusRegion, regionInfo]);

  ReactKeyboardEvent.useKeyboard(
    scopeRef,
    useMemo(
      () => ({
        onKeyDown: (event) => {
          if (
            !containFocusQuery ||
            event.key !== "Tab" ||
            event.isDefaultPrevented()
          )
            return;
          const scope = scopeRef.current;
          if (scope) {
            if (event.shiftKey) {
              FocusManager.focusPreviousContained(
                containFocusQuery,
                scope,
                event,
                true,
                onEscapeFocusRegion ? handleEscape : undefined
              );
            } else {
              FocusManager.focusNextContained(
                containFocusQuery,
                scope,
                event,
                true,
                onEscapeFocusRegion ? handleEscape : undefined
              );
            }
          }
        },
      }),
      [containFocusQuery, handleEscape, onEscapeFocusRegion]
    )
  );

  useLayoutEffect(() => {
    initialActiveElement.current = contextActiveElement;
    const currentRegionInfo = regionInfo;
    return () => {
      onEscapeFocusRegionCallback(currentRegionInfo);
    };
  }, [
    activeFocusRegionUtilsContext,
    autoRestoreFocus,
    onEscapeFocusRegionCallback,
    regionInfo,
    contextActiveElement,
  ]);

  return (
    <Scope ref={onFocusWithinStrictMode} id={id}>
      {children}
    </Scope>
  );
};

FocusRegionStrictMode.displayName = `FocusRegionStrictMode [from ${module.id}]`;

export function focusRegionById(
  id: string,
  query: string,
  preventScroll: boolean
) {
  const region = focusRegionMap.get(id);
  if (region) {
    const element = region.DO_NOT_USE_queryFirstNode(query);
    if (element) {
      FocusManager.focusElement(element, { preventScroll });
      return element;
    }
  }
  return null;
}

export { FocusRegionStrictMode };
