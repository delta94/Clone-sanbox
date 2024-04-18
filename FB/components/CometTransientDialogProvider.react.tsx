__d("CometTransientDialogProvider.react", ["fbt", "BaseModal.react", "CometDialogContext", "CometErrorBoundary.react", "CometHeroLogging", "CometInteractionTracingQPLConfigContext", "FBLogger", "cometPushToast", "cr:945", "react", "useCometInteractionTracing", "useIsCalledDuringRender", "useIsMountedRef"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react"));
    e = i;
    var k = e.useCallback,
        l = e.useEffect,
        m = e.useRef,
        n = e.useState;

    function o(a) {
        var b = a.dialogConfig,
            e = a.dialogConfigsRef,
            f = a.displayBaseModal_DO_NOT_USE,
            g = a.removeDialogConfig,
            i = m(null);
        l(function () {
            return function () {
                i.current != null && window.cancelAnimationFrame(i.current)
            }
        }, []);
        a = b.dialog;
        var o = b.dialogProps,
            p = n(!1),
            q = p[0];
        p = p[1];
        var r = k(function () {
                for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++) d[f] = arguments[f];
                i.current != null && window.cancelAnimationFrame(i.current);
                var h = e.current.indexOf(b);
                h < 0 && c("FBLogger")("comet_ui").blameToPreviousFrame().mustfix("Attempting to close a dialog that does not exist anymore.");
                i.current = window.requestAnimationFrame(function () {
                    g(b, d), i.current = null
                })
            }, [b, e, g]),
            s = k(function () {
                r(), d("cometPushToast").cometPushErrorToast({
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
        var e = a.displayBaseModal_DO_NOT_USE,
            f = e === void 0 ? !0 : e;
        e = babelHelpers.objectWithoutPropertiesLoose(a, ["displayBaseModal_DO_NOT_USE"]);
        a = n([]);
        var g = a[0],
            h = a[1];
        a = d("CometInteractionTracingQPLConfigContext").useDialogTraceQPLEvent();
        var i = c("useCometInteractionTracing")(a, "fluid", "INTERACTION");
        a = c("useIsCalledDuringRender")();
        a = k(function (a, d, e, f, g) {
            var j = e.loadType,
                k = e.preloadTrigger,
                l = e.tracePolicy;
            i(function (e) {
                var i = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(e.getTraceId());
                e.addMetadata("interaction_type", "dialog");
                e.addMetadata("load_type", j);
                k != null && e.addMetadata("preload_trigger", k);
                var m = "Dialog";
                h(function (b) {
                    var c;
                    c = (c = g == null ? void 0 : g.replaceCurrentDialog) != null ? c : !1;
                    var e = {
                        baseModalProps: g == null ? void 0 : g.baseModalProps,
                        dialog: a,
                        dialogProps: d,
                        interactionDesc: m,
                        interactionUUID: i,
                        onClose: f,
                        tracePolicy: l
                    };
                    return c ? b.slice(0, b.length - 1).concat(e) : b.concat(e)
                });
                b("cr:945") && b("cr:945").logOpen(l, i)
            }, void 0, void 0, l)
        }, [a, i]);
        var p = m(g);
        l(function () {
            p.current = g
        }, [g]);
        var q = c("useIsMountedRef")(),
            r = k(function (a, c) {
                if (!q.current) return;
                h(function (b) {
                    var c = b.indexOf(a);
                    return c < 0 ? b : b.slice(0, c)
                });
                a.onClose && a.onClose.apply(a, c);
                b("cr:945") && b("cr:945").logClose(a.tracePolicy, a.interactionUUID)
            }, [q]);
        return j.jsxs(c("CometDialogContext").Provider, {
            value: a,
            children: [e.children, g.map(function (a, b) {
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
}), 98);


import * as React from 'react';
import { BaseModal } from 'BaseModal.react';
import { CometDialogContext } from 'CometDialogContext';
import { CometInteractionTracingQPLConfigContext } from 'CometInteractionTracingQPLConfigContext';
import { CometErrorBoundary } from 'CometErrorBoundary.react';
import { CometHeroLogging } from 'CometHeroLogging';
import { useCometInteractionTracing } from 'useCometInteractionTracing';
import { useIsCalledDuringRender } from 'useIsCalledDuringRender';
import { FBLogger } from 'FBLogger';
import { cometPushToast } from 'cometPushToast';
import { useIsMountedRef } from 'useIsMountedRef';

type DialogConfig = {
  dialog: React.ReactElement;
  dialogProps: any;
  baseModalProps?: object;
  interactionDesc: string;
  interactionUUID: string;
  tracePolicy: string;
  onClose: () => void;
}

type Props = {
  children: React.ReactNode;
  displayBaseModal_DO_NOT_USE?: boolean;
}

export default function CometTransientDialogProvider({
  children, 
  displayBaseModal_DO_NOT_USE = true,
}: Props) {

  const [dialogConfigs, setDialogConfigs] = React.useState<DialogConfig[]>([]);

  const dialogTraceQPLEvent = CometInteractionTracingQPLConfigContext.useDialogTraceQPLEvent();
  const interactionTracing = useCometInteractionTracing(dialogTraceQPLEvent, 'fluid', 'INTERACTION');
  useIsCalledDuringRender();


  const addDialog = React.useCallback(
    (dialog: React.ComponentType<any>, dialogProps: any, config: any, onClose: () => void, options: any) => {
        const { loadType, preloadTrigger, tracePolicy } = config
        interactionTracing((tracer) => {
        const interactionUUID = CometHeroLogging.genHeroInteractionUUIDAndMarkStart(tracer.getTraceId());
        tracer.addMetadata('interaction_type', 'dialog');
        tracer.addMetadata('load_type', loadType);
        preloadTrigger && tracer.addMetadata('preload_trigger', preloadTrigger);

        const interactionDesc = 'Dialog';
        setDialogConfigs(prevConfigs => {
            const replaceCurrent = options?.replaceCurrentDialog ?? false;
            const newConfig: DialogConfig = {
              baseModalProps: options?.baseModalProps,
              dialog,
              dialogProps,
              interactionDesc,
              interactionUUID,
              onClose,
              tracePolicy,
            };
            if (replaceCurrent) {
              return prevConfigs.slice(0, -1).concat(newConfig);
            } else {
              return prevConfigs.concat(newConfig);
            }
        });

      });
    },
    [interactionTracing]
  );

  const dialogConfigsRef = React.useRef(dialogConfigs);

  React.useEffect(() => {
    dialogConfigsRef.current = dialogConfigs
  }, [dialogConfigs]);

  const isMountedRef = useIsMountedRef();

  const removeDialogConfig = React.useCallback((config: DialogConfig, args: any[]) => {
    if (!isMountedRef.current) {
      return;
    }

    setDialogConfigs(prevConfigs => {
      const index = prevConfigs.indexOf(config);
      if (index < 0) {
        return prevConfigs;
      } else {
        return prevConfigs.slice(0, index);
      }
    });

    if (config.onClose) {
      config.onClose(...args);
    }
  }, [isMountedRef]);

  return (
    <CometDialogContext.Provider value={addDialog}>
      {children}
      {dialogConfigs.map((config, index) => (
        <CometTransientDialog
          key={index}
          dialogConfig={config}
          dialogConfigsRef={dialogConfigsRef}
          displayBaseModal_DO_NOT_USE={displayBaseModal_DO_NOT_USE}
          removeDialogConfig={removeDialogConfig}
        />
      ))}
    </CometDialogContext.Provider>
  );
}

interface CometDialogProps {
    dialogConfig: DialogConfig;
    dialogConfigsRef: React.MutableRefObject<DialogConfig[]>;
    displayBaseModal: boolean;
    removeDialogConfig: (dialogConfig: DialogConfig, closeArgs: any[]) => void;
  }
  
  const CometTransientDialog: React.FC<CometDialogProps> = ({
    dialogConfig,
    dialogConfigsRef,
    displayBaseModal_DO_NOT_USE,
    removeDialogConfig,
  }) => {
    const [isHidden, setIsHidden] = React.useState(false);

    const animationFrameRef = React.useRef<number | null>(null);
  
    React.useEffect(() => {
      return () => {
        animationFrameRef.current !== null && window.cancelAnimationFrame(animationFrameRef.current);
      };
    }, []);
  
    const onClose = React.useCallback((...args) => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      const index = dialogConfigsRef.current.indexOf(dialogConfig);

      if (index < 0) {
        FBLogger('comet_ui').blameToPreviousFrame().mustfix(
          'Attempting to close a dialog that does not exist anymore.'
        );
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        removeDialogConfig(dialogConfig, args);
        animationFrameRef.current = null; 
      });
    }, [dialogConfig, dialogConfigsRef, removeDialogConfig]);
  
    const showErrorToast = React.useCallback(() => {
      removeDialogConfig();
      cometPushToast.cometPushErrorToast({
        message: 'Your error message here',
        truncateText: false,
      });
    }, [removeDialogConfig]);

    const { dialog, dialogProps } = dialogConfig
  
    const DialogComponent = dialog;

    const content = <DialogComponent {...dialogProps} onClose={onClose} onHide={setIsHidden} />
  
    return (
      <CometErrorBoundary onError={showErrorToast}>
        {displayBaseModal_DO_NOT_USE ? (
          <BaseModal
            hidden={isHidden}
            interactionDesc={dialogConfig.interactionDesc}
            interactionUUID={dialogConfig.interactionUUID}
            isOverlayTransparent={dialogConfig.baseModalProps?.isOverlayTransparent}
            stackingBehavior="above-nav"
          >
            {content}
          </BaseModal>
        ) : (
          {content}
        )}
      </CometErrorBoundary>
    );
};