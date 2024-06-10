__d(
  "defaultMWPThreadTheme",
  ["I64", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = c("gkx")("24125")
      ? {
          backgroundGradientColors: [],
          incomingGradientColors: [],
          outgoingGradientColors: [
            {
              color: (h || (h = d("I64"))).of_string("-5635841"),
              gradientIndex: (h || (h = d("I64"))).of_string("0"),
              themeFbid: (h || (h = d("I64"))).of_string("3259963564026002"),
              type_: (h || (h = d("I64"))).of_string("0"),
            },
            {
              color: (h || (h = d("I64"))).of_string("-16744193"),
              gradientIndex: (h || (h = d("I64"))).of_string("1"),
              themeFbid: (h || (h = d("I64"))).of_string("3259963564026002"),
              type_: (h || (h = d("I64"))).of_string("0"),
            },
          ],
          threadTheme: {
            accessibilityLabel: "Default",
            appColorMode: (h || (h = d("I64"))).of_string("1"),
            fallbackColor: (h || (h = d("I64"))).of_string("-11645963"),
            fbid: (h || (h = d("I64"))).of_string("3259963564026002"),
            isDeprecated: !1,
            normalThemeId: (h || (h = d("I64"))).of_string("3259963564026002"),
            reverseGradiantsForRadial: !1,
            themeIdx: (h || (h = d("I64"))).of_string("275"),
          },
        }
      : {
          backgroundGradientColors: [],
          incomingGradientColors: [],
          outgoingGradientColors: [],
          threadTheme: {
            accessibilityLabel: "Default Blue",
            appColorMode: (h || (h = d("I64"))).zero,
            fallbackColor: c("gkx")("23219")
              ? (h || (h = d("I64"))).of_string("687359")
              : (h || (h = d("I64"))).of_string("-16743169"),
            fbid: (h || (h = d("I64"))).of_string("196241301102133"),
            isDeprecated: !1,
            normalThemeId: (h || (h = d("I64"))).zero,
            reverseGradiantsForRadial: !1,
            themeIdx: (h || (h = d("I64"))).of_string("94"),
          },
        };
    g.defaultThemeWithColors = a;
  },
  98
);

import { I64 } from "I64";
import gkx from "gkx";

interface GradientColor {
  color: any;
  gradientIndex: any;
  themeFbid: any;
  type_: any;
}

interface ThreadTheme {
  accessibilityLabel: string;
  appColorMode: any;
  fallbackColor: any;
  fbid: any;
  isDeprecated: boolean;
  normalThemeId: any;
  reverseGradiantsForRadial: boolean;
  themeIdx: any;
}

interface ThemeWithColors {
  backgroundGradientColors: GradientColor[];
  incomingGradientColors: GradientColor[];
  outgoingGradientColors: GradientColor[];
  threadTheme: ThreadTheme;
}

const defaultThemeWithColors: ThemeWithColors = gkx("24125")
  ? {
      backgroundGradientColors: [],
      incomingGradientColors: [],
      outgoingGradientColors: [
        {
          color: I64.of_string("-5635841"),
          gradientIndex: I64.of_string("0"),
          themeFbid: I64.of_string("3259963564026002"),
          type_: I64.of_string("0"),
        },
        {
          color: I64.of_string("-16744193"),
          gradientIndex: I64.of_string("1"),
          themeFbid: I64.of_string("3259963564026002"),
          type_: I64.of_string("0"),
        },
      ],
      threadTheme: {
        accessibilityLabel: "Default",
        appColorMode: I64.of_string("1"),
        fallbackColor: I64.of_string("-11645963"),
        fbid: I64.of_string("3259963564026002"),
        isDeprecated: false,
        normalThemeId: I64.of_string("3259963564026002"),
        reverseGradiantsForRadial: false,
        themeIdx: I64.of_string("275"),
      },
    }
  : {
      backgroundGradientColors: [],
      incomingGradientColors: [],
      outgoingGradientColors: [],
      threadTheme: {
        accessibilityLabel: "Default Blue",
        appColorMode: I64.zero,
        fallbackColor: gkx("23219")
          ? I64.of_string("687359")
          : I64.of_string("-16743169"),
        fbid: I64.of_string("196241301102133"),
        isDeprecated: false,
        normalThemeId: I64.zero,
        reverseGradiantsForRadial: false,
        themeIdx: I64.of_string("94"),
      },
    };

export { defaultThemeWithColors };
