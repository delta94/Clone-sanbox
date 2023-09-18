__d("FocusManager", ["getTabbableNodes"], (function (a, b, c, d, e, f, g) {
    var h = !1,
        i = !1,
        j = !1,
        k = 500;

    function l() {
        try {
            var a = document.createElement("div");
            a.addEventListener("focus", function (a) {
                a.preventDefault(), a.stopPropagation()
            }, !0);
            a.focus(Object.defineProperty({}, "preventScroll", {
                get: function () {
                    i = !0
                }
            }))
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
            (e < a.scrollHeight || d < a.scrollWidth) && b.push([a, a.scrollTop, a.scrollLeft]);
            a = a.parentElement
        }
        c && b.push([c, c.scrollTop, c.scrollLeft]);
        return b
    }

    function n(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c[0],
                e = c[1];
            c = c[2];
            d.scrollTop = e;
            d.scrollLeft = c
        }
    }

    function a(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryAllNodes(a[c]);
            if (d) return d
        }
        return null
    }

    function o(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryFirstNode(a[c]);
            if (d) return d
        }
        return null
    }

    function b(a, b, c) {
        c = c || {};
        var d = c.preventScroll,
            e = c.focusWithoutUserIntent;
        c = c.focusWithAutoFocus;
        a = o(a, b);
        a != null && p(a, {
            preventScroll: d,
            focusWithoutUserIntent: e,
            focusWithAutoFocus: c
        })
    }

    function d() {
        return h
    }

    function e(a) {
        return a._focusWithAutoFocus === !0
    }
//h i j k
    function p(a, b) {
        b = b || {};
        var c = b.preventScroll,
            d = b.focusWithoutUserIntent;
        b = b.focusWithAutoFocus;
        if (a !== null) {
            j || (j = !0, l());
            var e = a._tabIndexState;
            if (e && e.canTab === !1) return;
            e = e ? e.value : a.tabIndex;
            a.tabIndex = -1;
            var f = h;
            c = c || !1;
            b === !0 && (a._focusWithAutoFocus = !0, window.setTimeout(function () {
                a._focusWithAutoFocus = !1
            }, k));
            try {
                h = d || !1;
                b = a.__lexicalEditor;
                if (b !== void 0) b.focus();
                else if (!c) t(a);
                else if (i) t(a, {
                    preventScroll: !0
                });
                else {
                    d = m(a);
                    t(a);
                    n(d)
                }
            } catch (a) {} finally {
                h = f
            }
            a.tabIndex = e
        }
    }

    function f(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[2],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f + 1], {
            preventScroll: d
        })
    }

    function q(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[1],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f - 1], {
            preventScroll: d
        })
    }

    function r(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === h ? f != null ? f() : e === !0 && (p(g), d.preventDefault(), d.stopPropagation()) : (p(b[i + 1]), d.preventDefault(), d.stopPropagation())
    }

    function s(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === g ? f != null ? f() : e === !0 && (p(h), d.preventDefault(), d.stopPropagation()) : (p(b[i - 1]), d.preventDefault(), d.stopPropagation())
    }
    var t = function (a, b) {
        (a.focus || HTMLElement.prototype.focus).call(a, b)
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
    g.focusPreviousContained = s
}), 98);



import getTabbableNodes from './getTabbableNodes';

let hasAutoFocused = false;
let isPreventingScroll = false;
let _isFocusingWithoutUserIntent = false;
const autoFocusDelay = 500;

function setupPreventScrollOnFocus() {
  try {
    const divElement = document.createElement('div');
    divElement.addEventListener('focus', (event) => {
      event.preventDefault();
      event.stopPropagation();
    }, true);
    divElement.focus(Object.defineProperty({}, "preventScroll", {
      get() {
        isPreventingScroll = true;
      }
    }));
  } catch (error) {}
}

function getScrollableAncestors(element) {
  element = element.parentElement;
  const scrollableAncestors = [];
  const scrollingElement = document.scrollingElement || document.documentElement;

  while (element && element !== scrollingElement) {
    const ancestor = element;
    const ancestorHeight = ancestor.offsetHeight;
    const ancestorWidth = ancestor.offsetWidth;

    (ancestorHeight < element.scrollHeight || ancestorWidth < element.scrollWidth) && scrollableAncestors.push([element,  element.scrollTop, element.scrollLeft]]);
  
    element = element.parentElement;
  }

  if (scrollingElement) {
    scrollableAncestors.push([scrollingElement, scrollingElement.scrollTop, scrollingElement.scrollLeft]);
  }

  return scrollableAncestors;
}

function restoreScrollPosition(scrollableAncestors) {
  for (let i = 0; i < scrollableAncestors.length; i++) {
    const ancestorInfo = scrollableAncestors[i];
    const ancestor = ancestorInfo[0];
    const scrollTop = ancestorInfo[1];
    const scrollLeft = ancestorInfo[2];
    ancestor.scrollTop = scrollTop;
    ancestor.scrollLeft = scrollLeft;
  }
}

function getAllNodesFromOneOrManyQueries(queries, queryFunction) {
    queries = Array.isArray(queries) ? queries : [queries];
    for (let i = 0; i < queries.length; i++) {
      const nodes = queryFunction.DO_NOT_USE_queryAllNodes(queries[i]);
      if (nodes) return nodes;
    }
    return null;
}

function getFirstNodeFromOneOrManyQueries(queries, queryFunction) {
    queries = Array.isArray(queries) ? queries : [queries];
    for (let i = 0; i < queries.length; i++) {
      const node = queryFunction.DO_NOT_USE_queryFirstNode(queries[i]);
      if (node) {
        return node;
      }
    }
    return null;
}

