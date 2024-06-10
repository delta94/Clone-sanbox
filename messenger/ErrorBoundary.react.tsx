import ErrorPubSub from "ErrorPubSub";
import ErrorSerializer from "ErrorSerializer";
import * as React from "react";
import getErrorSafe from "getErrorSafe";
import getReactElementDisplayName from "getReactElementDisplayName";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: (error: Error, moduleName: string) => React.ReactNode;
  augmentError?: (error: Error) => void;
  context?: { [key: string]: any };
  description?: string;
  onError?: (error: Error, moduleName: string) => void;
  forceResetErrorCount?: number;
}

interface ErrorBoundaryState {
  error: Error | null;
  moduleName: string;
}

class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error: getErrorSafe(error) };
  }

  state: ErrorBoundaryState;
  suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix: boolean =
    true;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      moduleName: getModuleName(props.children),
    };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (
      this.state.error &&
      this.props.forceResetErrorCount !== undefined &&
      this.props.forceResetErrorCount !== prevProps.forceResetErrorCount
    ) {
      this.setState({ error: null });
      return;
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const componentStack = errorInfo.componentStack;
    const {
      augmentError,
      context = {},
      description = "base",
      onError,
    } = this.props;

    if (context.messageFormat == null) {
      context.messageFormat = "caught error in module %s (%s)";
      context.messageParams = [this.state.moduleName, description];
    }

    const { error: caughtError, moduleName } = this.state;

    if (caughtError !== null) {
      ErrorSerializer.aggregateError(caughtError, {
        componentStack,
        loggingSource: "ERROR_BOUNDARY",
      });
      ErrorSerializer.aggregateError(caughtError, context);
      typeof augmentError === "function" && augmentError(caughtError);
      ErrorPubSub.reportError(caughtError);
      typeof onError === "function" && onError(caughtError, moduleName);
    }
  }

  render() {
    const { error, moduleName } = this.state;
    if (error) {
      const { fallback } = this.props;
      return fallback != null ? fallback(error, moduleName) : null;
    }
    return (
      <>
        {/* @ts-ignore */}
        {this.props.children}
      </>
    );
  }
}

ErrorBoundary.defaultProps = { forceResetErrorCount: 0 };

function getModuleName(children: React.ReactNode): string {
  const child =
    React.Children.count(children) > 1
      ? React.Children.toArray(children)[0]
      : children;
  return getReactElementDisplayName(child);
}

export default ErrorBoundary;

// __d(
//   "ErrorBoundary.react",
//   [
//     "ErrorPubSub",
//     "ErrorSerializer",
//     "cr:1645510",
//     "getErrorSafe",
//     "getReactElementDisplayName",
//     "react",
//   ],
//   function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h,
//       i,
//       j = i || d("react");
//     a = (function (a) {
//       babelHelpers.inheritsLoose(d, a);
//       function d() {
//         var b, c;
//         for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
//           e[f] = arguments[f];
//         return (
//           ((b = c = a.call.apply(a, [this].concat(e)) || this),
//           (c.state = { error: null, moduleName: k(c.props.children) }),
//           (c.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix =
//             !0),
//           b) || babelHelpers.assertThisInitialized(c)
//         );
//       }
//       d.getDerivedStateFromError = function (a) {
//         return { error: c("getErrorSafe")(a) };
//       };
//       var e = d.prototype;
//       e.componentDidUpdate = function (a) {
//         if (
//           this.state.error &&
//           this.props.forceResetErrorCount != null &&
//           this.props.forceResetErrorCount !== a.forceResetErrorCount
//         ) {
//           this.setState({ error: null });
//           return;
//         }
//       };
//       e.componentDidCatch = function (a, b) {
//         a = b.componentStack;
//         b = this.props;
//         var d = b.augmentError,
//           e = b.context;
//         e = e === void 0 ? {} : e;
//         var f = b.description;
//         f = f === void 0 ? "base" : f;
//         b = b.onError;
//         e.messageFormat == null &&
//           ((e.messageFormat = "caught error in module %s (%s)"),
//           (e.messageParams = [this.state.moduleName, f]));
//         f = this.state;
//         var g = f.error;
//         f = f.moduleName;
//         g != null &&
//           (c("ErrorSerializer").aggregateError(g, {
//             componentStack: a,
//             loggingSource: "ERROR_BOUNDARY",
//           }),
//           c("ErrorSerializer").aggregateError(g, e),
//           typeof d === "function" && d(g),
//           (h || (h = c("ErrorPubSub"))).reportError(g),
//           typeof b === "function" && b(g, f));
//       };
//       e.render = function () {
//         var a = this.state,
//           c = a.error;
//         a = a.moduleName;
//         if (c) {
//           var d = this.props.fallback;
//           return d != null ? d(c, a) : null;
//         }
//         return b("cr:1645510") != null
//           ? j.jsxs(j.Fragment, {
//               children: [j.jsx(b("cr:1645510"), {}), this.props.children],
//             })
//           : (d = this.props.children) != null
//           ? d
//           : null;
//       };
//       return d;
//     })(j.PureComponent);
//     a.defaultProps = { forceResetErrorCount: 0 };
//     function k(a) {
//       a = j.Children.count(a) > 1 ? j.Children.toArray(a)[0] : a;
//       return c("getReactElementDisplayName")(a);
//     }
//     g["default"] = a;
//   },
//   98
// );
