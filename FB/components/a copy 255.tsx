__d(
  "MWV2CookieReader",
  [
    "I64",
    "LSIntEnum",
    "MWChatStateV2Types",
    "gkx",
    "killswitch",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = {
        cbj: (h || (h = d("LSIntEnum"))).ofNumber(23),
        cbu: h.ofNumber(24),
        cg: h.ofNumber(18),
        cgu: h.ofNumber(19),
        cphj: h.ofNumber(21),
        cphu: h.ofNumber(22),
        dp: h.ofNumber(150),
        dp2: h.ofNumber(154),
        dp2u: h.ofNumber(155),
        dpb: h.ofNumber(152),
        dpbu: h.ofNumber(153),
        dpu: h.ofNumber(151),
        g: h.ofNumber(2),
        sc: h.ofNumber(15),
        sg: h.ofNumber(16),
      };

    function k(a) {
      a = a.split(".");
      if (a.length !== 2) return;
      var b = a[0];
      a = a[1];
      if (/^-?[1-9]\d*$/.test(a) === !1 || b == null) return;
      b = (b = j[b]) != null ? b : (h || (h = d("LSIntEnum"))).ofNumber(1);
      return [(i || (i = d("I64"))).of_string(a), b];
    }

    function l(a) {
      var b = a.map(function (a) {
        a = a[0];
        return (i || (i = d("I64"))).to_string(a);
      });
      b = new Set(b);
      if (b.size !== a.length) {
        c("recoverableViolation")(
          "Duplicate thread in cookie (t3)",
          "messenger_comet"
        );
        return a.filter(function (a, b, c) {
          var e = a[0];
          return !c.slice((b + 1) | 0).some(function (a) {
            a = a[0];
            return (i || (i = d("I64"))).equal(a, e);
          });
        });
      } else return a;
    }

    function a(a) {
      if (a == null) return d("MWChatStateV2Types").emptyMWChatState;
      if (
        c("killswitch")("MESSENGER_WEB_STOP_PERSISTING_CHAT_HEADS") ||
        !c("gkx")("24038") ||
        !a.startsWith("C")
      )
        return d("MWChatStateV2Types").emptyMWChatState;
      a = a.slice(1);
      try {
        a = JSON.parse(a);
      } catch (b) {
        c("recoverableViolation")(
          "Error parsing JSON string",
          "messenger_comet"
        ),
          (a = null);
      }
      if (a === null) return d("MWChatStateV2Types").emptyMWChatState;
      var b = [],
        e = new Set();
      a.t3.forEach(function (a) {
        var c = a.i;
        c = k(c);
        if (c != null) {
          b.push(c);
          a.o === 1 && e.add(c);
          return;
        }
      });
      var f = l(b),
        g = new Map(),
        h = {
          contents: 0,
        };
      f.forEach(function (b) {
        var a = b[0];
        b = b[1];
        var c = e.has([a, b]);
        g.set(h.contents, {
          clientForcedMinimizeWatermark: 0,
          closeWatermark: 0,
          minimizeWatermark: c ? 0 : 1,
          openFlyoutWatermark: 0,
          openWatermark: c ? 1 : 0,
          tabId: h.contents,
          tabType: {
            threadKeyDescriptor: {
              clientThreadKey: void 0,
              threadKey: a,
              threadType: b,
            },
            type: d("MWChatStateV2Types").MWChatStateTabType.ChatTab,
          },
        });
        h.contents = (h.contents + 1) | 0;
      });
      a = a.lm3;
      if (a != null) {
        a = k(a);
        if (a != null) {
          var j = a[0];
          a = a[1];
          f.some(function (a) {
            a = a[0];
            return (i || (i = d("I64"))).equal(a, j);
          }) ||
            g.set(h.contents, {
              clientForcedMinimizeWatermark: 0,
              closeWatermark: 0,
              minimizeWatermark: 0,
              openFlyoutWatermark: 0,
              openWatermark: 2,
              tabId: h.contents,
              tabType: {
                threadKeyDescriptor: {
                  clientThreadKey: void 0,
                  threadKey: j,
                  threadType: a,
                },
                type: d("MWChatStateV2Types").MWChatStateTabType.ChatTab,
              },
            });
          h.contents = (h.contents + 1) | 0;
        }
      }
      return {
        focusedTabId: void 0,
        mediaViewerOpenWatermark: -1,
        nextTabId: h.contents,
        tabs: g,
      };
    }
    g.read = a;
  },
  98
);

import I64 from "./I64";
import LSIntEnum from "./LSIntEnum";
import MWChatStateV2Types from "MWChatStateV2Types";
import gkx from "./gkx";
import killswitch from "./killswitch";
import recoverableViolation from "./recoverableViolation";

