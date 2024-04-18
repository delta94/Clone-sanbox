__d("CometSSRForceHydrationContainer.react", ["CometSSRContentInjector", "ReactDOMComet", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useEffect,
        k = b.useState,
        l = i.createContext(0);

    function a(a) {
        a = a.children;
        var b = k(0),
            c = b[0],
            e = b[1];
        j(function () {
            d("CometSSRContentInjector").onForceHydration(function () {
                d("ReactDOMComet").flushSync(function () {
                    e(1)
                })
            })
        }, []);
        return i.jsx(l.Provider, {
            value: c,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);


import React, { useEffect, useState } from 'react';
import { CometSSRContentInjector } from 'CometSSRContentInjector';
import { ReactDOMComet } from 'ReactDOMComet';

interface CometSSRForceHydrationContainerProps {
  children: React.ReactNode;
}

const HydrationContext = React.createContext(0);

export default function CometSSRForceHydrationContainer({
  children  
}: CometSSRForceHydrationContainerProps) {

  const [hydrationCount, setHydrationCount] = useState(0);

  useEffect(() => {
    CometSSRContentInjector.onForceHydration(() => {
        ReactDOMComet.flushSync(() => {
        setHydrationCount(1);
      });
    });
  }, []);

  return (
    <HydrationContext.Provider value={hydrationCount}>
      {children}
    </HydrationContext.Provider>
  );
}