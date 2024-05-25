__d(
  "MessengerWebUXLoggerImpl",
  [
    "CurrentUser",
    "I64",
    "LSIntEnum",
    "MWThreadKey.react",
    "MessagingThreadType",
    "MessengerWebUxEventFalcoEvent",
    "ODS",
    "WebUXLoggingEntryPointContextProvider",
    "WebUXLoggingSurfaceContextProvider",
    "cr:6873", // null
    "react",
    "useSinglePartialViewImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j,
      k,
      l = h || d("react"),
      m = l.useCallback,
      n = l.useContext,
      o = l.useInsertionEffect,
      p = l.useRef;
    function q() {
      var a = s();
      return m(
        function (b) {
          a(
            typeof b === "string"
              ? { eventName: b, eventType: "interaction" }
              : babelHelpers["extends"]({}, b, {
                  eventType: (b = b.eventType) != null ? b : "interaction",
                })
          );
        },
        [a]
      );
    }
    function a() {
      var a = q();
      return m(
        function (b, c) {
          return b != null && c != null
            ? function (d) {
                b(d), a(c);
              }
            : b;
        },
        [a]
      );
    }
    function e() {
      var a = s();
      return m(
        function (b) {
          a(babelHelpers["extends"]({}, b, { eventType: "impression" }));
        },
        [a]
      );
    }
    function f(a, b) {
      var d = s();
      return c("useSinglePartialViewImpression")({
        onImpressionStart: function () {
          d(babelHelpers["extends"]({}, a, { eventType: "impression" })),
            b == null ? void 0 : b();
        },
      });
    }
    function r(a) {
      var b = (i || (i = d("LSIntEnum"))).toNumber(a);
      a =
        (a = Object.entries(c("MessagingThreadType")).find(function (a) {
          a[0];
          a = a[1];
          return a === b;
        })) != null
          ? a
          : ["unknown"];
      a = a[0];
      return a;
    }
    function s() {
      var a = n(
          d("WebUXLoggingEntryPointContextProvider")
            .WebUXEntryPointLoggingContext
        ),
        e = p(a),
        f = n(
          d("WebUXLoggingSurfaceContextProvider").WebUXSurfaceLoggingContext
        ),
        g = p(f),
        h = d("MWThreadKey.react").useMWThreadKeyMemoized(),
        l = p(h);
      o(function () {
        (e.current = a), (l.current = h), (g.current = f);
      });
      return m(function (a) {
        var f = a.ctaType,
          h = a.entryPoint,
          m = a.eventName,
          n = a.eventType,
          o = a.extraData,
          p = a.flowInstanceId,
          q = a.surface,
          s = a.threadKey,
          u = a.threadType;
        s = (s = s) != null ? s : l.current;
        h = h != null ? h : e.current;
        var v = u ? r(u) : "unknown",
          w = {
            cta_type: f,
            entry_point: h,
            event_type: (f = n) != null ? f : "interaction",
            extra_data: o,
            flow_instance_id: p,
            surface: (f = q) != null ? f : g.current,
            thread_fbid:
              s != null ? (j || (j = d("I64"))).to_string(s) : void 0,
            thread_type:
              u != null ? (i || (i = d("LSIntEnum"))).unwrapIntEnum(u) : void 0,
          };
        c("MessengerWebUxEventFalcoEvent").log(function () {
          return babelHelpers["extends"](
            { client_timestamp_ms: Date.now().toString(), event_name: m },
            w
          );
        });
        (k || (k = d("ODS"))).bumpEntityKey(t(), a.eventName + "_" + v, h);
        if (b("cr:6873") != null && n === "interaction") {
          o = b("cr:6873").getInstance("user_experience");
          o.debug(JSON.stringify(w), m);
        }
      }, []);
    }
    function t() {
      var a = c("CurrentUser").getAppID();
      switch (a) {
        case 1217981644879628:
        case 936619743392459:
        case 1035956773910536:
        case 487152425211411:
          return 938;
        case 2220391788200892:
          return 3185;
        case 772021112871879:
          return 3297;
        default:
          return 0;
      }
    }
    g.useInteractionLogger = q;
    g.useLogOnPressInteraction = a;
    g.useImpressionLogger = e;
    g.useImpressionLoggerRef = f;
  },
  98
);

