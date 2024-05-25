__d(
  "LS",
  [
    "FBLogger",
    "I64",
    "LSDict",
    "LSInt64Lite",
    "LSIterationHelpers",
    "LSIterationOperations",
    "LSJson",
    "LSVec",
    "MessengerLogHistory",
    "MetaConfig",
    "ODS",
    "ReStoreKeyComparer",
    "XPlatReactTextDecoder",
    "XPlatReactTextEncoder",
    "base64Binary",
    "cr:1088",
    "cr:4790",
    "emptyFunction",
    "gkx",
    "qpl",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;

    function k() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["2"]);
      k = function () {
        return a;
      };
      return a;
    }

    function l() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["0"]);
      l = function () {
        return a;
      };
      return a;
    }

    function m() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["0"]);
      m = function () {
        return a;
      };
      return a;
    }

    function n() {
      var a = babelHelpers.taggedTemplateLiteralLoose(["2"]);
      n = function () {
        return a;
      };
      return a;
    }
    var o = "LS_WEB";

    function p(a) {
      return a.name.match(/secure_|inbox(?!_)/i);
    }
    var q = d("MessengerLogHistory").getInstance("ls");

    function r(a) {
      return d("base64Binary").decode(a).buffer;
    }
    var s = {
      compareTo: function (a, b) {
        a = new Uint8Array(a);
        b = new Uint8Array(b);
        var c = Math.min(a.length, b.length);
        for (var d = 0; d < c; d++) {
          var e = a[d] - b[d];
          if (e !== 0) return e;
        }
        return a.length === b.length ? 0 : a.length - b.length;
      },
      eq: function (a, b) {
        if (a == null && b == null) return !0;
        if (a == null || b == null) return !1;
        a = new Uint8Array(a);
        b = new Uint8Array(b);
        if (a.length !== b.length) return !1;
        for (var c = 0; c < a.length; c++) if (a[c] !== b[c]) return !1;
        return !0;
      },
      ge: function (a, b) {
        return s.compareTo(a, b) >= 0;
      },
      gt: function (a, b) {
        return s.compareTo(a, b) > 0;
      },
      le: function (a, b) {
        return s.compareTo(a, b) <= 0;
      },
      lt: function (a, b) {
        return s.compareTo(a, b) < 0;
      },
      neq: function (a, b) {
        return !s.eq(a, b);
      },
      of_string: function (a) {
        if (a == null) return void 0;
        var b = new (d("XPlatReactTextEncoder").TextEncoder)();
        return b.encode(a).buffer;
      },
      to_string: function (a) {
        if (a == null) return void 0;
        var b = new (d("XPlatReactTextDecoder").TextDecoder)();
        return b.decode(a);
      },
    };

    function t(a) {
      if (a.length !== 1)
        throw c("unrecoverableViolation")(
          "only literal strings supported",
          "messenger_web_product"
        );
      a = a[0];
      var b = parseInt(a.substr(-8), 16);
      a = parseInt(a.substr(0, a.length - 8), 16);
      return (h || (h = d("I64"))).mk(
        ((b >>> 1) + (a & 1) * 2147483648) ^ -(b & 1),
        (a >>> 1) ^ -(b & 1)
      );
    }

    function u(a, b) {
      if (typeof a === "object" && !Array.isArray(a)) {
        var d, e;
        if (b === "asc") {
          Object.prototype.hasOwnProperty.call(a, "gt") && (d = [a.gt, 1]);
          if (Object.prototype.hasOwnProperty.call(a, "gte")) {
            if (d != null)
              throw c("unrecoverableViolation")(
                "Cannot specify both gt and gte",
                "messenger_web_product"
              );
            d = [a.gte, 0];
          }
          Object.prototype.hasOwnProperty.call(a, "lt") && (e = [a.lt, 1]);
          if (Object.prototype.hasOwnProperty.call(a, "lte")) {
            if (e != null)
              throw c("unrecoverableViolation")(
                "Cannot specify both lt and lte",
                "≈"
              );
            e = [a.lte, 0];
          }
        } else {
          Object.prototype.hasOwnProperty.call(a, "lt") && (d = [a.lt, 1]);
          if (Object.prototype.hasOwnProperty.call(a, "lte")) {
            if (d != null)
              throw c("unrecoverableViolation")(
                "Cannot specify both lt and lte",
                "messenger_web_product"
              );
            d = [a.lte, 0];
          }
          Object.prototype.hasOwnProperty.call(a, "gt") && (e = [a.gt, 1]);
          if (Object.prototype.hasOwnProperty.call(a, "gte")) {
            if (e != null)
              throw c("unrecoverableViolation")(
                "Cannot specify both gt and gte",
                "messenger_web_product"
              );
            e = [a.gte, 0];
          }
        }
        return {
          end: e,
          start: d,
        };
      }
      return {
        end: [a, 0],
        start: [a, 0],
      };
    }

    function v(a, b, e, f, g) {
      var h = a[b.name];
      return {
        add: async function (a) {
          d("LSIterationHelpers").isTranportKeyEnforcedTable(b.name) &&
            g &&
            (a.transportKey = "FBBroker"),
            await h.add(a);
        },
        fetch: function () {
          for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++)
            c[i] = arguments[i];
          return d("LSIterationHelpers").fetch(
            c.length === 0 ? [[[[]], void 0]] : c,
            "asc",
            b,
            e,
            h,
            u,
            g,
            f.join(", ")
          );
        },
        fetchDesc: function () {
          for (var a = arguments.length, c = new Array(a), i = 0; i < a; i++)
            c[i] = arguments[i];
          return d("LSIterationHelpers").fetch(
            c.length === 0 ? [[[[]], void 0]] : c,
            "desc",
            b,
            e,
            h,
            u,
            g,
            f.join(", ")
          );
        },
        peekNextAutoIncrementId: function () {
          return h.peekNextAutoIncrementId();
        },
        put: async function (a) {
          d("LSIterationHelpers").isTranportKeyEnforcedTable(b.name) &&
            g &&
            (a.transportKey = "FBBroker");
          var e = b.primaryKeyIds.map(function (b) {
            if (a[b] !== void 0) return a[b];
            throw c("unrecoverableViolation")(
              "primary key must be defined on object",
              "messenger_web_product"
            );
          });
          await h.delete.apply(h, e);
          await h.add(
            d("LSIterationHelpers").stripUndefinedProperties(
              babelHelpers.extends({}, a)
            )
          );
        },
      };
    }

    function w(a, b, d, e, f, g) {
      return {
        table: function (h) {
          h = d.tableIds[h];
          if (b === 0 && p(h))
            throw c("unrecoverableViolation")(
              "cannot access secure table from dynamic mode",
              "messenger_web_product"
            );
          return v(a, h, e, f, g);
        },
      };
    }

    function x(a) {
      var b = "unknown_sproc";
      a = a.displayName;
      var c = /\[from (.*)\]/;
      c = c.exec(a);
      c != null && (b = c[1]);
      return b;
    }
    var y = (function () {
      var a = 0;

      function d(d) {
        var e = d.args,
          f = d.shouldLog;
        d = d.sprocName;
        b("cr:1088") == null
          ? void 0
          : b("cr:1088").logStoredProcedureCall(d, e);
        if (!f || !b("cr:4790")) return;
        e = ++a;
        b("cr:4790").markerStart(c("qpl")._(25302991, "143"), e);
        b("cr:4790").markerAnnotate(
          c("qpl")._(25302991, "143"),
          {
            string: {
              name: d,
            },
          },
          {
            instanceKey: e,
          }
        );
        return e;
      }

      function e(a, d, e) {
        a = a.shouldLog;
        if (!a || d == null) return;
        b("cr:4790") == null
          ? void 0
          : b("cr:4790").markerEnd(c("qpl")._(25302991, "143"), e, d);
      }

      function f(a) {
        return c("gkx")("26381")
          ? Math.random() * c("MetaConfig")._("10") < 1
          : !1;
      }
      return {
        call: d,
        logSprocDone: e,
        shouldLogSproc: f,
      };
    })();

    function z(a, b, c) {
      b = (h || (h = d("I64"))).to_string(b);
      var e = function (a) {
        return !c ? "" : c[a] || "";
      };
      return a(b, e).toString();
    }

    function A(a, b, c) {
      b = (h || (h = d("I64"))).to_string(b);
      var e = function (a) {
        return !c ? "" : c[a] || "";
      };
      return a(b, e).toString();
    }

    function B(a, b, e, f, g, h, p, v, C) {
      p === void 0 && (p = {});
      v === void 0 && (v = void 0);
      var D = [],
        E = w(h, a, b, p, D, C),
        F = async function (b, d) {
          var f;
          if (typeof d === "string") {
            f = e[d.toString()];
            if (f == null)
              throw c("unrecoverableViolation")(
                "Attempted to call unimplemented native type op with type: " +
                  b +
                  " and id: " +
                  d,
                "messenger_web_product"
              );
            f.load && (f = await f.load());
            f = f.call;
          } else f = d.call;
          for (
            var g = arguments.length, i = new Array(g > 2 ? g - 2 : 0), j = 2;
            j < g;
            j++
          )
            i[j - 2] = arguments[j];
          return f.apply(void 0, [h, a].concat(i));
        },
        G = async function (b) {
          var d;
          if (typeof b === "string") {
            d = e[b + ".bs"] || e[b + ".nop"];
            if (d == null)
              throw c("unrecoverableViolation")(
                "Attempted to call unimplemented native op with id: " + b,
                "messenger_web_product"
              );
            d.load && (d = await d.load());
            d = d;
          } else d = b;
          try {
            for (
              var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), i = 1;
              i < f;
              i++
            )
              g[i - 1] = arguments[i];
            return d.apply(void 0, [h, a].concat(g));
          } catch (a) {
            c("FBLogger")("messenger_web_product")
              .catching(a)
              .addMetadata(o, "NATIVE_OP_ID", b.toString())
              .warn("Native operation %s failed", b.toString());
            throw a;
          }
        },
        H = function (a) {
          return a.slice(1).reduce(function (a, b) {
            return a.then(b);
          }, a[0]());
        },
        I = function (a, b) {
          return a.slice(b);
        };
      return {
        Map: c("LSDict"),
        blob: r,
        blobs: s,
        constructor: {
          n: t,
        },
        count: d("LSIterationOperations").count,
        createArray: function () {
          return c("LSVec").ofArray([]);
        },
        createArrayWithElements: function () {
          for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
            b[d] = arguments[d];
          return c("LSVec").ofArray(b);
        },
        ct: d("LSIterationOperations").count,
        db: E,
        fe: d("LSIterationOperations").forEach,
        filter: d("LSIterationOperations").filter,
        forEach: d("LSIterationOperations").forEach,
        ftr: d("LSIterationOperations").filter,
        gb: d("LSIterationOperations").groupBy,
        groupBy: d("LSIterationOperations").groupBy,
        i64: c("LSInt64Lite"),
        islc: d("LSIterationOperations").slice,
        like: function (a, b) {
          b = b
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            .replace(/%/g, ".*")
            .replace(/_/g, ".");
          return RegExp(b).test(a);
        },
        localize: function (a, b) {
          return z(f, a, b);
        },
        localizeAsync: function (a, b) {
          return Promise.resolve(z(f, a, b));
        },
        localizeV2: function (a, b) {
          return A(g, a, b);
        },
        localizeV2Async: function (a, b) {
          return Promise.resolve(A(g, a, b));
        },
        logger: function (a) {
          if (v)
            return {
              debug: v,
              info: v,
              mustfix: v,
              warn: v,
            };
          var b = c("FBLogger")("messenger_web_product");
          if (
            a.startsWith("epoch mismatch") ||
            a.startsWith("cursor mismatch")
          ) {
            a = function (a) {
              q.error(a, "error");
              a =
                a != null
                  ? a.replace(/[\s,]+/g, "_")
                  : "epoch_or_cursor_mismatch";
              (i || (i = d("ODS"))).bumpEntityKey(3185, "lsplatform", a);
            };
            return {
              debug: function (a) {
                return q.debug(a);
              },
              info: function (a) {
                return q.debug(a);
              },
              mustfix: a,
              warn: a,
            };
          } else {
            c("gkx")("26382") || (b.info = c("emptyFunction"));
            return b;
          }
        },
        loopAsync: function (a, b) {
          function d(e) {
            var f;
            return c("LSInt64Lite").lt(e, a)
              ? b(e).then(function () {
                  return d(c("LSInt64Lite").add(e, t(n())));
                })
              : ((f = self.Promise) != null ? f : Promise).resolve();
          }
          return d(t(m()));
        },
        loopSync: function (a, b) {
          for (
            var d = t(l());
            c("LSInt64Lite").lt(d, a);
            d = c("LSInt64Lite").add(d, t(k()))
          )
            b(d);
        },
        merge: function () {
          function a(a, b) {
            return (j || (j = d("ReStoreKeyComparer"))).compareValue(a, b) > 0
              ? a
              : b;
          }

          function b(a, b) {
            return (j || (j = d("ReStoreKeyComparer"))).compareValue(
              [a[0], -a[1]],
              [b[0], -b[1]]
            ) < 0
              ? a
              : b;
          }
          for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++)
            e[f] = arguments[f];
          var g = e.reduce(function (c, d) {
            d = u(d, "asc");
            return {
              end: c.end && d.end ? b(d.end, c.end) : d.end || c.end,
              start:
                c.start && d.start ? a(d.start, c.start) : d.start || c.start,
            };
          }, {});
          return babelHelpers.extends(
            {},
            g.start
              ? g.start[1]
                ? {
                    gt: g.start[0],
                  }
                : {
                    gte: g.start[0],
                  }
              : null,
            g.end
              ? g.end[1]
                ? {
                    lt: g.end[0],
                  }
                : {
                    lte: g.end[0],
                  }
              : null
          );
        },
        n: t,
        nativeOperation: G,
        nativeTypeOperation: F,
        nop: G,
        notnull: function (a) {
          if (a === null)
            throw c("unrecoverableViolation")(
              "value should not be null",
              "messenger_web_product"
            );
          return a;
        },
        ntop: F,
        print: function (a) {},
        resolve: function (a) {
          var b;
          return ((b = self.Promise) != null ? b : Promise).resolve(a);
        },
        rm: c("LSInt64Lite").of_int32(a),
        sb: d("LSIterationOperations").sortBy,
        seq: H,
        sequence: H,
        slc: I,
        slice: I,
        sortBy: d("LSIterationOperations").sortBy,
        sp: async function (d) {
          for (
            var i = arguments.length, j = new Array(i > 1 ? i - 1 : 0), k = 1;
            k < i;
            k++
          )
            j[k - 1] = arguments[k];
          var l;
          if (typeof d === "string") {
            l = e[d];
            if (l == null)
              throw c("unrecoverableViolation")(
                "Attempted to call unimplemented stored procedure with id: " +
                  d,
                "messenger_web_product"
              );
            l.load && (l = await l.load());
          } else l = d;
          var m = this;
          switch (a) {
            case 0:
              m = B(2, b, e, f, g, h, p, v, C);
              break;
            case 2:
              m = B(1, b, e, f, g, h, p, v, C);
              break;
          }
          var n = x(l),
            q = y.shouldLogSproc(n),
            r = {
              args: j,
              shouldLog: q,
              sprocName: n,
            };
          D.push(n);
          var s;
          try {
            s = y.call(r);
            var t = await l.apply(void 0, j.concat([m]));
            y.logSprocDone(r, s, 2);
            return t;
          } catch (a) {
            c("FBLogger")("messenger_web_product")
              .catching(a)
              .addMetadata(o, "SPROC_STACK", D.join("\n"))
              .warn("Sproc %s failed", d);
            y.logSprocDone(r, s, 3);
            throw a;
          } finally {
            D.pop();
          }
        },
        storedProcedure: async function (d) {
          for (
            var i = arguments.length, j = new Array(i > 1 ? i - 1 : 0), k = 1;
            k < i;
            k++
          )
            j[k - 1] = arguments[k];
          var l;
          if (typeof d === "string") {
            l = e[d];
            if (l == null)
              throw c("unrecoverableViolation")(
                "Attempted to call unimplemented stored procedure with id: " +
                  d,
                "messenger_web_product"
              );
            l.load && (l = await l.load());
          } else l = d;
          var m = this;
          switch (a) {
            case 0:
              m = B(2, b, e, f, g, h, p, v, C);
              break;
            case 2:
              m = B(1, b, e, f, g, h, p, v, C);
              break;
          }
          var n = x(l),
            q = y.shouldLogSproc(n),
            r = {
              args: j,
              shouldLog: q,
              sprocName: n,
            };
          D.push(n);
          var s;
          try {
            s = y.call(r);
            var t = await l.apply(void 0, j.concat([m]));
            y.logSprocDone(r, s, 2);
            return t;
          } catch (a) {
            c("FBLogger")("messenger_web_product")
              .catching(a)
              .addMetadata(o, "SPROC_STACK", D.join("\n"))
              .warn("Sproc %s failed", d);
            y.logSprocDone(r, s, 3);
            throw a;
          } finally {
            D.pop();
          }
        },
        ta: d("LSIterationOperations").toArray,
        throw: function (a) {
          throw c("unrecoverableViolation")(a, "messenger_comet");
        },
        toArray: d("LSIterationOperations").toArray,
        toJSON: function (a) {
          return d("LSJson").stringify(a);
        },
      };
    }
    B.n = t;
    g.default = B;
  },
  98
);

