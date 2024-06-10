__d(
  "FocusManager",
  ["getTabbableNodes"],
  function (a, b, c, d, e, f, g) {
    var h = !1,
      i = !1,
      j = !1,
      k = 500;

    function l() {
      try {
        var a = document.createElement("div");
        a.addEventListener(
          "focus",
          function (a) {
            a.preventDefault(), a.stopPropagation();
          },
          !0
        );
        a.focus(
          Object.defineProperty({}, "preventScroll", {
            get: function () {
              i = !0;
            },
          })
        );
      } catch (a) {}
    }

    function m(a) {
      a = a.parentElement;
      var b = [],
        c = document.scrollingElement || document.documentElement;
      while (a && a !== c) {
        var d = a,
          e = d.offsetHeight;
        d = d.offsetWidth;
        (e < a.scrollHeight || d < a.scrollWidth) &&
          b.push([a, a.scrollTop, a.scrollLeft]);
        a = a.parentElement;
      }
      c && b.push([c, c.scrollTop, c.scrollLeft]);
      return b;
    }

    function n(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0],
          e = c[1];
        c = c[2];
        d.scrollTop = e;
        d.scrollLeft = c;
      }
    }

    function a(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryAllNodes(a[c]);
        if (d) return d;
      }
      return null;
    }

    function o(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryFirstNode(a[c]);
        if (d) return d;
      }
      return null;
    }

    function b(a, b, c) {
      c = c || {};
      var d = c.preventScroll,
        e = c.focusWithoutUserIntent;
      c = c.focusWithAutoFocus;
      a = o(a, b);
      a != null &&
        p(a, {
          preventScroll: d,
          focusWithoutUserIntent: e,
          focusWithAutoFocus: c,
        });
    }

    function d() {
      return h;
    }

    function e(a) {
      return a._focusWithAutoFocus === !0;
    }
    //h i j k
    function p(a, b) {
      b = b || {};
      var c = b.preventScroll,
        d = b.focusWithoutUserIntent;
      b = b.focusWithAutoFocus;
      if (a !== null) {
        j || ((j = !0), l());
        var e = a._tabIndexState;
        if (e && e.canTab === !1) return;
        e = e ? e.value : a.tabIndex;
        a.tabIndex = -1;
        var f = h;
        c = c || !1;
        b === !0 &&
          ((a._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            a._focusWithAutoFocus = !1;
          }, k));
        try {
          h = d || !1;
          b = a.__lexicalEditor;
          if (b !== void 0) b.focus();
          else if (!c) t(a);
          else if (i)
            t(a, {
              preventScroll: !0,
            });
          else {
            d = m(a);
            t(a);
            n(d);
          }
        } catch (a) {
        } finally {
          h = f;
        }
        a.tabIndex = e;
      }
    }

    function f(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[2],
        f = a[3];
      a = a[4];
      a !== null &&
        a !== e &&
        b &&
        p(b[f + 1], {
          preventScroll: d,
        });
    }

    function q(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[1],
        f = a[3];
      a = a[4];
      a !== null &&
        a !== e &&
        b &&
        p(b[f - 1], {
          preventScroll: d,
        });
    }

    function r(a, b, d, e, f) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === h
        ? f != null
          ? f()
          : e === !0 && (p(g), d.preventDefault(), d.stopPropagation())
        : (p(b[i + 1]), d.preventDefault(), d.stopPropagation());
    }

    function s(a, b, d, e, f) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === g
        ? f != null
          ? f()
          : e === !0 && (p(h), d.preventDefault(), d.stopPropagation())
        : (p(b[i - 1]), d.preventDefault(), d.stopPropagation());
    }
    var t = function (a, b) {
      (a.focus || HTMLElement.prototype.focus).call(a, b);
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s;
  },
  98
);
import getTabbableNodes from "getTabbableNodes";

let isFocusingWithoutUserIntent = false;
let preventScrollSupported = false;
let hasInitializedFocusPreventScroll = false;
const FOCUS_AUTO_SCROLL_TIMEOUT = 500;

// Extend the HTMLElement interface to include custom properties
interface ExtendedHTMLElement extends HTMLElement {
  _tabIndexState?: { canTab: boolean; value: number };
  _focusWithAutoFocus?: boolean;
  __lexicalEditor?: { focus: () => void };
}

