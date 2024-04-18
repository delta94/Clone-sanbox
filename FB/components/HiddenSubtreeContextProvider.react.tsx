__d("HiddenSubtreeContextProvider.react", ["HiddenSubtreeContext", "HiddenSubtreePassiveContext", "react", "removeFromArray", "useUnsafeRef_DEPRECATED"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useEffect,
        n = b.useLayoutEffect,
        o = b.useMemo,
        p = b.useRef;

    function q(a, b) {
        return a.backgrounded === b.backgrounded && a.hidden === b.hidden
    }

    function r(a, b) {
        var c = a.backgrounded || b.backgrounded;
        a = a.hidden || b.hidden;
        return {
            backgrounded: c,
            hidden: a,
            hiddenOrBackgrounded: c || a,
            hiddenOrBackgrounded_FIXME: c || a
        }
    }

    function a(a) {
        var b = a.children,
            d = a.ignoreParent,
            e = a.isBackgrounded,
            f = e === void 0 ? !1 : e,
            g = a.isHidden;
        e = l(c("HiddenSubtreeContext"));
        var i = l(c("HiddenSubtreePassiveContext")),
            s = o(function () {
                return {
                    backgrounded: f,
                    hidden: g,
                    hiddenOrBackgrounded: f || g,
                    hiddenOrBackgrounded_FIXME: f || g
                }
            }, [f, g]),
            t = (h || (h = c("useUnsafeRef_DEPRECATED")))(s),
            u = p(null),
            v = p([]),
            w = k(function () {
                var a = d === !0 ? t.current : r(t.current, i.getCurrentState());
                if (u.current == null || !q(a, u.current)) {
                    u.current = a;
                    var b = Array.from(v.current);
                    b.forEach(function (b) {
                        b(a)
                    })
                }
            }, [d, i]);
        n(function () {
            t.current = s, w()
        }, [s, w]);
        m(function () {
            if (d !== !0) {
                var a = i.subscribeToChanges(w);
                return function () {
                    return a.remove()
                }
            }
        }, [d, w, i]);
        a = o(function () {
            return {
                getCurrentState: function () {
                    return d === !0 ? t.current : r(t.current, i.getCurrentState())
                },
                subscribeToChanges: function (a) {
                    var b = v.current;
                    b.push(a);
                    return {
                        remove: function () {
                            c("removeFromArray")(b, a)
                        }
                    }
                }
            }
        }, [i, d]);
        var x = d === !0 ? s : r(s, e);
        e = o(function () {
            return {
                backgrounded: x.backgrounded,
                hidden: x.hidden,
                hiddenOrBackgrounded: x.backgrounded || x.hidden,
                hiddenOrBackgrounded_FIXME: x.backgrounded || x.hidden
            }
        }, [x.backgrounded, x.hidden]);
        return j.jsx(c("HiddenSubtreeContext").Provider, {
            value: e,
            children: j.jsx(c("HiddenSubtreePassiveContext").Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);



import * as React from 'react';
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { removeFromArray } from './removeFromArray';
import { useUnsafeRef_DEPRECATED } from './useUnsafeRef_DEPRECATED';

interface HiddenSubtreeState {
 backgrounded: boolean;
 hidden: boolean;
 hiddenOrBackgrounded: boolean;
 hiddenOrBackgrounded_FIXME: boolean;
}

interface HiddenSubtreeContext extends HiddenSubtreeState {
 getCurrentState: () => HiddenSubtreeState;
 subscribeToChanges: (callback: (state: HiddenSubtreeState) => void) => { remove: () => void };
}

const HiddenSubtreeContext = React.createContext<HiddenSubtreeContext>({
 backgrounded: false,
 hidden: false,
 hiddenOrBackgrounded: false,
 hiddenOrBackgrounded_FIXME: false,
 getCurrentState: () => ({
   backgrounded: false,
   hidden: false,
   hiddenOrBackgrounded: false,
   hiddenOrBackgrounded_FIXME: false,
 }),
 subscribeToChanges: () => ({ remove: () => {} }),
});

const HiddenSubtreePassiveContext = React.createContext<HiddenSubtreeContext>({
 backgrounded: false,
 hidden: false,
 hiddenOrBackgrounded: false,
 hiddenOrBackgrounded_FIXME: false,
 getCurrentState: () => ({
   backgrounded: false,
   hidden: false,
   hiddenOrBackgrounded: false,
   hiddenOrBackgrounded_FIXME: false,
 }),
 subscribeToChanges: () => ({ remove: () => {} }),
});

function areEqual(a: HiddenSubtreeState, b: HiddenSubtreeState): boolean {
 return a.backgrounded === b.backgrounded && a.hidden === b.hidden;
}

function getHiddenSubtreeState(
 a: HiddenSubtreeState,
 b: HiddenSubtreeState
): HiddenSubtreeState {
 const backgrounded = a.backgrounded || b.backgrounded;
 const hidden = a.hidden || b.hidden;
 return {
   backgrounded,
   hidden,
   hiddenOrBackgrounded: backgrounded || hidden,
   hiddenOrBackgrounded_FIXME: backgrounded || hidden,
 };
}

const HiddenSubtreeContextProvider: React.FC<{
 children: React.ReactNode;
 ignoreParent?: boolean;
 isBackgrounded?: boolean;
 isHidden?: boolean;
}> = ({ children, ignoreParent = false, isBackgrounded = false, isHidden = false }) => {
 const parentContext = useContext(HiddenSubtreeContext);
 const passiveContext = useContext(HiddenSubtreePassiveContext);

 const state = useMemo(
   () => ({
     backgrounded: isBackgrounded,
     hidden: isHidden,
     hiddenOrBackgrounded: isBackgrounded || isHidden,
     hiddenOrBackgrounded_FIXME: isBackgrounded || isHidden,
   }),
   [isBackgrounded, isHidden]
 );

 const stateRef = useUnsafeRef_DEPRECATED(state);
 const subscribersRef = useRef<((state: HiddenSubtreeState) => void)[]>([]);

 const updateState = useCallback(() => {
   const currentState =
     ignoreParent === true
       ? stateRef.current
       : getHiddenSubtreeState(stateRef.current, passiveContext.getCurrentState());

   if (
     subscribersRef.current === null ||
     !areEqual(currentState, subscribersRef.current)
   ) {
     subscribersRef.current = currentState;
     subscribersRef.current.forEach((callback) => callback(currentState));
   }
 }, [ignoreParent, passiveContext]);

 useLayoutEffect(() => {
   stateRef.current = state;
   updateState();
 }, [state, updateState]);

 useEffect(() => {
   if (ignoreParent !== true) {
     const unsubscribe = passiveContext.subscribeToChanges(updateState);
     return unsubscribe;
   }
 }, [ignoreParent, updateState, passiveContext]);

 const contextValue = useMemo(
   () => ({
     getCurrentState: () =>
       ignoreParent === true
         ? stateRef.current
         : getHiddenSubtreeState(stateRef.current, parentContext.getCurrentState()),
     subscribeToChanges: (callback) => {
       const subscribers = subscribersRef.current;
       subscribers.push(callback);
       return {
         remove: () => removeFromArray(subscribers, callback),
       };
     },
   }),
   [ignoreParent, parentContext]
 );

 const exposedState = ignoreParent === true ? state : getHiddenSubtreeState(state, parentContext.getCurrentState());

 return (
   <HiddenSubtreeContext.Provider value={exposedState}>
     <HiddenSubtreePassiveContext.Provider value={contextValue}>
       {children}
     </HiddenSubtreePassiveContext.Provider>
   </HiddenSubtreeContext.Provider>
 );
};

export default HiddenSubtreeContextProvider;