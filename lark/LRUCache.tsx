kI3H: function(e, t, n) {
    "use strict";
    const r = n("uaTP")
      , o = Symbol("max")
      , a = Symbol("length")
      , i = Symbol("lengthCalculator")
      , s = Symbol("allowStale")
      , c = Symbol("maxAge")
      , u = Symbol("dispose")
      , l = Symbol("noDisposeOnSet")
      , d = Symbol("lruList")
      , p = Symbol("cache")
      , f = Symbol("updateAgeOnGet")
      , h = ()=>1;
    const _ = (e,t,n)=>{
        const r = e[p].get(t);
        if (r) {
            const t = r.value;
            if (E(e, t)) {
                if (g(e, r),
                !e[s])
                    return
            } else
                n && (e[f] && (r.value.now = Date.now()),
                e[d].unshiftNode(r));
            return t.value
        }
    }
      , E = (e,t)=>{
        if (!t || !t.maxAge && !e[c])
            return !1;
        const n = Date.now() - t.now;
        return t.maxAge ? n > t.maxAge : e[c] && n > e[c]
    }
      , m = e=>{
        if (e[a] > e[o])
            for (let t = e[d].tail; e[a] > e[o] && null !== t; ) {
                const n = t.prev;
                g(e, t),
                t = n
            }
    }
      , g = (e,t)=>{
        if (t) {
            const n = t.value;
            e[u] && e[u](n.key, n.value),
            e[a] -= n.length,
            e[p].delete(n.key),
            e[d].removeNode(t)
        }
    }
    ;
    class T {
        constructor(e, t, n, r, o) {
            this.key = e,
            this.value = t,
            this.length = n,
            this.now = r,
            this.maxAge = o || 0
        }
    }
    const A = (e,t,n,r)=>{
        let o = n.value;
        E(e, o) && (g(e, n),
        e[s] || (o = void 0)),
        o && t.call(r, o.value, o.key, e)
    }
    ;
    e.exports = class {
        constructor(e) {
            if ("number" == typeof e && (e = {
                max: e
            }),
            e || (e = {}),
            e.max && ("number" != typeof e.max || e.max < 0))
                throw new TypeError("max must be a non-negative number");
            this[o] = e.max || 1 / 0;
            const t = e.length || h;
            if (this[i] = "function" != typeof t ? h : t,
            this[s] = e.stale || !1,
            e.maxAge && "number" != typeof e.maxAge)
                throw new TypeError("maxAge must be a number");
            this[c] = e.maxAge || 0,
            this[u] = e.dispose,
            this[l] = e.noDisposeOnSet || !1,
            this[f] = e.updateAgeOnGet || !1,
            this.reset()
        }
        set max(e) {
            if ("number" != typeof e || e < 0)
                throw new TypeError("max must be a non-negative number");
            this[o] = e || 1 / 0,
            m(this)
        }
        get max() {
            return this[o]
        }
        set allowStale(e) {
            this[s] = !!e
        }
        get allowStale() {
            return this[s]
        }
        set maxAge(e) {
            if ("number" != typeof e)
                throw new TypeError("maxAge must be a non-negative number");
            this[c] = e,
            m(this)
        }
        get maxAge() {
            return this[c]
        }
        set lengthCalculator(e) {
            "function" != typeof e && (e = h),
            e !== this[i] && (this[i] = e,
            this[a] = 0,
            this[d].forEach(e=>{
                e.length = this[i](e.value, e.key),
                this[a] += e.length
            }
            )),
            m(this)
        }
        get lengthCalculator() {
            return this[i]
        }
        get length() {
            return this[a]
        }
        get itemCount() {
            return this[d].length
        }
        rforEach(e, t) {
            t = t || this;
            for (let n = this[d].tail; null !== n; ) {
                const r = n.prev;
                A(this, e, n, t),
                n = r
            }
        }
        forEach(e, t) {
            t = t || this;
            for (let n = this[d].head; null !== n; ) {
                const r = n.next;
                A(this, e, n, t),
                n = r
            }
        }
        keys() {
            return this[d].toArray().map(e=>e.key)
        }
        values() {
            return this[d].toArray().map(e=>e.value)
        }
        reset() {
            this[u] && this[d] && this[d].length && this[d].forEach(e=>this[u](e.key, e.value)),
            this[p] = new Map,
            this[d] = new r,
            this[a] = 0
        }
        dump() {
            return this[d].map(e=>!E(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }).toArray().filter(e=>e)
        }
        dumpLru() {
            return this[d]
        }
        set(e, t, n) {
            if ((n = n || this[c]) && "number" != typeof n)
                throw new TypeError("maxAge must be a number");
            const r = n ? Date.now() : 0
              , s = this[i](t, e);
            if (this[p].has(e)) {
                if (s > this[o])
                    return g(this, this[p].get(e)),
                    !1;
                const i = this[p].get(e).value;
                return this[u] && (this[l] || this[u](e, i.value)),
                i.now = r,
                i.maxAge = n,
                i.value = t,
                this[a] += s - i.length,
                i.length = s,
                this.get(e),
                m(this),
                !0
            }
            const f = new T(e,t,s,r,n);
            return f.length > this[o] ? (this[u] && this[u](e, t),
            !1) : (this[a] += f.length,
            this[d].unshift(f),
            this[p].set(e, this[d].head),
            m(this),
            !0)
        }
        has(e) {
            if (!this[p].has(e))
                return !1;
            const t = this[p].get(e).value;
            return !E(this, t)
        }
        get(e) {
            return _(this, e, !0)
        }
        peek(e) {
            return _(this, e, !1)
        }
        pop() {
            const e = this[d].tail;
            return e ? (g(this, e),
            e.value) : null
        }
        del(e) {
            g(this, this[p].get(e))
        }
        load(e) {
            this.reset();
            const t = Date.now();
            for (let n = e.length - 1; n >= 0; n--) {
                const r = e[n]
                  , o = r.e || 0;
                if (0 === o)
                    this.set(r.k, r.v);
                else {
                    const e = o - t;
                    e > 0 && this.set(r.k, r.v, e)
                }
            }
        }
        prune() {
            this[p].forEach((e,t)=>_(this, t, !1))
        }
    }
},