function initializeFocusPreventScroll(): void {
  try {
    const div = document.createElement("div");
    div.addEventListener(
      "focus",
      (event: FocusEvent) => {
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );
    div.focus(
      Object.defineProperty({}, "preventScroll", {
        get: () => {
          preventScrollSupported = true;
        },
      })
    );
  } catch (error) {
    // Ignore error
  }
}

function getScrollParents(
  element: HTMLElement
): [HTMLElement, number, number][] {
  const scrollParents: [HTMLElement, number, number][] = [];
  const scrollingElement =
    document.scrollingElement || document.documentElement;

  while (element && element !== scrollingElement) {
    const {
      offsetHeight,
      offsetWidth,
      scrollHeight,
      scrollWidth,
      scrollTop,
      scrollLeft,
    } = element;
    if (offsetHeight < scrollHeight || offsetWidth < scrollWidth) {
      scrollParents.push([element, scrollTop, scrollLeft]);
    }
    element = element.parentElement as HTMLElement;
  }

  if (scrollingElement) {
    scrollParents.push([
      scrollingElement as HTMLElement,
      scrollingElement.scrollTop,
      scrollingElement.scrollLeft,
    ]);
  }

  return scrollParents;
}

function restoreScrollPositions(
  scrollPositions: [HTMLElement, number, number][]
): void {
  for (const [element, scrollTop, scrollLeft] of scrollPositions) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

function getAllNodesFromOneOrManyQueries(
  queries: string | string[],
  context: any
): HTMLElement[] | null {
  const queryList = Array.isArray(queries) ? queries : [queries];
  for (const query of queryList) {
    const nodes = context.DO_NOT_USE_queryAllNodes(query);
    if (nodes) return nodes;
  }
  return null;
}

function getFirstNodeFromOneOrManyQueries(
  queries: string | string[],
  context: any
): HTMLElement | null {
  const queryList = Array.isArray(queries) ? queries : [queries];
  for (const query of queryList) {
    const node = context.DO_NOT_USE_queryFirstNode(query);
    if (node) return node;
  }
  return null;
}

function focusFirst(
  queries: string | string[],
  context: any,
  options: {
    preventScroll?: boolean;
    focusWithoutUserIntent?: boolean;
    focusWithAutoFocus?: boolean;
  } = {}
): void {
  const element = getFirstNodeFromOneOrManyQueries(queries, context);
  if (element) {
    focusElement(element as ExtendedHTMLElement, options);
  }
}

function isFocusing(): boolean {
  return isFocusingWithoutUserIntent;
}

function wasElementAutoFocused(element: HTMLElement): boolean {
  return (element as ExtendedHTMLElement)._focusWithAutoFocus === true;
}

function focusElement(
  element: ExtendedHTMLElement,
  options: {
    preventScroll?: boolean;
    focusWithoutUserIntent?: boolean;
    focusWithAutoFocus?: boolean;
  } = {}
): void {
  if (element !== null) {
    if (!hasInitializedFocusPreventScroll) {
      hasInitializedFocusPreventScroll = true;
      initializeFocusPreventScroll();
    }

    const { preventScroll, focusWithoutUserIntent, focusWithAutoFocus } =
      options;
    const originalTabIndex = element._tabIndexState?.value ?? element.tabIndex;
    element.tabIndex = -1;

    const previousFocusingState = isFocusingWithoutUserIntent;
    const isPreventScroll = preventScroll || false;

    if (focusWithAutoFocus) {
      element._focusWithAutoFocus = true;
      setTimeout(() => {
        element._focusWithAutoFocus = false;
      }, FOCUS_AUTO_SCROLL_TIMEOUT);
    }

    try {
      isFocusingWithoutUserIntent = focusWithoutUserIntent || false;

      if (element.__lexicalEditor) {
        element.__lexicalEditor.focus();
      } else if (!isPreventScroll) {
        element.focus();
      } else if (preventScrollSupported) {
        element.focus({ preventScroll: true });
      } else {
        const scrollPositions = getScrollParents(element);
        element.focus();
        restoreScrollPositions(scrollPositions);
      }
    } catch (error) {
      // Ignore error
    } finally {
      isFocusingWithoutUserIntent = previousFocusingState;
      element.tabIndex = originalTabIndex;
    }
  }
}

function focusNext(
  element: HTMLElement,
  context: any,
  preventScroll?: boolean
): void {
  const [allNodes, , , currentIndex, activeElement] = getTabbableNodes(
    element,
    context
  );
  if (activeElement !== null && activeElement !== allNodes) {
    focusElement(allNodes[currentIndex + 1] as ExtendedHTMLElement, {
      preventScroll,
    });
  }
}

function focusPrevious(
  element: HTMLElement,
  context: any,
  preventScroll?: boolean
): void {
  const [allNodes, firstNode, , currentIndex, activeElement] = getTabbableNodes(
    element,
    context
  );
  if (activeElement !== null && activeElement !== firstNode) {
    focusElement(allNodes[currentIndex - 1] as ExtendedHTMLElement, {
      preventScroll,
    });
  }
}

function focusNextContained(
  element: HTMLElement,
  context: any,
  event: KeyboardEvent,
  focusFirst: boolean,
  focusHandler?: () => void
): void {
  const [allNodes, firstNode, lastNode, currentIndex, activeElement] =
    getTabbableNodes(element, context);
  if (activeElement === null || allNodes === null) return;

  if (activeElement === lastNode) {
    if (focusHandler) {
      focusHandler();
    } else if (focusFirst) {
      focusElement(firstNode as ExtendedHTMLElement);
      event.preventDefault();
      event.stopPropagation();
    }
  } else {
    focusElement(allNodes[currentIndex + 1] as ExtendedHTMLElement);
    event.preventDefault();
    event.stopPropagation();
  }
}

function focusPreviousContained(
  element: HTMLElement,
  context: any,
  event: KeyboardEvent,
  focusLast: boolean,
  focusHandler?: () => void
): void {
  const [allNodes, firstNode, lastNode, currentIndex, activeElement] =
    getTabbableNodes(element, context);
  if (activeElement === null || allNodes === null) return;

  if (activeElement === firstNode) {
    if (focusHandler) {
      focusHandler();
    } else if (focusLast) {
      focusElement(lastNode as ExtendedHTMLElement);
      event.preventDefault();
      event.stopPropagation();
    }
  } else {
    focusElement(allNodes[currentIndex - 1] as ExtendedHTMLElement);
    event.preventDefault();
    event.stopPropagation();
  }
}

export {
  getAllNodesFromOneOrManyQueries,
  getFirstNodeFromOneOrManyQueries,
  focusFirst,
  isFocusingWithoutUserIntent as isFocusing,
  wasElementAutoFocused,
  focusElement,
  focusNext,
  focusPrevious,
  focusNextContained,
  focusPreviousContained,
};
