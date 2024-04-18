__d("RunComet", ["ExecutionEnvironment", "FBLogger", "createCancelableFunction", "emptyFunction", "recoverableViolation", "setTimeout", "unexpectedUseInComet"], (function (a, b, c, d, e, f, g) {
  "use strict";
  var h, i = {},
      j = !1,
      k = !1,
      l = {
          remove: c("emptyFunction")
      };

  function m(a, b) {
      i.unload == null && (i.unload = [], i.afterunload = [], (h || (h = c("ExecutionEnvironment"))).canUseEventListeners && window.addEventListener("unload", function () {
          p("unload"), p("afterunload")
      })), i[a] == null ? (c("recoverableViolation")("EVENT_LISTENERS." + a + " wasn't initialized but should have been!", "comet_infra"), i[a] = [b]) : i[a].push(b)
  }

  function n(a) {
      a || c("recoverableViolation")("Undefined event listener handler is not allowed", "comet_infra");
      return c("createCancelableFunction")((a = a) != null ? a : c("emptyFunction"))
  }

  function o(a) {
      return {
          remove: function () {
              a.cancel()
          }
      }
  }

  function p(a) {
      var b = i[a] || [];
      for (var d = 0; d < b.length; d++) {
          var e = b[d];
          try {
              e()
          } catch (b) {
              c("FBLogger")("comet_infra").catching(b).mustfix("Hit an error while executing '" + a + "' event listeners.")
          }
      }
      i[a] = []
  }

  function q(a) {
      if (j) {
          a();
          return o(n(c("emptyFunction")))
      }
      a = n(a);
      i.domcontentloaded == null ? (i.domcontentloaded = [a], (h || (h = c("ExecutionEnvironment"))).canUseEventListeners && window.addEventListener("DOMContentLoaded", function () {
          p("domcontentloaded")
      }, !0)) : i.domcontentloaded.push(a);
      return o(a)
  }

  function a(a) {
      a = n(a);
      m("afterunload", a);
      return o(a)
  }

  function b(a) {
      a = n(a);
      i.load == null ? (i.load = [a], (h || (h = c("ExecutionEnvironment"))).canUseEventListeners && window.addEventListener("load", function () {
          p("domcontentloaded"), p("load")
      })) : i.load.push(a);
      k && c("setTimeout")(function () {
          p("domcontentloaded"), p("load")
      }, 0);
      return o(a)
  }

  function d(a) {
      a = n(a);
      m("unload", a);
      return o(a)
  }

  function e(a, b) {
      if (b !== !1) {
          b = "Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";
          c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b)
      }
      b = n(a);
      i.beforeunload == null && (i.beforeunload = [], (h || (h = c("ExecutionEnvironment"))).canUseEventListeners && window.addEventListener("beforeunload", function (a) {
          var b = i.beforeunload || [];
          for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
              var f;
              if (d) {
                  if (e >= b.length) break;
                  f = b[e++]
              } else {
                  e = b.next();
                  if (e.done) break;
                  f = e.value
              }
              f = f;
              var g = void 0;
              try {
                  g = f()
              } catch (a) {
                  c("FBLogger")("comet_infra").catching(a).mustfix("Hit an error while executing onBeforeUnload event listeners.")
              }
              if (g !== void 0) {
                  g != null && g.body != null && (g = g.body);
                  a.preventDefault();
                  a.returnValue = g;
                  return g
              }
          }
      }));
      i.beforeunload.push(b);
      return o(b)
  }
  var r = e;

  function f(a) {
      c("unexpectedUseInComet")("Run.onLeave");
      return l
  }

  function s(a, b) {
      c("unexpectedUseInComet")("Run.onCleanupOrLeave");
      return l
  }

  function t(a) {
      c("unexpectedUseInComet")("Run.removeHook")
  }

  function u() {
      document.readyState === "loading" ? q(function () {
          j = !0
      }) : j = !0;
      if (document.readyState === "complete") k = !0;
      else {
          var a = window.onload;
          window.onload = function () {
              a && a(), k = !0
          }
      }
  }(h || (h = c("ExecutionEnvironment"))).canUseDOM && u();
  u = null;
  var v = null;
  g.onLoad = q;
  g.onAfterUnload = a;
  g.onAfterLoad = b;
  g.onUnload = d;
  g.onBeforeUnload = e;
  g.maybeOnBeforeUnload = r;
  g.onLeave = f;
  g.onCleanupOrLeave = s;
  g.__removeHook = t;
  g.__domContentCallback = u;
  g.__onloadCallback = v
}), 98);



import { ExecutionEnvironment, FBLogger, createCancelableFunction, emptyFunction, recoverableViolation, setTimeout, unexpectedUseInComet } from 'module-name';

interface EventListener {
  (): void;
}

interface EventListeners {
  [eventType: string]: EventListener[];
}


let eventListeners: EventListeners = {};
let isContentLoaded: boolean = false;
let isLoaded: boolean = false;
const noop = { remove: emptyFunction };

function registerListener(event: keyof EventListeners, callback: () => void) {
  if (!eventListeners.unload) {
    eventListeners.unload = [];
    eventListeners.afterunload = [];
    if (ExecutionEnvironment.canUseEventListeners) {
      window.addEventListener('unload', () => {
        executeListeners('unload');
        executeListeners('afterunload');
      });
    }
  }
  if (!eventListeners[event]) {
    recoverableViolation(
      `EVENT_LISTENERS.${event} wasn't initialized but should have been!`, 
      'comet_infra'
    );
    eventListeners[event] = [callback];
  } else {
      eventListeners[event].push(callback);
  }
}

