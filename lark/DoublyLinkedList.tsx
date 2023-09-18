uaTP: function(e, t, n) {
    "use strict";
    function r(e) {
        var t = this;
        if (t instanceof r || (t = new r),
        t.tail = null,
        t.head = null,
        t.length = 0,
        e && "function" == typeof e.forEach)
            e.forEach((function(e) {
                t.push(e)
            }
            ));
        else if (arguments.length > 0)
            for (var n = 0, o = arguments.length; n < o; n++)
                t.push(arguments[n]);
        return t
    }
    function o(e, t, n) {
        var r = t === e.head ? new s(n,null,t,e) : new s(n,t,t.next,e);
        return null === r.next && (e.tail = r),
        null === r.prev && (e.head = r),
        e.length++,
        r
    }
    function a(e, t) {
        e.tail = new s(t,e.tail,null,e),
        e.head || (e.head = e.tail),
        e.length++
    }
    function i(e, t) {
        e.head = new s(t,null,e.head,e),
        e.tail || (e.tail = e.head),
        e.length++
    }
    function s(e, t, n, r) {
        if (!(this instanceof s))
            return new s(e,t,n,r);
        this.list = r,
        this.value = e,
        t ? (t.next = this,
        this.prev = t) : this.prev = null,
        n ? (n.prev = this,
        this.next = n) : this.next = null
    }
    e.exports = r,
    r.Node = s,
    r.create = r,
    r.prototype.removeNode = function(e) {
        if (e.list !== this)
            throw new Error("removing node which does not belong to this list");
        var t = e.next
          , n = e.prev;
        return t && (t.prev = n),
        n && (n.next = t),
        e === this.head && (this.head = t),
        e === this.tail && (this.tail = n),
        e.list.length--,
        e.next = null,
        e.prev = null,
        e.list = null,
        t
    }
    ,
    r.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this,
            e.next = t,
            t && (t.prev = e),
            this.head = e,
            this.tail || (this.tail = e),
            this.length++
        }
    }
    ,
    r.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this,
            e.prev = t,
            t && (t.next = e),
            this.tail = e,
            this.head || (this.head = e),
            this.length++
        }
    }
    ,
    r.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++)
            a(this, arguments[e]);
        return this.length
    }
    ,
    r.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++)
            i(this, arguments[e]);
        return this.length
    }
    ,
    r.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev,
            this.tail ? this.tail.next = null : this.head = null,
            this.length--,
            e
        }
    }
    ,
    r.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next,
            this.head ? this.head.prev = null : this.tail = null,
            this.length--,
            e
        }
    }
    ,
    r.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++)
            e.call(t, n.value, r, this),
            n = n.next
    }
    ,
    r.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--)
            e.call(t, n.value, r, this),
            n = n.prev
    }
    ,
    r.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++)
            n = n.next;
        if (t === e && null !== n)
            return n.value
    }
    ,
    r.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++)
            n = n.prev;
        if (t === e && null !== n)
            return n.value
    }
    ,
    r.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new r, o = this.head; null !== o; )
            n.push(e.call(t, o.value, this)),
            o = o.next;
        return n
    }
    ,
    r.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new r, o = this.tail; null !== o; )
            n.push(e.call(t, o.value, this)),
            o = o.prev;
        return n
    }
    ,
    r.prototype.reduce = function(e, t) {
        var n, r = this.head;
        if (arguments.length > 1)
            n = t;
        else {
            if (!this.head)
                throw new TypeError("Reduce of empty list with no initial value");
            r = this.head.next,
            n = this.head.value
        }
        for (var o = 0; null !== r; o++)
            n = e(n, r.value, o),
            r = r.next;
        return n
    }
    ,
    r.prototype.reduceReverse = function(e, t) {
        var n, r = this.tail;
        if (arguments.length > 1)
            n = t;
        else {
            if (!this.tail)
                throw new TypeError("Reduce of empty list with no initial value");
            r = this.tail.prev,
            n = this.tail.value
        }
        for (var o = this.length - 1; null !== r; o--)
            n = e(n, r.value, o),
            r = r.prev;
        return n
    }
    ,
    r.prototype.toArray = function() {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++)
            e[t] = n.value,
            n = n.next;
        return e
    }
    ,
    r.prototype.toArrayReverse = function() {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++)
            e[t] = n.value,
            n = n.prev;
        return e
    }
    ,
    r.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0)
            return n;
        e < 0 && (e = 0),
        t > this.length && (t = this.length);
        for (var o = 0, a = this.head; null !== a && o < e; o++)
            a = a.next;
        for (; null !== a && o < t; o++,
        a = a.next)
            n.push(a.value);
        return n
    }
    ,
    r.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0)
            return n;
        e < 0 && (e = 0),
        t > this.length && (t = this.length);
        for (var o = this.length, a = this.tail; null !== a && o > t; o--)
            a = a.prev;
        for (; null !== a && o > e; o--,
        a = a.prev)
            n.push(a.value);
        return n
    }
    ,
    r.prototype.splice = function(e, t) {
        e > this.length && (e = this.length - 1),
        e < 0 && (e = this.length + e);
        for (var n = 0, r = this.head; null !== r && n < e; n++)
            r = r.next;
        var a = [];
        for (n = 0; r && n < t; n++)
            a.push(r.value),
            r = this.removeNode(r);
        null === r && (r = this.tail),
        r !== this.head && r !== this.tail && (r = r.prev);
        for (n = 2; n < arguments.length; n++)
            r = o(this, r, arguments[n]);
        return a
    }
    ,
    r.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            n.prev = n.next,
            n.next = r
        }
        return this.head = t,
        this.tail = e,
        this
    }
    ;
    try {
        n("tvKW")(r)
    } catch (e) {}
},







