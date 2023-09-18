__d("StyleXSheet", ["invariant", "ExecutionEnvironment", "Locale", "gkx"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "__fb-light-mode",
        j = "__fb-dark-mode";

    function k(a, b) {
        var c = [];
        c.push(a + " {");
        for (a in b) {
            var d = b[a];
            c.push("  --" + a + ": " + d + ";")
        }
        c.push("}");
        return c.join("\n")
    }

    function l() {
        var a = document.createElement("style");
        a.setAttribute("type", "text/css");
        a.setAttribute("data-styled", "true");
        var b = document.head || document.getElementsByTagName("head")[0];
        b || h(0, 2655);
        b.appendChild(a);
        return a
    }

    function m() {
        return window.CSS != null && window.CSS.supports != null && window.CSS.supports("--fake-var:0")
    }
    var n = /var\(--(.*?)\)/g;
    a = function () {
        function a(a) {
            var b;
            this.tag = null;
            this.injected = !1;
            this.ruleForPriority = new Map();
            this.rules = [];
            this.rootTheme = a.rootTheme;
            this.rootDarkTheme = a.rootDarkTheme;
            this.isSlow = (b = a.isSlow) != null ? b : typeof location === "object" && typeof location.search === "string" ? location.search.includes("stylex-slow") : !1;
            this.supportsVariables = (b = a.supportsVariables) != null ? b : m();
            this.$1 = d("Locale").isRTL();
            this.externalRules = new Set()
        }
        var b = a.prototype;
        b.getVariableMatch = function () {
            return n
        };
        b.isHeadless = function () {
            return this.tag == null || !c("ExecutionEnvironment").canUseDOM
        };
        b.getTag = function () {
            var a = this.tag;
            a != null || h(0, 11103);
            return a
        };
        b.getCSS = function () {
            return this.rules.join("\n")
        };
        b.getRulePosition = function (a) {
            return this.rules.indexOf(a)
        };
        b.getRuleCount = function () {
            return this.rules.length
        };
        b.inject = function () {
            if (this.injected) return;
            this.injected = !0;
            if (!c("ExecutionEnvironment").canUseDOM) {
                this.injectTheme();
                return
            }
            this.tag = l();
            this.injectTheme()
        };
        b.injectTheme = function () {
            if (c("gkx")("1861546")) return;
            this.rootTheme != null && this.insert(k(":root, ." + i, this.rootTheme), 0);
            this.rootDarkTheme != null && this.insert(k("." + j + ":root, ." + j, this.rootDarkTheme), 0)
        };
        b.__injectCustomThemeForTesting = function (a, b) {
            b != null && this.insert(k(a, b), 0)
        };
        b["delete"] = function (a) {
            var b = this.rules.indexOf(a);
            b >= 0 || h(0, 2656, a);
            this.rules.splice(b, 1);
            if (this.isHeadless()) return;
            a = this.getTag();
            if (this.isSlow) a.removeChild(a.childNodes[b + 1]);
            else {
                a = a.sheet;
                a || h(0, 2657);
                a.deleteRule(b)
            }
        };
        b.normalizeRule = function (a) {
            var b = this.rootTheme;
            return this.supportsVariables || b == null ? a : a.replace(n, function (a, c) {
                return b[c]
            })
        };
        b.getInsertPositionForPriority = function (a) {
            var b = this.ruleForPriority.get(a);
            if (b != null) return this.rules.indexOf(b) + 1;
            b = Array.from(this.ruleForPriority.keys()).sort(function (a, b) {
                return b - a
            }).filter(function (b) {
                return b > a ? 1 : 0
            });
            if (b.length === 0) return this.getRuleCount();
            b = b.pop();
            return this.rules.indexOf(this.ruleForPriority.get(b))
        };
        b.insert = function (a, b, c) {
            this.injected === !1 && this.inject();
            c = this.$1 && c != null ? c : a;
            if (this.externalRules.has(c.slice(0, c.indexOf("{")).trim())) return;
            if (this.rules.includes(c)) return;
            a = this.normalizeRule(c);
            if (this.externalRules.has(a.slice(0, a.indexOf("{")).trim())) return;
            c = this.getInsertPositionForPriority(b);
            this.rules.splice(c, 0, a);
            this.ruleForPriority.set(b, a);
            if (this.isHeadless()) return;
            b = this.getTag();
            if (this.isSlow) {
                var d = document.createTextNode(a);
                b.insertBefore(d, b.childNodes[c])
            } else {
                d = b.sheet;
                if (d != null) try {
                    d.insertRule(a, c)
                } catch (a) {}
            }
        };
        return a
    }();
    a.LIGHT_MODE_CLASS_NAME = i;
    a.DARK_MODE_CLASS_NAME = j;
    g["default"] = a
}), 98);


import invariant from 'invariant';
import ExecutionEnvironment from 'ExecutionEnvironment';
import { isRTL } from 'Locale';
import gkx from 'gkx';

