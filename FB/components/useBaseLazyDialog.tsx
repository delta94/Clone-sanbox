__d(
  "useBaseLazyDialog",
  [
    "CometDialogContext",
    "CometSuspendedDialogImpl.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
      j = b.useContext;
    function a(a, b, d, e) {
      var f = j(c("CometDialogContext")),
        g = e == null ? void 0 : e.baseModalProps;
      e = i(
        function (e, h, i) {
          var j = c("lazyLoadComponent")(a);
          f(
            c("CometSuspendedDialogImpl.react"),
            { dialog: j, dialogProps: e, fallback: b },
            { loadType: "lazy", tracePolicy: d },
            h,
            { baseModalProps: g, replaceCurrentDialog: i }
          );
        },
        [f, g, a, b, d]
      );
      var h = i(
        function () {
          a.preload();
        },
        [a]
      );
      return [e, h];
    }
    g["default"] = a;
  },
  98
);

import React, { useCallback, useContext } from "react";
import { CometDialogContext } from "CometDialogContext";
import CometSuspendedDialogImpl from "CometSuspendedDialogImpl.react";
import lazyLoadComponent from "lazyLoadComponent";

interface BaseModalProps {
  [key: string]: any;
}

interface UseBaseLazyDialogOptions {
  baseModalProps?: BaseModalProps;
}

type LazyDialogFunction = (
  dialogProps: any,
  callback?: () => void,
  replaceCurrentDialog?: boolean
) => void;

type PreloadFunction = () => void;

function useBaseLazyDialog(
  dialogComponent: any,
  fallback: React.ReactNode,
  tracePolicy?: string,
  options?: UseBaseLazyDialogOptions
): [LazyDialogFunction, PreloadFunction] {
  const dialogContext = useContext(CometDialogContext);
  const baseModalProps = options?.baseModalProps;

  const showDialog: LazyDialogFunction = useCallback(
    (dialogProps, callback, replaceCurrentDialog) => {
      const LazyDialogComponent = lazyLoadComponent(dialogComponent);
      dialogContext(
        CometSuspendedDialogImpl,
        { dialog: LazyDialogComponent, dialogProps, fallback },
        { loadType: "lazy", tracePolicy },
        callback,
        { baseModalProps, replaceCurrentDialog }
      );
    },
    [dialogContext, baseModalProps, dialogComponent, fallback, tracePolicy]
  );

  const preloadDialog: PreloadFunction = useCallback(() => {
    dialogComponent.preload();
  }, [dialogComponent]);

  return [showDialog, preloadDialog];
}

export default useBaseLazyDialog;
