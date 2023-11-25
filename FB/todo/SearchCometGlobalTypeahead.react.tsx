__d("SearchCometGlobalTypeahead.react", ["fbt", "BaseTypeahead.react", "CometErrorBoundary.react", "CometTypeaheadErrorFallback.react", "FBLogger", "QPLUserFlow", "QPLUtils", "SearchCometGlobalTypeaheadInputStrategy.react", "SearchCometGlobalTypeaheadLayoutContextualStrategy.react", "SearchCometInterestsDeepDiveExperiments", "SearchCometInterestsDeepDiveUtil", "SearchCometTypeaheadLoggingContextProvider", "XCometSearchResultsControllerRouteBuilder", "emptyFunction", "qex", "qpl", "react", "requireDeferred", "searchCometGlobalTypeahead.config", "unrecoverableViolation", "useCometSearchTypeaheadTraceProvider", "useCometTypeaheadNavigate", "useCometTypeaheadStateQueryString", "useSearchCometGlobalTypeaheadCompositeDataSource", "useSearchCometGlobalTypeaheadNullStateDataSource", "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry", "useSearchCometGlobalTypeaheadViewStrategy", "useSearchCometHashtagRouteUrlBuilder", "useSearchCometResultsURLBuilder", "useSearchCometTypeaheadBootstrapValidation", "useSearchCometTypeaheadLoggingProvider", "useSearchCometTypeaheadRecentDataSourceContextDecorator", "useStable", "withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", "withSearchCometGlobalTypeaheadFocusKeyboardShortcut", "withSearchCometTypeaheadBaseNavigationDecorator", "withSearchCometTypeaheadSERPWarmCallDecorator", "withSearchCometTypeaheadTraceEndReasonDecorator"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useEffect,
        n = b.useMemo,
        o = b.useRef,
        p = c("requireDeferred")("ODS").__setRef("SearchCometGlobalTypeahead.react");

    function a(a) {
        var b = a.autoOpen;
        b = b === void 0 ? !1 : b;
        var e = a.inputXStyle,
            f = a.onClose,
            g = a.onEscape,
            i = a.onFocus,
            r = a.onHeaderActionPress,
            s = a.onPressEntry,
            t = a.onSelectFreeformQuery,
            u = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["autoOpen", "inputXStyle", "onClose", "onEscape", "onFocus", "onHeaderActionPress", "onPressEntry", "onSelectFreeformQuery", "queryString"]);
        u = c("useCometTypeaheadStateQueryString")(u);
        var v = u[0];
        u = u[1];
        var w = c("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry")(),
            x = c("useSearchCometResultsURLBuilder")({
                routeBuilder: c("XCometSearchResultsControllerRouteBuilder")
            }),
            y = c("useSearchCometHashtagRouteUrlBuilder")(),
            z = c("useCometTypeaheadNavigate")({
                tapPoint: "tap_search_bar"
            }),
            A = o(!1),
            B = c("useSearchCometGlobalTypeaheadNullStateDataSource")(),
            C = c("useSearchCometGlobalTypeaheadCompositeDataSource")({
                config: c("searchCometGlobalTypeahead.config"),
                recentDataSource: B
            }),
            D = C.getBootstrapKeywordsDataSource();
        if (D == null) throw c("unrecoverableViolation")("Bootstrap datasource is missing", "search");
        B = c("useSearchCometTypeaheadBootstrapValidation")({
            bootstrapDatasource: D
        });
        var E = B.validate,
            F = k(function (a) {
                var b = a.reason,
                    e = a.sessionID;
                a = a.shownEntries;
                E(a);
                b === "success" ? c("QPLUserFlow").endSuccess(c("qpl")._(195636649, "5429"), {
                    instanceKey: d("QPLUtils").deriveInstanceKey(e)
                }) : b === "abandon" && c("QPLUserFlow").endCancel(c("qpl")._(195636649, "5429"), {
                    instanceKey: d("QPLUtils").deriveInstanceKey(e)
                })
            }, [E]);
        B = l(d("SearchCometTypeaheadLoggingContextProvider").CometLoggingProviderContext);
        var G = B.logger,
            H = B.onSessionStart,
            I = B.setSessionEndCallback;
        B = B.traceProvider;
        var J = G;
        B = B;
        var K = c("useSearchCometTypeaheadLoggingProvider")({
            context: "search_global",
            onSessionEnd: F
        });
        G = c("useCometSearchTypeaheadTraceProvider")(G || K);
        m(function () {
            I(F)
        }, [I, F]);
        if (J == null) {
            J = K;
            p.onReady(function (a) {
                a.bumpEntityKey(354, "typeahead.missing_logger_context", "focused")
            });
            throw c("FBLogger")("search").mustfix("Typeahead used without logger in context")
        }
        if (B == null) {
            B = G;
            throw c("FBLogger")("search").mustfix("Typeahead used without traceProvider in context")
        }
        var L = c("useSearchCometTypeaheadRecentDataSourceContextDecorator")(C, !1);
        K = n(function () {
            return [L, {
                decorate: c("withSearchCometGlobalTypeaheadFocusKeyboardShortcut")
            }].filter(Boolean)
        }, [L]);
        m(function () {
            C.bootstrap()
        }, [C]);
        G = k(function () {
            var a;
            a = (a = c("qex")._("869")) != null ? a : !1;
            a && !A.current && D.bootstrap();
            A.current = !0;
            H();
            i && i()
        }, [D, H, i]);
        var M = k(function (a) {
                var b, c = a.metaData;
                c = c == null ? void 0 : c.markers;
                var d = c != null && c.has("entity");
                c = c != null && c.has("direct_nav");
                b = w({
                    entry: a,
                    queryString: v,
                    typeaheadSessionID: (b = J) == null ? void 0 : b.getSessionID()
                });
                b = q(a, b, d, c);
                z(b);
                s == null ? void 0 : s(a)
            }, [J, z, s, v, w]),
            N = k(function (a) {
                var b = d("SearchCometInterestsDeepDiveUtil").getHashtagTag(a);
                if (d("SearchCometInterestsDeepDiveExperiments").hasTypeaheadRedirection() && b != null) {
                    b = y({
                        entryPointAction: "SEARCH_BOX",
                        exploreEntryPoint: v === "" ? 3 : 4,
                        hashtag: b,
                        typeaheadSessionID: (b = J) == null ? void 0 : b.getSessionID()
                    })
                } else {
                    var c;
                    b = x({
                        entryPointAction: "SEARCH_BOX",
                        query: a,
                        typeaheadSessionID: (c = J) == null ? void 0 : c.getSessionID()
                    })
                }
                z(b);
                t == null ? void 0 : t(a)
            }, [y, J, z, t, v, x]),
            O = k(function () {
                C.clearQueryCache(), f && f()
            }, [C, f]),
            P = c("useStable")(function () {
                var a;
                return ((a = c("withSearchCometTypeaheadSERPWarmCallDecorator")) != null ? a : c("emptyFunction").thatReturnsArgument)(c("withSearchCometTypeaheadTraceEndReasonDecorator")(c("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection")(c("withSearchCometTypeaheadBaseNavigationDecorator")(c("BaseTypeahead.react")))))
            }),
            Q = h._("__JHASH___9EIWdQL4U5__JHASH__"),
            R = v === "";
        R = R ? "grid" : "listbox";
        return j.jsx(c("CometErrorBoundary.react"), {
            fallback: function () {
                return j.jsx(c("CometTypeaheadErrorFallback.react"), {})
            },
            children: j.jsx(P, babelHelpers["extends"]({}, a, {
                autoOpen: b,
                dataSource: C,
                decorators: K,
                inputEndContent: a.inputEndContent,
                inputExtraProps: {
                    hideIconOnFocus: !0,
                    size: "large",
                    xstyle: e
                },
                inputStartContent: a.inputStartContent,
                inputStrategyRenderer: c("SearchCometGlobalTypeaheadInputStrategy.react"),
                label: h._("__JHASH__oTSOcwn1bTU__JHASH__"),
                layoutStrategyRenderer: c("SearchCometGlobalTypeaheadLayoutContextualStrategy.react"),
                loggingProvider: J,
                onChange: u,
                onClose: O,
                onEscape: g,
                onFocus: G,
                onPressEntry: M,
                onSelectFreeformQuery: N,
                placeholder: Q,
                queryString: v,
                testid: void 0,
                traceProvider: B,
                viewRole: R,
                viewStrategyRenderer: c("useSearchCometGlobalTypeaheadViewStrategy")({
                    onHeaderActionPress: r
                })
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function q(a, b, c, d) {
        var e = a.rawData,
            f;
        if (e != null && a.subtype === "recent" && c) {
            f = e == null ? void 0 : (c = e.profile) == null ? void 0 : c.url
        }
        if (e != null && (a.subtype === "keyword" || a.subtype === "bootstrap" || a.subtype === "recent") && d) {
            f = e == null ? void 0 : (c = e.structuredInfo) == null ? void 0 : (a = c.direct_nav_result) == null ? void 0 : a.link_url
        }
        return (d = f) != null ? d : b
    }
    g["default"] = a
}), 98); /*FB_PKG_DELIM*/


import React, { 
    useCallback, 
    useContext, 
    useEffect, 
    useMemo, 
    useRef,
    ReactNode
} from 'react';
import { CometErrorBoundary, CometTypeaheadErrorFallback } from 'CometErrorBoundary.react';
import { BaseTypeahead } from 'BaseTypeahead.react';
import { FBLogger, unrecoverableViolation } from 'FBLogger';
import { QPLUserFlow, QPLUtils } from 'QPLUtils';
import { qpl, qex } from 'qpl';
import { requireDeferred } from 'requireDeferred';
import { searchCometGlobalTypeaheadConfig } from 'searchCometGlobalTypeahead.config';
import { useCometSearchTypeaheadTraceProvider } from 'useCometSearchTypeaheadTraceProvider';
import { useCometTypeaheadNavigate } from 'useCometTypeaheadNavigate'; 
import { useCometTypeaheadStateQueryString } from 'useCometTypeaheadStateQueryString';
import { useSearchCometGlobalTypeaheadCompositeDataSource } from 'useSearchCometGlobalTypeaheadCompositeDataSource';
import { useSearchCometGlobalTypeaheadNullStateDataSource } from 'useSearchCometGlobalTypeaheadNullStateDataSource';
import { useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry } from 'useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry';
import { useSearchCometGlobalTypeaheadViewStrategy } from 'useSearchCometGlobalTypeaheadViewStrategy';
import { useSearchCometHashtagRouteUrlBuilder } from 'useSearchCometHashtagRouteUrlBuilder';
import { useSearchCometResultsURLBuilder } from 'useSearchCometResultsURLBuilder';
import { useSearchCometTypeaheadBootstrapValidation } from 'useSearchCometTypeaheadBootstrapValidation'; 
import { useSearchCometTypeaheadLoggingProvider } from 'useSearchCometTypeaheadLoggingProvider';
import { useSearchCometTypeaheadRecentDataSourceContextDecorator } from 'useSearchCometTypeaheadRecentDataSourceContextDecorator';
import { useStable } from 'useStable';
import { withSearchCometGlobalTypeaheadCleanStateOnEntrySelection } from 'withSearchCometGlobalTypeaheadCleanStateOnEntrySelection';
import { withSearchCometGlobalTypeaheadFocusKeyboardShortcut } from 'withSearchCometGlobalTypeaheadFocusKeyboardShortcut';
import { withSearchCometTypeaheadBaseNavigationDecorator } from 'withSearchCometTypeaheadBaseNavigationDecorator';
import { withSearchCometTypeaheadSERPWarmCallDecorator } from 'withSearchCometTypeaheadSERPWarmCallDecorator';
import { withSearchCometTypeaheadTraceEndReasonDecorator } from 'withSearchCometTypeaheadTraceEndReasonDecorator';
import { XCometSearchResultsControllerRouteBuilder } from 'XCometSearchResultsControllerRouteBuilder';  
import { emptyFunction } from 'emptyFunction';
import { SearchCometGlobalTypeaheadInputStrategy } from 'SearchCometGlobalTypeaheadInputStrategy.react';
import { SearchCometGlobalTypeaheadLayoutContextualStrategy } from 'SearchCometGlobalTypeaheadLayoutContextualStrategy.react';
import { SearchCometTypeaheadLoggingContextProvider } from 'SearchCometTypeaheadLoggingContextProvider';
import { SearchCometInterestsDeepDiveExperiments } from 'SearchCometInterestsDeepDiveExperiments';
import { SearchCometInterestsDeepDiveUtil } from 'SearchCometInterestsDeepDiveUtil';
  

interface EntryMetaData {
    markers?: Set<string>; 
}
  
export interface TypeaheadTraceProvider {
    trace: (traceName: string, traceArgs: any) => void;
}

export interface BaseTypeaheadEntry {
    id: string;
    rawData?: any;
    subtitle?: string;
    title: string;
    type?: string;
    photo?: string;
    metaData?: EntryMetaData;
    traceProvider: TypeaheadTraceProvider;
    subtype?:
      | 'keyword'
      | 'recent'
      | 'bootstrap'
      | 'hashtag'
      | 'interest'
      | 'group'
      | 'page'
      | 'user';
}


interface Props {
    autoOpen?: boolean;
    inputXStyle?: React.CSSProperties;
    
    onClose?: () => void;
    onEscape?: () => void;  
    onFocus?: () => void;
    onHeaderActionPress?: () => void;
    onPressEntry?: (entry: BaseTypeaheadEntry) => void;
    onSelectFreeformQuery?: (query: string) => void;
    queryString?: string;
    inputEndContent?: ReactNode;
    inputStartContent?: ReactNode;
}

interface UrlBuilderParams {
    entry: BaseTypeaheadEntry;
    queryString: string;
    typeaheadSessionID: string | undefined;
}

type EndCallback = (data: {
    reason: 'success' | 'abandon';
    sessionID: string;
    shownEntries: BaseTypeaheadEntry[]; 
}) => void;


function getFinalURL(entry: BaseTypeaheadEntry, url: string, isEntity: boolean, isDirectNav: boolean) {
    const { rawData } = entry;
    let finalURL = url;
    
    if (rawData != null) {
      if (entry.subtype === 'recent' && isEntity) {
        const profile = rawData?.profile;
        finalURL = profile?.url;
      }
  
      if (
        (entry.subtype === 'keyword' || 
         entry.subtype === 'bootstrap' ||
         entry.subtype === 'recent') &&  
         isDirectNav
      ) {
        const structuredInfo = rawData?.structuredInfo; 
        const directNavResult = structuredInfo?.direct_nav_result;
        finalURL = directNavResult?.link_url;  
      }
    }
  
    return finalURL ?? url;
}

const ODS = requireDeferred('ODS').__setRef('SearchCometGlobalTypeahead.react');

  
  const SearchCometGlobalTypeahead = (props: Props) => {
  
    const {
        autoOpen = false,
        inputXStyle,
        onClose,
        onEscape,
        onFocus,
        onHeaderActionPress,
        onPressEntry,
        onSelectFreeformQuery,
        queryString,
    } = props;
  
    const [query, setQuery] = useCometTypeaheadStateQueryString(queryString);
  
    const urlBuilderForKeywordEntry = useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry();
    const resultsURLBuilder = useSearchCometResultsURLBuilder({
        routeBuilder: XCometSearchResultsControllerRouteBuilder
      });
    const hashtagURLBuilder = useSearchCometHashtagRouteUrlBuilder();

    const navigate = useCometTypeaheadNavigate({
        tapPoint: 'tap_search_bar'
    });

    const hasOpenedRef = useRef(false);

    const nullStateDataSource = useSearchCometGlobalTypeaheadNullStateDataSource();
    const dataSource = useSearchCometGlobalTypeaheadCompositeDataSource({ 
        config: searchCometGlobalTypeaheadConfig,
        recentDataSource: nullStateDataSource
    });

    const bootstrapDatasource = dataSource.getBootstrapKeywordsDataSource();
    if (bootstrapDatasource == null) {
      throw unrecoverableViolation(
        'Bootstrap datasource is missing',
        'search'
      );
    }
    

    const { validate } = useSearchCometTypeaheadBootstrapValidation({
        bootstrapDatasource: bootstrapDatasource  
    });

    const onSessionEnd: EndCallback = useCallback((data) => {
        const { reason, sessionID, shownEntries } = data;
      
        validate(shownEntries);
      
        if (reason === 'success') {
            QPLUserFlow.endSuccess(
                qpl._(195636649, '5429'), 
                {instanceKey: QPLUtils.deriveInstanceKey(sessionID)}
            );
        } else if (reason === 'abandon') {
            QPLUserFlow.endCancel(
                qpl._(195636649, '5429'), 
                {instanceKey: QPLUtils.deriveInstanceKey(sessionID)}  
            );
        }
    }, [validate]);

    const {
        logger,
        traceProvider,  
        onSessionStart,
        setSessionEndCallback
    } = useContext(SearchCometTypeaheadLoggingContextProvider.CometLoggingProviderContext);

    let concreteLogger = logger;
    let concreteTraceProvider = traceProvider;

    const loggingProvider = useSearchCometTypeaheadLoggingProvider({
        context: 'search_global',
        onSessionEnd    
    });

    concreteTraceProvider = useCometSearchTypeaheadTraceProvider(
        concreteLogger || loggingProvider
    );

    useEffect(() => {
        setSessionEndCallback(onSessionEnd); 
    }, [setSessionEndCallback, onSessionEnd]);


    if (concreteLogger == null) {
        concreteLogger = loggingProvider;
      
        ODS.onReady(clientODS => {
            clientODS.bumpEntityKey(
              354, 
              'typeahead.missing_logger_context', 
              'focused'
            );
        });

        throw FBLogger('search').mustfix('Typeahead used without logger in context');
    }
      
    if (concreteTraceProvider == null) {
        concreteTraceProvider = concreteTraceProvider;
        
        throw FBLogger('search').mustfix('Typeahead used without traceProvider in context');
    }

    const recentDecoratedDataSource = useSearchCometTypeaheadRecentDataSourceContextDecorator(
        dataSource, 
        false
    );

    const decorators = useMemo(() => {
        return [
            recentDecoratedDataSource, 
            { decorate: withSearchCometGlobalTypeaheadFocusKeyboardShortcut }, 
        ].filter(Boolean);
    }, [recentDecoratedDataSource]);

    useEffect(() => {
        dataSource.bootstrap();
    }, [dataSource]);

    const onOpen = useCallback(() => {
        const autoBootstrapOnFocus = qex._('869') ?? false;

        if (autoBootstrapOnFocus && !hasOpenedRef.current) {
            bootstrapDatasource.bootstrap();
        }
      
        hasOpenedRef.current = true;
        
        onFocus && onFocus();

      
    }, [onFocus, onSessionStart, bootstrapDatasource]);

    const onPressEntryHandler = useCallback((entry: BaseTypeaheadEntry) => {
        const { metaData, ...rest } = entry

        const directNav = metaData?.markers?.has('direct_nav') ?? false;
        const entityNav = metaData?.markers?.has('entity') ?? false;
         
        const url = urlBuilderForKeywordEntry({
          entry,
          queryString,
          typeaheadSessionID: concreteLogger?.getSessionID(),
        });
      
        const finalURL = getFinalURL(entry, url, entityNav, directNav); 
      
        navigate(finalURL);
        onPressEntry?.(entry);
      
    }, [concreteLogger, navigate, onPressEntry, query, urlBuilderForKeywordEntry]);
  
    const onSelectFreeformQueryHandler = useCallback(
        query => {
          const hashtag = SearchCometInterestsDeepDiveUtil.getHashtagTag(query);
    
          if (
            SearchCometInterestsDeepDiveExperiments.hasTypeaheadRedirection() && 
            hashtag != null
          ) {
            const url = hashtagURLBuilder({
              entryPointAction: 'SEARCH_BOX',
              exploreEntryPoint: query === '' ? 3 : 4,  
              hashtag,
              typeaheadSessionID: concreteLogger?.getSessionID()
            });
            navigate(url);
          } else {
            const url = resultsURLBuilder({
              entryPointAction: 'SEARCH_BOX',  
              query,
              typeaheadSessionID: concreteLogger?.getSessionID()
            });
            navigate(url);
          }
    
          onSelectFreeformQuery?.(query);
        },
        [hashtagURLBuilder, navigate, onSelectFreeformQuery, query, resultsURLBuilder, concreteLogger] 
    );

    const onCloseHandler = useCallback(() => {
        dataSource.clearQueryCache();
        onClose && onClose();
    }, [dataSource, onClose]);

    const EnhancedTypeahead = useStable(() => {
        const decorator = 
          withSearchCometTypeaheadSERPWarmCallDecorator ??
          emptyFunction.thatReturnsArgument;
          
        return decorator(
          withSearchCometTypeaheadTraceEndReasonDecorator(
            withSearchCometGlobalTypeaheadCleanStateOnEntrySelection(
              withSearchCometTypeaheadBaseNavigationDecorator(
                BaseTypeahead
              )
            )  
          )
        );
    });

    const viewRole = query === '' ? 'grid' : 'listbox';


    return (
      <CometErrorBoundary fallback={<CometTypeaheadErrorFallback />}>
        <EnhancedTypeahead
            {...props}
            autoOpen={autoOpen}
            dataSource={dataSource}
            decorators={decorators} 
            inputEndContent={props.inputEndContent}
            inputExtraProps={{
              hideIconOnFocus: true,
              size: 'large',
              xstyle: inputXStyle  
            }}
            inputStartContent={props.inputStartContent}
            inputStrategyRenderer={SearchCometGlobalTypeaheadInputStrategy} 
            label="Search Facebook"
            layoutStrategyRenderer={SearchCometGlobalTypeaheadLayoutContextualStrategy}
            loggingProvider={concreteLogger}
            onChange={setQuery}
            onClose={onCloseHandler}
            onEscape={onEscape} 
            onFocus={onOpen}
            onPressEntry={onPressEntryHandler}
            onSelectFreeformQuery={onSelectFreeformQueryHandler}
            placeholder="Search Facebook"
            queryString={query}
            testid={undefined}
            traceProvider={concreteTraceProvider}  
            viewRole={viewRole}
            viewStrategyRenderer={useSearchCometGlobalTypeaheadViewStrategy({
              onHeaderActionPress    
            })}
        />
      </CometErrorBoundary>
    );
  };
  
  export default SearchCometGlobalTypeahead;