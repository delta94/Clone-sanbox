__d(
  "MAWMICSafe",
  [
    "cr:7608", //MAWMIC
    "cr:7610", //null
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h = b("MAWMIC")) != null ? h : b("cr:7610");
    function a(a, b) {
      i == null ? void 0 : i.fail(a, b);
    }
    function c(a, b) {
      i == null ? void 0 : i.markEvent(a, b);
    }
    function d(a, b) {
      i == null ? void 0 : i.addBoolAnnotation(a, b);
    }
    function e(a, b) {
      i == null ? void 0 : i.addIntAnnotation(a, b);
    }
    function f(a, b) {
      i == null ? void 0 : i.addStringAnnotation(a, b);
    }
    function j() {
      return (i == null ? void 0 : i.duringMIC()) === !0;
    }
    g.fail = a;
    g.markEvent = c;
    g.addBoolAnnotation = d;
    g.addIntAnnotation = e;
    g.addStringAnnotation = f;
    g.duringMIC = j;
  },
  98
);

import MAWMIC from "cr:7608";

interface MAWMICInterface {
  fail: (a: any, b: any) => void;
  markEvent: (a: any, b: any) => void;
  addBoolAnnotation: (a: any, b: any) => void;
  addIntAnnotation: (a: any, b: any) => void;
  addStringAnnotation: (a: any, b: any) => void;
  duringMIC: () => boolean;
}

const MAWMICSafe = (MAWMIC as MAWMICInterface) ?? null;

export const fail = (a: any, b: any) => {
  MAWMICSafe?.fail(a, b);
};

export const markEvent = (a: any, b: any) => {
  MAWMICSafe?.markEvent(a, b);
};

export const addBoolAnnotation = (a: any, b: any) => {
  MAWMICSafe?.addBoolAnnotation(a, b);
};

export const addIntAnnotation = (a: any, b: any) => {
  MAWMICSafe?.addIntAnnotation(a, b);
};

export const addStringAnnotation = (a: any, b: any) => {
  MAWMICSafe?.addStringAnnotation(a, b);
};

export const duringMIC = () => {
  return MAWMICSafe?.duringMIC() === true;
};
