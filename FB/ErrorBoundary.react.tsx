__d("ErrorBoundary.react", ["ErrorPubSub", "ErrorSerializer", "cr:1645510", "getErrorSafe", "getReactElementDisplayName", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a) {
        babelHelpers.inheritsLoose(d, a);

        function d() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                error: null,
                moduleName: i(c.props.children)
            }, c.suppressReactDefaultErrorLogging = !0, b) || babelHelpers.assertThisInitialized(c)
        }
        d.getDerivedStateFromError = function (a) {
            return {
                error: c("getErrorSafe")(a)
            }
        };
        var e = d.prototype;
        e.componentDidUpdate = function (a) {
            if (this.state.error && (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount !== a.forceResetErrorCount)) {
                this.setState({
                    error: null
                });
                return
            }
        };
        e.componentDidCatch = function (a, b) {
            a = b.componentStack;
            b = this.props;
            var d = b.augmentError,
                e = b.context;
            e = e === void 0 ? {} : e;
            var f = b.description;
            f = f === void 0 ? "base" : f;
            b = b.onError;
            e.messageFormat == null && (e.messageFormat = "caught error in module %s (%s)", e.messageParams = [this.state.moduleName, f]);
            f = this.state;
            var g = f.error;
            f = f.moduleName;
            g != null && (c("ErrorSerializer").aggregateError(g, {
                componentStack: a,
                loggingSource: "ERROR_BOUNDARY"
            }), c("ErrorSerializer").aggregateError(g, e), typeof d === "function" && d(g), c("ErrorPubSub").reportError(g), typeof b === "function" && b(g, f))
        };
        e.render = function () {
            var a = this.state,
                c = a.error;
            a = a.moduleName;
            if (c) {
                var d = this.props.fallback;
                return d != null ? d(c, a) : null
            }
            return b("cr:1645510") != null ? h.jsxs(h.Fragment, {
                children: [h.jsx(b("cr:1645510"), {}), this.props.children]
            }) : (d = this.props.children) != null ? d : null
        };
        return d
    }(h.PureComponent);
    a.defaultProps = {
        forceResetErrorCount: 0
    };

    function i(a) {
        a = h.Children.count(a) > 1 ? h.Children.toArray(a)[0] : a;
        return c("getReactElementDisplayName")(a)
    }
    g["default"] = a
}), 98);



import React, { Component, Children } from 'react';
import { ErrorPubSub, ErrorSerializer, getErrorSafe, getReactElementDisplayName } from 'ErrorPubSub';




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      moduleName: getReactElementDisplayName(props.children)
    };
    this.suppressReactDefaultErrorLogging = true;
  }

  static getDerivedStateFromError(error) {
    return {
      error: getErrorSafe(error),
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.error &&
      (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount !== prevProps.forceResetErrorCount)
    ) {
      this.setState({ error: null });
    }
  }

  componentDidCatch(error, errorInfo) {
    let { augmentError, context = {}, description = 'base', onError } = this.props;

    context === undefined && (context = {})
    description === undefined && (description = "base")

    if (context.messageFormat == null) {
      context.messageFormat = "caught error in module %s (%s)"
      context.messageParams = [this.state.moduleName, description]
    }

    const { error: aggregatedError, moduleName } = this.state;

    if (aggregatedError != null) {
      ErrorSerializer.aggregateError(aggregatedError, { componentStack: errorInfo.componentStack, loggingSource: 'ERROR_BOUNDARY' });
      ErrorSerializer.aggregateError(aggregatedError, context);
      if (typeof augmentError === 'function') {
        augmentError(aggregatedError);
      }
      ErrorPubSub.reportError(aggregatedError);
      if (typeof onError === 'function') {
        onError(aggregatedError, moduleName);
      }
    }
  }

  render() {
    const { error, moduleName } = this.state;
    if (error) {
      const { fallback } = this.props;
      return fallback != null ? fallback(error, moduleName) : null;
    }

    const { children } = this.props;
    if (Children.count(children) > 1) {
      return (
        <>
          {Children.toArray(children)[0]}
          {children}
        </>
      );
    }

    return children != null ? children : null;
  }
}

ErrorBoundary.defaultProps = {
  forceResetErrorCount: 0,
};

export default ErrorBoundary;
