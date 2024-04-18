__d("isElementFixedOrSticky", ["getComputedStyle"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        var b = a;
        while (b != null && b !== a.ownerDocument) {
            var d = (h || (h = c("getComputedStyle")))(b);
            if (d == null) return !1;
            d = d.getPropertyValue("position");
            if (d === "fixed" || d === "sticky") return !0;
            b = b.parentElement
        }
        return !1
    }
    g["default"] = a
}), 98);

import getComputedStyle from './getComputedStyle';

const isElementFixedOrSticky = (element: HTMLElement): boolean => {
  let currentElement: any = element;

  while (currentElement !== null && currentElement !== currentElement.ownerDocument) {
      const computedStyle = getComputedStyle(currentElement);
      
      if (computedStyle === null) {
      return false;
      }

    const position = computedStyle.getPropertyValue('position');

    if (position === 'fixed' || position === 'sticky') {
      return true;
    }

    currentElement = currentElement.parentElement;
  }

  return false;
};

export default isElementFixedOrSticky;
