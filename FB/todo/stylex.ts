__d("stylex", ["CometStyleXSheet", "ExecutionEnvironment", "gkx", "stylex-runtime"], (function (a, b, c, d, e, f, g) {
    "use strict";
    !c("gkx")("1705") && !c("ExecutionEnvironment").isInWorker && d("CometStyleXSheet").rootStyleSheet.injectTheme();
    var h = !1;

    function i(a) {
        a = a.reverse();
        var b = {};
        while (a.length) {
            var c = a.pop();
            if (Array.isArray(c)) {
                for (var d = c.length - 1; d >= 0; d--) a.push(c[d]);
                continue
            }
            d = c;
            if (d != null && typeof d === "object")
                for (c in d) {
                    var e = d[c];
                    if (typeof e === "string") b[c] = e;
                    else if (typeof e === "object") {
                        var f;
                        b[c] = (f = b[c]) != null ? f : {};
                        Object.assign(b[c], e)
                    }
                }
        }
        return b
    }

    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        return i(b)
    }
    e = function (a, b, e) {
        e === void 0 && (e = null), !h && c("gkx")("708253") && a.indexOf("@keyframes") === -1 && (h = !0), d("CometStyleXSheet").rootStyleSheet.insert(a, b, e)
    };

    function b() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        return d("stylex-runtime").stylex(b)
    }
    b.compose = a;
    b.create = d("stylex-runtime").stylex.create;
    b.include = d("stylex-runtime").stylex.include;
    b.firstThatWorks = d("stylex-runtime").stylex.firstThatWorks;
    b.inject = e;
    b.keyframes = d("stylex-runtime").stylex.keyframes;
    b.spread = d("stylex-runtime").stylex.spread;
    b.unstable_createVars = d("stylex-runtime").stylex.unstable_createVars;
    b.unstable_overrideVars = d("stylex-runtime").stylex.unstable_overrideVars;
    f = b;
    g["default"] = f
}), 102);



import CometStyleXSheet from 'CometStyleXSheet';
import ExecutionEnvironment from 'ExecutionEnvironment';
import gkx from 'gkx';
import { stylex as stylexRuntime, inject as stylexInject } from 'stylex-runtime';

// Inject the theme if the feature flag is enabled and not running in a worker context.
if (!gkx('1705') && !ExecutionEnvironment.isInWorker) {
  CometStyleXSheet.rootStyleSheet.injectTheme();
}

let hasInjectedKeyframes = false;

function reverseMergeStyles(styles: Array<Record<string, any>>): Record<string, any> {
  const mergedStyles: Record<string, any> = {};

  while (styles.length) {
    const style = styles.pop();

    if (Array.isArray(style)) {
      for (let i = style.length - 1; i >= 0; i--) {
        styles.push(style[i]);
      }
      continue;
    }

    if (style != null && typeof style === 'object') {
      for (const key in style) {
        const value = style[key];
        if (typeof value === 'string') {
          mergedStyles[key] = value;
        } else if (typeof value === 'object') {
          mergedStyles[key] = mergedStyles[key] != null ? mergedStyles[key] : {};
          Object.assign(mergedStyles[key], value);
        }
      }
    }
  }

  return mergedStyles;
}

function stylex(...styles: Array<Record<string, any>>): Record<string, string> {
  return reverseMergeStyles(styles);
}

function insertStyles(css: string, priority: number, key: string | null = null): void {
  if (!hasInjectedKeyframes && gkx('708253') && css.indexOf('@keyframes') === -1) {
    hasInjectedKeyframes = true;
  }
  CometStyleXSheet.rootStyleSheet.insertRule(css, priority, key);
}

// Exporting the same functions as the original module.
export {
  stylex as compose,
  stylex as create,
  stylex as include,
  stylex as firstThatWorks,
  stylexInject as inject,
  stylex as keyframes,
  stylexRuntime as spread,
  stylexRuntime as unstable_createVars,
  stylexRuntime as unstable_overrideVars,
};

// Default export for the module.
export default {
  compose: stylex,
  create: stylexRuntime,
  include: stylexRuntime,
  firstThatWorks: stylexRuntime,
  inject: insertStyles,
  keyframes: stylexRuntime,
  spread: stylexRuntime,
  unstable_createVars: stylexRuntime,
  unstable_overrideVars: stylexRuntime,
};
