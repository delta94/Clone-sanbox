// __d("BPlusTree", ["unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = {
//         gt: [!1, 0],
//         gte: [!0, 0],
//         lt: [!0, 1],
//         lte: [!1, 1]
//     };
//     a = function () {
//         function a(a, b) {
//             b === void 0 && (b = 32), this.$3 = {
//                 children: [],
//                 isLeaf: !0,
//                 keys: []
//             }, this.$4 = this.$3, this.$5 = this.$3, this.$1 = a, this.$2 = b
//         }
//         a.fromSorted = function (a, b, c) {
//             b = new this(b, c);
//             c = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
//             a = c.next();
//             while (!a.done) {
//                 var d = [],
//                     e = b.$5,
//                     f;
//                 while (!e.isLeaf) d.push([e, -1]), f = e.keys.length, e = e.children[f];
//                 f = (b.$2 - 1) * 2;
//                 f = f - e.keys.length;
//                 while (!a.done && f > 0) e.keys.push(a.value[0]), e.children.push(a.value[1]), f--, a = c.next();
//                 b.$6(e, d, !0)
//             }
//             return b
//         };
//         var b = a.prototype;
//         b.$7 = function (a, b) {
//             var c = this.$5,
//                 d = -1;
//             while (!c.isLeaf) b == null ? void 0 : b.push([c, d]), d = this.$8(c.keys, a, h.gt), d === -1 && (d = c.keys.length), c = c.children[d];
//             return [c, d]
//         };
//         b.$8 = function (a, b, c) {
//             var d = 0,
//                 e = a.length - 1;
//             while (d <= e) {
//                 var f = d + e >> 1;
//                 (c[0] ? this.$1(a[f], b) < 0 : this.$1(a[f], b) <= 0) ? d = f + 1: e = f - 1
//             }
//             f = [d, e][c[1]];
//             return f === a.length ? -1 : f
//         };
//         b.$9 = function (a, b) {
//             if (!a.length) {
//                 a.push(b);
//                 return [0, 0]
//             }
//             var c = this.$8(a, b, h.gte);
//             if (c === -1) return [a.push(b) - 1, 0];
//             else if (this.$1(a[c], b) === 0) return [c, 1];
//             a.splice(c, 0, b);
//             return [c, 0]
//         };
//         b.$6 = function (a, b, c) {
//             for (var a = a, d; a.keys.length >= this.$2; a = d) {
//                 var d = b.pop() || [this.$5 = {
//                     children: [a],
//                     isLeaf: !1,
//                     keys: []
//                 }];
//                 d = d[0];
//                 var e = Math.floor(a.keys.length / 2),
//                     f = void 0;
//                 a.isLeaf ? (f = a.next = {
//                     children: a.children.slice(e),
//                     isLeaf: !0,
//                     keys: a.keys.slice(e),
//                     next: a.next,
//                     prev: a
//                 }, f.next ? f.next.prev = f : this.$4 = f) : f = {
//                     children: a.children.slice(e + 1),
//                     isLeaf: !1,
//                     keys: a.keys.slice(e + 1)
//                 };
//                 if (c) d.keys.push(a.keys[e]), d.children.push(f);
//                 else {
//                     var g = this.$9(d.keys, a.keys[e]);
//                     g = g[0];
//                     d.children.splice(g + 1, 0, f)
//                 }
//                 a.keys.length = e;
//                 a.children.length = e + (a.isLeaf ? 0 : 1)
//             }
//         };
//         b.clear = function () {
//             this.$5 = this.$3 = this.$4 = {
//                 children: [],
//                 isLeaf: !0,
//                 keys: []
//             }
//         };
//         b.delete = function (a) {
//             var b = Math.floor(this.$2 / 2),
//                 d = [],
//                 e = this.$7(a, d),
//                 f = e[0];
//             e = e[1];
//             var g = this.$8(f.keys, a, h.gte);
//             if (g === -1 || this.$1(f.keys[g], a) !== 0) return !1;
//             f.keys.splice(g, 1);
//             f.children.splice(g, 1);
//             for (var a = f, g = e, e, f; a.keys.length < b && d.length; o = [e, f], a = o[0], g = o[1], o) {
//                 f = d.pop();
//                 e = f[0];
//                 f = f[1];
//                 var i = [
//                     [e.children[g - 1], a, g - 1],
//                     [a, e.children[g + 1], g]
//                 ].filter(function (a) {
//                     var b = a[0];
//                     a = a[1];
//                     return b && a
//                 });
//                 for (var j of i) {
//                     var k = j[0],
//                         l = j[1],
//                         m = j[2];
//                     if (k.keys.length + l.keys.length >= b * 2) {
//                         if (a.isLeaf) {
//                             var n = [].concat(k.children, l.children),
//                                 o = [].concat(k.keys, l.keys);
//                             k.children = (l.children = n).splice(0, b);
//                             k.keys = (l.keys = o).splice(0, b);
//                             e.keys[m] = o[0]
//                         } else {
//                             n = [].concat(k.children, l.children);
//                             o = [].concat(k.keys, [e.keys[m]], l.keys);
//                             k.children = (l.children = n).splice(0, b + 1);
//                             e.keys[m] = o.splice(b, 1)[0];
//                             k.keys = (l.keys = o).splice(0, b)
//                         }
//                         return !0
//                     }
//                 }
//                 for (n of i) {
//                     m = n[0];
//                     k = n[1];
//                     l = n[2];
//                     m.children = [].concat(m.children, k.children);
//                     a.isLeaf ? (m.keys = [].concat(m.keys, k.keys), k.keys.length = 0, k.next ? k.next.prev = m : this.$4 = m, m.next = k.next) : m.keys = [].concat(m.keys, [e.keys[l]], k.keys);
//                     e.keys.splice(l, 1);
//                     e.children.splice(l + 1, 1);
//                     break
//                 }
//             }
//             if (!this.$5.keys.length && this.$5.children.length) {
//                 j = this.$5;
//                 if (j.isLeaf) throw c("unrecoverableViolation")("cannot be leaf", "messenger_web_product");
//                 this.$5 = j.children[0]
//             }
//             return !0
//         };
//         b.entries = function* (a) {
//             a = a === void 0 ? {} : a;
//             var b = a.dir;
//             b = b === void 0 ? "asc" : b;
//             a = babelHelpers.objectWithoutPropertiesLoose(a, ["dir"]);
//             if (Object.prototype.hasOwnProperty.call(a, "gt") && Object.prototype.hasOwnProperty.call(a, "gte")) throw c("unrecoverableViolation")("cannot specify both greater than and greater than or equal", "messenger_web_product");
//             if (Object.prototype.hasOwnProperty.call(a, "lt") && Object.prototype.hasOwnProperty.call(a, "lte")) throw c("unrecoverableViolation")("cannot specify both less than and less than or equal", "messenger_web_product");
//             if (b === "asc") {
//                 if (Object.prototype.hasOwnProperty.call(a, "gt")) {
//                     b = this.$7(a.gt);
//                     b = b[0]
//                 } else if (Object.prototype.hasOwnProperty.call(a, "gte")) {
//                     var d = this.$7(a.gte);
//                     b = d[0]
//                 } else b = this.$3;
//                 d = Object.prototype.hasOwnProperty.call(a, "gt") ? this.$8(b.keys, a.gt, h.gt) : Object.prototype.hasOwnProperty.call(a, "gte") ? this.$8(b.keys, a.gte, h.gte) : 0;
//                 while (b) {
//                     var e = b;
//                     while (d !== -1 && d < e.keys.length) {
//                         var f = e.keys[d];
//                         if (Object.prototype.hasOwnProperty.call(a, "lt") && this.$1(f, a.lt) >= 0 || Object.prototype.hasOwnProperty.call(a, "lte") && this.$1(f, a.lte) > 0) return;
//                         var g = (yield [e.keys[d], e.children[d]]);
//                         if (g != null) {
//                             if (this.$1(g, f) <= 0) throw c("unrecoverableViolation")("key must be greater than current key", "messenger_web_product");
//                             d = this.$8(e.keys, g, h.gte);
//                             if (d === -1) {
//                                 var i = this.$7(g);
//                                 e = i[0];
//                                 d = this.$8(e.keys, g, h.gte)
//                             }
//                         } else {
//                             i = e.keys[d] !== f;
//                             if (i) {
//                                 d = this.$8(e.keys, f, h.lte);
//                                 if (d === -1) {
//                                     g = this.$7(f);
//                                     e = g[0];
//                                     d = this.$8(e.keys, f, h.lte)
//                                 }
//                             }
//                             d++
//                         }
//                     }
//                     b = e.next;
//                     d = 0
//                 }
//             } else {
//                 if (Object.prototype.hasOwnProperty.call(a, "lt")) {
//                     i = this.$7(a.lt);
//                     b = i[0]
//                 } else if (Object.prototype.hasOwnProperty.call(a, "lte")) {
//                     g = this.$7(a.lte);
//                     b = g[0]
//                 } else b = this.$4;
//                 f = Object.prototype.hasOwnProperty.call(a, "lt") ? this.$8(b.keys, a.lt, h.lt) : Object.prototype.hasOwnProperty.call(a, "lte") ? this.$8(b.keys, a.lte, h.lte) : b.keys.length - 1;
//                 while (b) {
//                     e = b;
//                     while (f !== -1 && f >= 0) {
//                         d = e.keys[f];
//                         if (Object.prototype.hasOwnProperty.call(a, "gt") && this.$1(d, a.gt) <= 0 || Object.prototype.hasOwnProperty.call(a, "gte") && this.$1(d, a.gte) < 0) return;
//                         i = (yield [e.keys[f], e.children[f]]);
//                         if (i != null) {
//                             if (this.$1(i, d) >= 0) throw c("unrecoverableViolation")("key must be less than current key", "messenger_web_product");
//                             f = this.$8(e.keys, i, h.lte);
//                             if (f === -1) {
//                                 g = this.$7(i);
//                                 e = g[0];
//                                 f = this.$8(e.keys, i, h.lte)
//                             }
//                         } else {
//                             g = e.keys[f] !== d;
//                             if (g) {
//                                 f = this.$8(e.keys, d, h.gte);
//                                 if (f === -1) {
//                                     i = this.$7(d);
//                                     e = i[0];
//                                     f = this.$8(e.keys, d, h.gte)
//                                 }
//                             }
//                             f--
//                         }
//                     }
//                     b = e.prev;
//                     f = b != null ? b.keys.length - 1 : -1
//                 }
//             }
//         };
//         b.get = function (a) {
//             var b = this.$7(a);
//             b = b[0];
//             var d = this.$8(b.keys, a, h.gte);
//             if (d === -1 || this.$1(b.keys[d], a) !== 0) throw c("unrecoverableViolation")("key not found: " + String(a), "messenger_web_product");
//             return b.children[d]
//         };
//         b.getWithDefault = function (a, b) {
//             var c = this.$7(a);
//             c = c[0];
//             var d = this.$8(c.keys, a, h.gte);
//             return d === -1 || this.$1(c.keys[d], a) !== 0 ? b : c.children[d]
//         };
//         b.has = function (a) {
//             var b = this,
//                 c = this.$7(a);
//             c = c[0];
//             return c.keys.findIndex(function (c) {
//                 return b.$1(a, c) === 0
//             }) !== -1
//         };
//         b.set = function (a, b) {
//             var c = [],
//                 d = this.$7(a, c);
//             d = d[0];
//             a = this.$9(d.keys, a);
//             var e = a[0];
//             a = a[1];
//             d.children.splice(e, a, b);
//             this.$6(d, c, !1);
//             return this
//         };
//         return a
//     }();
//     g.default = a
// }), 98);



