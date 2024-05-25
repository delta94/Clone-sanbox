__d(
  "jsRouteBuilder",
  ["ConstUriUtils", "FBLogger", "routeBuilderUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";
    function a(a, b, e, f, g) {
      g === void 0 && (g = !1);
      var i = d("routeBuilderUtils").getPathParts(a);
      function j(j) {
        try {
          var k =
              f != null
                ? babelHelpers["extends"]({}, f, j)
                : (j = j) != null
                ? j
                : {},
            l = {};
          j = "";
          var m = !1;
          j = i.reduce(function (a, c) {
            if (!c.isToken) return a + "/" + c.part;
            else {
              var d,
                e = c.optional,
                f = c.prefix,
                g = c.suffix;
              c = c.token;
              if (e && m) return a;
              d = (d = k[c]) != null ? d : b[c];
              if (d == null && e) {
                m = !0;
                return a;
              }
              if (d == null)
                throw new Error("Missing required template parameter: " + c);
              if (d === "")
                throw new Error(
                  "Required template parameter is an empty string: " + c
                );
              l[c] = !0;
              return a + "/" + f + d + g;
            }
          }, "");
          a.slice(-1) === "/" && (j += "/");
          j === "" && (j = "/");
          var n = d("ConstUriUtils").getUri(j);
          for (var o in k) {
            var p = k[o];
            !l[o] &&
              p != null &&
              n != null &&
              (e != null && e.has(o)
                ? p !== !1 && (n = n.addQueryParam(o, null))
                : (n = n.addQueryParam(o, p)));
          }
          return [n, j];
        } catch (b) {
          p = b == null ? void 0 : b.message;
          o = c("FBLogger")("JSRouteBuilder")
            .blameToPreviousFrame()
            .blameToPreviousFrame();
          g && (o = o.blameToPreviousFrame());
          o.mustfix("Failed building URI for base path: %s message: %s", a, p);
          return [null, h];
        }
      }
      return {
        buildUri: function (a) {
          a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
          if (a == null)
            throw new Error("Not even the fallback URL parsed validly!");
          return a;
        },
        buildUriNullable: function (a) {
          return j(a)[0];
        },
        buildURL: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
        buildURLStringDEPRECATED: function (a) {
          a = j(a);
          var b = a[0];
          a = a[1];
          return (b = b == null ? void 0 : b.toString()) != null ? b : a;
        },
      };
    }
    g["default"] = a;
  },
  98
);

import { getUri } from "ConstUriUtils";
import { blameToPreviousFrame, FBLogger } from "FBLogger";
import { getPathParts } from "routeBuilderUtils";

const FALLBACK_HASH = "#";

interface TemplateParams {
  [key: string]: any;
}

function jsRouteBuilder(
  basePath: string,
  defaultParams: TemplateParams = {},
  queryParams: Set<string> | undefined = undefined,
  requiredParams: TemplateParams = {},
  blameTwice: boolean = false
) {
  const pathParts = getPathParts(basePath);

  function buildInternal(params: TemplateParams): [any, string] {
    try {
      const allParams = { ...requiredParams, ...params } || params || {};
      const usedParams: { [key: string]: boolean } = {};
      let builtPath = "";
      let skipOptional = false;

      builtPath = pathParts.reduce((acc, part) => {
        if (!part.isToken) {
          return acc + "/" + part.part;
        } else {
          const { optional, prefix, suffix, token } = part;
          if (optional && skipOptional) return acc;

          let value = allParams[token] ?? defaultParams[token];
          if (value == null && optional) {
            skipOptional = true;
            return acc;
          }

          if (value == null) {
            throw new Error(`Missing required template parameter: ${token}`);
          }

          if (value === "") {
            throw new Error(
              `Required template parameter is an empty string: ${token}`
            );
          }

          usedParams[token] = true;
          return acc + "/" + prefix + value + suffix;
        }
      }, "");

      if (basePath.slice(-1) === "/") {
        builtPath += "/";
      }

      if (builtPath === "") {
        builtPath = "/";
      }

      let uri = getUri(builtPath);
      for (const key in allParams) {
        const value = allParams[key];
        if (!usedParams[key] && value != null && uri != null) {
          if (queryParams && queryParams.has(key)) {
            if (value !== false) {
              uri = uri.addQueryParam(key, null);
            }
          } else {
            uri = uri.addQueryParam(key, value);
          }
        }
      }

      return [uri, builtPath];
    } catch (error) {
      const message = error?.message;
      let logger = FBLogger("JSRouteBuilder")
        .blameToPreviousFrame()
        .blameToPreviousFrame();
      if (blameTwice) {
        logger = logger.blameToPreviousFrame();
      }
      logger.mustfix(
        "Failed building URI for base path: %s message: %s",
        basePath,
        message
      );
      return [null, FALLBACK_HASH];
    }
  }

  return {
    buildUri: (params: TemplateParams = {}) => {
      const [uri] = buildInternal(params);
      if (!uri) {
        throw new Error("Not even the fallback URL parsed validly!");
      }
      return uri;
    },
    buildUriNullable: (params: TemplateParams) => buildInternal(params)[0],
    buildURL: (params: TemplateParams) => {
      const [uri, builtPath] = buildInternal(params);
      return uri ? uri.toString() : builtPath;
    },
    buildURLStringDEPRECATED: (params: TemplateParams) => {
      const [uri, builtPath] = buildInternal(params);
      return uri ? uri.toString() : builtPath;
    },
  };
}

export default jsRouteBuilder;
