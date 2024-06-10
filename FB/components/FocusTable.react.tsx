__d(
  "FocusTable.react",
  [
    "FocusManager",
    "FocusTableUtils",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
    "react",
    "setElementCanTab",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
      k = b.useMemo,
      l = b.useRef,
      m = 5;
    function a(a) {
      var b = i.unstable_Scope,
        c = i.createContext(null),
        e = i.createContext(null),
        g = i.createContext(null);
      function h(e) {
        var f = e.children,
          g = e.wrapX,
          h = e.wrapY,
          j = e.wrapXToNextLine,
          n = e.tabScopeQuery,
          o = e.allowModifiers,
          q = e.pageJumpSize,
          r = q === void 0 ? m : q,
          s = e.onNavigate,
          t = e.disabled,
          u = e.withinCellTabScopeQuery;
        q = e.focusStaticCells;
        var v = q === void 0 ? !1 : q,
          w = l(null);
        e = k(
          function () {
            return {
              scopeRef: w,
              wrapXToNextLine: j,
              wrapX: g,
              wrapY: h,
              tabScopeQuery: n,
              allowModifiers: o,
              pageJumpSize: r,
              onNavigate: s,
              disabled: t,
              withinCellTabScopeQuery: u,
              focusStaticCells: v,
            };
          },
          [j, g, h, n, o, r, s, t, u, v]
        );
        var x = l(!1);
        q = d("ReactFocusEvent.react").useFocusWithin(
          w,
          k(
            function () {
              return {
                onFocusWithin: function (b) {
                  x.current ||
                    ((x.current = !0),
                    w.current &&
                      a &&
                      (p(w.current, a, !1),
                      d("setElementCanTab").setElementCanTab(b.target, !0, v)));
                },
              };
            },
            [x, v]
          )
        );
        return i.jsx(c.Provider, {
          value: e,
          children: i.jsx(b, { ref: q, children: f }),
        });
      }
      h.displayName = h.name + " [from " + f.id + "]";
      function o(a) {
        a = a.children;
        var c = l(null),
          d = k(function () {
            return { scopeRef: c };
          }, []);
        return i.jsx(e.Provider, {
          value: d,
          children: i.jsx(b, { ref: c, children: a }),
        });
      }
      o.displayName = o.name + " [from " + f.id + "]";
      function p(a, b, c) {
        a = a.DO_NOT_USE_queryAllNodes(b);
        if (a != null)
          for (b = 0; b < a.length; b++) {
            var e = a[b];
            d("setElementCanTab").setElementCanTab(e, c);
          }
      }
      function q(f) {
        var h = f.children,
          m = f.colSpan,
          o = f.tag,
          q = j(c),
          r = (f = j(e)) == null ? void 0 : f.scopeRef,
          s = l(null),
          t = l(!1),
          u = (q == null ? void 0 : q.withinCellTabScopeQuery) != null,
          v = q == null ? void 0 : q.focusStaticCells;
        d("ReactKeyboardEvent.react").useKeyboard(
          s,
          k(
            function () {
              return {
                onKeyDown: function (b) {
                  if (q && q.disabled === !0) return;
                  if (
                    d(
                      "focusKeyboardEventPropagation"
                    ).hasFocusKeyboardEventPropagationStopped(b)
                  )
                    return;
                  var c = s.current;
                  if (c === null || q === null) return;
                  if (r == null) return;
                  var f = r.current;
                  if (f === null) return;
                  var h = b.key,
                    i =
                      u &&
                      d("FocusTableUtils").getCellSingleInteractiveContentNode(
                        c,
                        u
                      ) == null,
                    j = t.current;
                  if (h === "Tab" && q) {
                    var k = q.tabScopeQuery,
                      l = q.scopeRef.current;
                    if (k && l) {
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "TAB",
                          q,
                          b,
                          f,
                          c,
                          k,
                          e,
                          g
                        )
                      )
                        return;
                      var m = q.withinCellTabScopeQuery;
                      j && m != null
                        ? b.shiftKey
                          ? d("FocusManager").focusPreviousContained(
                              m,
                              c,
                              b,
                              !0
                            )
                          : d("FocusManager").focusNextContained(m, c, b, !0)
                        : (p(l, k, !1),
                          document.activeElement != null &&
                            d("setElementCanTab").setElementCanTab(
                              document.activeElement,
                              !0,
                              v
                            ));
                    }
                    return;
                  }
                  m = b.ctrlKey || b.metaKey;
                  l = h;
                  d("Locale").isRTL() &&
                    (h === "ArrowRight"
                      ? (l = "ArrowLeft")
                      : h === "ArrowLeft" && (l = "ArrowRight"));
                  switch (l) {
                    case "Home":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "HOME",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      l = k[0];
                      k = k[1];
                      var o = d("FocusTableUtils").getRowsWithIndex(q, f, e),
                        w = o[0];
                      o = o[1];
                      if (l !== null && w !== null)
                        if (m) {
                          if (o !== 0 || k !== 0) {
                            l = w[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              l,
                              0,
                              g,
                              b
                            );
                          }
                        } else if (k !== 0) {
                          l = w[o];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            l,
                            0,
                            g,
                            b
                          );
                        }
                      return;
                    case "End":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "END",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      w = k[0];
                      o = k[1];
                      l = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      k = l[0];
                      l = l[1];
                      if (w !== null && k !== null)
                        if (m) {
                          if (l !== k.length - 1 || o !== w.length - 1) {
                            l = k[k.length - 1];
                            k = l.getChildContextValues(g).filter(Boolean);
                            k.length > 0 &&
                              d("FocusTableUtils").focusCell(
                                a,
                                k[k.length - 1],
                                b
                              );
                          }
                        } else
                          o !== w[w.length - 1] &&
                            d("FocusTableUtils").focusCell(
                              a,
                              w[w.length - 1],
                              b
                            );
                      return;
                    case "ArrowUp":
                      if (n(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PREV_ROW",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      o = l[2];
                      if (k !== null && q) {
                        w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                        l = w[0];
                        k = w[1];
                        if (l !== null)
                          if (k === 0) {
                            w = q.wrapY;
                            if (w === !0 && !m) {
                              w = l[l.length - 1];
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                w,
                                o,
                                g,
                                b
                              );
                            }
                          } else if (m) {
                            w = l[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              w,
                              o,
                              g,
                              b
                            );
                          } else {
                            w = l[k - 1];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              w,
                              o,
                              g,
                              b
                            );
                          }
                      }
                      return;
                    case "PageUp":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PAGE_UP",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      w = l[2];
                      o = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = o[0];
                      o = o[1];
                      if (k !== null && l !== null && q && o !== 0) {
                        k = q.pageJumpSize;
                        l = l[Math.max(0, o - k)];
                        d("FocusTableUtils").focusCellByColumnIndex(
                          a,
                          l,
                          w,
                          g,
                          b
                        );
                      }
                      return;
                    case "ArrowDown":
                      if (n(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "NEXT_ROW",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      o = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = o[0];
                      l = o[2];
                      w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      o = w[0];
                      w = w[1];
                      if (k !== null && o !== null && q && w !== -1)
                        if (w === o.length - 1) {
                          k = q.wrapY;
                          if (k === !0 && !m) {
                            k = o[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              k,
                              l,
                              g,
                              b
                            );
                          }
                        } else if (m) {
                          k = o[o.length - 1];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            k,
                            l,
                            g,
                            b
                          );
                        } else {
                          m = o[w + 1];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            m,
                            l,
                            g,
                            b
                          );
                        }
                      return;
                    case "PageDown":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PAGE_DOWN",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      o = k[0];
                      w = k[2];
                      m = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = m[0];
                      k = m[1];
                      if (o !== null && l !== null && q && k !== l.length - 1) {
                        m = q.pageJumpSize;
                        o = l[Math.min(l.length - 1, k + m)];
                        d("FocusTableUtils").focusCellByColumnIndex(
                          a,
                          o,
                          w,
                          g,
                          b
                        );
                      }
                      return;
                    case "ArrowLeft":
                      if (n(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PREV_CELL",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      m = l[1];
                      o = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      w = o[0];
                      l = o[1];
                      if (k !== null && w !== null && q)
                        if (m > 0)
                          d("FocusTableUtils").focusCell(a, k[m - 1], b);
                        else if (m === 0) {
                          o = q.wrapX;
                          m = q.wrapXToNextLine;
                          o === !0
                            ? d("FocusTableUtils").focusCell(
                                a,
                                k[k.length - 1],
                                b
                              )
                            : m === !0 &&
                              w[l - 1] &&
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                w[l - 1],
                                d("FocusTableUtils").getLength(w[l - 1], g),
                                g,
                                b
                              );
                        }
                      return;
                    case "ArrowRight":
                      if (n(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "NEXT_CELL",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      o = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = o[0];
                      m = o[1];
                      w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = w[0];
                      o = w[1];
                      if (k !== null && l !== null && q && m !== -1)
                        if (m === k.length - 1) {
                          w = q.wrapX;
                          var x = q.wrapXToNextLine;
                          w === !0
                            ? d("FocusTableUtils").focusCell(a, k[0], b)
                            : x === !0 &&
                              l[o + 1] &&
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                l[o + 1],
                                0,
                                g,
                                b
                              );
                        } else d("FocusTableUtils").focusCell(a, k[m + 1], b);
                      return;
                    case "Enter":
                      if (!i || j) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "ENTER",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      w = q == null ? void 0 : q.withinCellTabScopeQuery;
                      if (w) {
                        x = c.DO_NOT_USE_queryFirstNode(w);
                        x != null &&
                          ((t.current = !0),
                          p(c, w, !0),
                          d("FocusManager").focusElement(x));
                      }
                      return;
                    case "Escape":
                      if (!i || !j) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "ESC",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      l = q == null ? void 0 : q.tabScopeQuery;
                      if (l) {
                        t.current = !1;
                        o = c.DO_NOT_USE_queryAllNodes(l);
                        if (o !== null)
                          for (k = 0; k < o.length; k++) {
                            m = o[k];
                            d("setElementCanTab").setElementCanTab(m, !1, v);
                          }
                        d("FocusTableUtils").focusCell(l, { scopeRef: s }, b);
                      }
                      return;
                    default:
                      d("FocusTableUtils").isPrintableCharacter(h) &&
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PRINT_CHAR",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        );
                  }
                },
              };
            },
            [r, q, u]
          )
        );
        var w = k(
            function () {
              return {
                scopeRef: s,
                colSpan: m,
                tag: o,
                allowWithinCellNavigation: u,
                focusStaticCells: v,
              };
            },
            [m, u, o, v]
          ),
          x = q == null ? void 0 : q.tabScopeQuery;
        f = d("ReactFocusEvent.react").useFocusWithin(
          s,
          k(
            function () {
              return {
                onFocusWithin: function (b) {
                  if (a != null) {
                    var c;
                    c =
                      (c = s.current) == null
                        ? void 0
                        : c.DO_NOT_USE_queryFirstNode(a);
                    var e = b.target === c;
                    if (e && c && !d("setElementCanTab").canElementTab(c)) {
                      e = q == null ? void 0 : q.scopeRef.current;
                      e && p(e, a, !1);
                      d("setElementCanTab").setElementCanTab(c, !0, v);
                    }
                  }
                  if (x != null) {
                    c =
                      (e = s.current) == null
                        ? void 0
                        : e.DO_NOT_USE_queryFirstNode(x);
                    e = b.target === c;
                    var f = w.allowWithinCellNavigation === !0;
                    e && f && d("FocusTableUtils").focusCell(x, w);
                    c != null &&
                      !e &&
                      f &&
                      b.target instanceof HTMLElement &&
                      !d("FocusTableUtils").isArrowKeyLessOperationElement(
                        b.target
                      ) &&
                      (t.current = !0);
                  }
                },
                onBlurWithin: function () {
                  t.current = !1;
                },
              };
            },
            [x, w, q == null ? void 0 : q.scopeRef]
          )
        );
        return i.jsx(g.Provider, {
          value: w,
          children: i.jsx(b, { ref: f, children: h }),
        });
      }
      q.displayName = q.name + " [from " + f.id + "]";
      return [h, o, q];
    }
    function n(a, b) {
      if (d("FocusTableUtils").hasModifierKey(a) && b) {
        a = b.allowModifiers;
        if (a !== !0) return !0;
      }
    }
    g.createFocusTable = a;
  },
  98
);
import { FocusManager } from "FocusManager";
import { FocusTableUtils } from "FocusTableUtils";
import { Locale } from "Locale";
import { useFocusWithin as useReactFocusEvent } from "ReactFocusEvent.react";
import { useKeyboard as useReactKeyboardEvent } from "ReactKeyboardEvent.react";
import { focusKeyboardEventPropagation } from "focusKeyboardEventPropagation";
import React, {
  createElement,
  createContext,
  useContext,
  useMemo,
  useRef,
  unstable_Scope,
  JSX,
  ReactNode,
} from "react";
import { setElementCanTab } from "setElementCanTab";

