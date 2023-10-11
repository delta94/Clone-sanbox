__d("CometTransientDialogProvider.react", ["fbt", "BaseModal.react", "CometDialogContext", "CometErrorBoundary.react", "CometHeroLogging", "CometInteractionTracingQPLConfigContext", "FBLogger", "cometPushToast", "cr:945", "react", "useCometInteractionTracing", "useIsCalledDuringRender", "useIsMountedRef"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react"));
    e = i;
    var k = e.useCallback
      , l = e.useEffect
      , m = e.useRef
      , n = e.useState;
    function o(a) {
        var b = a.dialogConfig
          , e = a.dialogConfigsRef
          , f = a.displayBaseModal_DO_NOT_USE
          , g = a.removeDialogConfig
          , i = m(null);
        l(function() {
            return function() {
                i.current != null && window.cancelAnimationFrame(i.current)
            }
        }, []);
        a = b.dialog;
        var o = b.dialogProps
          , p = n(!1)
          , q = p[0];
        p = p[1];
        var r = k(function() {
            for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++)
                d[f] = arguments[f];
            i.current != null && window.cancelAnimationFrame(i.current);
            var h = e.current.indexOf(b);
            h < 0 && c("FBLogger")("comet_ui").blameToPreviousFrame().mustfix("Attempting to close a dialog that does not exist anymore.");
            i.current = window.requestAnimationFrame(function() {
                g(b, d),
                i.current = null
            })
        }, [b, e, g])
          , s = k(function() {
            r(),
            d("cometPushToast").cometPushErrorToast({
                message: h._("__JHASH__0TvIFRfN8w3__JHASH__"),
                truncateText: !1
            })
        }, [r]);
        a = j.jsx(a, babelHelpers["extends"]({}, o, {
            onClose: r,
            onHide: p
        }));
        return j.jsx(c("CometErrorBoundary.react"), {
            onError: s,
            children: f === !0 ? j.jsx(c("BaseModal.react"), {
                hidden: q,
                interactionDesc: b.interactionDesc,
                interactionUUID: b.interactionUUID,
                isOverlayTransparent: (o = b.baseModalProps) == null ? void 0 : o.isOverlayTransparent,
                stackingBehavior: "above-nav",
                children: a
            }) : a
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
        var e = a.displayBaseModal_DO_NOT_USE
          , f = e === void 0 ? !0 : e;
        e = babelHelpers.objectWithoutPropertiesLoose(a, ["displayBaseModal_DO_NOT_USE"]);
        a = n([]);
        var g = a[0]
          , h = a[1];
        a = d("CometInteractionTracingQPLConfigContext").useDialogTraceQPLEvent();
        var i = c("useCometInteractionTracing")(a, "fluid", "INTERACTION");
        a = c("useIsCalledDuringRender")();
        a = k(function(a, d, e, f, g) {
            var j = e.loadType
              , k = e.preloadTrigger
              , l = e.tracePolicy;
            i(function(e) {
                var i = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(e.getTraceId());
                e.addMetadata("interaction_type", "dialog");
                e.addMetadata("load_type", j);
                k != null && e.addMetadata("preload_trigger", k);
                var m = "Dialog";
                h(function(b) {
                    return b.concat({
                        baseModalProps: g == null ? void 0 : g.baseModalProps,
                        dialog: a,
                        dialogProps: d,
                        interactionDesc: m,
                        interactionUUID: i,
                        onClose: f,
                        tracePolicy: l
                    })
                });
                b("cr:945") && b("cr:945").logOpen(l, i)
            }, void 0, void 0, l)
        }, [a, i]);
        var p = m(g);
        l(function() {
            p.current = g
        }, [g]);
        var q = c("useIsMountedRef")()
          , r = k(function(a, c) {
            if (!q.current)
                return;
            h(function(b) {
                var c = b.indexOf(a);
                return c < 0 ? b : b.slice(0, c)
            });
            a.onClose && a.onClose.apply(a, c);
            b("cr:945") && b("cr:945").logClose(a.tracePolicy, a.interactionUUID)
        }, [q]);
        return j.jsxs(c("CometDialogContext").Provider, {
            value: a,
            children: [e.children, g.map(function(a, b) {
                return j.jsx(o, {
                    dialogConfig: a,
                    dialogConfigsRef: p,
                    displayBaseModal_DO_NOT_USE: f,
                    removeDialogConfig: r
                }, b)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);



import React, { useCallback, useEffect, useRef, useState, FC } from 'react';
import CometDialogContext from 'CometDialogContext';
import BaseModal from 'BaseModal.react';
import CometErrorBoundary from 'CometErrorBoundary.react';
import CometHeroLogging from 'CometHeroLogging';
import CometInteractionTracingQPLConfigContext from 'CometInteractionT,racingQPLConfigContext';
import FBLogger from 'FBLogger';
import cometPushToast from 'cometPushToast';
import useCometInteractionTracing from 'useCometInteractionTracing';
import useIsCalledDuringRender from 'useIsCalledDuringRender';
import useIsMountedRef from 'useIsMountedRef';

// Type definitions
interface DialogConfig {
  baseModalProps?: {
    isOverlayTransparent?: boolean;
  };
  dialog: React.ComponentType<any>;
  dialogProps: Record<string, any>;
  interactionDesc: string;
  interactionUUID: string;
  onClose?: (...args: any[]) => void;
  tracePolicy: string;
  preloadTrigger: string
  loadType: string
}

interface CometTransientDialogProviderProps {
  displayBaseModal_DO_NOT_USE?: boolean;
  children: React.ReactNode;
}

interface SingleDialogProps {
  dialogConfig: DialogConfig;
  dialogConfigsRef: React.RefObject<DialogConfig[]>;
  displayBaseModal_DO_NOT_USE?: boolean;
  removeDialogConfig: (config: DialogConfig, args: any[]) => void;
}

// SingleDialog Component
const SingleDialog: React.FC<SingleDialogProps> = ({ dialogConfig, dialogConfigsRef, displayBaseModal_DO_NOT_USE, removeDialogConfig }) => {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const { dialog, dialogProps } = dialogConfig;

  const [isHidden, setHidden] = useState<boolean>(false);

  const closeDialog = useCallback(
    (...args: any[]) => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      const index = dialogConfigsRef.current.indexOf(dialogConfig);
      if (index < 0) {
        FBLogger('comet_ui').blameToPreviousFrame().mustfix("Attempting to close a dialog that does not exist anymore.");
      }
      animationFrameRef.current = window.requestAnimationFrame(() => {
        removeDialogConfig(dialogConfig, args);
        animationFrameRef.current = null;
      });
    },
    [dialogConfig, dialogConfigsRef, removeDialogConfig]
  );

  const handleError = useCallback(() => {
    closeDialog();
    cometPushToast.cometPushErrorToast({
      message: "__JHASH__0TvIFRfN8w3__JHASH__",
      truncateText: false
    });
  }, [closeDialog]);

  const dialogElement = React.createElement(dialog, {
    ...dialogProps,
    onClose: closeDialog,
    onHide: setHidden,
  });
  return (
    <CometErrorBoundary onError={handleError}>
      {displayBaseModal_DO_NOT_USE ? (
        <BaseModal hidden={isHidden} interactionDesc={dialogConfig.interactionDesc} interactionUUID={dialogConfig.interactionUUID} isOverlayTransparent={dialogConfig.baseModalProps?.isOverlayTransparent} stackingBehavior="above-nav">
          {dialogElement}
        </BaseModal>
      ) : (
        dialogElement
      )}
    </CometErrorBoundary>
  );
};

// Main Component
const CometTransientDialogProvider: React.FC<CometTransientDialogProviderProps> = ({ displayBaseModal_DO_NOT_USE = true, children }) => {
  const [dialogConfigs, setDialogConfigs] = useState<DialogConfig[]>([]);

  const traceQPLEvent = CometInteractionTracingQPLConfigContext.useDialogTraceQPLEvent();
  const interactionTracing = useCometInteractionTracing(traceQPLEvent, 'fluid', 'INTERACTION');
  const isRendered = useIsCalledDuringRender();

  const openDialog = useCallback(
    (dialog: FC, dialogProps: Record<string, any>,dialogConfig: DialogConfig, onClose: (args?: any[]) => void) => {
      interactionTracing((interaction) => {
        const { preloadTrigger, loadType, tracePolicy } = dialogConfig
        const interactionUUID = CometHeroLogging.genHeroInteractionUUIDAndMarkStart(interaction.getTraceId());
        interaction.addMetadata('interaction_type', 'dialog');
        interaction.addMetadata("load_type", loadType);
        preloadTrigger != null && interaction.addMetadata("preload_trigger", k);

        setDialogConfigs((prevDialogs) => [
          ...prevDialogs,
          {
            baseModalProps: g == null ? void 0 : g.baseModalProps,
            dialog,
            dialogProps,
            interactionDesc: 'Dialog',
            interactionUUID,
            onClose,
            tracePolicy
          },
        ]);
      });
    },
    [isRendered, interactionTracing]
  );

  const dialogConfigsRef = useRef(dialogConfigs);
  
  useEffect(() => {
    dialogConfigsRef.current = dialogConfigs;
  }, [dialogConfigs]);

  const isMountedRef = useIsMountedRef()

  const removeDialogConfig = useCallback((config: DialogConfig, args: any[]) => {
    if (!isMountedRef.current) return;
    setDialogConfigs(prevConfigs => {
      const index = prevConfigs.indexOf(config);
      if (index < 0) return prevConfigs;
      const newConfigs = [...prevConfigs];
      newConfigs.splice(index, 1);
      return newConfigs;
    });
    if (config.onClose) {
      config.onClose(...args);
    }
  }, [isMountedRef]);

  return (
    <CometDialogContext.Provider value={openDialog}>
      {children}
      {dialogConfigs.map((config, index) => (
        <SingleDialog key={index} dialogConfig={config} dialogConfigsRef={dialogConfigsRef} displayBaseModal_DO_NOT_USE={displayBaseModal_DO_NOT_USE} removeDialogConfig={removeDialogConfig} />
      ))}
    </CometDialogContext.Provider>
  );
};

export default CometTransientDialogProvider;
