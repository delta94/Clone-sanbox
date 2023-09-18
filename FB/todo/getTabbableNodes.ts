__d("getTabbableNodes", [], (function (a, b, c, d, e, f) {
    function a(a, b) {
        var c = document.activeElement,
            d = function (b, d, e) {
                return e === c ? !0 : a(b, d, e) && e.offsetWidth > 0 && e.offsetHeight > 0 && e.tabIndex !== -1 && window.getComputedStyle(e).visibility !== "hidden"
            };
        b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
        if (b === null) return [null, null, null, 0, null];
        d = {};
        for (var e = b, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var h;
            if (f) {
                if (g >= e.length) break;
                h = e[g++]
            } else {
                g = e.next();
                if (g.done) break;
                h = g.value
            }
            h = h;
            if (h instanceof HTMLInputElement && h.tagName === "INPUT" && h.type === "radio" && h.name != null) {
                var i;
                d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h])
            }
        }
        var j = Object.values(d).map(function (a) {
            if (a.find(function (a) {
                    return a.checked
                })) return a.filter(function (a) {
                return !a.checked
            });
            a[0];
            a = a.slice(1);
            return a
        }).flat();
        b = b.filter(function (a) {
            return !j.includes(a)
        });
        i = b[0];
        h = b[b.length - 1];
        g = b.indexOf(c);
        f = null;
        g !== -1 && (f = b[g]);
        return [b, i, h, g, f]
    }
    f["default"] = a
}), 66);


function getTabbableNodes(container: HTMLElement, querySelector) {
    const activeElement = document.activeElement;
  
    const isTabbable = (element, querySelector, node) => {
      return (
        node === activeElement ||
        (element(node, querySelector, node) &&
          node.offsetWidth > 0 &&
          node.offsetHeight > 0 &&
          node.tabIndex !== -1 &&
          window.getComputedStyle(node).visibility !== "hidden")
      );
    };
  
    const tabbableNodes = activeElement ? querySelector.DO_NOT_USE_queryAllNodes(container, isTabbable) : null;

  
    if (tabbableNodes === null) {
      return [null, null, null, 0, null];
    }
  
    const radioGroups = {};
  
    tabbableNodes.forEach((node) => {
        if (node instanceof HTMLInputElement && node.tagName === 'INPUT' && node.type === 'radio' && node.name !== null) {
          if (radioGroups[node.name]) {
            radioGroups[node.name].push(node);
          } else {
            radioGroups[node.name] = [node];
          }
        }
    });
  
    const radioGroupsWithChecked = Object.values(radioGroups).map((group: any) => {
        if (group.find((node) => node.checked)) {
            return group.filter((node) => !node.checked);
          }
          return group.slice(1);
      }).flat();

    const filteredTabbableNodes = tabbableNodes.filter((node) => {
        return !radioGroupsWithChecked.includes(node);
    });
    
      const firstNode = filteredTabbableNodes[0];
      const lastNode = filteredTabbableNodes[filteredTabbableNodes.length - 1];
      const activeNodeIndex = filteredTabbableNodes.indexOf(activeElement);
      const activeNode = activeNodeIndex !== -1 ? filteredTabbableNodes[activeNodeIndex - 1] : null;
    
      return [filteredTabbableNodes, firstNode, lastNode, activeNodeIndex, activeNode];
  }
  
  export default getTabbableNodes;
  