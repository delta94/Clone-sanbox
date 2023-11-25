__d("ix", ["invariant"], (function (a, b, c, d, e, f, g, h) {
    var i = {},
        j = new Set();

    function b(a) {
        var b = i[a];
        !b && h(0, 11798, a);
        return b
    }
    b.add = function (a, b) {
        var c = !1;
        for (c in a) b && b.entry++, !(c in i) ? (a[c].loggingID = c, i[c] = a[c]) : b && b.dup_entry++
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
        a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
        return Array.from(j)
    };
    b.getAllPaths = function () {
        var a = new Set();
        Object.values(i).map(function (a) {
            if ((a == null ? void 0 : a.sprited) === 0) return a.uri;
            else if ((a == null ? void 0 : a.sprited) === 1) return a._spi;
            else if ((a == null ? void 0 : a.sprited) === 2) return a.spi
        }).forEach(function (b) {
            return b != null && a.add(b)
        });
        return a
    };
    g["default"] = b
}), 98);



// ix.ts

import invariant from 'invariant';

interface Asset {
  uri?: string;
  _spi?: string; 
  spi?: string;
  sprited?: 0 | 1 | 2;
  loggingID?: string; 
}

interface FlightExecutionMode {
    __flight_execution_mode_DO_NOT_USE: 'flight';
  }

const assets: Record<string, Asset> = {};

const usedPaths = new Set<string>();

declare const __flight: FlightExecutionMode;


export default function ix(assetID: string) {
  const asset = assets[assetID];
  invariant(asset, `Asset not found: ${assetID}`);
  return asset;
}

ix.add = (assetsToAdd: Record<string, Asset>, stats?) => {
  for (const id in assetsToAdd) {
    if (stats) stats.entry++;
    if (!(id in assets)) {
      assetsToAdd[id].loggingID = id;
      assets[id] = assetsToAdd[id];
    } else if (stats) {
      stats.dup_entry++;
    }
  }
};


ix.getUsedPaths_ONLY_FOR_REACT_FLIGHT = () => {
    if (__flight.__flight_execution_mode_DO_NOT_USE === 'flight') {
        return Array.from(usedPaths);
    } else {
        invariant(false, 'Method only usable during React Flight');
    }
}; 

ix.getAllPaths = () => {
  const allPaths = new Set();
  Object.values(assets).map(asset => {
    if (asset?.sprited === 0) return asset.uri;
    else if (asset?.sprited === 1) return asset._spi;
    else if (asset?.sprited === 2) return asset.spi;
  })
  .forEach(path => {
    if (path != null) allPaths.add(path); 
  });

  return allPaths;
}