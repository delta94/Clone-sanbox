__d("getCometBadgeColorStyle", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        blue: {
            backgroundColor: "xwnonoy",
            $$css: !0
        },
        darkGray: {
            backgroundColor: "xhazfnh",
            $$css: !0
        },
        gray: {
            backgroundColor: "x1d2osyd",
            $$css: !0
        },
        green: {
            backgroundColor: "xv9rvxn",
            $$css: !0
        },
        lightBlue: {
            backgroundColor: "xfmpgtx",
            $$css: !0
        },
        red: {
            backgroundColor: "x1cdvf7c",
            $$css: !0
        },
        yellow: {
            backgroundColor: "xacajkf",
            $$css: !0
        }
    };
    function a(a) {
        switch (a) {
        case "blue":
            return h.blue;
        case "gray":
            return h.gray;
        case "darkGray":
            return h.darkGray;
        case "green":
            return h.green;
        case "lightBlue":
            return h.lightBlue;
        case "red":
            return h.red;
        case "yellow":
            return h.yellow;
        default:
            a;
            throw c("unrecoverableViolation")(" Invalid color in getCometBadgeColorStyle", "comet_ui")
        }
    }
    g["default"] = a
}
), 98);



import { unrecoverableViolation } from 'unrecoverableViolation';

const badgeColors = {
  blue: {
    backgroundColor: 'xwnonoy',
    $$css: true,
  },
  darkGray: {
    backgroundColor: 'xhazfnh',
    $$css: true,
  },
  gray: {
    backgroundColor: 'x1d2osyd',
    $$css: true,
  },
  green: {
    backgroundColor: 'xv9rvxn',
    $$css: true,
  },
  lightBlue: {
    backgroundColor: 'xfmpgtx',
    $$css: true,
  },
  red: {
    backgroundColor: 'x1cdvf7c',
    $$css: true,
  },
  yellow: {
    backgroundColor: 'xacajkf',
    $$css: true,
  },
};

function getCometBadgeColorStyle(color: string) {
  switch (color) {
    case 'blue':
      return badgeColors.blue;
    case 'gray':
      return badgeColors.gray;
    case 'darkGray':
      return badgeColors.darkGray;
    case 'green':
      return badgeColors.green;
    case 'lightBlue':
      return badgeColors.lightBlue;
    case 'red':
      return badgeColors.red;
    case 'yellow':
      return badgeColors.yellow;
    default:
      unrecoverableViolation('Invalid color in getCometBadgeColorStyle', 'comet_ui');
  }
}

export default getCometBadgeColorStyle;
