__d("useSearchCometTypeaheadCompositeDataSource", ["BaseDataEntryLabelKeyBuilder", "CometRelay", "CometSearchBootstrapKeywordsDataSource", "CometSearchKeywordDataSource", "Promise", "cometSearchTypeaheadDecorateMixedPayload", "cometSearchTypeaheadDecorateRecentPayload", "cometSearchTypeaheadSTSDedupeCachedEntries", "cometSearchTypeaheadSTSDedupeEntries", "qex", "react", "searchCometTypeaheadPushErrorToast"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    e = i || d("react");
    var j = e.useCallback,
        k = e.useMemo;

    function a(a) {
        var e = a.config,
            f = e.dataSources,
            g = f.bootstrapKeywordsDataSourceParams,
            i = f.keywordDataSourceParams,
            l = e.logging.sessionContext;
        f = e.view;
        var m = f.renderLimit,
            n = f.sectionLimits,
            o = a.recentDataSource,
            p = a.searchScopeEntityID,
            q = d("CometRelay").useRelayEnvironment(),
            r = k(function () {
                return g != null ? new(c("CometSearchBootstrapKeywordsDataSource"))(babelHelpers["extends"]({}, g, {
                    limit: m,
                    relayEnvironment: q
                })) : null
            }, [g, m, q]),
            s = k(function () {
                return new(c("CometSearchKeywordDataSource"))(babelHelpers["extends"]({}, i, {
                    dedupe: c("cometSearchTypeaheadSTSDedupeCachedEntries"),
                    limit: m,
                    onError: function () {
                        return c("searchCometTypeaheadPushErrorToast")()
                    },
                    relayEnvironment: q
                }))
            }, [i, m, q]),
            t = j(function (a) {
                var b = a.entries;
                a = a.params;
                return c("cometSearchTypeaheadDecorateMixedPayload")({
                    entries: b,
                    params: a
                }, {
                    keyBuilder: c("BaseDataEntryLabelKeyBuilder"),
                    limit: m
                })
            }, [m]),
            u = j(function (a, b) {
                return c("cometSearchTypeaheadSTSDedupeEntries")(a, b, "bootstrap_and_backend_merge")
            }, []),
            v = j(function () {
                var a;
                a = (a = c("qex")._("869")) != null ? a : !1;
                a || (r == null ? void 0 : r.bootstrap());
                o == null ? void 0 : o.bootstrap()
            }, [r, o]),
            w = j(function (a, b) {
                if (o == null) return;
                if (p == null) {
                    o.add(a, l, b);
                    return
                }
                var c = a.key,
                    d = a.label,
                    e = a.metaData;
                a = a.rawData;
                e = {
                    logging: {
                        searchScopeEntityID: p
                    },
                    markers: e.markers
                };
                c = {
                    key: c,
                    label: d,
                    metaData: e,
                    rawData: a,
                    subtype: "recent",
                    type: "entry"
                };
                o.add(c, l, b)
            }, [l, o, p]),
            x = j(function (a) {
                var b = a.query;
                if (b === "" && o != null) {
                    var d = o.fetchCache(a),
                        e = d.entries;
                    d = d.params;
                    return c("cometSearchTypeaheadDecorateRecentPayload")({
                        entries: e,
                        params: d
                    }, {
                        getSectionLimitKey: function (a) {
                            return a.type === "section" ? a.subtype : null
                        },
                        limit: m,
                        sectionLimits: n
                    })
                }
                if (b === "") return {
                    entries: [],
                    params: a
                };
                if (r == null) {
                    e = s.fetchCache(a);
                    return t(babelHelpers["extends"]({}, e))
                }
                d = r.fetchCache(a);
                b = d.entries;
                e = d.params;
                if (b.length >= m) return t({
                    entries: b,
                    params: e
                });
                d = s.fetchCache(a);
                e = d.entries;
                a = d.params;
                d = u(b, e);
                return t({
                    entries: d,
                    params: a
                })
            }, [r, t, u, s, m, o, n]),
            y = j(function (a) {
                var d = a.query;
                if (d === "" && o != null) return o.fetchNetwork(a).then(function (a) {
                    return c("cometSearchTypeaheadDecorateRecentPayload")({
                        entries: a.entries,
                        params: a.params
                    }, {
                        getSectionLimitKey: function (a) {
                            return a.type === "section" ? a.subtype : null
                        },
                        limit: m,
                        sectionLimits: n
                    })
                });
                if (d === "") return (h || (h = b("Promise"))).resolve({
                    entries: [],
                    params: a
                });
                return r == null ? s.fetchNetwork(a).then(function (a) {
                    return t(babelHelpers["extends"]({}, a))
                }) : s.fetchNetwork(a).then(function (b) {
                    var c = r.fetchCache(a);
                    c = c.entries;
                    var d = b.entries;
                    b = b.params;
                    c = u(c, d);
                    return t({
                        entries: c,
                        params: b
                    })
                })
            }, [r, t, u, s, m, o, n]),
            z = j(function (a, b) {
                o != null && o.remove(a, b)
            }, [o]);
        return k(function () {
            return {
                addRecentEntry: w,
                bootstrap: v,
                clearQueryCache: function () {
                    return s.clearQueryCache()
                },
                clearRecentSearches: function () {
                    return o == null ? void 0 : o.clear()
                },
                fetchCache: x,
                fetchNetwork: y,
                getBootstrapKeywordsDataSource: function () {
                    return r
                },
                refreshRecentSearches: function () {
                    return o == null ? void 0 : o.refresh()
                },
                removeRecentEntry: z
            }
        }, [r, w, v, x, y, z, s, o])
    }
    g["default"] = a
}), 98);