import {
    unrecoverableViolation
} from 'unrecoverableViolation';

const COMPARISON_TYPES = {
    gt: [false, 0] as const,
    gte: [true, 0] as const,
    lt: [true, 1] as const,
    lte: [false, 1] as const,
};

interface BPlusTreeNode<K, V> {
    children: Array<BPlusTreeNode<K, V>>;
    isLeaf: boolean;
    keys: K[];
    next?: BPlusTreeNode<K, V>;
    prev?: BPlusTreeNode<K, V>;
}
  
interface ComparisonFn<K> {
    (a: K, b: K): number;
}

type ComparisonType = keyof typeof COMPARISON_TYPES;


class BPlusTree<K, V> {
    private root: BPlusTreeNode<K, V>;
    private maxKeysPerNode: number;
    private compareKeys: ComparisonFn<K>;

    constructor(comparator: ComparisonFn<K>, maxKeysPerNode: number = 32) {
        this.root = {
            children: [],
            isLeaf: true,
            keys: [],
        };
        this.compareKeys = comparator;
        this.maxKeysPerNode = maxKeysPerNode;
    } 

    static fromSorted<K, V>(sortedEntries: Array<[K, V]>, comparator: ComparisonFn<K>, maxKeysPerNode: number): BPlusTree<K, V> {
        const tree = new this(comparator, maxKeysPerNode);
        const iterator = sortedEntries[Symbol.iterator]();
        let next = iterator.next();

        while (!next.done) {
            let path: [BPlusTreeNode<K, V>, number][] = [];
            let node = tree.root;
            let i: number;
      
            while (!node.isLeaf) {
              path.push([node, -1]);
              i = node.keys.length;
              node = node.children[i];
            }
      
            i = (tree.maxKeysPerNode - 1) * 2;
            i = i - node.keys.length;
      
            while (!next.done && i > 0) {
              node.keys.push(next.value[0]);
              node.children.push(next.value[1]);
              i--;
              next = iterator.next();
            }
      
            tree.rebalanceTree(node, path, true);
        }

        return tree
    }

