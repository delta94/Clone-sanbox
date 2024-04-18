__d("CometLruCache", ["recoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function () {
        function a(a) {
            this.$1 = a, a <= 0 && c("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"), this.$2 = new Map()
        }
        var b = a.prototype;
        b.set = function (a, b) {
            this.$2["delete"](a);
            this.$2.set(a, b);
            if (this.$2.size > this.$1) {
                a = this.$2.keys().next();
                a.done || this.$2["delete"](a.value)
            }
        };
        b.get = function (a) {
            var b = this.$2.get(a);
            b != null && (this.$2["delete"](a), this.$2.set(a, b));
            return b
        };
        b.has = function (a) {
            return this.$2.has(a)
        };
        b["delete"] = function (a) {
            this.$2["delete"](a)
        };
        b.size = function () {
            return this.$2.size
        };
        b.capacity = function () {
            return this.$1 - this.$2.size
        };
        b.clear = function () {
            this.$2.clear()
        };
        return a
    }();

    function a(a) {
        return new h(a)
    }
    g.create = a
}), 98);

import recoverableViolation from 'recoverableViolation';

class CometLruCache<K, V> {
  private cacheCapacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    if (capacity <= 0) {
      recoverableViolation('CometLruCache: Unable to create instance of cache with zero or negative capacity.', 'CometLruCache');
    }
    this.cacheCapacity = capacity;
    this.cache = new Map<K, V>();
  }

  set(key: K, value: V): void {
    this.cache.delete(key);
    this.cache.set(key, value);

    if (this.cache.size > this.cacheCapacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  delete(key: K): void {
    this.cache.delete(key);
  }

  size(): number {
    return this.cache.size;
  }

  capacity(): number {
    return this.cacheCapacity - this.cache.size;
  }

  clear(): void {
    this.cache.clear();
  }
}

const createCometLruCache = <K, V>(capacity: number) => new CometLruCache<K, V>(capacity);


export { CometLruCache, createCometLruCache };
