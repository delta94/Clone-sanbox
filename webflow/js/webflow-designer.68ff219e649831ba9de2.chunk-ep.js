"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [142], {
        12142: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => AuditorPanelContainer
            });
            var n = r(32735),
                l = r(35155),
                a = r(26349),
                i = r(92342),
                u = r(64067),
                o = r(45315);
            let s = (0, a.nU)(e => {
                    let {
                        theme: {
                            gutters: t
                        }
                    } = e;
                    return {
                        marginTop: t.base,
                        display: "grid",
                        gap: t.base,
                        gridTemplateColumns: "1fr auto"
                    }
                }),
                d = (0, a.zo)(u.r)(e => {
                    let {
                        theme: {
                            colors: t
                        }
                    } = e;
                    return {
                        color: t.accentVivid
                    }
                }),
                AuditPanelEduNote = () => n.createElement(o.X, {
                    id: "AUDIT_PANEL_NOTE"
                }, (e, t) => !e && n.createElement(i.G7x, {
                    padding: "0 $2 $2"
                }, n.createElement(i.jCS, {
                    colorVariant: "default",
                    hasIcon: !1,
                    "data-automation-id": "audit-panel-edu-note"
                }, n.createElement(n.Fragment, null, n.createElement("span", null, "Audits check the current page for opportunities to improve your site’s performance and usability."), n.createElement(s, null, n.createElement(d, {
                    href: "https://wfl.io/lesson-audit_panel",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    isExternal: !0
                }, "Learn more"), n.createElement(u.r, {
                    onClick: t
                }, "Dismiss"))))));
            var c = r(66906),
                m = r(89358),
                p = r(14574),
                f = r(12463);
            let g = (0, f.P1)(e => e.BetaFeatureStore, e => e.AuditStore.auditResults, e => e.AuditStore.auditResultsIgnored, (e, t, r) => {
                let n = {};
                for (let e of Object.keys(t))
                    if (!(t[e].length < 1))
                        for (let l of (n.hasOwnProperty(e) || (n[e] = {}), t[e])) {
                            let t, {
                                group: a
                            } = l;
                            ("missingAltTextDynamoField" === a || "missingAltTextMultiImageField" === a) && (a = l.data.collectionName), t = r.includes(l.id) ? "ignored" : "active", n[e][a] || (n[e][a] = {
                                active: [],
                                ignored: []
                            }), n[e][a][t].push(l)
                        }
                let l = Object.entries(n).sort((e, t) => {
                        let [r] = e, [n] = t;
                        return (0, m.XJ)(n) - (0, m.XJ)(r)
                    }),
                    a = [],
                    i = [];
                l.forEach(e => {
                    let [t, r] = e, n = !1;
                    return Object.keys(r).forEach(e => {
                        r[e].active.length > 0 && (n = !0)
                    }), n ? a.push([t, r]) : i.push([t, r]), n
                });
                let u = [];
                for (let t in (0, m.gn)(e)) {
                    let e = -1 === l.findIndex(e => {
                        let [r] = e;
                        return r === t
                    });
                    e && u.push([t])
                }
                return {
                    activeAuditGroupResults: a,
                    ignoredAuditGroupResults: [...i, ...u]
                }
            });

            function AuditorPanelContainer() {
                let {
                    activeAuditGroupResults: e,
                    ignoredAuditGroupResults: t
                } = (0, p.Yx)(g);
                return n.createElement(l.in, null, n.createElement(AuditPanelEduNote, null), n.createElement(c.P, {
                    auditGroupResults: e
                }), n.createElement(c.P, {
                    auditGroupResults: t,
                    showingIgnoredAudits: !0
                }))
            }
        }
    }
]);
//# sourceMappingURL=webflow-designer.68ff219e649831ba9de2.chunk-ep.js.map