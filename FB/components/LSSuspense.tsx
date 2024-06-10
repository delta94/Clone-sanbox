__d(
  "LSSuspense",
  ["PromiseAnnotate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      return { current: { error: a, state: "Error" } };
    }
    function b(a) {
      return { current: { state: "Done", value: a } };
    }
    function c(a) {
      var b = {
        current: {
          promise: a
            .then(function (a) {
              b.current = { state: "Done", value: a };
              return a;
            })
            ["catch"](function (a) {
              b.current = { error: a, state: "Error" };
            }),
          state: "Loading",
        },
      };
      return b;
    }
    function e() {
      return new WeakMap();
    }
    function i(a) {
      if (a.state === "Loading") throw a.promise;
      else if (a.state === "Error") throw a.error;
      else return a.value;
    }
    function f(a) {
      return i(a.current);
    }
    function j(a, b, c) {
      var e = a.get(b);
      if (e != null) return i(e);
      e = c();
      c = {
        promise: e
          .then(function (c) {
            a.set(b, { state: "Done", value: c });
            return c;
          })
          ["catch"](function (c) {
            a.set(b, { error: c, state: "Error" });
          }),
        state: "Loading",
      };
      var f = c.promise;
      if (f) {
        void (h || (h = d("PromiseAnnotate"))).setDisplayName(
          f,
          (f = (h || (h = d("PromiseAnnotate"))).getDisplayName(e)) != null
            ? f
            : "LSCollection"
        );
      }
      a.set(b, c);
      return i(c);
    }
    j = {
      getFromCollection: j,
      getOrSuspend: f,
      makeCollection: e,
      makeWithError: a,
      makeWithPromise: c,
      makeWithValue: b,
    };
    g["default"] = j;
  },
  98
);

import { PromiseAnnotate } from "PromiseAnnotate";

type LoadingState<T> = { state: "Loading"; promise: Promise<T> };
type ErrorState = { state: "Error"; error: any };
type DoneState<T> = { state: "Done"; value: T };

type SuspenseState<T> = LoadingState<T> | ErrorState | DoneState<T>;

function makeWithError<T>(error: any): { current: ErrorState } {
  return { current: { error, state: "Error" } };
}

function makeWithValue<T>(value: T): { current: DoneState<T> } {
  return { current: { state: "Done", value } };
}

function makeWithPromise<T>(promise: Promise<T>): { current: LoadingState<T> } {
  const state: { current: SuspenseState<T> } = {
    current: {
      promise: promise
        .then((value): T => {
          state.current = { state: "Done", value };
          return value;
        })
        .catch((error): never => {
          state.current = { error, state: "Error" };
          throw error;
        }),
      state: "Loading",
    },
  };
  return state as { current: LoadingState<T> };
}

function makeCollection<K extends object, V>(): WeakMap<K, SuspenseState<V>> {
  return new WeakMap<K, SuspenseState<V>>();
}

function getOrSuspend<T>(state: SuspenseState<T>): T {
  if (state.state === "Loading") throw state.promise;
  if (state.state === "Error") throw state.error;
  return state.value;
}
function getFromCollection<K extends object, V>(
  collection: WeakMap<K, SuspenseState<V>>,
  key: K,
  fetcher: () => Promise<V>
): V {
  let state = collection.get(key);

  if (state != null) {
    return getOrSuspend(state);
  }

  const promise = fetcher();
  state = {
    promise: promise
      .then((value): V => {
        collection.set(key, { state: "Done", value });
        return value;
      })
      .catch((error): never => {
        collection.set(key, { error, state: "Error" });
        throw error;
      }),
    state: "Loading",
  };

  const displayName = PromiseAnnotate.getDisplayName(promise) || "LSCollection";
  PromiseAnnotate.setDisplayName(promise, displayName);

  collection.set(key, state);
  return getOrSuspend(state);
}

export default {
  getFromCollection,
  getOrSuspend,
  makeCollection,
  makeWithError,
  makeWithPromise,
  makeWithValue,
};
