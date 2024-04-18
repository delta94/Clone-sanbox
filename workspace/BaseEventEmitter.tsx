__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
  var g;
  a = function () {
    "use strict";

    function a() {
      this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
    }
    var c = a.prototype;
    c.addListener = function (a, c, d) {
      return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
    };
    c.removeListener = function (a) {
      this.$2.removeSubscription(a)
    };
    c.once = function (a, b, c) {
      var d = this;
      return this.addListener(a, function () {
        d.removeCurrentListener(), b.apply(c, arguments)
      })
    };
    c.removeAllListeners = function (a) {
      this.$2.removeAllSubscriptions(a)
    };
    c.removeCurrentListener = function () {
      if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
      this.$2.removeSubscription(this.$1)
    };
    c.listeners = function (a) {
      a = this.$2.getSubscriptionsForType(a);
      return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function (a) {
        return a.listener
      }) : []
    };
    c.emit = function (a) {
      var b = this.$2.getSubscriptionsForType(a);
      if (b) {
        var c = Object.keys(b),
          d;
        for (var e = 0; e < c.length; e++) {
          var f = c[e],
            g = b[f];
          if (g) {
            this.$1 = g;
            if (d == null) {
              d = [g, a];
              for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
            } else d[0] = g;
            this.__emitToSubscription.apply(this, d)
          }
        }
        this.$1 = null
      }
    };
    c.__emitToSubscription = function (a, c) {
      for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
      (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
        name: "EventEmitter " + c + " event"
      })
    };
    return a
  }();
  e.exports = a
}), null);


import { EventSubscriptionVendor } from 'event-subscription-vendor';
import { ErrorGuard } from 'error-guard';
import { EmitterSubscription } from 'emitter-subscription';

interface BaseEventEmitter {
  addListener(eventType: string, listener: Function, context: any): EmitterSubscription;
  removeListener(subscription: EmitterSubscription): void;
  once(eventType: string, listener: Function, context: any): EmitterSubscription;
  removeAllListeners(eventType: string): void;
  removeCurrentListener(): void;
  listeners(eventType: string): Function[];
  emit(eventType: string, ...args: any[]): void;
}

class BaseEventEmitter implements BaseEventEmitter {

  private subscriptionVendor: EventSubscriptionVendor = new EventSubscriptionVendor();
  private currentSubscription: EmitterSubscription | null = null;

  addListener(eventType: string, listener: Function, context?: any) {
    return this.subscriptionVendor.addSubscription(
      eventType,
      new EmitterSubscription(this.subscriptionVendor, listener, context)
    );
  }

  removeListener(subscription: EmitterSubscription) {
    this.subscriptionVendor.removeSubscription(subscription);
  }

  once(eventType: string, listener: Function, context: any) {
    const subscription = this.addListener(eventType, () => {
      this.removeCurrentListener();
      listener.apply(context, arguments);
    });
    return subscription;
  }

  removeAllListeners(eventType: string) {
    this.subscriptionVendor.removeAllSubscriptions(eventType);
  }

  removeCurrentListener() {
    if (!this.currentSubscription) {
      throw new Error('Not in an emitting cycle; there is no current subscription');
    }
    this.subscriptionVendor.removeSubscription(this.currentSubscription);
  }

  listeners(eventType: string) {
    const subscriptions = this.subscriptionVendor.getSubscriptionsForType(eventType);
    return subscriptions
      ? subscriptions.filter(fn => fn).map(sub => sub.listener)
      : [];
  }

  emit(eventType: string, ...args: any[]) {
    const subscriptions = this.subscriptionVendor.getSubscriptionsForType(eventType);
    if (subscriptions) {
      const subscriptionKeys = Object.keys(subscriptions);

      let emitArgs;

      for (let i = 0; i < subscriptionKeys.length; i++) {
        const key = subscriptionKeys[i];
        const subscription = subscriptions[key];

        if (subscription) {
          this.currentSubscription = subscription;

          if (!emitArgs) {
            emitArgs = [subscription, eventType];
            for (let j = 0, len = args.length; j < len; j++) {
              emitArgs[j + 2] = args[j];  
            }
          } else {
            emitArgs[0] = subscription;
          }

          this.__emitToSubscription(...emitArgs); 
        }
      }
      this.currentSubscription = null;
    }
  }

  private __emitToSubscription(
    subscription: EmitterSubscription,
    eventType: string,
    ...args: any[]
  ) {
  
    const emitArgs = args.slice(2);
  
    ErrorGuard.applyWithGuard(
      subscription.listener,
      subscription.context, 
      emitArgs,
      {name: `EventEmitter ${eventType} event`}  
    );
  
  }

}

export default BaseEventEmitter;