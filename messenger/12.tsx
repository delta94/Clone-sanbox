import React, { Component } from 'react';
import { ErrorPubSub, ErrorSerializer } from 'ErrorPubSub';
import getErrorSafe from 'getErrorSafe';
import getReactElementDisplayName from 'getReactElementDisplayName';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.suppressReactDefaultErrorLogging = true;
    this.state = { error: null, moduleName: getModuleName(props.children) }
  }

  static getDerivedStateFromError(error) {
    return { error: getErrorSafe(error) }
  }

  componentDidCatch(error, info) {
    const { augmentError, context = {}, description = "base", onError } = this.props;
    const { componentStack } = info;
    context.messageFormat == null && (context.messageFormat = "caught error in module %s (%s)", context.messageParams = [this.state.moduleName, description]);
    const { error: savedError, moduleName } = this.state;
    savedError != null && (ErrorSerializer.aggregateError(savedError, { componentStack, loggingSource: "ERROR_BOUNDARY", ...context }), typeof augmentError === "function" && augmentError(savedError), ErrorPubSub.reportError(savedError), typeof onError === "function" && onError(savedError, moduleName));
  }

  componentDidUpdate(prevProps) {
    if (this.state.error && (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount != prevProps.forceResetErrorCount)) {
      this.setState({ error: null });
      return;
    }
  }

  render() {
    const { error, moduleName } = this.state;
    if (error) {
      const fallback = this.props.fallback;
      return fallback != null ? fallback(error, moduleName) : null;
    }
    const children = this.props.children;
    return cr1645510 != null ? (
      <>
        <cr1645510 />
        {children}
      </>
    ) : children != null ? children : null;
  }
}

ErrorBoundary.defaultProps = { forceResetErrorCount: 0 };

function getModuleName(children) {
  children = React.Children.count(children) > 1 ? React.Children.toArray(children)[0] : children;
  return getReactElementDisplayName(children);
}

export default ErrorBoundary;



// __d("ErrorBoundary.react", ["ErrorPubSub", "ErrorSerializer", "cr:1645510", "getErrorSafe", "getReactElementDisplayName", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");
//     a = function (a) {
//         babelHelpers.inheritsLoose(d, a);

//         function d() {
//             var b, c;
//             for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
//             return (b = c = a.call.apply(a, [this].concat(e)) || this, c.suppressReactDefaultErrorLogging = !0, c.state = {
//                 error: null,
//                 moduleName: i(c.props.children)
//             }, b) || babelHelpers.assertThisInitialized(c)
//         }
//         d.getDerivedStateFromError = function (a) {
//             return {
//                 error: c("getErrorSafe")(a)
//             }
//         };
//         var e = d.prototype;
//         e.componentDidCatch = function (a, b) {
//             a = b.componentStack;
//             b = this.props;
//             var d = b.augmentError,
//                 e = b.context;
//             e = e === void 0 ? {} : e;
//             var f = b.description;
//             f = f === void 0 ? "base" : f;
//             b = b.onError;
//             e.messageFormat == null && (e.messageFormat = "caught error in module %s (%s)", e.messageParams = [this.state.moduleName, f]);
//             f = this.state;
//             var g = f.error;
//             f = f.moduleName;
//             g != null && (c("ErrorSerializer").aggregateError(g, babelHelpers["extends"]({
//                 componentStack: a,
//                 loggingSource: "ERROR_BOUNDARY"
//             }, e)), typeof d === "function" && d(g), c("ErrorPubSub").reportError(g), typeof b === "function" && b(g, f))
//         };
//         e.componentDidUpdate = function (a) {
//             if (this.state.error && (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount != a.forceResetErrorCount)) {
//                 this.setState({
//                     error: null
//                 });
//                 return
//             }
//         };
//         e.render = function () {
//             var a = this.state,
//                 c = a.error;
//             a = a.moduleName;
//             if (c) {
//                 var d = this.props.fallback;
//                 return d != null ? d(c, a) : null
//             }
//             return b("cr:1645510") != null ? h.jsxs(h.Fragment, {
//                 children: [h.jsx(b("cr:1645510"), {}), this.props.children]
//             }) : (d = this.props.children) != null ? d : null
//         };
//         return d
//     }(h.Component);
//     a.defaultProps = {
//         forceResetErrorCount: 0
//     };

//     function i(a) {
//         a = h.Children.count(a) > 1 ? h.Children.toArray(a)[0] : a;
//         return c("getReactElementDisplayName")(a)
//     }
//     g["default"] = a
// }), 98);