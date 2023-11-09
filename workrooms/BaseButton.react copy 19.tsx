__d("CometInteractionTracingQPLConfigContext", ["qpl", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.useContext
      , j = d.useMemo;
    d = {
        dialogTraceQPLEvent: c("qpl")._(30605361, "6204"),
        popoverTraceQPLEvent: c("qpl")._(30605361, "6204")
    };
    var k = h.createContext(d);
    function a() {
        return i(k).dialogTraceQPLEvent
    }
    function b() {
        return i(k).popoverTraceQPLEvent
    }
    function e(a) {
        var b = a.children
          , c = a.dialogTraceQPLEvent
          , d = a.popoverTraceQPLEvent;
        return h.jsx(k.Provider, {
            value: j(function() {
                return {
                    dialogTraceQPLEvent: c,
                    popoverTraceQPLEvent: d
                }
            }, [c, d]),
            children: b
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.defaultInteractionQPLEvents = d;
    g.useDialogTraceQPLEvent = a;
    g.usePopoverTraceQPLEvent = b;
    g.CometInteractionTracingQPLConfigContextProvider = e
}
), 98);