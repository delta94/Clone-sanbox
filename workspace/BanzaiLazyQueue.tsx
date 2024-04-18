__d("BanzaiLazyQueue", ["SimpleHook"], (function (a, b, c, d, e, f, g) {
  var h = [],
    i = new(d("SimpleHook").SimpleHook)();
  a = {
    onQueue: i,
    queuePost: function (a, b, c) {
      h.push([a, b, c]), i.call(a, b, c)
    },
    flushQueue: function () {
      var a = h;
      h = [];
      return a
    }
  };
  f.exports = a
}), 34);

import { SimpleHook } from "./SimpleHook";

const queue: Array<[any, any, any]> = [];
const onQueue = new SimpleHook();

const BanzaiLazyQueue = {
  onQueue,
  queuePost: (a: any, b: any, c: any): void => {
    queue.push([a, b, c]);
    onQueue.callCallbacks(a, b, c);
  },
  flushQueue: (): Array<[any, any, any]> => {
    const flushedQueue = [...queue];
    queue.length = 0;
    return flushedQueue;
  },
};

export { BanzaiLazyQueue };