// useSearchCometTypeaheadCompositeDataSource.ts

import { useCallback, useMemo } from 'react';

import BaseDataEntryLabelKeyBuilder from './BaseDataEntryLabelKeyBuilder';
import CometRelay from '../todo/CometRelay';
import CometSearchBootstrapKeywordsDataSource from './CometSearchBootstrapKeywordsDataSource'; 
import CometSearchKeywordDataSource from './CometSearchKeywordDataSource';
import cometSearchTypeaheadDecorateMixedPayload from './cometSearchTypeaheadDecorateMixedPayload';
import cometSearchTypeaheadDecorateRecentPayload from './cometSearchTypeaheadDecorateRecentPayload';
import cometSearchTypeaheadSTSDedupeCachedEntries from './cometSearchTypeaheadSTSDedupeCachedEntries';
import cometSearchTypeaheadSTSDedupeEntries from './cometSearchTypeaheadSTSDedupeEntries';  
import qex from './qex';
import searchCometTypeaheadPushErrorToast from '../todo/searchCometTypeaheadPushErrorToast';


interface FetchCacheResult {
    entries: object[];
    params: object;
}

interface FetchNetworkResult {
    entries: object[];
    params: object; 
}

interface Params {
  config: {
    dataSources: {
      bootstrapKeywordsDataSourceParams?: object;
      keywordDataSourceParams: object;
    };
    logging: {
      sessionContext: string; 
    };
    view: {
      renderLimit: number;
      sectionLimits: Record<string, number>;
    };
  };
  recentDataSource?: RecentDataSource; 
  searchScopeEntityID?: string;
}

interface RecentDataSource {
    add: (entry: object, context: string, queryID: string) => void;
    bootstrap: () => void;
    clear: () => void;
    fetchCache: (params: object) => FetchCacheResult;
    fetchNetwork: (params: object) => Promise<FetchNetworkResult>;
    refresh: () => void;
    remove: (key: string, queryID: string) => void; 
}

