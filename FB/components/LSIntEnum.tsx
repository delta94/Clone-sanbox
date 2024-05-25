__d("LSIntEnum", ["I64"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = new Map();

    function a(a) {
        var b = i.get(a);
        if (b != null) return b;
        b = (h || (h = d("I64"))).of_float(a);
        i.set(a, b);
        return b
    }

    function b(a) {
        return (h || (h = d("I64"))).to_float(a)
    }

    function c(a) {
        return (h || (h = d("I64"))).to_float(a)
    }
    g.ofNumber = a;
    g.toNumber = b;
    g.unwrapIntEnum = c
}), 98);


import { I64 } from './I64'; // Assuming I64 import

const enumMap = new Map<number, I64>();

/**
 * Converts a number to an LSIntEnum.
 * @param value The number to convert.
 * @returns The LSIntEnum representation of the number.
 */
function ofNumber(value: number): I64 {
  let enumValue = enumMap.get(value);
  if (enumValue !== undefined) return enumValue;
  
  enumValue = I64.ofFloat(value);
  enumMap.set(value, enumValue);
  return enumValue;
}

/**
 * Converts an LSIntEnum to a number.
 * @param enumValue The LSIntEnum to convert.
 * @returns The number representation of the LSIntEnum.
 */
function toNumber(enumValue: I64): number {
  return I64.toFloat(enumValue);
}

/**
 * Unwraps an LSIntEnum to a number.
 * @param enumValue The LSIntEnum to unwrap.
 * @returns The unwrapped number value.
 */
function unwrapIntEnum(enumValue: I64): number {
  return I64.toFloat(enumValue);
}

export default { ofNumber, toNumber, unwrapIntEnum };
