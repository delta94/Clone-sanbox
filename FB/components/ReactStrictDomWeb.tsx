__d(
  "ReactStrictDomWeb",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function k() {
      k = Object.assign
        ? Object.assign.bind()
        : function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b];
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
            }
            return a;
          };
      return k.apply(this, arguments);
    }
    function l(a) {}
    var m = new Set([
      "alt",
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colindextext",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowindextext",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "autoCapitalize",
      "autoComplete",
      "autoFocus",
      "checked",
      "children",
      "crossOrigin",
      "decoding",
      "defaultChecked",
      "defaultValue",
      "dir",
      "disabled",
      "download",
      "draggable",
      "elementTiming",
      "enterKeyHint",
      "fetchPriority",
      "for",
      "height",
      "hidden",
      "href",
      "id",
      "inert",
      "inputMode",
      "label",
      "lang",
      "loading",
      "max",
      "maxLength",
      "min",
      "minLength",
      "multiple",
      "onAuxClick",
      "onBeforeInput",
      "onBlur",
      "onChange",
      "onClick",
      "onContextMenu",
      "onCopy",
      "onCut",
      "onError",
      "onFocus",
      "onFocusIn",
      "onFocusOut",
      "onFullscreenChange",
      "onFullscreenError",
      "onGotPointerCapture",
      "onInput",
      "onInvalid",
      "onKeyDown",
      "onKeyUp",
      "onLoad",
      "onLostPointerCapture",
      "onPaste",
      "onPointerCancel",
      "onPointerDown",
      "onPointerEnter",
      "onPointerLeave",
      "onPointerMove",
      "onPointerOut",
      "onPointerOver",
      "onPointerUp",
      "onScroll",
      "onSelect",
      "onSelectionChange",
      "onWheel",
      "placeholder",
      "readOnly",
      "referrerPolicy",
      "rel",
      "required",
      "role",
      "rows",
      "selected",
      "spellCheck",
      "src",
      "srcSet",
      "step",
      "style",
      "suppressHydrationWarning",
      "tabIndex",
      "target",
      "type",
      "value",
      "width",
      "onMouseDown",
      "onMouseEnter",
      "onMouseLeave",
      "onMouseMove",
      "onMouseOut",
      "onMouseOver",
      "onMouseUp",
      "onTouchCancel",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
    ]);
    function n(a) {
      return m.has(a) || a.indexOf("data-") > -1;
    }
    function aa(a) {
      Object.keys(a).forEach(function (b) {
        var c = n(b);
        c || (l('invalid prop "' + b + '"'), delete a[b]);
      });
    }
    function a(a, b) {
      var d = { $$css: !0, "debug::name": "html-" + a },
        e = j.forwardRef(function (e, f) {
          var g = e["for"],
            i = e.style,
            l = babelHelpers.objectWithoutPropertiesLoose(e, ["for", "style"]);
          l = l;
          aa(l);
          g != null && (l.htmlFor = g);
          e.role != null &&
            (l.role = e.role === "none" ? "presentation" : e.role);
          a === "button"
            ? (l.type = l.type ? l.type : "button")
            : (a === "input" || a === "textarea") &&
              (l.dir = l.dir ? l.dir : "auto");
          g = (h || (h = c("stylex"))).props([d, b, i]);
          e = j.createElement(a, k({}, l, g, { ref: f }));
          return e;
        });
      e.displayName = "html." + a;
      return e;
    }
    b = {
      block: {
        listStyle: "xe8uvvx",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        $$css: !0,
      },
      inline: {
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        textDecoration: "x1hl2dhg",
        textAlign: "x16tdsg8",
        wordWrap: "x1vvkbs",
        $$css: !0,
      },
      inlineblock: {
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        $$css: !0,
      },
      button: {
        borderTopWidth: "x178xt8z",
        borderEndWidth: "xm81vs4",
        borderBottomWidth: "xso031l",
        borderStartWidth: "xy80clv",
        $$css: !0,
      },
      codePre: {
        fontFamily: "xelszwe",
        fontSize: "xrv4cvt",
        overflowX: "xw2csxc",
        overflowY: "x1odjw0f",
        $$css: !0,
      },
      heading: { fontSize: "xngnso2", wordWrap: "x1vvkbs", $$css: !0 },
      hr: {
        backgroundColor: "x42x0ya",
        borderTopStyle: "x1ejq31n",
        borderEndStyle: "xd10rxx",
        borderBottomStyle: "x1sy0etr",
        borderStartStyle: "x17r0tee",
        borderTopWidth: "x972fbf",
        borderEndWidth: "xcfux6l",
        borderBottomWidth: "x1qhh985",
        borderStartWidth: "xm0m39n",
        boxSizing: "x9f619",
        height: "xjm9jq1",
        $$css: !0,
      },
      img: {
        aspectRatio: "xuw900x",
        height: "xt7dq6l",
        maxWidth: "x193iq5w",
        $$css: !0,
      },
      input: {
        borderTopWidth: "x178xt8z",
        borderEndWidth: "xm81vs4",
        borderBottomWidth: "xso031l",
        borderStartWidth: "xy80clv",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        $$css: !0,
      },
      strong: { fontWeight: "x117nqv4", $$css: !0 },
      textarea: {
        borderTopWidth: "x178xt8z",
        borderEndWidth: "xm81vs4",
        borderBottomWidth: "xso031l",
        borderStartWidth: "xy80clv",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        resize: "x288g5",
        $$css: !0,
      },
    };
    e = b.inline;
    f = b.block;
    d = b.block;
    var o = b.inline,
      p = b.inline,
      q = b.inline,
      r = b.block,
      s = null,
      t = [b.inlineblock, b.button],
      u = [b.inline, b.codePre],
      v = null,
      w = b.block,
      x = b.inline,
      y = b.block,
      z = b.block,
      A = b.block,
      B = [b.block, b.heading],
      C = b.block,
      D = [b.block, b.hr],
      E = b.inline,
      F = b.img,
      G = [b.inlineblock, b.input],
      H = null,
      I = null,
      J = b.inline,
      K = b.block,
      L = b.block,
      M = b.block,
      N = b.block,
      O = null,
      P = null,
      Q = b.block,
      R = [b.block, b.codePre],
      S = null,
      T = b.block,
      U = b.inlineblock,
      V = b.inline,
      W = [b.inline, b.strong],
      X = b.inline,
      Y = b.inline,
      Z = [b.inlineblock, b.textarea],
      $ = null;
    b = b.block;
    e = {
      a: e,
      article: f,
      aside: d,
      b: o,
      bdi: p,
      bdo: q,
      blockquote: r,
      br: s,
      button: t,
      code: u,
      del: v,
      div: w,
      em: x,
      fieldset: y,
      footer: z,
      form: A,
      h1: B,
      h2: B,
      h3: B,
      h4: B,
      h5: B,
      h6: B,
      header: C,
      hr: D,
      i: E,
      img: F,
      input: G,
      ins: H,
      kbd: I,
      label: J,
      li: K,
      main: L,
      nav: M,
      ol: N,
      optgroup: O,
      option: P,
      p: Q,
      pre: R,
      s: S,
      section: T,
      select: U,
      span: V,
      strong: W,
      sub: X,
      sup: Y,
      textarea: Z,
      u: $,
      ul: b,
    };
    f = a("a", e.a);
    d = a("article", e.article);
    o = a("aside", e.aside);
    p = a("b", e.b);
    q = a("bdi", e.bdi);
    r = a("bdo", e.bdo);
    s = a("blockquote", e.blockquote);
    t = a("br", e.br);
    u = a("button", e.button);
    v = a("code", e.code);
    w = a("del", e.del);
    x = a("div", e.div);
    y = a("em", e.em);
    z = a("fieldset", e.fieldset);
    A = a("footer", e.footer);
    B = a("form", e.form);
    C = a("h1", e.h1);
    D = a("h2", e.h2);
    E = a("h3", e.h3);
    F = a("h4", e.h4);
    G = a("h5", e.h5);
    H = a("h6", e.h6);
    I = a("header", e.header);
    J = a("hr", e.hr);
    K = a("i", e.i);
    L = a("img", e.img);
    M = a("input", e.input);
    N = a("ins", e.ins);
    O = a("kbd", e.kbd);
    P = a("label", e.label);
    Q = a("li", e.li);
    R = a("main", e.main);
    S = a("nav", e.nav);
    T = a("ol", e.ol);
    U = a("optgroup", e.optgroup);
    V = a("option", e.option);
    W = a("p", e.p);
    X = a("pre", e.pre);
    Y = a("s", e.s);
    Z = a("section", e.section);
    $ = a("select", e.select);
    b = a("span", e.span);
    var ba = a("strong", e.strong),
      ca = a("sub", e.sub),
      da = a("sup", e.sup),
      ea = a("textarea", e.textarea),
      fa = a("u", e.u);
    a = a("ul", e.ul);
    e = Object.freeze({
      __proto__: null,
      a: f,
      article: d,
      aside: o,
      b: p,
      bdi: q,
      bdo: r,
      blockquote: s,
      br: t,
      button: u,
      code: v,
      del: w,
      div: x,
      em: y,
      fieldset: z,
      footer: A,
      form: B,
      h1: C,
      h2: D,
      h3: E,
      h4: F,
      h5: G,
      h6: H,
      header: I,
      hr: J,
      i: K,
      img: L,
      input: M,
      ins: N,
      kbd: O,
      label: P,
      li: Q,
      main: R,
      nav: S,
      ol: T,
      optgroup: U,
      option: V,
      p: W,
      pre: X,
      s: Y,
      section: Z,
      select: $,
      span: b,
      strong: ba,
      sub: ca,
      sup: da,
      textarea: ea,
      u: fa,
      ul: a,
    });
    g.css = h || (h = c("stylex"));
    g.html = e;
  },
  98
);