import { I64, ODS, TextDecoder, TextEncoder } from "fb-modules";
import { MessengerLogHistory } from "MessengerLogHistory";
import { ReStoreKeyComparer } from "ReStoreKeyComparer";
import { base64Binary } from "base64Binary";
import { XPlatReactTextEncoder } from "XPlatReactTextEncoder";
import { unrecoverableViolation } from "unrecoverableViolation";
import { QuickPerformanceLogger } from "QuickPerformanceLogger";

import {
  LSDict,
  LSInt64Lite,
  LSIterationHelpers,
  LSIterationOperations,
  LSJson,
  LSVec,
} from "ls-modules";

const LS_WEB = "LS_WEB";

function isSecureOrInboxTable(table: { name: string }) {
  return table.name.match(/secure_|inbox(?!_)/i);
}

const logHistory = MessengerLogHistory.getInstance("ls");

function decodeBase64ToBinary(base64String: string) {
  return base64Binary.decode(base64String).buffer;
}

const binaryOperations = {
  compareTo: (a: ArrayBuffer, b: ArrayBuffer) => {
    const aArr = new Uint8Array(a);
    const bArr = new Uint8Array(b);
    const minLength = Math.min(aArr.length, bArr.length);
    for (let i = 0; i < minLength; i++) {
      const diff = aArr[i] - bArr[i];
      if (diff !== 0) return diff;
    }
    return aArr.length === bArr.length ? 0 : aArr.length - bArr.length;
  },
  eq: (a: ArrayBuffer | null, b: ArrayBuffer | null) => {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    const aArr = new Uint8Array(a);
    const bArr = new Uint8Array(b);
    if (aArr.length !== bArr.length) return false;
    for (let i = 0; i < aArr.length; i++) {
      if (aArr[i] !== bArr[i]) return false;
    }
    return true;
  },
  ge: (a: ArrayBuffer, b: ArrayBuffer) => binaryOperations.compareTo(a, b) >= 0,
  gt: (a: ArrayBuffer, b: ArrayBuffer) => binaryOperations.compareTo(a, b) > 0,
  le: (a: ArrayBuffer, b: ArrayBuffer) => binaryOperations.compareTo(a, b) <= 0,
  lt: (a: ArrayBuffer, b: ArrayBuffer) => binaryOperations.compareTo(a, b) < 0,
  neq: (a: ArrayBuffer | null, b: ArrayBuffer | null) =>
    !binaryOperations.eq(a, b),
  of_string: (a: string | null) => {
    if (a == null) return undefined;
    const encoder = new XPlatReactTextEncoder.TextEncoder();
    return encoder.encode(a).buffer;
  },
  to_string: (a: ArrayBuffer | null) => {
    if (a == null) return undefined;
    const decoder = new XPlatReactTextEncoder.TextDecoder();
    return decoder.decode(a);
  },
};

