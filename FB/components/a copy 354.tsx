__d(
  "ConstUriUtils",
  [
    "CometLruCache",
    "ExecutionEnvironment",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "recoverableViolation",
    "structuredClone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = d("CometLruCache").create(5e3),
      m = new RegExp("(^|\\.)facebook\\.com$", "i"),
      n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
      o = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
      ),
      p = c("UriNeedRawQuerySVConfig").uris.map(function (a) {
        return { domain: a, valid: w(a) };
      }),
      q = [],
      r = [];
    function s(a, b) {
      var d = {};
      if (a != null)
        for (
          var a = a.entries(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          d[g[0]] = g[1];
        }
      else
        c("FBLogger")("ConstUriUtils").warn(
          "Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue."
        );
      return b.serialize(d);
    }
    function t(a, b, d) {
      var e = k || (k = c("PHPQuerySerializer"));
      if (["http", "https"].includes(b) && u(a)) {
        if (a.includes("doubleclick.net") && d != null && !d.startsWith("http"))
          return e;
        e = c("PHPQuerySerializerNoEncoding");
      }
      return e;
    }
    function u(a) {
      return (
        a != null &&
        p.some(function (b) {
          return b.valid && v(a, b.domain);
        })
      );
    }
    function v(a, b) {
      if (b === "" || a === "") return !1;
      if (a.endsWith(b)) {
        b = a.length - b.length - 1;
        if (b === -1 || a[b] === ".") return !0;
      }
      return !1;
    }
    function w(a) {
      return !o.test(a);
    }
    function x(a, b) {
      var c =
        b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
      c = b.domain != null ? t(b.domain, c) : a.getSerializer();
      c = {
        domain: a.getDomain(),
        fragment: a.getFragment(),
        fragmentSeparator: a.hasFragmentSeparator(),
        isGeneric: a.isGeneric(),
        originalRawQuery: a.getOriginalRawQuery(),
        path: a.getPath(),
        port: a.getPort(),
        protocol: a.getProtocol(),
        queryParams: a.getQueryParams(),
        serializer: c,
        subdomain: a.getSubdomain(),
      };
      a = babelHelpers["extends"]({}, c, b);
      c = b.queryParams != null && b.queryParams.size !== 0;
      return C.getUribyObject(a, c);
    }
    function y(a, b, c, d) {
      c === void 0 && (c = !1);
      var e =
          a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
        f = a.domain !== "" ? a.domain : "",
        g = a.port !== "" ? ":" + a.port : "",
        h =
          a.path !== ""
            ? a.path
            : (e !== "" && e !== "mailto:") || f !== "" || g !== ""
            ? "/"
            : "";
      c = z(
        f,
        a.originalRawQuery,
        a.queryParams,
        b,
        c,
        (b = d) != null ? b : a.serializer
      );
      d = c.length > 0 ? "?" : "";
      b = a.fragment !== "" ? "#" + a.fragment : "";
      a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
      return "" + e + f + g + h + d + c + a + b;
    }
    function z(a, b, c, d, e, f) {
      e === void 0 && (e = !1);
      if (!d && (e || u(a))) {
        return (d = b) != null ? d : "";
      }
      return s(c, f);
    }
    function A(a) {
      var b = a.trim();
      b = (h || (h = d("URIRFC3986"))).parse(b) || {
        fragment: null,
        host: null,
        isGenericURI: !1,
        query: null,
        scheme: null,
        userinfo: null,
      };
      var c = b.host || "",
        e = c.split(".");
      e = e.length >= 3 ? e[0] : "";
      var f = t(c, b.scheme || "", b.query),
        g = f.deserialize(b.query || "") || {};
      g = new Map(Object.entries(g));
      g = B(
        {
          domain: c,
          fragment: b.fragment || "",
          fragmentSeparator: b.fragment === "",
          isGeneric: b.isGenericURI,
          originalRawQuery: b.query,
          path: b.path || "",
          port: b.port != null ? String(b.port) : "",
          protocol: (b.scheme || "").toLowerCase(),
          queryParams: g,
          serializer: f,
          subdomain: e,
          userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : "",
        },
        a
      );
      return g;
    }
    function B(a, b, c, e) {
      c === void 0 &&
        (c = (j || (j = d("URISchemes"))).Options.INCLUDE_DEFAULTS);
      var f = {
          components: babelHelpers["extends"]({}, a),
          error: "",
          valid: !0,
        },
        g = f.components;
      if (!(j || (j = d("URISchemes"))).isAllowed(a.protocol, c, e)) {
        f.valid = !1;
        f.error =
          'The URI protocol "' + String(a.protocol) + '" is not allowed.';
        return f;
      }
      if (!w(a.domain || "")) {
        f.valid = !1;
        f.error = "This is an unsafe domain " + String(a.domain);
        return f;
      }
      g.port = (a.port != null && String(a.port)) || "";
      if (Boolean(a.userInfo)) {
        f.valid = !1;
        f.error =
          "Invalid URI: (userinfo is not allowed in a URI " +
          String(a.userInfo) +
          ")";
        return f;
      }
      c = b != null && b !== "" ? b : y(g, !1);
      if (g.domain === "" && g.path.indexOf("\\") !== -1) {
        f.valid = !1;
        f.error =
          "Invalid URI: (no domain but multiple back-slashes " + c + ")";
        return f;
      }
      if (!g.protocol && n.test(c)) {
        f.valid = !1;
        f.error = "Invalid URI: (unsafe protocol-relative URI " + c + ")";
        return f;
      }
      if (g.domain !== "" && g.path !== "" && !g.path.startsWith("/")) {
        f.valid = !1;
        f.error =
          "Invalid URI: (domain and pathwhere path lacks leading slash " +
          c +
          ")";
        return f;
      }
      return f;
    }
    var C = (function () {
      function a(a) {
        (this.queryParams = new Map()),
          (this.domain = a.domain),
          (this.fragment = a.fragment),
          (this.fragmentSeparator = Boolean(a.fragmentSeparator)),
          (this.isGenericProtocol = Boolean(a.isGeneric)),
          (this.path = a.path),
          (this.originalRawQuery = a.originalRawQuery),
          (this.port = a.port),
          (this.protocol = a.protocol),
          (this.queryParams = a.queryParams),
          (this.serializer = a.serializer),
          (this.subdomain = a.subdomain);
      }
      var b = a.prototype;
      b.addQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return x(this, { queryParams: c });
        }
        return this;
      };
      b.addQueryParams = function (a) {
        if (a.size > 0) {
          var b = this.getQueryParams();
          a.forEach(function (a, c) {
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.addQueryParamString = function (a) {
        if (Boolean(a)) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.addTrailingSlash = function () {
        var a = this.getPath();
        return a.length > 0 && a[a.length - 1] !== "/"
          ? this.setPath(a + "/")
          : this;
      };
      b.getDomain = function () {
        return this.domain;
      };
      b.getFragment = function () {
        return this.fragment;
      };
      b.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        );
      };
      b.getOriginalRawQuery = function () {
        return this.originalRawQuery;
      };
      b.getPath = function () {
        return this.path;
      };
      b.getPort = function () {
        return this.port;
      };
      b.getProtocol = function () {
        return this.protocol.toLowerCase();
      };
      b.getQualifiedUri = function () {
        if (!this.getDomain()) {
          var b;
          b =
            (b = typeof window !== "undefined" ? window : self) == null
              ? void 0
              : (b = b.location) == null
              ? void 0
              : b.href;
          if (b == null) {
            c("FBLogger")("ConstUriUtils")
              .blameToPreviousFile()
              .warn(
                "Cannot get qualified URI for current URI as there is no current location"
              );
            return null;
          }
          (i || (i = c("ExecutionEnvironment"))).isInWorker &&
            b.startsWith("blob:") &&
            (b = b.substring(5, b.length));
          b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
          return a.getUri(b + this.toString());
        }
        return this;
      };
      b.getQueryParam = function (a) {
        a = this.queryParams.get(a);
        if (typeof a === "string") return a;
        else {
          a = JSON.stringify(a);
          return a == null ? a : JSON.parse(a);
        }
      };
      b.getQueryData = function () {
        return Object.fromEntries(this.getQueryParams());
      };
      b.getQueryParams = function () {
        if (c("structuredClone") != null)
          return c("structuredClone")(this.queryParams);
        var a = JSON.stringify(Array.from(this.queryParams), function (a, b) {
          return Array.isArray(b)
            ? { __CUUArr: !0, value: babelHelpers["extends"]({}, b) }
            : b;
        });
        a = JSON.parse(a, function (a, b) {
          return b != null && typeof b === "object" && b.__CUUArr
            ? Object.keys(b.value).reduce(function (a, c) {
                a[c] = b.value[c];
                return a;
              }, [])
            : b;
        });
        return new Map(a);
      };
      b.getQueryString = function (a) {
        a === void 0 && (a = !1);
        return z(
          this.domain,
          this.originalRawQuery,
          this.queryParams,
          !1,
          a,
          this.serializer
        );
      };
      b.getRegisteredDomain = function () {
        if (!this.getDomain()) return "";
        if (!this.isFacebookUri()) return null;
        var a = this.getDomain().split("."),
          b = a.indexOf("facebook");
        b === -1 && (b = a.indexOf("workplace"));
        return a.slice(b).join(".");
      };
      b.getSerializer = function () {
        return this.serializer;
      };
      b.getSubdomain = function () {
        return this.subdomain;
      };
      b.getUnqualifiedUri = function () {
        if (this.getDomain()) {
          var b = this.toString();
          return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)));
        }
        return this;
      };
      a.getUri = function (b) {
        b = b.trim();
        var d = l.get(b);
        if (d == null) {
          var e = A(b);
          if (e.valid) (d = new a(e.components)), l.set(b, d);
          else {
            c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
            return null;
          }
        }
        return d;
      };
      a.getUribyObject = function (b, d) {
        var e = y(b, d),
          f = l.get(e);
        if (f == null) {
          d && (b.originalRawQuery = s(b.queryParams, b.serializer));
          d = B(b);
          if (d.valid) (f = new a(d.components)), l.set(e, f);
          else {
            c("recoverableViolation")(d.error, "ConstUri");
            return null;
          }
        }
        return f;
      };
      b.hasFragmentSeparator = function () {
        return this.fragmentSeparator;
      };
      b.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          this.queryParams.size > 0 ||
          this.getFragment()
        );
      };
      b.isFacebookUri = function () {
        var a = this.toString();
        if (a === "") return !1;
        return !this.getDomain() && !this.getProtocol()
          ? !0
          : ["https", "http"].indexOf(this.getProtocol()) !== -1 &&
              m.test(this.getDomain());
      };
      b.isGeneric = function () {
        return this.isGenericProtocol;
      };
      b.isSameOrigin = function (a) {
        return c("isSameOrigin")(this, a);
      };
      b.isSubdomainOfDomain = function (b) {
        var c = a.getUri(b);
        return c != null && v(this.domain, b);
      };
      b.isSecure = function () {
        return this.getProtocol() === "https";
      };
      b.removeQueryParams = function (a) {
        if (Array.isArray(a) && a.length > 0) {
          var b = this.getQueryParams();
          a.map(function (a) {
            return b["delete"](a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.removeQueryParam = function (a) {
        if (Boolean(a)) {
          var b = this.getQueryParams();
          b["delete"](a);
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.replaceQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return x(this, { queryParams: c });
        }
        return this;
      };
      b.replaceQueryParams = function (a) {
        return x(this, { queryParams: a });
      };
      b.replaceQueryParamString = function (a) {
        if (a != null) {
          a = a.startsWith("?") ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split("&").map(function (a) {
            a = a.split("=");
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return x(this, { queryParams: b });
        }
        return this;
      };
      b.setDomain = function (a) {
        if (Boolean(a)) {
          var b = a.split(".");
          b = b.length >= 3 ? b[0] : "";
          return x(this, { domain: a, subdomain: b });
        }
        return this;
      };
      b.setFragment = function (a) {
        return a === "#"
          ? x(this, { fragment: "", fragmentSeparator: !0 })
          : x(this, { fragment: a, fragmentSeparator: a !== "" });
      };
      b.setPath = function (a) {
        return a != null ? x(this, { path: a }) : this;
      };
      b.setPort = function (a) {
        return Boolean(a) ? x(this, { port: a }) : this;
      };
      b.setProtocol = function (a) {
        return Boolean(a) ? x(this, { protocol: a }) : this;
      };
      b.setSecure = function (a) {
        return this.setProtocol(a ? "https" : "http");
      };
      b.setSubDomain = function (a) {
        if (Boolean(a)) {
          var b = this.getQualifiedUri();
          if (b == null) return null;
          var c = b.getDomain();
          c = c.split(".");
          c.length >= 3 ? (c[0] = a) : c.unshift(a);
          return x(b, { domain: c.join("."), subdomain: a });
        }
        return this;
      };
      b.stripTrailingSlash = function () {
        return this.setPath(this.getPath().replace(/\/$/, ""));
      };
      a.$1 = function (a) {
        a = a;
        for (var b = 0; b < q.length; b++) {
          var c = q[b];
          a = c(a);
        }
        return a;
      };
      a.$2 = function (a, b) {
        b = b;
        for (var c = 0; c < r.length; c++) {
          var d = r[c];
          b = d(a, b);
        }
        return b;
      };
      b.$3 = function (b, c) {
        c === void 0 && (c = !1);
        return y(
          {
            domain: a.$1(this.domain),
            fragment: this.fragment,
            fragmentSeparator: this.fragmentSeparator,
            isGeneric: this.isGenericProtocol,
            originalRawQuery: this.originalRawQuery,
            path: this.path,
            port: this.port,
            protocol: this.protocol,
            queryParams: a.$2(this.domain, this.queryParams),
            serializer: b,
            subdomain: this.subdomain,
            userInfo: "",
          },
          !1,
          c
        );
      };
      b.toStringRawQuery = function () {
        this.rawStringValue == null &&
          (this.rawStringValue = this.$3(c("PHPQuerySerializerNoEncoding")));
        return this.rawStringValue;
      };
      b.toString = function () {
        this.stringValue == null &&
          (this.stringValue = this.$3(this.serializer));
        return this.stringValue;
      };
      b.toStringPreserveQuery = function () {
        return this.$3(this.serializer, !0);
      };
      a.isValidUri = function (b) {
        var c = l.get(b);
        if (c != null) return !0;
        c = A(b);
        if (c.valid) {
          l.set(b, new a(c.components));
          return !0;
        }
        return !1;
      };
      return a;
    })();
    function a(a) {
      if (a instanceof C) return a;
      else return null;
    }
    function b(a) {
      q.push(a);
    }
    function e(a) {
      r.push(a);
    }
    f = C.getUri;
    var D = C.isValidUri;
    g.isSubdomainOfDomain = v;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.registerQueryParamsFilter = e;
    g.getUri = f;
    g.isValidUri = D;
  },
  98
);

// Import necessary modules
import { create as createCache } from "CometLruCache";
import { ExecutionEnvironment } from "ExecutionEnvironment";
import { FBLogger } from "FBLogger";
import { PHPQuerySerializer } from "PHPQuerySerializer";
import { PHPQuerySerializerNoEncoding } from "PHPQuerySerializerNoEncoding";
import { URIRFC3986 } from "URIRFC3986";
import { URISchemes } from "URISchemes";
import { UriNeedRawQuerySVConfig } from "UriNeedRawQuerySVConfig";
import { isSameOrigin } from "isSameOrigin";
import { recoverableViolation } from "recoverableViolation";
import { structuredClone } from "structuredClone";

// Constants
const cacheSize = 5000;
const lruCache = createCache(cacheSize);
const facebookRegex = new RegExp("(^|\\.)facebook\\.com$", "i");
const unsafeProtocolRegex = new RegExp(
  "^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"
);
const unsafeDomainRegex = new RegExp(
  "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
);
const uriConfig = UriNeedRawQuerySVConfig.uris.map((uri) => ({
  domain: uri,
  valid: validateDomain(uri),
}));

const domainFilters: Array<(domain: string) => string> = [];
const queryParamsFilters: Array<
  (domain: string, queryParams: Map<string, string>) => Map<string, string>
> = [];

// Utility Functions
function serializeQueryParams(
  queryParams: Map<string, string>,
  serializer: any
): string {
  const queryObject: Record<string, string> = {};
  queryParams.forEach((value, key) => (queryObject[key] = value));
  return serializer.serialize(queryObject);
}

function selectSerializer(
  domain: string,
  protocol: string,
  rawQuery?: string | null
): any {
  if (["http", "https"].includes(protocol) && isDomainInConfig(domain)) {
    if (
      domain.includes("doubleclick.net") &&
      rawQuery &&
      !rawQuery.startsWith("http")
    ) {
      return PHPQuerySerializer;
    }
    return PHPQuerySerializerNoEncoding;
  }
  return PHPQuerySerializer;
}

function isDomainInConfig(domain: string): boolean {
  return (
    domain != null &&
    uriConfig.some(
      (config) => config.valid && isSubdomainOfDomain(domain, config.domain)
    )
  );
}

function isSubdomainOfDomain(domain: string, baseDomain: string): boolean {
  if (baseDomain === "" || domain === "") return false;
  if (domain.endsWith(baseDomain)) {
    const separatorIndex = domain.length - baseDomain.length - 1;
    return separatorIndex === -1 || domain[separatorIndex] === ".";
  }
  return false;
}

function validateDomain(domain: string): boolean {
  return !unsafeDomainRegex.test(domain);
}

function createUriObject(
  components: UriComponentsMethod,
  overrides: UriComponents
): Uri {
  const protocol = overrides.protocol ?? components.getProtocol();
  const serializer = overrides.domain
    ? selectSerializer(overrides.domain, protocol)
    : components.getSerializer();
  const uriComponents = {
    domain: components.getDomain(),
    fragment: components.getFragment(),
    fragmentSeparator: components.hasFragmentSeparator(),
    isGeneric: components.isGeneric(),
    originalRawQuery: components.getOriginalRawQuery(),
    path: components.getPath(),
    port: components.getPort(),
    protocol: components.getProtocol(),
    queryParams: components.getQueryParams(),
    serializer: serializer,
    subdomain: components.getSubdomain(),
  };
  const hasQueryParams =
    overrides.queryParams && overrides.queryParams.size !== 0;
  return Uri.getUribyObject({ ...uriComponents }, hasQueryParams);
}

function constructUriString(
  uri: UriComponents,
  useRawQuery: boolean,
  serializer?: any
): string {
  const protocolPart = uri.protocol
    ? `${uri.protocol}:${uri.isGeneric ? "" : "//"}`
    : "";
  const domainPart = uri.domain || "";
  const portPart = uri.port ? `:${uri.port}` : "";
  const pathPart =
    uri.path ||
    ((protocolPart && protocolPart !== "mailto:") || domainPart || portPart
      ? "/"
      : "");
  const queryPart = constructQueryString(
    uri.domain,
    uri.originalRawQuery,
    uri.queryParams,
    useRawQuery,
    serializer ?? uri.serializer
  );
  const queryPrefix = queryPart.length > 0 ? "?" : "";
  const fragmentPart = uri.fragment ? `#${uri.fragment}` : "";
  const fragmentSeparator =
    uri.fragment === "" && uri.fragmentSeparator ? "#" : "";
  return `${protocolPart}${domainPart}${portPart}${pathPart}${queryPrefix}${queryPart}${fragmentSeparator}${fragmentPart}`;
}

function constructQueryString(
  domain: string,
  rawQuery: string | null,
  queryParams: Map<string, string>,
  useRawQuery: boolean,
  serializer: any
): string {
  if (!useRawQuery && (isDomainInConfig(domain) || useRawQuery)) {
    return rawQuery ?? "";
  }
  return serializeQueryParams(queryParams, serializer);
}

function parseUri(uri: string): UriComponents {
  const trimmedUri = uri.trim();
  const parsedUri = URIRFC3986.parse(trimmedUri) || {
    fragment: null,
    host: null,
    isGenericURI: false,
    query: null,
    scheme: null,
    userinfo: null,
  };

  const host = parsedUri.host || "";
  const subdomain = host.split(".").length >= 3 ? host.split(".")[0] : "";
  const serializer = selectSerializer(
    host,
    parsedUri.scheme ?? "",
    parsedUri.query
  );
  const queryParams = new Map(
    Object.entries(serializer.deserialize(parsedUri.query || "") ?? {})
  );

  return {
    domain: host,
    fragment: parsedUri.fragment ?? "",
    fragmentSeparator: parsedUri.fragment === "",
    isGeneric: parsedUri.isGenericURI,
    originalRawQuery: parsedUri.query,
    path: parsedUri.path ?? "",
    port: parsedUri.port ? String(parsedUri.port) : "",
    protocol: (parsedUri.scheme ?? "").toLowerCase(),
    queryParams,
    serializer,
    subdomain,
    userInfo: parsedUri.userinfo ?? "",
  };
}

function validateUri(
  uri: UriComponents,
  uriString?: string,
  options?: string
): UriValidationResult {
  const validationResult: UriValidationResult = {
    components: { ...uri },
    error: "",
    valid: true,
  };

  if (!URISchemes.isAllowed(uri.protocol, options, uriString)) {
    validationResult.valid = false;
    validationResult.error = `The URI protocol "${String(
      uri.protocol
    )}" is not allowed.`;
    return validationResult;
  }

  if (!validateDomain(uri.domain ?? "")) {
    validationResult.valid = false;
    validationResult.error = `This is an unsafe domain ${String(uri.domain)}`;
    return validationResult;
  }

  if (uri.userInfo) {
    validationResult.valid = false;
    validationResult.error = `Invalid URI: (userinfo is not allowed in a URI ${String(
      uri.userInfo
    )})`;
    return validationResult;
  }

  const constructedUriString = uriString ?? constructUriString(uri, false);
  if (!uri.domain && uri.path.includes("\\")) {
    validationResult.valid = false;
    validationResult.error = `Invalid URI: (no domain but multiple back-slashes ${constructedUriString})`;
    return validationResult;
  }

  if (!uri.protocol && unsafeProtocolRegex.test(constructedUriString)) {
    validationResult.valid = false;
    validationResult.error = `Invalid URI: (unsafe protocol-relative URI ${constructedUriString})`;
    return validationResult;
  }

  if (uri.domain && uri.path && !uri.path.startsWith("/")) {
    validationResult.valid = false;
    validationResult.error = `Invalid URI: (domain and path where path lacks leading slash ${constructedUriString})`;
    return validationResult;
  }

  return validationResult;
}

// Type Definitions
interface UriComponents {
  domain: string;
  fragment: string;
  fragmentSeparator: boolean;
  originalRawQuery: string | null;
  path: string;
  port: string;
  protocol: string;
  queryParams: Map<string, string>;
  serializer: any;
  subdomain: string;
  userInfo?: string;
}

interface UriComponentsMethod {
  isGeneric(): boolean;
  getProtocol(): string;
  getSerializer(): any;
  getOriginalRawQuery(): string | null;
  getDomain(): string;
  getFragment(): string;
  hasFragmentSeparator(): boolean;
  getPath(): string;
  getPort(): string;
  getSubdomain(): string;
  getQueryParams(): Map<string, string>;
}

interface UriValidationResult {
  components: UriComponents;
  error: string;
  valid: boolean;
}

class Uri implements UriComponents {
  domain: string;
  fragment: string;
  fragmentSeparator: boolean;
  isGenericProtocol: boolean;
  path: string;
  originalRawQuery: string | null;
  port: string;
  protocol: string;
  queryParams: Map<string, string>;
  serializer: any;
  subdomain: string;

  constructor(components: UriComponents) {
    this.domain = components.domain;
    this.fragment = components.fragment;
    this.fragmentSeparator = components.fragmentSeparator;
    this.isGenericProtocol = components.isGeneric;
    this.path = components.path;
    this.originalRawQuery = components.originalRawQuery;
    this.port = components.port;
    this.protocol = components.protocol;
    this.queryParams = components.queryParams;
    this.serializer = components.serializer;
    this.subdomain = components.subdomain;
  }

  addQueryParam(key: string, value: string): this {
    const newQueryParams = structuredClone(this.queryParams);
    newQueryParams.set(key, value);
    return createUriObject(this, { queryParams: newQueryParams });
  }

  addQueryParams(params: Map<string, string>): this {
    const newQueryParams = structuredClone(this.queryParams);
    params.forEach((value, key) => newQueryParams.set(key, value));
    return createUriObject(this, { queryParams: newQueryParams });
  }

  getDomain(): string {
    return this.domain;
  }

  getFragment(): string {
    return this.fragment;
  }

  getOriginalRawQuery(): string | null {
    return this.originalRawQuery;
  }

  getPath(): string {
    return this.path;
  }

  getPort(): string {
    return this.port;
  }

  getProtocol(): string {
    return this.protocol;
  }

  getQueryParams(): Map<string, string> {
    return this.queryParams;
  }

  getSerializer(): any {
    return this.serializer;
  }

  getSubdomain(): string {
    return this.subdomain;
  }

  hasFragmentSeparator(): boolean {
    return this.fragmentSeparator;
  }

  static create(uri: string): Uri {
    return new Uri(parseUri(uri));
  }

  static getUribyObject(
    components: UriComponents,
    hasQueryParams: boolean
  ): Uri {
    return new Uri(components);
  }

  getQualifiedURI(useRawQuery: boolean = false): string {
    return constructUriString(this, useRawQuery);
  }

  getRequestURI(useRawQuery: boolean = false): string {
    const domain = this.domain || "";
    const protocol = this.protocol ? `${this.protocol}:` : "";
    const path = this.path || "/";
    const query = constructQueryString(
      domain,
      this.originalRawQuery,
      this.queryParams,
      useRawQuery,
      this.serializer
    );
    const queryPrefix = query.length > 0 ? "?" : "";
    const fragment = this.fragment ? `#${this.fragment}` : "";
    const fragmentSeparator =
      this.fragment === "" && this.fragmentSeparator ? "#" : "";
    return `${protocol}${domain}${path}${queryPrefix}${query}${fragmentSeparator}${fragment}`;
  }

  getUri(): string {
    const protocol = this.protocol ? `${this.protocol}:` : "";
    const domain = this.domain || "";
    const path = this.path || "/";
    const query = constructQueryString(
      domain,
      this.originalRawQuery,
      this.queryParams,
      false,
      this.serializer
    );
    const queryPrefix = query.length > 0 ? "?" : "";
    const fragment = this.fragment ? `#${this.fragment}` : "";
    const fragmentSeparator =
      this.fragment === "" && this.fragmentSeparator ? "#" : "";
    return `${protocol}${domain}${path}${queryPrefix}${query}${fragmentSeparator}${fragment}`;
  }

  getUrlToHash(): string {
    const path = this.path || "";
    const query = constructQueryString(
      this.domain,
      this.originalRawQuery,
      this.queryParams,
      false,
      this.serializer
    );
    const queryPrefix = query.length > 0 ? "?" : "";
    return `${path}${queryPrefix}${query}`;
  }

  removeQueryParam(key: string): this {
    const newQueryParams = structuredClone(this.queryParams);
    newQueryParams.delete(key);
    return createUriObject(this, { queryParams: newQueryParams });
  }

  removeQueryParams(params: Array<string>): this {
    const newQueryParams = structuredClone(this.queryParams);
    params.forEach((key) => newQueryParams.delete(key));
    return createUriObject(this, { queryParams: newQueryParams });
  }

  setDomain(domain: string): this {
    const validatedDomain = domain
      ? domainFilters.reduce((acc, filter) => filter(acc), domain)
      : domain;
    return createUriObject(this, { domain: validatedDomain });
  }

  setFragment(fragment: string): this {
    return createUriObject(this, { fragment });
  }

  setPath(path: string): this {
    return createUriObject(this, { path });
  }

  setPort(port: string): this {
    return createUriObject(this, { port });
  }

  setProtocol(protocol: string): this {
    return createUriObject(this, { protocol });
  }

  setQueryParams(params: Map<string, string>): this {
    const filteredParams = queryParamsFilters.reduce(
      (acc, filter) => filter(this.domain, acc),
      params
    );
    return createUriObject(this, { queryParams: filteredParams });
  }
}

export default Uri;