import React, { forwardRef, CSSProperties } from "react";
import stylex from "stylex";

// Helper function to extend properties
function assignProps(target: any, ...sources: any[]) {
  sources.forEach((source) => {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  });
  return target;
}

// Set of valid properties
const validProps = new Set([
  "alt",
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colindextext",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowindextext",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "autoCapitalize",
  "autoComplete",
  "autoFocus",
  "checked",
  "children",
  "crossOrigin",
  "decoding",
  "defaultChecked",
  "defaultValue",
  "dir",
  "disabled",
  "download",
  "draggable",
  "elementTiming",
  "enterKeyHint",
  "fetchPriority",
  "for",
  "height",
  "hidden",
  "href",
  "id",
  "inert",
  "inputMode",
  "label",
  "lang",
  "loading",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "onAuxClick",
  "onBeforeInput",
  "onBlur",
  "onChange",
  "onClick",
  "onContextMenu",
  "onCopy",
  "onCut",
  "onError",
  "onFocus",
  "onFocusIn",
  "onFocusOut",
  "onFullscreenChange",
  "onFullscreenError",
  "onGotPointerCapture",
  "onInput",
  "onInvalid",
  "onKeyDown",
  "onKeyUp",
  "onLoad",
  "onLostPointerCapture",
  "onPaste",
  "onPointerCancel",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerMove",
  "onPointerOut",
  "onPointerOver",
  "onPointerUp",
  "onScroll",
  "onSelect",
  "onSelectionChange",
  "onWheel",
  "placeholder",
  "readOnly",
  "referrerPolicy",
  "rel",
  "required",
  "role",
  "rows",
  "selected",
  "spellCheck",
  "src",
  "srcSet",
  "step",
  "style",
  "suppressHydrationWarning",
  "tabIndex",
  "target",
  "type",
  "value",
  "width",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
]);

