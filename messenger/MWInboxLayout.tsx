__d("MWInboxLayout.react", ["BaseRow.react", "BaseRowItem.react", "MDSRow.react", "MDSRowItem.react", "MXRDiv.react", "MetaMessengerCoreStyles", "cr:6306", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react")
      , i = c("gkx")("386")
      , j = {
        container: {
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            minHeight: "x1t2pt76",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            $$css: !0
        },
        leftRail: {
            flexShrink: "x2lah0s",
            minHeight: "x1t2pt76",
            overflowAnchor: "x1xzczws",
            zIndex: "x1vjfegm",
            $$css: !0
        },
        leftRailContainer: {
            backgroundColor: "x2bj2ny",
            boxSizing: "x1afcbsf",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            minHeight: "x1us19tq",
            position: "x1n2onr6",
            top: "x13vifvy",
            width: "x1cvmir6",
            $$css: !0
        },
        mainContent: {
            display: "x78zum5",
            minHeight: "x1t2pt76",
            $$css: !0
        },
        metaMessengerNewRoot: {
            backgroundColor: "xjbqb8w",
            display: "x78zum5",
            height: "x5yr21d",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            $$css: !0
        },
        metaMessengerThreadList: {
            marginStart: "x1mh8g0r",
            $$css: !0
        },
        newRoot: {
            backgroundColor: "x2bj2ny",
            display: "x78zum5",
            height: "x5yr21d",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
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
        pageVisible: {
            opacity: "x1hc1fzr",
            $$css: !0
        },
        root: {
            backgroundColor: "x2bj2ny",
            borderEnd: "xycxndf",
            height: "x5yr21d",
            outline: "x1a2a7pz",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: !0
        },
        sidebar: {
            borderEnd: "xycxndf",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            paddingEnd: "x4uap5",
            $$css: !0
        },
        threadList: {
            flexGrow: "x1iyjqo2",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            width: "x1cvmir6",
            $$css: !0
        }
    };
    function a(a) {
        var b = a.children
          , d = a.testid;
        d = a.xstyle;
        return h.jsx(c("MXRDiv.react"), {
            "data-testid": void 0,
            style: [j.leftRailContainer, d],
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function e(a) {
        a = a.children;
        return h.jsxs(h.Fragment, {
            children: [b("cr:6306") != null ? h.jsx(b("cr:6306"), {
                xstyle: d("MetaMessengerCoreStyles").metaMessengerCoreStyles.background
            }) : null, h.jsx(c("BaseRow.react"), {
                align: "start",
                xstyle: [j.container, i && d("MetaMessengerCoreStyles").metaMessengerCoreStyles.container],
                children: a
            })]
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    function k(a) {
        a = a.children;
        return h.jsx(c("BaseRowItem.react"), {
            expanding: !0,
            xstyle: j.mainContent,
            children: a
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
        a = a.children;
        return h.jsx(c("MDSRowItem.react"), {
            role: "navigation",
            xstyle: j.leftRail,
            children: a
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
        a = a.children;
        return h.jsx(c("MDSRowItem.react"), {
            xstyle: i === !1 && j.sidebar,
            children: a
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
        var b = a.children;
        a = a.xstyle;
        return h.jsx(c("MDSRowItem.react"), {
            xstyle: [j.threadList, a, i && [d("MetaMessengerCoreStyles").metaMessengerCoreStyles.pageSection, j.metaMessengerThreadList]],
            children: h.jsx(c("MXRDiv.react"), {
                style: j.root,
                children: h.jsx(c("MXRDiv.react"), {
                    style: [j.page, j.pageVisible],
                    children: b
                })
            })
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function o(a) {
        a = a.children;
        return h.jsx(c("MDSRow.react"), {
            paddingHorizontal: 0,
            paddingVertical: 0,
            xstyle: i ? j.metaMessengerNewRoot : j.newRoot,
            children: a
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.LeftRailContent = a;
    g.Container = e;
    g.MainContent = k;
    g.LeftRail = l;
    g.LeftRailSidebarRow = m;
    g.LeftRailListRow = n;
    g.LeftRailRow = o
}
), 98);


import React, { JSX } from 'react';
import MXRDiv from "MXRDiv"
import BaseRow from "BaseRow"
import MetaMessengerCoreStyles from "MetaMessengerCoreStyles"
import BaseRowItem from "BaseRowItem"
import MDSRowItem from "MDSRowItem"
import MDSRow from "MDSRow"

interface InboxLayoutProps {
  children: JSX.Element;
  testid?: string;
  xstyle?: React.CSSProperties;
}

const isEnabledMetaMessageCore = false

const styles = {
    container: {
        display: "x78zum5",
        flexGrow: "x1iyjqo2",
        minHeight: "x1t2pt76",
        position: "x1n2onr6",
        zIndex: "x1ja2u2z",
        $$css: !0
    },
    leftRail: {
        flexShrink: "x2lah0s",
        minHeight: "x1t2pt76",
        overflowAnchor: "x1xzczws",
        zIndex: "x1vjfegm",
        $$css: !0
    },
    leftRailContainer: {
        backgroundColor: "x2bj2ny",
        boxSizing: "x1afcbsf",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        minHeight: "x1us19tq",
        position: "x1n2onr6",
        top: "x13vifvy",
        width: "x1cvmir6",
        $$css: !0
    },
    mainContent: {
        display: "x78zum5",
        minHeight: "x1t2pt76",
        $$css: !0
    },
    metaMessengerNewRoot: {
        backgroundColor: "xjbqb8w",
        display: "x78zum5",
        height: "x5yr21d",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        $$css: !0
    },
    metaMessengerThreadList: {
        marginStart: "x1mh8g0r",
        $$css: !0
    },
    newRoot: {
        backgroundColor: "x2bj2ny",
        display: "x78zum5",
        height: "x5yr21d",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
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
    pageVisible: {
        opacity: "x1hc1fzr",
        $$css: !0
    },
    root: {
        backgroundColor: "x2bj2ny",
        borderEnd: "xycxndf",
        height: "x5yr21d",
        outline: "x1a2a7pz",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        position: "x1n2onr6",
        width: "xh8yej3",
        $$css: !0
    },
    sidebar: {
        borderEnd: "xycxndf",
        paddingTop: "xexx8yu",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        paddingEnd: "x4uap5",
        $$css: !0
    },
    threadList: {
        flexGrow: "x1iyjqo2",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        width: "x1cvmir6",
        $$css: !0
    }
};

export const LeftRailContent: React.FC<InboxLayoutProps> = ({ children, testid, xstyle }) => {
  return (
    <MXRDiv data-testid={testid} style={[styles.leftRailContainer, xstyle]}>
      {children}
    </MXRDiv>
  );
};

export const Container: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <BaseRow align="start" xstyle={[styles.container, isEnabledMetaMessageCore && MetaMessengerCoreStyles.metaMessengerCoreStyles.container]}>
    {children}
    </BaseRow>
  );
};

export const MainContent: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <BaseRowItem expanding={true} xstyle={styles.mainContent}>
      {children}
    </BaseRowItem>
  );
};

export const LeftRail: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <MDSRowItem role="navigation" xstyle={styles.leftRail}>
      {children}
    </MDSRowItem>
  );
};

export const LeftRailSidebarRow: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <MDSRowItem xstyle={isEnabledMetaMessageCore === false ? styles.sidebar : undefined}>
      {children}
    </MDSRowItem>
  );
};

export const LeftRailListRow: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <MDSRowItem
      xstyle={[
        styles.threadList,
        isEnabledMetaMessageCore && [MetaMessengerCoreStyles.metaMessengerCoreStyles.pageSection, styles.metaMessengerThreadList],
      ]}
    >
      <MXRDiv style={styles.root}>
        <MXRDiv style={[styles.page, styles.pageVisible]}>{children}</MXRDiv>
      </MXRDiv>
    </MDSRowItem>
  );
};

export const LeftRailRow: React.FC<InboxLayoutProps> = ({ children }) => {
  return (
    <MDSRow paddingHorizontal={0} paddingVertical={0} xstyle={isEnabledMetaMessageCore ? styles.metaMessengerNewRoot : styles.newRoot}>
      {children}
    </MDSRow>
  );
};
