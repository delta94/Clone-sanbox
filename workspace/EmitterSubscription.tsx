__d("EmitterSubscription", ["EventSubscription"], (function (a, b, c, d, e, f, g) {
  "use strict";
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);

    function b(b, c, d) {
      b = a.call(this, b) || this;
      b.listener = c;
      b.context = d;
      return b
    }
    return b
  }(c("EventSubscription"));
  g["default"] = a
}), 98);

import EventSubscription from 'EventSubscription'; // Replace 'EventSubscription' with the correct import path

class EmitterSubscription extends EventSubscription {
  listener: Function;
  context: any;

  constructor(key: number, listener: Function, context: any) {
    super(key);
    this.listener = listener;
    this.context = context;
  }
}

export default EmitterSubscription;