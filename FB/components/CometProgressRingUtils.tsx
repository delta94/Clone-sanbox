__d(
  "CometProgressRingUtils",
  ["ix"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, c, d) {
      function e(a, b) {
        return 1 - 3 * b + 3 * a;
      }
      function f(a, b) {
        return 3 * b - 6 * a;
      }
      function g(a) {
        return 3 * a;
      }
      function h(a, b, c) {
        return ((e(b, c) * a + f(b, c)) * a + g(b)) * a;
      }
      function i(a, b, c) {
        return 3 * e(b, c) * a * a + 2 * f(b, c) * a + g(b);
      }
      function j(b) {
        var d = b;
        for (var e = 0; e < 4; ++e) {
          var f = i(d, a, c);
          if (f === 0) return d;
          var g = h(d, a, c) - b;
          d -= g / f;
        }
        return d;
      }
      return function (e) {
        return a === b && c === d ? e : h(j(e), b, d);
      };
    }
    function b(a, b, c) {
      switch (b) {
        case "12":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876411");
                case "disabled":
                  return h("1876443");
                case "dark":
                  return h("1876427");
                case "light":
                  return h("1876427");
                default:
                  return h("1876427");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876419");
                case "disabled":
                  return h("1876451");
                case "dark":
                  return h("1876435");
                case "light":
                  return h("1876427");
                default:
                  return h("1876435");
              }
            default:
              return h("1876435");
          }
        case "16":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876412");
                case "disabled":
                  return h("1876444");
                case "dark":
                  return h("1876428");
                case "light":
                  return h("1876428");
                default:
                  return h("1876428");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876420");
                case "disabled":
                  return h("1876452");
                case "dark":
                  return h("1876436");
                case "light":
                  return h("1876428");
                default:
                  return h("1876436");
              }
            default:
              return h("1876436");
          }
        case "20":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876413");
                case "disabled":
                  return h("1876445");
                case "dark":
                  return h("1876429");
                case "light":
                  return h("1876429");
                default:
                  return h("1876429");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876421");
                case "disabled":
                  return h("1876453");
                case "dark":
                  return h("1876437");
                case "light":
                  return h("1876429");
                default:
                  return h("1876437");
              }
            default:
              return h("1876437");
          }
        case "24":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876414");
                case "disabled":
                  return h("1876446");
                case "dark":
                  return h("1876430");
                case "light":
                  return h("1876430");
                default:
                  return h("1876430");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876422");
                case "disabled":
                  return h("1876454");
                case "dark":
                  return h("1876438");
                case "light":
                  return h("1876430");
                default:
                  return h("1876438");
              }
            default:
              return h("1876438");
          }
        case "32":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876415");
                case "disabled":
                  return h("1876447");
                case "dark":
                  return h("1876431");
                case "light":
                  return h("1876431");
                default:
                  return h("1876431");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876423");
                case "disabled":
                  return h("1876455");
                case "dark":
                  return h("1876439");
                case "light":
                  return h("1876431");
                default:
                  return h("1876439");
              }
            default:
              return h("1876439");
          }
        case "48":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876416");
                case "disabled":
                  return h("1876448");
                case "dark":
                  return h("1876432");
                case "light":
                  return h("1876432");
                default:
                  return h("1876432");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876424");
                case "disabled":
                  return h("1876456");
                case "dark":
                  return h("1876440");
                case "light":
                  return h("1876432");
                default:
                  return h("1876440");
              }
            default:
              return h("1876440");
          }
        case "60":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1940508");
                case "disabled":
                  return h("1940512");
                case "dark":
                  return h("1940510");
                case "light":
                  return h("1940510");
                default:
                  return h("1940510");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1940509");
                case "disabled":
                  return h("1940513");
                case "dark":
                  return h("1940511");
                case "light":
                  return h("1940510");
                default:
                  return h("1940511");
              }
            default:
              return h("1940511");
          }
        case "72":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876418");
                case "disabled":
                  return h("1876450");
                case "dark":
                  return h("1876434");
                case "light":
                  return h("1876434");
                default:
                  return h("1876434");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876426");
                case "disabled":
                  return h("1876458");
                case "dark":
                  return h("1876442");
                case "light":
                  return h("1876434");
                default:
                  return h("1876442");
              }
            default:
              return h("1876442");
          }
        default:
          return h("1876439");
      }
    }
    function c(a) {
      switch (a) {
        case "dark":
          return {
            backgroundColor: "var(--progress-ring-neutral-background)",
            foregroundColor: "var(--progress-ring-neutral-foreground)",
          };
        case "light":
          return {
            backgroundColor: "var(--progress-ring-on-media-background)",
            foregroundColor: "var(--progress-ring-on-media-foreground)",
          };
        case "blue":
          return {
            backgroundColor: "var(--progress-ring-blue-background)",
            foregroundColor: "var(--progress-ring-blue-foreground)",
          };
        case "disabled":
          return {
            backgroundColor: "var(--progress-ring-disabled-background)",
            foregroundColor: "var(--progress-ring-disabled-foreground)",
          };
        default:
          return {
            backgroundColor: "var(--progress-ring-neutral-background)",
            foregroundColor: "var(--progress-ring-neutral-foreground)",
          };
      }
    }
    g.getCubicBezierPercentageFunc = a;
    g.getRingGifUrl = b;
    g.getRingColor = c;
  },
  98
);