function isValidProp(prop: string): boolean {
  return validProps.has(prop) || prop.startsWith("data-");
}

function cleanProps(props: any) {
  Object.keys(props).forEach((key) => {
    if (!isValidProp(key)) {
      console.warn(`Invalid prop "${key}"`);
      delete props[key];
    }
  });
}

interface HtmlElementProps {
  [key: string]: any;
}

function createHtmlElement(tag: string, baseStyle: CSSProperties) {
  const HtmlElement = forwardRef<HTMLElement, HtmlElementProps>(
    (props, ref) => {
      const { for: htmlFor, style, ...restProps } = props;
      const cleanedProps = { ...restProps };

      cleanProps(cleanedProps);

      if (htmlFor !== undefined) {
        cleanedProps.htmlFor = htmlFor;
      }
      if (cleanedProps.role === "none") {
        cleanedProps.role = "presentation";
      }
      if (tag === "button" && !cleanedProps.type) {
        cleanedProps.type = "button";
      }
      if ((tag === "input" || tag === "textarea") && !cleanedProps.dir) {
        cleanedProps.dir = "auto";
      }

      const combinedStyle = stylex(baseStyle, style);
      return React.createElement(tag, {
        ...cleanedProps,
        style: combinedStyle,
        ref,
      });
    }
  );

  HtmlElement.displayName = `html.${tag}`;
  return HtmlElement;
}

