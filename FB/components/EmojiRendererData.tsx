__d(
  "EmojiRendererData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {}
      a.isEmoji = function (a) {
        return a > 983041 || a < 35
          ? !1
          : a === 35 ||
              a === 42 ||
              (a >= 48 && a <= 57) ||
              a === 169 ||
              a === 174 ||
              a === 8205 ||
              a === 8252 ||
              a === 8265 ||
              a === 8419 ||
              a === 8482 ||
              a === 8505 ||
              (a >= 8596 && a <= 8601) ||
              (a >= 8617 && a <= 8618) ||
              (a >= 8986 && a <= 8987) ||
              a === 9e3 ||
              a === 9167 ||
              (a >= 9193 && a <= 9203) ||
              (a >= 9208 && a <= 9210) ||
              a === 9410 ||
              (a >= 9642 && a <= 9643) ||
              a === 9654 ||
              a === 9664 ||
              (a >= 9723 && a <= 9726) ||
              (a >= 9728 && a <= 9732) ||
              a === 9742 ||
              a === 9745 ||
              (a >= 9748 && a <= 9749) ||
              a === 9752 ||
              a === 9760 ||
              (a >= 9762 && a <= 9763) ||
              a === 9766 ||
              a === 9770 ||
              (a >= 9774 && a <= 9775) ||
              (a >= 9784 && a <= 9786) ||
              a === 9792 ||
              a === 9794 ||
              (a >= 9800 && a <= 9811) ||
              (a >= 9823 && a <= 9824) ||
              a === 9827 ||
              (a >= 9829 && a <= 9830) ||
              a === 9832 ||
              a === 9851 ||
              (a >= 9854 && a <= 9855) ||
              (a >= 9874 && a <= 9879) ||
              a === 9881 ||
              (a >= 9883 && a <= 9884) ||
              (a >= 9888 && a <= 9889) ||
              a === 9895 ||
              (a >= 9898 && a <= 9899) ||
              (a >= 9904 && a <= 9905) ||
              (a >= 9917 && a <= 9918) ||
              (a >= 9924 && a <= 9925) ||
              a === 9928 ||
              (a >= 9934 && a <= 9935) ||
              a === 9937 ||
              (a >= 9939 && a <= 9940) ||
              (a >= 9961 && a <= 9962) ||
              (a >= 9968 && a <= 9973) ||
              (a >= 9975 && a <= 9976) ||
              a === 9978 ||
              a === 9981 ||
              a === 9986 ||
              a === 9989 ||
              (a >= 9992 && a <= 9993) ||
              a === 9999 ||
              a === 10002 ||
              a === 10004 ||
              a === 10006 ||
              a === 10013 ||
              a === 10017 ||
              a === 10024 ||
              (a >= 10035 && a <= 10036) ||
              a === 10052 ||
              a === 10055 ||
              a === 10060 ||
              a === 10062 ||
              (a >= 10067 && a <= 10069) ||
              a === 10071 ||
              (a >= 10083 && a <= 10084) ||
              (a >= 10133 && a <= 10135) ||
              a === 10145 ||
              a === 10160 ||
              a === 10175 ||
              (a >= 10548 && a <= 10549) ||
              (a >= 11013 && a <= 11015) ||
              (a >= 11035 && a <= 11036) ||
              a === 11088 ||
              a === 11093 ||
              a === 12336 ||
              a === 12349 ||
              a === 12951 ||
              a === 12953 ||
              a === 126980 ||
              a === 127183 ||
              (a >= 127344 && a <= 127345) ||
              (a >= 127358 && a <= 127359) ||
              a === 127374 ||
              (a >= 127377 && a <= 127386) ||
              (a >= 127462 && a <= 127487) ||
              (a >= 127489 && a <= 127490) ||
              a === 127514 ||
              a === 127535 ||
              (a >= 127538 && a <= 127546) ||
              (a >= 127568 && a <= 127569) ||
              (a >= 127744 && a <= 127777) ||
              (a >= 127780 && a <= 127876) ||
              (a >= 127878 && a <= 127891) ||
              (a >= 127894 && a <= 127895) ||
              (a >= 127897 && a <= 127899) ||
              (a >= 127902 && a <= 127937) ||
              (a >= 127941 && a <= 127942) ||
              (a >= 127944 && a <= 127945) ||
              (a >= 127949 && a <= 127984) ||
              (a >= 127987 && a <= 127989) ||
              (a >= 127991 && a <= 127994) ||
              (a >= 128e3 && a <= 128065) ||
              (a >= 128068 && a <= 128069) ||
              (a >= 128081 && a <= 128101) ||
              (a >= 128121 && a <= 128123) ||
              (a >= 128125 && a <= 128128) ||
              a === 128132 ||
              (a >= 128136 && a <= 128142) ||
              a === 128144 ||
              (a >= 128146 && a <= 128169) ||
              (a >= 128171 && a <= 128253) ||
              (a >= 128255 && a <= 128317) ||
              (a >= 128329 && a <= 128334) ||
              (a >= 128336 && a <= 128359) ||
              (a >= 128367 && a <= 128368) ||
              a === 128371 ||
              (a >= 128374 && a <= 128377) ||
              a === 128391 ||
              (a >= 128394 && a <= 128397) ||
              (a >= 128420 && a <= 128421) ||
              a === 128424 ||
              (a >= 128433 && a <= 128434) ||
              a === 128444 ||
              (a >= 128450 && a <= 128452) ||
              (a >= 128465 && a <= 128467) ||
              (a >= 128476 && a <= 128478) ||
              a === 128481 ||
              a === 128483 ||
              a === 128488 ||
              a === 128495 ||
              a === 128499 ||
              (a >= 128506 && a <= 128580) ||
              (a >= 128584 && a <= 128586) ||
              (a >= 128640 && a <= 128674) ||
              (a >= 128676 && a <= 128691) ||
              (a >= 128695 && a <= 128703) ||
              (a >= 128705 && a <= 128709) ||
              a === 128715 ||
              (a >= 128717 && a <= 128722) ||
              (a >= 128725 && a <= 128727) ||
              (a >= 128732 && a <= 128741) ||
              a === 128745 ||
              (a >= 128747 && a <= 128748) ||
              a === 128752 ||
              (a >= 128755 && a <= 128764) ||
              (a >= 128992 && a <= 129003) ||
              a === 129008 ||
              (a >= 129293 && a <= 129294) ||
              (a >= 129296 && a <= 129303) ||
              (a >= 129312 && a <= 129317) ||
              (a >= 129319 && a <= 129327) ||
              a === 129338 ||
              (a >= 129343 && a <= 129349) ||
              (a >= 129351 && a <= 129398) ||
              (a >= 129400 && a <= 129460) ||
              a === 129463 ||
              a === 129466 ||
              (a >= 129468 && a <= 129484) ||
              a === 129488 ||
              (a >= 129502 && a <= 129535) ||
              (a >= 129648 && a <= 129660) ||
              (a >= 129664 && a <= 129672) ||
              (a >= 129680 && a <= 129725) ||
              (a >= 129727 && a <= 129730) ||
              (a >= 129742 && a <= 129755) ||
              (a >= 129760 && a <= 129768) ||
              (a >= 917536 && a <= 917631) ||
              (a >= 983040 && a <= 983041);
      };
      a.isEmojiModifier = function (a) {
        return a > 127999 || a < 127995 ? !1 : a >= 127995 && a <= 127999;
      };
      a.isEmojiModifierBase = function (a) {
        return a > 129784 || a < 9757
          ? !1
          : a === 9757 ||
              a === 9977 ||
              (a >= 9994 && a <= 9997) ||
              a === 127877 ||
              (a >= 127938 && a <= 127940) ||
              a === 127943 ||
              (a >= 127946 && a <= 127948) ||
              (a >= 128066 && a <= 128067) ||
              (a >= 128070 && a <= 128080) ||
              (a >= 128102 && a <= 128120) ||
              a === 128124 ||
              (a >= 128129 && a <= 128131) ||
              (a >= 128133 && a <= 128135) ||
              a === 128143 ||
              a === 128145 ||
              a === 128170 ||
              (a >= 128372 && a <= 128373) ||
              a === 128378 ||
              a === 128400 ||
              (a >= 128405 && a <= 128406) ||
              (a >= 128581 && a <= 128583) ||
              (a >= 128587 && a <= 128591) ||
              a === 128675 ||
              (a >= 128692 && a <= 128694) ||
              a === 128704 ||
              a === 128716 ||
              a === 129292 ||
              a === 129295 ||
              (a >= 129304 && a <= 129311) ||
              a === 129318 ||
              (a >= 129328 && a <= 129337) ||
              (a >= 129340 && a <= 129342) ||
              a === 129399 ||
              (a >= 129461 && a <= 129462) ||
              (a >= 129464 && a <= 129465) ||
              a === 129467 ||
              (a >= 129485 && a <= 129487) ||
              (a >= 129489 && a <= 129501) ||
              (a >= 129731 && a <= 129733) ||
              (a >= 129776 && a <= 129784);
      };
      a.isEmojiVariationSelector = function (a) {
        return a === 65039;
      };
      a.isNonSpacingCombiningMark = function (a) {
        return a > 8419 || a < 8416 ? !1 : a === 8416 || a === 8419;
      };
      a.isRegionalIndicator = function (a) {
        return a > 127487 || a < 127462 ? !1 : a >= 127462 && a <= 127487;
      };
      a.isTagSpec = function (a) {
        return a > 917630 || a < 917536
          ? !1
          : (a >= 917536 && a <= 917568) || (a >= 917595 && a <= 917630);
      };
      a.isTagTerm = function (a) {
        return a === 917631;
      };
      a.isText = function (a) {
        return a > 8419 || a < 35
          ? !1
          : a === 35 || a === 42 || (a >= 48 && a <= 57) || a === 8419;
      };
      a.isTextVariationSelector = function (a) {
        return a === 65038;
      };
      a.isDefaultTextPresentation = function (a) {
        return a > 917631 || a < 35
          ? !1
          : a === 35 ||
              a === 42 ||
              (a >= 48 && a <= 57) ||
              a === 169 ||
              a === 174 ||
              a === 8205 ||
              a === 8252 ||
              a === 8265 ||
              a === 8419 ||
              a === 8482 ||
              a === 8505 ||
              (a >= 8596 && a <= 8597) ||
              (a >= 8617 && a <= 8618) ||
              a === 9e3 ||
              a === 9167 ||
              (a >= 9197 && a <= 9199) ||
              (a >= 9201 && a <= 9202) ||
              (a >= 9208 && a <= 9210) ||
              a === 9410 ||
              a === 9654 ||
              a === 9664 ||
              (a >= 9730 && a <= 9732) ||
              a === 9745 ||
              a === 9752 ||
              a === 9760 ||
              (a >= 9762 && a <= 9763) ||
              a === 9766 ||
              a === 9770 ||
              (a >= 9774 && a <= 9775) ||
              (a >= 9784 && a <= 9785) ||
              a === 9792 ||
              a === 9794 ||
              a === 9823 ||
              a === 9851 ||
              a === 9854 ||
              a === 9874 ||
              (a >= 9876 && a <= 9879) ||
              a === 9881 ||
              (a >= 9883 && a <= 9884) ||
              a === 9895 ||
              (a >= 9904 && a <= 9905) ||
              a === 9928 ||
              a === 9935 ||
              a === 9937 ||
              a === 9939 ||
              a === 9961 ||
              (a >= 9968 && a <= 9969) ||
              a === 9972 ||
              (a >= 9975 && a <= 9977) ||
              a === 9997 ||
              a === 9999 ||
              a === 10002 ||
              a === 10004 ||
              a === 10013 ||
              a === 10017 ||
              a === 10052 ||
              a === 10055 ||
              a === 10083 ||
              a === 12336 ||
              (a >= 127344 && a <= 127345) ||
              (a >= 127358 && a <= 127359) ||
              a === 127777 ||
              (a >= 127780 && a <= 127788) ||
              a === 127798 ||
              a === 127869 ||
              (a >= 127894 && a <= 127895) ||
              (a >= 127897 && a <= 127899) ||
              (a >= 127902 && a <= 127903) ||
              (a >= 127947 && a <= 127950) ||
              (a >= 127956 && a <= 127967) ||
              a === 127987 ||
              a === 127989 ||
              a === 127991 ||
              a === 128063 ||
              a === 128065 ||
              a === 128253 ||
              (a >= 128329 && a <= 128330) ||
              (a >= 128367 && a <= 128368) ||
              (a >= 128371 && a <= 128377) ||
              a === 128391 ||
              (a >= 128394 && a <= 128397) ||
              a === 128400 ||
              a === 128421 ||
              a === 128424 ||
              (a >= 128433 && a <= 128434) ||
              a === 128444 ||
              (a >= 128450 && a <= 128452) ||
              (a >= 128465 && a <= 128467) ||
              (a >= 128476 && a <= 128478) ||
              a === 128481 ||
              a === 128483 ||
              a === 128488 ||
              a === 128495 ||
              a === 128499 ||
              a === 128506 ||
              a === 128715 ||
              (a >= 128717 && a <= 128719) ||
              (a >= 128736 && a <= 128741) ||
              a === 128745 ||
              a === 128752 ||
              a === 128755 ||
              (a >= 917536 && a <= 917631);
      };
      a.isSymbol = function (a) {
        return a > 8482 || a < 169 ? !1 : a === 169 || a === 174 || a === 8482;
      };
      a.isZWJ = function (a) {
        return a === 8205;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);

class EmojiRendererData {
  static isEmoji(codePoint: number): boolean {
    return codePoint > 983041 || codePoint < 35
      ? false
      : [
          35, 42, 48, 57, 169, 174, 8205, 8252, 8265, 8419, 8482, 8505, 8596,
          8601, 8617, 8618, 8986, 8987, 9000, 9167, 9193, 9203, 9208, 9210,
          9410, 9642, 9643, 9654, 9664, 9723, 9726, 9728, 9732, 9742, 9745,
          9748, 9749, 9752, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784,
          9786, 9792, 9794, 9800, 9811, 9823, 9824, 9827, 9829, 9830, 9832,
          9851, 9854, 9855, 9874, 9879, 9881, 9883, 9884, 9888, 9889, 9895,
          9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935,
          9937, 9939, 9940, 9961, 9962, 9968, 9973, 9975, 9976, 9978, 9981,
          9986, 9989, 9992, 9993, 9999, 10002, 10004, 10006, 10013, 10017,
          10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10069, 10071,
          10083, 10084, 10133, 10135, 10145, 10160, 10175, 10548, 10549, 11013,
          11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 126980,
          127183, 127344, 127345, 127358, 127359, 127374, 127377, 127386,
          127462, 127487, 127489, 127490, 127514, 127535, 127538, 127546,
          127568, 127569, 127744, 127777, 127780, 127876, 127878, 127891,
          127894, 127895, 127897, 127899, 127902, 127937, 127941, 127942,
          127944, 127945, 127949, 127984, 127987, 127989, 127991, 127994,
          128000, 128065, 128068, 128069, 128081, 128101, 128121, 128123,
          128125, 128128, 128132, 128136, 128142, 128144, 128146, 128169,
          128171, 128253, 128255, 128317, 128329, 128334, 128336, 128359,
          128367, 128368, 128371, 128374, 128377, 128391, 128394, 128397,
          128420, 128421, 128424, 128433, 128434, 128444, 128450, 128452,
          128465, 128467, 128476, 128478, 128481, 128483, 128488, 128495,
          128499, 128506, 128580, 128584, 128586, 128640, 128674, 128676,
          128691, 128695, 128703, 128705, 128709, 128715, 128717, 128722,
          128725, 128727, 128732, 128741, 128745, 128747, 128748, 128752,
          128755, 128764, 128992, 129003, 129008, 129293, 129294, 129296,
          129303, 129312, 129317, 129319, 129327, 129338, 129343, 129349,
          129351, 129398, 129400, 129460, 129463, 129466, 129468, 129484,
          129488, 129502, 129535, 129648, 129660, 129664, 129672, 129680,
          129725, 129727, 129730, 129742, 129755, 129760, 129768, 917536,
          917631, 983040, 983041,
        ].includes(codePoint);
  }

  static isEmojiModifier(codePoint: number): boolean {
    return codePoint >= 127995 && codePoint <= 127999;
  }

  static isEmojiModifierBase(codePoint: number): boolean {
    return (
      codePoint >= 9757 &&
      codePoint <= 129784 &&
      [
        9757, 9977, 9994, 9997, 127877, 127938, 127940, 127943, 127946, 127948,
        128066, 128067, 128070, 128080, 128102, 128120, 128124, 128129, 128131,
        128133, 128135, 128143, 128145, 128170, 128372, 128373, 128378, 128400,
        128405, 128406, 128581, 128583, 128587, 128591, 128675, 128692, 128694,
        128704, 128716, 129292, 129295, 129304, 129311, 129318, 129328, 129337,
        129340, 129342, 129399, 129461, 129462, 129464, 129465, 129467, 129485,
        129487, 129489, 129501, 129731, 129733, 129776, 129784,
      ].includes(codePoint)
    );
  }

  static isEmojiVariationSelector(codePoint: number): boolean {
    return codePoint === 65039;
  }

  static isNonSpacingCombiningMark(codePoint: number): boolean {
    return codePoint === 8416 || codePoint === 8419;
  }

  static isRegionalIndicator(codePoint: number): boolean {
    return codePoint >= 127462 && codePoint <= 127487;
  }

  static isTagSpec(codePoint: number): boolean {
    return (
      (codePoint >= 917536 && codePoint <= 917568) ||
      (codePoint >= 917595 && codePoint <= 917630)
    );
  }

  static isTagTerm(codePoint: number): boolean {
    return codePoint === 917631;
  }

  static isText(codePoint: number): boolean {
    return (
      codePoint >= 35 &&
      codePoint <= 8419 &&
      [35, 42, 48, 57, 8419].includes(codePoint)
    );
  }

  static isTextVariationSelector(codePoint: number): boolean {
    return codePoint === 65038;
  }

  static isDefaultTextPresentation(codePoint: number): boolean {
    return (
      codePoint >= 35 &&
      codePoint <= 917631 &&
      [
        35, 42, 48, 57, 169, 174, 8205, 8252, 8265, 8419, 8482, 8505, 8596,
        8597, 8617, 8618, 9000, 9167, 9197, 9199, 9201, 9202, 9208, 9210, 9410,
        9654, 9664, 9730, 9732, 9745, 9752, 9760, 9762, 9763, 9766, 9770, 9774,
        9775, 9784, 9785, 9792, 9794, 9823, 9851, 9854, 9874, 9876, 9879, 9881,
        9883, 9884, 9895, 9904, 9905, 9928, 9935, 9937, 9939, 9961, 9968, 9969,
        9972, 9975, 9977, 9997, 9999, 10002, 10004, 10013, 10017, 10052, 10055,
        10083, 12336, 127344, 127345, 127358, 127359, 127777, 127780, 127788,
        127798, 127869, 127894, 127895, 127897, 127899, 127902, 127903, 127947,
        127950, 127956, 127967, 127987, 127989, 127991, 128063, 128065, 128253,
        128329, 128330, 128367, 128368, 128371, 128377, 128391, 128394, 128397,
        128400, 128421, 128424, 128433, 128434, 128444, 128450, 128452, 128465,
        128467, 128476, 128478, 128481, 128483, 128488, 128495, 128499, 128506,
        128715, 128717, 128719, 128736, 128741, 128745, 128752, 128755, 917536,
        917631,
      ].includes(codePoint)
    );
  }

  static isSymbol(codePoint: number): boolean {
    return codePoint === 169 || codePoint === 174 || codePoint === 8482;
  }

  static isZWJ(codePoint: number): boolean {
    return codePoint === 8205;
  }
}

export default EmojiRendererData;