function parseHexString(hexStrings: Array<string>) {
  if (hexStrings.length !== 1)
    throw unrecoverableViolation(
      "only literal strings supported",
      "messenger_web_product"
    );
  const str = hexStrings[0];
  const b = parseInt(str.substr(-8), 16);
  const a = parseInt(str.substr(0, str.length - 8), 16);
  return I64.mk(
    ((b >>> 1) + (a & 1) * 2147483648) ^ -(b & 1),
    (a >>> 1) ^ -(b & 1)
  );
}

function parseRange(
  range: { [key: string]: any },
  order: "asc" | "desc"
): { start?: [any, 1 | 0]; end?: [any, 1 | 0] } {
  if (typeof range === "object" && !Array.isArray(range)) {
    let start, end;
    if (order === "asc") {
      if (Object.prototype.hasOwnProperty.call(range, "gt")) {
        start = [range.gt, 1];
      }
      if (Object.prototype.hasOwnProperty.call(range, "gte")) {
        if (start != null)
          throw unrecoverableViolation(
            "Cannot specify both gt and gte",
            "messenger_web_product"
          );
        start = [range.gte, 0];
      }
      if (Object.prototype.hasOwnProperty.call(range, "lt")) {
        end = [range.lt, 1];
      }
      if (Object.prototype.hasOwnProperty.call(range, "lte")) {
        if (end != null)
          throw unrecoverableViolation(
            "Cannot specify both lt and lte",
            "messenger_web_product"
          );
        end = [range.lte, 0];
      }
    } else {
      if (Object.prototype.hasOwnProperty.call(range, "lt")) {
        start = [range.lt, 1];
      }
      if (Object.prototype.hasOwnProperty.call(range, "lte")) {
        if (start != null)
          throw unrecoverableViolation(
            "Cannot specify both lt and lte",
            "messenger_web_product"
          );
        start = [range.lte, 0];
      }
      if (Object.prototype.hasOwnProperty.call(range, "gt")) {
        end = [range.gt, 1];
      }
      if (Object.prototype.hasOwnProperty.call(range, "gte")) {
        if (end != null)
          throw unrecoverableViolation(
            "Cannot specify both gt and gte",
            "messenger_web_product"
          );
        end = [range.gte, 0];
      }
    }
    return { start, end };
  }
  return { start: [range, 0], end: [range, 0] };
}

