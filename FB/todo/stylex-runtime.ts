__d("stylex-runtime", ["styleq", "stylex-inject"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        b = d("styleq").styleq(a);
        a = b[0];
        b = b[1];
        return {
            className: a,
            style: b
        }
    }

    function b(a) {
        throw new Error("stylex.create should never be called. It should be compiled away.")
    }

    function e(a) {
        throw new Error("stylex.createVars should never be called. It should be compiled away.")
    }

    function f(a) {
        throw new Error("stylex.overrideVars should never be called. It should be compiled away.")
    }

    function h(a) {
        throw new Error("stylex.extends should never be called. It should be compiled away.")
    }
    b = b;
    e = e;
    f = f;
    h = h;
    var i = function (a) {
            throw new Error("stylex.keyframes should never be called")
        },
        j = function () {
            throw new Error("stylex.firstThatWorks should never be called.")
        },
        k = function (a) {
            throw new Error("stylex.UNSUPPORTED_PROPERTY should never be called. It should be compiled away.")
        };

    function l() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        var e = d("styleq").styleq(b),
            f = e[0];
        return f
    }
    l.spread = a;
    l.create = b;
    l.unstable_createVars = e;
    l.unstable_overrideVars = f;
    l.include = h;
    l.keyframes = i;
    l.firstThatWorks = j;
    l.inject = c("stylex-inject");
    l.UNSUPPORTED_PROPERTY = k;
    l = l;
    g.spread = a;
    g.create = b;
    g.unstable_createVars = e;
    g.unstable_overrideVars = f;
    g.include = h;
    g.keyframes = i;
    g.firstThatWorks = j;
    g.inject = c("stylex-inject");
    g.UNSUPPORTED_PROPERTY = k;
    g.stylex = l
}), 98);


import styleq from 'styleq';
import stylexInject from 'stylex-inject';

type StyleResult = { className: string; style: object };

function stylex(a: string[], b?: any): StyleResult {
  const [className, style] = styleq(a);
  return { className, style };
}

function create(a: any): never {
  throw new Error("stylex.create should never be called. It should be compiled away.");
}

function createVars(a: any): never {
  throw new Error("stylex.createVars should never be called. It should be compiled away.");
}

function overrideVars(a: any): never {
  throw new Error("stylex.overrideVars should never be called. It should be compiled away.");
}

function extendsStyle(a: any): never {
  throw new Error("stylex.extends should never be called. It should be compiled away.");
}

const keyframes = (a: any): never => {
  throw new Error("stylex.keyframes should never be called.");
};

const firstThatWorks = (): never => {
  throw new Error("stylex.firstThatWorks should never be called.");
};

const UNSUPPORTED_PROPERTY = (a: any): never => {
  throw new Error("stylex.UNSUPPORTED_PROPERTY should never be called. It should be compiled away.");
};

function stylexSpread(...args: any[]): string {
  const [className] = styleq(args);
  return className;
}

export {
  stylex,
  create,
  createVars,
  overrideVars,
  extendsStyle,
  keyframes,
  firstThatWorks,
  UNSUPPORTED_PROPERTY,
  stylexSpread as spread,
  stylexInject as inject,
};

export type { StyleResult };
