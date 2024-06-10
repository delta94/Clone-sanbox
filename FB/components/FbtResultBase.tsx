__d(
  "FbtResultBase",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (function () {
      function a(a, b) {
        (this.$1 = a),
          (this.__errorListener = b),
          (this.$3 = !1),
          (this.$2 = null);
      }
      var b = a.prototype;
      b.flattenToArray = function () {
        return a.flattenToArray(this.$1);
      };
      b.getContents = function () {
        return this.$1;
      };
      b.toString = function () {
        if (Object.isFrozen(this)) return this.$4();
        if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
        this.$3 = !0;
        try {
          return this.$4();
        } finally {
          this.$3 = !1;
        }
      };
      b.$4 = function () {
        if (this.$2 != null) return this.$2;
        var b = "",
          c = this.flattenToArray();
        for (var d = 0; d < c.length; ++d) {
          var e = c[d];
          if (typeof e === "string" || e instanceof a) b += e.toString();
          else {
            var f;
            (f = this.__errorListener) == null
              ? void 0
              : f.onStringSerializationError == null
              ? void 0
              : f.onStringSerializationError(e);
          }
        }
        Object.isFrozen(this) || (this.$2 = b);
        return b;
      };
      b.toJSON = function () {
        return this.toString();
      };
      a.flattenToArray = function (b) {
        var c = [];
        for (var d = 0; d < b.length; ++d) {
          var e = b[d];
          Array.isArray(e)
            ? c.push.apply(c, a.flattenToArray(e))
            : e instanceof a
            ? c.push.apply(c, e.flattenToArray())
            : c.push(e);
        }
        return c;
      };
      return a;
    })();
    [
      "anchor",
      "big",
      "blink",
      "bold",
      "charAt",
      "charCodeAt",
      "codePointAt",
      "contains",
      "endsWith",
      "fixed",
      "fontcolor",
      "fontsize",
      "includes",
      "indexOf",
      "italics",
      "lastIndexOf",
      "link",
      "localeCompare",
      "match",
      "normalize",
      "repeat",
      "replace",
      "search",
      "slice",
      "small",
      "split",
      "startsWith",
      "strike",
      "sub",
      "substr",
      "substring",
      "sup",
      "toLocaleLowerCase",
      "toLocaleUpperCase",
      "toLowerCase",
      "toUpperCase",
      "trim",
      "trimLeft",
      "trimRight",
    ].forEach(function (a) {
      g.prototype[a] = function () {
        var b;
        (b = this.__errorListener) == null
          ? void 0
          : b.onStringMethodUsed == null
          ? void 0
          : b.onStringMethodUsed(a);
        for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
          d[e] = arguments[e];
        return String.prototype[a].apply(this, d);
      };
    });
    a = g;
    e.exports = a;
  },
  null
);

interface ErrorListener {
  onStringSerializationError?(error: any): void;
  onStringMethodUsed?(method: string): void;
}

class FbtResultBase {
  private $1: any[];
  private __errorListener?: ErrorListener;
  private $3: boolean;
  private $2: string | null;

  constructor(contents: any[], errorListener?: ErrorListener) {
    this.$1 = contents;
    this.__errorListener = errorListener;
    this.$3 = false;
    this.$2 = null;
  }

  public flattenToArray(): any[] {
    return FbtResultBase.flattenToArray(this.$1);
  }

  public getContents(): any[] {
    return this.$1;
  }

  public toString(): string {
    if (Object.isFrozen(this)) return this.$4();
    if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
    this.$3 = true;
    try {
      return this.$4();
    } finally {
      this.$3 = false;
    }
  }

  private $4(): string {
    if (this.$2 !== null) return this.$2;
    let str = "";
    const contents = this.flattenToArray();
    for (let i = 0; i < contents.length; ++i) {
      const item = contents[i];
      if (typeof item === "string" || item instanceof FbtResultBase) {
        str += item.toString();
      } else {
        if (this.__errorListener?.onStringSerializationError) {
          this.__errorListener.onStringSerializationError(item);
        }
      }
    }
    if (!Object.isFrozen(this)) {
      this.$2 = str;
    }
    return str;
  }

  public toJSON(): string {
    return this.toString();
  }

  public static flattenToArray(items: any[]): any[] {
    const flattened: any[] = [];
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      if (Array.isArray(item)) {
        flattened.push(...FbtResultBase.flattenToArray(item));
      } else if (item instanceof FbtResultBase) {
        flattened.push(...item.flattenToArray());
      } else {
        flattened.push(item);
      }
    }
    return flattened;
  }
}

[
  "anchor",
  "big",
  "blink",
  "bold",
  "charAt",
  "charCodeAt",
  "codePointAt",
  "contains",
  "endsWith",
  "fixed",
  "fontcolor",
  "fontsize",
  "includes",
  "indexOf",
  "italics",
  "lastIndexOf",
  "link",
  "localeCompare",
  "match",
  "normalize",
  "repeat",
  "replace",
  "search",
  "slice",
  "small",
  "split",
  "startsWith",
  "strike",
  "sub",
  "substr",
  "substring",
  "sup",
  "toLocaleLowerCase",
  "toLocaleUpperCase",
  "toLowerCase",
  "toUpperCase",
  "trim",
  "trimLeft",
  "trimRight",
].forEach(function (method) {
  FbtResultBase.prototype[method] = function () {
    if (this.__errorListener?.onStringMethodUsed) {
      this.__errorListener.onStringMethodUsed(method);
    }
    const args = Array.from(arguments);
    return String.prototype[method].apply(this, args);
  };
});

export { FbtResultBase };