function createTableOperations(
  tables: { [key: string]: any },
  table: { name: string; primaryKeyIds: Array<string> },
  nativeOperations: { [key: string]: any },
  tableColumns: Array<string>,
  isRemoteTable: boolean
) {
  const tableObj = tables[table.name];
  return {
    add: async (data: any) => {
      if (
        LSIterationHelpers.isTranportKeyEnforcedTable(table.name) &&
        isRemoteTable
      ) {
        data.transportKey = "FBBroker";
      }
      await tableObj.add(data);
    },
    fetch: (...args: Array<any>) => {
      const queryArgs = args.length === 0 ? [[[[]], undefined]] : args;
      return LSIterationHelpers.fetch(
        queryArgs,
        "asc",
        table,
        nativeOperations,
        tableObj,
        parseRange,
        isRemoteTable,
        tableColumns.join(", ")
      );
    },
    fetchDesc: (...args: Array<any>) => {
      const queryArgs = args.length === 0 ? [[[[]], undefined]] : args;
      return LSIterationHelpers.fetch(
        queryArgs,
        "desc",
        table,
        nativeOperations,
        tableObj,
        parseRange,
        isRemoteTable,
        tableColumns.join(", ")
      );
    },
    peekNextAutoIncrementId: () => tableObj.peekNextAutoIncrementId(),
    put: async (data: any) => {
      if (
        LSIterationHelpers.isTranportKeyEnforcedTable(table.name) &&
        isRemoteTable
      ) {
        data.transportKey = "FBBroker";
      }
      const primaryKeys = table.primaryKeyIds.map((key) => {
        if (data[key] !== undefined) return data[key];
        throw new Error("primary key must be defined on object");
      });
      await tableObj.delete(...primaryKeys);
      await tableObj.add(
        LSIterationHelpers.stripUndefinedProperties({ ...data })
      );
    },
  };
}

