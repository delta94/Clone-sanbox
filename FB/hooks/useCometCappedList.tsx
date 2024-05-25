__d("useCometCappedList", ["FBLogger", "emptyFunction", "forEachObject", "justknobx", "react", "useDebouncedComet"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useDeferredValue,
        k = b.useEffect,
        l = b.useInsertionEffect,
        m = b.useMemo,
        n = b.useRef,
        o = b.useState,
        p = 1e3;

    function a(a, b, d, e, f) {
        e === void 0 && (e = c("justknobx")._("1013"));
        f === void 0 && (f = 5);
        var g = o(new Set()),
            h = g[0],
            w = g[1],
            x = j(h),
            y = n({}),
            z = n(a),
            A = c("useDebouncedComet")(i(function () {
                y.current = q({
                    cappedListInfo: y.current,
                    dontUnmountItemsNearOnScreenOnes: f,
                    fullList: z.current,
                    getItemID: d,
                    maxLength: b,
                    minOffscreenDurationBeforeUnmount: e
                }), w(s(x, y.current))
            }, [x, f, d, b, e]), {
                wait: p
            }),
            B = i(function () {
                A()
            }, [A]),
            C = n([]);
        g = o({});
        var D = g[0],
            E = g[1],
            F = i(function (a, b, c) {
                if (c && t(y.current, a) == null) {
                    C.current.push({
                        id: a,
                        isOnScreen: b
                    });
                    E({});
                    return
                }
                y.current = u(y.current, a, b);
                B()
            }, [B]),
            G = i(function (a, b) {
                b === void 0 && (b = !0), F(a, !1, b)
            }, [F]),
            H = i(function (a, b) {
                b === void 0 && (b = !0), F(a, !0, b)
            }, [F]),
            I = i(function () {
                z.current = a, y.current = r(d, y.current, a)
            }, [a, d]);
        l(function () {
            I()
        }, [I]);
        k(function () {
            var a = C.current;
            if (D && a.length) {
                c("FBLogger")("comet_performance.memory", "useCometCappedList").mustfix("Processing %s manual visibility updates although it shouldn't happen: %s", a.length, JSON.stringify(a));
                I();
                var b = a.length;
                a.forEach(function (a) {
                    var b = a.id;
                    a = a.isOnScreen;
                    a ? H(b, !1) : G(b, !1)
                });
                a.splice(0, b)
            }
        }, [D, G, H, I]);
        var J = i(function (a, b) {
            return v(y.current, a, b)
        }, []);
        return m(function () {
            return b > 0 ? {
                cappedItemIDs: x,
                onItemOffScreen: G,
                onItemOnScreen: H,
                registerBlocker: J
            } : null
        }, [x, b, G, H, J])
    }

    function q(a) {
        var b = a.cappedListInfo,
            d = a.dontUnmountItemsNearOnScreenOnes,
            e = a.fullList,
            f = a.getItemID,
            g = a.maxLength;
        a = a.minOffscreenDurationBeforeUnmount;
        if (g <= 0) return b;
        var h = new Set();
        e = e.map(function (a) {
            a = f(a);
            var c = t(b, a);
            if (c == null) {
                h.add(a);
                return null
            }
            return {
                id: a,
                info: c
            }
        }).filter(Boolean).filter(function (a) {
            return !a.info.isCapped
        });
        if (h.size > 0) {
            c("FBLogger")("comet_performance.memory", "useCometCappedList").mustfix("Unable to apply capping rules because we couldn't find info for items: %s", JSON.stringify(Array.from(h)));
            return b
        }
        var i = Date.now();
        g = e.length - g;
        var j = e.findIndex(function (a) {
            a = a.info;
            return a.isOnScreen
        });
        if (j < 0) return b;
        var k;
        for (var l = 0; g > 0 && l < e.length; l++) {
            var m = e[l],
                n = m.id;
            m = m.info;
            if (l + d >= j) break;
            if (m.lastTimeVisible != null && i - m.lastTimeVisible <= a) break;
            if (m.blockers && m.blockers.size > 0) break;
            if (m.isOnScreen === !0) break;
            k == null && (k = babelHelpers["extends"]({}, b));
            Object.prototype.hasOwnProperty.call(k, n) || c("FBLogger")("comet_performance.memory", "newsfeed").mustfix("Unable to find capped item context data for id=%s, this should never happen", JSON.stringify(n));
            k[n] = babelHelpers["extends"]({}, m, {
                isCapped: !0
            });
            g--
        }
        return k || b
    }

    function r(a, b, c) {
        var d;
        c.forEach(function (c) {
            c = a(c);
            Object.prototype.hasOwnProperty.call(b, c) || (d == null && (d = babelHelpers["extends"]({}, b)), d[c] = {
                blockers: null,
                isCapped: !1,
                isOnScreen: null,
                lastTimeVisible: null
            })
        });
        return d || b
    }

    function s(a, b) {
        var d = null;
        c("forEachObject")(b, function (b, c) {
            b.isCapped && !a.has(c) && (d == null && (d = new Set(a)), d.add(c))
        });
        return d || a
    }

    function t(a, b, d) {
        d === void 0 && (d = !1);
        a = a[b];
        if (d && a == null) {
            c("FBLogger")("comet_performance.memory", "useCometCappedList").mustfix("Unable to find capped item info [id=%s]", JSON.stringify(b));
            return
        }
        return a
    }

    function u(a, b, d) {
        var e = t(a, b);
        if (e == null) {
            c("FBLogger")("comet_performance.memory", "useCometCappedList").warn("Unable to set visibility [isOnScreen=%s] for item [id=%s]", d, JSON.stringify(b));
            return a
        }
        e = babelHelpers["extends"]({}, e, {
            isOnScreen: d,
            lastTimeVisible: Date.now()
        });
        return babelHelpers["extends"]({}, a, (d = {}, d[b] = e, d))
    }

    function v(a, b, d) {
        var e = t(a, b, !0);
        if (e == null) return c("emptyFunction");
        e.blockers ? e.blockers.add(d) : e.blockers = new Set([d]);
        return function () {
            var e, f = t(a, b, !0);
            if (f && ((e = f.blockers) == null ? void 0 : e["delete"](d))) {
                ((e = f.blockers) == null ? void 0 : e.size) === 0 && (f.blockers = null)
            } else c("FBLogger")("comet_performance.memory", "useCometCappedList").mustfix("Unable to delete capped-item blocker [id=%s][blocker=%s]", JSON.stringify(b), JSON.stringify(d))
        }
    }
    g["default"] = a
}), 98);


