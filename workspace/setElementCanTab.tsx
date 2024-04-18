__d("setElementCanTab", [], (function(a, b, c, d, e, f) {
  c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
  d = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
  e = function(a) {
      return a
  }
  ;
  var g = c ? c.set : e
    , h = d ? d.set : e;
  function i(a) {
      return a instanceof SVGElement ? h : g
  }
  function a(a, b, c) {
      c === void 0 && (c = !1);
      var d = a._tabIndexState
        , e = i(a);
      if (!d) {
          b && c && a.tabIndex < 0 && (a.tabIndex = 0);
          var f = {
              value: a.tabIndex,
              canTab: b
          };
          a._tabIndexState = f;
          b || (a.tabIndex = -1);
          Object.defineProperty(a, "tabIndex", {
              enumerable: !1,
              configurable: !0,
              get: function() {
                  return f.canTab ? f.value : -1
              },
              set: function(a) {
                  f.canTab && typeof e === "function" && e.call(this, a),
                  f.value = a
              }
          })
      } else
          d.canTab !== b && typeof e === "function" && (e.call(a, b ? d.value : -1),
          d.canTab = b)
  }
  function b(a) {
      var b = a._tabIndexState;
      if (!b)
          return a.tabIndex > 0;
      else
          return b.canTab
  }
  f.setElementCanTab = a;
  f.canElementTab = b
}
), 66);


function getHTMLElementPropertyDescriptor(element: HTMLElement): PropertyDescriptor | undefined {
  return Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex');
}

function getSVGElementPropertyDescriptor(element: SVGElement): PropertyDescriptor | undefined {
  return Object.getOwnPropertyDescriptor(SVGElement.prototype, 'tabIndex');
}

const getSetFunction = (propertyDescriptor: PropertyDescriptor | undefined): ((value: number) => void) | ((value: number) => void) => {
  return propertyDescriptor ? propertyDescriptor.set : (value: number) => value;
};

const htmlElementPropertyDescriptor = getHTMLElementPropertyDescriptor(HTMLElement);
const svgElementPropertyDescriptor = getSVGElementPropertyDescriptor(SVGElement);

const setHTMLElementTabIndex = getSetFunction(htmlElementPropertyDescriptor);
const setSVGElementTabIndex = getSetFunction(svgElementPropertyDescriptor);

function getElementSetFunction(element: Element): ((value: number) => void) {
  return element instanceof SVGElement ? setSVGElementTabIndex : setHTMLElementTabIndex;
}

export function setElementCanTab(element: HTMLElement | SVGElement, canTab: boolean, setZeroTabIndex = false): void {
  let tabIndexState = (element as any)._tabIndexState;
  const setTabIndex = getElementSetFunction(element);

  if (!tabIndexState) {
    if (canTab && setZeroTabIndex && element.tabIndex < 0) {
      element.tabIndex = 0;
    }

    tabIndexState = {
      value: element.tabIndex,
      canTab: canTab,
    };

    (element as any)._tabIndexState = tabIndexState;

    if (!canTab) {
      element.tabIndex = -1;
    }

    Object.defineProperty(element, 'tabIndex', {
      enumerable: false,
      configurable: true,
      get: function () {
        return tabIndexState.canTab ? tabIndexState.value : -1;
      },
      set: function (value: number) {
        if (tabIndexState.canTab && typeof setTabIndex === 'function') {
          setTabIndex.call(this, value);
        }
        tabIndexState.value = value;
      },
    });
  } else {
    if (tabIndexState.canTab !== canTab && typeof setTabIndex === 'function') {
      setTabIndex.call(element, canTab ? tabIndexState.value : -1);
      tabIndexState.canTab = canTab;
    }
  }
}

export function canElementTab(element: HTMLElement | SVGElement): boolean {
  const tabIndexState = (element as any)._tabIndexState;
  if (!tabIndexState) {
    return element.tabIndex > 0;
  } else {
    return tabIndexState.canTab;
  }
}
 