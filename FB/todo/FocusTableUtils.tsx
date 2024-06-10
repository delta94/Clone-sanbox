__d(
  "FocusTableUtils",
  [
    "FocusManager",
    "filterNulls",
    "focusKeyboardEventPropagation",
    "focusScopeQueries",
    "setElementCanTab",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return a.length === 1;
    }
    function h(a) {
      return a instanceof HTMLElement || a instanceof SVGElement;
    }
    function i(a, b) {
      var d,
        e = b instanceof HTMLElement && b.id !== "" ? b.id : null,
        f = new Set(
          b instanceof HTMLElement
            ? c("filterNulls")(
                [].concat(
                  ((d = b.getAttribute("aria-labelledby")) != null
                    ? d
                    : ""
                  ).split(" "),
                  ((d = b.getAttribute("aria-describedby")) != null
                    ? d
                    : ""
                  ).split(" "),
                  ((d = b.getAttribute("aria-owns")) != null ? d : "").split(
                    " "
                  ),
                  [b.getAttribute("aria-errormessage")]
                )
              ).filter(function (a) {
                return a !== "";
              })
            : []
        );
      d = document.createTreeWalker(
        a,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (a) {
            if (a === b) return NodeFilter.FILTER_REJECT;
            if (a.nodeType === Node.TEXT_NODE && a.textContent.trim() === "")
              return NodeFilter.FILTER_REJECT;
            if (h(a) && f.has(a.id)) return NodeFilter.FILTER_REJECT;
            if (h(a) && a.getAttribute("aria-hidden") === "true")
              return NodeFilter.FILTER_REJECT;
            if (
              a instanceof HTMLLabelElement &&
              (a.htmlFor === e || a.contains(b))
            )
              return NodeFilter.FILTER_REJECT;
            if (a.hasChildNodes()) return NodeFilter.FILTER_SKIP;
            return h(a) &&
              a.getAttribute("aria-label") == null &&
              a.getAttribute("aria-labelledby") == null &&
              a.getAttribute("aria-describedby") == null &&
              a.getAttribute("alt") == null &&
              a.getAttribute("title") == null
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      var g = d.currentNode;
      while (g === a) g = d.nextNode();
      return g != null;
    }
    var j = new Set(["button", "checkbox", "radio", "reset", "submit"]),
      k = new Set(["checkbox", "link", "switch", "radio", "button"]),
      l = new Set(["a", "button"]);
    function m(a) {
      var b = a.getAttribute("role"),
        c = a.tagName.toLowerCase(),
        d = a instanceof HTMLInputElement ? a.type : null;
      if (a instanceof HTMLInputElement && j.has(d)) return !0;
      return k.has(b) || l.has(c) ? !0 : !1;
    }
    function n(a) {
      var b = [];
      a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode: function (a) {
          return a instanceof HTMLElement && m(a)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
      var c = a.nextNode();
      while (c) b.push(c), (c = a.nextNode());
      return b;
    }
    function o(a, b) {
      if (!b) return null;
      b = a.DO_NOT_USE_queryFirstNode(
        d("focusScopeQueries").tableCellScopeQuery
      );
      if (b == null) return null;
      a = n(b);
      a = (a = a) != null ? a : [];
      var c = a[0];
      a = a.slice(1);
      if (c != null && a.length === 0 && !i(b, c)) return c;
    }
    function p(a, b, c) {
      if (b) {
        var e = b.scopeRef.current;
        if (e !== null) {
          var f;
          f = o(e, (f = b.allowWithinCellNavigation) != null ? f : !1);
          a =
            (f = (f = f) != null ? f : e.DO_NOT_USE_queryFirstNode(a)) != null
              ? f
              : b.focusStaticCells === !0
              ? e.DO_NOT_USE_queryFirstNode(
                  d("focusScopeQueries").tableCellScopeQuery
                )
              : null;
          a !== null &&
            (document.activeElement != null &&
              d("setElementCanTab").setElementCanTab(
                document.activeElement,
                !1,
                b.focusStaticCells
              ),
            d("setElementCanTab").setElementCanTab(a, !0, b.focusStaticCells),
            d("FocusManager").focusElement(a),
            c != null &&
              (c.preventDefault(),
              d(
                "focusKeyboardEventPropagation"
              ).stopFocusKeyboardEventPropagation(c)));
        }
      }
    }
    function b(a, b, c) {
      if (b != null) {
        b = b.DO_NOT_USE_queryFirstNode(a);
        b !== null &&
          (d("setElementCanTab").setElementCanTab(b, !0),
          d("FocusManager").focusElement(b),
          c.preventDefault(),
          d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(
            c
          ));
      }
    }
    function q(a, b, c, d, e) {
      d = d[c];
      c = s(d, e);
      var f = 0,
        g,
        h,
        i;
      do {
        g = b - f;
        if (g >= 0) {
          i = r(d, g, e, a);
          if (i) return i;
        }
        h = b + f;
        if (h <= c) {
          i = r(d, h, e, a);
          if (i) return i;
        }
        f++;
      } while (g >= 0 && h <= c);
      return null;
    }
    function e(a, b, c, d, e, f, g, h) {
      var i = b.onNavigate;
      if (i) {
        var j = !1;
        e = v(e, d, h);
        var k = e[1];
        e = x(b, d, g);
        var l = e[0],
          m = e[1];
        if (l === null) return !1;
        b = {
          currentCellIndex: k,
          currentRowIndex: m,
          event: c,
          focusCell: function (a, b) {
            p(b || f, a, c);
          },
          getCell: function (a, b) {
            a = l[a];
            return a != null ? r(a, b, h) : null;
          },
          getCellByTag: function (a) {
            var b = q(a, k, m, l, h);
            if (b) return b;
            var c = l.length,
              d = m + 1;
            while (!0) {
              if (d === m) return null;
              if (d > c - 1) {
                d = 0;
                continue;
              }
              b = q(a, k, d, l, h);
              if (b) return b;
              d++;
            }
            return null;
          },
          preventDefault: function () {
            j = !0;
          },
          type: a,
        };
        i(b);
        if (j) return !0;
      }
      return !1;
    }
    function r(a, b, c, d) {
      a = a.getChildContextValues(c).filter(function (a) {
        return a != null && (d === void 0 || a.tag === d);
      });
      c = 0;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (f) {
          c += (f && f.colSpan) || 1;
          if (c > b) return f;
        }
      }
      return null;
    }
    function f(a, b, c, d, e) {
      c = r(b, c, d);
      if (c !== null) {
        p(a, c, e);
        return;
      }
      c = b.getChildContextValues(d).filter(Boolean);
      c.length > 0 && p(a, c[c.length - 1], e);
    }
    function s(a, b) {
      b = (a = a.getChildContextValues(b).filter(Boolean)) != null ? a : [];
      a = 0;
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d = d && ((d = d.colSpan) != null ? d : 1);
        a += d;
      }
      return a;
    }
    function t(a, b) {
      var c = 0;
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (e === null) continue;
        if (e.scopeRef.current === b) return [d, d + c];
        e = e.colSpan;
        typeof e === "number" && (c += e - 1);
      }
      return [-1, -1];
    }
    function u(a, b) {
      return a.getChildContextValues(b).filter(Boolean);
    }
    function v(a, b, c) {
      b = u(b, c);
      if (b.length > 0) {
        c = t(b, a);
        a = c[0];
        c = c[1];
        return [b, a, c];
      }
      return [null, -1, -1];
    }
    function w(a, b, c) {
      if (a) {
        a = a.scopeRef.current;
        if (a !== null) {
          a = a.getChildContextValues(b);
          b = [];
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e) {
              var f;
              f = (f = e.scopeRef) == null ? void 0 : f.current;
              e = (e = c == null ? void 0 : c(e)) != null ? e : !0;
              f && e && b.push(f);
            }
          }
          return b;
        }
      }
      return null;
    }
    function x(a, b, c, d) {
      a = w(a, c, d);
      if (b && a && a.length > 0) {
        c = a.indexOf(b);
        return [a, c];
      }
      return [null, -1];
    }
    function y(a) {
      var b = a.altKey,
        c = a.ctrlKey,
        d = a.metaKey;
      a = a.shiftKey;
      return b === !0 || c === !0 || d === !0 || a === !0;
    }
    g.isPrintableCharacter = a;
    g.hasUnassociatedLeafNodes = i;
    g.isArrowKeyLessOperationElement = m;
    g.getCellSingleInteractiveContentNode = o;
    g.focusCell = p;
    g.focusRow = b;
    g.checkRowForMatch = q;
    g.handleOnNavigateBehavior = e;
    g.getCellByColumnIndex = r;
    g.focusCellByColumnIndex = f;
    g.getLength = s;
    g.getCellIndexes = t;
    g.getRowCells = u;
    g.getRowCellsWithIndexes = v;
    g.getRows = w;
    g.getRowsWithIndex = x;
    g.hasModifierKey = y;
  },
  98
);

