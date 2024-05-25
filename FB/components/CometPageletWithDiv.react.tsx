__d(
  "CometPageletWithDiv.react",
  [
    "CometBackupPlaceholder.react",
    "CometPlaceholder.react",
    "CometSuspenseList.react",
    "LegacyHidden",
    "cr:1191379", // HeroPagelet
    "gkx",
    "react",
    "useCometIgnoreLateMutation",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    d = i.forwardRef(function (a, b) {
      a = a.children;
      return i.jsxs(i.Fragment, {
        children: [
          " ",
          a(b, function () {
            return null;
          }),
          " ",
        ],
      });
    });
    var j = (b = b("cr:1191379")) != null ? b : d;

    function a(a, b) {
      var d = a.children,
        e = a.className,
        f = a.fallback,
        g = a.hidden,
        h = a.ignoreLateMutation,
        k = a.name,
        l = a.pageletAriaProps,
        m = a.pageletLogNamePoisitionLimit,
        n = a.position;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "className",
        "fallback",
        "hidden",
        "ignoreLateMutation",
        "name",
        "pageletAriaProps",
        "pageletLogNamePoisitionLimit",
        "position",
      ]);
      var o = k;
      m = (m = m) != null ? m : 2;
      n != null && n < m ? (o += "_" + n) : n != null && (o += "_{n}");
      m = c("gkx")("26331");
      var p = babelHelpers["extends"](
        {},
        m
          ? null
          : {
              "data-pagelet": o,
            }
      );
      m = c("useCometIgnoreLateMutation")(h === !0);
      h = c("useMergeRefs")(b, m);
      return i.jsx(
        j,
        babelHelpers["extends"]({}, a, {
          name: o,
          pageletName: k,
          position: n,
          ref: h,
          children: function (a, b) {
            return i.jsxs(c("CometPlaceholder.react"), {
              fallback: f,
              name: o,
              children: [
                i.jsx(b, {}),
                i.jsx(c("LegacyHidden"), {
                  htmlAttributes: babelHelpers["extends"](
                    {
                      className: e,
                    },
                    l,
                    p
                  ),
                  mode: g === !0 ? "hidden" : "visible",
                  ref: a,
                  children: d,
                }),
              ],
            });
          },
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function e(a, b) {
      var d = a.children,
        e = a.className,
        f = a.fallback,
        g = a.hidden,
        h = a.ignoreLateMutation,
        k = a.name,
        l = a.pageletAriaProps,
        m = a.pageletLogNamePoisitionLimit,
        n = a.position;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "className",
        "fallback",
        "hidden",
        "ignoreLateMutation",
        "name",
        "pageletAriaProps",
        "pageletLogNamePoisitionLimit",
        "position",
      ]);
      k = k;
      m = (m = m) != null ? m : 2;
      n != null && n < m ? (k += "_" + n) : n != null && (k += "_{n}");
      m = c("gkx")("26331");
      var o = babelHelpers["extends"](
        {},
        m
          ? null
          : {
              "data-pagelet": k,
            }
      );
      m = c("useCometIgnoreLateMutation")(h === !0);
      h = c("useMergeRefs")(b, m);
      return i.jsx(
        j,
        babelHelpers["extends"]({}, a, {
          name: k,
          position: n,
          ref: h,
          children: function (a, b) {
            return i.jsxs(c("CometBackupPlaceholder.react"), {
              fallback: f,
              children: [
                i.jsx(b, {}),
                i.jsx(c("LegacyHidden"), {
                  htmlAttributes: babelHelpers["extends"]({}, o, l, {
                    className: e,
                  }),
                  mode: g === !0 ? "hidden" : "visible",
                  ref: a,
                  children: d,
                }),
              ],
            });
          },
        })
      );
    }
    e.displayName = e.name + " [from " + f.id + "]";

    function k(a, b) {
      var d = a.children,
        e = a.className,
        f = a.hidden,
        g = a.name,
        h = a.pageletAriaProps,
        k = a.position,
        l = a.revealOrder,
        m = a.tail;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "className",
        "hidden",
        "name",
        "pageletAriaProps",
        "position",
        "revealOrder",
        "tail",
      ]);
      g = g;
      k != null && k < 2 ? (g += "_" + k) : k != null && (g += "_{n}");
      var n = c("gkx")("26331"),
        o = babelHelpers["extends"](
          {},
          n
            ? null
            : {
                "data-pagelet": g,
              }
        );
      return i.jsx(
        j,
        babelHelpers["extends"]({}, a, {
          name: g,
          position: k,
          ref: b,
          children: function (a, b) {
            return i.jsxs(c("LegacyHidden"), {
              htmlAttributes: babelHelpers["extends"](
                {
                  className: e,
                },
                h,
                o
              ),
              mode: f === !0 ? "hidden" : "visible",
              ref: a,
              children: [
                i.jsx(b, {}),
                i.jsx(c("CometSuspenseList.react"), {
                  revealOrder: l,
                  tail: m,
                  children: d,
                }),
              ],
            });
          },
        })
      );
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function l(a, b) {
      var d = a.children,
        e = a.className,
        f = a.hidden,
        g = a.name,
        h = a.pageletAriaProps,
        k = a.position;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "className",
        "hidden",
        "name",
        "pageletAriaProps",
        "position",
      ]);
      g = g;
      k != null && k < 2 ? (g += "_" + k) : k != null && (g += "_{n}");
      var l = c("gkx")("26331"),
        m = babelHelpers["extends"](
          {},
          l
            ? null
            : {
                "data-pagelet": g,
              }
        );
      return i.jsx(
        j,
        babelHelpers["extends"]({}, a, {
          name: g,
          position: k,
          ref: b,
          children: function (a, b) {
            return i.jsxs(i.Fragment, {
              children: [
                i.jsx(b, {}),
                i.jsx(c("LegacyHidden"), {
                  htmlAttributes: babelHelpers["extends"]({}, m, h, {
                    className: e,
                  }),
                  mode: f === !0 ? "hidden" : "visible",
                  ref: a,
                  children: d,
                }),
              ],
            });
          },
        })
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    b = i.forwardRef(e);
    d = i.forwardRef(a);
    f = i.forwardRef(k);
    e = i.forwardRef(l);
    g.BackupPlaceholder = b;
    g.Placeholder = d;
    g.SuspenseList = f;
    g.Div = e;
  },
  98
);