import DoublyLinkedList from 'some-module-doubly-linked-list'; // Replace with the actual module import

const maxSymbol = Symbol("max");
const lengthSymbol = Symbol("length");
const lengthCalculatorSymbol = Symbol("lengthCalculator");
const allowStaleSymbol = Symbol("allowStale");
const maxAgeSymbol = Symbol("maxAge");
const disposeSymbol = Symbol("dispose");
const noDisposeOnSetSymbol = Symbol("noDisposeOnSet");
const lruListSymbol = Symbol("lruList");
const cacheSymbol = Symbol("cache");
const updateAgeOnGetSymbol = Symbol("updateAgeOnGet");
const defaultLengthCalculator = () => 1;

const getValue = (cache, key, callback) => {
  const entry = cache[cacheSymbol].get(key);
  if (entry) {
    const value = entry.value;
    if (isStale(cache, value)) {
      evict(cache, entry);
      if (!cache[allowStaleSymbol]) return;
    } else if (cache[updateAgeOnGetSymbol]) {
      value.now = Date.now();
    }
    return value.value;
  }
};

const isStale = (cache, value) => {
  if (!value || (!value.maxAge && !cache[maxAgeSymbol])) return false;
  const age = Date.now() - value.now;
  return value.maxAge ? age > value.maxAge : cache[maxAgeSymbol] && age > cache[maxAgeSymbol];
};

const evict = (cache, entry) => {
  if (entry) {
    const value = entry.value;
    if (cache[disposeSymbol]) cache[disposeSymbol](value.key, value.value);
    cache[lengthSymbol] -= value.length;
    cache[cacheSymbol].delete(value.key);
    cache[lruListSymbol].removeNode(entry);
  }
};

class CacheEntry {
  constructor(key, value, length, now, maxAge = 0) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge;
  }
}

const forEach = (cache, callback, thisArg) => {
  thisArg = thisArg || cache;
  for (let entry = cache[lruListSymbol].tail; entry !== null; ) {
    const prevEntry = entry.prev;
    callback(cache, entry, thisArg);
    entry = prevEntry;
  }
};

const resetCache = (cache) => {
  if (cache[disposeSymbol] && cache[lruListSymbol].length) {
    forEach(cache, (cache, entry) => cache[disposeSymbol](entry.key, entry.value));
  }
  cache[cacheSymbol] = new Map();
  cache[lruListSymbol] = new DoublyLinkedList();
  cache[lengthSymbol] = 0;
};

const dumpCache = (cache) => {
  return cache[lruListSymbol].map((entry) => {
    if (!isStale(cache, entry.value)) {
      return {
        k: entry.key,
        v: entry.value.value,
        e: entry.value.now + (entry.value.maxAge || 0),
      };
    }
  });
};

const dumpLruCache = (cache) => {
  return cache[lruListSymbol];
};

