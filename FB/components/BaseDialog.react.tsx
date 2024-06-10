__d(
  "BaseDialog.react",
  [
    "BaseThemeProvider.react",
    "BaseView.react",
    "CometHideLayerOnEscape.react",
    "pointerEventDistance",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || (i = d("react"));
    b = i;
    var k = b.useEffect,
      l = b.useRef,
      m = {
        anchor: {
          alignItems: "x1cy8zhl",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        dialog: {
          boxSizing: "x1afcbsf",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          outline: "x1a2a7pz",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x71s49j",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        rootWithDeprecatedStyles: {
          flexGrow: "x1c4vz4f",
          minHeight: "xg6iff7",
          $$css: !0,
        },
      };
    e = j.forwardRef(a);
    function a(a, b) {
      var e = a.anchorXStyle,
        f = a["aria-label"],
        g = a.children,
        i = a.disableClosingWithEscape;
      i = i === void 0 ? !1 : i;
      var n = a.disableClosingWithMask,
        o = n === void 0 ? !1 : n,
        p = a.onAnimationEnd,
        q = a.onClose,
        r = a.rootXStyle;
      n = a.testid;
      n = a.themeConfig;
      var s = a.withDeprecatedStyles,
        t = s === void 0 ? !1 : s,
        u = a.xstyle,
        v = babelHelpers.objectWithoutPropertiesLoose(a, [
          "anchorXStyle",
          "aria-label",
          "children",
          "disableClosingWithEscape",
          "disableClosingWithMask",
          "onAnimationEnd",
          "onClose",
          "rootXStyle",
          "testid",
          "themeConfig",
          "withDeprecatedStyles",
          "xstyle",
        ]),
        w = l(null),
        x = l(null),
        y = l(null),
        z = l(!1);
      k(
        function () {
          var a = w.current,
            b = x.current;
          if (a == null || b == null || o) return;
          function c(c) {
            return c instanceof Node && !b.contains(c) && a.contains(c);
          }
          var e = "PointerEvent" in window;
          if (!e) {
            var f = function (a) {
              c(a.target) && q();
            };
            a.addEventListener("click", f);
            return function () {
              a.removeEventListener("click", f);
            };
          }
          function g(a) {
            if (a.isPrimary) {
              var b = c(a.target);
              z.current = b;
              y.current = a;
            }
          }
          function h(a) {
            var b = c(a.target);
            if (z.current && b && y.current != null && a.isPrimary) {
              b = d("pointerEventDistance").isWithinThreshold(y.current, a);
              b && q();
            }
            z.current = !1;
            y.current = null;
          }
          a.addEventListener("pointerup", h);
          a.addEventListener("pointerdown", g);
          return function () {
            a.removeEventListener("pointerup", h),
              a.removeEventListener("pointerdown", g);
          };
        },
        [o, q]
      );
      var A = c("useMergeRefs")(x, b);
      s = j.jsx(c("BaseThemeProvider.react"), {
        config: n,
        children: function (a, b) {
          return j.jsx("div", {
            className: (h || (h = c("stylex")))([
              a,
              m.root,
              t && m.rootWithDeprecatedStyles,
              r,
            ]),
            onAnimationEnd: p,
            ref: w,
            style: b,
            children: j.jsx("div", {
              className: h(m.anchor, e),
              children: j.jsx(
                c("BaseView.react"),
                babelHelpers["extends"]({}, v, {
                  "aria-label": (a = f) != null ? a : void 0,
                  ref: A,
                  role: "dialog",
                  testid: void 0,
                  xstyle: [m.dialog, u],
                  children: g,
                })
              ),
            }),
          });
        },
      });
      return i
        ? s
        : j.jsx(c("CometHideLayerOnEscape.react"), { onHide: q, children: s });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b;
  },
  98
);

import BaseThemeProvider from "BaseThemeProvider.react";
import BaseView from "BaseView.react";
import CometHideLayerOnEscape from "CometHideLayerOnEscape.react";
import pointerEventDistance from "pointerEventDistance";
import React, {
  forwardRef,
  useEffect,
  useRef,
  CSSProperties,
  ReactNode,
} from "react";
import stylex from "stylex";
import useMergeRefs from "useMergeRefs";

interface BaseDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorXStyle?: CSSProperties;
  "aria-label"?: string;
  disableClosingWithEscape?: boolean;
  disableClosingWithMask?: boolean;
  onAnimationEnd?: () => void;
  onClose: () => void;
  rootXStyle?: CSSProperties;
  testid?: string;
  themeConfig?: any;
  withDeprecatedStyles?: boolean;
  xstyle?: CSSProperties;
  children: ReactNode;
}

const styles = {
  anchor: {
    alignItems: "x1cy8zhl",
    boxSizing: "x9f619",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    minHeight: "x2lwn1j",
    minWidth: "xeuugli",
    pointerEvents: "x47corl",
    $$css: true,
  },
  dialog: {
    boxSizing: "x1afcbsf",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    outline: "x1a2a7pz",
    overflowX: "x6ikm8r",
    overflowY: "x10wlt62",
    pointerEvents: "x71s49j",
    $$css: true,
  },
  root: {
    alignItems: "x1qjc9v5",
    boxSizing: "x9f619",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    flexGrow: "x1iyjqo2",
    justifyContent: "xl56j7k",
    $$css: true,
  },
  rootWithDeprecatedStyles: {
    flexGrow: "x1c4vz4f",
    minHeight: "xg6iff7",
    $$css: true,
  },
};

const BaseDialog = forwardRef<HTMLDivElement, BaseDialogProps>((props, ref) => {
  const {
    anchorXStyle,
    "aria-label": ariaLabel,
    children,
    disableClosingWithEscape = false,
    disableClosingWithMask = false,
    onAnimationEnd,
    onClose,
    rootXStyle,
    testid,
    themeConfig,
    withDeprecatedStyles = false,
    xstyle,
    ...rest
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pointerDownEvent = useRef<PointerEvent | null>(null);
  const isPointerDown = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const dialog = dialogRef.current;

    if (!root || !dialog || disableClosingWithMask) return;

    const handleClickOutside = (target: EventTarget | null): boolean => {
      return (
        target instanceof Node &&
        !dialog.contains(target) &&
        root.contains(target)
      );
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.isPrimary) {
        isPointerDown.current = handleClickOutside(event.target);
        pointerDownEvent.current = event;
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (
        isPointerDown.current &&
        handleClickOutside(event.target) &&
        pointerDownEvent.current &&
        event.isPrimary
      ) {
        if (
          pointerEventDistance.isWithinThreshold(
            pointerDownEvent.current,
            event
          )
        ) {
          onClose();
        }
      }
      isPointerDown.current = false;
      pointerDownEvent.current = null;
    };

    root.addEventListener("pointerdown", handlePointerDown);
    root.addEventListener("pointerup", handlePointerUp);

    return () => {
      root.removeEventListener("pointerdown", handlePointerDown);
      root.removeEventListener("pointerup", handlePointerUp);
    };
  }, [disableClosingWithMask, onClose]);

  const mergedRef = useMergeRefs(dialogRef, ref);

  const dialogContent = (
    <BaseThemeProvider config={themeConfig}>
      {(themeClass, themeStyle) => (
        <div
          className={stylex([
            themeClass,
            styles.root,
            withDeprecatedStyles && styles.rootWithDeprecatedStyles,
            rootXStyle,
          ])}
          onAnimationEnd={onAnimationEnd}
          ref={rootRef}
          style={themeStyle}
        >
          <div className={stylex(styles.anchor, anchorXStyle)}>
            <BaseView
              {...rest}
              aria-label={ariaLabel}
              ref={mergedRef}
              role="dialog"
              testid={testid}
              xstyle={[styles.dialog, xstyle]}
            >
              {children}
            </BaseView>
          </div>
        </div>
      )}
    </BaseThemeProvider>
  );

  return disableClosingWithEscape ? (
    dialogContent
  ) : (
    <CometHideLayerOnEscape onHide={onClose}>
      {dialogContent}
    </CometHideLayerOnEscape>
  );
});

BaseDialog.displayName = `${BaseDialog.name} [from BaseDialog.react]`;

export default BaseDialog;