function createDatabaseOperations(
  tables: { [key: string]: any },
  mode: number,
  tableDefinitions: { tableIds: { [key: string]: any } },
  nativeOperations: { [key: string]: any },
  tableColumns: Array<string>,
  isRemoteTable: boolean
) {
  return {
    table: (tableName: string) => {
      const tableObj = tableDefinitions.tableIds[tableName];
      if (mode === 0 && isSecureOrInboxTable(tableObj)) {
        throw new Error("cannot access secure table from dynamic mode");
      }
      return createTableOperations(
        tables,
        tableObj,
        nativeOperations,
        tableColumns,
        isRemoteTable
      );
    },
  };
}

function getSprocName(sprocFunction: { displayName: string }) {
  let sprocName = "unknown_sproc";
  const displayName = sprocFunction.displayName;
  const regex = /\[from (.*)\]/;
  const match = regex.exec(displayName);
  if (match != null) {
    sprocName = match[1];
  }
  return sprocName;
}

const sprocLogger = (() => {
  let sprocCallCounter = 0;

  function startSprocCall({
    args,
    shouldLog,
    sprocName,
  }: {
    args: any;
    shouldLog: boolean;
    sprocName: string;
  }) {
    if (!shouldLog || !QuickPerformanceLogger) return;
    const markerInstanceKey = ++sprocCallCounter;
    // @ts-ignore
    QuickPerformanceLogger.markerStart(
      qpl._("25302991", "143"),
      markerInstanceKey
    );
    // @ts-ignore
    QuickPerformanceLogger.markerAnnotate(
      qpl._("25302991", "143"),
      { string: { name: sprocName } },
      { instanceKey: markerInstanceKey }
    );
    return markerInstanceKey;
  }

  function logSprocDone(
    { shouldLog }: { shouldLog: boolean },
    result: any,
    markerInstanceKey: number
  ) {
    if (!shouldLog || markerInstanceKey == null) return;
    // @ts-ignore
    if (QuickPerformanceLogger != null) {
      // @ts-ignore
      QuickPerformanceLogger.markerEnd(
        qpl._("25302991", "143"),
        markerInstanceKey,
        result
      );
    }
  }

  function shouldLogSproc(sprocName: string) {
    return gkx("26381") ? Math.random() * MetaConfig._("10") < 1 : false;
  }

  return {
    call: startSprocCall,
    logSprocDone,
    shouldLogSproc,
  };
})();

