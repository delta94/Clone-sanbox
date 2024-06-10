__d(
  "BaseMultiPageViewContainer.react",
  [
    "BaseMultiPageViewContext",
    "FocusInertRegion.react",
    "FocusRegionStrictMode.react",
    "HiddenSubtreeContextProvider.react",
    "Locale",
    "emptyFunction",
    "focusScopeQueries",
    "getPrefersReducedMotion",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
      l = b.useEffect,
      m = b.useImperativeHandle,
      n = b.useMemo,
      o = b.useRef,
      p = {
        page: {
          borderTopStartRadius: "x1o1ewxj",
          borderTopEndRadius: "x3x9cwd",
          borderBottomEndRadius: "x1e5q0jg",
          borderBottomStartRadius: "x13rtm0m",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
        pageInactive: {
          display: "x1s85apg",
          left: "xu96u03",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          clipPath: "x7sf2oe",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          position: "x1n2onr6",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
      },
      q = d("Locale").isRTL(),
      r = 300,
      s = c("getPrefersReducedMotion")() || !c("gkx")("22877");
    function t(a) {
      return Math.cos((a + 1) * Math.PI) / 2 + 0.5;
    }
    e = j.forwardRef(a);
    function a(a, b) {
      var e = a.onAddPage,
        f = a.onClearRemovedPages,
        g = a.onPopPage,
        i = a.pageHistory,
        u = a.children,
        v = a.disableAnimations;
      v = v === void 0 ? !1 : v;
      var w = a.disableAutoFocus,
        x = w === void 0 ? !1 : w;
      w = a.disableAutoRestoreFocus;
      var y = w === void 0 ? !1 : w;
      w = a.disableFocusContainment;
      var z = w === void 0 ? !1 : w;
      w = a.disableInitialAutoFocus;
      w = w === void 0 ? !1 : w;
      var A = a.fallback,
        B = a.imperativeRef,
        C = a.onPageChange,
        D = C === void 0 ? c("emptyFunction") : C,
        E = a.pageXStyle,
        F = a.placeholderComponent;
      C = a.xstyle;
      var G = o(null),
        H = o(null),
        I = o(null),
        J = o(!1),
        K = w && !J.current,
        L = v || s,
        M = k(function () {
          var a = G.current,
            b = H.current;
          b != null
            ? (I.current = b.getBoundingClientRect())
            : a != null && (I.current = a.getBoundingClientRect());
        }, []),
        N = k(
          function (a, b, c) {
            M(), (J.current = !0), e(a, b, c);
          },
          [e, M]
        ),
        O = k(
          function (a) {
            M(), g(a);
          },
          [g, M]
        ),
        P = k(
          function (a, b) {
            return N("end", a, b);
          },
          [N]
        ),
        Q = n(
          function () {
            for (var a = i.length - 1; a >= 0; a--) {
              var b = i[a];
              if (b.type !== "pushed_page" || !b.removed) return a;
            }
            return 0;
          },
          [i]
        ),
        R = o(Q);
      l(
        function () {
          Q !== R.current && D && D(Q), (R.current = Q);
        },
        [D, Q]
      );
      var S = k(
        function (a) {
          var b = H.current,
            c = G.current;
          if (a != null) {
            var d = i[Q];
            d = d.type === "pushed_page" ? d.direction : "end";
            R.current > Q && (d = d === "start" ? "end" : "start");
            var e = I.current,
              g = a.getBoundingClientRect();
            if (!L && b != null && b !== a && e != null && c != null) {
              d = (d === "start" ? -1 : 1) * (q ? -1 : 1);
              b.style.cssText = "";
              a.style.cssText = "";
              b.style.setProperty("display", "flex");
              b.style.setProperty("width", e.width + "px");
              b.style.setProperty("height", e.height + "px");
              a.style.removeProperty("display");
              a.style.removeProperty("width");
              a.style.removeProperty("height");
              var h = Math.round(60 * (r / 1e3)),
                j = [],
                k = [],
                l = [];
              for (var m = 0; m <= h; m++) {
                var n = m / h,
                  o = t(n),
                  p = e.width / g.width,
                  s = e.height / g.height;
                p = p + (1 - p) * o;
                s = s + (1 - s) * o;
                var u = e.left - g.left,
                  v = e.top - g.top;
                u = u * (1 - o);
                var w = v * (1 - o),
                  x = Math.min(e.width, g.width),
                  y = x * -d * o;
                x = x * d * (1 - o);
                o = v - w;
                v = -w;
                j.push({
                  easing: "step-end",
                  offset: n,
                  transform:
                    "translateX(" +
                    u +
                    "px) translateY(" +
                    w +
                    "px) scaleX(" +
                    p +
                    ") scaleY(" +
                    s +
                    ")",
                });
                k.push({
                  easing: "step-end",
                  offset: n,
                  transform:
                    "scaleX(" +
                    1 / p +
                    ") scaleY(" +
                    1 / s +
                    ") translateX(" +
                    y +
                    "px) translateY(" +
                    o +
                    "px)",
                });
                l.push({
                  easing: "step-end",
                  offset: n,
                  transform:
                    "scaleX(" +
                    1 / p +
                    ") scaleY(" +
                    1 / s +
                    ") translateX(" +
                    x +
                    "px) translateY(" +
                    v +
                    "px)",
                });
              }
              a.animate(l, r);
              c.animate(j, r);
              b.animate(k, r);
              a.animate([{ opacity: 0 }, { opacity: 1 }], r);
              b.animate([{ opacity: 1 }, { opacity: 0 }], r).onfinish =
                function () {
                  (b.style.cssText = ""), f && f();
                };
            }
            H.current = a;
          }
        },
        [Q, f, i]
      );
      m(
        B,
        function () {
          return { addPage: N, popPage: O };
        },
        [O, N]
      );
      var T = n(
        function () {
          return {
            fallback: A,
            placeholderComponent: F,
            popPage: O,
            pushPage: P,
          };
        },
        [A, F, O, P]
      );
      a = n(
        function () {
          return c("mergeRefs")(G, b);
        },
        [b]
      );
      return j.jsx(
        "div",
        babelHelpers["extends"](
          { className: (h || (h = c("stylex")))(p.root, C), ref: a },
          c("testID")("BaseMultiStepContainer"),
          {
            children: i.map(function (a, b) {
              return j.jsx(
                "div",
                babelHelpers["extends"](
                  {
                    "aria-hidden": b !== Q,
                    className: (h || (h = c("stylex")))(
                      p.page,
                      b !== Q && p.pageInactive,
                      E
                    ),
                    ref: b === Q ? S : null,
                  },
                  c("testID")(
                    b === 0 ? "base-multistep-container-first-step" : null
                  ),
                  {
                    children: j.jsx(
                      d("FocusRegionStrictMode.react").FocusRegion,
                      {
                        autoFocusQuery:
                          !x && !K && b === Q
                            ? d("focusScopeQueries").headerOrTabbableScopeQuery
                            : null,
                        autoRestoreFocus: !y,
                        containFocusQuery: z
                          ? null
                          : d("focusScopeQueries").tabbableScopeQuery,
                        recoverFocusQuery:
                          d("focusScopeQueries").headerOrTabbableScopeQuery,
                        children: j.jsx(c("FocusInertRegion.react"), {
                          disabled: b === Q,
                          children: j.jsx(
                            c("HiddenSubtreeContextProvider.react"),
                            {
                              isHidden: b !== Q,
                              children: j.jsx(
                                c("BaseMultiPageViewContext").Provider,
                                {
                                  value: T,
                                  children:
                                    a.type === "initial_page"
                                      ? typeof u === "function"
                                        ? u(P)
                                        : u
                                      : a.type === "pushed_page"
                                      ? j.jsx(a.component, { onReturn: O })
                                      : null,
                                }
                              ),
                            }
                          ),
                        }),
                      }
                    ),
                  }
                ),
                a.key
              );
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b;
  },
  98
);

import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  forwardRef,
} from "react";
import {
  BaseMultiPageViewContext,
  FocusInertRegion,
  FocusRegionStrictMode,
  HiddenSubtreeContextProvider,
  Locale,
  emptyFunction,
  focusScopeQueries,
  getPrefersReducedMotion,
  gkx,
  mergeRefs,
  stylex,
  testID,
} from "some-module";

const styles = {
  page: {
    borderTopStartRadius: "x1o1ewxj",
    borderTopEndRadius: "x3x9cwd",
    borderBottomEndRadius: "x1e5q0jg",
    borderBottomStartRadius: "x13rtm0m",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexGrow: "x1iyjqo2",
    transformOrigin: "x1al4vs7",
    $$css: true,
  },
  pageInactive: {
    display: "x1s85apg",
    left: "xu96u03",
    pointerEvents: "x47corl",
    position: "x10l6tqk",
    top: "x13vifvy",
    zIndex: "x1vjfegm",
    $$css: true,
  },
  root: {
    alignItems: "x1qjc9v5",
    clipPath: "x7sf2oe",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    position: "x1n2onr6",
    transformOrigin: "x1al4vs7",
    $$css: true,
  },
};

const isRTL = Locale.isRTL();
const animationDuration = 300;
const prefersReducedMotion = getPrefersReducedMotion() || !gkx("22877");

const easeOutCubic = (t: number) => Math.cos((t + 1) * Math.PI) / 2 + 0.5;

interface Props {
  onAddPage: (a: string, b: number, c: any) => void;
  onClearRemovedPages?: () => void;
  onPopPage: (a: any) => void;
  pageHistory: any[];
  children:
    | React.ReactNode
    | ((pushPage: (a: string, b: any) => void) => React.ReactNode);
  disableAnimations?: boolean;
  disableAutoFocus?: boolean;
  disableAutoRestoreFocus?: boolean;
  disableFocusContainment?: boolean;
  disableInitialAutoFocus?: boolean;
  fallback?: React.ReactNode;
  imperativeRef?: React.Ref<any>;
  onPageChange?: (a: number) => void;
  pageXStyle?: any;
  placeholderComponent?: React.ReactNode;
  xstyle?: any;
}

const BaseMultiPageViewContainer = forwardRef((props: Props, ref) => {
  const {
    onAddPage,
    onClearRemovedPages,
    onPopPage,
    pageHistory,
    children,
    disableAnimations = false,
    disableAutoFocus = false,
    disableAutoRestoreFocus = false,
    disableFocusContainment = false,
    disableInitialAutoFocus = false,
    fallback,
    imperativeRef,
    onPageChange = emptyFunction,
    pageXStyle,
    placeholderComponent,
    xstyle,
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const activePageRef = useRef<HTMLDivElement>(null);
  const prevPageRect = useRef<DOMRect | null>(null);
  const initialRender = useRef(false);

  const handleMeasure = useCallback(() => {
    const root = rootRef.current;
    const activePage = activePageRef.current;
    if (activePage) {
      prevPageRect.current = activePage.getBoundingClientRect();
    } else if (root) {
      prevPageRect.current = root.getBoundingClientRect();
    }
  }, []);

  const handleAddPage = useCallback(
    (type: string, data: any, options: any) => {
      handleMeasure();
      initialRender.current = true;
      onAddPage(type, data, options);
    },
    [onAddPage, handleMeasure]
  );

  const handlePopPage = useCallback(
    (data: any) => {
      handleMeasure();
      onPopPage(data);
    },
    [onPopPage, handleMeasure]
  );

  const pushPage = useCallback(
    (data: any, options: any) => handleAddPage("end", data, options),
    [handleAddPage]
  );

  const activePageIndex = useMemo(() => {
    for (let i = pageHistory.length - 1; i >= 0; i--) {
      const page = pageHistory[i];
      if (page.type !== "pushed_page" || !page.removed) return i;
    }
    return 0;
  }, [pageHistory]);

  const prevActivePageIndex = useRef(activePageIndex);

  useEffect(() => {
    if (activePageIndex !== prevActivePageIndex.current && onPageChange) {
      onPageChange(activePageIndex);
      prevActivePageIndex.current = activePageIndex;
    }
  }, [activePageIndex, onPageChange]);

  const handlePageAnimation = useCallback(
    (page: HTMLDivElement | null) => {
      const activePage = activePageRef.current;
      const root = rootRef.current;
      if (page) {
        const currentPage = pageHistory[activePageIndex];
        const direction =
          currentPage.type === "pushed_page" ? currentPage.direction : "end";
        const reversedDirection =
          prevActivePageIndex.current > activePageIndex
            ? direction === "start"
              ? "end"
              : "start"
            : direction;
        const prevRect = prevPageRect.current;
        const nextRect = page.getBoundingClientRect();

        if (
          !disableAnimations &&
          !prefersReducedMotion &&
          activePage &&
          activePage !== page &&
          prevRect &&
          root
        ) {
          const directionMultiplier =
            (reversedDirection === "start" ? -1 : 1) * (isRTL ? -1 : 1);

          activePage.style.cssText = "";
          page.style.cssText = "";
          activePage.style.display = "flex";
          activePage.style.width = `${prevRect.width}px`;
          activePage.style.height = `${prevRect.height}px`;
          page.style.removeProperty("display");
          page.style.removeProperty("width");
          page.style.removeProperty("height");

          const frames = Math.round(60 * (animationDuration / 1000));
          const keyframesRoot: Keyframe[] = [];
          const keyframesActivePage: Keyframe[] = [];
          const keyframesPage: Keyframe[] = [];

          for (let i = 0; i <= frames; i++) {
            const t = i / frames;
            const progress = easeOutCubic(t);
            const scaleX =
              prevRect.width / nextRect.width +
              (1 - prevRect.width / nextRect.width) * progress;
            const scaleY =
              prevRect.height / nextRect.height +
              (1 - prevRect.height / nextRect.height) * progress;
            const translateX = (prevRect.left - nextRect.left) * (1 - progress);
            const translateY = (prevRect.top - nextRect.top) * (1 - progress);
            const displacement =
              Math.min(prevRect.width, nextRect.width) *
              -directionMultiplier *
              progress;
            const returnDisplacement =
              Math.min(prevRect.width, nextRect.width) *
              directionMultiplier *
              (1 - progress);

            keyframesRoot.push({
              easing: "step-end",
              offset: t,
              transform: `translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`,
            });
            keyframesActivePage.push({
              easing: "step-end",
              offset: t,
              transform: `scaleX(${1 / scaleX}) scaleY(${
                1 / scaleY
              }) translateX(${displacement}px) translateY(${
                translateY - translateY
              }px)`,
            });
            keyframesPage.push({
              easing: "step-end",
              offset: t,
              transform: `scaleX(${1 / scaleX}) scaleY(${
                1 / scaleY
              }) translateX(${returnDisplacement}px) translateY(${-translateY}px)`,
            });
          }

          page.animate(keyframesPage, animationDuration);
          root.animate(keyframesRoot, animationDuration);
          activePage.animate(keyframesActivePage, animationDuration);
          page.animate([{ opacity: 0 }, { opacity: 1 }], animationDuration);
          activePage.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            animationDuration
          ).onfinish = () => {
            activePage.style.cssText = "";
            if (onClearRemovedPages) onClearRemovedPages();
          };
        }
        activePageRef.current = page;
      }
    },
    [activePageIndex, disableAnimations, onClearRemovedPages, pageHistory]
  );

  useImperativeHandle(
    imperativeRef,
    () => ({
      addPage: handleAddPage,
      popPage: handlePopPage,
    }),
    [handleAddPage, handlePopPage]
  );

  const contextValue = useMemo(
    () => ({
      fallback,
      placeholderComponent,
      popPage: handlePopPage,
      pushPage,
    }),
    [fallback, placeholderComponent, handlePopPage, pushPage]
  );

  const mergedRefs = useMemo(() => mergeRefs(rootRef, ref), [ref]);

  return (
    <div
      className={stylex(styles.root, xstyle)}
      ref={mergedRefs}
      {...testID("BaseMultiStepContainer")}
    >
      {pageHistory.map((page, index) => (
        <div
          key={page.key}
          aria-hidden={index !== activePageIndex}
          className={stylex(
            styles.page,
            index !== activePageIndex && styles.pageInactive,
            pageXStyle
          )}
          ref={index === activePageIndex ? handlePageAnimation : null}
          {...testID(
            index === 0 ? "base-multistep-container-first-step" : null
          )}
        >
          <FocusRegionStrictMode
            autoFocusQuery={
              !disableAutoFocus &&
              !disableInitialAutoFocus &&
              index === activePageIndex
                ? focusScopeQueries.headerOrTabbableScopeQuery
                : null
            }
            autoRestoreFocus={!disableAutoRestoreFocus}
            containFocusQuery={
              disableFocusContainment
                ? null
                : focusScopeQueries.tabbableScopeQuery
            }
            recoverFocusQuery={focusScopeQueries.headerOrTabbableScopeQuery}
          >
            <FocusInertRegion disabled={index === activePageIndex}>
              <HiddenSubtreeContextProvider
                isHidden={index !== activePageIndex}
              >
                <BaseMultiPageViewContext.Provider value={contextValue}>
                  {page.type === "initial_page"
                    ? typeof children === "function"
                      ? children(pushPage)
                      : children
                    : page.type === "pushed_page"
                    ? React.createElement(page.component, {
                        onReturn: handlePopPage,
                      })
                    : null}
                </BaseMultiPageViewContext.Provider>
              </HiddenSubtreeContextProvider>
            </FocusInertRegion>
          </FocusRegionStrictMode>
        </div>
      ))}
    </div>
  );
});

BaseMultiPageViewContainer.displayName = "BaseMultiPageViewContainer";

export default BaseMultiPageViewContainer;
