__d(
  "MAWMIC",
  [
    "HiddenTabDataUtils",
    "IGDWebUtils",
    "MAWCurrentUser",
    "MAWEBSwitch",
    "MAWGetStorageQplAnnotations",
    "MWQPLJoinId",
    "MultipleTabsLogger",
    "QPLJoinUtils",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "err",
    "gkx",
    "performanceNow",
    "qpl",
    "shouldUseMAWSharedWorker",
    "waitForMAWMIC",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = !1,
      k = !1,
      l = new Set(),
      m = new Map(),
      n = new Map(),
      o = d("IGDWebUtils").isOnInstagramWeb()
        ? new Set([
            "worker_process_offline_queue_end",
            "maw_init_end",
            "ls_init_end",
          ])
        : new Set([
            "worker_process_offline_queue_end",
            "maw_init_end",
            "ls_init_end",
            "occamadillo_thread_mapping_end",
          ]),
      p = {
        worker_download_offline_queue_end:
          "worker_download_offline_queue_start",
        worker_process_offline_queue_end: "worker_process_offline_queue_start",
      };
    function q() {
      k = !0;
      A();
      var a = d("HiddenTabDataUtils").getHiddenTabDataForTimeInterval(
        0,
        (h || (h = c("performanceNow")))()
      );
      x("isHidden", a.isHidden());
      y("totalHiddenTime", a.totalHiddenTime());
      var b = a.firstTimeHidden();
      b != null && y("firstTimeHidden", b);
      b = a.lastTimeHidden();
      b != null && y("lastTimeHidden", b);
    }
    function a() {
      return !k;
    }
    function b(a, b) {
      if (k || !j) return;
      q();
      b &&
        c("QPLUserFlow").markError(
          c("qpl")._(1056839232, "112"),
          "maw_ttrc_cancel_with_error",
          { error: b }
        );
      c("QPLUserFlow").endCancel(c("qpl")._(1056839232, "112"), {
        annotations: { string: { cancelReason: a } },
      });
    }
    function e(a, b) {
      if (k) return;
      q();
      d("waitForMAWMIC").resolvable.reject(c("err")("MAWMIC Failed"));
      c("QPLUserFlow").endFailure(c("qpl")._(1056839232, "112"), a, {
        error: b,
      });
    }
    function f(a) {
      if (k) return;
      q();
      d("waitForMAWMIC").resolvable.reject(
        c("err")("MAWMIC dropped due to: " + a)
      );
      z("dropReason", a);
      (i || (i = c("QuickPerformanceLogger"))).markerDrop(
        c("qpl")._(1056839232, "112")
      );
    }
    function r(a, b) {
      if (j) v(a, b);
      else if (!m.has(a)) {
        m.set(
          a,
          (a = b) != null
            ? a
            : (i || (i = c("QuickPerformanceLogger"))).currentTimestamp()
        );
      }
    }
    function s() {
      n.forEach(function (a, b) {
        a === !0 || a === !1
          ? x(b, a)
          : Number.isInteger(a)
          ? y(b, Number(a))
          : z(b, String(a));
      }),
        n.clear();
    }
    function t() {
      m.forEach(function (a, b) {
        return v(b, a);
      }),
        m.clear();
    }
    function u() {
      if (j) return;
      var a = c("qpl")._(1056839232, "112");
      c("QPLUserFlow").startFromNavStart(a, {
        annotations: {
          bool: {
            is_pdb: c("gkx")("24032"),
            isArmadilloPublicLaunchUser: c("gkx")("23405"),
            isEBEnabled: c("MAWEBSwitch").isEnabled(),
            isTlcPublicUser: d("MAWCurrentUser").isTlcPublicUser(),
            useSharedWorker: d(
              "shouldUseMAWSharedWorker"
            ).shouldUseMAWSharedWorker(),
            useWorkerV2: !0,
          },
          string: { hostname: window.location.hostname },
        },
        onFlowTimeout: function () {
          return q();
        },
      });
      d("MWQPLJoinId").allowJoinId &&
        d("QPLJoinUtils").setJoinId(
          i || (i = c("QuickPerformanceLogger")),
          a,
          d("MWQPLJoinId").MWQPLJoinId
        );
      A();
      d("MultipleTabsLogger").addAnnotationToQPLEvent(
        c("qpl")._(1056839232, "112")
      );
      j = !0;
      t();
      s();
    }
    function v(a, b) {
      if (k || l.has(a)) return;
      l.add(a);
      o["delete"](a);
      b = b != null ? { timestamp: b } : void 0;
      var d = p[a];
      d != null &&
        !l.has(d) &&
        c("QPLUserFlow").addPoint(c("qpl")._(1056839232, "112"), d, b);
      c("QPLUserFlow").addPoint(c("qpl")._(1056839232, "112"), a, b);
      o.size === 0 && w();
    }
    function w(a) {
      a === void 0 && (a = !1);
      q();
      a = { bool: { workerAlreadySetup: a } };
      d("waitForMAWMIC").resolvable.resolve();
      c("QPLUserFlow").endSuccess(c("qpl")._(1056839232, "112"), {
        annotations: a,
      });
    }
    function x(a, b) {
      var d;
      if (!j) {
        n.set(a, b);
        return;
      }
      c("QPLUserFlow").addAnnotations(c("qpl")._(1056839232, "112"), {
        bool: ((d = {}), (d[a] = b), d),
      });
    }
    function y(a, b) {
      var d;
      if (!j) {
        n.set(a, b);
        return;
      }
      c("QPLUserFlow").addAnnotations(c("qpl")._(1056839232, "112"), {
        int: ((d = {}), (d[a] = b), d),
      });
    }
    function z(a, b) {
      var d;
      if (!j) {
        n.set(a, b);
        return;
      }
      c("QPLUserFlow").addAnnotations(c("qpl")._(1056839232, "112"), {
        string: ((d = {}), (d[a] = b), d),
      });
    }
    function A() {
      void d("MAWGetStorageQplAnnotations")
        .getStorageQplAnnotations()
        .then(function (a) {
          return c("QPLUserFlow").addAnnotations(
            c("qpl")._(1056839232, "112"),
            babelHelpers["extends"]({}, a)
          );
        });
    }
    g.duringMIC = a;
    g.cancel = b;
    g.fail = e;
    g.drop = f;
    g.markEvent = r;
    g.startMAWMICFlow = u;
    g.endSuccess = w;
    g.addBoolAnnotation = x;
    g.addIntAnnotation = y;
    g.addStringAnnotation = z;
  },
  98
);

