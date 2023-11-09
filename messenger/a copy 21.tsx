__d("MWInboxHomeRoot.react", ["fbt", "CometPlaceholder.react", "CometScrollView.react", "CometTopNavListDropdown.react", "I64", "LSClearMessageSearchTable", "LSClearTables", "LSFactory", "LSIntEnum", "LSIssueMessageSearchQuery", "LSMessageSearchType", "Locale", "MWCMMDSInboxLeftRailHeader.react", "MWInboxActiveNowTrayContainer.react", "MWInboxLeftRailContentPlaceholder.react", "MWInboxLeftRailPlaceholder.react", "MWInboxLeftRailSearch.react", "MWInboxQuickPromotionWrapper.react", "MWLeftRailComponent.react", "MWMessageSearchResults.bs", "MWOutOfChatAudioPlayer.react", "MWQuickPromotionThreadlistBannerContainer.react", "MWThreadList.react", "MWThreadListNewMessage.react", "MWThreadListNewMessageState.react", "MWXText.react", "MessengerThreadlistFooterDesktopAppLinkV2.bs", "cr:3394", "cr:6119", "cr:7303", "emptyFunction", "promiseDone", "react", "recoverableViolation", "stylex", "useDebouncedComet", "useMWCMVerifyThreadsActivityStatusOnMountAndFocus", "useMWInboxSelectedThread", "useReStore"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k, l = j || (j = d("react")), m = j, n = m.Fragment, o = m.useCallback, p = m.useContext, q = m.useEffect, r = m.useMemo, s = m.useRef, t = m.useState, u = (m = b("cr:7303")) != null ? m : n, v = d("Locale").isRTL(), w = {
        header: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            "@media (max-width: 900px)_display": "xzd29fr",
            $$css: !0
        },
        infoBox: {
            marginTop: "x1k70j0n",
            marginEnd: "x11i5rnm",
            marginBottom: "xzueoph",
            marginStart: "x1mh8g0r",
            paddingTop: "xz9dl7a",
            paddingEnd: "x14uny0o",
            paddingBottom: "xsag5q8",
            paddingStart: "xvpee5o",
            $$css: !0
        },
        leftRail: {
            width: "xh8yej3",
            $$css: !0
        },
        page: {
            display: "x78zum5",
            height: "x5yr21d",
            opacity: "xg01cxk",
            position: "x10l6tqk",
            transitionDuration: "x1k90msu",
            transitionProperty: "x6o7n8i",
            transitionTimingFunction: "x1qfuztq",
            width: "xh8yej3",
            $$css: !0
        },
        pageHidden: {
            visibility: "xlshs6z",
            $$css: !0
        },
        pageVisible: {
            opacity: "x1hc1fzr",
            $$css: !0
        }
    }, x = h._("__JHASH__9FTPnWJWCay__JHASH__"), y = (m = b("cr:6119") == null ? void 0 : b("cr:6119").useMWThreadListKeyCommandContext) != null ? m : null;
    function z(a) {
        var b = a.entryPoint;
        a.hidePage;
        var d = a.info
          , e = a.parentThreadKey;
        a = a.title;
        var f = c("useMWInboxSelectedThread")();
        return l.jsxs(c("CometScrollView.react"), {
            showsHorizontalScrollIndicator: !1,
            showsVerticalScrollIndicator: !0,
            children: [a != null ? l.jsx(c("CometTopNavListDropdown.react").Title, {
                actions: [],
                title: a
            }) : null, d != null ? l.jsx("div", {
                className: "x1k70j0n x11i5rnm xzueoph x1mh8g0r xz9dl7a x14uny0o xsag5q8 xvpee5o",
                children: l.jsx(c("MWXText.react"), {
                    color: "secondary",
                    type: "body4",
                    children: d
                })
            }) : null, l.jsx(c("CometPlaceholder.react"), {
                fallback: l.jsx(c("MWInboxLeftRailContentPlaceholder.react"), {}),
                children: l.jsx(c("MWThreadList.react"), {
                    gridLabel: x,
                    lsEntryPoint: b,
                    onOpenMessageRequests: void 0,
                    parentThreadKey: e,
                    responsive: !0,
                    selectedThreadKey: f,
                    threadListMessagingEntrypoint: "inbox"
                })
            })]
        })
    }
    z.displayName = z.name + " [from " + f.id + "]";
    function a(a) {
        a = a.hidePage;
        return l.jsx(z, {
            entryPoint: "inboxSpam",
            hidePage: a,
            parentThreadKey: d("LSIntEnum").ofNumber(-2),
            title: "Spam"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function A(a) {
        a = a.hidePage;
        return l.jsx(z, {
            entryPoint: "inboxFolder",
            hidePage: a,
            parentThreadKey: d("LSIntEnum").ofNumber(-12),
            title: "Marketplace"
        })
    }
    A.displayName = A.name + " [from " + f.id + "]";
    function B(a) {
        a = a.hidePage;
        return l.jsx(z, {
            entryPoint: "inboxFolder",
            hidePage: a,
            parentThreadKey: d("LSIntEnum").ofNumber(-13),
            title: h._("Việc làm")
        })
    }
    B.displayName = B.name + " [from " + f.id + "]";
    function C(a) {
        var b = a.hidePage
          , e = a.query;
        a = a.setIsConversationSearchVisible;
        var f = c("useReStore")()
          , g = c("useMWInboxSelectedThread")()
          , h = s(!1)
          , i = o(function() {
            if (!h.current) {
                h.current = !0;
                c("promiseDone")(f.runInTransaction(function(a) {
                    var b = c("LSFactory")(a);
                    return c("LSClearMessageSearchTable")(d("LSIntEnum").ofNumber(c("LSMessageSearchType").MESSAGE), b).then(function() {
                        return c("LSClearMessageSearchTable")(d("LSIntEnum").ofNumber(c("LSMessageSearchType").THREAD), b)
                    })
                }, "readwrite"), b);
                return
            }
        }, [f, b]);
        return l.jsx(c("MWMessageSearchResults.bs"), {
            clearSearchResultsAndHidePage: i,
            query: e,
            selectedThreadKey: g,
            setIsConversationSearchVisible: a
        })
    }
    C.displayName = C.name + " [from " + f.id + "]";
    function D(a) {
        var e = a.hidePage
          , f = a.isAnimating
          , g = a.pageComponents
          , h = a.pageCursor
          , j = a.pushPage
          , m = a.selectedThreadKey
          , n = a.setIsConversationSearchVisible
          , s = c("useReStore")()
          , y = o(function(a) {
            c("promiseDone")(s.runInTransaction(function(b) {
                var e = c("LSFactory")(b);
                return c("LSClearTables")(e).then(function() {
                    return c("LSIssueMessageSearchQuery")(a, d("LSIntEnum").ofNumber(c("LSMessageSearchType").THREAD), void 0, void 0, e)
                })
            }, "readwrite"), function() {
                return j(function(b) {
                    b = b.hidePage;
                    return C({
                        hidePage: b,
                        query: a,
                        setIsConversationSearchVisible: n
                    })
                })
            })
        }, [s, j, n]);
        q(function() {
            return function() {
                c("promiseDone")(s.runInTransaction(function(a) {
                    return c("LSClearMessageSearchTable")(d("LSIntEnum").ofNumber(c("LSMessageSearchType").THREAD), c("LSFactory")(a))
                }, "readwrite"))
            }
        }, [s]);
        c("useMWCMVerifyThreadsActivityStatusOnMountAndFocus")("InboxRoot", !0);
        var z = o(function(a) {
            if ((k || (k = d("I64"))).equal(a, d("LSIntEnum").ofNumber(-13)))
                return j(B);
            else if ((k || (k = d("I64"))).equal(a, d("LSIntEnum").ofNumber(-12)))
                return j(A);
            c("recoverableViolation")("Attempted to show an unimplemented nested system folder", "messenger_web_product")
        }, [j])
          , D = p(d("MWThreadListNewMessageState.react").context);
        a = r(function() {
            return b("cr:3394") == null ? l.jsx(c("MWInboxLeftRailSearch.react"), {
                searchMessagesClicked: y
            }) : l.jsx(b("cr:3394"), {
                onMessageSearchClick: y,
                surface: "MessengerInboxThreadlist"
            })
        }, [y]);
        var E = l.jsx(c("MWInboxQuickPromotionWrapper.react"), {
            onError: function() {},
            children: l.jsx(u, {
                children: l.jsx(c("MWQuickPromotionThreadlistBannerContainer.react"), {})
            })
        })
          , F = t(!1)
          , G = F[0]
          , H = F[1];
        F = r(function() {
            return l.jsx(c("CometPlaceholder.react"), {
                fallback: l.jsx(c("MWInboxLeftRailContentPlaceholder.react"), {}),
                children: l.jsx(c("MWThreadList.react"), {
                    gridLabel: x,
                    header: l.jsx(c("MWInboxActiveNowTrayContainer.react"), {}),
                    lsEntryPoint: "inboxThreadList",
                    onClickNestedFolderThread: z,
                    onClose: c("emptyFunction"),
                    onOpenMessageRequests: void 0,
                    parentThreadKey: d("LSIntEnum").ofNumber(0),
                    preamble: D.isActive ? l.jsx(c("MWThreadListNewMessage.react"), {
                        entries: D.entries
                    }) : null,
                    responsive: !0,
                    selectedThreadKey: m,
                    setHasScrolled: H,
                    threadListMessagingEntrypoint: "inbox"
                })
            })
        }, [m, H, z, D]);
        var I = l.jsx(c("MessengerThreadlistFooterDesktopAppLinkV2.bs"), {});
        return l.jsx(l.Fragment, {
            children: h > 0 ? g.map(function(a, b) {
                return l.jsx("div", {
                    className: (i || (i = c("stylex")))(w.page, !f && h !== b + 1 ? w.pageHidden : !1, h === b + 1 ? w.pageVisible : !1),
                    style: {
                        transform: "translateX(" + (String(Math.imul(v ? 1 : -1, h - b - 1)) + "00%) translateZ(1px)")
                    },
                    children: l.createElement(a, {
                        hidePage: e
                    })
                }, String(b))
            }) : l.jsx(c("MWLeftRailComponent.react"), {
                footer: I,
                hasScrolled: G,
                header: l.jsxs("div", {
                    className: "x78zum5 xdt5ytf xzd29fr",
                    children: [l.jsx(c("MWOutOfChatAudioPlayer.react"), {}), l.jsx(c("MWCMMDSInboxLeftRailHeader.react"), {})]
                }),
                preamble: E,
                primaryNav: F,
                search: a,
                xstyle: w.leftRail
            })
        })
    }
    D.displayName = D.name + " [from " + f.id + "]";
    function e(a) {
        a = a.props;
        var b = a.queries;
        a = a.setIsConversationSearchVisible;
        var d = c("useMWInboxSelectedThread")()
          , e = t(function() {
            return !1
        })
          , f = e[0]
          , g = e[1];
        e = t(function() {
            return []
        });
        var h = e[0]
          , i = e[1];
        e = t(0);
        var j = e[0]
          , k = e[1];
        o(function() {
            return g(!1)
        }, [g]);
        e = c("useDebouncedComet")(o(function(a) {
            window.requestAnimationFrame(function() {
                g(!0);
                return k(function(b) {
                    i(function(c) {
                        return c.slice(0, b).concat([a])
                    });
                    return b + 1
                })
            })
        }, [g, k, i]), {
            leading: !0,
            wait: 350
        });
        var m = o(function() {
            window.requestAnimationFrame(function() {
                if (j < 1) {
                    c("recoverableViolation")("Attempting to close a page that does not exist anymore.", "messenger_comet");
                    return
                }
                g(!0);
                k(function(a) {
                    return a - 1
                })
            })
        }, [j, g, k]);
        m = l.jsx(c("CometPlaceholder.react"), {
            fallback: l.jsx(c("MWInboxLeftRailPlaceholder.react"), {}),
            children: l.jsx(D, {
                hidePage: m,
                isAnimating: f,
                pageComponents: h,
                pageCursor: j,
                pushPage: e,
                queries: b,
                selectedThreadKey: d,
                setIsConversationSearchVisible: a
            })
        });
        return y == null ? m : l.jsx(y, {
            activeIndex: j,
            children: m
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g["default"] = e
}
), 98);





import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CometPlaceholder,
  CometScrollView,
  CometTopNavListDropdown,
} from 'comet-ui-library'; // Import your UI library components here
import {
  I64,
  LSClearMessageSearchTable,
  LSClearTables,
  LSFactory,
  LSIntEnum,
  LSIssueMessageSearchQuery,
  LSMessageSearchType,
} from 'your-ls-library'; // Import your LS library components here
import { Locale } from 'your-locale-library'; // Import your Locale library components here
import {
  MWInboxActiveNowTrayContainer,
  MWInboxLeftRailContentPlaceholder,
  MWInboxLeftRailPlaceholder,
  MWInboxLeftRailSearch,
  MWInboxQuickPromotionWrapper,
} from 'your-inbox-components'; // Import your inbox components here
import MWThreadList from './MWThreadList'; // Import your MWThreadList component or replace with your actual import
import MWThreadListNewMessage from './MWThreadListNewMessage'; // Import your MWThreadListNewMessage component or replace with your actual import
import MWThreadListNewMessageState from './MWThreadListNewMessageState'; // Import your MWThreadListNewMessageState component or replace with your actual import
import MWXText from './MWXText'; // Import your MWXText component or replace with your actual import
import {
  recoverableViolation,
  useDebouncedComet,
  useMWCMVerifyThreadsActivityStatusOnMountAndFocus,
  useMWInboxSelectedThread,
  useReStore,
} from 'your-util-library'; // Import your utility functions/components here

const styles = {
  header: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    "@media (max-width: 900px)_display": "xzd29fr",
  },
  infoBox: {
    marginTop: "x1k70j0n",
    marginEnd: "x11i5rnm",
    marginBottom: "xzueoph",
    marginStart: "x1mh8g0r",
    paddingTop: "xz9dl7a",
    paddingEnd: "x14uny0o",
    paddingBottom: "xsag5q8",
    paddingStart: "xvpee5o",
  },
  leftRail: {
    width: "xh8yej3",
  },
  page: {
    display: "x78zum5",
    height: "x5yr21d",
    opacity: "xg01cxk",
    position: "x10l6tqk",
    transitionDuration: "x1k90msu",
    transitionProperty: "x6o7n8i",
    transitionTimingFunction: "x1qfuztq",
    width: "xh8yej3",
  },
  pageHidden: {
    visibility: "xlshs6z",
  },
  pageVisible: {
    opacity: "x1hc1fzr",
  },
};

const gridLabel = "Chat";

const MWThreadListKeyCommandContext = undefined;

function ThreadPage({ entryPoint, hidePage, info, parentThreadKey, title }) {
  const selectedThread = useMWInboxSelectedThread();

  return (
      <CometScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true}>
          {title && <CometTopNavListDropdown.Title actions={[]} title={title} />}
          {info && (
              <div className="x1k70j0n x11i5rnm xzueoph x1mh8g0r xz9dl7a x14uny0o xsag5q8 xvpee5o">
                  <MWXText color="secondary" type="body4">
                      {info}
                  </MWXText>
              </div>
          )}
          <CometPlaceholder fallback={<MWInboxLeftRailContentPlaceholder />}>
              <MWThreadList
                  gridLabel={gridLabel}
                  lsEntryPoint={entryPoint}
                  onOpenMessageRequests={undefined}
                  parentThreadKey={parentThreadKey}
                  responsive={true}
                  selectedThreadKey={selectedThread}
                  threadListMessagingEntrypoint="inbox"
              />
          </CometPlaceholder>
      </CometScrollView>
  );
}

function SpamPage({ hidePage }) {
  return <ThreadPage entryPoint="inboxSpam" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-2)} title="Spam" />;
}