const PAGE_JUMP_SIZE = 5;

interface FocusTableContextProps {
  scopeRef: React.RefObject<any>;
  wrapXToNextLine?: boolean;
  wrapX?: boolean;
  wrapY?: boolean;
  tabScopeQuery?: string;
  allowModifiers?: boolean;
  pageJumpSize: number;
  onNavigate?: () => void;
  disabled?: boolean;
  withinCellTabScopeQuery?: string;
  focusStaticCells?: boolean;
}

interface RowContextProps {
  scopeRef: React.RefObject<any>;
}

interface CellContextProps {
  scopeRef: React.RefObject<any>;
  colSpan?: number;
  tag?: string;
  allowWithinCellNavigation?: boolean;
  focusStaticCells?: boolean;
}

interface TableProviderProps {
  children: ReactNode;
  wrapX?: boolean;
  wrapY?: boolean;
  wrapXToNextLine?: boolean;
  tabScopeQuery?: string;
  allowModifiers?: boolean;
  pageJumpSize?: number;
  onNavigate?: () => void;
  disabled?: boolean;
  withinCellTabScopeQuery?: string;
  focusStaticCells?: boolean;
}

interface RowProviderProps {
  children: ReactNode;
}

interface CellProviderProps {
  children: ReactNode;
  colSpan?: number;
  tag?: string;
}