export default function useSearchCometTypeaheadCompositeDataSource(params: Params) {

  const {
    config,
    recentDataSource, 
    searchScopeEntityID   
  } = params;

  const {
    dataSources,
    logging,
    view  
  } = config;

  const {
    bootstrapKeywordsDataSourceParams,
    keywordDataSourceParams
  } = dataSources;

  const {
    renderLimit,
    sectionLimits    
  } = view;

  const sessionContext = logging.sessionContext;

  const relayEnvironment = CometRelay.useRelayEnvironment(); 


  const bootstrapDataSource = useMemo(() => {
    if (bootstrapKeywordsDataSourceParams != null) {
      return new CometSearchBootstrapKeywordsDataSource({
        ...bootstrapKeywordsDataSourceParams,
        limit: renderLimit,
        relayEnvironment,
      });
    }
    return null;
  }, [bootstrapKeywordsDataSourceParams, renderLimit, relayEnvironment]);

  const keywordDataSource = useMemo(() => {
    return new CometSearchKeywordDataSource({
      ...keywordDataSourceParams,
      dedupe: cometSearchTypeaheadSTSDedupeCachedEntries,
      limit: renderLimit,
      onError: () => searchCometTypeaheadPushErrorToast(),
      relayEnvironment,
    });
  }, [keywordDataSourceParams, renderLimit, relayEnvironment]);

  const decorateMixedPayload = useCallback((payload: FetchCacheResult) => {
    return cometSearchTypeaheadDecorateMixedPayload(payload, {
      keyBuilder: BaseDataEntryLabelKeyBuilder,
      limit: renderLimit,
    });
  }, [renderLimit]);

  const dedupeEntries = useCallback((entriesA: object[], entriesB: object[]) => {
    return cometSearchTypeaheadSTSDedupeEntries(entriesA, entriesB, 'bootstrap_and_backend_merge');
  }, []);

  const bootstrapRecent = useCallback(() => {
    const isExp869Enabled = qex.isExperimentEnabled(869);

    isExp869Enabled || bootstrapDataSource?.bootstrap();
    recentDataSource?.bootstrap();
  }, [bootstrapDataSource, recentDataSource]);

  const addRecentEntry = useCallback((entry, queryID) => {
    if (!recentDataSource) return;

    if (!searchScopeEntityID) {
        recentDataSource.add(entry, sessionContext, queryID);
        return;
    }
  
    const {key, label, metaData, rawData} = entry;
  
    const recentEntry = {
      key, 
      label,
      metaData: {
        ...metaData,
        logging: {searchScopeEntityID}, 
      },
      rawData,
      subtype: 'recent',
      type: 'entry'
    };
  
    recentDataSource.add(recentEntry, sessionContext, queryID);
  
  }, [recentDataSource, searchScopeEntityID]);


  const fetchCache = useCallback((fetchParams) => {

  const { query } = fetchParams;

  if (query === '' && recentDataSource) {
    const cache = recentDataSource.fetchCache(fetchParams);
    const { entries, params } = cache;

    return cometSearchTypeaheadDecorateRecentPayload({entries, params}, {
      getSectionLimitKey: section => section.type === 'section' ? section.subtype : null,
      limit: renderLimit,
      sectionLimits  
    });

  }

  if (query === '') {
    return { entries: [], params }; 
  }

  if (!bootstrapDataSource) {
    const cache = keywordDataSource.fetchCache(params);
    return decorateMixedPayload({...cache});
  }

  const bootstrapCache = bootstrapDataSource.fetchCache(params);
  const { entries: bootstrapEntries, params: bootstrapParams } = bootstrapCache;

  if (bootstrapEntries.length >= renderLimit) {
    return decorateMixedPayload({entries: bootstrapEntries, params: bootstrapParams});
  }

  const keywordCache = keywordDataSource.fetchCache(params);
  const { entries: keywordEntries, params: keywordParams } = keywordCache;

  const dedupedEntries = dedupeEntries(bootstrapEntries, keywordEntries);
  return decorateMixedPayload({entries: dedupedEntries, params: keywordParams});

}, [bootstrapDataSource, decorateMixedPayload, dedupeEntries, renderLimit, recentDataSource, sectionLimits])


const removeRecentEntry = useCallback((key, queryID) => {
    recentDataSource?.remove(key, queryID)
}, [recentDataSource])


const fetchNetwork = useCallback(async (params) => {

    const { query } = params;
  
    if (query === '' && recentDataSource) {
      const result = await recentDataSource.fetchNetwork(params);
      
      return cometSearchTypeaheadDecorateRecentPayload(result, {
        getSectionLimitKey: section => section.type === 'section' ? section.subtype : null,  
        limit: renderLimit,
        sectionLimits,
      });
    }
  
    if (query === '') {
      return Promise.resolve({entries: [], params});
    }
  
    if (!bootstrapDataSource) {
      const result = await keywordDataSource.fetchNetwork(params);
      return decorateMixedPayload({...result});
    }
  
    const bootstrapCache = bootstrapDataSource.fetchCache(params);
  
    const keywordResult = await keywordDataSource.fetchNetwork(params);
    const { entries: keywordEntries, params: keywordParams } = keywordResult;
  
    const dedupedEntries = dedupeEntries(bootstrapCache.entries, keywordEntries);
  
    return decorateMixedPayload({entries: dedupedEntries, params: keywordParams});
  
  }, [bootstrapDataSource, decorateMixedPayload, dedupeEntries, renderLimit, recentDataSource, sectionLimits])

   return useMemo(() => {
    return {
      addRecentEntry,

      bootstrap: bootstrapRecent,

      clearQueryCache: () => {
        return keywordDataSource.clearQueryCache();
      },

      fetchCache,

      fetchNetwork,

      getBootstrapKeywordsDataSource: bootstrapDataSource,

      refreshRecentSearches: () => {
        return recentDataSource?.refresh()
      },

      removeRecentEntry
    };
},[keywordDataSource, bootstrapDataSource, decorateMixedPayload, dedupeEntries, recentDataSource, searchScopeEntityID])

}