import HiddenTabDataUtils from "HiddenTabDataUtils";
import IGDWebUtils from "IGDWebUtils";
import MAWCurrentUser from "MAWCurrentUser";
import MAWEBSwitch from "MAWEBSwitch";
import MAWGetStorageQplAnnotations from "MAWGetStorageQplAnnotations";
import MWQPLJoinId from "MWQPLJoinId";
import MultipleTabsLogger from "MultipleTabsLogger";
import QPLJoinUtils from "QPLJoinUtils";
import QPLUserFlow from "QPLUserFlow";
import QuickPerformanceLogger from "QuickPerformanceLogger";
import err from "err";
import gkx from "gkx";
import performanceNow from "performanceNow";
import qpl from "qpl";
import shouldUseMAWSharedWorker from "shouldUseMAWSharedWorker";
import waitForMAWMIC from "waitForMAWMIC";

let isInitialized: boolean = false;
let isMICCancelled: boolean = false;
const markedEvents = new Set<string>();
const pendingEvents = new Map<string, number>();
const pendingAnnotations = new Map<string, any>();

const eventPoints = IGDWebUtils.isOnInstagramWeb()
  ? new Set(["worker_process_offline_queue_end", "maw_init_end", "ls_init_end"])
  : new Set([
      "worker_process_offline_queue_end",
      "maw_init_end",
      "ls_init_end",
      "occamadillo_thread_mapping_end",
    ]);

const eventStartPoints = {
  worker_download_offline_queue_end: "worker_download_offline_queue_start",
  worker_process_offline_queue_end: "worker_process_offline_queue_start",
};

function initializeMIC() {
  isMICCancelled = true;
  handleMICInitialization();

  const hiddenTabData = HiddenTabDataUtils.getHiddenTabDataForTimeInterval(
    0,
    performanceNow()
  );
  addBoolAnnotation("isHidden", hiddenTabData.isHidden());
  addIntAnnotation("totalHiddenTime", hiddenTabData.totalHiddenTime());

  const firstTimeHidden = hiddenTabData.firstTimeHidden();
  if (firstTimeHidden != null) {
    addIntAnnotation("firstTimeHidden", firstTimeHidden);
  }

  const lastTimeHidden = hiddenTabData.lastTimeHidden();
  if (lastTimeHidden != null) {
    addIntAnnotation("lastTimeHidden", lastTimeHidden);
  }
}

export function duringMIC(): boolean {
  return !isMICCancelled;
}

export function cancelMIC(reason: string, error?: Error): void {
  if (isMICCancelled || !isInitialized) return;
  initializeMIC();
  if (error) {
    QPLUserFlow.markError(
      qpl._(1056839232, "112"),
      "maw_ttrc_cancel_with_error",
      { error }
    );
  }
  QPLUserFlow.endCancel(qpl._(1056839232, "112"), {
    annotations: { string: { cancelReason: reason } },
  });
}