const LSIntEnumMap: { [key: string]: LSIntEnum } = {
  cbj: LSIntEnum.ofNumber(23),
  cbu: LSIntEnum.ofNumber(24),
  cg: LSIntEnum.ofNumber(18),
  cgu: LSIntEnum.ofNumber(19),
  cphj: LSIntEnum.ofNumber(21),
  cphu: LSIntEnum.ofNumber(22),
  dp: LSIntEnum.ofNumber(150),
  dp2: LSIntEnum.ofNumber(154),
  dp2u: LSIntEnum.ofNumber(155),
  dpb: LSIntEnum.ofNumber(152),
  dpbu: LSIntEnum.ofNumber(153),
  dpu: LSIntEnum.ofNumber(151),
  g: LSIntEnum.ofNumber(2),
  sc: LSIntEnum.ofNumber(15),
  sg: LSIntEnum.ofNumber(16),
};

function parseCookieValue(val: string): [I64, LSIntEnum] | null {
  const parts = val.split(".");
  if (parts.length !== 2) {
    return null;
  }
  const [key, value] = parts;
  if (!/^-?\d+$/.test(value) || key == null) {
    return null;
  }
  const lsIntEnum = LSIntEnumMap[key] ?? LSIntEnum.ofNumber(1);
  return [I64.of_string(value), lsIntEnum];
}

function deduplicateThreads(threads: [I64, LSIntEnum][]): [I64, LSIntEnum][] {
  const threadIds = threads.map(([id]) => I64.to_string(id));
  const uniqueThreadIds = new Set(threadIds);
  if (uniqueThreadIds.size !== threads.length) {
    recoverableViolation("Duplicate thread in cookie (t3)", "messenger_comet");
    return threads.filter((_, index, self) => {
      const [id] = self[index];
      return !self.slice(index + 1).some(([otherId]) => I64.equal(id, otherId));
    });
  }
  return threads;
}

export default {
  read(cookie: string | null): MWChatStateV2Types.MWChatState {
    if (cookie == null) {
      return MWChatStateV2Types.emptyMWChatState;
    }

    if (
      killswitch("MESSENGER_WEB_STOP_PERSISTING_CHAT_HEADS") ||
      !gkx("24038") ||
      !cookie.startsWith("C")
    ) {
      return MWChatStateV2Types.emptyMWChatState;
    }

    let data;
    try {
      data = JSON.parse(cookie.slice(1));
    } catch (e) {
      recoverableViolation("Error parsing JSON string", "messenger_comet");
      return MWChatStateV2Types.emptyMWChatState;
    }

    if (data === null) {
      return MWChatStateV2Types.emptyMWChatState;
    }

    const threads: [I64, LSIntEnum][] = [];
    const openedThreads = new Set<string>();

    data.t3.forEach((thread) => {
      const threadKey = thread.i;
      const parsedThread = parseCookieValue(threadKey);
      if (parsedThread != null) {
        threads.push(parsedThread);
        if (thread.o === 1) {
          openedThreads.add(`${parsedThread[0]},${parsedThread[1]}`);
        }
      }
    });

    const uniqueThreads = deduplicateThreads(threads);
    const tabs = new Map<number, MWChatStateV2Types.MWChatStateTab>();
    let nextTabId = 0;

    uniqueThreads.forEach(([id, type]) => {
      const isOpen = openedThreads.has(`${id},${type}`);
      tabs.set(nextTabId, {
        clientForcedMinimizeWatermark: 0,
        closeWatermark: 0,
        minimizeWatermark: isOpen ? 0 : 1,
        openFlyoutWatermark: 0,
        openWatermark: isOpen ? 1 : 0,
        tabId: nextTabId,
        tabType: {
          threadKeyDescriptor: {
            clientThreadKey: undefined,
            threadKey: id,
            threadType: type,
          },
          type: MWChatStateV2Types.MWChatStateTabType.ChatTab,
        },
      });
      nextTabId++;
    });

    const lastMessageThreadKey = data.lm3;
    if (lastMessageThreadKey != null) {
      const parsedLastMessage = parseCookieValue(lastMessageThreadKey);
      if (parsedLastMessage != null) {
        const [id, type] = parsedLastMessage;
        if (!uniqueThreads.some(([threadId]) => I64.equal(threadId, id))) {
          tabs.set(nextTabId, {
            clientForcedMinimizeWatermark: 0,
            closeWatermark: 0,
            minimizeWatermark: 0,
            openFlyoutWatermark: 0,
            openWatermark: 2,
            tabId: nextTabId,
            tabType: {
              threadKeyDescriptor: {
                clientThreadKey: undefined,
                threadKey: id,
                threadType: type,
              },
              type: MWChatStateV2Types.MWChatStateTabType.ChatTab,
            },
          });
          nextTabId++;
        }
      }
    }

    return {
      focusedTabId: undefined,
      mediaViewerOpenWatermark: -1,
      nextTabId,
      tabs,
    };
  },
};
