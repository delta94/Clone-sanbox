__d("MWPMessageAuthor.react", ["I64", "Int64Hooks", "LSAuthorityLevel", "LSContactBlockedByViewerStatus", "LSContactGender", "LSContactIdType", "LSContactType", "LSContactViewerRelationship", "LSContactWorkForeignEntityType", "LSFactory", "LSIntEnum", "LSVerifyContactRowExistsStoredProcedure", "MWCMIsCMSubthread", "MWPContactContext.react", "ReQL", "ReQLSuspense", "promiseDone", "react", "useReStore"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = k || (k = d("react")),
        m = k.useMemo;

    function n(a) {
        var b = a.children,
            e = a.contactId,
            g = (h || (h = c("useReStore")))(),
            j = d("ReQLSuspense").useFirst(function () {
                return d("ReQL").fromTableAscending(g.table("contacts")).getKeyRange(e)
            }, [g, e], f.id + ":50");
        a = m(function () {
            var a = void 0;
            return {
                contact: j,
                nickname: a
            }
        }, [j]);
        d("Int64Hooks").useEffectInt64(function () {
            c("promiseDone")(g.runInTransaction(function (a) {
                return c("LSVerifyContactRowExistsStoredProcedure")(c("LSFactory")(a), {
                    authorityLevel: (i || (i = d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").CLIENT_PARTIAL),
                    blockedByViewerStatus: i.ofNumber(c("LSContactBlockedByViewerStatus").UNBLOCKED),
                    contactIdType: i.ofNumber(c("LSContactIdType").FBID),
                    contactType: i.ofNumber(c("LSContactType").USER),
                    contactViewerRelationship: i.ofNumber(c("LSContactViewerRelationship").UNKNOWN),
                    gender: i.ofNumber(c("LSContactGender").UNKNOWN),
                    id: e,
                    isBlocked: !1,
                    isMemorialized: !1,
                    isSelf: !1,
                    workForeignEntityType: i.ofNumber(c("LSContactWorkForeignEntityType").UNKNOWN)
                })
            }, "readwrite"))
        }, [g, e]);
        return l.jsx(d("MWPContactContext.react").MWPContactContextProvider, {
            contact: a.contact,
            nickname: a.nickname,
            children: b
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        var b = a.children,
            c = a.contact,
            e = a.nickname;
        a = m(function () {
            return {
                contact: c,
                nickname: e
            }
        }, [c, e]);
        return l.jsx(d("MWPContactContext.react").MWPContactContextProvider, {
            contact: a.contact,
            nickname: a.nickname,
            children: b
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function a(a) {
        var b, e = a.children,
            g = a.contactId,
            k = a.threadKey,
            m = (h || (h = c("useReStore")))();
        a = d("ReQLSuspense").useFirst(function () {
            return d("ReQL").fromTableAscending(m.table("contacts")).getKeyRange(g)
        }, [g, m], f.id + ":125");
        b = (b = d("ReQLSuspense").useFirst(function () {
            return d("ReQL").fromTableAscending(m.table("participants"), ["nickname"]).getKeyRange(k, g)
        }, [g, m, k], f.id + ":129")) == null ? void 0 : b.nickname;
        var p = d("ReQLSuspense").useFirst(function () {
            return d("ReQL").fromTableAscending(m.table("threads"), ["parentThreadKey", "secondaryParentThreadKey", "threadType"]).getKeyRange(k).map(function (a) {
                var b = a.parentThreadKey,
                    e = a.secondaryParentThreadKey;
                a = a.threadType;
                a = d("ReQLSuspense").first(d("ReQL").fromTableAscending(m.table("contextual_profile_v1"), ["profileName"]).getKeyRange(g, c("MWCMIsCMSubthread")(a) && e != null ? e : b), f.id + ":154");
                return a == null ? void 0 : a.profileName
            })
        }, [m, k, g], f.id + ":145");
        p = p != null ? p : b;
        if (a != null)
            if ((j || (j = d("I64"))).ge(a.authorityLevel, (i || (i = d("LSIntEnum"))).ofNumber(c("LSAuthorityLevel").AUTHORITATIVE_PENDING_REPLACEMENT))) return l.jsx(o, {
                contact: a,
                nickname: p,
                children: e
            });
            else return l.jsx(n, {
                contactId: g,
                children: e
            });
        else return l.jsx(n, {
            contactId: g,
            children: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = l.memo(a, function (a, b) {
        if (a != null && b != null && (j || (j = d("I64"))).equal(a.contactId, b.contactId) && (j || (j = d("I64"))).equal(a.threadKey, b.threadKey)) return a.children === b.children;
        else return !1
    });

    function b() {
        var a = d("MWPContactContext.react").useMWPContactStableContext();
        a = a.authorName;
        return [a]
    }

    function e() {
        var a = d("MWPContactContext.react").useMWPContactFullContext();
        a = a.contact;
        var b = a != null ? a.name : void 0;
        return [b, a]
    }
    g.MissingContactProvider = n;
    g.Provider = o;
    g.MWPMessageAuthor = a;
    g.useAuthorName = b;
    g.useAuthorFullName = e
}), 98);



import { useReStore } from 'useReStore';
import { ReQLSuspense, ReQL } from 'ReQL';
import { promiseDone } from 'promiseDone';
import { LSVerifyContactRowExistsStoredProcedure, LSFactory } from 'LSVerifyContactRowExistsStoredProcedure';
import { LSIntEnum } from 'LSIntEnum';
import { LSAuthorityLevel } from 'LSAuthorityLevel';
import { LSContactBlockedByViewerStatus } from 'LSContactBlockedByViewerStatus';
import { LSContactIdType } from 'LSContactIdType';
import { LSContactType } from 'LSContactType';
import { LSContactViewerRelationship } from 'LSContactViewerRelationship';
import { LSContactGender } from 'LSContactGender';
import { LSContactWorkForeignEntityType } from 'LSContactWorkForeignEntityType';
import { MWPContactContext } from 'MWPContactContext.react';
import { MWCMIsCMSubthread } from 'MWCMIsCMSubthread';
import { I64 } from 'I64';
import { Int64Hooks } from 'Int64Hooks';
import React, { useMemo, memo } from 'react';

interface MissingContactProviderProps {
    children?: React.ReactNode;
    contactId: I64;
}

function MissingContactProvider({ children, contactId }: MissingContactProviderProps) {
  const reStore = useReStore();
  const contact = ReQLSuspense.useFirst(() => 
    ReQL.fromTableAscending(reStore.table('contacts')).getKeyRange(contactId), 
    [reStore, contactId], 
    'MWPMessageAuthor.react:50'
  );

  const contextValue = useMemo(() => ({
    contact,
    nickname: undefined
  }), [contact]);

  Int64Hooks.useEffectInt64(() => {
    promiseDone(reStore.runInTransaction((reStore) => 
      LSVerifyContactRowExistsStoredProcedure(LSFactory(reStore), {
        authorityLevel: LSIntEnum.ofNumber(LSAuthorityLevel.CLIENT_PARTIAL),
        blockedByViewerStatus: LSIntEnum.ofNumber(LSContactBlockedByViewerStatus.UNBLOCKED),
        contactIdType: LSIntEnum.ofNumber(LSContactIdType.FBID),
        contactType: LSIntEnum.ofNumber(LSContactType.USER),
        contactViewerRelationship: LSIntEnum.ofNumber(LSContactViewerRelationship.UNKNOWN),
        gender: LSIntEnum.ofNumber(LSContactGender.UNKNOWN),
        id: contactId,
        isBlocked: false,
        isMemorialized: false,
        isSelf: false,
        workForeignEntityType: LSIntEnum.ofNumber(LSContactWorkForeignEntityType.UNKNOWN)
      })
    , 'readwrite'));
  }, [reStore, contactId]);

  return (
    <MWPContactContext.MWPContactContextProvider contact={contextValue.contact} nickname={contextValue.nickname}>
      {children}
    </MWPContactContext.MWPContactContextProvider>
  );
}

interface ProviderProps {
    children?: React.ReactNode;
    contact: any;
    nickname: string | undefined;
}

function Provider({ children, contact, nickname }: ProviderProps) {
  const contextValue = useMemo(() => ({
    contact,
    nickname
  }), [contact, nickname]);

  return (
    <MWPContactContext.MWPContactContextProvider contact={contextValue.contact} nickname={contextValue.nickname}>
      {children}
    </MWPContactContext.MWPContactContextProvider>
  );
}

interface MWPMessageAuthorProps {
    children: React.ReactNode;
    contactId: I64;
    threadKey: I64;
}

function MWPMessageAuthor({ children, contactId, threadKey }: MWPMessageAuthorProps) {
  const reStore = useReStore();
  const contact = ReQLSuspense.useFirst(() => 
    ReQL.fromTableAscending(reStore.table('contacts')).getKeyRange(contactId),
    [contactId, reStore],
    'MWPMessageAuthor.react:125'
  );

  const participant = ReQLSuspense.useFirst(() =>
    ReQL.fromTableAscending(reStore.table('participants'), ['nickname']).getKeyRange(threadKey, contactId),
    [contactId, reStore, threadKey],
    'MWPMessageAuthor.react:129'
  );
  const nickname = participant?.nickname;

  const contextualProfileName = ReQLSuspense.useFirst(() =>
    ReQL.fromTableAscending(reStore.table('threads'), ['parentThreadKey', 'secondaryParentThreadKey', 'threadType'])
      .getKeyRange(threadKey)
      .map((thread) => {
        const { parentThreadKey, secondaryParentThreadKey, threadType } = thread;
        const profileName = ReQLSuspense.first(
          ReQL.fromTableAscending(reStore.table('contextual_profile_v1'), ['profileName'])
            .getKeyRange(contactId, MWCMIsCMSubthread(threadType) && secondaryParentThreadKey != null ? secondaryParentThreadKey : parentThreadKey),
          'MWPMessageAuthor.react:154'
        );
        return profileName?.profileName;
      }),
    [reStore, threadKey, contactId],
    'MWPMessageAuthor.react:145'
  );

  const finalNickname = contextualProfileName ?? nickname;

  if (contact != null) {
    if (I64.ge(contact.authorityLevel, LSIntEnum.ofNumber(LSAuthorityLevel.AUTHORITATIVE_PENDING_REPLACEMENT))) {
      return (
        <Provider contact={contact} nickname={finalNickname}>
          {children}
        </Provider>
      );
    } else {
      return (
        <MissingContactProvider contactId={contactId}>
          {children}
        </MissingContactProvider>
      );
    }
  } else {
    return (
      <MissingContactProvider contactId={contactId}>
        {children}
      </MissingContactProvider>
    );
  }
}

const MemoizedMWPMessageAuthor = memo(MWPMessageAuthor, (prevProps, nextProps) => {
  if (prevProps != null && nextProps != null && 
      I64.equal(prevProps.contactId, nextProps.contactId) &&
      I64.equal(prevProps.threadKey, nextProps.threadKey)) {
    return prevProps.children === nextProps.children;
  } else {
    return false;
  }
});

function useAuthorName() {
  const { authorName } = MWPContactContext.useMWPContactStableContext();
  return [authorName];
}

function useAuthorFullName() {
  const { contact } = MWPContactContext.useMWPContactFullContext();
  const authorFullName = contact?.name;
  return [authorFullName, contact];
}

export {
  MissingContactProvider,
  Provider,
  MemoizedMWPMessageAuthor as MWPMessageAuthor,
  useAuthorName,
  useAuthorFullName
};