import React, { forwardRef, ReactNode } from "react";
import CometBackupPlaceholder from "CometBackupPlaceholder.react";
import CometPlaceholder from "CometPlaceholder.react";
import CometSuspenseList from "CometSuspenseList.react";
import LegacyHidden from "LegacyHidden";
import HeroPagelet from "cr:1191379";
import { gkx } from "gkx";
import useCometIgnoreLateMutation from "useCometIgnoreLateMutation";
import useMergeRefs from "useMergeRefs";

const DivPlaceholder = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => <> {children(ref, () => null)} </>
);

const HeroPageletComponent = HeroPagelet ?? DivPlaceholder;

const Placeholder = forwardRef(
  (
    {
      children,
      className,
      fallback,
      hidden,
      ignoreLateMutation,
      name,
      pageletAriaProps,
      pageletLogNamePoisitionLimit,
      position,
      ...props
    },
    ref
  ) => {
    let pageletName = name;
    const limit = pageletLogNamePoisitionLimit ?? 2;
    if (position != null && position < limit) {
      pageletName += `_${position}`;
    } else if (position != null) {
      pageletName += `_{n}`;
    }

    const shouldUseDataPagelet = !gkx("26331");
    const dataPageletProps = shouldUseDataPagelet
      ? { "data-pagelet": pageletName }
      : null;

    const ignoreLateMutationRef = useCometIgnoreLateMutation(
      ignoreLateMutation === true
    );
    const mergedRef = useMergeRefs(ref, ignoreLateMutationRef);

    return (
      <HeroPageletComponent
        {...props}
        name={pageletName}
        pageletName={name}
        position={position}
        ref={mergedRef}
      >
        {(placeholderRef, placeholderChild) => (
          <CometPlaceholder fallback={fallback} name={pageletName}>
            {placeholderChild}
            <LegacyHidden
              htmlAttributes={{
                className,
                ...pageletAriaProps,
                ...dataPageletProps,
              }}
              mode={hidden === true ? "hidden" : "visible"}
              ref={placeholderRef}
            >
              {children}
            </LegacyHidden>
          </CometPlaceholder>
        )}
      </HeroPageletComponent>
    );
  }
);

Placeholder.displayName = `${Placeholder.name} [from ${__DEV__}]`;

const BackupPlaceholder = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    fallback?: ReactNode;
    hidden?: boolean;
    ignoreLateMutation?: boolean;
    name: string;
    pageletAriaProps?: Record<string, any>;
    pageletLogNamePoisitionLimit?: number;
    position?: number;
  }
