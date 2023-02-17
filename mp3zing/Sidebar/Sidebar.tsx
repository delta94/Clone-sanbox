import React from "react"

const Sidebar = React.memo(({ layoutRef }) => {
    const [isExpanded, setExpanded] = React.useState(false);
    const isMobile = useMedia();
    const openModal = useSelector(state => state.layout.openModal);
    const windowWidth = useWindowWidth();
    const sidebarRef = React.useRef(null);
    const siteMap = useSelector(state => state.siteMap);
    const [isScrolling, setScrolling] = React.useState(false);
  
    const handleExpand = React.useCallback(() => {
      setExpanded(!isExpanded);
    }, [isExpanded]);
  
    React.useEffect(() => {
      if (windowWidth < 1024) {
        setExpanded(false);
      }
    }, [windowWidth]);
  
    React.useEffect(() => {
      setExpanded(false);
    }, [openModal]);
  
    const renderSections = React.useCallback((sections = [], bottom = false) => {
      if (siteMap) {
        return sections.map((section, index) => (
          <React.Fragment key={`${section.sectionId}-${index}`}>
            {renderSection(section, layoutRef)}
          </React.Fragment>
        ));
      } else if (!bottom) {
        return <LoadingIndicator />;
      } else {
        return null;
      }
    }, [siteMap, layoutRef]);
  
    const handleScroll = React.useCallback(({ currentTarget }) => {
      const scrollTop = currentTarget.scrollTop;
      setScrolling(scrollTop > 0);
    }, []);
  
    return (
      <L.Wrapper className={`zm-sidebar-wrapper ${isExpanded ? 'is-expanded' : ''}`} domRef={sidebarRef}>
        <Header />
        {renderSections(siteMap ? siteMap.primary : null)}
        <J.Scrollbar
          autoHide
          showOnHover
          autoHideTimeout={1000}
          autoHideDuration={200}
          onScroll={handleScroll}
          className={classNames('zm-sidebar-scrollbar', { 'is-mark': isScrolling })}
        >
          {renderSections(siteMap ? siteMap.secondary : null)}
        </J.Scrollbar>
        {renderSections(siteMap ? siteMap.bottom : null, true)}
        <D.Button
          className="btn-expanded"
          onClick={handleExpand}
        >
          <Q.Icon icon={`go-${isExpanded ? 'left' : 'right'}`} />
        </D.Button>
      </L.Wrapper>
    );
  });

//   var co = Object(r.memo)((function(e) {
//     var t = e.layoutRef
//       , n = Object(It.a)()
//       , a = Object(s.c)(Ht.j)
//       , o = Object(s.c)(Ht.i)
//       , u = Object(r.useState)(!1)
//       , c = Object(Xt.a)(u, 2)
//       , l = c[0]
//       , f = c[1]
//       , d = Object(Qr.a)().width
//       , h = Object(r.useRef)(null)
//       , p = Object(s.c)(Ut.j)
//       , m = Object(r.useState)(!1)
//       , g = Object(Xt.a)(m, 2)
//       , v = g[0]
//       , b = g[1]
//       , y = Object(r.useCallback)((function() {
//         f(!l)
//     }
//     ), [l]);
//     Object(Qt.r)([h], (function(e) {
//         !e && d < 1024 && f(!1)
//     }
//     )),
//     Object(r.useEffect)((function() {
//         d < 1024 && f(!1)
//     }
//     ), [d]),
//     Object(r.useEffect)((function() {
//         f(!1)
//     }
//     ), [n]);
//     var E = Object(r.useCallback)((function() {
//         var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
//           , n = arguments.length > 1 ? arguments[1] : void 0;
//         return p ? e.map((function(e, n) {
//             return i.a.createElement(r.Fragment, {
//                 key: "".concat(e.sectionId, "-").concat(n)
//             }, io(e, a, o, t))
//         }
//         )) : n ? i.a.createElement(i.a.Fragment, null) : i.a.createElement(uo, null)
//     }
//     ), [p, a, o])
//       , w = Object(r.useCallback)((function(e) {
//         var t = e.currentTarget.scrollTop;
//         b(t > 0)
//     }
//     ), []);
//     return i.a.createElement(xt.L, {
//         className: l ? "is-expanded" : "",
//         domRef: h
//     }, i.a.createElement(xt.l, {
//         className: "zm-sidebar-wrapper"
//     }, i.a.createElement($r, {
//         layoutRef: t
//     }), E(null === p || void 0 === p ? void 0 : p.primary), i.a.createElement(xt.J, {
//         autoHide: !0,
//         showOnHover: !0,
//         autoHideTimeout: 1e3,
//         autoHideDuration: 200,
//         onScroll: w,
//         className: Tt()("zm-sidebar-scrollbar", {
//             "is-mark": v
//         })
//     }, E(null === p || void 0 === p ? void 0 : p.secondary)), E(null === p || void 0 === p ? void 0 : p.bottom, !0)), i.a.createElement(xt.d, {
//         className: "btn-expanded",
//         onClick: y
//     }, i.a.createElement(xt.q, {
//         icon: "go-".concat(l ? "left" : "right")
//     })))
// }