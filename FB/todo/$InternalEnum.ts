__d("$InternalEnum", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function i(a) {
        var b = h.get(a);
        if (b !== void 0) return b;
        var c = new Map();
        Object.getOwnPropertyNames(a).forEach(function (b) {
            c.set(a[b], b)
        });
        try {
            h.set(a, c)
        } catch (a) {}
        return c
    }
    var j = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function (a) {
                return i(this).has(a)
            }
        },
        cast: {
            value: function (a) {
                return this.isValid(a) ? a : void 0
            }
        },
        members: {
            value: function () {
                return i(this).keys()
            }
        },
        getName: {
            value: function (a) {
                return i(this).get(a)
            }
        }
    }));

    function a(a) {
        var b = Object.create(j);
        for (var c in a) g.call(a, c) && Object.defineProperty(b, c, {
            value: a[c]
        });
        return Object.freeze(b)
    }
    var k = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function (a) {
                return typeof a === "string" ? g.call(this, a) : !1
            }
        },
        cast: {
            value: j.cast
        },
        members: {
            value: function () {
                return Object.getOwnPropertyNames(this).values()
            }
        },
        getName: {
            value: function (a) {
                return a
            }
        }
    }));
    a.Mirrored = function (a) {
        var b = Object.create(k);
        for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
            value: a[c]
        });
        return Object.freeze(b)
    };
    Object.freeze(a.Mirrored);
    e.exports = Object.freeze(a)
}), null);


const WeakMapOrMap = typeof WeakMap === "function" ? new WeakMap() : new Map();

function getEnumMap(enumObject) {
    const cachedMap = WeakMapOrMap.get(enumObject);
    if (cachedMap !== undefined) {
      return cachedMap;
    }
  
    const enumMap = new Map();
    Object.getOwnPropertyNames(enumObject).forEach((key) => {
      enumMap.set(enumObject[key], key);
    });
  
    try {
      WeakMapOrMap.set(enumObject, enumMap);
    } catch (error) {}
  
    return enumMap;
  }

  const EnumMethods = Object.freeze({
    isValid(value) {
      return getEnumMap(this).has(value);
    },
  
    cast(value) {
      return this.isValid(value) ? value : undefined;
    },
  
    members() {
      return getEnumMap(this).keys();
    },
  
    getName(value) {
      return getEnumMap(this).get(value);
    },
  });

  function createEnum(enumObject) {
    const enumInstance = Object.create(EnumMethods);
  
    for (const key in enumObject) {
      if (Object.prototype.hasOwnProperty.call(enumObject, key)) {
        Object.defineProperty(enumInstance, key, { value: enumObject[key] });
      }
    }
  
    return Object.freeze(enumInstance);
  }

  const SimpleEnum = Object.freeze({
    isValid(value) {
      return typeof value === "string" ? this.hasOwnProperty(value) : false;
    },
  
    cast() {
      return EnumMethods.cast
    },
  
    members() {
      return Object.getOwnPropertyNames(this).values();
    },
  
    getName(value) {
      return value;
    },
  });

  createEnum.Mirrored = function (enumArray) {
    const mirroredEnum = Object.create(SimpleEnum);
  
    for (let i = 0; i < enumArray.length; ++i) {
      Object.defineProperty(mirroredEnum, enumArray[i], { value: enumArray[i] });
    }
  
    return Object.freeze(mirroredEnum);
  };

  export default createEnum;
