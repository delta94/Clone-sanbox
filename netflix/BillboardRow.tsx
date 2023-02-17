267310: function(e, t, n) {
    "use strict";
    var r = n(564836);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.BillboardRow = void 0;
    var i = r(n(45697));//PropTypes
    r(n(667294)); // react
    var o = r(n(972555)) // Compoent, isValidElement
      , a = r(n(914578)) // lodash
      , l = r(n(294184)) //classnames
      , s = r(n(871359))
      , u = r(n(567429))
      , c = r(n(211970))
      , d = n(221413) // BillboardType
      , f = n(288169)
      , p = n(991259)
      , h = n(946049)
      , v = r(n(408885))
      , m = r(n(795581))
      , g = n(727886)
      , y = r(n(223954))
      , b = r(n(451006))
      , C = r(n(763430))
      , O = r(n(616781))
      , w = r(n(671673))
      , E = r(n(713138))
      , P = n(135944)
      , _ = s.default ? {} : window
      , L = (0,
    E.default)("", {
        bundleOverride: "discovery/akira/Billboard",
        keyOverride: "billboard.actions.featured"
    })
      , I = function(e, t, n) {
        var r = [];
        r.push([[0, "componentSummary"], [0, 0, "itemSummary"]]);
        var i = (0,
        u.default)(e, t, n);
        return r.push(i.map(function(e) {
            return [0, {
                to: 1
            }, "reference"].concat(e)
        })),
        r.push(p.PlayButton.getPaths(e).map(function(e) {
            return [0, {
                to: 1
            }, "reference"].concat(e)
        })),
        r.push([[0, {
            to: 1
        }, "reference", ["bbSupplementalMessageIcon", "bbSupplementalMessage"]]]),
        a.default.get(e, "truths.data.isTop10Supported", !1) && r.push([[0, {
            to: 1
        }, "reference", "mostWatchedData"]]),
        e.truths.data.volatileBillboardsEnabled && r.push([[0, "meta", "expires"]]),
        a.default.flatten(r)
    }
      , S = (0,
    o.default)({
        displayName: "BillboardRow",
        statics: {
            getPaths: I,
            getLocoPaths: function(e, t, n) {
                var r = [[0, "reference", "maturity"]];
                return r = r.concat(p.PlayButton.getPaths(e).map(function(e) {
                    return [0, "reference"].concat(e)
                })),
                a.default.get(e, "truths.data.isTop10Supported", !1) && (r = r.concat([[0, "reference", "mostWatchedData"]])),
                r = r.concat([[0, "reference", ["bbSupplementalMessage", "bbSupplementalMessageIcon"]], [0, "itemSummary"]])
            }
        },
        childContextTypes: {
            requestId: i.default.string.isRequired,
            listId: i.default.string.isRequired,
            rowNum: i.default.number,
            rankNum: i.default.number,
            trackId: i.default.number,
            jawBoneTrackId: i.default.number,
            jawBoneEpisodeTrackId: i.default.number,
            jawBoneTrailerTrackId: i.default.number,
            supplementalVideoId: i.default.number,
            unifiedEntityId: i.default.string.isRequired,
            videoId: i.default.number
        },
        contextTypes: Object.assign({
            getModelData: i.default.func.isRequired,
            models: i.default.object.isRequired,
            jsongDocument: i.default.object.isRequired,
            discoveryApp: i.default.object.isRequired,
            formatString: i.default.func.isRequired
        }, v.default),
        _videoId: null,
        disposeTimeout: null,
        getInitialState: function() {
            var e = this.props.billboardData;
            return {
                useAvailablePhase: 0 >= f.BillboardHelpers.getAvailabilityTimeRemaining(e),
                billboardVideoID: e && e.id
            }
        },
        getChildContext: function() {
            var e, t, n, r = this.props.billboardData;
            return {
                requestId: this.getRequestId(),
                listId: this.getId(),
                rowNum: this.props.rowNum,
                rankNum: 0,
                trackId: this.getTrackId(),
                jawBoneTrackId: null === (e = this.props.trackIds) || void 0 === e ? void 0 : e.trackId_jaw,
                jawBoneEpisodeTrackId: null === (t = this.props.trackIds) || void 0 === t ? void 0 : t.trackId_jawEpisode,
                jawBoneTrailerTrackId: null === (n = this.props.trackIds) || void 0 === n ? void 0 : n.trackId_jawTrailer,
                unifiedEntityId: this.props.billboardData.unifiedEntityId,
                videoId: this._videoId,
                supplementalVideoId: a.default.get(r, "videoAssets.horizontalBackground.motionId")
            }
        },
        componentDidMount: function() {
            var e = this
              , t = this.props.billboardData
              , n = f.BillboardHelpers.getAvailabilityTimeRemaining(t)
              , r = this.context.getModelData("truths");
            if (n > 0 && (this.disposeTimeout = (0,
            y.default)(function() {
                e.setState({
                    useAvailablePhase: !0
                })
            }, n, 3e4)),
            r.volatileBillboardsEnabled) {
                var i = this.props.expiryTime;
                if (i && i.timestamp < Date.now()) {
                    var o = O.default.getPaths(this.context.models, {}, {
                        videoPrefix: ["reference"]
                    }).concat(I(this.context.models).map(function(e) {
                        return e.slice(1)
                    }));
                    this.context.jsongDocument.bind(["locos", this.props.lolomoId]).call(["refreshListByContext"], [this.getId(), 0, w.default.LIST_CONTEXTS.BILLBOARD, null], o, []).subscribe(this.onScrollRefreshBB)
                }
            }
            m.default.on("myList:remove:end", this.onMyListChange),
            m.default.on("myList:add:end", this.onMyListChange)
        },
        componentWillUnmount: function() {
            h.BrowserScroll.removeEventListener("scroll", this.onScrollRefreshBB),
            m.default.removeListener("myList:remove:end", this.onMyListChange),
            m.default.removeListener("myList:add:end", this.onMyListChange),
            this.disposeTimeout && this.disposeTimeout()
        },
        getId: function() {
            return this.props.rowId
        },
        getRequestId: function() {
            return this.props.requestId
        },
        getTrackId: function() {
            return this.props.trackId
        },
        onScrollRefreshBB: function() {
            var e = this.props.billboardData
              , t = e && (e.ancestorId || e.id);
            t !== this.state.billboardVideoID && (_.scrollY > 1500 ? this.setState({
                billboardVideoID: t
            }) : h.BrowserScroll.addEventListener("scroll", this.monitorScroll))
        },
        monitorScroll: function() {
            if (_.scrollY > 1500) {
                var e = this.props.billboardData
                  , t = e && (e.ancestorId || e.id);
                h.BrowserScroll.removeEventListener("scroll", this.monitorScroll),
                this.setState({
                    billboardVideoID: t
                })
            }
        },
        record: function(e, t, n) {
            var r = t.impressionToken;
            e === g.RECORD_ACTION && (r = t.actionToken),
            (0,
            g.recordActionOrImpression)(r, this.context.jsongDocument, e, n)
        },
        recordAction: function(e, t) {
            this.record(g.RECORD_ACTION, e, t)
        },
        recordImpression: function(e, t) {
            this.record(g.RECORD_IMPRESSION, e, t)
        },
        shouldComponentUpdate: function(e, t) {
            var n = this.state;
            return t.useAvailablePhase !== n.useAvailablePhase || t.billboardVideoID !== n.billboardVideoID
        },
        onMyListChange: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._videoId === e.videoId && this.forceUpdate()
        },
        render: function() {
            var e = this.props
              , t = e.videoModel
              , n = e.isTop10
              , r = e.billboardData
              , i = e.forceStatic
              , o = e.puiBillboardModule
              , s = this.context.getModelData("truths")
              , u = this.state;
            if (!r)
                return (0,
                P.jsx)(b.default, {
                    className: "billboard-row-no-draw-height",
                    children: (0,
                    P.jsx)(C.default, {
                        rank: 0,
                        row: this.props.rowNum,
                        listId: this.getId(),
                        trackId: this.getTrackId()
                    })
                });
            var p = r && (r.ancestorId || r.id);
            this._videoId = p;
            var h = (0,
            c.default)(r, s)
              , v = f.BillboardHelpers.isMotionBillboardEnabled(i)
              , m = a.default.get(r, "assets.background.imageKey")
              , g = (0,
            l.default)({
                "billboard-row": !0
            })
              , y = {
                billboard: !0,
                "billboard-pane": !0,
                "episodic-billboard": d.BillboardType.isEpisodic(r),
                "billboard-originals": !0
            };
            return (0,
            P.jsx)("div", {
                className: g,
                role: "region",
                "aria-label": this.context.formatString(L),
                children: (0,
                P.jsx)(h, {
                    isTop10: n,
                    isMotionEnabled: v,
                    imageKey: m,
                    videoId: p,
                    videoModel: t,
                    billboardData: r,
                    trackId: this.getTrackId(),
                    billboardClasses: y,
                    hasScrolled: u.hasScrolled,
                    useAvailablePhase: u.useAvailablePhase,
                    truths: s,
                    puiBillboardModule: o,
                    setLolomoVisibility: this.setLolomoVisibility,
                    recordAction: this.recordAction,
                    recordImpression: this.recordImpression
                }, "bb-0")
            })
        }
    });
    t.BillboardRow = S
},