function MarketplacePage({ hidePage }) {
  return <ThreadPage entryPoint="inboxFolder" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-12)} title="Marketplace" />;
}

function JobsPage({ hidePage }) {
  return <ThreadPage entryPoint="inboxFolder" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-13)} title="Việc làm" />;
}

function InboxFolderPage2({ hidePage }) {
  return (
    <InboxPageComponent
      entryPoint="inboxFolder"
      hidePage={hidePage}
      parentThreadKey={LSIntEnum.ofNumber(-13)}
      title={h._("__JHASH__yJarfmqcRDP__JHASH__")}
    />
  );
}

const ConversationSearchPage: React.FC<{
  hidePage: () => void;
  query: string;
  setIsConversationSearchVisible: (isVisible: boolean) => void;
}> = ({ hidePage, query, setIsConversationSearchVisible }) => {
  const selectedThreadKey = useMWInboxSelectedThread();
  const searchMessagesClicked = useCallback(() => {
    window.requestAnimationFrame(() => {
      setIsConversationSearchVisible(true);
    });
  }, [setIsConversationSearchVisible]);

  const clearSearchResultsAndHidePage = useCallback(() => {
    if (!searched.current) {
      searched.current = true;
      promiseDone(() => {
        const factory = LSFactory();
        LSClearMessageSearchTable(
          LSIntEnum.ofNumber(LSMessageSearchType.MESSAGE),
          factory
        ).then(() => {
          return LSClearMessageSearchTable(
            LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
            factory
          );
        });
      }, "readwrite");
      return;
    }
  }, []);

  return (
    <MWMessageSearchResults
      clearSearchResultsAndHidePage={clearSearchResultsAndHidePage}
      query={query}
      selectedThreadKey={selectedThreadKey}
      setIsConversationSearchVisible={setIsConversationSearchVisible}
    />
  );
};

