__d("ImagePerfTracker", ["ImagePerfLogger", "OneTraceCore", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4
      , i = new Map()
      , j = typeof ((e = window.PerformanceObserver) == null ? void 0 : (f = e.supportedEntryTypes) == null ? void 0 : f.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("element")
      , k = !1
      , l = null;
    function a() {
        if (k)
            return;
        k = !0;
        if (!j)
            return;
        typeof WeakSet === "function" && c("OneTraceCore").subscribe("trace-start", function(a) {
            (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") && (l = new WeakSet())
        });
        var a = new window.PerformanceObserver(function(a) {
            a = a.getEntries();
            a.forEach(function(a) {
                var b = a.element;
                if (b) {
                    b = i.get(b);
                    b && (b.elementTiming = a,
                    n(b))
                }
            })
        }
        );
        a.observe({
            buffered: !0,
            type: "element"
        })
    }
    function b(a, b, d, e) {
        a = a;
        if (!j || !k)
            return;
        if (!a.hasAttribute("elementtiming"))
            return;
        var f = i.get(a);
        if (f && f.url === d)
            return;
        if ((f = l) == null ? void 0 : f.has(a))
            return;
        var g = {
            annotationInt: new Map(),
            annotationString: new Map(),
            setTimeoutID: null,
            commitTime: b,
            element: a,
            points: new Map(),
            url: d
        };
        Object.keys(e).forEach(function(a) {
            var b = e[a];
            typeof b === "string" ? g.annotationString.set(a, b) : typeof b === "number" && g.annotationInt.set(a, b)
        });
        g.points.set("commitTime", b);
        g.annotationString.set("tracePolicy", (d = (f = c("OneTraceCore").getLastNavigation()) == null ? void 0 : f.tracePolicy) != null ? d : "");
        i.set(a, g);
        g.setTimeoutID = c("setTimeoutAcrossTransitions")(function() {
            m(g)
        }, h)
    }
    function m(a) {
        a.setTimeoutID != null && (clearTimeout(a.setTimeoutID),
        a.setTimeoutID = null),
        i["delete"](a.element)
    }
    function n(a) {
        if (a.elementTiming != null && a.elementTiming.loadTime >= a.commitTime) {
            var b;
            (b = l) == null ? void 0 : b.add(a.element);
            d("ImagePerfLogger").logImagePerf(a);
            m(a)
        }
    }
    g.init = a;
    g.trackImagePerf = b
}
), 98);


const ONE_MINUTE = 60000;

const elementTimingMap = new Map();
const isElementTimingSupported = typeof PerformanceObserver === 'function' && PerformanceObserver.supportedEntryTypes.includes('element');
let isInitialized = false;
let initialLoadNavigationTraceSet = null;

function initialize() {
  if (isInitialized) {
    return;
  }
  isInitialized = true;

  if (!isElementTimingSupported) {
    return;
  }

  if (typeof WeakSet === 'function') {
    import('OneTraceCore').then((OneTraceCore) => {
      OneTraceCore.subscribe('trace-start', (trace) => {
        if (trace.traceType === 'INITIAL_LOAD' || trace.traceType === 'NAVIGATION') {
          initialLoadNavigationTraceSet = new WeakSet();
        }
      });
    });
  }

  const observer = new PerformanceObserver((entries) => {
    entries = entries.getEntries();
    entries.forEach((entry) => {
      const element = entry.element;
      if (element) {
        const elementData = elementTimingMap.get(element);
        if (elementData) {
          elementData.elementTiming = entry;
          handleImageLoad(elementData);
        }
      }
    });
  });

  observer.observe({
    buffered: true,
    type: 'element',
  });
}

function trackImagePerf(
  element: Element,
  commitTime: number,
  imageUrl: string,
  annotations: Record<string, string | number>
) {
  if (!isElementTimingSupported || !isInitialized) {
    return;
  }

  if (!element.hasAttribute('elementtiming')) {
    return;
  }

  const existingElementData = elementTimingMap.get(element);
  if (existingElementData && existingElementData.url === imageUrl) {
    return;
  }

  if (initialLoadNavigationTraceSet?.has(element)) {
    return;
  }

  const elementData = {
    annotationInt: new Map(),
    annotationString: new Map(),
    setTimeoutID: null,
    commitTime,
    element,
    points: new Map(),
    url: imageUrl,
  };

  Object.keys(annotations).forEach((key) => {
    const value = annotations[key];
    if (typeof value === 'string') {
      elementData.annotationString.set(key, value);
    } else if (typeof value === 'number') {
      elementData.annotationInt.set(key, value);
    }
  });

  elementData.points.set('commitTime', commitTime);
  elementData.annotationString.set('tracePolicy', initialLoadNavigationTraceSet?.tracePolicy || '');

  elementTimingMap.set(element, elementData);

  elementData.setTimeoutID = setTimeout(() => {
    cleanupElementData(elementData);
  }, ONE_MINUTE);
}

function cleanupElementData(elementData) {
  if (elementData.setTimeoutID !== null) {
    clearTimeout(elementData.setTimeoutID);
    elementData.setTimeoutID = null;
  }

  elementTimingMap.delete(elementData.element);
}

function handleImageLoad(elementData) {
  if (elementData.elementTiming != null && elementData.elementTiming.loadTime >= elementData.commitTime) {
    initialLoadNavigationTraceSet?.add(elementData.element);
    import('ImagePerfLogger').then((ImagePerfLogger) => {
      ImagePerfLogger.logImagePerf(elementData);
    });
    cleanupElementData(elementData);
  }
}

export { initialize, trackImagePerf };
