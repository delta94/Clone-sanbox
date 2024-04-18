__d("BaseEntryPointPopoverTrigger.react", ["BaseEntryPointPopoverContainer.react", "BasePopoverTrigger.react", "CometRelay", "deepEquals", "react", "tracePolicyFromResource", "useCometPopoverInteractionTracing", "useCometRelayEntrypointContextualEnvironmentProvider"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
        k = b.useMemo,
        l = b.useRef;

    function a(a) {
        var b = a.doNotCloseOnOutsideClick,
            e = a.entryPointParams,
            f = a.fallback,
            g = a.onVisibilityChange,
            h = a.otherProps,
            m = a.popoverEntryPoint,
            n = a.preloadTrigger,
            o = a.tracePolicy;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["doNotCloseOnOutsideClick", "entryPointParams", "fallback", "onVisibilityChange", "otherProps", "popoverEntryPoint", "preloadTrigger", "tracePolicy"]);
        o = c("useCometPopoverInteractionTracing")((o = o) != null ? o : c("tracePolicyFromResource")("comet.popover", m.root), "entrypoint", n);
        var p = c("useCometRelayEntrypointContextualEnvironmentProvider")();
        p = d("CometRelay").useEntryPointLoader(p, m);
        var q = p[0],
            r = p[1];
        p = p[2];
        var s = l(null),
            t = j(function () {
                if (e == null) return;
                if (q !== null && c("deepEquals")(s.current, e)) return;
                s.current = e;
                r(e)
            }, [e, q, r]),
            u = k(function () {
                return {
                    entryPointParams: e,
                    entryPointReference: q,
                    load: t,
                    otherProps: h
                }
            }, [e, q, t, h]),
            v = j(function (a) {
                a && t(), g && g(a)
            }, [t, g]);
        return i.jsx(c("BasePopoverTrigger.react"), babelHelpers["extends"]({
            doNotCloseOnOutsideClick: b,
            fallback: f,
            interactionTracker: o,
            onHighIntentPreload: t,
            onLayerDetached: p,
            onVisibilityChange: v,
            popover: c("BaseEntryPointPopoverContainer.react"),
            popoverPreloadResource: m.root,
            popoverProps: u,
            preloadTrigger: n
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { useCallback, useMemo, useRef } from 'react';
import BaseEntryPointPopoverContainer from './BaseEntryPointPopoverContainer'; 
import BasePopoverTrigger from './BasePopoverTrigger';
import { useCometPopoverInteractionTracing, tracePolicyFromResource } from 'common/useCometPopoverInteractionTracing';
import { useCometRelayEntrypointContextualEnvironmentProvider } from 'CometRelayEnvironment';
import { useEntryPointLoader } from 'CometRelay';
import { deepEquals } from 'Utils';

interface Props {
  doNotCloseOnOutsideClick?: boolean;
  entryPointParams?: any;
  fallback?: React.ReactNode;
  onVisibilityChange?: (visible: boolean) => void;
  otherProps?: any;
  popoverEntryPoint: any;
  preloadTrigger?: any;
  tracePolicy?: any;
}

const BaseEntryPointPopoverTrigger = (props: Props) => {
  const {
    doNotCloseOnOutsideClick,
    entryPointParams,
    fallback,
    onVisibilityChange,
    otherProps,
    popoverEntryPoint,
    preloadTrigger,
    tracePolicy,
    ...rest
  } = props;

  const interactionTracker = useCometPopoverInteractionTracing(
    tracePolicy ?? tracePolicyFromResource('comet.popover', popoverEntryPoint.root),
    'entrypoint',
    preloadTrigger
  );

  const environment = useCometRelayEntrypointContextualEnvironmentProvider();
  const [entryPointReference, loadEntryPoint, entryPointLayer] = useEntryPointLoader(
    environment,
    popoverEntryPoint.root
  );

  const paramsRef = useRef(null);
  const load = useCallback(() => {
    if (entryPointParams == null) {
      return; 
    }
    if (entryPointReference !== null && deepEquals(paramsRef.current, entryPointParams)) {
      return;
    }
    paramsRef.current = entryPointParams;
    loadEntryPoint(entryPointParams);
  }, [entryPointParams, entryPointReference, loadEntryPoint]);

  const popoverProps = useMemo(() => {
    return {
      entryPointParams,
      entryPointReference, 
      load,
      otherProps
    };
  }, [entryPointParams, entryPointReference, load, otherProps]);

  const handleVisibilityChange = useCallback(
    (visible) => {
      if (visible) {
        load();
      }
      if (onVisibilityChange) {
        onVisibilityChange(visible);
      }
    },
    [load, onVisibilityChange]
  );

  return (
    <BasePopoverTrigger
      doNotCloseOnOutsideClick={doNotCloseOnOutsideClick}
      fallback={fallback}
      interactionTracker={interactionTracker}
      onHighIntentPreload={load}
      onLayerDetached={entryPointLayer}
      onVisibilityChange={handleVisibilityChange}
      popover={BaseEntryPointPopoverContainer}
      popoverPreloadResource={popoverEntryPoint.root}
      popoverProps={popoverProps}
      preloadTrigger={preloadTrigger}
      {...rest}
    />
  );
};

export default BaseEntryPointPopoverTrigger;
