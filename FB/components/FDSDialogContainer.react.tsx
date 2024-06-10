__d(
  "FDSDialogContainer.react",
  [
    "BaseDialog.react",
    "BaseDialogLabelIDProvider",
    "BaseMultiPageView.react",
    "FDSDialogLoadingStateContext",
    "FDSDialogPageLoadingState.react",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
      k = b.useMemo,
      l = {
        anchor: {
          alignItems: "x1qjc9v5",
          maxHeight: "x1bwycvy",
          paddingStart: "x1e558r4",
          paddingLeft: null,
          paddingRight: null,
          paddingEnd: "x150jy0e",
          paddingTop: "x1x97wu9",
          paddingBottom: "xbr3nou",
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingBottom":
            "xqit15g",
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingTop":
            "x1bi8yb4",
          $$css: !0,
        },
        card: {
          backgroundColor: "x1jx94hy",
          borderTopStartRadius: "xrjkcco",
          borderTopEndRadius: "x58fqnu",
          borderBottomEndRadius: "x1mh14rs",
          borderBottomStartRadius: "xfkwgsy",
          boxShadow: "x104qc98",
          clipPath: "x1gj8qfm",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          "@media (max-width: 679px)_boxShadow": "x1likypf",
          "@media (max-width: 679px)_clipPath": "xzit4ce",
          "@media (max-width: 679px)_overflowX": "x1e9k66k",
          "@media (max-width: 679px)_overflowY": "x12l8kdc",
          $$css: !0,
        },
        dialog: {
          alignItems: "x1qjc9v5",
          borderTopStartRadius: "xrjkcco",
          borderTopEndRadius: "x58fqnu",
          borderBottomEndRadius: "x1mh14rs",
          borderBottomStartRadius: "xfkwgsy",
          display: "x78zum5",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          "@media (max-width: 679px)_boxShadow": "xcatxm7",
          $$css: !0,
        },
        root: {
          "@media (max-width: 679px)_justifyContent": "xshlqvt",
          $$css: !0,
        },
      },
      m = {
        medium: { maxWidth: "xrgej4m", width: "xh8yej3", $$css: !0 },
        small: { maxWidth: "x1n7qst7", width: "xh8yej3", $$css: !0 },
      };
    e = i.forwardRef(a);
    function a(a, b) {
      var e = a.anchorXStyle,
        f = a["aria-label"],
        g = a.children,
        h = a.disableClosingWithMask;
      h = h === void 0 ? !1 : h;
      var n = a.onClose,
        o = a.size;
      o = o === void 0 ? "small" : o;
      a = a.testid;
      a = k(
        function () {
          var a;
          return i.jsx(c("FDSDialogPageLoadingState.react"), {
            onClose: (a = n) != null ? a : c("emptyFunction"),
          });
        },
        [n]
      );
      var p = j(c("FDSDialogLoadingStateContext")),
        q = d("BaseDialogLabelIDProvider").useDialogLabelID();
      return i.jsx(c("BaseDialog.react"), {
        anchorXStyle: [l.anchor, e],
        "aria-label": f,
        "aria-labelledby": f == null ? q : void 0,
        disableClosingWithMask: h,
        onClose: (e = n) != null ? e : c("emptyFunction"),
        ref: b,
        rootXStyle: l.root,
        testid: void 0,
        xstyle: [l.dialog, m[o]],
        children: i.jsx(c("BaseMultiPageView.react"), {
          disableAutoRestoreFocus: p,
          fallback: a,
          xstyle: l.card,
          children: g,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b;
  },
  98
);

import BaseDialog from "BaseDialog.react";
import { useDialogLabelID } from "BaseDialogLabelIDProvider";
import BaseMultiPageView from "BaseMultiPageView.react";
import FDSDialogLoadingStateContext from "FDSDialogLoadingStateContext";
import FDSDialogPageLoadingState from "FDSDialogPageLoadingState.react";
import emptyFunction from "emptyFunction";
import React, { forwardRef, useContext, useMemo, CSSProperties } from "react";

interface FDSDialogContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorXStyle?: CSSProperties;
  "aria-label"?: string;
  disableClosingWithMask?: boolean;
  onClose?: () => void;
  size?: "small" | "medium";
  testid?: string;
}

const styles = {
  anchor: {
    alignItems: "x1qjc9v5",
    maxHeight: "x1bwycvy",
    paddingStart: "x1e558r4",
    paddingLeft: null,
    paddingRight: null,
    paddingEnd: "x150jy0e",
    paddingTop: "x1x97wu9",
    paddingBottom: "xbr3nou",
    "@supports (padding: env(safe-area-inset-bottom, 0))_paddingBottom":
      "xqit15g",
    "@supports (padding: env(safe-area-inset-bottom, 0))_paddingTop":
      "x1bi8yb4",
    $$css: true,
  },
  card: {
    backgroundColor: "x1jx94hy",
    borderTopStartRadius: "xrjkcco",
    borderTopEndRadius: "x58fqnu",
    borderBottomEndRadius: "x1mh14rs",
    borderBottomStartRadius: "xfkwgsy",
    boxShadow: "x104qc98",
    clipPath: "x1gj8qfm",
    flexGrow: "x1iyjqo2",
    overflowX: "x6ikm8r",
    overflowY: "x10wlt62",
    "@media (max-width: 679px)_boxShadow": "x1likypf",
    "@media (max-width: 679px)_clipPath": "xzit4ce",
    "@media (max-width: 679px)_overflowX": "x1e9k66k",
    "@media (max-width: 679px)_overflowY": "x12l8kdc",
    $$css: true,
  },
  dialog: {
    alignItems: "x1qjc9v5",
    borderTopStartRadius: "xrjkcco",
    borderTopEndRadius: "x58fqnu",
    borderBottomEndRadius: "x1mh14rs",
    borderBottomStartRadius: "xfkwgsy",
    display: "x78zum5",
    overflowX: "x1plvlek",
    overflowY: "xryxfnj",
    "@media (max-width: 679px)_boxShadow": "xcatxm7",
    $$css: true,
  },
  root: {
    "@media (max-width: 679px)_justifyContent": "xshlqvt",
    $$css: true,
  },
};

const sizeStyles = {
  medium: { maxWidth: "xrgej4m", width: "xh8yej3", $$css: true },
  small: { maxWidth: "x1n7qst7", width: "xh8yej3", $$css: true },
};

const FDSDialogContainer = forwardRef<HTMLDivElement, FDSDialogContainerProps>(
  (props, ref) => {
    const {
      anchorXStyle,
      "aria-label": ariaLabel,
      children,
      disableClosingWithMask = false,
      onClose,
      size = "small",
      testid,
      ...rest
    } = props;

    const dialogPageLoadingState = useMemo(() => {
      return <FDSDialogPageLoadingState onClose={onClose ?? emptyFunction} />;
    }, [onClose]);

    const loadingStateContext = useContext(FDSDialogLoadingStateContext);
    const dialogLabelID = useDialogLabelID();

    return (
      <BaseDialog
        anchorXStyle={[styles.anchor, anchorXStyle]}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabel == null ? dialogLabelID : undefined}
        disableClosingWithMask={disableClosingWithMask}
        onClose={onClose ?? emptyFunction}
        ref={ref}
        rootXStyle={styles.root}
        testid={undefined}
        xstyle={[styles.dialog, sizeStyles[size]]}
        {...rest}
      >
        <BaseMultiPageView
          disableAutoRestoreFocus={loadingStateContext}
          fallback={dialogPageLoadingState}
          xstyle={styles.card}
        >
          {children}
        </BaseMultiPageView>
      </BaseDialog>
    );
  }
);

FDSDialogContainer.displayName = `${FDSDialogContainer.name} [from FDSDialogContainer.react]`;

export default FDSDialogContainer;
