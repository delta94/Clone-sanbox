__d("MWThreadListNewMessageState.react", ["react", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || (h = d("react"));
    d = h;
    var i = d.createContext,
        j = d.createElement,
        k = d.useContext,
        l = d.useReducer;
    d = {
        Reset: 0,
        ResetIfEmpty: 1
    };
    var m = {
            SetIsActive: 2
        },
        n = {
            SetEntries: 3
        },
        o = babelHelpers["extends"]({}, d, m, n),
        p = {
            entries: [],
            isActive: !1
        },
        q = i(p),
        r = i();

    function s(a, b) {
        switch (b.type) {
            case o.Reset:
                return p;
            case o.ResetIfEmpty:
                return a.entries.length === 0 ? p : a;
            case o.SetIsActive:
                return babelHelpers["extends"]({}, a, {
                    isActive: b.isActive
                });
            case o.SetEntries:
                return babelHelpers["extends"]({}, a, {
                    entries: b.entries
                });
            default:
                return a
        }
    }

    function a(a) {
        var b = a.children;
        a = a.defaultState;
        a = a === void 0 ? p : a;
        a = l(s, a);
        var c = a[0];
        a = a[1];
        return j(q.Provider, {
            children: j(r.Provider, {
                children: b,
                value: a
            }),
            value: c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b() {
        var a = k(r);
        if (a == null) throw c("unrecoverableViolation")("Tried to get the dispatch function for MWThreadListNewMessageState but none was found. Missing provider (MWThreadListNewMessageState)", "messenger_web_product");
        return a
    }

    function e() {
        var a = k(r);
        if (a == null) return;
        return a
    }
    g.MWThreadListNewMessageStateActionType = o;
    g.context = q;
    g.MWThreadListNewMessageStateProvider = a;
    g.useDispatch = b;
    g.useDispatchIfStateExists = e
}), 98);


import React, { createContext, createElement, FC, useContext, useReducer } from 'react';

// Define action types
enum MWThreadListNewMessageStateActionType {
  Reset = 0,
  ResetIfEmpty = 1,
  SetIsActive = 2,
  SetEntries = 3,
}

// Define initial state shape
interface State {
  entries: any[];
  isActive: boolean;
}

// Define action creators
const actions = {
  Reset: MWThreadListNewMessageStateActionType.Reset,
  ResetIfEmpty: MWThreadListNewMessageStateActionType.ResetIfEmpty,
  SetIsActive: MWThreadListNewMessageStateActionType.SetIsActive,
  SetEntries: MWThreadListNewMessageStateActionType.SetEntries,
};

// Define initial state
const initialState: State = {
  entries: [],
  isActive: false,
};

// Create context for state and dispatch
export const StateContext = createContext<State>(initialState);
const DispatchContext = createContext<React.Dispatch<any> | null>(null);

// Define reducer function
const reducer = (state: State, action: any) => {
  switch (action.type) {
    case MWThreadListNewMessageStateActionType.Reset:
      return initialState;
    case MWThreadListNewMessageStateActionType.ResetIfEmpty:
      return state.entries.length === 0 ? initialState : state;
    case MWThreadListNewMessageStateActionType.SetIsActive:
      return { ...state, isActive: action.isActive };
    case MWThreadListNewMessageStateActionType.SetEntries:
      return { ...state, entries: action.entries };
    default:
      return state;
  }
};

// Create provider component
export const MWThreadListNewMessageStateProvider: FC = ({ children, defaultState }) => {
  const newInitialState = initialState ? initialState : defaultState
  const [state, dispatch] = useReducer(reducer, newInitialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// Define custom hooks for accessing state and dispatch
export const useState = () => useContext(StateContext);
export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (dispatch === null) {
    throw new Error('Tried to get the dispatch function for MWThreadListNewMessageState but none was found.');
  }
  return dispatch;
};

export const useDispatchIfStateExists = () => {
    const dispatch = useContext(DispatchContext);
    if (dispatch === null) return;
    return dispatch;
  };