import { FBLogger, emptyFunction, forEachObject, justknobx, react, useDebouncedComet } from 'FBImportedModules';

const {
  useCallback,
  useDeferredValue,
  useEffect,
  useInsertionEffect,
  useMemo,
  useRef,
  useState,
} = react;

const DEBOUNCE_WAIT = 1000;

interface CappedListResult {
  cappedItemIDs: Set<string>;
  onItemOffScreen: (id: string, isNew?: boolean) => void;
  onItemOnScreen: (id: string, isNew?: boolean) => void;
  registerBlocker: (id: string, blocker: any) => (() => void);
}

interface CappedListInfo {
  [id: string]: {
    blockers: Set<any> | null;
    isCapped: boolean;
    isOnScreen: boolean | null;
    lastTimeVisible: number | null;
  };
}

function useCometCappedList<T>(
  fullList: T[],
  maxLength: number,
  getItemID: (item: T) => string,
  minOffscreenDurationBeforeUnmount: number = justknobx._("1013"),
  dontUnmountItemsNearOnScreenOnes: number = 5
): CappedListResult | null {
  const [cappedItemIDsSet, setCappedItemIDsSet] = useState<Set<string>>(new Set());
  const cappedItemIDs = useDeferredValue(cappedItemIDsSet);
  const cappedListInfoRef = useRef<CappedListInfo>({});
  const fullListRef = useRef(fullList);

  const debouncedUpdateCappedList = useDebouncedComet(
    useCallback(() => {
      cappedListInfoRef.current = updateCappedListInfo({
        cappedListInfo: cappedListInfoRef.current,
        dontUnmountItemsNearOnScreenOnes,
        fullList: fullListRef.current,
        getItemID,
        maxLength,
        minOffscreenDurationBeforeUnmount,
      });
      setCappedItemIDsSet(getCappedItemIDs(cappedItemIDs, cappedListInfoRef.current));
    }, [cappedItemIDs, dontUnmountItemsNearOnScreenOnes, getItemID, maxLength, minOffscreenDurationBeforeUnmount]),
    { wait: DEBOUNCE_WAIT }
  );

  const updateCappedList = useCallback(() => {
    debouncedUpdateCappedList();
  }, [debouncedUpdateCappedList]);

  const manualVisibilityUpdatesRef = useRef<{ id: string; isOnScreen: boolean }[]>([]);

  const [, forceUpdate] = useState({});

  const setItemVisibility = useCallback(
    (id: string, isOnScreen: boolean, isNew: boolean = true) => {
      if (isNew && getCappedItemInfo(cappedListInfoRef.current, id) == null) {
        manualVisibilityUpdatesRef.current.push({ id, isOnScreen });
        forceUpdate({});
        return;
      }
      cappedListInfoRef.current = updateCappedItemVisibility(cappedListInfoRef.current, id, isOnScreen);
      updateCappedList();
    },
    [updateCappedList]
  );

  const onItemOffScreen = useCallback(
    (id: string, isNew: boolean = true) => {
      setItemVisibility(id, false, isNew);
    },
    [setItemVisibility]
  );

  const onItemOnScreen = useCallback(
    (id: string, isNew: boolean = true) => {
      setItemVisibility(id, true, isNew);
    },
    [setItemVisibility]
  );

  const updateFullList = useCallback(() => {
    fullListRef.current = fullList;
    cappedListInfoRef.current = initializeCappedListInfo(getItemID, cappedListInfoRef.current, fullList);
  }, [fullList, getItemID]);

  useInsertionEffect(() => {
    updateFullList();
  }, [updateFullList]);

  useEffect(() => {
    const manualVisibilityUpdates = manualVisibilityUpdatesRef.current;
    if (forceUpdate && manualVisibilityUpdates.length) {
      FBLogger('comet_performance.memory', 'useCometCappedList').mustfix(
        'Processing %s manual visibility updates although it shouldn\'t happen: %s',
        manualVisibilityUpdates.length,
        JSON.stringify(manualVisibilityUpdates)
      );
      updateFullList();
      const length = manualVisibilityUpdates.length;
      manualVisibilityUpdates.forEach(({ id, isOnScreen }) => {
        isOnScreen ? onItemOnScreen(id, false) : onItemOffScreen(id, false);
      });
      manualVisibilityUpdates.splice(0, length);
    }
  }, [forceUpdate, onItemOffScreen, onItemOnScreen, updateFullList]);

  const registerBlocker = useCallback(
    (id: string, blocker: any) => {
      return addBlocker(cappedListInfoRef.current, id, blocker);
    },
    []
  );

  return useMemo(() => {
    return maxLength > 0
      ? {
          cappedItemIDs,
          onItemOffScreen,
          onItemOnScreen,
          registerBlocker,
        }
      : null;
  }, [cappedItemIDs, maxLength, onItemOffScreen, onItemOnScreen, registerBlocker]);
}

