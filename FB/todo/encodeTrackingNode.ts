__d("encodeTrackingNode", ["TrackingNodeConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        var c = function(a) {
            return Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, a)
        }
          , e = function(a, b) {
            var c = "";
            a = a;
            b = b;
            while (b > 0) {
                var e = a % d("TrackingNodeConstants").BASE_CODE_SIZE;
                c = String.fromCharCode(d("TrackingNodeConstants").BASE_CODE_START + e) + c;
                a = parseInt(a / d("TrackingNodeConstants").BASE_CODE_SIZE, 10);
                b -= 1
            }
            return c
        }
          , f = function(a) {
            a = a - d("TrackingNodeConstants").TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING - 1;
            if (a < c(2))
                return String.fromCharCode(d("TrackingNodeConstants").ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE) + e(a, 2);
            a -= c(2);
            return String.fromCharCode(d("TrackingNodeConstants").ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE) + e(a, 3)
        }
          , g = (a - 1) % d("TrackingNodeConstants").BASE_CODE_SIZE
          , h = parseInt((a - 1) / d("TrackingNodeConstants").BASE_CODE_SIZE, 10);
        if (a < 1 || a > (d("TrackingNodeConstants").PREFIX_CODE_SIZE + 1) * d("TrackingNodeConstants").BASE_CODE_SIZE + Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, 2) + Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, 3))
            throw Error("Invalid tracking node: " + a);
        var i = "";
        h > d("TrackingNodeConstants").PREFIX_CODE_SIZE ? i += f(a) : (h > 0 && (i += String.fromCharCode(h - 1 + d("TrackingNodeConstants").PREFIX_CODE_START)),
        i += String.fromCharCode(g + d("TrackingNodeConstants").BASE_CODE_START));
        b !== void 0 && b > 0 && (b > 10 && (i += "#"),
        i += parseInt(Math.min(b, d("TrackingNodeConstants").ENCODE_NUMBER_MAX) - 1, 10));
        return i
    }
    g["default"] = a
}
), 98);



import {
    BASE_CODE_SIZE,
    BASE_CODE_START,
    TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING,
    ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
    ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
    PREFIX_CODE_SIZE,
    PREFIX_CODE_START,
    ENCODE_NUMBER_MAX
  } from "TrackingNodeConstants";
  
  const encodeTrackingNode = (trackingNodeId, additionalInfo) => {
    const calculateBasePower = (exponent) => Math.pow(BASE_CODE_SIZE, exponent);
  
    const encodeBaseConversion = (value, length) => {
      let encodedValue = "";
      value = value;
      length = length;
      while (length > 0) {
        const remainder = value % BASE_CODE_SIZE;
        encodedValue = String.fromCharCode(BASE_CODE_START + remainder) + encodedValue;
        value = parseInt(value / BASE_CODE_SIZE, 10);
        length -= 1;
      }
      return encodedValue;
    };
  
    const encodeWithPrefix = (nodeId) => {
      nodeId = nodeId - TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING - 1;
      if (nodeId < calculateBasePower(2)) {
        return String.fromCharCode(ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE) + encodeBaseConversion(nodeId, 2);
      }
      nodeId -= calculateBasePower(2);
      return String.fromCharCode(ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE) + encodeBaseConversion(nodeId, 3);
    };
  
    const remainder = (trackingNodeId - 1) % BASE_CODE_SIZE;
    const quotient = parseInt((trackingNodeId - 1) / BASE_CODE_SIZE, 10);
  
    if (trackingNodeId < 1 || trackingNodeId > (PREFIX_CODE_SIZE + 1) * BASE_CODE_SIZE + calculateBasePower(2) + calculateBasePower(3)) {
      throw new Error("Invalid tracking node: " + trackingNodeId);
    }
  
    let encodedResult = "";
    quotient > PREFIX_CODE_SIZE ? (encodedResult += encodeWithPrefix(trackingNodeId)) : ((quotient > 0 && (encodedResult += String.fromCharCode(quotient - 1 + PREFIX_CODE_START))), (encodedResult += String.fromCharCode(remainder + BASE_CODE_START)));
  
    if (additionalInfo !== undefined && additionalInfo > 0) {
      if (additionalInfo > 10) {
        encodedResult += "#";
      }
      encodedResult += parseInt(Math.min(additionalInfo, ENCODE_NUMBER_MAX) - 1, 10);
    }
  
    return encodedResult;
  };
  
  export default encodeTrackingNode;
  