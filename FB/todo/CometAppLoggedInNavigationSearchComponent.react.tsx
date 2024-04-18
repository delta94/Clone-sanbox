d("CometAppLoggedInNavigationSearchComponent.react", ["CometPlaceholder.react", "LegacyHidden", "SearchCometGlobalTypeaheadGlimmer.react", "SearchCometGlobalTypeaheadWithBackButtonFocus.react", "deferredLoadComponent", "react", "requireDeferred", "stylex"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = c("deferredLoadComponent")(c("requireDeferred")("SearchCometGlobalTypeaheadDataSourceLoader.react"). ** setRef("CometAppLoggedInNavigationSearchComponent.react")),
        l = {
            layoutStartSearch: {
                boxSizing: "x9f619",
                height: "x1s65kcs",
                maxWidth: "x16xn7b0",
                position: "xixxii4",
                start: "x17qophe",
                left: null,
                right: null,
                top: "x13vifvy",
                width: "xj35x94",
                zIndex: "xhtitgo",
                $$css: !0
            },
            layoutStartSearchFocused: {
                width: "x1m258z3",
                zIndex: "xoegz02",
                $$css: !0
            },
            layoutStartSearchFocusedOnNotHome: {
                width: "x1cvmir6",
                $$css: !0
            },
            layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead: {
                cursor: "x1ypdohk",
                paddingStart: "xbbxn1n",
                paddingLeft: null,
                paddingRight: null,
                $$css: !0
            },
            layoutStartSearchInputInExpandedClosedAndBlurredTypeahead: {
                "@media (max-width: 1259px)_cursor": "x1xtgk1k",
                "@media (max-width: 1259px)_paddingStart": "x17hph69",
                "@media (max-width: 1259px)_paddingLeft": null,
                "@media (max-width: 1259px)_paddingRight": null,
                $$css: !0
            },
            layoutStartSearchOnHome: {
                "@media (min-width: 1260px)_width": "xmy5rp",
                $$css: !0
            },
            layoutStartSearchOnSearch: {
                "@media (min-width: 1260px)_width": "xkreb8t",
                $$css: !0
            },
            layoutStartSearchOpened: {
                backgroundColor: "x1jx94hy",
                $$css: !0
            },
            placeholder: {
                width: "x1useyqa",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.handleCloseSearch,
            d = a.handleOpenSearch,
            e = a.initialGlobalSearchQuery,
            f = a.inputMayBeExpanded,
            g = a.isHome,
            i = a.isSearchOpened,
            m = a.shouldHideGlobalTypeahead,
            n = a.showGlobalTypeaheadExpandedOutsideHome;
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("CometPlaceholder.react"), {
                fallback: null,
                children: j.jsx(k, {})
            }), j.jsx(c("CometPlaceholder.react"), {
                fallback: j.jsx(c("SearchCometGlobalTypeaheadGlimmer.react"), {
                    inputStartContent: j.jsx("div", {
                        className: "x1useyqa"
                    })
                }),
                children: j.jsx(c("SearchCometGlobalTypeaheadWithBackButtonFocus.react"), {
                    inputInClosedAndBlurredTypeaheadXStyle: f ? l.layoutStartSearchInputInExpandedClosedAndBlurredTypeahead : l.layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead,
                    onClose: b,
                    onOpen: d,
                    queryString: e,
                    children: function (a, b) {
                        return j.jsx(c("LegacyHidden"), {
                            htmlAttributes: {
                                "aria-hidden": m,
                                className: (h || (h = c("stylex")))(l.layoutStartSearch, (a || i) && l.layoutStartSearchFocused, (a || i) && !g && l.layoutStartSearchFocusedOnNotHome, g && l.layoutStartSearchOnHome, !1, (!!e || n) && l.layoutStartSearchOnSearch, i && l.layoutStartSearchOpened)
                            },
                            mode: m ? "hidden" : "visible",
                            children: b
                        })
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React from 'react';
import CometPlaceholder from 'CometPlaceholder.react';
import LegacyHidden from 'LegacyHidden'; 
import SearchCometGlobalTypeaheadGlimmer from 'SearchCometGlobalTypeaheadGlimmer.react';
import SearchCometGlobalTypeaheadWithBackButtonFocus from 'SearchCometGlobalTypeaheadWithBackButtonFocus.react';
import deferredLoadComponent from 'deferredLoadComponent';
import stylex from 'stylex';
import requireDeferred from 'requireDeferred'

const SearchCometGlobalTypeaheadDataSourceLoader = deferredLoadComponent(
  requireDeferred('SearchCometGlobalTypeaheadDataSourceLoader.react')
);

interface Props {
  handleCloseSearch: () => void;
  handleOpenSearch: () => void;
  initialGlobalSearchQuery?: string;
  inputMayBeExpanded: boolean;
  isHome: boolean;
  isSearchOpened: boolean;
  shouldHideGlobalTypeahead: boolean;
  showGlobalTypeaheadExpandedOutsideHome: boolean; 
}

const cssStyles = {
    layoutStartSearch: {
        boxSizing: "x9f619",
        height: "x1s65kcs",
        maxWidth: "x16xn7b0",
        position: "xixxii4",
        start: "x17qophe",
        left: null,
        right: null,
        top: "x13vifvy",
        width: "xj35x94",
        zIndex: "xhtitgo",
        $$css: !0
    },
    layoutStartSearchFocused: {
        width: "x1m258z3",
        zIndex: "xoegz02",
        $$css: !0
    },
    layoutStartSearchFocusedOnNotHome: {
        width: "x1cvmir6",
        $$css: !0
    },
    layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead: {
        cursor: "x1ypdohk",
        paddingStart: "xbbxn1n",
        paddingLeft: null,
        paddingRight: null,
        $$css: !0
    },
    layoutStartSearchInputInExpandedClosedAndBlurredTypeahead: {
        "@media (max-width: 1259px)_cursor": "x1xtgk1k",
        "@media (max-width: 1259px)_paddingStart": "x17hph69",
        "@media (max-width: 1259px)_paddingLeft": null,
        "@media (max-width: 1259px)_paddingRight": null,
        $$css: !0
    },
    layoutStartSearchOnHome: {
        "@media (min-width: 1260px)_width": "xmy5rp",
        $$css: !0
    },
    layoutStartSearchOnSearch: {
        "@media (min-width: 1260px)_width": "xkreb8t",
        $$css: !0
    },
    layoutStartSearchOpened: {
        backgroundColor: "x1jx94hy",
        $$css: !0
    },
    placeholder: {
        width: "x1useyqa",
        $$css: !0
    }
}

const CometAppLoggedInNavigationSearchComponent = (props: Props) => {

  const { 
    handleCloseSearch,
    handleOpenSearch,
    initialGlobalSearchQuery,
    inputMayBeExpanded,
    isHome,
    isSearchOpened,
    shouldHideGlobalTypeahead,
    showGlobalTypeaheadExpandedOutsideHome
  } = props;
  
  return (
    <>
      <CometPlaceholder fallback={null}>
        <SearchCometGlobalTypeaheadDataSourceLoader />
      </CometPlaceholder>

      <CometPlaceholder
        fallback={
          <SearchCometGlobalTypeaheadGlimmer
            inputStartContent={<div className={cssStyles.placeholder} />} 
          />
        }
      >
        <SearchCometGlobalTypeaheadWithBackButtonFocus
          inputInClosedAndBlurredTypeaheadXStyle={inputMayBeExpanded ? 
            cssStyles.layoutStartSearchInputInExpandedClosedAndBlurredTypeahead :
            cssStyles.layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead}
          onClose={handleCloseSearch}
          onOpen={handleOpenSearch}
          queryString={initialGlobalSearchQuery}
        >
          {(isOpen, child) => (
            <LegacyHidden
              aria-hidden={shouldHideGlobalTypeahead}
              className={stylex(
                cssStyles.layoutStartSearch,
                (isOpen || isSearchOpened) && cssStyles.layoutStartSearchFocused,
                (isOpen || isSearchOpened) && !isHome && cssStyles.layoutStartSearchFocusedOnNotHome,
                isHome && cssStyles.layoutStartSearchOnHome,
                !!initialGlobalSearchQuery || showGlobalTypeaheadExpandedOutsideHome && cssStyles.layoutStartSearchOnSearch,
                isSearchOpened && cssStyles.layoutStartSearchOpened
              )}
              mode={shouldHideGlobalTypeahead ? 'hidden' : 'visible'}
            >
              {child}
            </LegacyHidden>
          )}
        </SearchCometGlobalTypeaheadWithBackButtonFocus>
      </CometPlaceholder>
    </>
  );
}

export default CometAppLoggedInNavigationSearchComponent;