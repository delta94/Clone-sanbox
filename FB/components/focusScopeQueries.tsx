// __d("focusScopeQueries", [], (function(a, b, c, d, e, f) {
//     function g(a, b) {
//         return a === "h1" || a === "h2" || a === "h3" || b.role === "heading" && (b["aria-level"] === 1 || b["aria-level"] === 2 || b["aria-level"] === 3) || b["aria-busy"] === !0 || b.role === "progressbar" ? !0 : !1
//     }
//     function a(a, b) {
//         return b.tabIndex === -1 && !(b.disabled === !0 || b.type === "hidden" || b["aria-disabled"] === !0 || b["aria-hidden"] === !0) ? !0 : i(a, b)
//     }
//     function h(a) {
//         return a.type !== "hidden" && a.type !== "file"
//     }
//     function b(a, b) {
//         return a === "input" && h(b)
//     }
//     function i(a, b) {
//         if (b.tabIndex === -1 || b.disabled === !0)
//             return !1;
//         if (b.tabIndex === 0 || b.contentEditable === !0)
//             return !0;
//         if (a === "a" || a === "area")
//             return b.href != null && b.href !== "" && b.rel !== "ignore";
//         return a === "input" ? h(b) : a === "button" || a === "textarea" || a === "select" || a === "iframe" || a === "embed"
//     }
//     b = [b, i];
//     function j(a) {
//         return a.offsetWidth === 0 && a.offsetHeight === 0
//     }
//     function c(a, b, c) {
//         return !j(c) && i(a, b)
//     }
//     function k(a, b) {
//         return a === "td" || a === "th" || b.role === "gridcell" || b.role === "columnheader" || b.role === "rowheader" ? !0 : !1
//     }
//     function d(a, b) {
//         return !k(a, b) && i(a, b)
//     }
//     var l = [g, i];
//     function e(a, b) {
//         return g(a, b) || i(a, b)
//     }
//     var m = function(a, b) {
//         return b["data-focus-target"] === !0 && (b["aria-busy"] === !0 || b.role === "progressbar") ? !0 : !1
//     };
//     f.headerAndSpinnerFocusScopeQuery = g;
//     f.focusableScopeQuery = a;
//     f.tabbableScopeQuery = i;
//     f.inputFirstTabbbableScopeQuery = b;
//     f.displayedTabbableScopeQuery = c;
//     f.tableCellScopeQuery = k;
//     f.tableCellTabbableContentScopeQuery = d;
//     f.headerFirstTabbableSecondScopeQuery = l;
//     f.headerOrTabbableScopeQuery = e;
//     f.topLoadingScopeQuery = m
// }
// ), 66);

export const headerAndSpinnerFocusScopeQuery = (tagName: string, attributes: any): boolean => {
    return tagName === "h1" || tagName === "h2" || tagName === "h3" || attributes.role === "heading" && (attributes["aria-level"] === 1 || attributes["aria-level"] === 2 || attributes["aria-level"] === 3) || attributes["aria-busy"] === true || attributes.role === "progressbar";
  }
  
  export const focusableScopeQuery = (tagName: string, attributes: any): boolean => {
    return attributes.tabIndex === -1 && !(attributes.disabled === true || attributes.type === "hidden" || attributes["aria-disabled"] === true || attributes["aria-hidden"] === true);
  }
  
  export const tabbableScopeQuery = (tagName: string, attributes: any): boolean => {
    if(attributes.tabIndex === -1 || attributes.disabled === true) return false;
    if(attributes.tabIndex === 0 || attributes.contentEditable === true) return true;
    if(tagName === "a" || tagName === "area") return attributes.href != null && attributes.href !== "" && attributes.rel !== "ignore";
    return tagName === "input" ? attributes.type !== "hidden" && attributes.type !== "file" : tagName === "button" || tagName === "textarea" || tagName === "select" || tagName === "iframe" || tagName === "embed";
  }
  
  export const inputFirstTabbbableScopeQuery = (tagName: string, attributes: any): boolean => {
    return tagName === "input" && attributes.type !== "hidden" && attributes.type !== "file";
  }
  
  export const displayedTabbableScopeQuery = (tagName: string, attributes: any, element: HTMLElement): boolean => {
    return !(element.offsetWidth === 0 && element.offsetHeight === 0) && tabbableScopeQuery(tagName, attributes);
  }
  
  export const tableCellScopeQuery = (tagName: string, attributes: any): boolean => {
    return tagName === "td" || tagName === "th" || attributes.role === "gridcell" || attributes.role === "columnheader" || attributes.role === "rowheader";
  }
  
  export const tableCellTabbableContentScopeQuery = (tagName: string, attributes: any): boolean => {
    return !tableCellScopeQuery(tagName, attributes) && tabbableScopeQuery(tagName, attributes);
  }
  
  export const headerFirstTabbableSecondScopeQuery = (tagName: string, attributes: any): boolean => {
    return headerAndSpinnerFocusScopeQuery(tagName, attributes) || tabbableScopeQuery(tagName, attributes);
  }
  
  export const headerOrTabbableScopeQuery = (tagName: string, attributes: any): boolean => {
    return headerAndSpinnerFocusScopeQuery(tagName, attributes) || tabbableScopeQuery(tagName, attributes);
  }
  
  export const topLoadingScopeQuery = (tagName: string, attributes: any): boolean => {
    return attributes["data-focus-target"] === true && (attributes["aria-busy"] === true || attributes.role === "progressbar");
  }