function updateCappedListInfo({
  cappedListInfo,
  dontUnmountItemsNearOnScreenOnes,
  fullList,
  getItemID,
  maxLength,
  minOffscreenDurationBeforeUnmount,
}: {
  cappedListInfo: CappedListInfo;
  dontUnmountItemsNearOnScreenOnes: number;
  fullList: any[];
  getItemID: (item: any) => string;
  maxLength: number;
  minOffscreenDurationBeforeUnmount: number;
}): CappedListInfo {
  if (maxLength <= 0) return cappedListInfo;

  const missingItemIDs = new Set<string>();

  const listWithInfo = fullList
    .map((item) => {
      const id = getItemID(item);
      const info = getCappedItemInfo(cappedListInfo, id);
      if (info == null) {
        missingItemIDs.add(id);
        return null;
      }
      return { id, info };
    })
    .filter(Boolean)
    .filter((item) => !item?.info.isCapped);

  if (missingItemIDs.size > 0) {
    FBLogger('comet_performance.memory', 'useCometCappedList').mustfix(
      'Unable to apply capping rules because we couldn\'t find info for items: %s',
      JSON.stringify(Array.from(missingItemIDs))
    );
    return cappedListInfo;
  }

  const now = Date.now();
  let itemsToRemove = listWithInfo.length - maxLength;
  const onScreenItemIndex = listWithInfo.findIndex((item) => item?.info.isOnScreen ?? false);
  if (onScreenItemIndex < 0) return cappedListInfo;

  let newCappedListInfo: CappedListInfo | null = null;
  for (let i = 0; itemsToRemove > 0 && i < listWithInfo.length; i++) {
    const itemInfo = listWithInfo[i];
    if (!itemInfo) continue;

    const { id, info } = itemInfo;
    if (i + dontUnmountItemsNearOnScreenOnes >= onScreenItemIndex) break;
    if (info.lastTimeVisible != null && now - info.lastTimeVisible <= minOffscreenDurationBeforeUnmount) break;
    if (info.blockers && info.blockers.size > 0) break;
    if (info.isOnScreen === true) break;

    if (newCappedListInfo == null) {
      newCappedListInfo = { ...cappedListInfo };
    }
    if (!Object.prototype.hasOwnProperty.call(newCappedListInfo, id)) {
      FBLogger('comet_performance.memory', 'newsfeed').mustfix(
        'Unable to find capped item context data for id=%s, this should never happen',
        JSON.stringify(id)
      );
    } else {
      newCappedListInfo[id] = { ...info, isCapped: true };
    }
    itemsToRemove--;
  }

  return newCappedListInfo || cappedListInfo;
}