function localizeString(
  localizationFunction: any,
  int64Value: I64,
  translations?: { [key: string]: string }
) {
  const stringValue = I64.to_string(int64Value);
  const getTranslation = (key: string) =>
    translations ? translations[key] || "" : "";
  return localizationFunction(stringValue, getTranslation).toString();
}

function createEnvironment(
  mode: number,
  tableDefinitions: { tableIds: any },
  nativeOperations: { [key: string]: any },
  tableColumns: Array<string>,
  localizationFunctions: any,
  tables: any,
  tableConfigs: { [key: string]: any } = {},
  logger: any,
  isRemoteTable: boolean
) {
  const sprocStack: Array<string> = [];
  const databaseOperations = createDatabaseOperations(
    tables,
    mode,
    tableDefinitions,
    nativeOperations,
    tableColumns,
    isRemoteTable
  );

  const nativeTypeOperation = async (
    operationType: string,
    nativeOperation: any,
    ...args: Array<any>
  ) => {
    let operation;
    if (typeof nativeOperation === "string") {
      operation = nativeOperations[nativeOperation.toString()];
      if (operation == null) {
        throw unrecoverableViolation(
          `Attempted to call unimplemented native type op with type: ${operationType} and id: ${nativeOperation}`
        );
      }
      if (operation.load) {
        operation = await operation.load();
      }
      operation = operation.call;
    } else {
      operation = nativeOperation.call;
    }
    return operation.apply(undefined, [tables, mode, ...args]);
  };

  const nativeOperation = async (nativeOperation: any, ...args: Array<any>) => {
    let operation;
    if (typeof nativeOperation === "string") {
      operation =
        nativeOperations[`${nativeOperation}.bs`] ||
        nativeOperations[`${nativeOperation}.nop`];
      if (operation == null) {
        throw new Error(
          `Attempted to call unimplemented native op with id: ${nativeOperation}`
        );
      }
      if (operation.load) {
        operation = await operation.load();
      }
    } else {
      operation = nativeOperation;
    }
    try {
      return operation.apply(undefined, [tables, mode, ...args]);
    } catch (err) {
      FBLogger("messenger_web_product")
        .catching(err)
        .addMetadata(LS_WEB, "NATIVE_OP_ID", nativeOperation.toString())
        .warn(`Native operation ${nativeOperation.toString()} failed`);
      throw err;
    }
  };

  const executeSequentially = (operations: Array<() => Promise<any>>) =>
    operations.slice(1).reduce((acc, curr) => acc.then(curr), operations[0]());

  const sliceArray = (array: Array<any>, startIndex: number) =>
    array.slice(startIndex);

  return {
    Map: LSDict,
    blob: decodeBase64ToBinary,
    blobs: binaryOperations,
    constructor: {
      n: parseHexString,
    },
    count: LSIterationOperations.count,
    createArray: () => LSVec.ofArray([]),
    createArrayWithElements: (...elements: Array<any>) =>
      LSVec.ofArray(elements),
    ct: LSIterationOperations.count,
    db: databaseOperations,
    fe: LSIterationOperations.forEach,
    filter: LSIterationOperations.filter,
    forEach: LSIterationOperations.forEach,
    ftr: LSIterationOperations.filter,
    gb: LSIterationOperations.groupBy,
    groupBy: LSIterationOperations.groupBy,
    i64: LSInt64Lite,
    islc: LSIterationOperations.slice,
    like: (str: string, pattern: string) => {
      const regex = pattern
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/%/g, ".*")
        .replace(/_/g, ".");
      return RegExp(regex).test(str);
    },
    localize: (func: any, translations?: { [key: string]: string }) =>
      localizeString(localizationFunctions.f, func, translations),
    localizeAsync: (func: any, translations?: { [key: string]: string }) =>
      Promise.resolve(
        localizeString(localizationFunctions.f, func, translations)
      ),
    localizeV2: (func: any, translations?: { [key: string]: string }) =>
      localizeString(localizationFunctions.g, func, translations),
    localizeV2Async: (func: any, translations?: { [key: string]: string }) =>
      Promise.resolve(
        localizeString(localizationFunctions.g, func, translations)
      ),
    logger: (errorMessage: string) => {
      if (logger) {
        return {
          debug: logger,
          info: logger,
          mustfix: logger,
          warn: logger,
        };
      }
      const fbLogger = FBLogger("messenger_web_product");
      if (
        errorMessage.startsWith("epoch mismatch") ||
        errorMessage.startsWith("cursor mismatch")
      ) {
        const logError = (message: string | null) => {
          if (message != null) {
            logHistory.error(message, "error");
            const key =
              message.replace(/[\s,]+/g, "_") || "epoch_or_cursor_mismatch";
            ODS.bumpEntityKey(3185, "lsplatform", key);
          }
        };
        return {
          debug: (message: string) => logHistory.debug(message),
          info: (message: string) => logHistory.debug(message),
          mustfix: logError,
          warn: logError,
        };
      } else {
        if (!gkx("26382")) {
          fbLogger.info = emptyFunction;
        }
        return fbLogger;
      }
    },
    loopAsync: (endValue: I64, callback: (e: I64) => Promise<void>) => {
      const iterateLoop = async (e: I64) => {
        if (LSInt64Lite.lt(e, endValue)) {
          await callback(e);
          return iterateLoop(LSInt64Lite.add(e, parseHexString(["2"])));
        }
        return (self.Promise || Promise).resolve();
      };
      return iterateLoop(parseHexString(["0"]));
    },
    loopSync: (endValue: I64, callback: (d: I64) => void) => {
      for (
        let d = parseHexString(["0"]);
        LSInt64Lite.lt(d, endValue);
        d = LSInt64Lite.add(d, parseHexString(["2"]))
      ) {
        callback(d);
      }
    },
    merge: (...args: Array<{ [key: string]: any }>) => {
      const compareValue = (a: [any, number], b: [any, number]) =>
        ReStoreKeyComparer.compareValue(a, b) > 0 ? a : b;
      const compareValueDesc = (a: [any, number], b: [any, number]) =>
        ReStoreKeyComparer.compareValue([a[0], -a[1]], [b[0], -b[1]]) < 0
          ? a
          : b;
      const result = args.reduce(
        (acc, curr) => {
          const d = parseRange(curr, "asc");
          return {
            end:
              acc.end && d.end
                ? compareValueDesc(d.end, acc.end)
                : d.end || acc.end,
            start:
              acc.start && d.start
                ? compareValue(d.start, acc.start)
                : d.start || acc.start,
          };
        },
        { start: undefined, end: undefined }
      );
      return {
        ...(result.start
          ? result.start[1]
            ? { gt: result.start[0] }
            : { gte: result.start[0] }
          : null),
        ...(result.end
          ? result.end[1]
            ? { lt: result.end[0] }
            : { lte: result.end[0] }
          : null),
      };
    },
    n,
    nativeOperation,
    nativeTypeOperation,
    nop: nativeOperation,
    notnull: (a) => {
      if (a === null) throw new Error("value should not be null");
      return a;
    },
    ntop: nativeTypeOperation,
    print: () => {},
    resolve: (a) => Promise.resolve(a),
    rm,
    sb: LSIterationOperations.sortBy,
    seq,
    sequence: seq,
    slc: slice,
    slice,
    sortBy: LSIterationOperations.sortBy,
    sp: async (...args: any[]) => {
      const [id, ...rest] = args;
      let sproc;
      if (typeof id === "string") {
        sproc = nativeOperations[id];
        if (sproc == null)
          throw new Error(
            `Attempted to call unimplemented stored procedure with id: ${id}`
          );
        if (sproc.load) sproc = await sproc.load();
      } else {
        sproc = id;
      }

      let ctx = this;
      switch (mode) {
        case 0:
          ctx = createEnvironment(
            2,
            tableMetadata,
            nativeOperations,
            localizer,
            localizer2,
            db,
            tableOptions,
            logger,
            isRemoteTable
          );
          break;
        case 2:
          ctx = createEnvironment(
            1,
            tableMetadata,
            nativeOperations,
            localizer,
            localizer2,
            db,
            tableOptions,
            logger,
            isRemoteTable
          );
          break;
      }

      const sprocName = getSProcName(sproc);
      const shouldLog = shouldLogSproc(sprocName);
      const call = { args: rest, shouldLog, sprocName };
      logStack.push(sprocName);
      let markerStart;
      try {
        markerStart = logSproc(call);
        const result = await sproc(...rest, ctx);
        logSprocDone(call, markerStart, 2);
        return result;
      } catch (error) {
        console.warn(`Sproc ${id} failed`, error);
        logSprocDone(call, markerStart, 3);
        throw error;
      } finally {
        logStack.pop();
      }
    },
    storedProcedure: async (...args: any[]) => {
      const [id, ...rest] = args;
      let sproc;
      if (typeof id === "string") {
        sproc = sprocs[id];
        if (sproc == null)
          throw new Error(
            `Attempted to call unimplemented stored procedure with id: ${id}`
          );
        if (sproc.load) sproc = await sproc.load();
      } else {
        sproc = id;
      }

      let ctx = this;
      switch (mode) {
        case 0:
          ctx = createEnvironment(
            2,
            tableMetadata,
            sprocs,
            localizer,
            localizer2,
            db,
            tableOptions,
            logger,
            transportKeyEnforced
          );
          break;
        case 2:
          ctx = createEnvironment(
            1,
            tableMetadata,
            sprocs,
            localizer,
            localizer2,
            db,
            tableOptions,
            logger,
            transportKeyEnforced
          );
          break;
      }

      const sprocName = getSProcName(sproc);
      const shouldLog = shouldLogSproc(sprocName);
      const call = { args: rest, shouldLog, sprocName };
      logStack.push(sprocName);
      let markerStart;
      try {
        markerStart = logSproc(call);
        const result = await sproc(...rest, ctx);
        logSprocDone(call, markerStart, 2);
        return result;
      } catch (error) {
        console.warn(`Sproc ${id} failed`, error);
        logSprocDone(call, markerStart, 3);
        throw error;
      } finally {
        logStack.pop();
      }
    },
    ta: LSIterationOperations.toArray,
    throw: (a) => {
      throw new Error(a);
    },
    toArray: LSIterationOperations.toArray,
    toJSON: (a) => LSJson.stringify(a),
  };
}

B.n = n;

export default B;
function FBLogger(arg0: string) {
  throw new Error("Function not implemented.");
}