import FocusManager from "FocusManager";
import filterNulls from "filterNulls";
import focusKeyboardEventPropagation from "focusKeyboardEventPropagation";
import focusScopeQueries from "focusScopeQueries";
import setElementCanTab from "setElementCanTab";

type RoleType =
  | "checkbox"
  | "link"
  | "switch"
  | "radio"
  | "button"
  | "menuitem"
  | "option"
  | "tab"
  | "treeitem"
  | "menu"
  | "menubar"
  | "toolbar"
  | "navigation"
  | "dialog"
  | "alertdialog"
  | "alert"
  | "log"
  | "marquee"
  | "status"
  | "timer"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem";

function isPrintableCharacter(input: string): boolean {
  return input.length === 1;
}

function isHtmlOrSvgElement(element: any): element is HTMLElement | SVGElement {
  return element instanceof HTMLElement || element instanceof SVGElement;
}

function hasUnassociatedLeafNodes(
  root: Node,
  element: HTMLElement | SVGElement
): boolean {
  const elementId =
    element instanceof HTMLElement && element.id !== "" ? element.id : null;

  const referencedIds = new Set(
    element instanceof HTMLElement
      ? filterNulls(
          [
            ...(element.getAttribute("aria-labelledby") || "").split(" "),
            ...(element.getAttribute("aria-describedby") || "").split(" "),
            ...(element.getAttribute("aria-owns") || "").split(" "),
            element.getAttribute("aria-errormessage"),
          ].filter((ref) => ref !== "")
        )
      : []
  );

  const treeWalker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node: Node) => {
        if (node === element) return NodeFilter.FILTER_REJECT;
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === "")
          return NodeFilter.FILTER_REJECT;
        if (isHtmlOrSvgElement(node) && referencedIds.has(node.id))
          return NodeFilter.FILTER_REJECT;
        if (
          isHtmlOrSvgElement(node) &&
          node.getAttribute("aria-hidden") === "true"
        )
          return NodeFilter.FILTER_REJECT;
        if (
          node instanceof HTMLLabelElement &&
          (node.htmlFor === elementId || node.contains(element))
        )
          return NodeFilter.FILTER_REJECT;
        if (node.hasChildNodes()) return NodeFilter.FILTER_SKIP;
        return isHtmlOrSvgElement(node) &&
          !node.getAttribute("aria-label") &&
          !node.getAttribute("aria-labelledby") &&
          !node.getAttribute("aria-describedby") &&
          !node.getAttribute("alt") &&
          !node.getAttribute("title")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let currentNode: Node | null = treeWalker.currentNode;
  while (currentNode === root) currentNode = treeWalker.nextNode();

  return currentNode != null;
}

