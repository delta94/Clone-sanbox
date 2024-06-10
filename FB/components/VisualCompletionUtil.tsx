__d(
  "VisualCompletionUtil",
  [
    "ImageDownloadTracker",
    "ResourceTimingAPI",
    "VisualCompletionConstants",
    "addAnnotations",
    "currentVCTraces",
    "performance",
    "performanceNavigationStart",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = /url\(.*(http.*)\)/gi;
    function k(a) {
      return (a.right - a.left) * (a.bottom - a.top);
    }
    function l(a, b) {
      return {
        bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
        left: Math.min(Math.max(a.left, b.left), b.right),
        right: Math.max(Math.min(a.right, b.right), b.left),
        top: Math.min(Math.max(a.top, b.top), b.bottom),
      };
    }
    function m(a) {
      return { height: window.innerHeight, width: window.innerWidth };
    }
    function a(a, b) {
      if (typeof a.getBoundingClientRect !== "function") return !1;
      var c = m(b);
      a = a.getBoundingClientRect();
      var d = a.bottom,
        e = a.left,
        f = a.right;
      a = a.top;
      d = k(
        l(
          { bottom: d, left: e, right: f, top: a },
          { bottom: c.height, left: 0, right: c.width, top: -n(b).scrollY }
        )
      );
      return d > 0;
    }
    function n(a) {
      var b;
      a = (a = window.scrollX) != null ? a : 0;
      b = (b = window.scrollY) != null ? b : 0;
      return { scrollX: a, scrollY: b };
    }
    function b(a, b) {
      var c = 0;
      a = a;
      while (a && a.offsetParent && typeof a.offsetTop === "number")
        (c += a.offsetTop), (a = a.offsetParent);
      if (
        a &&
        a.offsetParent == null &&
        typeof a.getBoundingClientRect === "function"
      ) {
        var d = a.getBoundingClientRect();
        d = d.top;
        d >= 0 ? (c += d) : a === document.body && (c -= b.initialScrollY);
      }
      return c;
    }
    function e(a) {
      return a.split("#")[0];
    }
    function o(a) {
      if (a == null || a === "") return !1;
      a = a.replace(/ /g, "");
      return (
        a.indexOf("display:none") >= 0 ||
        a.indexOf("visibility:hidden") >= 0 ||
        a.indexOf("content-visibility:hidden") >= 0
      );
    }
    function p(a) {
      a = a;
      while (a) {
        if (
          (typeof a.getAttribute === "function" &&
            o(a.getAttribute("style"))) ||
          (typeof a.hasAttribute === "function" && a.hasAttribute("hidden"))
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    function q(a, b) {
      if (p(a)) return !0;
      var d = a;
      while (d) {
        if (b.mutationRoots.has(d)) return !1;
        if (b.pendingLoadingElements.has(d)) return !0;
        if (typeof d.getAttribute === "function") {
          var e = d.getAttribute(
            (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME
          );
          if (e === (h || (h = c("VisualCompletionConstants"))).IGNORE)
            return !0;
          if (
            d !== a &&
            e === (h || (h = c("VisualCompletionConstants"))).IGNORE_DYNAMIC
          ) {
            b.excludeElement(a);
            return !0;
          }
        }
        d = d.parentElement;
      }
      return !1;
    }
    function r(a, b, c) {
      if (
        I(b) &&
        !q(b, a) &&
        b.textContent != null &&
        b.parentElement != null
      ) {
        a = b.parentElement;
        if (H(a) && a.tagName !== "SCRIPT" && a.tagName !== "STYLE") {
          b = b.textContent;
          typeof b === "string" && (b = b.trim());
          if (b !== "")
            if (c != null && c.trim() === b) return null;
            else return a;
        }
      }
      return null;
    }
    function f(a, b) {
      var c = [];
      Array.from(a).forEach(function (a) {
        if (
          a.target.nodeType !== Node.ELEMENT_NODE &&
          a.target.nodeType !== Node.TEXT_NODE
        )
          return;
        var d = a.target;
        if (a.type === "childList" && a.addedNodes && a.addedNodes.length)
          Array.from(a.addedNodes).forEach(function (a) {
            a = a;
            if (q(a, b)) return;
            if (s(a)) {
              z(b.mutationSeq, a, "imgLoad", b);
              return;
            } else typeof a.querySelectorAll === "function" && y(b.mutationSeq, a, b);
            if (a.nodeType === Node.ELEMENT_NODE) c.push([a, "mutationAdd"]);
            else if (
              b.config.observeTextMutation &&
              a.nodeType === Node.TEXT_NODE
            ) {
              a = r(b, a);
              a != null && c.push([a, "mutationTextAdd"]);
            }
          });
        else if (a.type === "attributes" && !q(d, b))
          if (a.attributeName === "hidden")
            d.hasAttribute("hidden") || c.push([d, "mutationHiddenAttribute"]);
          else if (a.attributeName === "style") {
            var e = d.getAttribute("style"),
              f = a.oldValue;
            o(f) && !o(e) && c.push([d, "mutationStyleAttribute"]);
          } else
            ((G(d) === "image" && a.attributeName === "href") ||
              (G(d) === "IMG" && a.attributeName === "src")) &&
              z(b.mutationSeq, d, "mutationImageAttribute", b);
        else if (
          b.config.observeTextMutation &&
          a.type === "characterData" &&
          d.nodeType === Node.TEXT_NODE
        ) {
          f = r(b, d, a.oldValue);
          f != null && c.push([f, "mutationTextUpdate"]);
        }
      });
      return c;
    }
    function s(a) {
      return G(a) === "IMG" || G(a) === "image";
    }
    function t(a) {
      return G(a) === "picture";
    }
    function u(a) {
      return s(a) || t(a);
    }
    function v(a) {
      if (typeof window.getComputedStyle !== "function") return null;
      a = window.getComputedStyle(a);
      var b = a["background-image"];
      if (a.visibility !== "hidden" && b && b !== "none") {
        j.lastIndex = 0;
        a = j.exec(b);
        if (a && a.length > 1) return a[1].replace('"', "");
      }
      return null;
    }
    function w(a) {
      if (a.reported) return;
      var b = c("performanceNowSinceAppStart")();
      a.checkViewport();
      a.mutationRoots.forEach(function (b) {
        if (b && typeof b.querySelectorAll === "function") {
          b = b.querySelectorAll("div,i,span,li");
          Array.prototype.forEach.call(b, function (b) {
            if (
              b.textContent ||
              b.children.length ||
              a.cssBgElements.has(b) ||
              q(b, a) ||
              !a.inViewport(b)
            )
              return;
            var c = v(b);
            a.bgCheckCount++;
            if (c == null) return;
            c = {
              element: b,
              url: c,
              resourceTiming: d("ResourceTimingAPI").getResourceTiming(c),
            };
            a.cssBgElements.set(b, c);
          });
        }
      });
      a.cssBgScanOverhead = c("performanceNowSinceAppStart")() - b;
    }
    function x(a, b) {
      if (
        typeof a.getAttribute === "function" &&
        a.getAttribute(
          (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME
        ) === (h || (h = c("VisualCompletionConstants"))).LOADING_STATE
      )
        b.waitLoadingState(a);
      else if (typeof a.querySelectorAll === "function") {
        a = a.querySelectorAll(
          "[" +
            (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME +
            "=" +
            h.LOADING_STATE +
            "]"
        );
        Array.from(a).forEach(function (a) {
          b.waitLoadingState(a);
        });
      }
    }
    function y(a, b, c) {
      b = b.querySelectorAll("img, image");
      Array.from(b).forEach(function (b) {
        if (q(b, c)) return;
        z(a, b, "imgLoad", c);
      });
    }
    function z(a, b, d, e) {
      if (b.complete) {
        b.getAttribute(
          (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME
        ) === (h || (h = c("VisualCompletionConstants"))).MEDIA_VC_IMAGE &&
          e.scheduleIntersectionObserver(
            a,
            b,
            d,
            c("performanceNowSinceAppStart")()
          );
        return;
      }
      var f = b.currentSrc || b.src;
      if (G(b) === "image" && typeof b.getAttribute === "function") {
        var g = b.getAttribute("xlink:href");
        g != null && (f = g);
      }
      if (f == null || f === "" || f.indexOf("http") !== 0) return;
      var i = function () {
          e.imageDone(b);
        },
        j = function () {
          e.imageWait(b);
        };
      if (b.getAttribute("loading") === "lazy") {
        g = A(a, b, d, i, e);
        var k = g.loadHandler,
          l = g.errorHandler;
        e.scheduleElementVisibleObserver(
          b,
          function () {
            if (e.reported || b.complete) return;
            j();
            b.addEventListener("load", k);
            b.addEventListener("error", l);
          },
          { executeOnce: !0, cleanAfterReport: !0 }
        );
      } else if (e.config.use_image_download_tracker === !0)
        c("ImageDownloadTracker")(f, j)
          .then(function () {
            var f = c("performanceNowSinceAppStart")();
            e.scheduleIntersectionObserver(a, b, d, f);
            i();
          })
          ["catch"](function () {
            return i();
          });
      else {
        g = A(a, b, d, i, e);
        f = g.loadHandler;
        g = g.errorHandler;
        j();
        b.addEventListener("load", f);
        b.addEventListener("error", g);
      }
    }
    function A(a, b, d, e, f) {
      var g = function g() {
          var i = c("performanceNowSinceAppStart")();
          f.scheduleIntersectionObserver(a, b, d, i);
          e();
          b.removeEventListener("load", g);
          b.removeEventListener("error", h);
        },
        h = function a() {
          e(),
            b.removeEventListener("load", g),
            b.removeEventListener("error", a);
        };
      return { loadHandler: g, errorHandler: h };
    }
    function B(a, b) {
      return (
        typeof a.getAttribute === "function" &&
        a.getAttribute(
          (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME
        ) === b
      );
    }
    function C(a) {
      var b = function () {
        (a.scrolled = !0),
          a.markerPoints.has("scroll_start") ||
            a.addMarkerPoint(
              "scroll_start",
              c("performanceNowSinceAppStart")()
            );
      };
      try {
        window.addEventListener("scroll", b, { passive: !0 }),
          a.onComplete(function () {
            window.removeEventListener("scroll", b);
          });
      } catch (a) {
        if (a.message !== "can't access dead object") throw a;
      }
    }
    function D(a, b) {
      a instanceof HTMLImageElement &&
        ((b.naturalWidth = a.naturalWidth),
        (b.naturalHeight = a.naturalHeight));
    }
    function E(a, b) {
      typeof window.devicePixelRatio === "number" &&
        c("addAnnotations")(a.annotations, {
          double: { devicePixelRatio: window.devicePixelRatio },
        });
      a.navSequence === 1 &&
        (i || (i = c("performance"))) &&
        (i || (i = c("performance"))).timing &&
        (i || (i = c("performance"))).timing.responseStart &&
        a.markerPoints.set("TTFB", {
          timestamp:
            (i || (i = c("performance"))).timing.responseStart -
            c("performanceNavigationStart")(),
        });
      if (b.interactionType === "INITIAL_LOAD") {
        a =
          (i || (i = c("performance"))) == null
            ? void 0
            : (i || (i = c("performance"))).getEntriesByType == null
            ? void 0
            : (i || (i = c("performance"))).getEntriesByType("paint");
        a &&
          a.forEach(function (a) {
            a.name === "first-contentful-paint" &&
              b.addFirstMarkerPoint("FCP", a.startTime);
          });
      }
    }
    var F = {
      attributeFilter: ["hidden", "style", "href", "src"],
      attributeOldValue: !0,
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0,
    };
    function G(a) {
      return (a = a.tagName) != null ? a : "";
    }
    function H(a) {
      return a.nodeType === Node.ELEMENT_NODE;
    }
    function I(a) {
      return a.nodeType === Node.TEXT_NODE;
    }
    function J(a) {
      var b = [],
        c = d("currentVCTraces").getCurrentVCTraces();
      c.forEach(function (c) {
        var d = a;
        while (d != null) {
          if (d instanceof HTMLElement && c.mutationRoots.has(d)) {
            b.push(c);
            break;
          }
          d = d.parentElement;
        }
      });
      return b;
    }
    function K(a) {
      var b = [];
      J(a).forEach(function (c) {
        b.push(c.waitLoadingState(a));
      });
      return b;
    }
    function L(a) {
      return {
        onError: function () {},
        onLoad: function () {},
        unmountCallback: function () {},
      };
    }
    function M(a) {
      J(a).forEach(function (b) {
        b.excludeElement(a);
      });
    }
    g.getPixels = k;
    g.getRectIntersection = l;
    g.getViewportSize = m;
    g.isInAboveTheFold = a;
    g.getScrollPosition = n;
    g.offsetTop = b;
    g.trimHash = e;
    g.checkInvisibleStyle = o;
    g.checkInvisibleStyleElement = p;
    g.shouldIgnoreMutation = q;
    g.getParentElementForTextNodeChange = r;
    g.extractMutationElements = f;
    g.isImage = s;
    g.isPicture = t;
    g.useCustomTracking = u;
    g.getStyleBackground = v;
    g.scanCssBgElements = w;
    g.checkLoadingStates = x;
    g.trackAllChildImages = y;
    g.trackImage = z;
    g.getImageLoadHandlers = A;
    g.checkDOMElementAttributeValue = B;
    g.setupScrollHandler = C;
    g.getImageNaturalSize = D;
    g.addPlatformMetaData = E;
    g.mutationObserverConfig = F;
    g.getTagName = G;
    g.isElementNode = H;
    g.isTextNode = I;
    g.findVCTraces = J;
    g.trackLoadingState = K;
    g.trackImageLoad = L;
    g.ignoreElement = M;
  },
  98
);

import { ImageDownloadTracker } from "ImageDownloadTracker";
import { ResourceTimingAPI } from "ResourceTimingAPI";
import { VisualCompletionConstants as VCConstants } from "VisualCompletionConstants";
import { addAnnotations } from "addAnnotations";
import { currentVCTraces } from "currentVCTraces";
import { performance, performanceNavigationStart } from "performance";
import { performanceNowSinceAppStart } from "performanceNowSinceAppStart";

const urlRegex = /url\(.*(http.*)\)/gi;

interface Rect {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

interface Viewport {
  height: number;
  width: number;
}

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

function getPixels(rect: Rect): number {
  return (rect.right - rect.left) * (rect.bottom - rect.top);
}

function getRectIntersection(rect1: Rect, rect2: Rect): Rect {
  return {
    bottom: Math.max(Math.min(rect1.bottom, rect2.bottom), rect2.top),
    left: Math.min(Math.max(rect1.left, rect2.left), rect2.right),
    right: Math.max(Math.min(rect1.right, rect2.right), rect2.left),
    top: Math.min(Math.max(rect1.top, rect2.top), rect2.bottom),
  };
}

function getViewportSize(): Viewport {
  return { height: window.innerHeight, width: window.innerWidth };
}

function isInAboveTheFold(element: HTMLElement): boolean {
  if (typeof element.getBoundingClientRect !== "function") return false;
  const viewport = getViewportSize();
  const rect = element.getBoundingClientRect();
  const intersection = getRectIntersection(
    { bottom: rect.bottom, left: rect.left, right: rect.right, top: rect.top },
    {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: -getScrollPosition().scrollY,
    }
  );
  return getPixels(intersection) > 0;
}

function getScrollPosition(): ScrollPosition {
  return {
    scrollX: window.scrollX ?? 0,
    scrollY: window.scrollY ?? 0,
  };
}

function offsetTop(element: HTMLElement): number {
  let offset = 0;
  while (
    element &&
    element.offsetParent &&
    typeof element.offsetTop === "number"
  ) {
    offset += element.offsetTop;
    element = element.offsetParent as HTMLElement;
  }
  if (
    element &&
    !element.offsetParent &&
    typeof element.getBoundingClientRect === "function"
  ) {
    const rect = element.getBoundingClientRect();
    offset +=
      rect.top >= 0
        ? rect.top
        : element === document.body
        ? -getScrollPosition().scrollY
        : 0;
  }
  return offset;
}

function trimHash(url: string): string {
  return url.split("#")[0];
}

function checkInvisibleStyle(style: string | null): boolean {
  if (!style) return false;
  const cleanedStyle = style.replace(/ /g, "");
  return (
    cleanedStyle.includes("display:none") ||
    cleanedStyle.includes("visibility:hidden") ||
    cleanedStyle.includes("content-visibility:hidden")
  );
}

function checkInvisibleStyleElement(element: HTMLElement | null): boolean {
  while (element) {
    if (
      (typeof element.getAttribute === "function" &&
        checkInvisibleStyle(element.getAttribute("style"))) ||
      (typeof element.hasAttribute === "function" &&
        element.hasAttribute("hidden"))
    ) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}

function shouldIgnoreMutation(
  mutationRoots: Set<Node>,
  pendingLoadingElements: Set<Node>,
  element: Node | null
): boolean {
  if (checkInvisibleStyleElement(element as HTMLElement)) return true;
  while (element) {
    if (mutationRoots.has(element)) return false;
    if (pendingLoadingElements.has(element)) return true;
    if (typeof (element as HTMLElement).getAttribute === "function") {
      const attribute = (element as HTMLElement).getAttribute(
        VCConstants.ATTRIBUTE_NAME
      );
      if (attribute === VCConstants.IGNORE) return true;
      if (element !== element && attribute === VCConstants.IGNORE_DYNAMIC) {
        pendingLoadingElements.delete(element);
        return true;
      }
    }
    element = element.parentElement;
  }
  return false;
}

function getParentElementForTextNodeChange(
  mutationRoots: Set<Node>,
  element: Node,
  oldTextContent: string | null
): HTMLElement | null {
  if (
    element.nodeType === Node.TEXT_NODE &&
    element.parentElement &&
    !shouldIgnoreMutation(mutationRoots, new Set(), element)
  ) {
    const parentElement = element.parentElement;
    const textContent = element.textContent?.trim();
    if (textContent && oldTextContent !== textContent) return parentElement;
  }
  return null;
}

function extractMutationElements(
  mutations: MutationRecord[],
  mutationRoots: Set<Node>
): Array<[HTMLElement, string]> {
  const elements: Array<[HTMLElement, string]> = [];
  for (const mutation of mutations) {
    const target = mutation.target;
    if (
      target.nodeType !== Node.ELEMENT_NODE &&
      target.nodeType !== Node.TEXT_NODE
    )
      continue;

    if (mutation.type === "childList" && mutation.addedNodes.length) {
      for (const addedNode of Array.from(mutation.addedNodes)) {
        if (shouldIgnoreMutation(mutationRoots, new Set(), addedNode)) continue;

        if (isImage(addedNode as HTMLElement)) {
          trackImage(mutationRoots, addedNode as HTMLImageElement, "imgLoad");
        } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
          elements.push([addedNode as HTMLElement, "mutationAdd"]);
        } else if (
          mutationRoots.size > 0 &&
          addedNode.nodeType === Node.TEXT_NODE
        ) {
          const parent = getParentElementForTextNodeChange(
            mutationRoots,
            addedNode,
            null
          );
          if (parent) elements.push([parent, "mutationTextAdd"]);
        }
      }
    } else if (
      mutation.type === "attributes" &&
      !shouldIgnoreMutation(mutationRoots, new Set(), target)
    ) {
      const targetElement = target as HTMLImageElement;
      if (mutation.attributeName === "hidden") {
        if (!targetElement.hasAttribute("hidden"))
          elements.push([targetElement, "mutationHiddenAttribute"]);
      } else if (mutation.attributeName === "style") {
        const newStyle = targetElement.getAttribute("style");
        const oldStyle = mutation.oldValue;
        if (checkInvisibleStyle(oldStyle) && !checkInvisibleStyle(newStyle)) {
          elements.push([targetElement, "mutationStyleAttribute"]);
        }
      } else if (
        isImage(targetElement) &&
        (mutation.attributeName === "href" || mutation.attributeName === "src")
      ) {
        trackImage(mutationRoots, targetElement, "mutationImageAttribute");
      }
    } else if (
      mutation.type === "characterData" &&
      target.nodeType === Node.TEXT_NODE
    ) {
      const parent = getParentElementForTextNodeChange(
        mutationRoots,
        target,
        mutation.oldValue
      );
      if (parent) elements.push([parent, "mutationTextUpdate"]);
    }
  }
  return elements;
}

function isImage(element: HTMLElement): boolean {
  const tagName = getTagName(element);
  return tagName === "IMG" || tagName === "image";
}

function isPicture(element: HTMLElement): boolean {
  return getTagName(element) === "picture";
}

function useCustomTracking(element: HTMLElement): boolean {
  return isImage(element) || isPicture(element);
}

function getStyleBackground(element: HTMLElement): string | null {
  if (typeof window.getComputedStyle !== "function") return null;
  const style = window.getComputedStyle(element);
  const backgroundImage = style["background-image"];
  if (
    style.visibility !== "hidden" &&
    backgroundImage &&
    backgroundImage !== "none"
  ) {
    urlRegex.lastIndex = 0;
    const match = urlRegex.exec(backgroundImage);
    if (match && match.length > 1) return match[1].replace('"', "");
  }
  return null;
}

function scanCssBgElements(mutationRoots: Set<Node>): void {
  if (this.reported) return;
  const startTime = performanceNowSinceAppStart();
  for (const root of mutationRoots) {
    if (root && typeof (root as HTMLElement).querySelectorAll === "function") {
      const elements = (root as HTMLElement).querySelectorAll("div,i,span,li");
      elements.forEach((element) => {
        if (
          element.textContent ||
          element.children.length ||
          this.cssBgElements.has(element) ||
          shouldIgnoreMutation(mutationRoots, new Set(), element) ||
          !isInAboveTheFold(element as HTMLElement)
        )
          return;
        const bgImage = getStyleBackground(element as HTMLElement);
        this.bgCheckCount++;
        if (bgImage) {
          const resourceTiming = ResourceTimingAPI.getResourceTiming(bgImage);
          this.cssBgElements.set(element, {
            element,
            url: bgImage,
            resourceTiming,
          });
        }
      });
    }
  }
  this.cssBgScanOverhead = performanceNowSinceAppStart() - startTime;
}

function checkLoadingStates(element: HTMLElement): void {
  if (
    element.getAttribute(VCConstants.ATTRIBUTE_NAME) ===
    VCConstants.LOADING_STATE
  ) {
    this.waitLoadingState(element);
  } else if (typeof element.querySelectorAll === "function") {
    const loadingElements = element.querySelectorAll(
      `[${VCConstants.ATTRIBUTE_NAME}=${VCConstants.LOADING_STATE}]`
    );
    loadingElements.forEach((el) => this.waitLoadingState(el as HTMLElement));
  }
}

function trackAllChildImages(
  mutationRoots: Set<Node>,
  root: HTMLElement
): void {
  const images = root.querySelectorAll("img, image");
  images.forEach((image) => {
    if (!shouldIgnoreMutation(mutationRoots, new Set(), image)) {
      trackImage(mutationRoots, image as HTMLImageElement, "imgLoad");
    }
  });
}

function trackImage(
  mutationRoots: Set<Node>,
  image: HTMLImageElement,
  eventType: string
): void {
  if (image.complete) {
    if (
      image.getAttribute(VCConstants.ATTRIBUTE_NAME) ===
      VCConstants.MEDIA_VC_IMAGE
    ) {
      this.scheduleIntersectionObserver(
        mutationRoots,
        image,
        eventType,
        performanceNowSinceAppStart()
      );
    }
    return;
  }
  const src = image.currentSrc || image.src;
  if (!src || !src.startsWith("http")) return;

  const _loadHandler = () => {
    this.imageDone(image);
  };
  const _errorHandler = () => {
    this.imageWait(image);
  };

  if (image.getAttribute("loading") === "lazy") {
    const { loadHandler, errorHandler } = getImageLoadHandlers(
      mutationRoots,
      image,
      eventType,
      _loadHandler,
      this
    );
    this.scheduleElementVisibleObserver(
      image,
      () => {
        if (this.reported || image.complete) return;
        _errorHandler();
        image.addEventListener("load", loadHandler);
        image.addEventListener("error", errorHandler);
      },
      { executeOnce: true, cleanAfterReport: true }
    );
  } else if (this.config.use_image_download_tracker) {
    ImageDownloadTracker(src, _errorHandler)
      .then(() => {
        const now = performanceNowSinceAppStart();
        this.scheduleIntersectionObserver(mutationRoots, image, eventType, now);
        _loadHandler();
      })
      .catch(_loadHandler);
  } else {
    const { loadHandler, errorHandler } = getImageLoadHandlers(
      mutationRoots,
      image,
      eventType,
      _loadHandler,
      this
    );
    errorHandler();
    image.addEventListener("load", loadHandler);
    image.addEventListener("error", errorHandler);
  }
}

function getImageLoadHandlers(
  mutationRoots: Set<Node>,
  image: HTMLImageElement,
  eventType: string,
  onLoad: () => void,
  context: any
): { loadHandler: () => void; errorHandler: () => void } {
  const loadHandler = () => {
    const now = performanceNowSinceAppStart();
    context.scheduleIntersectionObserver(mutationRoots, image, eventType, now);
    onLoad();
    image.removeEventListener("load", loadHandler);
    image.removeEventListener("error", errorHandler);
  };
  const errorHandler = () => {
    onLoad();
    image.removeEventListener("load", loadHandler);
    image.removeEventListener("error", errorHandler);
  };
  return { loadHandler, errorHandler };
}

function checkDOMElementAttributeValue(
  element: HTMLElement,
  attributeName: string
): boolean {
  return element.getAttribute(VCConstants.ATTRIBUTE_NAME) === attributeName;
}

function setupScrollHandler(): void {
  const scrollHandler = () => {
    this.scrolled = true;
    if (!this.markerPoints.has("scroll_start")) {
      this.addMarkerPoint("scroll_start", performanceNowSinceAppStart());
    }
  };
  try {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    this.onComplete(() => {
      window.removeEventListener("scroll", scrollHandler);
    });
  } catch (error) {
    if (error.message !== "can't access dead object") throw error;
  }
}

function getImageNaturalSize(
  image: HTMLImageElement,
  size: { naturalWidth: number; naturalHeight: number }
): void {
  size.naturalWidth = image.naturalWidth;
  size.naturalHeight = image.naturalHeight;
}

function addPlatformMetaData(context: any, interactionType: string): void {
  if (typeof window.devicePixelRatio === "number") {
    addAnnotations(context.annotations, {
      double: { devicePixelRatio: window.devicePixelRatio },
    });
  }
  if (context.navSequence === 1 && performance?.timing) {
    const timing = performance.timing;
    if (timing.responseStart) {
      context.markerPoints.set("TTFB", {
        timestamp: timing.responseStart - performanceNavigationStart(),
      });
    }
  }
  if (interactionType === "INITIAL_LOAD") {
    const paintEntries = performance?.getEntriesByType?.("paint");
    paintEntries?.forEach((paintEntry) => {
      if (paintEntry.name === "first-contentful-paint") {
        context.addFirstMarkerPoint("FCP", paintEntry.startTime);
      }
    });
  }
}

const mutationObserverConfig: MutationObserverInit = {
  attributeFilter: ["hidden", "style", "href", "src"],
  attributeOldValue: true,
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

function getTagName(element: HTMLElement): string {
  return element.tagName ?? "";
}

function isElementNode(node: Node): boolean {
  return node.nodeType === Node.ELEMENT_NODE;
}

function isTextNode(node: Node): boolean {
  return node.nodeType === Node.TEXT_NODE;
}

function findVCTraces(element: Node): any[] {
  const traces: any[] = [];
  const currentTraces = currentVCTraces.getCurrentVCTraces();
  for (const trace of currentTraces) {
    let currentElement: Node | null = element;
    while (currentElement) {
      if (
        currentElement instanceof HTMLElement &&
        trace.mutationRoots.has(currentElement)
      ) {
        traces.push(trace);
        break;
      }
      currentElement = currentElement.parentElement;
    }
  }
  return traces;
}

function trackLoadingState(element: Node): any[] {
  return findVCTraces(element).map((trace) => trace.waitLoadingState(element));
}

function trackImageLoad(element: HTMLImageElement): {
  onError: () => void;
  onLoad: () => void;
  unmountCallback: () => void;
} {
  return {
    onError: () => {},
    onLoad: () => {},
    unmountCallback: () => {},
  };
}

function ignoreElement(element: HTMLElement): void {
  findVCTraces(element).forEach((trace) => trace.excludeElement(element));
}

export {
  getPixels,
  getRectIntersection,
  getViewportSize,
  isInAboveTheFold,
  getScrollPosition,
  offsetTop,
  trimHash,
  checkInvisibleStyle,
  checkInvisibleStyleElement,
  shouldIgnoreMutation,
  getParentElementForTextNodeChange,
  extractMutationElements,
  isImage,
  isPicture,
  useCustomTracking,
  getStyleBackground,
  scanCssBgElements,
  checkLoadingStates,
  trackAllChildImages,
  trackImage,
  getImageLoadHandlers,
  checkDOMElementAttributeValue,
  setupScrollHandler,
  getImageNaturalSize,
  addPlatformMetaData,
  mutationObserverConfig,
  getTagName,
  isElementNode,
  isTextNode,
  findVCTraces,
  trackLoadingState,
  trackImageLoad,
  ignoreElement,
};