function focusElement(selector, options = {}) {
  let preventScroll = options.preventScroll;
  const focusWithoutUserIntent = options.focusWithoutUserIntent;
  const focusWithAutoFocus = options.focusWithAutoFocus;
  if (selector !== null) {
    hasAutoFocused || (hasAutoFocused = true, setupPreventScrollOnFocus());
    const tabIndexState = selector._tabIndexState;
    if (tabIndexState && tabIndexState.canTab === false) return;

    const tabIndex = tabIndexState ? tabIndexState.value : selector.tabIndex;
    selector.tabIndex = -1;
    const previousFocusingWithoutUserIntent = _isFocusingWithoutUserIntent;
    preventScroll = preventScroll || false;

    if (focusWithAutoFocus === true) {
        selector._focusWithAutoFocus = true;
        window.setTimeout(() => {
            selector._focusWithAutoFocus = false;
        }, autoFocusDelay);
    }

    try {
      _isFocusingWithoutUserIntent = focusWithoutUserIntent || false;
      const lexicalEditor = selector.__lexicalEditor;

      if (lexicalEditor !== undefined) {
        lexicalEditor.focus();
      } else if (!preventScroll) {
        applyFocus(selector);
      } else if (isPreventingScroll) {
        applyFocus(selector, {
          preventScroll: true
        });
      } else {
        const scrollableAncestors = getScrollableAncestors(selector);
        applyFocus(element);
        restoreScrollPosition(scrollableAncestors);
      }
    } catch (error) {
      // Handle error if needed
    } finally {
      _isFocusingWithoutUserIntent = previousFocusingWithoutUserIntent;
    }

    selector.tabIndex = tabIndex;
  }
}

const applyFocus = (element, options) => {
  (element.focus || HTMLElement.prototype.focus).call(element, options);
};



function isFocusingWithoutUserIntent() {
  return _isFocusingWithoutUserIntent;
}

function wasElementAutoFocused(element) {
  return element._focusWithAutoFocus === true;
}

const focusFirstNode = (queries, queryFunction, options) => {
  options = options || {};
  const preventScroll = options.preventScroll;
  const focusWithoutUserIntent = options.focusWithoutUserIntent;
  const focusWithAutoFocus = options.focusWithAutoFocus;
  const element = getFirstNodeFromOneOrManyQueries(queries, queryFunction);
  if (element !== null) {
    focusElement(element, {
      preventScroll: preventScroll,
      focusWithoutUserIntent: focusWithoutUserIntent,
      focusWithAutoFocus: focusWithAutoFocus
    });
  }
};

const focusNextNode = (queries, queryFunction, preventScroll) => {
  const [filteredTabbableNodes, firstNode, lastNode, activeNodeIndex, activeNode] = getTabbableNodes(queries, queryFunction);
  if (activeNode !== null && activeNode !== lastNode && filteredTabbableNodes) {
    focusElement(filteredTabbableNodes[activeNodeIndex + 1], {
      preventScroll: preventScroll
    });
  }
};

const focusPreviousNode = (queries, queryFunction, preventScroll) => {
  const [filteredTabbableNodes, firstNode, lastNode, activeNodeIndex, activeNode] = getTabbableNodes(queries, queryFunction);
  if (activeNode !== null && activeNode !== firstNode && filteredTabbableNodes) {
    focusElement(filteredTabbableNodes[activeNodeIndex - 1], {
      preventScroll: preventScroll
    });
  }
};

function focusNextContained(selector, queryFunction, preventScroll, focusWithoutUserIntent, onElementFocused) {
  const [filteredTabbableNodes, firstNode, lastNode, activeNodeIndex, activeNode] = getTabbableNodes(selector, queryFunction);

  if (activeNode === null || filteredTabbableNodes == null) return;
 
  if(activeNode === lastNode) {
    if (onElementFocused !== null) {
      onElementFocused();
    } else if (focusWithoutUserIntent === true) {
      focusElement(firstNode);
      preventScroll.preventDefault();
      preventScroll.stopPropagation();
    } else {
      focusElement(filteredTabbableNodes[activeNodeIndex + 1]);
      preventScroll.preventDefault();
      preventScroll.stopPropagation();
    }
  }
}

function focusPreviousContained(selector, queryFunction, preventScroll, focusWithoutUserIntent, onElementFocused) {
  const [filteredTabbableNodes, firstNode, lastNode, activeNodeIndex, activeNode] = getTabbableNodes(selector, queryFunction);

  if (activeNode === null || filteredTabbableNodes == null) return;

  if(activeNode === firstNode) {
    if (onElementFocused !== null) {
      onElementFocused();
    } else if (focusWithoutUserIntent === true) {
      focusElement(lastNode);
      preventScroll.preventDefault();
      preventScroll.stopPropagation();
    } else {
      focusElement(filteredTabbableNodes[activeNodeIndex - 1]);
      preventScroll.preventDefault();
      preventScroll.stopPropagation();
    }
  }
}

export {
  getAllNodesFromOneOrManyQueries as getAllNodesFromOneOrManyQueries,
  getFirstNodeFromOneOrManyQueries as getFirstNodeFromOneOrManyQueries,
  focusFirstNode as focusFirst,
  isFocusingWithoutUserIntent as isFocusingWithoutUserIntent,
  wasElementAutoFocused as wasElementAutoFocused,
  focusElement as focusElement,
  focusNextNode as focusNext,
  focusPreviousNode as focusPrevious,
  focusNextContained as focusNextContained,
  focusPreviousContained as focusPreviousContained
};