function createListener(callback?: () => void) {
  if (!callback) {
    recoverableViolation('Undefined event listener handler is not allowed', 'comet_infra');
  }
  return createCancelableFunction(callback || emptyFunction);
}

function createRemoveCallback(listener: ReturnType<typeof createListener>) {
  return {
    remove: () => {
      listener.cancel();
    }
  };
}

function executeListeners(event: keyof EventListeners) {
  const callbacks = eventListeners[event] || [];
  for (let i = 0; i < callbacks.length; i++) {
    const callback = callbacks[i];
    try {
      callback();
    } catch (error) {
      FBLogger('comet_infra').catching(error).mustfix(
        `Hit an error while executing '${event}' event listeners.`
      );
    }
  }
  eventListeners[event] = [];
}

function onLoad(callback: () => void) {
  if (isContentLoaded) {
      callback();
      return { remove: createRemoveCallback(createListener(emptyFunction)) };
  }
  const cancelableHandler = createListener(callback);

  if(!eventListeners.domcontentloaded) {
      eventListeners.domcontentloaded = [callback]

      if (ExecutionEnvironment.canUseEventListeners) {
          window.addEventListener('DOMContentLoaded', () => {
            executeListeners('domcontentloaded'); 
          }, true);
      }
  } else {
      eventListeners.domcontentloaded.push(callback)
  }
  addEventListener('DOMContentLoaded', cancelableHandler);
  return createRemoveCallback(callback);
}

function onAfterUnload(callback: () => void) {
callback = createListener(callback);
registerListener('afterunload', callback);
return createRemoveCallback(callback);
}

function onAfterLoad(callback: () => void) {
  callback = createListener(callback);
  if (!eventListeners.load) {
      eventListeners.load = [callback];
    if (ExecutionEnvironment.canUseEventListeners) {
      window.addEventListener('load', () => {
        executeListeners('domcontentloaded');
        executeListeners('load');
      });
    }
  } else {
      eventListeners.load.push(callback);
  }
  if (isContentLoaded) {
    setTimeout(() => {
      executeListeners('domcontentloaded');
      executeListeners('load');
    }, 0);
  }
  return createRemoveCallback(callback);
}


function onUnload(callback: () => void) {
  callback = createListener(callback);
  addEventListener('unload', callback);
  return createRemoveCallback(callback);
}

function onBeforeUnload(callback: () => void | {body: string}, includeQuicklingEvents?: boolean) {
  if (includeQuicklingEvents !== false) {
    const message = 
      'Run.onBeforeUnload was called with include_quickling_events as true or undefined, ' +
      'but this is not valid in Comet.';
    FBLogger('comet_infra').blameToPreviousFrame().mustfix(message);
  }

  callback = createListener(callback);

  if (!eventListeners.beforeunload) {
      eventListeners.beforeunload = [];
    if (ExecutionEnvironment.canUseEventListeners) {
      window.addEventListener('beforeunload', (event) => {
        const callbacks = eventListeners.beforeunload || [];
        for (const callback of callbacks) {
          let returnValue;
          try {
            returnValue = callback();
          } catch (error) {
            FBLogger('comet_infra').catching(error).mustfix(
              'Hit an error while executing onBeforeUnload event listeners.'
            );
          }
          if (returnValue !== undefined) {
            if (returnValue != null && returnValue.body != null) {
              returnValue = returnValue.body;
            }
            event.preventDefault();
            event.returnValue = returnValue;
            return returnValue;
          }
        }
      });
    }
  }

  eventListeners.beforeunload.push(callback);

  return createRemoveCallback(callback);
}

const maybeOnBeforeUnload = onBeforeUnload;

function onLeave(callback: () => void) {
unexpectedUseInComet('Run.onLeave');
return eventListeners.remove; 
}

function onCleanupOrLeave(callback: () => void) {
unexpectedUseInComet('Run.onCleanupOrLeave');
return eventListeners.remove;
}

function __removeHook(callback: () => void) {
unexpectedUseInComet('Run.removeHook');
}

function __domContentCallback() {
if (document.readyState === 'loading') {
  onLoad(() => {
      isContentLoaded = true;
  });
} else {
  isContentLoaded = true;
}

if (document.readyState === 'complete') {
  isLoaded = true;
} else {
  const originalOnload = window.onload;
  window.onload = () => {
    if (originalOnload) {
      originalOnload(); 
    }
    isLoaded = true;
  };
}
}

if (ExecutionEnvironment.canUseDOM) {
__domContentCallback();
}

let __onloadCallback: (() => void) | null = null;



if (ExecutionEnvironment.canUseDOM) {
  if (document.readyState === "loading") {
      onLoad(() => { isContentLoaded = true; });
  } else {
      isContentLoaded = true;
  }
  if (document.readyState === "complete") {
      isLoaded = true;
  } else {
      window.onload = () => { isLoaded = true; };
  }
}


export default {
  onLoad,
  onAfterUnload,
  onAfterLoad,
  onUnload,
  onBeforeUnload,
  maybeOnBeforeUnload,
  onLeave,
  onCleanupOrLeave,
  __removeHook,
  __domContentCallback,
  __onloadCallback
};