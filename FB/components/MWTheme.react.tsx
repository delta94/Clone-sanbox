__d(
  "MWTheme.react",
  ["I64", "cr:4128", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h || (h = d("react")),
      k = h,
      l = k.createContext,
      m = k.useContext,
      n = k.useEffect,
      o = k.useMemo;
    function a(a, b) {
      a = a != null ? a : 0.4;
      var c = parseInt(b.slice(1, 3), 16),
        d = parseInt(b.slice(3, 5), 16);
      b = parseInt(b.slice(5, 7), 16);
      a = a.toFixed(4);
      return "rgba(" + c + "," + d + "," + b + "," + a + ")";
    }
    function e(a) {
      return a.type === "solid" ? a.color : a.colors[0];
    }
    function p(a) {
      return "#" + a.slice(2);
    }
    function q(a) {
      a = (i || (i = d("I64"))).to_int32(a);
      var b = (a & 16711680) >>> 16,
        c = (a & 65280) >>> 8;
      a = a & 255;
      var e = function (a) {
        return a.toString(16).padStart(2, "0");
      };
      return "#" + (e(b) + (e(c) + e(a)));
    }
    var r = l({
      clearTheme: c("emptyFunction"),
      setTheme: c("emptyFunction"),
      theme: b("cr:4128"),
    });
    function s() {
      return m(r).theme;
    }
    function t() {
      var a = m(r),
        b = a.clearTheme;
      a = a.setTheme;
      n(
        function () {
          return b;
        },
        [b]
      );
      return [a, b];
    }
    function u(a) {
      var b = a.children,
        d = a.clearTheme,
        e = a.setTheme,
        f = a.theme;
      a = o(
        function () {
          var a;
          return {
            clearTheme: (a = d) != null ? a : c("emptyFunction"),
            setTheme: (a = e) != null ? a : c("emptyFunction"),
            theme: f,
          };
        },
        [d, e, f]
      );
      return j.jsx(r.Provider, { value: a, children: b });
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function v(a) {
      return a.type === "gradient";
    }
    g.defaultTheme = b("cr:4128");
    g.lighten = a;
    g.top = e;
    g.aRGBtoHex = p;
    g.intToHex = q;
    g.useTheme = s;
    g.usePreview = t;
    g.MWThemeProvider = u;
    g.isGradient = v;
  },
  98
);

import I64 from "I64";
// import defaultTheme from "cr:4128";
import emptyFunction from "emptyFunction";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

interface Theme {
  type: string;
  color?: string;
  colors?: string[];
}

interface MWThemeContextType {
  clearTheme: () => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const defaultTheme = {
  color: "#0084FF",
  id: [45690, 4245347893],
  label: "Default Blue",
  type: "solid",
};

const ThemeContext = createContext<MWThemeContextType>({
  clearTheme: emptyFunction,
  setTheme: emptyFunction,
  theme: defaultTheme,
});

export function lighten(opacity: number = 0.4, hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  opacity = opacity.toFixed(4) as unknown as number;
  return `rgba(${r},${g},${b},${opacity})`;
}

export function top(theme: Theme): string {
  return theme.type === "solid" ? theme.color! : theme.colors![0];
}

export function aRGBtoHex(aRGB: string): string {
  return `#${aRGB.slice(2)}`;
}

export function intToHex(intColor: number): string {
  const _intColor = I64.to_int32(intColor);
  const r = (_intColor & 0xff0000) >>> 16;
  const g = (_intColor & 0x00ff00) >>> 8;
  const b = _intColor & 0x0000ff;
  const hex = (num: number) => num.toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

export function useTheme(): Theme {
  return useContext(ThemeContext).theme;
}

export function usePreview(): [() => void, () => void] {
  const { clearTheme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    return clearTheme;
  }, [clearTheme]);

  return [setTheme, clearTheme];
}

interface MWThemeProviderProps {
  children: ReactNode;
  clearTheme?: () => void;
  setTheme?: (theme: Theme) => void;
  theme: Theme;
}

export const MWThemeProvider: React.FC<MWThemeProviderProps> = ({
  children,
  clearTheme = emptyFunction,
  setTheme = emptyFunction,
  theme,
}) => {
  const contextValue = useMemo(
    () => ({
      clearTheme,
      setTheme,
      theme,
    }),
    [clearTheme, setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

MWThemeProvider.displayName = `${MWThemeProvider.name} [from ${module.id}]`;

export function isGradient(theme: Theme): boolean {
  return theme.type === "gradient";
}

export default {
  defaultTheme,
  lighten,
  top,
  aRGBtoHex,
  intToHex,
  useTheme,
  usePreview,
  MWThemeProvider,
  isGradient,
};
