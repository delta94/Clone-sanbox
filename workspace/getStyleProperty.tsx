__d("getStyleProperty", ["camelize", "hyphenate"], (function (a, b, c, d, e, f, g) {
    function h(a) {
        return a == null ? "" : String(a)
    }

    function a(a, b) {
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
            if (b === "display") return "none"
        }
        return a.currentStyle ? b === "float" ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : h(a.currentStyle[c("camelize")(b)]) : h(a.style && a.style[c("camelize")(b)])
    }
    g["default"] = a
}), 98);


import camelize from 'camelize'; // Assuming camelize is available
import hyphenate from 'hyphenate'; // Assuming hyphenate is available

/**
 * Retrieves a computed style property value for a given element and property name.
 *
 * @param element The element to get the style property from.
 * @param property The name of the style property to retrieve.
 * @returns The computed style property value, or an empty string if not found.
 */

const getStringValue = (value: string | null): string => {
    return value == null ? "" : String(value);
};

export const getStyleProperty = (
  element: HTMLElement,
  property: string
): string => {
  let computedStyle: CSSStyleDeclaration | null;

  if (window.getComputedStyle) {
    computedStyle = window.getComputedStyle(element, null);
    if (computedStyle) return getStringValue(computedStyle.getPropertyValue(hyphenate(property)));
  }

  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = document.defaultView.getComputedStyle(element, null);
    if (computedStyle) return getStringValue(computedStyle.getPropertyValue(hyphenate(property)));
    if (property === "display") return "none";
  }

  const currentStyle = (element as any).currentStyle;

  return currentStyle
  ? property === "float"
    ? getStringValue(currentStyle.cssFloat || currentStyle.styleFloat)
    : getStringValue(currentStyle[camelize(property)])
  : getStringValue(element.style && element.style[camelize(property)]);
};