class ListNode {
    constructor(value, prev = null, next = null, list) {
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
  }
  
  class DoublyLinkedList {
    constructor(...args) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      if (args.length > 0) {
        args.forEach((arg) => this.push(arg));
      }
    }
  
    push(...values) {
      values.forEach((value) => this.addToTail(value));
      return this.length;
    }
  
    unshift(...values) {
      values.reverse().forEach((value) => this.addToHead(value));
      return this.length;
    }
  
    pop() {
      if (this.tail) {
        const value = this.tail.value;
        this.removeNode(this.tail);
        return value;
      }
    }
  
    shift() {
      if (this.head) {
        const value = this.head.value;
        this.removeNode(this.head);
        return value;
      }
    }
  
    forEach(callback, thisArg = this) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        callback.call(thisArg, current.value, index, this);
        current = current.next;
        index++;
      }
    }
  
    forEachReverse(callback, thisArg = this) {
      let current = this.tail;
      let index = this.length - 1;
      while (current !== null) {
        callback.call(thisArg, current.value, index, this);
        current = current.prev;
        index--;
      }
    }
  
    get(index) {
      if (index < 0 || index >= this.length) return;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current.value;
    }
  
    getReverse(index) {
      if (index < 0 || index >= this.length) return;
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current.value;
    }
  
    toArray() {
      const array = [];
      this.forEach((value) => array.push(value));
      return array;
    }
  
    toArrayReverse() {
      const array = [];
      this.forEachReverse((value) => array.push(value));
      return array;
    }
  
    slice(start, end) {
      if (start < 0) start = this.length + start;
      if (end < 0) end = this.length + end;
  
      const newList = new DoublyLinkedList();
      if (start >= end || start >= this.length) return newList;
  
      let current = this.head;
      for (let i = 0; i < start; i++) {
        current = current.next;
      }
  
      for (let i = start; i < end && current !== null; i++) {
        newList.addToTail(current.value);
        current = current.next;
      }
  
      return newList;
    }
  
    sliceReverse(start, end) {
      if (start < 0) start = this.length + start;
      if (end < 0) end = this.length + end;
  
      const newList = new DoublyLinkedList();
      if (start >= end || start >= this.length) return newList;
  
      let current = this.tail;
      for (let i = this.length - 1; i > start; i--) {
        current = current.prev;
      }
  
      for (let i = start; i < end && current !== null; i++) {
        newList.addToTail(current.value);
        current = current.prev;
      }
  
      return newList;
    }
  
    splice(index, ...values) {
      if (index < 0) index = this.length + index;
      if (index < 0 || index > this.length) return [];
  
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
  
      const removedValues = [];
      values.forEach((value) => {
        const newNode = new ListNode(value, current.prev, current, this);
        if (current.prev === null) {
          this.head = newNode;
        } else {
          current.prev.next = newNode;
        }
        current.prev = newNode;
        this.length++;
        removedValues.push(current.value);
        current = newNode;
      });
  
      return removedValues;
    }
  
    reverse() {
      let current = this.head;
      while (current !== null) {
        const temp = current.next;
        current.next = current.prev;
        current.prev = temp;
        current = temp;
      }
  
      const temp = this.head;
      this.head = this.tail;
      this.tail = temp;
  
      return this;
    }
  
    addToHead(value) {
      if (this.head === null) {
        this.head = new ListNode(value, null, null, this);
        this.tail = this.head;
      } else {
        this.head = new ListNode(value, null, this.head, this);
      }
      this.length++;
    }
  
    addToTail(value) {
      if (this.tail === null) {
        this.tail = new ListNode(value, null, null, this);
        this.head = this.tail;
      } else {
        this.tail = new ListNode(value, this.tail, null, this);
      }
      this.length++;
    }
  
    removeNode(node) {
      if (node.list !== this) {
        throw new Error("Removing a node that does not belong to this list");
      }
  
      const prevNode = node.prev;
      const nextNode = node.next;
  
      if (prevNode !== null) {
        prevNode.next = nextNode;
      } else {
        this.head = nextNode;
      }
  
      if (nextNode !== null) {
        nextNode.prev = prevNode;
      } else {
        this.tail = prevNode;
      }
  
      node.list = null;
      node.next = null;
      node.prev = null;
  
      this.length--;
  
      return nextNode;
    }
  }
  
  export default DoublyLinkedList;
  