import CurrentUser from "CurrentUser";
import I64 from "I64";
import LSIntEnum from "LSIntEnum";
import MWThreadKey from "MWThreadKey.react";
import MessagingThreadType from "MessagingThreadType";
import MessengerWebUxEventFalcoEvent from "MessengerWebUxEventFalcoEvent";
import ODS from "ODS";
import { WebUXEntryPointLoggingContext } from "WebUXLoggingEntryPointContextProvider";
import { WebUXSurfaceLoggingContext } from "WebUXLoggingSurfaceContextProvider";
import React, {
  useCallback,
  useContext,
  useInsertionEffect,
  useRef,
} from "react";
import useSinglePartialViewImpression from "useSinglePartialViewImpression";

type Event = {
  eventName: string;
  eventType?: string;
  ctaType?: any;
  entryPoint?: any;
  extraData?: any;
  flowInstanceId?: any;
  surface?: any;
  threadKey?: any;
  threadType?: any;
};

function useInteractionLogger(): (event: Event | string) => void {
  const logEvent = useLogEvent();
  return useCallback(
    (event) => {
      logEvent(
        typeof event === "string"
          ? { eventName: event, eventType: "interaction" }
          : { ...event, eventType: event.eventType ?? "interaction" }
      );
    },
    [logEvent]
  );
}

function useLogOnPressInteraction(): (
  handler: (event: any) => void,
  event: Event
) => (event: any) => void {
  const logEvent = useLogEvent();
  return useCallback(
    (handler, event) => {
      return handler != null && event != null
        ? (e) => {
            handler(e);
            logEvent(event);
          }
        : handler;
    },
    [logEvent]
  );
}

function useImpressionLogger(): (event: Event) => void {
  const logEvent = useLogEvent();
  return useCallback(
    (event) => {
      logEvent({ ...event, eventType: "impression" });
    },
    [logEvent]
  );
}

function useImpressionLoggerRef(event: Event, callback?: () => void) {
  const logEvent = useLogEvent();
  return useSinglePartialViewImpression({
    onImpressionStart: () => {
      logEvent({ ...event, eventType: "impression" });
      callback?.();
    },
  });
}

function mapThreadType(threadType: any): string {
  const threadTypeNumber = LSIntEnum.toNumber(threadType);
  const entry = Object.entries(MessagingThreadType).find(
    ([, value]) => value === threadTypeNumber
  );
  return entry ? entry[0] : "unknown";
}

function useLogEvent() {
  const entryPointContext = useContext(WebUXEntryPointLoggingContext);
  const surfaceContext = useContext(WebUXSurfaceLoggingContext);
  const threadKey = MWThreadKey.useMWThreadKeyMemoized();

  const entryPointRef = useRef(entryPointContext);
  const surfaceRef = useRef(surfaceContext);
  const threadKeyRef = useRef(threadKey);

  useInsertionEffect(() => {
    entryPointRef.current = entryPointContext;
    surfaceRef.current = surfaceContext;
    threadKeyRef.current = threadKey;
  });

  return useCallback((event: Event) => {
    const {
      ctaType,
      entryPoint,
      eventName,
      eventType,
      extraData,
      flowInstanceId,
      surface,
      threadKey,
      threadType,
    } = event;
    const currentThreadKey = threadKey ?? threadKeyRef.current;
    const currentEntryPoint = entryPoint ?? entryPointRef.current;
    const currentSurface = surface ?? surfaceRef.current;
    const mappedThreadType = threadType ? mapThreadType(threadType) : "unknown";

    const logData = {
      cta_type: ctaType,
      entry_point: currentEntryPoint,
      event_type: eventType ?? "interaction",
      extra_data: extraData,
      flow_instance_id: flowInstanceId,
      surface: currentSurface,
      thread_fbid:
        currentThreadKey != null ? I64.to_string(currentThreadKey) : undefined,
      thread_type:
        threadType != null ? LSIntEnum.unwrapIntEnum(threadType) : undefined,
    };

    MessengerWebUxEventFalcoEvent.log(() => ({
      client_timestamp_ms: Date.now().toString(),
      event_name: eventName,
      ...logData,
    }));

    ODS.bumpEntityKey(
      getAppIDKey(),
      `${eventName}_${mappedThreadType}`,
      currentEntryPoint
    );
  }, []);
}

function getAppIDKey(): number {
  const appID = CurrentUser.getAppID();
  switch (appID) {
    case 1217981644879628:
    case 936619743392459:
    case 1035956773910536:
    case 487152425211411:
      return 938;
    case 2220391788200892:
      return 3185;
    case 772021112871879:
      return 3297;
    default:
      return 0;
  }
}

export {
  useInteractionLogger,
  useLogOnPressInteraction,
  useImpressionLogger,
  useImpressionLoggerRef,
};