const InboxRoot: React.FC<{
  hidePage: () => void;
  isAnimating: boolean;
  pageComponents: React.FC[];
  pageCursor: number;
  pushPage: (query: string) => void;
  queries: string[];
  selectedThreadKey: string;
  setIsConversationSearchVisible: (isVisible: boolean) => void;
}> = ({
  hidePage,
  isAnimating,
  pageComponents,
  pageCursor,
  pushPage,
  queries,
  selectedThreadKey,
  setIsConversationSearchVisible,
}) => {
  const store = useReStore();
  const searchMessagesClicked = useCallback(
    (query: string) => {
      promiseDone(() => {
        store.runInTransaction((transaction) => {
          const factory = LSFactory(transaction);
          LSClearTables(factory).then(() => {
            return LSIssueMessageSearchQuery(
              query,
              LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
              undefined,
              undefined,
              factory
            );
          });
        }, "readwrite");
      });
      pushPage((hidePage) => (
        <ConversationSearchPage
          hidePage={hidePage}
          query={query}
          setIsConversationSearchVisible={setIsConversationSearchVisible}
        />
      ));
    },
    [pushPage, setIsConversationSearchVisible, store]
  );

  useEffect(() => {
    return () => {
      promiseDone(() => {
        store.runInTransaction((transaction) => {
          return LSClearMessageSearchTable(
            LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
            LSFactory(transaction)
          );
        }, "readwrite");
      });
    };
  }, [store]);

  useMWCMVerifyThreadsActivityStatusOnMountAndFocus("InboxRoot", true);

  const onClickNestedFolderThread = useCallback(
    (threadKey: I64) => {
      if (I64.equal(threadKey, LSIntEnum.ofNumber(-13))) {
        pushPage(FolderPage);
      } else if (I64.equal(threadKey, LSIntEnum.ofNumber(-12))) {
        pushPage(SpamPage);
      } else {
        recoverableViolation(
          "Attempted to show an unimplemented nested system folder",
          "messenger_web_product"
        );
      }
    },
    [pushPage]
  );

  const newMessageState = MWThreadListNewMessageState.context();

    const search = useMemo(() => {
    return (
      <MWInboxLeftRailSearch searchMessagesClicked={searchMessagesClicked} />
    ) 
  }, [searchMessagesClicked]);

    const quickPromotionBanner = (
    <MWInboxQuickPromotionWrapper
      onError={() => {}}
      children={
        <>
          <MWQuickPromotionThreadlistBannerContainer />
        </>
      }
    />
  );

  const [hasScrolled, setHasScrolled] = useState(false);

  const primaryNav = useMemo(() => {
    return (
      <CometPlaceholder
        fallback={<MWInboxLeftRailContentPlaceholder />}
      >
        <MWThreadList
          gridLabel={gridLabel}
          header={<MWInboxActiveNowTrayContainer />}
          lsEntryPoint="inboxThreadList"
          onClickNestedFolderThread={onClickNestedFolderThread}
          onClose={() => {}}
          onOpenMessageRequests={undefined}
          parentThreadKey={LSIntEnum.ofNumber(0)}
          preamble={
            newMessageState.isActive ? (
              <MWThreadListNewMessage entries={newMessageState.entries} />
            ) : null
          }
          responsive={true}
          selectedThreadKey={selectedThreadKey}
          setHasScrolled={setHasScrolled}
          threadListMessagingEntrypoint="inbox"
        />
      </CometPlaceholder>
    );
  }, [onClickNestedFolderThread, selectedThreadKey, setHasScrolled, newMessageState]);

  const footer = <MessengerThreadlistFooterDesktopAppLinkV2 />;

  return (
    <>
      {pageCursor > 0
        ? pageComponents.map((PageComponent, index) => (
            <div
              className={styles.page}
              style={{
                transform: `translateX(${
                  String(Math.imul(Locale.isRTL ? 1 : -1, pageCursor - index - 1)) + '00%'
                }) translateZ(1px)`,
              }}
              key={String(index)}
            >
              <PageComponent hidePage={hidePage} />
            </div>
          ))
        : (
          <MWLeftRailComponent
            footer={footer}
            hasScrolled={hasScrolled}
            header={
              <div className="x78zum5 xdt5ytf xzd29fr">
                <MWOutOfChatAudioPlayer />
                <MWCMMDSInboxLeftRailHeader />
              </div>
            }
            preamble={quickPromotionBanner}
            primaryNav={primaryNav}
            search={search}
            xstyle={styles.leftRail}
          />
        )
      }
    </>
  );
};

