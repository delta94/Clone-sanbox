_d("justknobx", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    a = {
        getBool: function(a) {
            h(0, 47459)
        },
        getInt: function(a) {
            h(0, 47459)
        },
        _: function(a) {
            var b = i[a];
            b != null || h(0, 47458, a);
            return b.r
        },
        add: function(a, b) {
            for (var c in a)
                b && b.entry++,
                !(c in i) ? i[c] = a[c] : b && b.dup_entry++
        }
    };
    b = a;
    g["default"] = b
}
), 98);


// Define a type for the `JustKnobx` object
interface JustKnobx {
    getBool: (key: string) => void;
    getInt: (key: string) => void;
    _: (key: string) => any;
    add: (obj: Record<string, any>, stats?: { entry?: number; dup_entry?: number }) => void;
  }
  
  // Create an initial empty object for `i`
  const map: Record<string, any> = {};
  
  // Define the `justKnobx` object with the specified methods
  const justKnobx: JustKnobx = {
    getBool: (key) => {
      // Replace this with your desired implementation
      throw new Error(`getBool(${key}) not implemented`);
    },
    getInt: (key) => {
      // Replace this with your desired implementation
      throw new Error(`getInt(${key}) not implemented`);
    },
    _: (key) => {
      const value = map[key];
      if (value === undefined) {
        throw new Error(`Key '${key}' does not exist.`);
      }
      return value.r;
    },
    add: (obj, stats) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (stats) {
            stats.entry = stats.entry || 0;
            stats.dup_entry = stats.dup_entry || 0;
          }
  
          if (!(key in i)) {
            i[key] = obj[key];
          } else if (stats) {
            stats.dup_entry++;
          }
        }
      }
    },
  };
  
  export default justKnobx;
  