import { qpl } from 'qpl';
import React, { createContext, useContext, useMemo } from 'react';

const defaultInteractionQPLEvents = {
    dialogTraceQPLEvent: qpl._(30605361, "6204"),
    popoverTraceQPLEvent: qpl._(30605361, "6204")
};

const CometInteractionTracingQPLConfigContext = createContext(defaultInteractionQPLEvents);

const useDialogTraceQPLEvent = () => useContext(CometInteractionTracingQPLConfigContext).dialogTraceQPLEvent;
const usePopoverTraceQPLEvent = () => useContext(CometInteractionTracingQPLConfigContext).popoverTraceQPLEvent;

const CometInteractionTracingQPLConfigContextProvider = ({ children, dialogTraceQPLEvent, popoverTraceQPLEvent }) => {
    const value = useMemo(() => ({ dialogTraceQPLEvent, popoverTraceQPLEvent }), [dialogTraceQPLEvent, popoverTraceQPLEvent]);
    return <CometInteractionTracingQPLConfigContext.Provider value={value}>{children}</CometInteractionTracingQPLConfigContext.Provider>
};

CometInteractionTracingQPLConfigContextProvider.displayName = `CometInteractionTracingQPLConfigContextProvider [from ${__filename}]`;

export {
    defaultInteractionQPLEvents,
    useDialogTraceQPLEvent,
    usePopoverTraceQPLEvent,
    CometInteractionTracingQPLConfigContextProvider
};