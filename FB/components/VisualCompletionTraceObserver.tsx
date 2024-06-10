__d(
  "VisualCompletionTraceObserver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [],
      h = [];
    a = {
      subscribe: function (a) {
        g.push(a);
      },
      subscribeStart: function (a) {
        h.push(a);
      },
      unsubscribe: function (a) {
        g = g.filter(function (b) {
          return b !== a;
        });
      },
      unsubscribeStart: function (a) {
        h = h.filter(function (b) {
          return b !== a;
        });
      },
      emit: function (a) {
        g.forEach(function (b) {
          return b(a);
        });
      },
      emitStart: function (a) {
        h.forEach(function (b) {
          return b(a);
        });
      },
    };
    f["default"] = a;
  },
  66
);

type Callback = (arg: any) => void;

let subscribers: Callback[] = [];
let startSubscribers: Callback[] = [];

const VisualCompletionTraceObserver = {
  subscribe(callback: Callback): void {
    subscribers.push(callback);
  },
  subscribeStart(callback: Callback): void {
    startSubscribers.push(callback);
  },
  unsubscribe(callback: Callback): void {
    subscribers = subscribers.filter((sub) => sub !== callback);
  },
  unsubscribeStart(callback: Callback): void {
    startSubscribers = startSubscribers.filter((sub) => sub !== callback);
  },
  emit(arg: any): void {
    subscribers.forEach((callback) => callback(arg));
  },
  emitStart(arg: any): void {
    startSubscribers.forEach((callback) => callback(arg));
  },
};

export default VisualCompletionTraceObserver;
