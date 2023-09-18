__d("CometStyleXSheet", ["CometStyleXDarkTheme", "CometStyleXDefaultTheme", "ExecutionEnvironment", "StyleXSheet"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.call(this, {
                rootDarkTheme: c("CometStyleXDarkTheme"),
                rootTheme: c("CometStyleXDefaultTheme")
            }) || this
        }
        return b
    }(c("StyleXSheet"));
    b = new a();
    g.DARK_MODE_CLASS_NAME = c("StyleXSheet").DARK_MODE_CLASS_NAME;
    g.LIGHT_MODE_CLASS_NAME = c("StyleXSheet").LIGHT_MODE_CLASS_NAME;
    g.CometStyleXSheet = a;
    g.rootStyleSheet = b
}), 98);


import CometStyleXDarkTheme from 'CometStyleXDarkTheme';
import CometStyleXDefaultTheme from 'CometStyleXDefaultTheme';
import ExecutionEnvironment from 'ExecutionEnvironment';
import StyleXSheet, { DARK_MODE_CLASS_NAME, LIGHT_MODE_CLASS_NAME } from 'StyleXSheet';

class CometStyleXSheet extends StyleXSheet {
  constructor() {
    super({
      rootDarkTheme: CometStyleXDarkTheme,
      rootTheme: CometStyleXDefaultTheme,
    });
  }
}

const rootStyleSheet = new CometStyleXSheet();

export { DARK_MODE_CLASS_NAME, LIGHT_MODE_CLASS_NAME, CometStyleXSheet, rootStyleSheet };
