__d(
  "BPlusTree",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      gt: [!1, 0],
      gte: [!0, 0],
      lt: [!0, 1],
      lte: [!1, 1],
    };
    a = (function () {
      function a(a, b) {
        b === void 0 && (b = 32),
          (this.$3 = {
            children: [],
            isLeaf: !0,
            keys: [],
          }),
          (this.$4 = this.$3),
          (this.$5 = this.$3),
          (this.$1 = a),
          (this.$2 = b);
      }
      a.fromSorted = function (a, b, c) {
        b = new this(b, c);
        c = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        a = c.next();
        while (!a.done) {
          var d = [],
            e = b.$5,
            f;
          while (!e.isLeaf)
            d.push([e, -1]), (f = e.keys.length), (e = e.children[f]);
          f = (b.$2 - 1) * 2;
          f = f - e.keys.length;
          while (!a.done && f > 0)
            e.keys.push(a.value[0]),
              e.children.push(a.value[1]),
              f--,
              (a = c.next());
          b.$6(e, d, !0);
        }
        return b;
      };
      var b = a.prototype;
      b.$7 = function (a, b) {
        var c = this.$5,
          d = -1;
        while (!c.isLeaf)
          b == null ? void 0 : b.push([c, d]),
            (d = this.$8(c.keys, a, h.gt)),
            d === -1 && (d = c.keys.length),
            (c = c.children[d]);
        return [c, d];
      };
      b.$8 = function (a, b, c) {
        var d = 0,
          e = a.length - 1;
        while (d <= e) {
          var f = (d + e) >> 1;
          (c[0] ? this.$1(a[f], b) < 0 : this.$1(a[f], b) <= 0)
            ? (d = f + 1)
            : (e = f - 1);
        }
        f = [d, e][c[1]];
        return f === a.length ? -1 : f;
      };
      b.$9 = function (a, b) {
        if (!a.length) {
          a.push(b);
          return [0, 0];
        }
        var c = this.$8(a, b, h.gte);
        if (c === -1) return [a.push(b) - 1, 0];
        else if (this.$1(a[c], b) === 0) return [c, 1];
        a.splice(c, 0, b);
        return [c, 0];
      };
      b.$6 = function (a, b, c) {
        for (var a = a, d; a.keys.length >= this.$2; a = d) {
          var d = b.pop() || [
            (this.$5 = {
              children: [a],
              isLeaf: !1,
              keys: [],
            }),
          ];
          d = d[0];
          var e = Math.floor(a.keys.length / 2),
            f = void 0;
          a.isLeaf
            ? ((f = a.next =
                {
                  children: a.children.slice(e),
                  isLeaf: !0,
                  keys: a.keys.slice(e),
                  next: a.next,
                  prev: a,
                }),
              f.next ? (f.next.prev = f) : (this.$4 = f))
            : (f = {
                children: a.children.slice(e + 1),
                isLeaf: !1,
                keys: a.keys.slice(e + 1),
              });
          if (c) d.keys.push(a.keys[e]), d.children.push(f);
          else {
            var g = this.$9(d.keys, a.keys[e]);
            g = g[0];
            d.children.splice(g + 1, 0, f);
          }
          a.keys.length = e;
          a.children.length = e + (a.isLeaf ? 0 : 1);
        }
      };
      b.clear = function () {
        this.$5 =
          this.$3 =
          this.$4 =
            {
              children: [],
              isLeaf: !0,
              keys: [],
            };
      };
      b.delete = function (a) {
        var b = Math.floor(this.$2 / 2),
          d = [],
          e = this.$7(a, d),
          f = e[0];
        e = e[1];
        var g = this.$8(f.keys, a, h.gte);
        if (g === -1 || this.$1(f.keys[g], a) !== 0) return !1;
        f.keys.splice(g, 1);
        f.children.splice(g, 1);
        for (
          var a = f, g = e, e, f;
          a.keys.length < b && d.length;
          o = [e, f], a = o[0], g = o[1], o
        ) {
          f = d.pop();
          e = f[0];
          f = f[1];
          var i = [
            [e.children[g - 1], a, g - 1],
            [a, e.children[g + 1], g],
          ].filter(function (a) {
            var b = a[0];
            a = a[1];
            return b && a;
          });
          for (var j of i) {
            var k = j[0],
              l = j[1],
              m = j[2];
            if (k.keys.length + l.keys.length >= b * 2) {
              if (a.isLeaf) {
                var n = [].concat(k.children, l.children),
                  o = [].concat(k.keys, l.keys);
                k.children = (l.children = n).splice(0, b);
                k.keys = (l.keys = o).splice(0, b);
                e.keys[m] = o[0];
              } else {
                n = [].concat(k.children, l.children);
                o = [].concat(k.keys, [e.keys[m]], l.keys);
                k.children = (l.children = n).splice(0, b + 1);
                e.keys[m] = o.splice(b, 1)[0];
                k.keys = (l.keys = o).splice(0, b);
              }
              return !0;
            }
          }
          for (n of i) {
            m = n[0];
            k = n[1];
            l = n[2];
            m.children = [].concat(m.children, k.children);
            a.isLeaf
              ? ((m.keys = [].concat(m.keys, k.keys)),
                (k.keys.length = 0),
                k.next ? (k.next.prev = m) : (this.$4 = m),
                (m.next = k.next))
              : (m.keys = [].concat(m.keys, [e.keys[l]], k.keys));
            e.keys.splice(l, 1);
            e.children.splice(l + 1, 1);
            break;
          }
        }
        if (!this.$5.keys.length && this.$5.children.length) {
          j = this.$5;
          if (j.isLeaf)
            throw c("unrecoverableViolation")(
              "cannot be leaf",
              "messenger_web_product"
            );
          this.$5 = j.children[0];
        }
        return !0;
      };
      b.entries = function* (a) {
        a = a === void 0 ? {} : a;
        var b = a.dir;
        b = b === void 0 ? "asc" : b;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["dir"]);
        if (
          Object.prototype.hasOwnProperty.call(a, "gt") &&
          Object.prototype.hasOwnProperty.call(a, "gte")
        )
          throw c("unrecoverableViolation")(
            "cannot specify both greater than and greater than or equal",
            "messenger_web_product"
          );
        if (
          Object.prototype.hasOwnProperty.call(a, "lt") &&
          Object.prototype.hasOwnProperty.call(a, "lte")
        )
          throw c("unrecoverableViolation")(
            "cannot specify both less than and less than or equal",
            "messenger_web_product"
          );
        if (b === "asc") {
          if (Object.prototype.hasOwnProperty.call(a, "gt")) {
            b = this.$7(a.gt);
            b = b[0];
          } else if (Object.prototype.hasOwnProperty.call(a, "gte")) {
            var d = this.$7(a.gte);
            b = d[0];
          } else b = this.$3;
          d = Object.prototype.hasOwnProperty.call(a, "gt")
            ? this.$8(b.keys, a.gt, h.gt)
            : Object.prototype.hasOwnProperty.call(a, "gte")
            ? this.$8(b.keys, a.gte, h.gte)
            : 0;
          while (b) {
            var e = b;
            while (d !== -1 && d < e.keys.length) {
              var f = e.keys[d];
              if (
                (Object.prototype.hasOwnProperty.call(a, "lt") &&
                  this.$1(f, a.lt) >= 0) ||
                (Object.prototype.hasOwnProperty.call(a, "lte") &&
                  this.$1(f, a.lte) > 0)
              )
                return;
              var g = yield [e.keys[d], e.children[d]];
              if (g != null) {
                if (this.$1(g, f) <= 0)
                  throw c("unrecoverableViolation")(
                    "key must be greater than current key",
                    "messenger_web_product"
                  );
                d = this.$8(e.keys, g, h.gte);
                if (d === -1) {
                  var i = this.$7(g);
                  e = i[0];
                  d = this.$8(e.keys, g, h.gte);
                }
              } else {
                i = e.keys[d] !== f;
                if (i) {
                  d = this.$8(e.keys, f, h.lte);
                  if (d === -1) {
                    g = this.$7(f);
                    e = g[0];
                    d = this.$8(e.keys, f, h.lte);
                  }
                }
                d++;
              }
            }
            b = e.next;
            d = 0;
          }
        } else {
          if (Object.prototype.hasOwnProperty.call(a, "lt")) {
            i = this.$7(a.lt);
            b = i[0];
          } else if (Object.prototype.hasOwnProperty.call(a, "lte")) {
            g = this.$7(a.lte);
            b = g[0];
          } else b = this.$4;
          f = Object.prototype.hasOwnProperty.call(a, "lt")
            ? this.$8(b.keys, a.lt, h.lt)
            : Object.prototype.hasOwnProperty.call(a, "lte")
            ? this.$8(b.keys, a.lte, h.lte)
            : b.keys.length - 1;
          while (b) {
            e = b;
            while (f !== -1 && f >= 0) {
              d = e.keys[f];
              if (
                (Object.prototype.hasOwnProperty.call(a, "gt") &&
                  this.$1(d, a.gt) <= 0) ||
                (Object.prototype.hasOwnProperty.call(a, "gte") &&
                  this.$1(d, a.gte) < 0)
              )
                return;
              i = yield [e.keys[f], e.children[f]];
              if (i != null) {
                if (this.$1(i, d) >= 0)
                  throw c("unrecoverableViolation")(
                    "key must be less than current key",
                    "messenger_web_product"
                  );
                f = this.$8(e.keys, i, h.lte);
                if (f === -1) {
                  g = this.$7(i);
                  e = g[0];
                  f = this.$8(e.keys, i, h.lte);
                }
              } else {
                g = e.keys[f] !== d;
                if (g) {
                  f = this.$8(e.keys, d, h.gte);
                  if (f === -1) {
                    i = this.$7(d);
                    e = i[0];
                    f = this.$8(e.keys, d, h.gte);
                  }
                }
                f--;
              }
            }
            b = e.prev;
            f = b != null ? b.keys.length - 1 : -1;
          }
        }
      };
      b.get = function (a) {
        var b = this.$7(a);
        b = b[0];
        var d = this.$8(b.keys, a, h.gte);
        if (d === -1 || this.$1(b.keys[d], a) !== 0)
          throw c("unrecoverableViolation")(
            "key not found: " + String(a),
            "messenger_web_product"
          );
        return b.children[d];
      };
      b.getWithDefault = function (a, b) {
        var c = this.$7(a);
        c = c[0];
        var d = this.$8(c.keys, a, h.gte);
        return d === -1 || this.$1(c.keys[d], a) !== 0 ? b : c.children[d];
      };
      b.has = function (a) {
        var b = this,
          c = this.$7(a);
        c = c[0];
        return (
          c.keys.findIndex(function (c) {
            return b.$1(a, c) === 0;
          }) !== -1
        );
      };
      b.set = function (a, b) {
        var c = [],
          d = this.$7(a, c);
        d = d[0];
        a = this.$9(d.keys, a);
        var e = a[0];
        a = a[1];
        d.children.splice(e, a, b);
        this.$6(d, c, !1);
        return this;
      };
      return a;
    })();
    g.default = a;
  },
  98
);

