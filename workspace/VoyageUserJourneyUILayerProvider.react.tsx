__d("VoyageUserJourneyUILayerProvider.react", ["VoyageUserJourneyUILayerContext", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useLayoutEffect,
        k = b.useMemo,
        l = b.useRef;

    function a(a) {
        var b = a.children,
            c = a.metadata,
            e = a.name,
            f = l(c),
            g = l(e);
        j(function () {
            f.current = c, g.current = e
        }, [c, e]);
        var h = d("VoyageUserJourneyUILayerContext").useVoyageUILayerContext();
        a = k(function () {
            return {
                get: function () {
                    return [].concat(h.get(), [{
                        name: g.current,
                        metadata: f.current
                    }])
                }
            }
        }, [h]);
        return i.jsx(d("VoyageUserJourneyUILayerContext").VoyageUILayerContext.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);

import React, { ReactNode, useMemo, useRef, useLayoutEffect, useMemo } from 'react';
import { VoyageUILayerContext, useVoyageUILayerContext } from 'VoyageUserJourneyUILayerContext'; // Replace 'VoyageUserJourneyUILayerContext' with the correct path

interface VoyageUserJourneyUILayerProviderProps {
  children: ReactNode;
  metadata: any; // Replace 'any' with the specific type for metadata
  name: string;
}

const VoyageUserJourneyUILayerProvider: React.FC<VoyageUserJourneyUILayerProviderProps> = ({
  children,
  metadata,
  name,
}: VoyageUserJourneyUILayerProviderProps) => {
  const metadataRef = useRef(metadata);
  const nameRef = useRef(name);

  useLayoutEffect(() => {
    metadataRef.current = metadata;
    nameRef.current = name;
  }, [metadata, name]);

  const voyageUILayerContext = useVoyageUILayerContext();

  const value = useMemo(() => {
    return {
      get: () => {
        return [...voyageUILayerContext.get(), { name: nameRef.current, metadata: metadataRef.current }];
      },
    };
  }, [voyageUILayerContext]);

  return (
    <VoyageUILayerContext.Provider value={value}>
      {children}
    </VoyageUILayerContext.Provider>
  );
};

VoyageUserJourneyUILayerProvider.displayName = `${VoyageUserJourneyUILayerProvider.name} [from ${f.id}]`;

export default VoyageUserJourneyUILayerProvider;