InboxRoot.displayName = InboxRoot.name + " [from " + f.id + "]";


const Inbox: React.FC<{ hidePage: () => void }> = ({ hidePage }) => {
  const queries = [];
  const setIsConversationSearchVisible = (isVisible: boolean) => {};
  const selectedThreadKey = useMWInboxSelectedThread();

  const [isAnimating, setIsAnimating] = useState(false);

  const [pageCursor, setPageCursor] = useState(0);
  const [pageComponents, setPageComponents] = useState<React.FC[]>([]);
  const searched = useRef(false);

  const pushPage = useDebouncedComet(useCallback(
    (pageComponent: React.FC) => {
      window.requestAnimationFrame(() => {
        setIsAnimating(true);
        return setPageComponents((b) => {
            return setPageCursor(c => {
                
            })
        })
        if (pageCursorRef.current < 1) {
          recoverableViolation(
            "Attempting to close a page that does not exist anymore.",
            "messenger_comet"
          );
          return;
        }
        setPageCursor(pageCursorRef.current - 1);
      });
    },
    []
  ), {
    leading: !0,
    wait: 350
  });

  useEffect(() => {
    return () => {
        setIsAnimating(true);

      window.requestAnimationFrame(() => {
        return useCallback((b) => {
            
        })
        if (pageCursorRef.current < 1) {
          recoverableViolation(
            "Attempting to close a page that does not exist anymore.",
            "messenger_comet"
          );
          return;
        }
        setPageCursor(pageCursorRef.current - 1);
      });
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {pageCursor > 0 ? (
        pageComponents.map((PageComponent, index) => (
          <div
            className={`${styles.page} ${
              !isAnimating && pageCursor !== index + 1 ? styles.pageHidden : ''
            } ${pageCursor === index + 1 ? styles.pageVisible : ''}`}
            style={{
              transform: `translateX(${
                String(Math.imul(v ? 1 : -1, pageCursor - index - 1)) + '00%'
              }) translateZ(1px)`,
            }}
            key={String(index)}
          >
            {React.createElement(PageComponent, { hidePage })}
          </div>
        ))
      ) : (
        <MWLeftRailComponent
          footer={<MessengerThreadlistFooterDesktopAppLinkV2 />}
          hasScrolled={hasScrolled}
          header={
            <div className="x78zum5 xdt5ytf xzd29fr">
              <MWOutOfChatAudioPlayer />
              <MWCMMDSInboxLeftRailHeader />
            </div>
          }
          preamble={<MWInboxQuickPromotionWrapper onError={() => {}} />}
          primaryNav={
            cr3394 == null ? (
              <MWInboxLeftRailSearch searchMessagesClicked={searchMessagesClicked} />
            ) : (
              <cr3394
                onMessageSearchClick={searchMessagesClicked}
                surface="MessengerInboxThreadlist"
              />
            )
          }
          xstyle={styles.leftRail}
        />
      )}
    </>
  );
};



export default Inbox;


function InboxHomeRoot({ props }) {
  const { queries, setIsConversationSearchVisible } = props;
  const selectedThread = useMWInboxSelectedThread();
  const [isAnimating, setIsAnimating] = useState(false);
  const [pageComponents, setPageComponents] = useState([]);
  const [pageCursor, setPageCursor] = useState(0);
  const updateAnimation = useCallback(() => setIsAnimating(false), []);
  const pushNewPage = useDebouncedComet(callbackFunction, { leading: true, wait: 350 }); // replace callbackFunction with the function body

  const renderedMainContent = (
      <CometPlaceholder fallback={<MWInboxLeftRailPlaceholder />}>
          <MainContent
              hidePage={updateAnimation}
              isAnimating={isAnimating}
              pageComponents={pageComponents}
              pageCursor={pageCursor}
              pushPage={pushNewPage}
              queries={queries}
              selectedThreadKey={selectedThread}
              setIsConversationSearchVisible={setIsConversationSearchVisible}
          />
      </CometPlaceholder>
  );

  return useMWThreadListKeyCommandContext ? <useMWThreadListKeyCommandContext activeIndex={pageCursor} children={renderedMainContent} /> : renderedMainContent;
}

export default InboxHomeRoot;



// import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
// import {
//   ActiveFocusRegionUtilsContext,
//   CometPlaceholder,
//   CometScrollView,
//   CometTopNavListDropdown,
//   I64,
//   LSClearMessageSearchTable,
//   LSClearTables,
//   LSFactory,
//   LSIntEnum,
//   LSIssueMessageSearchQuery,
//   LSMessageSearchType,
//   Locale,
//   MWCMMDSInboxLeftRailHeader,
//   MWInboxActiveNowTrayContainer,
//   MWInboxLeftRailContentPlaceholder,
//   MWInboxLeftRailPlaceholder,
//   MWInboxLeftRailSearch,
//   MWInboxQuickPromotionWrapper,
//   MWLeftRailComponent,
//   MWMessageSearchResults,
//   MWOutOfChatAudioPlayer,
//   MWQuickPromotionThreadlistBannerContainer,
//   MWThreadList,
//   MWThreadListNewMessage,
//   MWThreadListNewMessageState,
//   MWXText,
//   MessengerThreadlistFooterDesktopAppLinkV2,
//   cr,
//   emptyFunction,
//   promiseDone,
//   recoverableViolation,
//   stylex,
//   useDebouncedComet,
//   useMWCMVerifyThreadsActivityStatusOnMountAndFocus,
//   useMWInboxSelectedThread,
//   useReStore,
// } from './your-imports'; // Replace with your actual import paths

// const styles = {
//     header: {
//         display: "x78zum5",
//         flexDirection: "xdt5ytf",
//         "@media (max-width: 900px)_display": "xzd29fr",
//         $$css: !0
//     },
//     infoBox: {
//         marginTop: "x1k70j0n",
//         marginEnd: "x11i5rnm",
//         marginBottom: "xzueoph",
//         marginStart: "x1mh8g0r",
//         paddingTop: "xz9dl7a",
//         paddingEnd: "x14uny0o",
//         paddingBottom: "xsag5q8",
//         paddingStart: "xvpee5o",
//         $$css: !0
//     },
//     leftRail: {
//         width: "xh8yej3",
//         $$css: !0
//     },
//     page: {
//         display: "x78zum5",
//         height: "x5yr21d",
//         opacity: "xg01cxk",
//         position: "x10l6tqk",
//         transitionDuration: "x1k90msu",
//         transitionProperty: "x6o7n8i",
//         transitionTimingFunction: "x1qfuztq",
//         width: "xh8yej3",
//         $$css: !0
//     },
//     pageHidden: {
//         visibility: "xlshs6z",
//         $$css: !0
//     },
//     pageVisible: {
//         opacity: "x1hc1fzr",
//         $$css: !0
//     }
// };

// const gridLabel = "Chat"
// // const threadlistKeyCommandContext = cr:6119?.useMWThreadListKeyCommandContext;
// const threadlistKeyCommandContext = undefined;

// function ThreadListPage(props) {
//   const { entryPoint, info, parentThreadKey, title } = props;
//   const selectedThreadKey = useMWInboxSelectedThread();

//   return (
//     <CometScrollView
//       showsHorizontalScrollIndicator={false}
//       showsVerticalScrollIndicator={true}
//     >
//       {title != null && (
//         <CometTopNavListDropdown.Title actions={[]} title={title} />
//       )}
//       {info != null && (
//         <div
//           className={stylex(styles.infoBox)}
//         >
//           <MWXText color="secondary" type="body4">
//             {info}
//           </MWXText>
//         </div>
//       )}
//       <CometPlaceholder
//         fallback={<MWInboxLeftRailContentPlaceholder />}
//       >
//         <MWThreadList
//           gridLabel={gridLabel}
//           lsEntryPoint={entryPoint}
//           onOpenMessageRequests={undefined}
//           parentThreadKey={parentThreadKey}
//           responsive={true}
//           selectedThreadKey={selectedThreadKey}
//           threadListMessagingEntrypoint="inbox"
//         />
//       </CometPlaceholder>
//     </CometScrollView>
//   );
// }

// ThreadListPage.displayName = ThreadListPage.name + ' [from ' + module.id + ']';

// function SpamPage(props) {
//   const { hidePage } = props;
//   return <ThreadListPage entryPoint="inboxSpam" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-2)} title={"Spam"} />;
// }

// SpamPage.displayName = SpamPage.name + ' [from ' + module.id + ']';

// function MarketplaceFolderPage(props) {
//   const { hidePage } = props;
//   return <ThreadListPage entryPoint="inboxFolder" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-12)} title={"Marketplace"} />;
// }

// MarketplaceFolderPage.displayName = MarketplaceFolderPage.name + ' [from ' + module.id + ']';

// function JobSearchFolderPage(props) {
//   const { hidePage } = props;
//   return <ThreadListPage entryPoint="inboxFolder" hidePage={hidePage} parentThreadKey={LSIntEnum.ofNumber(-13)} title={"Việc làm"} />;
// }

// JobSearchFolderPage.displayName = JobSearchFolderPage.name + ' [from ' + module.id + ']';

// function SearchPage(props) {
//   const { hidePage, query, setIsConversationSearchVisible } = props;
//   const reStore = useReStore();
//   const selectedThreadKey = useMWInboxSelectedThread();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [pageComponents, setPageComponents] = useState([]);
//   const [pageCursor, setPageCursor] = useState(0);

//   o(function() {
//     return g(!1)
// }, [g]);

//   const clearSearchResultsAndHidePage = useCallback(() => {
//     promiseDone(
//       reStore.runInTransaction(function (store) {
//         const lsFactory = LSFactory(store);
//         return LSClearTables(lsFactory).then(() =>
//           LSIssueMessageSearchQuery(
//             query,
//             LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
//             undefined,
//             undefined,
//             lsFactory
//           )
//         );
//       }, 'readwrite')
//     );
//     hidePage();
//   }, [query, reStore, hidePage]);

//   useEffect(() => {
//     return () => {
//       promiseDone(
//         reStore.runInTransaction(function (store) {
//           return LSClearMessageSearchTable(
//             LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
//             LSFactory(store)
//           );
//         }, 'readwrite')
//       );
//     };
//   }, [reStore]);

//   useMWCMVerifyThreadsActivityStatusOnMountAndFocus('InboxRoot', true);

//   const pushPage = useCallback(
//     (page) => {
//       if (I64.equal(page, LSIntEnum.ofNumber(-13))) {
//         return UnimplementedFolderPage;
//       } else if (I64.equal(page, LSIntEnum.ofNumber(-12))) {
//         return FolderPage;
//       }
//       recoverableViolation(
//         'Attempted to show an unimplemented nested system folder',
//         'messenger_web_product'
//       );
//     },
//     [pushPage]
//   );

//   const newMessageState = useContext(MWThreadListNewMessageState.context);

//   const primaryNav = useMemo(() => {
//     return b('cr:3394') == null ? (
//       <MWInboxLeftRailSearch searchMessagesClicked={searchMessagesClicked} />
//     ) : (
//       <b('cr:3394')
//         onMessageSearchClick={searchMessagesClicked}
//         surface="MessengerInboxThreadlist"
//       />
//     );
//   }, [searchMessagesClicked]);

//   const quickPromotionBanner = (
//     <MWInboxQuickPromotionWrapper
//       onError={() => {}}
//       children={
//         <cr:7303>
//           <MWQuickPromotionThreadlistBannerContainer />
//         </cr:7303>
//       }
//     />
//   );

//   const [hasScrolled, setHasScrolled] = useState(false);

//   const onPageChange = useCallback(
//     (newPageIndex) => {
//       setIsAnimating(true);
//       setPageCursor(newPageIndex);
//     },
//     [setIsAnimating]
//   );

//   return (
//     <div>
//       {pageCursor > 0 ? (
//         pageComponents.map((Component, index) => (
//           <div
//             key={index}
//             className={stylex(styles.page, !isAnimating && pageCursor !== index + 1 && styles.pageHidden, pageCursor === index + 1 && styles.pageVisible)}
//             style={{
//               transform: `translateX(${String(Math.imul(v ? 1 : -1, pageCursor - index - 1))}00%) translateZ(1px)`,
//             }}
//           >
//             <Component hidePage={clearSearchResultsAndHidePage} />
//           </div>
//         ))
//       ) : (
//         <MWLeftRailComponent
//           footer={<MessengerThreadlistFooterDesktopAppLinkV2 />}
//           hasScrolled={hasScrolled}
//           header={
//             <div className={stylex(styles.header)}>
//               <MWOutOfChatAudioPlayer />
//               <MWCMMDSInboxLeftRailHeader />
//             </div>
//           }
//           preamble={newMessageState.isActive ? (
//             <MWThreadListNewMessage entries={newMessageState.entries} />
//           ) : null}
//           primaryNav={primaryNav}
//           search={searchComponent}
//           xstyle={styles.leftRail}
//         />
//       )}
//     </div>
//   );
// }

// SearchPage.displayName = SearchPage.name + ' [from ' + module.id + ']';

// function InboxHomeRoot(props) {
//   const { hidePage } = props;
//   const { queries, setIsConversationSearchVisible } = props;
//   const selectedThreadKey = useMWInboxSelectedThread();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [pageComponents, setPageComponents] = useState([]);
//   const [pageCursor, setPageCursor] = useState(0);

//   const clearSearchResultsAndHidePage = useCallback(() => {
//     promiseDone(
//       reStore.runInTransaction(function (store) {
//         const lsFactory = LSFactory(store);
//         return LSClearTables(lsFactory).then(() =>
//           LSIssueMessageSearchQuery(
//             queries,
//             LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
//             undefined,
//             undefined,
//             lsFactory
//           )
//         );
//       }, 'readwrite')
//     );
//     hidePage();
//   }, [queries, reStore, hidePage]);

//   useEffect(() => {
//     return () => {
//       promiseDone(
//         reStore.runInTransaction(function (store) {
//           return LSClearMessageSearchTable(
//             LSIntEnum.ofNumber(LSMessageSearchType.THREAD),
//             LSFactory(store)
//           );
//         }, 'readwrite')
//       );
//     };
//   }, [reStore]);

//   useMWCMVerifyThreadsActivityStatusOnMountAndFocus('InboxRoot', true);

//   const pushPage = useCallback(
//     (page) => {
//       if (I64.equal(page, LSIntEnum.ofNumber(-13))) {
//         return UnimplementedFolderPage;
//       } else if (I64.equal(page, LSIntEnum.ofNumber(-12))) {
//         return FolderPage;
//       }
//       recoverableViolation(
//         'Attempted to show an unimplemented nested system folder',
//         'messenger_web_product'
//       );
//     },
//     [pushPage]
//   );

//   const newMessageState = useContext(MWThreadListNewMessageState.context);

//   const primaryNav = useMemo(() => {
//     return b('cr:3394') == null ? (
//       <MWInboxLeftRailSearch searchMessagesClicked={searchMessagesClicked} />
//     ) : (
//       <b('cr:3394')
//         onMessageSearchClick={searchMessagesClicked}
//         surface="MessengerInboxThreadlist"
//       />
//     );
//   }, [searchMessagesClicked]);

//   const quickPromotionBanner = (
//     <MWInboxQuickPromotionWrapper
//       onError={() => {}}
//       children={
//         <cr:7303>
//           <MWQuickPromotionThreadlistBannerContainer />
//         </cr:7303>
//       }
//     />
//   );

//   const [hasScrolled, setHasScrolled] = useState(false);

//   return (
//     <div>
//       {pageCursor > 0 ? (
//         pageComponents.map((Component, index) => (
//           <div
//             key={index}
//             className={stylex(styles.page, !isAnimating && pageCursor !== index + 1 && styles.pageHidden, pageCursor === index + 1 && styles.pageVisible)}
//             style={{
//               transform: `translateX(${String(Math.imul(v ? 1 : -1, pageCursor - index - 1))}00%) translateZ(1px)`,
//             }}
//           >
//             <Component hidePage={clearSearchResultsAndHidePage} />
//           </div>
//         ))
//       ) : (
//         <MWLeftRailComponent
//           footer={<MessengerThreadlistFooterDesktopAppLinkV2 />}
//           hasScrolled={hasScrolled}
//           header={
//             <div className={stylex(styles.header)}>
//               <MWOutOfChatAudioPlayer />
//               <MWCMMDSInboxLeftRailHeader />
//             </div>
//           }
//           preamble={newMessageState.isActive ? (
//             <MWThreadListNewMessage entries={newMessageState.entries} />
//           ) : null}
//           primaryNav={primaryNav}
//           search={searchComponent}
//           xstyle={styles.leftRail}
//         />
//       )}
//     </div>
//   );
// }

// InboxHomeRoot.displayName = InboxHomeRoot.name + ' [from ' + module.id + ']';

// export default InboxHomeRoot;