const LIGHT_MODE_CLASS_NAME = '__fb-light-mode';
const DARK_MODE_CLASS_NAME = '__fb-dark-mode';

const getVariableMatch = (): RegExp => /var\(--(.*?)\)/g;

class StyleXSheet {
  tag: HTMLStyleElement | null = null;
  injected: boolean = false;
  ruleForPriority: Map<number, string> = new Map();
  rules: string[] = [];
  rootTheme: Record<string, string> | null;
  rootDarkTheme: Record<string, string> | null;
  isSlow: boolean;
  supportsVariables: boolean;
  $1: boolean;
  externalRules: Set<string> = new Set();

  constructor(rootTheme: Record<string, string> | null) {
    this.rootTheme = rootTheme;
    this.rootDarkTheme = null; // You can set the dark theme here if needed.
    this.isSlow = ExecutionEnvironment.canUseDOM ? typeof location === 'object' && typeof location.search === 'string' && location.search.includes('stylex-slow') : false;
    this.supportsVariables = this.checkSupportsVariables();
    this.$1 = isRTL();
  }

  private checkSupportsVariables(): boolean {
    return window.CSS != null && window.CSS.supports != null && window.CSS.supports('--fake-var:0');
  }

  private getTag(): HTMLStyleElement {
    invariant(this.tag != null, 'StyleXSheet tag is not available.');
    return this.tag;
  }

  private insert(css: string, position: number): void {
    this.injected = true;

    if (!ExecutionEnvironment.canUseDOM) {
      this.injectTheme();
      return;
    }

    this.tag = this.createStyleTag();
    this.injectTheme();
  }

  private injectTheme(): void {
    if (gkx('1861546')) {
      return;
    }

    this.rootTheme != null && this.insert(this.createRootThemeCSS(), 0);
    this.rootDarkTheme != null && this.insert(this.createDarkThemeCSS(), 0);
  }

  private createStyleTag(): HTMLStyleElement {
    const styleTag = document.createElement('style');
    styleTag.setAttribute('type', 'text/css');
    styleTag.setAttribute('data-styled', 'true');
    const head = document.head || document.getElementsByTagName('head')[0];
    head || invariant(0, 2655);
    head.appendChild(styleTag);
    return styleTag;
  }

  private createRootThemeCSS(): string {
    return k(':root, .' + LIGHT_MODE_CLASS_NAME, this.rootTheme);
  }

  private createDarkThemeCSS(): string {
    return k('.' + DARK_MODE_CLASS_NAME + ':root, .' + DARK_MODE_CLASS_NAME, this.rootDarkTheme);
  }

  private deleteRule(rule: string): void {
    const index = this.rules.indexOf(rule);
    index >= 0 || invariant(0, 2656, rule);
    this.rules.splice(index, 1);

    if (this.isHeadless()) {
      return;
    }

    const tag = this.getTag();

    if (this.isSlow) {
      const textNode = document.createTextNode(rule);
      tag.insertBefore(textNode, tag.childNodes[index + 1]);
    } else {
      const sheet = tag.sheet;

      if (sheet != null) {
        try {
          sheet.deleteRule(index);
        } catch (e) {}
      }
    }
  }

  private normalizeRule(rule: string): string {
    const { rootTheme, supportsVariables } = this;
    return supportsVariables || rootTheme == null ? rule : rule.replace(getVariableMatch(), (_, variable) => rootTheme[variable]);
  }

  private getInsertPositionForPriority(priority: number): number {
    const existingRule = this.ruleForPriority.get(priority);

    if (existingRule != null) {
      return this.rules.indexOf(existingRule) + 1;
    }

    const sortedPriorities = Array.from(this.ruleForPriority.keys())
      .sort((a, b) => b - a)
      .filter((b) => b > priority);

    if (sortedPriorities.length === 0) {
      return this.rules.length;
    }

    return this.rules.indexOf(this.ruleForPriority.get(sortedPriorities.pop())!) + 1;
  }

  insertRule(css: string, priority: number, key: string): void {
    if (this.externalRules.has(key.trim())) {
      return;
    }

    if (this.rules.includes(css)) {
      return;
    }

    const normalizedRule = this.normalizeRule(css);

    if (this.externalRules.has(normalizedRule.slice(0, normalizedRule.indexOf('{')).trim())) {
      return;
    }

    const insertPosition = this.getInsertPositionForPriority(priority);

    this.rules.splice(insertPosition, 0, normalizedRule);
    this.ruleForPriority.set(priority, normalizedRule);

    if (this.isHeadless()) {
      return;
    }

    const tag = this.getTag();

    if (this.isSlow) {
      const textNode = document.createTextNode(normalizedRule);
      tag.insertBefore(textNode, tag.childNodes[insertPosition]);
    } else {
      const sheet = tag.sheet;

      if (sheet != null) {
        try {
          sheet.insertRule(normalizedRule, insertPosition);
        } catch (e) {}
      }
    }
  }
}

export { LIGHT_MODE_CLASS_NAME, DARK_MODE_CLASS_NAME };

export default StyleXSheet;
