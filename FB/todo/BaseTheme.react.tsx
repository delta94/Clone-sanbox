__d("BaseTheme.react", ["BaseThemeProvider.react", "BaseView.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a, b) {
        var d = a.config,
            e = a.displayMode,
            f = a.style,
            g = a.xstyle,
            h = babelHelpers.objectWithoutPropertiesLoose(a, ["config", "displayMode", "style", "xstyle"]);
        return i.jsx(c("BaseThemeProvider.react"), {
            config: d,
            displayMode: e,
            children: function (a, d) {
                return i.jsx(c("BaseView.react"), babelHelpers["extends"]({}, h, {
                    ref: b,
                    style: babelHelpers["extends"]({}, d, f),
                    xstyle: [a, g]
                }))
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b
}), 98);


import React, { forwardRef } from 'react';
import { BaseThemeProvider, BaseThemeProviderProps } from 'BaseThemeProvider.react'; 
import { BaseView, BaseViewProps } from 'BaseView.react';

interface BaseThemeProps extends Omit<BaseViewProps, 'style' | 'xstyle'> {
  config?: BaseThemeProviderProps['config'];
  displayMode?: BaseThemeProviderProps['displayMode']; 
  style?: React.CSSProperties;
  xstyle?: React.CSSProperties; 
}

const BaseTheme = forwardRef<HTMLDivElement, BaseThemeProps>((props, ref) => {
  const {
    config, 
    displayMode,
    style,
    xstyle,
    ...viewProps    
  } = props;

  return (
    <BaseThemeProvider config={config} displayMode={displayMode}>
      {theme => (
        <BaseView
          {...viewProps}
          ref={ref}
          style={{...theme, ...style}}
          xstyle={[theme, xstyle]} 
        />
      )}
    </BaseThemeProvider>
  );
});

export default BaseTheme;