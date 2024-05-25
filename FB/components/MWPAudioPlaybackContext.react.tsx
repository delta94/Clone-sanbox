__d(
  "MWPAudioPlaybackContext.react",
  [
    "fbt",
    "$InternalEnum",
    "I64",
    "Int64Hooks",
    "MWPAudioPlaybackThreadContext.react",
    "ReQL",
    "ReQLSuspense",
    "bx",
    "emptyFunction",
    "react",
    "useReStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k,
      l = j || (j = d("react")),
      m = j,
      n = m.createContext,
      o = m.useCallback,
      p = m.useContext,
      q = m.useEffect,
      r = m.useMemo,
      s = m.useRef,
      t = m.useState,
      u = b("$InternalEnum")({ SLOW: 0.5, NORMAL: 1, FAST: 1.5, DOUBLE: 2 });
    function v(a) {
      var b = new Audio();
      b.preload = "auto";
      b.src = a;
      b.load();
      return b;
    }
    function w() {
      return v(c("bx").getURL(c("bx")("577")));
    }
    function x(a) {
      var b = Array.from(u.members()),
        c = b.findIndex(function (b) {
          return b === a;
        });
      c = c + 1;
      return b[c % b.length];
    }
    function y(a) {
      return h._("__JHASH__T0e3ZJkGlxz__JHASH__", [
        h._param("playback rate", a, [0]),
      ]);
    }
    y.displayName = y.name + " [from " + f.id + "]";
    m = {
      activeAudio: null,
      activeThreadKey: (k || (k = d("I64"))).zero,
      addMessageId: c("emptyFunction"),
      addNextPlayableUrl: c("emptyFunction"),
      clearActiveAudio: c("emptyFunction"),
      clearNextPlayableUrl: c("emptyFunction"),
      getMessageId: c("emptyFunction"),
      getNewOrExistingAudio: v,
      getNextPlayableUrl: c("emptyFunction"),
      onChangePlaybackRate: c("emptyFunction"),
      playbackRateLabel: y(u.NORMAL),
      setUseOutOfChatPlayback: c("emptyFunction"),
    };
    var z = n(m);
    function a(a, b, c, e, f) {
      var g = p(z),
        h = g.activeAudio,
        i = g.activeThreadKey,
        j = g.addMessageId,
        l = g.addNextPlayableUrl,
        m = g.clearNextPlayableUrl,
        n = g.getNewOrExistingAudio,
        o = g.setUseOutOfChatPlayback,
        q = d(
          "MWPAudioPlaybackThreadContext.react"
        ).useMWPAudioPlaybackThreadKey();
      d("Int64Hooks").useEffectInt64(
        function () {
          if (
            !f ||
            (k || (k = d("I64"))).is_zero(i) ||
            (k || (k = d("I64"))).is_zero(q)
          )
            return;
          o(!(k || (k = d("I64"))).equal(i, q));
          return function () {
            o((k || (k = d("I64"))).equal(i, q));
          };
        },
        [h, i, o, f, q]
      );
      return d("Int64Hooks").useMemoInt64(
        function () {
          if (a != null && a !== "") {
            c != null && j(a, c);
            if (!f) return v(a);
            b != null && b !== "" ? (l(a, b), e != null && j(b, e)) : m(a);
            return n(a, q);
          }
        },
        [j, l, m, n, c, e, b, a, f, q]
      );
    }
    function e() {
      var a = p(z),
        b = a.onChangePlaybackRate;
      a = a.playbackRateLabel;
      return [a, b];
    }
    function A() {
      var a = p(z),
        b = a.activeAudio,
        e = a.activeThreadKey,
        g = a.clearActiveAudio,
        h = a.clearNextPlayableUrl,
        j = a.getMessageId;
      a = a.getNextPlayableUrl;
      var k = (i || (i = c("useReStore")))(),
        l = d("ReQLSuspense").useFirst(
          function () {
            return d("ReQL")
              .fromTableDescending(k.tables.threads)
              .getKeyRange(e);
          },
          [k, e],
          f.id + ":202"
        ),
        m = b == null ? void 0 : b.src,
        n = m == null ? null : a(m);
      a = d("ReQLSuspense").useFirst(
        function () {
          var a = n == null ? null : j(n);
          return a == null
            ? d("ReQL").empty()
            : d("ReQL")
                .fromTableAscending(k.tables.messages.index("messageId"), [
                  "isUnsent",
                ])
                .getKeyRange(a)
                .filter(function (a) {
                  return !a.isUnsent;
                });
        },
        [k, j, n],
        f.id + ":211"
      );
      m != null && n != null && a == null && h(m);
      return [b, g, l];
    }
    function B(a) {
      a = a.children;
      var b = s(new Map()),
        c = s(new Map()),
        e = s([]),
        f = s(new Map());
      q(function () {
        var a = e.current;
        return function () {
          while (a.length > 0) {
            var b = a.pop(),
              c = b[0],
              d = b[1];
            b = b[2];
            c.removeEventListener(d, b);
            c.pause();
          }
        };
      }, []);
      var g = t(u.NORMAL),
        h = g[0],
        i = g[1],
        j = r(
          function () {
            return y(h);
          },
          [h]
        );
      g = t((k || (k = d("I64"))).zero);
      var m = g[0],
        n = g[1];
      g = t(null);
      var p = g[0],
        A = g[1];
      g = t(!1);
      var B = g[0],
        C = g[1],
        D = (p == null ? void 0 : p.paused) === !1,
        E = r(
          function () {
            return B && D ? p : null;
          },
          [p, D, B]
        ),
        F = o(function (a, b) {
          f.current.set(a, b);
        }, []),
        G = o(function (a) {
          return f.current.get(a);
        }, []),
        H = o(function () {
          A(function (a) {
            a != null && a.pause();
            return null;
          });
        }, []),
        I = o(function (a) {
          c.current["delete"](a);
        }, []),
        J = o(
          function (a, d) {
            var f,
              g = (f = b.current.get(a)) != null ? f : v(a);
            g.playbackRate = h;
            f = function (a, b) {
              g.addEventListener(a, b), e.current.push([g, a, b]);
            };
            var i = function () {
              var d = c.current.get(a);
              if (d != null) {
                var e = b.current.get(d);
                if (e != null && e.paused)
                  return void w()
                    .play()
                    .then(function () {
                      A(e);
                      return e.play()["catch"](function () {
                        return A(null);
                      });
                    });
              }
              A(null);
            };
            f("ended", i);
            i = function () {
              for (
                var a = b.current.values(),
                  c = Array.isArray(a),
                  e = 0,
                  a = c
                    ? a
                    : a[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var f;
                if (c) {
                  if (e >= a.length) break;
                  f = a[e++];
                } else {
                  e = a.next();
                  if (e.done) break;
                  f = e.value;
                }
                f = f;
                f !== g && f.pause();
              }
              A(g);
              n(d);
            };
            f("playing", i);
            b.current.set(a, g);
            return g;
          },
          [h]
        ),
        K = o(function (a) {
          return c.current.get(a);
        }, []),
        L = o(function () {
          i(function (a) {
            a = x(a);
            for (
              var c = b.current.values(),
                d = Array.isArray(c),
                e = 0,
                c = d
                  ? c
                  : c[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var f;
              if (d) {
                if (e >= c.length) break;
                f = c[e++];
              } else {
                e = c.next();
                if (e.done) break;
                f = e.value;
              }
              f = f;
              f.playbackRate = a;
            }
            return a;
          });
        }, []),
        M = o(function (a, b) {
          c.current.set(a, b);
        }, []);
      g = d("Int64Hooks").useMemoInt64(
        function () {
          return {
            activeAudio: E,
            activeThreadKey: m,
            addMessageId: F,
            addNextPlayableUrl: M,
            clearActiveAudio: H,
            clearNextPlayableUrl: I,
            getMessageId: G,
            getNewOrExistingAudio: J,
            getNextPlayableUrl: K,
            onChangePlaybackRate: L,
            playbackRateLabel: j,
            setUseOutOfChatPlayback: C,
          };
        },
        [E, F, m, M, H, I, G, J, K, L, j]
      );
      return l.jsx(z.Provider, { value: g, children: a });
    }
    B.displayName = B.name + " [from " + f.id + "]";
    g.useMWPAudioPlaybackElement = a;
 t   g.useMWPAudioPlaybackRate = e;
    g.useMWPAudioOutOfChatPlayback = A;
    g.MWPAudioPlaybackContextProvider = B;
  },
  226
);

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import { $InternalEnum } from "$InternalEnum";
import { I64, Int64Hooks } from "Int64Hooks";
import { useMWPAudioPlaybackThreadKey } from "MWPAudioPlaybackThreadContext.react";
import { ReQL, ReQLSuspense } from "ReQL";
import { bx } from "bx";
import { emptyFunction } from "emptyFunction";
import { useReStore } from "useReStore";
import { fbt } from "fbt";

type AudioContextType = {
  activeAudio: HTMLAudioElement | null;
  activeThreadKey: I64;
  addMessageId: (url: string, id: string) => void;
  addNextPlayableUrl: (url: string, nextUrl: string) => void;
  clearActiveAudio: () => void;
  clearNextPlayableUrl: (url: string) => void;
  getMessageId: (url: string) => string | undefined;
  getNewOrExistingAudio: (url: string, threadKey: I64) => HTMLAudioElement;
  getNextPlayableUrl: (url: string) => string | undefined;
  onChangePlaybackRate: () => void;
  playbackRateLabel: string;
  setUseOutOfChatPlayback: (use: boolean) => void;
};

const playbackRates = $InternalEnum({
  SLOW: 0.5,
  NORMAL: 1,
  FAST: 1.5,
  DOUBLE: 2,
});

function createAudioElement(url: string): HTMLAudioElement {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = url;
  audio.load();
  return audio;
}

function getPlaceholderAudio(): HTMLAudioElement {
  return createAudioElement(bx.getURL(bx("577")));
}

function getNextPlaybackRate(currentRate: number): number {
  const rates = Array.from(playbackRates.members());
  const index = rates.findIndex((rate) => rate === currentRate);
  return rates[(index + 1) % rates.length];
}

function getPlaybackRateLabel(rate: number): string {
  return fbt._("__JHASH__T0e3ZJkGlxz__JHASH__", [
    fbt._param("playback rate", rate, [0]),
  ]);
}

const defaultAudioContext: AudioContextType = {
  activeAudio: null,
  activeThreadKey: I64.zero,
  addMessageId: emptyFunction,
  addNextPlayableUrl: emptyFunction,
  clearActiveAudio: emptyFunction,
  clearNextPlayableUrl: emptyFunction,
  getMessageId: emptyFunction,
  getNewOrExistingAudio: createAudioElement,
  getNextPlayableUrl: emptyFunction,
  onChangePlaybackRate: emptyFunction,
  playbackRateLabel: getPlaybackRateLabel(playbackRates.NORMAL),
  setUseOutOfChatPlayback: emptyFunction,
};

const AudioContext = createContext<AudioContextType>(defaultAudioContext);

export function useMWPAudioPlaybackElement(
  url: string,
  nextUrl: string | null,
  messageId: string | null,
  nextMessageId: string | null,
  useOutOfChatPlayback: boolean
): HTMLAudioElement | undefined {
  const context = useContext(AudioContext);
  const {
    activeAudio,
    activeThreadKey,
    addMessageId,
    addNextPlayableUrl,
    clearNextPlayableUrl,
    getNewOrExistingAudio,
    setUseOutOfChatPlayback,
  } = context;
  const threadKey = useMWPAudioPlaybackThreadKey();

  Int64Hooks.useEffectInt64(() => {
    if (
      !useOutOfChatPlayback ||
      I64.is_zero(activeThreadKey) ||
      I64.is_zero(threadKey)
    )
      return;

    setUseOutOfChatPlayback(!I64.equal(activeThreadKey, threadKey));
    return () => {
      setUseOutOfChatPlayback(I64.equal(activeThreadKey, threadKey));
    };
  }, [
    activeAudio,
    activeThreadKey,
    setUseOutOfChatPlayback,
    useOutOfChatPlayback,
    threadKey,
  ]);

  return Int64Hooks.useMemoInt64(() => {
    if (url) {
      if (messageId) addMessageId(url, messageId);
      if (!useOutOfChatPlayback) return createAudioElement(url);

      if (nextUrl) {
        addNextPlayableUrl(url, nextUrl);
        if (nextMessageId) addMessageId(nextUrl, nextMessageId);
      } else {
        clearNextPlayableUrl(url);
      }
      return getNewOrExistingAudio(url, threadKey);
    }
  }, [
    addMessageId,
    addNextPlayableUrl,
    clearNextPlayableUrl,
    getNewOrExistingAudio,
    messageId,
    nextMessageId,
    nextUrl,
    url,
    useOutOfChatPlayback,
    threadKey,
  ]);
}

export function useMWPAudioPlaybackRate(): [string, () => void] {
  const context = useContext(AudioContext);
  const { onChangePlaybackRate, playbackRateLabel } = context;
  return [playbackRateLabel, onChangePlaybackRate];
}

export function useMWPAudioOutOfChatPlayback(): [
  HTMLAudioElement | null,
  () => void,
  any
] {
  const context = useContext(AudioContext);
  const {
    activeAudio,
    activeThreadKey,
    clearActiveAudio,
    clearNextPlayableUrl,
    getMessageId,
    getNextPlayableUrl,
  } = context;
  const reStore = useReStore();
  const thread = ReQLSuspense.useFirst(
    () =>
      ReQL.fromTableDescending(reStore.tables.threads).getKeyRange(
        activeThreadKey
      ),
    [reStore, activeThreadKey],
    `${f.id}:202`
  );

  const audioSrc = activeAudio?.src ?? null;
  const nextPlayableUrl = audioSrc ? getNextPlayableUrl(audioSrc) : null;
  const message = ReQLSuspense.useFirst(
    () => {
      const id = nextPlayableUrl ? getMessageId(nextPlayableUrl) : null;
      return id
        ? ReQL.fromTableAscending(reStore.tables.messages.index("messageId"), [
            "isUnsent",
          ])
            .getKeyRange(id)
            .filter((msg) => !msg.isUnsent)
        : ReQL.empty();
    },
    [reStore, getMessageId, nextPlayableUrl],
    `${f.id}:211`
  );

  if (audioSrc && nextPlayableUrl && !message) {
    clearNextPlayableUrl(audioSrc);
  }

  return [activeAudio, clearActiveAudio, thread];
}

export const MWPAudioPlaybackContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const audioElementsRef = useRef<Map<string, HTMLAudioElement>>(new Map());
  const nextPlayableUrlsRef = useRef<Map<string, string>>(new Map());
  const eventListenersRef = useRef<
    Array<[HTMLAudioElement, string, EventListener]>
  >([]);
  const messageIdsRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    return () => {
      const eventListeners = eventListenersRef.current;
      while (eventListeners.length > 0) {
        const [audio, event, listener] = eventListeners.pop()!;
        audio.removeEventListener(event, listener);
        audio.pause();
      }
    };
  }, []);

  const [playbackRate, setPlaybackRate] = useState(playbackRates.NORMAL);
  const playbackRateLabel = useMemo(
    () => getPlaybackRateLabel(playbackRate),
    [playbackRate]
  );

  const [activeThreadKey, setActiveThreadKey] = useState<I64>(I64.zero);
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);
  const [useOutOfChatPlayback, setUseOutOfChatPlayback] =
    useState<boolean>(false);
  const isPlaying = (activeAudio?.paused ?? true) === false;
  const currentActiveAudio = useMemo(
    () => (useOutOfChatPlayback && isPlaying ? activeAudio : null),
    [activeAudio, isPlaying, useOutOfChatPlayback]
  );

  const addMessageId = useCallback((url: string, id: string) => {
    messageIdsRef.current.set(url, id);
  }, []);

  const getMessageId = useCallback((url: string) => {
    return messageIdsRef.current.get(url);
  }, []);

  const clearActiveAudio = useCallback(() => {
    setActiveAudio((audio) => {
      audio?.pause();
      return null;
    });
  }, []);

  const clearNextPlayableUrl = useCallback((url: string) => {
    nextPlayableUrlsRef.current.delete(url);
  }, []);

  const getNextPlayableUrl = useCallback((url: string) => {
    return nextPlayableUrlsRef.current.get(url);
  }, []);

  const getNewOrExistingAudio = useCallback(
    (url: string, threadKey: I64): HTMLAudioElement => {
      const existingAudio =
        audioElementsRef.current.get(url) ?? createAudioElement(url);
      existingAudio.playbackRate = playbackRate;

      const addListener = (event: string, listener: EventListener) => {
        existingAudio.addEventListener(event, listener);
        eventListenersRef.current.push([existingAudio, event, listener]);
      };

      const onEnded = () => {
        const nextUrl = nextPlayableUrlsRef.current.get(url);
        if (nextUrl) {
          const nextAudio = audioElementsRef.current.get(nextUrl);
          if (nextAudio && nextAudio.paused) {
            getPlaceholderAudio()
              .play()
              .then(() => {
                setActiveAudio(nextAudio);
                return nextAudio.play().catch(() => setActiveAudio(null));
              });
          }
        } else {
          setActiveAudio(null);
        }
      };

      const onPlaying = () => {
        for (const audio of audioElementsRef.current.values()) {
          if (audio !== existingAudio) audio.pause();
        }
        setActiveAudio(existingAudio);
        setActiveThreadKey(threadKey);
      };

      addListener("ended", onEnded);
      addListener("playing", onPlaying);

      audioElementsRef.current.set(url, existingAudio);
      return existingAudio;
    },
    [playbackRate]
  );

  const addNextPlayableUrl = useCallback((url: string, nextUrl: string) => {
    nextPlayableUrlsRef.current.set(url, nextUrl);
  }, []);

  const onChangePlaybackRate = useCallback(() => {
    setPlaybackRate((rate) => {
      const nextRate = getNextPlaybackRate(rate);
      for (const audio of audioElementsRef.current.values()) {
        audio.playbackRate = nextRate;
      }
      return nextRate;
    });
  }, []);

  const contextValue = useMemo<AudioContextType>(
    () => ({
      activeAudio: currentActiveAudio,
      activeThreadKey,
      addMessageId,
      addNextPlayableUrl,
      clearActiveAudio,
      clearNextPlayableUrl,
      getMessageId,
      getNewOrExistingAudio,
      getNextPlayableUrl,
      onChangePlaybackRate,
      playbackRateLabel,
      setUseOutOfChatPlayback,
    }),
    [
      currentActiveAudio,
      activeThreadKey,
      addMessageId,
      addNextPlayableUrl,
      clearActiveAudio,
      clearNextPlayableUrl,
      getMessageId,
      getNewOrExistingAudio,
      getNextPlayableUrl,
      onChangePlaybackRate,
      playbackRateLabel,
      setUseOutOfChatPlayback,
    ]
  );

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};
