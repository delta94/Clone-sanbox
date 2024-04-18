__d("MWPActor.react", ["Actor", "CurrentMessengerUser", "I64", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = h || (h = d("react"));
    e = h;
    var k = e.createContext,
        l = e.useContext,
        m = e.useMemo,
        n = k();

    function a() {
        var a = l(n),
            b = d("Actor").useActor(),
            c = b[0],
            e = m(function () {
                return (i || (i = d("I64"))).of_string(c)
            }, [c]),
            f = d("CurrentMessengerUser").getPageMessagingMailboxId(),
            g = m(function () {
                return f !== "0" ? (i || (i = d("I64"))).of_string(f) : null
            }, [f]);
        b = m(function () {
            return a != null ? a : g != null ? g : e
        }, [e, a, g]);
        return b
    }

    function b() {
        return o() != null
    }

    function o() {
        var a = d("CurrentMessengerUser").getPageMessagingMailboxId();
        return a === "0" ? null : a
    }

    function c(a) {
        var b = a.actorId;
        a = a.children;
        return b != null ? j.jsx(n.Provider, {
            value: b,
            children: a
        }, (i || (i = d("I64"))).to_string(b)) : a
    }
    c.displayName = c.name + " [from " + f.id + "]";
    g.useActor = a;
    g.isAPPlus = b;
    g.getAPPlusMailboxId = o;
    g.MWPActorProvider = c
}), 98);


import React, { createContext, useContext, useMemo } from 'react';
import { useActor as useActorHook } from 'Actor';
import { getPageMessagingMailboxId } from 'CurrentMessengerUser';
import { of_string, to_string } from 'I64';

type MWPActorContextValue = string | null;

const MWPActorContext = createContext<MWPActorContextValue>(null);

function useActor(): MWPActorContextValue {
  const contextValue = useContext(MWPActorContext);
  const [actor] = useActorHook();
  const actorId = useMemo(() => of_string(actor), [actor]);
  const pageMailboxId = useMemo(() => {
    const id = getPageMessagingMailboxId();
    return id !== '0' ? of_string(id) : null;
  }, []);

  return useMemo(() => contextValue ?? pageMailboxId ?? actorId, [
    actorId,
    contextValue,
    pageMailboxId,
  ]);
}

function isAPPlus(): boolean {
  return getAPPlusMailboxId() !== null;
}

function getAPPlusMailboxId(): string | null {
  const id = getPageMessagingMailboxId();
  return id === '0' ? null : id;
}

interface MWPActorProviderProps {
  actorId?: string;
  children: React.ReactNode;
}

function MWPActorProvider({ actorId, children }: MWPActorProviderProps): JSX.Element {
  return actorId !== undefined ? (
    <MWPActorContext.Provider value={to_string(actorId)}>
      {children}
    </MWPActorContext.Provider>
  ) : (
    <>{children}</>
  );
}

MWPActorProvider.displayName = `${MWPActorProvider.name} [from 98]`;

export {
  useActor,
  isAPPlus,
  getAPPlusMailboxId,
  MWPActorProvider,
};