import unrecoverableViolation from "unrecoverableViolation";

interface Node {
  children: any[];
  isLeaf: boolean;
  keys: any[];
  next?: Node;
  prev?: Node;
}

interface Options {
  gt?: any;
  gte?: any;
  lt?: any;
  lte?: any;
  dir?: string;
}

const comparison: { [key: string]: [boolean, number] } = {
  gt: [false, 0],
  gte: [true, 0],
  lt: [true, 1],
  lte: [false, 1],
};

class BPlusTree {
  private root: Node;
  private leafHead: Node;
  private leafTail: Node;
  private compare: (a: any, b: any) => number;
  private order: number;

  constructor(compare: (a: any, b: any) => number, order: number = 32) {
    this.root = {
      children: [],
      isLeaf: true,
      keys: [],
    };
    this.leafHead = this.root;
    this.leafTail = this.root;
    this.compare = compare;
    this.order = order;
  }

  static fromSorted(
    items: any[],
    compare: (a: any, b: any) => number,
    order: number
  ) {
    const tree = new this(compare, order);
    const iterator = items[Symbol.iterator]();
    let current = iterator.next();

    while (!current.done) {
      const stack: [Node, number][] = [];
      let node = tree.leafTail;

      while (!node.isLeaf) {
        stack.push([node, -1]);
        node = node.children[node.keys.length];
      }

      let space = (tree.order - 1) * 2 - node.keys.length;

      while (!current.done && space > 0) {
        node.keys.push(current.value[0]);
        node.children.push(current.value[1]);
        space--;
        current = iterator.next();
      }

      tree.splitNode(node, stack, true);
    }

    return tree;
  }