export function failMIC(reason: string, error?: Error): void {
  if (isMICCancelled) return;
  initializeMIC();
  waitForMAWMIC.resolvable.reject(err("MAWMIC Failed"));
  QPLUserFlow.endFailure(qpl._(1056839232, "112"), reason, {
    error,
  });
}

export function dropMIC(reason: string): void {
  if (isMICCancelled) return;
  initializeMIC();
  waitForMAWMIC.resolvable.reject(err(`MAWMIC dropped due to: ${reason}`));
  addStringAnnotation("dropReason", reason);
  QuickPerformanceLogger.markerDrop(qpl._(1056839232, "112"));
}

export function markEvent(event: string, timestamp?: number): void {
  if (isInitialized) {
    recordEvent(event, timestamp);
  } else if (!pendingEvents.has(event)) {
    pendingEvents.set(
      event,
      timestamp ?? QuickPerformanceLogger.currentTimestamp()
    );
  }
}

function processPendingAnnotations() {
  pendingAnnotations.forEach((value, key) => {
    if (value === true || value === false) {
      addBoolAnnotation(key, value);
    } else if (Number.isInteger(value)) {
      addIntAnnotation(key, Number(value));
    } else {
      addStringAnnotation(key, String(value));
    }
  });
  pendingAnnotations.clear();
}

function processPendingEvents() {
  pendingEvents.forEach((timestamp, event) => {
    recordEvent(event, timestamp);
  });
  pendingEvents.clear();
}

export function startMAWMICFlow(): void {
  if (isInitialized) return;

  const flowId = qpl._(1056839232, "112");
  QPLUserFlow.startFromNavStart(flowId, {
    annotations: {
      bool: {
        is_pdb: gkx("24032"),
        isArmadilloPublicLaunchUser: gkx("23405"),
        isEBEnabled: MAWEBSwitch.isEnabled(),
        isTlcPublicUser: MAWCurrentUser.isTlcPublicUser(),
        useSharedWorker: shouldUseMAWSharedWorker.shouldUseMAWSharedWorker(),
        useWorkerV2: true,
      },
      string: { hostname: window.location.hostname },
    },
    onFlowTimeout: initializeMIC,
  });

  if (MWQPLJoinId.allowJoinId) {
    QPLJoinUtils.setJoinId(
      QuickPerformanceLogger,
      flowId,
      MWQPLJoinId.MWQPLJoinId
    );
  }

  handleMICInitialization();
  MultipleTabsLogger.addAnnotationToQPLEvent(flowId);
  isInitialized = true;
  processPendingEvents();
  processPendingAnnotations();
}

function recordEvent(event: string, timestamp?: number) {
  if (isMICCancelled || markedEvents.has(event)) return;
  markedEvents.add(event);
  eventPoints.delete(event);

  const startEvent = eventStartPoints[event];
  if (startEvent != null && !markedEvents.has(startEvent)) {
    QPLUserFlow.addPoint(
      qpl._(1056839232, "112"),
      startEvent,
      timestamp ? { timestamp } : undefined
    );
  }
  QPLUserFlow.addPoint(
    qpl._(1056839232, "112"),
    event,
    timestamp ? { timestamp } : undefined
  );

  if (eventPoints.size === 0) {
    endSuccess();
  }
}

function endSuccess(alreadySetup: boolean = false): void {
  initializeMIC();
  const annotations = { bool: { workerAlreadySetup: alreadySetup } };
  waitForMAWMIC.resolvable.resolve();
  QPLUserFlow.endSuccess(qpl._(1056839232, "112"), {
    annotations,
  });
}

function addBoolAnnotation(key: string, value: boolean): void {
  if (!isInitialized) {
    pendingAnnotations.set(key, value);
    return;
  }
  QPLUserFlow.addAnnotations(qpl._(1056839232, "112"), {
    bool: { [key]: value },
  });
}

function addIntAnnotation(key: string, value: number): void {
  if (!isInitialized) {
    pendingAnnotations.set(key, value);
    return;
  }
  QPLUserFlow.addAnnotations(qpl._(1056839232, "112"), {
    int: { [key]: value },
  });
}

function addStringAnnotation(key: string, value: string): void {
  if (!isInitialized) {
    pendingAnnotations.set(key, value);
    return;
  }
  QPLUserFlow.addAnnotations(qpl._(1056839232, "112"), {
    string: { [key]: value },
  });
}

function handleMICInitialization(): void {
  MAWGetStorageQplAnnotations.getStorageQplAnnotations().then((annotations) => {
    QPLUserFlow.addAnnotations(qpl._(1056839232, "112"), { ...annotations });
  });
}