>(
  (
    {
      children,
      className,
      fallback,
      hidden,
      ignoreLateMutation,
      name,
      pageletAriaProps,
      pageletLogNamePoisitionLimit,
      position,
      ...props
    },
    ref
  ) => {
    let pageletName = name;
    const limit = pageletLogNamePoisitionLimit ?? 2;
    if (position != null && position < limit) {
      pageletName += `_${position}`;
    } else if (position != null) {
      pageletName += `_{n}`;
    }

    const shouldUseDataPagelet = !gkx("26331");
    const dataPageletProps = shouldUseDataPagelet
      ? { "data-pagelet": pageletName }
      : null;

    const ignoreLateMutationRef = useCometIgnoreLateMutation(
      ignoreLateMutation === true
    );
    const mergedRef = useMergeRefs(ref, ignoreLateMutationRef);

    return (
      <HeroPageletComponent
        {...props}
        name={pageletName}
        position={position}
        ref={mergedRef}
      >
        {(placeholderRef, placeholderChild) => (
          <CometBackupPlaceholder fallback={fallback}>
            {placeholderChild}
            <LegacyHidden
              htmlAttributes={{
                ...dataPageletProps,
                ...pageletAriaProps,
                className,
              }}
              mode={hidden === true ? "hidden" : "visible"}
              ref={placeholderRef}
            >
              {children}
            </LegacyHidden>
          </CometBackupPlaceholder>
        )}
      </HeroPageletComponent>
    );
  }
);

BackupPlaceholder.displayName = `${BackupPlaceholder.name} [from ${__DEV__}]`;

const SuspenseList = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    hidden?: boolean;
    name: string;
    pageletAriaProps?: Record<string, any>;
    position?: number;
    revealOrder?: "forward" | "reverse" | "together";
    tail?: "collapsed" | "hidden";
  }
>(
  (
    {
      children,
      className,
      hidden,
      name,
      pageletAriaProps,
      position,
      revealOrder,
      tail,
      ...props
    },
    ref
  ) => {
    let pageletName = name;
    if (position != null && position < 2) {
      pageletName += `_${position}`;
    } else if (position != null) {
      pageletName += `_{n}`;
    }

    const shouldUseDataPagelet = !gkx("26331");
    const dataPageletProps = shouldUseDataPagelet
      ? { "data-pagelet": pageletName }
      : null;

    return (
      <HeroPageletComponent
        {...props}
        name={pageletName}
        position={position}
        ref={ref}
      >
        {(placeholderRef, placeholderChild) => (
          <LegacyHidden
            htmlAttributes={{
              className,
              ...pageletAriaProps,
              ...dataPageletProps,
            }}
            mode={hidden === true ? "hidden" : "visible"}
            ref={placeholderRef}
          >
            {placeholderChild}
            <CometSuspenseList revealOrder={revealOrder} tail={tail}>
              {children}
            </CometSuspenseList>
          </LegacyHidden>
        )}
      </HeroPageletComponent>
    );
  }
);

SuspenseList.displayName = `${SuspenseList.name} [from ${__DEV__}]`;

const Div = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    hidden?: boolean;
    name: string;
    pageletAriaProps?: Record<string, any>;
    position?: number;
  }
>(
  (
    { children, className, hidden, name, pageletAriaProps, position, ...props },
    ref
  ) => {
    let pageletName = name;
    if (position != null && position < 2) {
      pageletName += `_${position}`;
    } else {
      if (position != null) {
        pageletName += `_{n}`;
      }
    }
    const shouldUseDataPagelet = !gkx("26331");
    const dataPageletProps = shouldUseDataPagelet
      ? { "data-pagelet": pageletName }
      : null;

    return (
      <HeroPageletComponent
        {...props}
        name={pageletName}
        position={position}
        ref={ref}
      >
        {(placeholderRef, placeholderChild) => (
          <>
            {placeholderChild}
            <LegacyHidden
              htmlAttributes={{
                ...dataPageletProps,
                ...pageletAriaProps,
                className,
              }}
              mode={hidden === true ? "hidden" : "visible"}
              ref={placeholderRef}
            >
              {children}
            </LegacyHidden>
          </>
        )}
      </HeroPageletComponent>
    );
  }
);

Div.displayName = `${Div.name} [from ${__DEV__}]`;

export { BackupPlaceholder, Placeholder, SuspenseList, Div };
