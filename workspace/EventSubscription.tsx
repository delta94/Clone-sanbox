__d("EventSubscription", [], (function (a, b, c, d, e, f) {
  "use strict";
  a = function (a) {
    var b = this;
    this.remove = function () {
      b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
    };
    this.subscriber = a
  };
  f["default"] = a
}), 66);

interface Subscriber {
  removeSubscription: (subscription: EventSubscription) => void;
}

class EventSubscription {
  subscriber: Subscriber | null;

  constructor(subscriber: Subscriber) {
    this.subscriber = subscriber;
  }

  remove(): void {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  }
}

export default EventSubscription;