const interactiveInputTypes = new Set([
  "button",
  "checkbox",
  "radio",
  "reset",
  "submit",
]);

const interactiveRoles = new Set([
  "checkbox",
  "link",
  "switch",
  "radio",
  "button",
]);
const interactiveTags = new Set(["a", "button"]);

function isArrowKeyLessOperationElement(element: HTMLElement): boolean {
  const role = element.getAttribute("role") as RoleType;
  const tagName = element.tagName.toLowerCase();
  const inputType = element instanceof HTMLInputElement ? element.type : null;
  if (
    inputType &&
    element instanceof HTMLInputElement &&
    interactiveInputTypes.has(inputType)
  )
    return true;
  return interactiveRoles.has(role) || interactiveTags.has(tagName);
}

function getInteractiveElements(root: Node): HTMLElement[] {
  const interactiveElements: HTMLElement[] = [];
  const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node: Node) =>
      node instanceof HTMLElement && isArrowKeyLessOperationElement(node)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
  });

  let currentNode = treeWalker.nextNode();
  while (currentNode) {
    interactiveElements.push(currentNode as HTMLElement);
    currentNode = treeWalker.nextNode();
  }

  return interactiveElements;
}

function getCellSingleInteractiveContentNode(
  scope: any,
  allowWithinCellNavigation: boolean
): HTMLElement | null {
  if (!allowWithinCellNavigation) return null;

  const cellNode = scope.DO_NOT_USE_queryFirstNode(
    focusScopeQueries.tableCellScopeQuery
  );
  if (!cellNode) return null;

  const interactiveElements = getInteractiveElements(cellNode) || [];
  const firstInteractiveElement = interactiveElements[0];
  const remainingInteractiveElements = interactiveElements.slice(1);

  if (
    firstInteractiveElement &&
    remainingInteractiveElements.length === 0 &&
    !hasUnassociatedLeafNodes(cellNode, firstInteractiveElement)
  ) {
    return firstInteractiveElement;
  }
  return null;
}

