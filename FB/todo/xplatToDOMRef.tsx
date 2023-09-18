__d("xplatToDOMRef", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = a.HTMLElement;
    function b(a) {
        return function(b) {
            b = g && b instanceof g ? b : null;
            typeof a === "function" ? a(b) : a != null && typeof a === "object" && (a.current = b)
        }
    }
    var h = a.HTMLInputElement;
    function c(a) {
        return function(b) {
            b = h && b instanceof h ? b : null;
            typeof a === "function" ? a(b) : a != null && typeof a === "object" && (a.current = b)
        }
    }
    f.xplatToDOMRef = b;
    f.xplatToInputRef = c
}
), 66);

  
  type RefCallback<T> = (value: T | null) => void;
  
  export function xplatToDOMRef<T extends HTMLElement | null>(ref: ((element: T | null) => void) | { current: T | null }): RefCallback<T> {
    return (element) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref != null && typeof ref === "object") {
        ref.current = element;
      }
    };
  }
  
  export function xplatToInputRef<T extends HTMLInputElement | null>(ref: ((element: T | null) => void) | { current: T | null }): RefCallback<T> {
    return (element) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref != null && typeof ref === "object") {
        ref.current = element;
      }
    };
  }
  