const FocusTableContext = createContext<FocusTableContextProps | null>(null);
const RowContext = createContext<RowContextProps | null>(null);
const CellContext = createContext<CellContextProps | null>(null);

function isModifierEvent(event: any, context: any) {
  if (FocusTableUtils.hasModifierKey(event) && context) {
    return context.allowModifiers !== true;
  }
  return false;
}

export const createFocusTable = (query) => {
  const FocusTableProvider: React.FC<TableProviderProps> = ({
    children,
    wrapX,
    wrapY,
    wrapXToNextLine,
    tabScopeQuery,
    allowModifiers,
    pageJumpSize = PAGE_JUMP_SIZE,
    onNavigate,
    disabled,
    withinCellTabScopeQuery,
    focusStaticCells = false,
  }) => {
    const scopeRef = useRef(null);
    const contextValue = useMemo(
      () => ({
        scopeRef,
        wrapXToNextLine,
        wrapX,
        wrapY,
        tabScopeQuery,
        allowModifiers,
        pageJumpSize,
        onNavigate,
        disabled,
        withinCellTabScopeQuery,
        focusStaticCells,
      }),
      [
        wrapXToNextLine,
        wrapX,
        wrapY,
        tabScopeQuery,
        allowModifiers,
        pageJumpSize,
        onNavigate,
        disabled,
        withinCellTabScopeQuery,
        focusStaticCells,
      ]
    );

    const hasFocus = useRef(false);
    const focusWithin = useReactFocusEvent(scopeRef, {
      onFocusWithin: (event) => {
        if (!hasFocus.current) {
          hasFocus.current = true;
          if (scopeRef.current && query) {
            setTabbable(scopeRef.current, query, false);
            setElementCanTab(event.target, true, focusStaticCells);
          }
        }
      },
    });

    return createElement(
      FocusTableContext.Provider,
      { value: contextValue },
      createElement(unstable_Scope, { ref: focusWithin, children })
    );
  };

  FocusTableProvider.displayName = `FocusTableProvider [from Meta]`;

  const RowProvider: React.FC<RowProviderProps> = ({ children }) => {
    const scopeRef = useRef(null);
    const contextValue = useMemo(() => ({ scopeRef }), []);

    return createElement(
      RowContext.Provider,
      { value: contextValue },
      createElement(unstable_Scope, { ref: scopeRef, children })
    );
  };

  RowProvider.displayName = `RowProvider [from Meta]`;

  const setTabbable = (scope: any, query: string, canTab: boolean) => {
    const nodes = scope.DO_NOT_USE_queryAllNodes(query);
    if (nodes) {
      nodes.forEach((node: any) => {
        setElementCanTab(node, canTab);
      });
    }
  };

  const CellProvider: React.FC<CellProviderProps> = ({
    children,
    colSpan,
    tag,
  }) => {
    const { withinCellTabScopeQuery, focusStaticCells } =
      useContext(FocusTableContext) || {};
    const rowContext = useContext(RowContext);
    const scopeRef = useRef(null);
    const isInNavigation = useRef(false);

    useReactKeyboardEvent(scopeRef, {
      onKeyDown: (event) => {
        const tableContext = useContext(FocusTableContext);
        if (!tableContext || tableContext.disabled) return;
        if (
          focusKeyboardEventPropagation.hasFocusKeyboardEventPropagationStopped(
            event
          )
        )
          return;

        const currentScope = scopeRef.current;
        if (!currentScope || !rowContext) return;

        const rowScope = rowContext.scopeRef.current;
        if (!rowScope) return;

        const { key, ctrlKey, metaKey } = event;
        const isInScope =
          withinCellTabScopeQuery &&
          FocusTableUtils.getCellSingleInteractiveContentNode(
            currentScope,
            withinCellTabScopeQuery
          ) === null;
        const isNavigationActive = isInNavigation.current;
        const isModifierKey = ctrlKey || metaKey;

        if (key === "Tab" && tableContext) {
          const { tabScopeQuery, scopeRef } = tableContext;
          if (tabScopeQuery && scopeRef.current) {
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "TAB",
                tableContext,
                event,
                rowScope,
                currentScope,
                tabScopeQuery,
                RowContext,
                CellContext
              )
            )
              return;

            const withinCellScopeQuery = tableContext.withinCellTabScopeQuery;
            if (isNavigationActive && withinCellScopeQuery) {
              event.shiftKey
                ? FocusManager.focusPreviousContained(
                    withinCellScopeQuery,
                    currentScope,
                    event,
                    true
                  )
                : FocusManager.focusNextContained(
                    withinCellScopeQuery,
                    currentScope,
                    event,
                    true
                  );
            } else {
              setTabbable(scopeRef.current, tabScopeQuery, false);
              if (document.activeElement) {
                setElementCanTab(
                  document.activeElement,
                  true,
                  focusStaticCells
                );
              }
            }
          }
          return;
        }

        let navigateKey = key;
        if (Locale.isRTL()) {
          if (key === "ArrowRight") navigateKey = "ArrowLeft";
          else if (key === "ArrowLeft") navigateKey = "ArrowRight";
        }

        switch (navigateKey) {
          case "Home":
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "HOME",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [firstRowCells, firstRowIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [allRows, firstRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (firstRowCells && allRows) {
              if (isModifierKey) {
                if (firstRowIndexInScope !== 0 || firstRowIndex !== 0) {
                  const firstRow = allRows[0];
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    firstRow,
                    0,
                    CellContext,
                    event
                  );
                }
              } else if (firstRowIndex !== 0) {
                const currentRow = allRows[firstRowIndexInScope];
                FocusTableUtils.focusCellByColumnIndex(
                  FocusTableProvider,
                  currentRow,
                  0,
                  CellContext,
                  event
                );
              }
            }
            return;
          case "End":
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "END",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [lastRowCells, lastRowIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [allLastRows, lastRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (lastRowCells && allLastRows) {
              if (isModifierKey) {
                if (
                  lastRowIndexInScope !== allLastRows.length - 1 ||
                  lastRowIndex !== lastRowCells.length - 1
                ) {
                  const lastRow = allLastRows[allLastRows.length - 1];
                  const cellContextValues = lastRow
                    .getChildContextValues(CellContext)
                    .filter(Boolean);
                  if (cellContextValues.length > 0) {
                    FocusTableUtils.focusCell(
                      FocusTableProvider,
                      cellContextValues[cellContextValues.length - 1],
                      event
                    );
                  }
                }
              } else if (lastRowIndex !== lastRowCells.length - 1) {
                FocusTableUtils.focusCell(
                  FocusTableProvider,
                  lastRowCells[lastRowCells.length - 1],
                  event
                );
              }
            }
            return;
          case "ArrowUp":
            if (isModifierEvent(event, tableContext)) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "PREV_ROW",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [upRowCells, , upCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            if (upRowCells && tableContext) {
              const [upRows, upRowIndexInScope] =
                FocusTableUtils.getRowsWithIndex(
                  tableContext,
                  rowScope,
                  RowContext
                );
              if (upRows) {
                if (upRowIndexInScope === 0) {
                  const wrapY = tableContext.wrapY;
                  if (wrapY && !isModifierKey) {
                    const lastUpRow = upRows[upRows.length - 1];
                    FocusTableUtils.focusCellByColumnIndex(
                      FocusTableProvider,
                      lastUpRow,
                      upCellIndex,
                      CellContext,
                      event
                    );
                  }
                } else if (isModifierKey) {
                  const firstUpRow = upRows[0];
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    firstUpRow,
                    upCellIndex,
                    CellContext,
                    event
                  );
                } else {
                  const previousUpRow = upRows[upRowIndexInScope - 1];
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    previousUpRow,
                    upCellIndex,
                    CellContext,
                    event
                  );
                }
              }
            }
            return;
          case "PageUp":
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "PAGE_UP",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [pageUpRowCells, , pageUpCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [pageUpRows, pageUpRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (
              pageUpRowCells &&
              pageUpRows &&
              tableContext &&
              pageUpRowIndexInScope !== 0
            ) {
              const jumpSize = tableContext.pageJumpSize;
              const jumpToRow =
                pageUpRows[Math.max(0, pageUpRowIndexInScope - jumpSize)];
              FocusTableUtils.focusCellByColumnIndex(
                FocusTableProvider,
                jumpToRow,
                pageUpCellIndex,
                CellContext,
                event
              );
            }
            return;
          case "ArrowDown":
            if (isModifierEvent(event, tableContext)) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "NEXT_ROW",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [downRowCells, , downCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [downRows, downRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (
              downRowCells &&
              downRows &&
              tableContext &&
              downRowIndexInScope !== -1
            ) {
              if (downRowIndexInScope === downRows.length - 1) {
                const wrapY = tableContext.wrapY;
                if (wrapY && !isModifierKey) {
                  const firstDownRow = downRows[0];
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    firstDownRow,
                    downCellIndex,
                    CellContext,
                    event
                  );
                }
              } else if (isModifierKey) {
                const lastDownRow = downRows[downRows.length - 1];
                FocusTableUtils.focusCellByColumnIndex(
                  FocusTableProvider,
                  lastDownRow,
                  downCellIndex,
                  CellContext,
                  event
                );
              } else {
                const nextDownRow = downRows[downRowIndexInScope + 1];
                FocusTableUtils.focusCellByColumnIndex(
                  FocusTableProvider,
                  nextDownRow,
                  downCellIndex,
                  CellContext,
                  event
                );
              }
            }
            return;
          case "PageDown":
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "PAGE_DOWN",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [pageDownRowCells, , pageDownCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [pageDownRows, pageDownRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (
              pageDownRowCells &&
              pageDownRows &&
              tableContext &&
              pageDownRowIndexInScope !== pageDownRows.length - 1
            ) {
              const jumpSize = tableContext.pageJumpSize;
              const jumpToRow =
                pageDownRows[
                  Math.min(
                    pageDownRows.length - 1,
                    pageDownRowIndexInScope + jumpSize
                  )
                ];
              FocusTableUtils.focusCellByColumnIndex(
                FocusTableProvider,
                jumpToRow,
                pageDownCellIndex,
                CellContext,
                event
              );
            }
            return;
          case "ArrowLeft":
            if (isModifierEvent(event, tableContext)) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "PREV_CELL",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [leftRowCells, leftCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [leftRows, leftRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (leftRowCells && leftRows && tableContext) {
              if (leftCellIndex > 0) {
                FocusTableUtils.focusCell(
                  FocusTableProvider,
                  leftRowCells[leftCellIndex - 1],
                  event
                );
              } else if (leftCellIndex === 0) {
                const wrapX = tableContext.wrapX;
                const wrapXToNextLine = tableContext.wrapXToNextLine;
                if (wrapX) {
                  FocusTableUtils.focusCell(
                    FocusTableProvider,
                    leftRowCells[leftRowCells.length - 1],
                    event
                  );
                } else if (
                  wrapXToNextLine &&
                  leftRows[leftRowIndexInScope - 1]
                ) {
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    leftRows[leftRowIndexInScope - 1],
                    FocusTableUtils.getLength(
                      leftRows[leftRowIndexInScope - 1],
                      CellContext
                    ),
                    CellContext,
                    event
                  );
                }
              }
            }
            return;
          case "ArrowRight":
            if (isModifierEvent(event, tableContext)) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "NEXT_CELL",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            if (isNavigationActive) return;
            const [rightRowCells, rightCellIndex] =
              FocusTableUtils.getRowCellsWithIndexes(
                currentScope,
                rowScope,
                CellContext
              );
            const [rightRows, rightRowIndexInScope] =
              FocusTableUtils.getRowsWithIndex(
                tableContext,
                rowScope,
                RowContext
              );
            if (
              rightRowCells &&
              rightRows &&
              tableContext &&
              rightCellIndex !== -1
            ) {
              if (rightCellIndex === rightRowCells.length - 1) {
                const wrapX = tableContext.wrapX;
                const wrapXToNextLine = tableContext.wrapXToNextLine;
                if (wrapX) {
                  FocusTableUtils.focusCell(
                    FocusTableProvider,
                    rightRowCells[0],
                    event
                  );
                } else if (
                  wrapXToNextLine &&
                  rightRows[rightRowIndexInScope + 1]
                ) {
                  FocusTableUtils.focusCellByColumnIndex(
                    FocusTableProvider,
                    rightRows[rightRowIndexInScope + 1],
                    0,
                    CellContext,
                    event
                  );
                }
              } else {
                FocusTableUtils.focusCell(
                  FocusTableProvider,
                  rightRowCells[rightCellIndex + 1],
                  event
                );
              }
            }
            return;
          case "Enter":
            if (!isInScope || isNavigationActive) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "ENTER",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            const withinCellScope = tableContext?.withinCellTabScopeQuery;
            if (withinCellScope) {
              const focusNode =
                currentScope.DO_NOT_USE_queryFirstNode(withinCellScope);
              if (focusNode) {
                isInNavigation.current = true;
                setTabbable(currentScope, withinCellScope, true);
                FocusManager.focusElement(focusNode);
              }
            }
            return;
          case "Escape":
            if (!isInScope || !isNavigationActive) return;
            if (
              FocusTableUtils.handleOnNavigateBehavior(
                "ESC",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              )
            )
              return;
            const tabScope = tableContext?.tabScopeQuery;
            if (tabScope) {
              isInNavigation.current = false;
              const nodes = currentScope.DO_NOT_USE_queryAllNodes(tabScope);
              if (nodes) {
                nodes.forEach((node: any) => {
                  setElementCanTab(node, false, focusStaticCells);
                });
              }
              FocusTableUtils.focusCell(tabScope, { scopeRef }, event);
            }
            return;
          default:
            if (FocusTableUtils.isPrintableCharacter(key)) {
              FocusTableUtils.handleOnNavigateBehavior(
                "PRINT_CHAR",
                tableContext,
                event,
                rowScope,
                currentScope,
                FocusTableProvider,
                RowContext,
                CellContext
              );
            }
        }
      },
    });

    const cellContextValue = useMemo(
      () => ({
        scopeRef,
        colSpan,
        tag,
        allowWithinCellNavigation: withinCellTabScopeQuery !== undefined,
        focusStaticCells,
      }),
      [colSpan, withinCellTabScopeQuery, tag, focusStaticCells]
    );

    const tabScopeQuery = useContext(FocusTableContext)?.tabScopeQuery;
    const focusWithin = useReactFocusEvent(scopeRef, {
      onFocusWithin: (event) => {
        if (tabScopeQuery) {
          const firstNode =
            scopeRef.current?.DO_NOT_USE_queryFirstNode(tabScopeQuery);
          const isTargetFirstNode = event.target === firstNode;
          if (
            isTargetFirstNode &&
            firstNode &&
            !setElementCanTab.canElementTab(firstNode)
          ) {
            const scope = useContext(FocusTableContext)?.scopeRef.current;
            if (scope) setTabbable(scope, tabScopeQuery, false);
            setElementCanTab(firstNode, true, focusStaticCells);
          }
        }
        if (withinCellTabScopeQuery) {
          const firstNode = scopeRef.current?.DO_NOT_USE_queryFirstNode(
            withinCellTabScopeQuery
          );
          const isTargetFirstNode = event.target === firstNode;
          const allowWithinCellNavigation =
            cellContextValue.allowWithinCellNavigation === true;
          if (isTargetFirstNode && allowWithinCellNavigation) {
            FocusTableUtils.focusCell(
              withinCellTabScopeQuery,
              cellContextValue
            );
          }
          if (
            firstNode &&
            !isTargetFirstNode &&
            allowWithinCellNavigation &&
            event.target instanceof HTMLElement &&
            !FocusTableUtils.isArrowKeyLessOperationElement(event.target)
          ) {
            isInNavigation.current = true;
          }
        }
      },
      onBlurWithin: () => {
        isInNavigation.current = false;
      },
    });

    return createElement(
      CellContext.Provider,
      { value: cellContextValue },
      createElement(unstable_Scope, { ref: focusWithin, children })
    );
  };

  CellProvider.displayName = `CellProvider [from Meta]`;

  return [FocusTableProvider, RowProvider, CellProvider];
};