  private findLeafNode(key: any, stack?: [Node, number][]): [Node, number] {
    let node = this.leafTail;
    let index = -1;

    while (!node.isLeaf) {
      stack?.push([node, index]);
      index = this.binarySearch(node.keys, key, comparison.gt);
      if (index === -1) {
        index = node.keys.length;
      }
      node = node.children[index];
    }

    return [node, index];
  }

  private binarySearch(
    keys: any[],
    key: any,
    compareMode: [boolean, number]
  ): number {
    let left = 0;
    let right = keys.length - 1;

    while (left <= right) {
      const mid = (left + right) >> 1;
      const comparisonResult = compareMode[0]
        ? this.compare(keys[mid], key) < 0
        : this.compare(keys[mid], key) <= 0;
      if (comparisonResult) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    const resultIndex = [left, right][compareMode[1]];
    return resultIndex === keys.length ? -1 : resultIndex;
  }

  private insertKey(keys: any[], key: any): [number, number] {
    if (!keys.length) {
      keys.push(key);
      return [0, 0];
    }

    const index = this.binarySearch(keys, key, comparison.gte);
    if (index === -1) {
      return [keys.push(key) - 1, 0];
    } else if (this.compare(keys[index], key) === 0) {
      return [index, 1];
    } else {
      keys.splice(index, 0, key);
      return [index, 0];
    }
  }

  private splitNode(node: Node, stack: [Node, number][], isLeaf: boolean) {
    while (node.keys.length >= this.order) {
      const parent = stack.pop() || [
        (this.root = {
          children: [node],
          isLeaf: false,
          keys: [],
        }),
      ];
      const parentNode = parent[0];
      const middleIndex = Math.floor(node.keys.length / 2);
      let newNode: Node;

      if (node.isLeaf) {
        newNode = {
          children: node.children.slice(middleIndex),
          isLeaf: true,
          keys: node.keys.slice(middleIndex),
          next: node.next,
          prev: node,
        };
        if (newNode.next) {
          newNode.next.prev = newNode;
        } else {
          this.leafTail = newNode;
        }
        node.next = newNode;
      } else {
        newNode = {
          children: node.children.slice(middleIndex + 1),
          isLeaf: false,
          keys: node.keys.slice(middleIndex + 1),
        };
      }

      if (isLeaf) {
        (parentNode.keys as any[]).push(node.keys[middleIndex]);
        parentNode.children.push(newNode);
      } else {
        const [insertIndex] = this.insertKey(
          parentNode.keys,
          node.keys[middleIndex]
        );
        parentNode.children.splice(insertIndex + 1, 0, newNode);
      }

      node.keys.length = middleIndex;
      node.children.length = middleIndex + (node.isLeaf ? 0 : 1);
      node = parentNode;
    }
  }

  clear() {
    this.root =
      this.leafHead =
      this.leafTail =
        {
          children: [],
          isLeaf: true,
          keys: [],
        };
  }

  delete(key: any): boolean {
    const minKeys = Math.floor(this.order / 2);
    const stack: [Node, number][] = [];
    const [leaf, index] = this.findLeafNode(key, stack);
    const deleteIndex = this.binarySearch(leaf.keys, key, comparison.gte);

    if (deleteIndex === -1 || this.compare(leaf.keys[deleteIndex], key) !== 0) {
      return false;
    }

    leaf.keys.splice(deleteIndex, 1);
    leaf.children.splice(deleteIndex, 1);

    let node = leaf;
    let parentNode: Node | undefined;
    let parentIndex: number | undefined;

    while (node.keys.length < minKeys && stack.length) {
      [parentNode, parentIndex] = stack.pop()!;
      const neighbors = [
        [parentNode.children[parentIndex - 1], node, parentIndex - 1],
        [node, parentNode.children[parentIndex + 1], parentIndex],
      ].filter(([left, right]) => left && right);

      for (const [leftNode, rightNode, splitIndex] of neighbors) {
        if (leftNode.keys.length + rightNode.keys.length >= minKeys * 2) {
          if (node.isLeaf) {
            const mergedKeys = [...leftNode.keys, ...rightNode.keys];
            const mergedChildren = [
              ...leftNode.children,
              ...rightNode.children,
            ];

            leftNode.keys = mergedKeys.splice(0, minKeys);
            leftNode.children = mergedChildren.splice(0, minKeys);

            rightNode.keys = mergedKeys;
            rightNode.children = mergedChildren;

            parentNode.keys[splitIndex] = rightNode.keys[0];
          } else {
            const mergedKeys = [
              ...leftNode.keys,
              parentNode.keys[splitIndex],
              ...rightNode.keys,
            ];
            const mergedChildren = [
              ...leftNode.children,
              ...rightNode.children,
            ];

            leftNode.keys = mergedKeys.splice(0, minKeys);
            leftNode.children = mergedChildren.splice(0, minKeys + 1);

            parentNode.keys[splitIndex] = mergedKeys.shift()!;
            rightNode.keys = mergedKeys;
            rightNode.children = mergedChildren;
          }
          return true;
        }
      }

      for (const [leftNode, rightNode, splitIndex] of neighbors) {
        leftNode.children = [...leftNode.children, ...rightNode.children];

        if (node.isLeaf) {
          leftNode.keys = [...leftNode.keys, ...rightNode.keys];
          rightNode.keys.length = 0;

          if (rightNode.next) {
            rightNode.next.prev = leftNode;
          } else {
            this.leafTail = leftNode;
          }
          leftNode.next = rightNode.next;
        } else {
          leftNode.keys = [
            ...leftNode.keys,
            parentNode.keys[splitIndex],
            ...rightNode.keys,
          ];
        }

        parentNode.keys.splice(splitIndex, 1);
        parentNode.children.splice(splitIndex + 1, 1);
        break;
      }

      node = parentNode;
    }

    if (!this.root.keys.length && this.root.children.length) {
      if (this.root.isLeaf) {
        throw unrecoverableViolation(
          "Cannot be a leaf",
          "messenger_web_product"
        );
      }
      this.root = this.root.children[0];
    }

    return true;
  }

  *entries(options: Options = {}): Generator<[any, any]> {
    const { gt, gte, lt, lte, dir = "asc" } = options;

    if (gt != null && gte != null) {
      throw unrecoverableViolation(
        "Cannot specify both greater than and greater than or equal",
        "messenger_web_product"
      );
    }

    if (lt != null && lte != null) {
      throw unrecoverableViolation(
        "Cannot specify both less than and less than or equal",
        "messenger_web_product"
      );
    }

    if (dir === "asc") {
      let node: Node | undefined;
      if (gt != null) {
        node = this.findLeafNode(gt)[0];
      } else if (gte != null) {
        node = this.findLeafNode(gte)[0];
      } else {
        node = this.leafHead;
      }

      let index =
        gt != null
          ? this.binarySearch(node.keys, gt, comparison.gt)
          : gte != null
          ? this.binarySearch(node.keys, gte, comparison.gte)
          : 0;

      while (node) {
        while (index !== -1 && index < node.keys.length) {
          const key = node.keys[index];
          if (
            (lt != null && this.compare(key, lt) >= 0) ||
            (lte != null && this.compare(key, lte) > 0)
          ) {
            return;
          }

          const result = yield [key, node.children[index]];

          if (result != null) {
            if (this.compare(result, key) <= 0) {
              throw unrecoverableViolation(
                "Key must be greater than current key",
                "messenger_web_product"
              );
            }

            index = this.binarySearch(node.keys, result, comparison.gte);
            if (index === -1) {
              node = this.findLeafNode(result)[0];
              index = this.binarySearch(node.keys, result, comparison.gte);
            }
          } else {
            index++;
          }
        }

        node = node.next;
        index = 0;
      }
    } else {
      let node: Node | undefined;
      if (lt != null) {
        node = this.findLeafNode(lt)[0];
      } else if (lte != null) {
        node = this.findLeafNode(lte)[0];
      } else {
        node = this.leafTail;
      }

      let index =
        lt != null
          ? this.binarySearch(node.keys, lt, comparison.lt)
          : lte != null
          ? this.binarySearch(node.keys, lte, comparison.lte)
          : node.keys.length - 1;

      while (node) {
        while (index !== -1 && index >= 0) {
          const key = node.keys[index];
          if (
            (gt != null && this.compare(key, gt) <= 0) ||
            (gte != null && this.compare(key, gte) < 0)
          ) {
            return;
          }

          const result = yield [key, node.children[index]];

          if (result != null) {
            if (this.compare(result, key) >= 0) {
              throw unrecoverableViolation(
                "Key must be less than current key",
                "messenger_web_product"
              );
            }

            index = this.binarySearch(node.keys, result, comparison.lte);
            if (index === -1) {
              node = this.findLeafNode(result)[0];
              index = this.binarySearch(node.keys, result, comparison.lte);
            }
          } else {
            index--;
          }
        }

        node = node.prev;
        index = node ? node.keys.length - 1 : -1;
      }
    }
  }

  get(key: any) {
    const [node] = this.findLeafNode(key);
    const index = this.binarySearch(node.keys, key, comparison.gte);

    if (index === -1 || this.compare(node.keys[index], key) !== 0) {
      throw unrecoverableViolation(
        `Key not found: ${String(key)}`,
        "messenger_web_product"
      );
    }

    return node.children[index];
  }

  getWithDefault(key: any, defaultValue: any) {
    const [node] = this.findLeafNode(key);
    const index = this.binarySearch(node.keys, key, comparison.gte);

    return index === -1 || this.compare(node.keys[index], key) !== 0
      ? defaultValue
      : node.children[index];
  }

  has(key: any) {
    const [node] = this.findLeafNode(key);
    return node.keys.findIndex((k) => this.compare(key, k) === 0) !== -1;
  }

  set(key: any, value: any) {
    const stack: [Node, number][] = [];
    const [leaf] = this.findLeafNode(key, stack);
    const [index, exists] = this.insertKey(leaf.keys, key);

    leaf.children.splice(index, exists, value);
    this.splitNode(leaf, stack, false);

    return this;
  }
}

export default BPlusTree;
