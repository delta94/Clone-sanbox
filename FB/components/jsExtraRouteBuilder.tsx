import jsRouteBuilder from "jsRouteBuilder";
import unrecoverableViolation from "unrecoverableViolation";

function jsExtraRouteBuilder(basePath, options, extraPaths, extraOptions) {
  const baseRouteBuilder = jsRouteBuilder(basePath, options);

  const extraRouteBuilders = extraPaths.reduce((acc, path) => {
    if (typeof path === "string") {
      acc[path] = jsRouteBuilder(
        path,
        options,
        extraOptions,
        null,
        true
      ).buildURL;
    }
    return acc;
  }, {});

  return {
    buildExtraURL: function (path, params) {
      if (typeof path !== "string" || extraRouteBuilders[path] == null) {
        throw unrecoverableViolation(
          "Route builder for extra path does not exist",
          "comet_infra"
        );
      }
      return extraRouteBuilders[path](params);
    },
    buildUri: function (params) {
      return baseRouteBuilder.buildUri(params);
    },
    buildURL: function (params) {
      return baseRouteBuilder.buildURL(params);
    },
  };
}

export default jsExtraRouteBuilder;