function focusCell(focusScope: any, cell: any, event: Event | null): void {
  if (cell) {
    const scopeElement = cell.scopeRef.current;
    if (scopeElement !== null) {
      let interactiveElement;
      interactiveElement = getCellSingleInteractiveContentNode(
        scopeElement,
        cell.allowWithinCellNavigation ?? false
      );
      interactiveElement =
        interactiveElement ??
        scopeElement.DO_NOT_USE_queryFirstNode(focusScope);

      if (cell.focusStaticCells === true) {
        interactiveElement =
          interactiveElement ??
          scopeElement.DO_NOT_USE_queryFirstNode(
            focusScopeQueries.tableCellScopeQuery
          );
      }

      if (interactiveElement !== null) {
        if (document.activeElement != null) {
          setElementCanTab.setElementCanTab(
            document.activeElement as HTMLElement,
            false,
            cell.focusStaticCells
          );
        }
        setElementCanTab.setElementCanTab(
          interactiveElement,
          true,
          cell.focusStaticCells
        );
        FocusManager.focusElement(interactiveElement);
        if (event) {
          event.preventDefault();
          focusKeyboardEventPropagation.stopFocusKeyboardEventPropagation(
            event
          );
        }
      }
    }
  }
}

function focusRow(focusScope: any, row: any, event: Event): void {
  if (row != null) {
    const firstElement = row.DO_NOT_USE_queryFirstNode(focusScope);
    if (firstElement !== null) {
      setElementCanTab.setElementCanTab(firstElement, true);
      FocusManager.focusElement(firstElement);
      event.preventDefault();
      focusKeyboardEventPropagation.stopFocusKeyboardEventPropagation(event);
    }
  }
}

function checkRowForMatch(
  cell: any,
  currentColumnIndex: number,
  rowIndex: number,
  rows: any,
  tag: any
): any | null {
  const currentRow = rows[rowIndex];
  const maxColumns = getLength(currentRow, tag);
  let offset = 0;
  let match: any | null = null;
  const columnBefore = currentColumnIndex - offset;
  const columnAfter = currentColumnIndex + offset;

  do {
    if (columnBefore >= 0) {
      match = getCellByColumnIndex(currentRow, columnBefore, tag, cell);
      if (match) return match;
    }

    if (columnAfter <= maxColumns) {
      match = getCellByColumnIndex(currentRow, columnAfter, tag, cell);
      if (match) return match;
    }

    offset++;
  } while (columnBefore >= 0 && columnAfter <= maxColumns);

  return null;
}

function handleOnNavigateBehavior(
  type: string,
  table: any,
  event: KeyboardEvent,
  rows: any,
  currentScope: any,
  focusScope: any,
  currentRowIndex: number,
  tag: string
): boolean {
  const onNavigate = table.onNavigate;
  if (onNavigate) {
    let preventDefault = false;

    const [_, currentColumnIndex] = getRowCellsWithIndexes(
      currentScope,
      rows,
      tag
    );
    const [allRows, currentRowPosition] = getRowsWithIndex(
      table,
      rows,
      currentRowIndex
    );

    if (allRows === null) return false;

    const navigateEvent = {
      currentCellIndex: currentColumnIndex,
      currentRowIndex: currentRowPosition,
      event: event,
      focusCell: (cell: any, scope?: any) => {
        focusCell(scope ?? focusScope, cell, event);
      },
      getCell: (rowIndex: number, columnIndex: number) => {
        const row = allRows[rowIndex];
        return row != null ? getCellByColumnIndex(row, columnIndex, tag) : null;
      },
      getCellByTag: (cellTag: any) => {
        let cell = checkRowForMatch(
          cellTag,
          currentColumnIndex,
          currentRowPosition,
          allRows,
          tag
        );
        if (cell) return cell;

        const rowCount = allRows.length;
        let nextRowIndex = currentRowPosition + 1;

        while (true) {
          if (nextRowIndex === currentRowPosition) return null;
          if (nextRowIndex > rowCount - 1) {
            nextRowIndex = 0;
            continue;
          }
          cell = checkRowForMatch(
            cellTag,
            currentColumnIndex,
            nextRowIndex,
            allRows,
            tag
          );
          if (cell) return cell;
          nextRowIndex++;
        }
      },
      preventDefault: () => {
        preventDefault = true;
      },
      type: type,
    };

    onNavigate(navigateEvent);
    if (preventDefault) return true;
  }

  return false;
}