import { ix } from "ix";

type RingColorType = "blue" | "disabled" | "dark" | "light";
type RingSizeType = "12" | "16" | "20" | "24" | "32" | "48" | "60" | "72";
type ThemeType = "dark" | "light";

export function getCubicBezierPercentageFunc(
  a: number,
  b: number,
  c: number,
  d: number
) {
  function calculateA(a: number, b: number) {
    return 1 - 3 * b + 3 * a;
  }

  function calculateB(a: number, b: number) {
    return 3 * b - 6 * a;
  }

  function calculateC(a: number) {
    return 3 * a;
  }

  function calculateProgress(t: number, a: number, b: number) {
    return ((calculateA(a, b) * t + calculateB(a, b)) * t + calculateC(a)) * t;
  }

  function calculateDerivative(t: number, a: number, b: number) {
    return (
      3 * calculateA(a, b) * t * t + 2 * calculateB(a, b) * t + calculateC(a)
    );
  }

  function solveCurveX(x: number) {
    let t = x;
    for (let i = 0; i < 4; ++i) {
      const derivative = calculateDerivative(t, a, c);
      if (derivative === 0) return t;
      const xError = calculateProgress(t, a, c) - x;
      t -= xError / derivative;
    }
    return t;
  }

  return function (t: number) {
    return a === b && c === d ? t : calculateProgress(solveCurveX(t), b, d);
  };
}

export function getRingGifUrl(
  color: RingColorType,
  size: RingSizeType,
  theme: ThemeType
) {
  const idMapping = {
    "12": {
      dark: {
        blue: "1876411",
        disabled: "1876443",
        dark: "1876427",
        light: "1876427",
      },
      light: {
        blue: "1876419",
        disabled: "1876451",
        dark: "1876435",
        light: "1876427",
      },
      default: "1876435",
    },
    "16": {
      dark: {
        blue: "1876412",
        disabled: "1876444",
        dark: "1876428",
        light: "1876428",
      },
      light: {
        blue: "1876420",
        disabled: "1876452",
        dark: "1876436",
        light: "1876428",
      },
      default: "1876436",
    },
    "20": {
      dark: {
        blue: "1876413",
        disabled: "1876445",
        dark: "1876429",
        light: "1876429",
      },
      light: {
        blue: "1876421",
        disabled: "1876453",
        dark: "1876437",
        light: "1876429",
      },
      default: "1876437",
    },
    "24": {
      dark: {
        blue: "1876414",
        disabled: "1876446",
        dark: "1876430",
        light: "1876430",
      },
      light: {
        blue: "1876422",
        disabled: "1876454",
        dark: "1876438",
        light: "1876430",
      },
      default: "1876438",
    },
    "32": {
      dark: {
        blue: "1876415",
        disabled: "1876447",
        dark: "1876431",
        light: "1876431",
      },
      light: {
        blue: "1876423",
        disabled: "1876455",
        dark: "1876439",
        light: "1876431",
      },
      default: "1876439",
    },
    "48": {
      dark: {
        blue: "1876416",
        disabled: "1876448",
        dark: "1876432",
        light: "1876432",
      },
      light: {
        blue: "1876424",
        disabled: "1876456",
        dark: "1876440",
        light: "1876432",
      },
      default: "1876440",
    },
    "60": {
      dark: {
        blue: "1940508",
        disabled: "1940512",
        dark: "1940510",
        light: "1940510",
      },
      light: {
        blue: "1940509",
        disabled: "1940513",
        dark: "1940511",
        light: "1940510",
      },
      default: "1940511",
    },
    "72": {
      dark: {
        blue: "1876418",
        disabled: "1876450",
        dark: "1876434",
        light: "1876434",
      },
      light: {
        blue: "1876426",
        disabled: "1876458",
        dark: "1876442",
        light: "1876434",
      },
      default: "1876442",
    },
    default: "1876439",
  };

  const themeMapping = idMapping[size] || idMapping.default;
  const colorMapping = themeMapping[theme] || themeMapping.default;
  return ix(colorMapping[color] || colorMapping.default);
}

export function getRingColor(color: RingColorType) {
  const colorMapping: Record<
    RingColorType,
    { backgroundColor: string; foregroundColor: string }
  > = {
    dark: {
      backgroundColor: "var(--progress-ring-neutral-background)",
      foregroundColor: "var(--progress-ring-neutral-foreground)",
    },
    light: {
      backgroundColor: "var(--progress-ring-on-media-background)",
      foregroundColor: "var(--progress-ring-on-media-foreground)",
    },
    blue: {
      backgroundColor: "var(--progress-ring-blue-background)",
      foregroundColor: "var(--progress-ring-blue-foreground)",
    },
    disabled: {
      backgroundColor: "var(--progress-ring-disabled-background)",
      foregroundColor: "var(--progress-ring-disabled-foreground)",
    },
  };

  return colorMapping[color] || colorMapping.dark;
}
