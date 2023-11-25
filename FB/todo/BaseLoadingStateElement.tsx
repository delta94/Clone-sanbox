__d("BaseLoadingStateElement.react", ["getLoadingStateAriaProps", "mergeRefs", "react", "stylex", "useCometLoadingStateTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useContext
      , l = b.useMemo
      , m = {
        hideOutline: {
            outline: "x1a2a7pz",
            $$css: !0
        }
    }
      , n = j.createContext(!1);
    function a(a, b) {
        var d = a.children
          , e = a.disableLoadingStateTracker
          , f = e === void 0 ? !1 : e;
        e = a.isFocusTarget;
        var g = a.progress
          , i = a.style
          , o = a.testid;
        o = a.xstyle;
        a = k(n);
        var p = c("useCometLoadingStateTracker")()
          , q = p[0]
          , r = p[1];
        p = l(function() {
            return f ? b : c("mergeRefs")(b, r)
        }, [f, b, r]);
        if (a)
            return j.jsx("div", {
                className: (h || (h = c("stylex")))(o),
                "data-testid": void 0,
                ref: b,
                style: i,
                children: d
            });
        a = c("getLoadingStateAriaProps")(g, {
            max: 100,
            min: 0
        });
        return j.jsx(n.Provider, {
            value: !0,
            children: j.jsx("div", babelHelpers["extends"]({}, a, f ? {} : q, {
                className: (h || (h = c("stylex")))(m.hideOutline, o),
                "data-focus-target": e,
                "data-testid": void 0,
                ref: p,
                style: i,
                children: d
            }))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e
}
), 98);


import React, { 
    useContext, 
    useMemo,
    createContext 
  } from 'react';
  
  import { mergeRefs } from 'mergeRefs';
  import stylex from 'stylex';
  import { useCometLoadingStateTracker } from 'useCometLoadingStateTracker';
  import { getLoadingStateAriaProps } from 'getLoadingStateAriaProps';
  
  interface Props {
    children: React.ReactNode;
    disableLoadingStateTracker?: boolean;
    isFocusTarget?: boolean;
    progress?: number;
    style?: React.CSSProperties;
    testid?: string;
    xstyle: string;
  }
  
  const IsLoadingContext = createContext(false);
  
  const cssStyles = {
    hideOutline: {
      outline: 'x1a2a7pz',
      $$css: true
    }
  };
  
  const BaseLoadingStateElement = (
    {
      children,
      disableLoadingStateTracker = false,
      isFocusTarget,
      progress,
      style, 
      testid,
      xstyle,
    }: Props,
    ref: React.Ref<HTMLDivElement>
  ) => {
  
    const isLoading = useContext(IsLoadingContext);
    const [tracker, setTrackerRef] = useCometLoadingStateTracker();
  
    const composedRef = useMemo(() => {
      return disableLoadingStateTracker 
        ? ref
        : mergeRefs(ref, setTrackerRef);
    }, [disableLoadingStateTracker, ref, setTrackerRef]);
  
    if (isLoading) {
      return (
        <div
          className={stylex(xstyle)}
          data-testid={undefined}
          ref={ref}
          style={style}
        >
          {children}
        </div>
      );
    }
  
    const ariaProps = getLoadingStateAriaProps(progress, {
      max: 100,
      min: 0    
    });
  
    return (
      <IsLoadingContext.Provider value={true}>
        <div
          {...ariaProps}
          {...(!disableLoadingStateTracker ? tracker : {})}
          className={stylex(cssStyles.hideOutline, xstyle)} 
          data-focus-target={isFocusTarget}
          data-testid={undefined}
          ref={composedRef}
          style={style}
        >
          {children}
        </div>
      </IsLoadingContext.Provider>
    );
  }
  
  export default React.forwardRef(BaseLoadingStateElement);