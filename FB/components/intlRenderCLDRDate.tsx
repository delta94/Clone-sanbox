__d(
  "intlRenderCLDRDate",
  ["CLDRDateFormatConfig", "intlRenderJSDateSymbol", "unrecoverableViolation"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /\w+/;
    function a(a, c, d) {
      var e = b("CLDRDateFormatConfig").intlDateSpecialChars,
        f = "",
        g = "",
        i = !1,
        j = [],
        k;
      a = a.split(e.cldrDelimiter + e.singleQuote).join(e.singleQuoteHolder);
      for (var l = 0, m = a.length; l < m; l++) {
        var n = a.charAt(l);
        !i
          ? n === e.cldrDelimiter
            ? (i = !0)
            : f.length === 0 || f[0] === n
            ? (f += n)
            : n === e.singleQuoteHolder
            ? (f += e.singleQuote)
            : ((k = h(f, d, c)), j.push(k.rendered), (f = n))
          : (f.length !== 0 && ((k = h(f, d, c)), j.push(k.rendered), (f = "")),
            n === e.cldrDelimiter
              ? ((i = !1), j.push(g), (g = ""))
              : n === e.singleQuoteHolder
              ? (g += e.singleQuote)
              : (g += n));
      }
      if (g.length !== 0)
        throw b("unrecoverableViolation")(
          'Format: "' + a + '" must contain closing str literal delimiter',
          "internationalization"
        );
      f.length !== 0 && ((k = h(f, d, c)), j.push(k.rendered));
      return j.join("");
    }
    function h(a, c, d) {
      a = i(a);
      return b("intlRenderJSDateSymbol")(c, a, d);
    }
    function i(a) {
      if (a in b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion)
        return b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion[a];
      if (g.test(a))
        throw b("unrecoverableViolation")(
          'Unsupported CLDR symbol: "' +
            a +
            '". If string literal, wrap in delimiters',
          "internationalization"
        );
      return a;
    }
    e.exports = a;
  },
  null
);

import CLDRDateFormatConfig from "CLDRDateFormatConfig";
import intlRenderJSDateSymbol from "intlRenderJSDateSymbol";
import unrecoverableViolation from "unrecoverableViolation";

const wordPattern = /\w+/;

interface RenderedSymbol {
  rendered: string;
  idx: number;
}

interface FormatOptions {
  skipSuffixLocalization?: boolean;
  skipPatternLocalization?: boolean;
  utc?: boolean;
  formatInternal?: boolean;
  throwCLDRError?: boolean;
}

function intlRenderCLDRDate(
  format: string,
  numerics: Record<string, number>,
  options: FormatOptions
): string {
  const {
    cldrDelimiter,
    singleQuote,
    singleQuoteHolder,
    intlDateSpecialChars,
  } = CLDRDateFormatConfig;
  let isInQuote = false;
  let currentToken = "";
  let literalBuffer = "";
  const result: string[] = [];

  // Replace single quotes with a placeholder
  format = format.split(cldrDelimiter + singleQuote).join(singleQuoteHolder);

  for (let i = 0, len = format.length; i < len; i++) {
    const char = format.charAt(i);

    if (!isInQuote) {
      if (char === cldrDelimiter) {
        isInQuote = true;
      } else if (currentToken.length === 0 || currentToken[0] === char) {
        currentToken += char;
      } else if (char === singleQuoteHolder) {
        currentToken += singleQuote;
      } else {
        const renderedSymbol = processToken(currentToken, numerics, options);
        result.push(renderedSymbol.rendered);
        currentToken = char;
      }
    } else {
      if (currentToken.length !== 0) {
        const renderedSymbol = processToken(currentToken, numerics, options);
        result.push(renderedSymbol.rendered);
        currentToken = "";
      }

      if (char === cldrDelimiter) {
        isInQuote = false;
        result.push(literalBuffer);
        literalBuffer = "";
      } else if (char === singleQuoteHolder) {
        literalBuffer += singleQuote;
      } else {
        literalBuffer += char;
      }
    }
  }

  if (literalBuffer.length !== 0) {
    throw unrecoverableViolation(
      `Format: "${format}" must contain closing string literal delimiter`,
      "internationalization"
    );
  }

  if (currentToken.length !== 0) {
    const renderedSymbol = processToken(currentToken, numerics, options);
    result.push(renderedSymbol.rendered);
  }

  return result.join("");
}

function processToken(
  token: string,
  numerics: Record<string, number>,
  options: FormatOptions
): RenderedSymbol {
  const convertedToken = convertCLDRToPHPSymbol(token);
  return intlRenderJSDateSymbol(numerics, convertedToken, options);
}

function convertCLDRToPHPSymbol(token: string): string {
  const { CLDRToPHPSymbolConversion } = CLDRDateFormatConfig;

  if (token in CLDRToPHPSymbolConversion) {
    return CLDRToPHPSymbolConversion[token];
  }

  if (wordPattern.test(token)) {
    throw unrecoverableViolation(
      `Unsupported CLDR symbol: "${token}". If string literal, wrap in delimiters`,
      "internationalization"
    );
  }

  return token;
}

export default intlRenderCLDRDate;