function getCellByColumnIndex(
  row: any,
  columnIndex: number,
  tag?: string,
  context?: any
): any | null {
  const cellCandidates = row
    .getChildContextValues(tag)
    .filter(
      (cell: any) =>
        cell != null && (context === undefined || cell.tag === context)
    );
  let columnSpan = 0;

  for (const cell of cellCandidates) {
    if (cell) {
      columnSpan += cell.colSpan ?? 1;
      if (columnSpan > columnIndex) return cell;
    }
  }

  return null;
}

function focusCellByColumnIndex(
  focusScope: any,
  row: any,
  columnIndex: number,
  tag: string,
  event: Event
): void {
  const cell = getCellByColumnIndex(row, columnIndex, tag);
  if (cell !== null) {
    focusCell(focusScope, cell, event);
    return;
  }

  const cells = row.getChildContextValues(tag).filter(Boolean);
  if (cells.length > 0) {
    focusCell(focusScope, cells[cells.length - 1], event);
  }
}

function getLength(row: any, tag: string): number {
  const cells = row.getChildContextValues(tag).filter(Boolean) || [];
  return cells.reduce((length, cell) => length + (cell.colSpan ?? 1), 0);
}

function getCellIndexes(rows: any[], cell: any): [number, number] {
  let columnOffset = 0;
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    if (row === null) continue;
    if (row.scopeRef.current === cell)
      return [rowIndex, rowIndex + columnOffset];
    const columnSpan = row.colSpan;
    if (typeof columnSpan === "number") {
      columnOffset += columnSpan - 1;
    }
  }
  return [-1, -1];
}

function getRowCells(row: any, tag: string): any[] {
  return row.getChildContextValues(tag).filter(Boolean);
}

function getRowCellsWithIndexes(
  row: any,
  cell: any,
  tag: string
): [any[] | null, number, number] {
  const cells = getRowCells(row, tag);
  if (cells.length > 0) {
    const [cellIndex, columnIndex] = getCellIndexes(cells, cell);
    return [cells, cellIndex, columnIndex];
  }
  return [null, -1, -1];
}

function getRows(
  scope: any,
  focusScope: string,
  filterFn?: (row: any) => boolean
): any[] | null {
  if (scope) {
    const scopeElement = scope.scopeRef.current;
    if (scopeElement !== null) {
      const rows = scopeElement.getChildContextValues(focusScope);
      const filteredRows = rows
        .map((row: any) => {
          const rowElement = row.scopeRef?.current;
          const shouldIncludeRow = filterFn ? filterFn(row) : true;
          return rowElement && shouldIncludeRow ? rowElement : null;
        })
        .filter(Boolean);
      return filteredRows;
    }
  }
  return null;
}

function getRowsWithIndex(
  table: any,
  row: any,
  focusScope: any,
  filterFn?: (row: any) => boolean
): [any[] | null, number] {
  const rows = getRows(table, focusScope, filterFn);
  if (row && rows && rows.length > 0) {
    const rowIndex = rows.indexOf(row);
    return [rows, rowIndex];
  }
  return [null, -1];
}

function hasModifierKey(event: KeyboardEvent): boolean {
  return event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

export {
  isPrintableCharacter,
  hasUnassociatedLeafNodes,
  isArrowKeyLessOperationElement,
  getCellSingleInteractiveContentNode,
  focusCell,
  focusRow,
  checkRowForMatch,
  handleOnNavigateBehavior,
  getCellByColumnIndex,
  focusCellByColumnIndex,
  getLength,
  getCellIndexes,
  getRowCells,
  getRowCellsWithIndexes,
  getRows,
  getRowsWithIndex,
  hasModifierKey,
};
