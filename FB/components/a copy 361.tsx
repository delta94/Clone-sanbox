__d(
  "VisualCompletionTracing",
  [
    "ResourceTimingAPI",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionLogger",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "WebAPIs",
    "addAnnotations",
    "currentVCTraces",
    "foregroundRequestAnimationFrame",
    "performanceNowSinceAppStart",
    "setTimeoutAcrossTransitions",
    "timeSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set();
    a = !1;
    !a &&
      d("VisibilityAPI").canUseVisibilityAPI &&
      d("VisibilityState").subscribe(function (a, b) {
        b &&
          d("currentVCTraces")
            .getCurrentVCTraces()
            .forEach(function (a) {
              a.pendingMutations.forEach(function (b, c) {
                a.addVisualElement(
                  b.mutationSeq,
                  c,
                  b.mutationType,
                  b.displayTimestamp
                ),
                  a.intersectionObserver && a.intersectionObserver.unobserve(c),
                  a.unlock(b.lockId);
              }),
                a.pendingMutations.clear();
            });
      });
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g, i) {
        var j;
        j = a.call(this, b, e, f, g, i) || this;
        j.pendingLocks = new Map();
        j.pendingImages = new Map();
        j.$VisualCompletionTracing1 = new Map();
        j.$VisualCompletionTracing2 = null;
        j.loadingStateObserver = null;
        j.$VisualCompletionTracing3 = [];
        j.pendingLoadingElements = new Map();
        j.visibleLoadingElements = new Set();
        j.$VisualCompletionTracing4 = 0;
        j.$VisualCompletionTracing5 = 0;
        j.$VisualCompletionTracing6 = [];
        j.$VisualCompletionTracing7 = [];
        j.mutationSeq = 0;
        j.mutationObserver = null;
        j.intersectionObserver = null;
        j.pendingMutations = new Map();
        j.loggingScheduled = !1;
        j.$VisualCompletionTracing8 = new Map();
        j.intersectionObserverCallback = function (a) {
          Array.prototype.forEach.call(a, function (a) {
            var b = j.pendingMutations.get(a.target);
            b &&
              (j.addVisualElement(
                b.mutationSeq,
                a.target,
                b.mutationType,
                c("timeSinceAppStart")(a.time),
                d("WebAPIs").intersectionObserverEntryIsIntersecting(a)
              ),
              d("WebAPIs").intersectionObserverEntryIsIntersecting(a) &&
                j.addFirstMarkerPoint(
                  "firstPaint",
                  c("timeSinceAppStart")(a.time),
                  { mutationType: b.mutationType }
                ),
              j.cleanupPendingMutation(a.target));
          });
        };
        j.mutationRecordHandler = function (a) {
          j.mutationSeq++;
          a = d("VisualCompletionUtil").extractMutationElements(
            a,
            babelHelpers.assertThisInitialized(j)
          );
          j.trackElements(a, j.mutationSeq);
        };
        j.loadingStateObserverCallback = function (a) {
          Array.from(a).forEach(function (a) {
            d("WebAPIs").intersectionObserverEntryIsIntersecting(a)
              ? (j.loadingElementAdded(a.target),
                j.visibleLoadingElements.add(a.target),
                j.addFirstMarkerPoint(
                  "loadingState_start",
                  c("timeSinceAppStart")(a.time)
                ),
                j.addFirstMarkerPoint(
                  "firstPaint",
                  c("timeSinceAppStart")(a.time),
                  { mutationType: "loadingState" }
                ))
              : j.loadingElementRemoved(a.target);
          });
        };
        j.elementVisibilityCallback = function (a) {
          Array.from(a).forEach(function (a) {
            if (!d("WebAPIs").intersectionObserverEntryIsIntersecting(a))
              return;
            a = a.target;
            var b = j.$VisualCompletionTracing8.get(a);
            if (b == null) return;
            b.callback();
            b.executeOnce && j.$VisualCompletionTracing8["delete"](a);
          });
        };
        d("WebAPIs").MutationObserver &&
          (j.mutationObserver = new (d("WebAPIs").MutationObserver)(
            j.mutationRecordHandler
          ));
        d("WebAPIs").IntersectionObserver &&
          ((j.loadingStateObserver = new (d("WebAPIs").IntersectionObserver)(
            j.loadingStateObserverCallback
          )),
          (j.intersectionObserver = new (d("WebAPIs").IntersectionObserver)(
            j.intersectionObserverCallback
          )),
          (j.$VisualCompletionTracing2 = new (d(
            "WebAPIs"
          ).IntersectionObserver)(j.elementVisibilityCallback)));
        d("currentVCTraces").addVCTrace(
          f,
          babelHelpers.assertThisInitialized(j)
        );
        g === "INTERACTION"
          ? (j.measureOriginalViewport = !1)
          : (d("currentVCTraces").setCurrentNavigationVCTrace(
              babelHelpers.assertThisInitialized(j)
            ),
            (j.measureOriginalViewport = !0),
            i.measureOriginalViewportOnNavigation != null &&
              (j.measureOriginalViewport =
                i.measureOriginalViewportOnNavigation),
            h.forEach(function (a) {
              j.observeMutation(a);
            }));
        d("VisualCompletionUtil").setupScrollHandler(
          babelHelpers.assertThisInitialized(j)
        );
        return j;
      }
      var e = b.prototype;
      e.addMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        this.mutationSeq++;
        this.trackElements([[a, "mutationRoot"]], this.mutationSeq);
        return this.observeMutation(a);
      };
      e.dumpLocks = function () {
        return [
          this.pendingLocks,
          this.pendingLoadingElements,
          this.pendingImages,
        ];
      };
      e.lock = function (a) {
        var b = this;
        this.pendingLocks.set(a, c("performanceNowSinceAppStart")());
        return function () {
          b.unlock(a);
        };
      };
      e.imageDone = function (a) {
        var b = this.pendingImages.get(a);
        if (b == null) return;
        this.stateLog.set("imgLoad_" + this.$VisualCompletionTracing4++, [
          b,
          c("performanceNowSinceAppStart")(),
        ]);
        this.pendingImages["delete"](a);
        this.attemptMeasurement();
      };
      e.imageWait = function (a) {
        if (this.reported) return;
        this.pendingImages.set(a, c("performanceNowSinceAppStart")());
      };
      e.cleanupPendingMutation = function (a, b) {
        var c = this.pendingMutations.get(a);
        c &&
          (this.intersectionObserver != null &&
            this.intersectionObserver.unobserve(a),
          this.unlock(c.lockId, b),
          this.pendingMutations["delete"](a));
      };
      e.loadingElementRemoved = function (a) {
        var b = this.pendingLoadingElements.get(a);
        b != null &&
          (this.stateLog.set(
            "loadingState_" + this.$VisualCompletionTracing4++,
            [b, c("performanceNowSinceAppStart")()]
          ),
          this.pendingLoadingElements["delete"](a),
          this.visibleLoadingElements.has(a) &&
            (this.visibleLoadingElements["delete"](a),
            this.addMarkerPoint(
              "loadingState_end",
              c("performanceNowSinceAppStart")()
            )),
          this.attemptMeasurement());
      };
      e.loadingElementAdded = function (a) {
        if (this.reported) return;
        this.pendingLoadingElements.set(a, c("performanceNowSinceAppStart")());
      };
      e.waitLoadingState = function (a) {
        var b = this;
        if (this.reported) return function () {};
        var c = this.$VisualCompletionTracing1.get(a);
        if (c)
          return function () {
            c(), b.loadingElementRemoved(a);
          };
        if (d("VisualCompletionUtil").shouldIgnoreMutation(a, this))
          return function () {};
        if (this.config.bypass_detached_element && a.isConnected === !1)
          return function () {};
        this.loadingStateObserver && this.loadingStateObserver.observe(a);
        ((d("VisibilityAPI").canUseVisibilityAPI &&
          !d("VisibilityAPI").isVisibilityHidden()) ||
          d("VisualCompletionUtil").isInAboveTheFold(a, this)) &&
          this.loadingElementAdded(a);
        var e = function () {
          b.loadingStateObserver && b.loadingStateObserver.unobserve(a),
            b.$VisualCompletionTracing1["delete"](a);
        };
        this.$VisualCompletionTracing1.set(a, e);
        return function () {
          e(), b.loadingElementRemoved(a);
        };
      };
      e.trackImage = function (a, b, c) {
        d("VisualCompletionUtil").trackImage(a, b, c, this);
      };
      e.unlock = function (a, b) {
        var d = this.pendingLocks.get(a);
        if (d == null) return;
        this.pendingLocks["delete"](a);
        b = b != null ? b + "_" + a : a;
        this.stateLog.set("Lock(" + b + ")", [
          d,
          c("performanceNowSinceAppStart")(),
        ]);
        this.attemptMeasurement();
      };
      e.checkDuplicatedMutationRoot = function (a) {
        a = a;
        while (a != null) {
          if (this.mutationRoots.has(a)) return !0;
          a = a.parentElement;
        }
        return !1;
      };
      e.observeMutation = function (a) {
        var b = this;
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        d("VisualCompletionUtil").isElementNode(a) &&
          this.mutationObserver &&
          this.mutationObserver.observe(
            a,
            d("VisualCompletionUtil").mutationObserverConfig
          );
        this.mutationRoots.add(a);
        return function () {
          b.mutationRoots["delete"](a);
        };
      };
      e.registerNavigationMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        h.add(a);
        return function () {
          h["delete"](a);
        };
      };
      e.scheduleIntersectionObserver = function (a, b, e, f) {
        var g = this;
        if (this.reported) return;
        if (this.$VisualCompletionTracing1.has(b)) return;
        if (this.config.bypass_detached_element && b.isConnected === !1) return;
        this.mutatedElementCount++;
        if (
          d("VisibilityAPI").canUseVisibilityAPI &&
          d("VisibilityAPI").isVisibilityHidden()
        )
          this.addVisualElement(a, b, e, f);
        else if (d("WebAPIs").IntersectionObserver) {
          this.cleanupPendingMutation(b);
          var h = e + "_paint_" + this.$VisualCompletionTracing4++;
          this.intersectionObserver && this.intersectionObserver.observe(b);
          this.lock(h);
          this.pendingMutations.set(b, {
            displayTimestamp: f,
            lockId: h,
            mutationType: e,
            mutationSeq: a,
          });
          this.config.intersection_observer_timeout != null &&
            c("setTimeoutAcrossTransitions")(function () {
              var d = g.pendingMutations.get(b);
              d != null &&
                d.lockId === h &&
                (b.isConnected !== !1 &&
                  g.addVisualElement(
                    a,
                    b,
                    "mutationTimeout",
                    c("performanceNowSinceAppStart")()
                  ),
                g.addAnnotationInt(
                  "intersection_observer_timeout_count",
                  ++g.$VisualCompletionTracing5
                ),
                g.cleanupPendingMutation(b, "timeout"));
            }, this.config.intersection_observer_timeout);
        } else {
          var i = e + "_paint_" + this.$VisualCompletionTracing4++;
          this.lock(i);
          d("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(
            function () {
              g.addVisualElement(a, b, e, c("performanceNowSinceAppStart")()),
                g.unlock(i);
            }
          );
        }
      };
      e.scheduleElementVisibleObserver = function (a, b, c) {
        var e = c.executeOnce;
        e = e === void 0 ? !0 : e;
        c = c.cleanAfterReport;
        c = c === void 0 ? !0 : c;
        if (this.reported) return;
        if (d("WebAPIs").IntersectionObserver) {
          var f = this.$VisualCompletionTracing8.get(a);
          f &&
            this.$VisualCompletionTracing2 &&
            this.$VisualCompletionTracing2.unobserve(a);
          this.$VisualCompletionTracing8.set(a, {
            executeOnce: e,
            callback: b,
            cleanAfterReport: c,
          });
          this.$VisualCompletionTracing2 &&
            this.$VisualCompletionTracing2.observe(a);
        } else return;
      };
      e.trackElements = function (a, b) {
        var e = this;
        if (this.reported) return;
        var f = [];
        a.forEach(function (a) {
          var b = a[0];
          d("VisualCompletionUtil").isElementNode(b) &&
            !d("VisualCompletionUtil").useCustomTracking(b) &&
            f.push(a);
        });
        var g = c("performanceNowSinceAppStart")();
        f.forEach(function (a) {
          var c = a[0];
          a = a[1];
          d("VisualCompletionUtil").checkLoadingStates(c, e);
          e.scheduleIntersectionObserver(b, c, a, g);
        });
        var h = d("currentVCTraces").getCurrentNavigationVCTrace();
        this.interactionType === "INTERACTION" &&
          h != null &&
          !h.reported &&
          a.forEach(function (a) {
            a = a[0];
            h == null ? void 0 : h.excludeElement(a);
          });
      };
      e.onBeforeComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTracing6.push(a);
      };
      e.onComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTracing7.push(a);
      };
      e.attemptMeasurement = function (a) {
        var b = this;
        a === void 0 && (a = !1);
        if (
          !a &&
          (this.loggingScheduled ||
            this.reported ||
            this.pendingLocks.size > 0 ||
            this.pendingLoadingElements.size > 0 ||
            this.pendingImages.size > 0)
        )
          return;
        this.loggingScheduled = !0;
        var e = function () {
            b.mutationObserver && b.mutationObserver.disconnect();
            b.$VisualCompletionTracing1.forEach(function (a) {
              a();
            });
            b.loadingStateObserver && b.loadingStateObserver.disconnect();
            b.$VisualCompletionTracing1.clear();
            b.$VisualCompletionTracing3.forEach(function (a) {
              a && a.disconnect();
            });
            d("currentVCTraces").removeVCTrace(b.traceID);
            b.intersectionObserver && b.intersectionObserver.disconnect();
            b.pendingMutations.clear();
            !a &&
              d("ResourceTimingAPI").canUseResourceTimingAPI() &&
              d("VisualCompletionUtil").scanCssBgElements(b);
            var e = b.calculate(a);
            b.$VisualCompletionTracing6.forEach(function (a) {
              a(e, b.pendingLoadingElements);
            });
            b.$VisualCompletionTracing6 = [];
            c("VisualCompletionTraceObserver").emit(e);
            b.$VisualCompletionTracing7.forEach(function (a) {
              a(e);
            });
            b.$VisualCompletionTracing7 = [];
            b.$VisualCompletionTracing2 &&
              b.$VisualCompletionTracing2.disconnect();
            b.$VisualCompletionTracing8.clear();
            b.visibleLoadingElements.clear();
            b.tearDown();
          },
          f =
            this.config.defer_expensive_calculation && !a
              ? this.config.defer_expensive_calculation
              : function (a) {
                  return a();
                };
        f(e);
      };
      e.forceMeasurement = function () {
        var a = this;
        if (this.reported) return;
        this.pendingLocks.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: { incompleteLockCount: this.pendingLocks.size },
          }),
          this.pendingLocks.forEach(function (b, d) {
            a.addTag("incompleteLocks", d),
              a.stateLog.set("incomplete_" + d, [
                b,
                c("performanceNowSinceAppStart")(),
              ]);
          }));
        this.pendingLoadingElements.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: {
              incompleteLoadingElementsCount: this.pendingLoadingElements.size,
            },
          }),
          this.pendingLoadingElements.forEach(function (b) {
            a.stateLog.set(
              "incomplete_loadingState_" + a.$VisualCompletionTracing4++,
              [b, c("performanceNowSinceAppStart")()]
            );
          }));
        this.pendingImages.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: { incompleteImageCount: this.pendingImages.size },
          }),
          this.pendingImages.forEach(function (b) {
            a.stateLog.set(
              "incomplete_imgLoad_" + a.$VisualCompletionTracing4++,
              [b, c("performanceNowSinceAppStart")()]
            );
          }));
        this.attemptMeasurement(!0);
      };
      e.tearDown = function () {
        a.prototype.tearDown.call(this);
        for (
          var b = this.$VisualCompletionTracing8.entries(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          e.cleanAfterReport && this.$VisualCompletionTracing8["delete"](f);
        }
        this.pendingLocks.clear();
        this.pendingLoadingElements.clear();
        this.pendingImages.clear();
      };
      return b;
    })(c("VisualCompletionLogger"));
    g["default"] = b;
  },
  98
);