export default class LRUCache {
  constructor(options) {
    options = options || {};
    if (typeof options.max === 'number' && options.max < 0) {
      throw new TypeError("max must be a non-negative number");
    }
    this[maxSymbol] = options.max || Infinity;
    const length = options.length || defaultLengthCalculator;
    this[lengthCalculatorSymbol] = typeof length === 'function' ? length : defaultLengthCalculator;
    this[allowStaleSymbol] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') {
      throw new TypeError("maxAge must be a number");
    }
    this[maxAgeSymbol] = options.maxAge || 0;
    this[disposeSymbol] = options.dispose;
    this[noDisposeOnSetSymbol] = options.noDisposeOnSet || false;
    this[updateAgeOnGetSymbol] = options.updateAgeOnGet || false;
    this.reset();
  }

  set max(max) {
    if (typeof max !== 'number' || max < 0) {
      throw new TypeError("max must be a non-negative number");
    }
    this[maxSymbol] = max || Infinity;
    evictItems(this);
  }

  get max() {
    return this[maxSymbol];
  }

  set allowStale(allowStale) {
    this[allowStaleSymbol] = !!allowStale;
  }

  get allowStale() {
    return this[allowStaleSymbol];
  }

  set maxAge(maxAge) {
    if (typeof maxAge !== 'number') {
      throw new TypeError("maxAge must be a non-negative number");
    }
    this[maxAgeSymbol] = maxAge;
    evictItems(this);
  }

  get maxAge() {
    return this[maxAgeSymbol];
  }

  set lengthCalculator(lengthCalculator) {
    if (typeof lengthCalculator !== 'function') lengthCalculator = defaultLengthCalculator;
    if (lengthCalculator !== this[lengthCalculatorSymbol]) {
      this[lengthCalculatorSymbol] = lengthCalculator;
      this[lengthSymbol] = 0;
      forEach(this, (cache, entry) => {
        entry.length = cache[lengthCalculatorSymbol](entry.value.value, entry.key);
        cache[lengthSymbol] += entry.length;
      });
      evictItems(this);
    }
  }

  get lengthCalculator() {
    return this[lengthCalculatorSymbol];
  }

  get length() {
    return this[lengthSymbol];
  }

  get itemCount() {
    return this[lruListSymbol].length;
  }

  rforEach(callback, thisArg) {
    thisArg = thisArg || this;
    for (let entry = this[lruListSymbol].tail; entry !== null; ) {
      const prevEntry = entry.prev;
      callback.call(thisArg, entry.value.value, entry.key, this);
      entry = prevEntry;
    }
  }

  forEach(callback, thisArg) {
    thisArg = thisArg || this;
    for (let entry = this[lruListSymbol].head; entry !== null; ) {
      const nextEntry = entry.next;
      callback.call(thisArg, entry.value.value, entry.key, this);
      entry = nextEntry;
    }
  }

  keys() {
    return this[lruListSymbol].toArray().map((entry) => entry.key);
  }

  values() {
    return this[lruListSymbol].toArray().map((entry) => entry.value.value);
  }

  reset() {
    resetCache(this);
  }

  dump() {
    return dumpCache(this).filter((entry) => entry);
  }

  dumpLru() {
    return dumpLruCache(this);
  }

  set(key, value, maxAge) {
    if (maxAge && typeof maxAge !== 'number') {
      throw new TypeError("maxAge must be a number");
    }
    const now = maxAge ? Date.now() : 0;
    const length = this[lengthCalculatorSymbol](value, key);
    if (this[cacheSymbol].has(key)) {
      if (length > this[maxSymbol]) {
        evict(this, this[cacheSymbol].get(key));
        return false;
      }
      const entry = this[cacheSymbol].get(key).value;
      if (isStale(this, entry)) {
        evict(this, this[cacheSymbol].get(key));
        if (!this[allowStaleSymbol]) return false;
      } else if (this[updateAgeOnGetSymbol]) {
        entry.now = now;
      }
      entry.maxAge = maxAge;
      entry.value = value;
      this[lengthSymbol] += length - entry.length;
      entry.length = length;
      this.get(key);
      evictItems(this);
      return true;
    }
    const newEntry = new CacheEntry(key, value, length, now, maxAge);
    if (newEntry.length > this[maxSymbol]) {
      if (this[disposeSymbol]) this[disposeSymbol](key, value);
      return false;
    }
    this[lengthSymbol] += newEntry.length;
    this[lruListSymbol].unshift(newEntry);
    this[cacheSymbol].set(key, this[lruListSymbol].head);
    evictItems(this);
    return true;
  }

  has(key) {
    if (!this[cacheSymbol].has(key)) return false;
    const value = this[cacheSymbol].get(key).value;
    return !isStale(this, value);
  }

  get(key) {
    return getValue(this, key, true);
  }

  peek(key) {
    return getValue(this, key, false);
  }

  pop() {
    const entry = this[lruListSymbol].tail;
    return entry ? (evict(this, entry), entry.value.value) : null;
  }

  del(key) {
    evict(this, this[cacheSymbol].get(key));
  }

  load(entries) {
    this.reset();
    const now = Date.now();
    for (let i = entries.length - 1; i >= 0; i--) {
      const entry = entries[i];
      const maxAge = entry.e || 0;
      if (maxAge === 0) {
        this.set(entry.k, entry.v);
      } else {
        const age = maxAge - now;
        if (age > 0) this.set(entry.k, entry.v, age);
      }
    }
  }

  prune() {
    this[cacheSymbol].forEach((entry, key) => getValue(this, key, false));
  }
}