function initializeCappedListInfo<T>(
  getItemID: (item: T) => string,
  cappedListInfo: CappedListInfo,
  fullList: T[]
): CappedListInfo {
  let newCappedListInfo: CappedListInfo | null = null;
  fullList.forEach((item) => {
    const id = getItemID(item);
    if (!Object.prototype.hasOwnProperty.call(cappedListInfo, id)) {
      if (newCappedListInfo == null) {
        newCappedListInfo = { ...cappedListInfo };
      }
      newCappedListInfo[id] = {
        blockers: null,
        isCapped: false,
        isOnScreen: null,
        lastTimeVisible: null,
      };
    }
  });
  return newCappedListInfo || cappedListInfo;
}

function getCappedItemIDs(cappedItemIDs: Set<string>, cappedListInfo: CappedListInfo): Set<string> | null {
  let newCappedItemIDs: Set<string> | null = null;
  forEachObject(cappedListInfo, (info, id) => {
    if (info.isCapped && !cappedItemIDs.has(id)) {
      if (newCappedItemIDs == null) {
        newCappedItemIDs = new Set(cappedItemIDs);
      }
      newCappedItemIDs.add(id);
    }
  });
  return newCappedItemIDs || cappedItemIDs;
}

function getCappedItemInfo(cappedListInfo: CappedListInfo, id: string, shouldLogError: boolean = false): CappedListInfo[string] | null {
  const info = cappedListInfo[id];
  if (shouldLogError && info == null) {
    FBLogger('comet_performance.memory', 'useCometCappedList').mustfix('Unable to find capped item info [id=%s]', JSON.stringify(id));
  }
  return info;
}

function updateCappedItemVisibility(cappedListInfo: CappedListInfo, id: string, isOnScreen: boolean): CappedListInfo {
  const info = getCappedItemInfo(cappedListInfo, id);
  if (info == null) {
    FBLogger('comet_performance.memory', 'useCometCappedList').warn(
      'Unable to set visibility [isOnScreen=%s] for item [id=%s]',
      isOnScreen,
      JSON.stringify(id)
    );
    return cappedListInfo;
  }
  const updatedInfo = {
    ...info,
    isOnScreen,
    lastTimeVisible: Date.now(),
  };
  return {
    ...cappedListInfo,
    [id]: updatedInfo,
  };
}

function addBlocker(cappedListInfo: CappedListInfo, id: string, blocker: any): () => void {
  const info = getCappedItemInfo(cappedListInfo, id, true);
  if (info == null) return emptyFunction;

  if (info.blockers) {
    info.blockers.add(blocker);
  } else {
    info.blockers = new Set([blocker]);
  }

  return () => {
    const updatedInfo = getCappedItemInfo(cappedListInfo, id, true);
    if (updatedInfo && updatedInfo.blockers?.delete(blocker)) {
      if (updatedInfo.blockers?.size === 0) {
        updatedInfo.blockers = null;
      }
    } else {
      FBLogger('comet_performance.memory', 'useCometCappedList').mustfix(
        'Unable to delete capped-item blocker [id=%s][blocker=%s]',
        JSON.stringify(id),
        JSON.stringify(blocker)
      );
    }
  };
}

export default useCometCappedList;

