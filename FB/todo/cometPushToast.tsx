__d("cometPushToast", ["ix", "BaseToasterStateManager", "CometIcon.react", "deferredLoadComponent", "fbicon", "react", "requireDeferred"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react"),
        k = c("BaseToasterStateManager").getInstance(),
        l = c("deferredLoadComponent")(c("requireDeferred")("CometToast.react").__setRef("cometPushToast"));

    function m(a, b, c) {
        b === void 0 && (b = 2750);
        var d = (c = c) != null ? c : k,
            e = d.push(j.jsx(l, babelHelpers["extends"]({}, a, {
                loadImmediately: !0,
                onDismiss: function () {
                    return d.expire(e)
                }
            })), b);
        return e
    }

    function a(a, b) {
        return m({
            message: a
        }, b)
    }

    function b(a, b, e) {
        b === void 0 && (b = 2750);
        return m(babelHelpers["extends"]({}, a, {
            icon: j.jsx(c("CometIcon.react"), {
                color: "warning",
                icon: d("fbicon")._(h("502062"), 20)
            })
        }), b, e)
    }
    g.cometPushToast = m;
    g.cometPushSimpleToast = a;
    g.cometPushErrorToast = b
}), 98);


// cometPushToast.ts

import { BaseToasterStateManager } from 'BaseToasterStateManager';
import CometIcon from 'CometIcon.react';
import { deferredLoadComponent } from 'deferredLoadComponent'; 
import { fbicon } from 'fbicon';
import React from 'react';
import { requireDeferred } from 'requireDeferred';

const CometToast = deferredLoadComponent(
  requireDeferred('CometToast.react').__setRef('cometPushToast')
);

interface Options {
    message: string;
    icon?: JSX.Element;
}

const toaster = BaseToasterStateManager.getInstance();

export function cometPushToast(options: Options, duration = 2750, stateManager = toaster) {
  const id = stateManager.push(
    <CometToast {...options} loadImmediately onDismiss={() => stateManager.expire(id)} />, 
    duration
  );

  return id;
}

export function cometPushSimpleToast(message: string, durationMs?: number) {

  return cometPushToast({message}, durationMs);

} 

export function cometPushErrorToast(options: Options, durationMs = 2750, stateManager) {

  return cometPushToast({
    ...options,
    icon: <CometIcon color="warning" icon={fbicon('error')} />
  }, durationMs, stateManager);

}