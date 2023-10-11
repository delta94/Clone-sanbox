__d("UFI2RealtimeContainer.react", ["UFI2RealtimeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useContext
      , k = b.useEffect;
    function a(a) {
        var b = a.children;
        a = a.subscribe;
        var d = j(c("UFI2RealtimeContext"));
        return i.jsx(l, {
            factory: d,
            subscribe: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var l = function(a) {
        var b = a.factory
          , c = a.subscribe;
        a = a.children;
        k(function() {
            var a = b(new m(c));
            return function() {
                a.dispose()
            }
        }, [b, c]);
        return (a = a) != null ? a : null
    }
      , m = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.subscribe = function() {
            this.$2 || (this.$2 = this.$1())
        }
        ;
        b.unsubscribe = function() {
            this.$2 && (this.$2.dispose(),
            this.$2 = null)
        }
        ;
        return a
    }();
    g["default"] = a
}
), 98);



import React, { useContext, useEffect, ReactNode } from 'react';
import UFI2RealtimeContext from "UFI2RealtimeContext"

type RealtimeContextType = any;  // Define the context type here. I've set it as `any` for now as the context type is not defined in the provided code.

interface RealtimeContainerProps {
    children: ReactNode;
    subscribe: () => any;  // The exact type should be replaced based on what the `subscribe` function is supposed to return.
}

interface RealtimeComponentProps {
    factory: (subscription: RealtimeSubscription) => any;  // Replace the return type with the correct one.
    subscribe: () => any;
    children: ReactNode;
}

class RealtimeSubscription {
    private $1: () => any;
    private $2?: any;  // Define the exact type if known.

    constructor(subscriber: () => any) {
        this.$1 = subscriber;
    }

    subscribe() {
        if (!this.$2) {
            this.$2 = this.$1();
        }
    }

    unsubscribe() {
        if (this.$2) {
            this.$2.dispose();
            this.$2 = null;
        }
    }
}

const RealtimeComponent: React.FC<RealtimeComponentProps> = ({ factory, subscribe, children }) => {
    useEffect(() => {
        const subscription = factory(new RealtimeSubscription(subscribe));
        return () => {
            subscription.dispose();
        };
    }, [factory, subscribe]);

    return children ?? null;
};

const UFI2RealtimeContainer: React.FC<RealtimeContainerProps> = ({ children, subscribe }) => {
    const context = useContext<RealtimeContextType>(UFI2RealtimeContext);

    return <RealtimeComponent factory={context} subscribe={subscribe}>
        {children}
    </RealtimeComponent>;
};

export default UFI2RealtimeContainer;