const styles = {
  block: {
    listStyle: "xe8uvvx",
    marginTop: "xdj266r",
    marginEnd: "x11i5rnm",
    marginBottom: "xat24cr",
    marginStart: "x1mh8g0r",
    paddingTop: "xexx8yu",
    paddingEnd: "x4uap5",
    paddingBottom: "x18d9i69",
    paddingStart: "xkhd6sd",
    $$css: true,
  },
  inline: {
    marginTop: "xdj266r",
    marginEnd: "x11i5rnm",
    marginBottom: "xat24cr",
    marginStart: "x1mh8g0r",
    paddingTop: "xexx8yu",
    paddingEnd: "x4uap5",
    paddingBottom: "x18d9i69",
    paddingStart: "xkhd6sd",
    textDecoration: "x1hl2dhg",
    textAlign: "x16tdsg8",
    wordWrap: "x1vvkbs",
    $$css: true,
  },
  inlineblock: {
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    marginTop: "xdj266r",
    marginEnd: "x11i5rnm",
    marginBottom: "xat24cr",
    marginStart: "x1mh8g0r",
    paddingTop: "xexx8yu",
    paddingEnd: "x4uap5",
    paddingBottom: "x18d9i69",
    paddingStart: "xkhd6sd",
    $$css: true,
  },
  button: {
    borderTopWidth: "x178xt8z",
    borderEndWidth: "xm81vs4",
    borderBottomWidth: "xso031l",
    borderStartWidth: "xy80clv",
    $$css: true,
  },
  codePre: {
    fontFamily: "xelszwe",
    fontSize: "xrv4cvt",
    overflowX: "xw2csxc",
    overflowY: "x1odjw0f",
    $$css: true,
  },
  heading: { fontSize: "xngnso2", wordWrap: "x1vvkbs", $$css: true },
  hr: {
    backgroundColor: "x42x0ya",
    borderTopStyle: "x1ejq31n",
    borderEndStyle: "xd10rxx",
    borderBottomStyle: "x1sy0etr",
    borderStartStyle: "x17r0tee",
    borderTopWidth: "x972fbf",
    borderEndWidth: "xcfux6l",
    borderBottomWidth: "x1qhh985",
    borderStartWidth: "xm0m39n",
    boxSizing: "x9f619",
    height: "xjm9jq1",
    $$css: true,
  },
  img: {
    aspectRatio: "xuw900x",
    height: "xt7dq6l",
    maxWidth: "x193iq5w",
    $$css: true,
  },
  input: {
    borderTopWidth: "x178xt8z",
    borderEndWidth: "xm81vs4",
    borderBottomWidth: "xso031l",
    borderStartWidth: "xy80clv",
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    $$css: true,
  },
  strong: { fontWeight: "x117nqv4", $$css: true },
  textarea: {
    borderTopWidth: "x178xt8z",
    borderEndWidth: "xm81vs4",
    borderBottomWidth: "xso031l",
    borderStartWidth: "xy80clv",
    borderTopStyle: "x13fuv20",
    borderEndStyle: "xu3j5b3",
    borderBottomStyle: "x1q0q8m5",
    borderStartStyle: "x26u7qi",
    resize: "x288g5",
    $$css: true,
  },
};

// Define HTML elements with appropriate styles
const htmlElements = {
  a: createHtmlElement("a", styles.inline),
  article: createHtmlElement("article", styles.block),
  aside: createHtmlElement("aside", styles.block),
  b: createHtmlElement("b", styles.inline),
  bdi: createHtmlElement("bdi", styles.inline),
  bdo: createHtmlElement("bdo", styles.inline),
  blockquote: createHtmlElement("blockquote", styles.block),
  br: createHtmlElement("br", {}),
  button: createHtmlElement("button", styles.button),
  code: createHtmlElement("code", styles.inline),
  del: createHtmlElement("del", styles.inline),
  div: createHtmlElement("div", styles.block),
  em: createHtmlElement("em", styles.inline),
  fieldset: createHtmlElement("fieldset", styles.block),
  footer: createHtmlElement("footer", styles.block),
  form: createHtmlElement("form", styles.block),
  h1: createHtmlElement("h1", styles.heading),
  h2: createHtmlElement("h2", styles.heading),
  h3: createHtmlElement("h3", styles.heading),
  h4: createHtmlElement("h4", styles.heading),
  h5: createHtmlElement("h5", styles.heading),
  h6: createHtmlElement("h6", styles.heading),
  header: createHtmlElement("header", styles.block),
  hr: createHtmlElement("hr", styles.hr),
  i: createHtmlElement("i", styles.inline),
  img: createHtmlElement("img", styles.img),
  input: createHtmlElement("input", styles.input),
  ins: createHtmlElement("ins", styles.inline),
  kbd: createHtmlElement("kbd", styles.inline),
  label: createHtmlElement("label", styles.inline),
  li: createHtmlElement("li", styles.block),
  main: createHtmlElement("main", styles.block),
  nav: createHtmlElement("nav", styles.block),
  ol: createHtmlElement("ol", styles.block),
  optgroup: createHtmlElement("optgroup", styles.block),
  option: createHtmlElement("option", styles.block),
  p: createHtmlElement("p", styles.block),
  pre: createHtmlElement("pre", styles.block),
  s: createHtmlElement("s", styles.inline),
  section: createHtmlElement("section", styles.block),
  select: createHtmlElement("select", styles.block),
  span: createHtmlElement("span", styles.inline),
  strong: createHtmlElement("strong", styles.strong),
  sub: createHtmlElement("sub", styles.inline),
  sup: createHtmlElement("sup", styles.inline),
  textarea: createHtmlElement("textarea", styles.textarea),
  u: createHtmlElement("u", styles.inline),
  ul: createHtmlElement("ul", styles.block),
};

export const html = htmlElements;
export const css = stylex;