    findNode(key, path) {
        let node = this.root;
        let index = -1;
        while (!node.isLeaf) {
            path?.push([node, index]);
            index = this.binarySearch(node.keys, key, COMPARE_OPERATORS.greaterThan);
            if (index === -1) index = node.keys.length;
            node = node.children[index] as Node<K, V>;
        }
        return [node, index];
    }

    binarySearch(keys, key, compareOperator) {
        let low = 0;
        let high = keys.length - 1;
        while (low <= high) {
            const mid = (low + high) >> 1;
            (compareOperator[0] ? this.compareKeys(keys[mid], key) < 0 : this.compareKeys(keys[mid], key) <= 0) ? (low = mid + 1) : (high = mid - 1);
        }
        const index = [low, high][compareOperator[1]];
        return index === keys.length ? -1 : index;
    }

    insertOrReplace(keys, key) {
        if (!keys.length) {
            keys.push(key);
            return [0, 0];
        }
        const index = this.binarySearch(keys, key, COMPARE_OPERATORS.greaterThanOrEqual);
        if (index === -1) return [keys.push(key) - 1, 0];
        else if (this.compareKeys(keys[index], key) === 0) return [index, 1];
        keys.splice(index, 0, key);
        return [index, 0];
    }

    rebalanceTree(node, path, splitNode) {
        let parent;
        while (node.keys.length >= this.maxKeysPerNode) {
            parent = path.pop() || [
                (this.root = {
                    children: [node],
                    isLeaf: false,
                    keys: []
                })
            ];
            parent = parent[0];
            const splitIndex = Math.floor(node.keys.length / 2);
            let newNode;
            if (node.isLeaf) {
                newNode = node.next = {
                    children: node.children.slice(splitIndex),
                    isLeaf: true,
                    keys: node.keys.slice(splitIndex),
                    next: node.next,
                    prev: node
                };
                newNode.next ? (newNode.next.prev = newNode) : (this.tail = newNode);
            } else {
                newNode = {
                    children: node.children.slice(splitIndex + 1),
                    isLeaf: false,
                    keys: node.keys.slice(splitIndex + 1)
                };
            }
            if (splitNode) {
                parent.keys.push(node.keys[splitIndex]);
                parent.children.push(newNode);
            } else {
                const insertResult = this.insertOrReplace(parent.keys, node.keys[splitIndex]);
                const insertIndex = insertResult[0];
                parent.children.splice(insertIndex + 1, 0, newNode);
            }
            node.keys.length = splitIndex;
            node.children.length = splitIndex + (node.isLeaf ? 0 : 1);
            node = parent;
        }
    }

