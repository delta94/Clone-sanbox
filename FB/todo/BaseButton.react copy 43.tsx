__d("BaseToasterStateManager", ["CometMaxEnqueuedToastsSitevarConfig", "JSScheduler", "XPlatReactToasterStateManager", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h || d("react");

    function j(a) {
        (i || (i = d("JSScheduler"))).scheduleNormalPriCallback(function () {
            a()
        })
    }
    a = {
        getInstance: function () {
            return c("XPlatReactToasterStateManager").getInstance({
                callbackScheduler: j,
                maxQueuedToasts: c("CometMaxEnqueuedToastsSitevarConfig").max
            })
        },
        resetInstance_DO_NOT_USE: function () {
            c("XPlatReactToasterStateManager").resetInstance_DO_NOT_USE()
        }
    };
    g["default"] = a
}), 98);


// BaseToasterStateManager.ts

import { SchedulerCallback } from 'scheduler';

import CometMaxEnqueuedToastsSitevarConfig from 'CometMaxEnqueuedToastsSitevarConfig';
import { JSScheduler } from 'JSScheduler';
import { 
  ToasterStateManager,
  XPlatReactToasterStateManager 
} from 'XPlatReactToasterStateManager';

let instance: ToasterStateManager;

function callbackWrapper(callback: SchedulerCallback) {
  JSScheduler.scheduleNormalPriCallback(() => {
    callback();
  });
}

const BaseToasterStateManager = {

  getInstance() {
    if (!instance) {
      instance = XPlatReactToasterStateManager.getInstance({
        callbackScheduler: callbackWrapper,
        maxQueuedToasts: CometMaxEnqueuedToastsSitevarConfig.max,   
      });
    }
    return instance;
  },

  resetInstance_DO_NOT_USE() {
    XPlatReactToasterStateManager.resetInstance_DO_NOT_USE();
  }

};

export default BaseToasterStateManager;