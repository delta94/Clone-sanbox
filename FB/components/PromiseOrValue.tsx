__d("PromiseOrValue", ["isPromise", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a, b) {
        if ((h || (h = c("isPromise")))(a) && (h || (h = c("isPromise")))(b)) return a.then(function (a) {
            return b.then(function (b) {
                return [a, b]
            })
        });
        if ((h || (h = c("isPromise")))(a)) return a.then(function (a) {
            return [a, b]
        });
        return (h || (h = c("isPromise")))(b) ? b.then(function (b) {
            return [a, b]
        }) : [a, b]
    }

    function b(a) {
        var b = a.find(h || (h = c("isPromise")));
        return !b ? a : Promise.all(a)
    }

    function d(a, b) {
        return (h || (h = c("isPromise")))(a) ? a.then(b) : b(a)
    }

    function i(a, b) {
        b = b;
        while (!0) {
            var d = a(b);
            if ((h || (h = c("isPromise")))(d)) return d.then(function (b) {
                return b.action === "break" ? b.value : i(a, b.value)
            });
            if (d.action === "break") return d.value;
            b = d.value
        }
        throw c("unrecoverableViolation")("just for flow", "messenger_web_product")
    }
    g.all2 = a;
    g.all = b;
    g.map = d;
    g.loop = i
}), 98);

import { isPromise, unrecoverableViolation } from './your_module_path';

const all2 = (a, b) => {
  if (isPromise(a) && isPromise(b)) {
    return a.then((aResult) => {
      return b.then((bResult) => {
        return [aResult, bResult];
      });
    });
  }
  if (isPromise(a)) {
    return a.then((aResult) => {
      return [aResult, b];
    });
  }
  if (isPromise(b)) {
    return b.then((bResult) => {
      return [a, bResult];
    });
  }
  return [a, b];
};

const all = (a) => {
  const hasPromise = a.find(isPromise);
  return !hasPromise ? a : Promise.all(a);
};

const map = (a, b) => {
  return isPromise(a) ? a.then(b) : b(a);
};

const loop = (a, b) => {
  while (true) {
    const result = a(b);
    if (isPromise(result)) {
      return result.then((bResult) => {
        return bResult.action === "break" ? bResult.value : loop(a, bResult.value);
      });
    }
    if (result.action === "break") {
      return result.value;
    }
    b = result.value;
  }
  throw unrecoverableViolation("just for flow", "messenger_web_product");
};

export { all2, all, map, loop };
