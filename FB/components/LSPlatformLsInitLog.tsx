__d(
  "LSPlatformLsInitLog",
  ["ErrorGuard", "ExecutionEnvironment", "QPLUserFlow", "gkx", "qpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = c("qpl")._(25305590, "1127"),
      k = !1,
      l = !1,
      m = [],
      n = c("gkx")("23405"),
      o = c("gkx")("22799");
    function a(a) {
      k ||
        ((k = !0),
        (l = !1),
        (h || (h = c("ExecutionEnvironment"))).isInWorker || a === !1
          ? c("QPLUserFlow").start(j, {
              annotations: {
                bool: { isArmadilloPublicLaunchUser: n, mComPreInitLoad: o },
              },
              cancelOnUnload: !0,
              timeoutInMs: 6e4,
            })
          : c("QPLUserFlow").startFromNavStart(j, {
              annotations: {
                bool: { isArmadilloPublicLaunchUser: n, mComPreInitLoad: o },
              },
              cancelOnUnload: !0,
              onFlowTimeout: s,
              timeoutInMs: (h || (h = c("ExecutionEnvironment"))).canUseDOM
                ? 6e4
                : 0,
            }));
    }
    function p(a, b, d) {
      r() &&
        (c("QPLUserFlow").addPoint(
          a,
          ((h || (h = c("ExecutionEnvironment"))).isInWorker ? "worker_" : "") +
            b
        ),
        d != null && c("QPLUserFlow").addAnnotations(a, d));
    }
    function q(a) {
      c("QPLUserFlow").addAnnotations(j, a);
    }
    function b(a, b) {
      p(j, a, b);
    }
    function d() {
      r() && ((l = !0), c("QPLUserFlow").endSuccess(j), s());
    }
    function e(a, b) {
      (l = !0), c("QPLUserFlow").endFailure(j, a, { error: b }), s();
    }
    function r() {
      return k && !l;
    }
    function s() {
      for (var a = 0; a < m.length; a++) {
        var b = m[a];
        (i || (i = c("ErrorGuard"))).applyWithGuard(b, null, []);
      }
    }
    function f(a) {
      m.push(a);
    }
    var t = {
      addAnnotations: function (a) {
        var b = a.bool,
          c = a["int"];
        a = a.string;
        q({ bool: b, int: c, string: a });
      },
      addPoint: b,
      addPointForEvent: p,
      endFail: e,
      endSuccess: d,
      isPending: r,
      onCompleteOrFail: f,
      start: a,
    };
    g.start = a;
    g.addPointForEvent = p;
    g.addAnnotations = q;
    g.addPoint = b;
    g.endSuccess = d;
    g.fail = e;
    g.isPending = r;
    g.onCompleteOrFail = f;
    g.lsInitLogger = t;
  },
  98
);

import { ErrorGuard } from "ErrorGuard";
import { ExecutionEnvironment } from "ExecutionEnvironment";
import { QPLUserFlow } from "QPLUserFlow";
import { gkx } from "gkx";
import { qpl } from "qpl";

const QPL_ID = qpl._(25305590, "1127");
let isStarted = false;
let isFinished = false;
const callbacks: Array<() => void> = [];
const isArmadilloPublicLaunchUser = gkx("23405");
const mComPreInitLoad = gkx("22799");

function start(logInWorker: boolean) {
  if (!isStarted) {
    isStarted = true;
    isFinished = false;
    const inWorker = ExecutionEnvironment.isInWorker || logInWorker === false;

    const flowOptions = {
      annotations: {
        bool: { isArmadilloPublicLaunchUser, mComPreInitLoad },
      },
      cancelOnUnload: true,
      timeoutInMs: 60000,
    };

    if (inWorker) {
      QPLUserFlow.start(QPL_ID, flowOptions);
    } else {
      QPLUserFlow.startFromNavStart(QPL_ID, {
        ...flowOptions,
        onFlowTimeout: handleFlowTimeout,
        timeoutInMs: ExecutionEnvironment.canUseDOM ? 60000 : 0,
      });
    }
  }
}

function addPointForEvent(
  eventId: string,
  pointName: string,
  annotations?: Record<string, any>
) {
  if (isPending()) {
    QPLUserFlow.addPoint(
      eventId,
      (ExecutionEnvironment.isInWorker ? "worker_" : "") + pointName
    );
    if (annotations != null) {
      QPLUserFlow.addAnnotations(eventId, annotations);
    }
  }
}

function addAnnotations(annotations: {
  bool?: Record<string, boolean>;
  int?: Record<string, number>;
  string?: Record<string, string>;
}) {
  QPLUserFlow.addAnnotations(QPL_ID, annotations);
}

function addPoint(pointName: string, annotations?: Record<string, any>) {
  addPointForEvent(QPL_ID, pointName, annotations);
}

function endSuccess() {
  if (isPending()) {
    isFinished = true;
    QPLUserFlow.endSuccess(QPL_ID);
    handleFlowTimeout();
  }
}

function fail(errorType: string, error: any) {
  isFinished = true;
  QPLUserFlow.endFailure(QPL_ID, errorType, { error });
  handleFlowTimeout();
}

function isPending() {
  return isStarted && !isFinished;
}

function handleFlowTimeout() {
  for (const callback of callbacks) {
    ErrorGuard.applyWithGuard(callback, null, []);
  }
}

function onCompleteOrFail(callback: () => void) {
  callbacks.push(callback);
}

const lsInitLogger = {
  addAnnotations,
  addPoint,
  addPointForEvent,
  endFail: fail,
  endSuccess,
  isPending,
  onCompleteOrFail,
  start,
};

export {
  start,
  addPointForEvent,
  addAnnotations,
  addPoint,
  endSuccess,
  fail,
  isPending,
  onCompleteOrFail,
  lsInitLogger,
};