    clear() {
        this.root = this.head = this.tail = {
            children: [],
            isLeaf: true,
            keys: []
        };
    }

    delete(key: K): boolean {
            const minKeysPerNode = Math.floor(this.maxKeysPerNode / 2);
            const path: [Node<K, V>, number][] = [];
            const [node, index] = this.findNode(key, path);
            
            const keyIndex = this.binarySearch(node.keys, key, COMPARE_OPERATORS.greaterThanOrEqual);
            if (keyIndex === -1 || this.compareKeys(node.keys[keyIndex], key) !== 0) return false;
            node.keys.splice(keyIndex, 1);
            node.children.splice(keyIndex, 1);
            let currentNode = node;
            let siblingNode;
            while (currentNode.keys.length < minKeysPerNode && path.length) {
                [index, node] = siblingNode;
                currentNode = siblingNode[0];
                const siblings = [
                    [index.children[node - 1], currentNode, node - 1],
                    [currentNode, index.children[node + 1], node]
                ].filter(([sibling, node]) => sibling && node);
                for (const [leftSibling, rightSibling, siblingIndex] of siblings) {
                    if (leftSibling.keys.length + rightSibling.keys.length >= minKeysPerNode * 2) {
                        if (currentNode.isLeaf) {
                            const mergedChildren = [...leftSibling.children, ...rightSibling.children];
                            const mergedKeys = [...leftSibling.keys, ...rightSibling.keys];
                            leftSibling.children = (rightSibling.children = mergedChildren).splice(0, minKeysPerNode);
                            leftSibling.keys = (rightSibling.keys = mergedKeys).splice(0, minKeysPerNode);
                            index.keys[siblingIndex] = mergedKeys[0];
                        } else {
                            const mergedChildren = [...leftSibling.children, ...rightSibling.children];
                            const mergedKeys = [...leftSibling.keys, index.keys[siblingIndex], ...rightSibling.keys];
                            leftSibling.children = (rightSibling.children = mergedChildren).splice(0, minKeysPerNode + 1);
                            index.keys[siblingIndex] = mergedKeys.splice(minKeysPerNode, 1)[0];
                            leftSibling.keys = (rightSibling.keys = mergedKeys).splice(0, minKeysPerNode);
                        }
                        return true;
                    }
                }
                for (const [leftSibling, rightSibling, siblingIndex] of siblings) {
                    leftSibling.children = [...leftSibling.children, ...rightSibling.children];
                    if (currentNode.isLeaf) {
                        leftSibling.keys = [...leftSibling.keys, ...rightSibling.keys];
                        rightSibling.keys.length = 0;
                        rightSibling.next ? (rightSibling.next.prev = leftSibling) : (this.tail = leftSibling);
                        leftSibling.next = rightSibling.next;
                    } else {
                        leftSibling.keys = [...leftSibling.keys, index.keys[siblingIndex], ...rightSibling.keys];
                    }
                    index.keys.splice(siblingIndex, 1);
                    index.children.splice(siblingIndex + 1, 1);
                    break;
                }
                [node, index] = path.pop();
            }
            if (!this.root.keys.length && this.root.children.length) {
                const oldRoot = this.root;
                if (oldRoot.isLeaf) throw unrecoverableViolation('cannot be leaf', 'messenger_web_product');
                this.root = oldRoot.children[0];
            }
            return true;
        }
        * entries(options = {}) {
            let {
                dir = 'asc', ...rest
            } = options;
            if (rest.hasOwnProperty('greaterThan') && rest.hasOwnProperty('greaterThanOrEqual')) {
                throw unrecoverableViolation('cannot specify both greater than and greater than or equal', 'messenger_web_product');
            }
            if (rest.hasOwnProperty('lessThan') && rest.hasOwnProperty('lessThanOrEqual')) {
                throw unrecoverableViolation('cannot specify both less than and less than or equal', 'messenger_web_product');
            }
            if (dir === 'asc') {
                let currentNode;
                if (rest.hasOwnProperty('greaterThan')) {
                    [currentNode] = this.findNode(rest.greaterThan);
                } else if (rest.hasOwnProperty('greaterThanOrEqual')) {
                    [currentNode] = this.findNode(rest.greaterThanOrEqual);
                } else {
                    currentNode = this.head;
                }
                let currentIndex = rest.hasOwnProperty('greaterThan') ?
                    this.binarySearch(currentNode.keys, rest.greaterThan, COMPARE_OPERATORS.greaterThan) :
                    rest.hasOwnProperty('greaterThanOrEqual') ?
                    this.binarySearch(currentNode.keys, rest.greaterThanOrEqual, COMPARE_OPERATORS.greaterThanOrEqual) :
                    0;
                while (currentNode) {
                    const node = currentNode;
                    while (currentIndex !== -1 && currentIndex < node.keys.length) {
                        const key = node.keys[currentIndex];
                        if (
                            (rest.hasOwnProperty('lessThan') && this.compareKeys(key, rest.lessThan) >= 0) ||
                            (rest.hasOwnProperty('lessThanOrEqual') && this.compareKeys(key, rest.lessThanOrEqual) > 0)
                        ) {
                            return;
                        }
                        const nextKey = yield [node.keys[currentIndex], node.children[currentIndex]];
                        if (nextKey != null) {
                            if (this.compareKeys(nextKey, key) <= 0) {
                                throw unrecoverableViolation('key must be greater than current key', 'messenger_web_product');
                            }
                            currentIndex = this.binarySearch(node.keys, nextKey, COMPARE_OPERATORS.greaterThanOrEqual);
                            if (currentIndex === -1) {
                                const [nextNode] = this.findNode(nextKey);
                                currentIndex = this.binarySearch(nextNode.keys, nextKey, COMPARE_OPERATORS.greaterThanOrEqual);
                            }
                        } else {
                            const keyChanged = node.keys[currentIndex] !== key;
                            if (keyChanged) {
                                currentIndex = this.binarySearch(node.keys, key, COMPARE_OPERATORS.lessThanOrEqual);
                                if (currentIndex === -1) {
                                    const [nextNode] = this.findNode(key);
                                    currentIndex = this.binarySearch(nextNode.keys, key, COMPARE_OPERATORS.lessThanOrEqual);
                                }
                            }
                            currentIndex++;
                        }
                    }
                    currentNode = node.next;
                    currentIndex = 0;
                }
            } else {
                let currentNode;
                if (rest.hasOwnProperty('lessThan')) {
                    [currentNode] = this.findNode(rest.lessThan);
                } else if (rest.hasOwnProperty('lessThanOrEqual')) {
                    [currentNode] = this.findNode(rest.lessThanOrEqual);
                } else {
                    currentNode = this.tail;
                }
                let currentIndex = rest.hasOwnProperty('lessThan') ?
                    this.binarySearch(currentNode.keys, rest.lessThan, COMPARE_OPERATORS.lessThan) :
                    rest.hasOwnProperty('lessThanOrEqual') ?
                    this.binarySearch(currentNode.keys, rest.lessThanOrEqual, COMPARE_OPERATORS.lessThanOrEqual) :
                    currentNode.keys.length - 1;
                while (currentNode) {
                    const node = currentNode;
                    while (currentIndex !== -1 && currentIndex >= 0) {
                        const key = node.keys[currentIndex];
                        if (
                            (rest.hasOwnProperty('greaterThan') && this.compareKeys(key, rest.greaterThan) <= 0) ||
                            (rest.hasOwnProperty('greaterThanOrEqual') && this.compareKeys(key, rest.greaterThanOrEqual) < 0)
                        ) {
                            return;
                        }
                        const prevKey = yield [node.keys[currentIndex], node.children[currentIndex]];
                        if (prevKey != null) {
                            if (this.compareKeys(prevKey, key) >= 0) {
                                throw unrecoverableViolation('key must be less than current key', 'messenger_web_product');
                            }
                            currentIndex = this.binarySearch(node.keys, prevKey, COMPARE_OPERATORS.lessThanOrEqual);
                            if (currentIndex === -1) {
                                const [prevNode] = this.findNode(prevKey);
                                currentIndex = this.binarySearch(prevNode.keys, prevKey, COMPARE_OPERATORS.lessThanOrEqual);
                            }
                        } else {
                            const keyChanged = node.keys[currentIndex] !== key;
                            if (keyChanged) {
                                currentIndex = this.binarySearch(node.keys, key, COMPARE_OPERATORS.greaterThanOrEqual);
                                if (currentIndex === -1) {
                                    const [prevNode] = this.findNode(key);
                                    currentIndex = this.binarySearch(prevNode.keys, key, COMPARE_OPERATORS.greaterThanOrEqual);
                                }
                            }
                            currentIndex--;
                        }
                    }
                    currentNode = node.prev;
                    currentIndex = currentNode != null ? currentNode.keys.length - 1 : -1;
                }
            }
        }


    get(key) {
        const [node] = this.findNode(key);
        const index = this.binarySearch(node.keys, key, compareGreaterThanOrEqual);
        if (index === -1 || this.compareKeys(node.keys[index], key) !== 0) {
            throw unrecoverableViolation(`key not found: ${String(key)}`, 'messenger_web_product');
        }
        return node.children[index];
    }

    getWithDefault(key, defaultValue) {
        const [node] = this.findNode(key, []);
        if (typeof node === 'number') {
            throw new Error('Invalid node type');
        }
        const index = this.binarySearch(node.keys, key, compareGreaterThanOrEqual);
        return index === -1 || this.compareKeys(node.keys[index], key) !== 0 ? defaultValue : node.children[index];
    }

    set(key, value) {
        const path = [];
        const [node] = this.findNode(key, path);
        if (typeof node === 'number') {
            throw new Error('Invalid node type');
        }
        const [index, oldValue] = this.insertOrReplace(node.keys, key);
        node.children.splice(index, oldValue, value);
        this.rebalanceTree(node, path, false);
        return this;
    }
}

export default BPlusTree;