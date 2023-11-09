(self.webpackChunkagoda_webpack_clientside_webpack5 = self.webpackChunkagoda_webpack_clientside_webpack5 || []).push([[1117], {
    24774: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var i = n(67294)
          , a = n(57356)
          , o = function(e) {
            return i.createElement("svg", e, i.createElement("path", {
                d: "M8.515 12l9.192 9.192a1 1 0 1 1-1.414 1.415l-9.9-9.9a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 1.415L8.515 12z"
            }))
        };
        o.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        };
        var r = i.memo((function(e) {
            return i.createElement(a.S, e, i.createElement(o, {
                width: "1em",
                height: "1em"
            }))
        }
        ));
        r.displayName = "ControlThinArrowLeftBoldIcon"
    },
    74817: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var i = n(67294)
          , a = n(57356)
          , o = function(e) {
            return i.createElement("svg", e, i.createElement("path", {
                d: "M15.485 12L6.293 2.808a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.415L15.485 12z"
            }))
        };
        o.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
        };
        var r = i.memo((function(e) {
            return i.createElement(a.S, e, i.createElement(o, {
                width: "1em",
                height: "1em"
            }))
        }
        ));
        r.displayName = "ControlThinArrowRightBoldIcon"
    },
    4360: function() {},
    67810: function() {},
    91117: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            TopDestinationRail: function() {
                return Z
            },
            default: function() {
                return O
            }
        });
        var i, a = n(70655), o = n(67294), r = n(79697), s = n(90993), l = n(35781), c = n(74817), m = n(24774), p = n(29862), u = n(71798), d = n(53504), h = n(39623), y = n(56057);
        !function(e) {
            e.shouldDisplayTopDestinationItem = function(e) {
                return !(0,
                r.Z)(e) && e.cityId > 0 && !(0,
                r.Z)(e.cityName) && !(0,
                r.Z)(e.cityUrl) && !(0,
                r.Z)(e.imageUrl)
            }
        }(i || (i = {}));
        var g = n(93379)
          , f = n.n(g)
          , E = n(7795)
          , x = n.n(E)
          , D = n(90569)
          , b = n.n(D)
          , T = n(3565)
          , w = n.n(T)
          , v = n(19216)
          , C = n.n(v)
          , L = n(44589)
          , S = n.n(L)
          , I = n(4360)
          , N = n.n(I)
          , k = {};
        k.styleTagTransform = S(),
        k.setAttributes = w(),
        k.insert = b().bind(null, "head"),
        k.domAPI = x(),
        k.insertStyleElement = C();
        f()(N(), k),
        N() && N().locals && N().locals;
        var B = function(e) {
            return i.shouldDisplayTopDestinationItem(e) && o.createElement("div", {
                className: "TopDestinationItem",
                "data-element-name": "top-destination-city-item",
                "data-element-type": e.type.toString().toLowerCase(),
                "data-element-index": e.cityId
            }, e.showTopDomesticDestinationsByUserOrigin ? o.createElement(s.Box, {
                clone: !0,
                display: "flex",
                flexDirection: "column",
                pt: "L",
                pb: "L",
                mx: "L"
            }, o.createElement(s.Link, {
                href: e.travelGuideUrl || e.cityUrl,
                textDecoration: "none",
                activeTextDecoration: "none",
                target: e.target
            }, o.createElement(s.Box, {
                clone: !0,
                "data-element-name": "top-destination-city-image",
                style: {
                    margin: "0 auto"
                }
            }, o.createElement("img", {
                alt: "",
                className: "TopDestinationItem__Image",
                src: e.imageUrl
            })), o.createElement("span", {
                className: "TopDestinationItem__City"
            }, e.cityName), o.createElement(s.Box, {
                clone: !0,
                display: "block",
                textAlign: "center",
                pt: "XS"
            }, o.createElement(s.Span, {
                textSize: "S",
                color: 500
            }, e.accommodationText)))) : o.createElement(s.Box, {
                clone: !0,
                display: "inline-block",
                ml: (0,
                y.t6)() ? "NONE" : "L",
                mr: (0,
                y.t6)() ? "L" : "NONE",
                pt: "L",
                pb: "L"
            }, o.createElement(s.Link, {
                href: e.travelGuideUrl || e.cityUrl,
                textDecoration: "none",
                activeTextDecoration: "none",
                target: e.target
            }, o.createElement("img", {
                alt: "",
                className: "TopDestinationItem__Image",
                src: e.imageUrl
            }), o.createElement("span", {
                className: "TopDestinationItem__City"
            }, e.cityName), o.createElement(s.Box, {
                clone: !0,
                display: "block",
                textAlign: "center",
                pt: "XS"
            }, o.createElement(s.Span, {
                textSize: "S",
                color: 500
            }, e.accommodationText)))))
        }
          , _ = n(67810)
          , A = n.n(_)
          , U = {};
        U.styleTagTransform = S(),
        U.setAttributes = w(),
        U.insert = b().bind(null, "head"),
        U.domAPI = x(),
        U.insertStyleElement = C();
        f()(A(), U),
        A() && A().locals && A().locals;
        var Z = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.onGetCitiesCallback = function(e) {
                    (0,
                    r.Z)(e) || n.setState({
                        isFetchDataSuccess: !0,
                        domesticCountry: e.domesticCountry,
                        domesticCities: n.props.type === d.x.Domestic && e.topDomesticDestinations,
                        internationalCities: n.props.type === d.x.International && e.topDestinations
                    })
                }
                ,
                n.getComponentName = function() {
                    return "TopDestinationRail-" + n.props.type.toString()
                }
                ,
                n.renderArrowButton = function(e) {
                    return o.createElement(s.Link, null, o.createElement(s.Box, {
                        width: "32px",
                        height: "32px",
                        radius: "L",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: {
                            color: "primary",
                            variant: "bordered"
                        }
                    }, e ? o.createElement(c.Z, {
                        size: "M"
                    }) : o.createElement(m.Z, {
                        size: "M"
                    })))
                }
                ,
                n.renderTopDestinationItems = function() {
                    var e = u.O.mapTopDestinationItems(n.props, n.state)
                      , t = "top-" + n.props.type.toString().toLowerCase() + "-destinations";
                    return e && e.map((function(e, n) {
                        return o.createElement(B, (0,
                        a.pi)({}, e, {
                            key: t + "-" + n
                        }))
                    }
                    ))
                }
                ,
                n.renderCarousel = function() {
                    return o.createElement(l.Carousel, {
                        accessibilityLabel: u.O.getTitle(n.props, n.state),
                        accessibilityPreviousNavLabel: n.props.cms.PreviousButtonAccessibilityLabel,
                        accessibilityNextNavLabel: n.props.cms.NextButtonAccessibilityLabel
                    }, n.renderTopDestinationItems())
                }
                ,
                n.state = u.O.mapTopDestinationRailInitState(),
                n
            }
            return (0,
            a.ZT)(t, e),
            t.prototype.componentDidMount = function() {
                this.state.isFetchDataSuccess || (0,
                h.dy)(this.props.type, this.props.endpoint, this.props.numberOfItems, this.onGetCitiesCallback)
            }
            ,
            t.prototype.componentDidUpdate = function() {
                (0,
                p.T2)(this.getComponentName())
            }
            ,
            t.prototype.render = function() {
                return this.state.isFetchDataSuccess ? u.O.shouldDisplayTopDestinationRail(this.props, this.state) && o.createElement("div", {
                    className: "TopDestinationRailStandard",
                    "data-selenium": this.getComponentName().toLowerCase(),
                    "data-element-name": "top-destination-cities",
                    "data-element-type": this.props.type.toString().toLowerCase()
                }, o.createElement(s.Box, {
                    clone: !0,
                    display: "block",
                    textAlign: "center",
                    pb: "S"
                }, o.createElement(s.Span, {
                    textSize: "XXL",
                    color: 800,
                    strong: !0
                }, u.O.getTitle(this.props, this.state))), this.renderCarousel()) : null
            }
            ,
            t
        }(o.Component)
          , O = Z
    }
}]);
