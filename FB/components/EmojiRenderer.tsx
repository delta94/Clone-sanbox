__d(
  "EmojiRenderer",
  ["EmojiRendererData", "UnicodeUtils"],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = 0,
      k = 1,
      l = 2,
      m = 3,
      n = 4,
      o = 5,
      p = 6,
      q = 7,
      r = 8,
      s = 9,
      t = 10,
      u = 11;
    function v(a) {
      var b = a[0];
      if (b === void 0) return !1;
      var d = a.length,
        e = a[d - 1];
      if (e) {
        e = e.charCodeAt(0);
        if ((i || (i = c("EmojiRendererData"))).isTagSpec(e)) return !1;
      }
      b = b.charCodeAt(0);
      if ((i || (i = c("EmojiRendererData"))).isSymbol(b) && d < 2) return !1;
      if ((i || (i = c("EmojiRendererData"))).isText(b))
        if (d === 1) return !1;
        else if (a.length == 2)
          return (i || (i = c("EmojiRendererData"))).isNonSpacingCombiningMark(
            a[1].charCodeAt(0)
          );
        else {
          e = 1;
          (i || (i = c("EmojiRendererData"))).isEmojiVariationSelector(
            a[e].charCodeAt(0)
          ) && e++;
          while (e < a.length) {
            if (
              !(i || (i = c("EmojiRendererData"))).isNonSpacingCombiningMark(
                a[e].charCodeAt(0)
              )
            )
              return !1;
            e++;
          }
          return !0;
        }
      return !0;
    }
    function w(a, b) {
      var e = null,
        f = [],
        g = r,
        w = 0,
        x = a.length;
      while (w < x) {
        var y = a.codePointAt(w),
          z = (h || (h = d("UnicodeUtils"))).getUTF16Length(a, w),
          A = a.substr(w, z);
        switch (g) {
          case s:
            (i || (i = c("EmojiRendererData"))).isRegionalIndicator(y)
              ? (g = m)
              : (g = r);
            break;
          case n:
            if ((i || (i = c("EmojiRendererData"))).isEmojiModifier(y)) {
              g = o;
              break;
            }
          case j:
            (i || (i = c("EmojiRendererData"))).isZWJ(y)
              ? (g = q)
              : (i || (i = c("EmojiRendererData"))).isEmojiVariationSelector(y)
              ? (g = l)
              : (i || (i = c("EmojiRendererData"))).isTextVariationSelector(y)
              ? (g = u)
              : (i || (i = c("EmojiRendererData"))).isNonSpacingCombiningMark(y)
              ? (g = k)
              : (i || (i = c("EmojiRendererData"))).isTagSpec(y)
              ? (g = p)
              : (g = r);
            break;
          case k:
          case l:
            if (
              (i || (i = c("EmojiRendererData"))).isNonSpacingCombiningMark(y)
            )
              break;
          case m:
          case o:
            (i || (i = c("EmojiRendererData"))).isZWJ(y)
              ? (g = q)
              : (i || (i = c("EmojiRendererData"))).isTagSpec(y)
              ? (g = p)
              : (g = r);
            break;
          case p:
            (i || (i = c("EmojiRendererData"))).isTagSpec(y) ||
            (i || (i = c("EmojiRendererData"))).isTagTerm(y)
              ? (g = p)
              : (g = r);
            break;
          case q:
            (i || (i = c("EmojiRendererData"))).isRegionalIndicator(y)
              ? (g = s)
              : (i || (i = c("EmojiRendererData"))).isEmojiModifierBase(y)
              ? (g = n)
              : (i || (i = c("EmojiRendererData"))).isEmoji(y)
              ? (g = j)
              : (g = r);
            break;
          case t:
            (i || (i = c("EmojiRendererData"))).isNonSpacingCombiningMark(y)
              ? (g = k)
              : (i || (i = c("EmojiRendererData"))).isEmojiVariationSelector(y)
              ? (g = l)
              : (g = r);
            break;
          default:
            g = r;
            break;
        }
        if (g === r) {
          (i || (i = c("EmojiRendererData"))).isRegionalIndicator(y)
            ? (g = s)
            : (i || (i = c("EmojiRendererData"))).isEmojiModifierBase(y)
            ? (g = n)
            : (i || (i = c("EmojiRendererData"))).isText(y)
            ? (g = t)
            : (i || (i = c("EmojiRendererData"))).isEmoji(y) && (g = j);
          if (g !== r) {
            e !== null && v(e.emoji) && f.push(e);
            if (b !== null && b === f.length) {
              e = null;
              break;
            }
            e = { emoji: [A], length: z, offset: w };
          }
        } else e !== null && (e.emoji.push(A), (e.length += z));
        w += z;
      }
      e !== null && v(e.emoji) && f.push(e);
      return f;
    }
    function a(a, b, c) {
      c = w(a);
      var d = [],
        e = 0;
      c.forEach(function (c) {
        var f = c.offset;
        f > e && d.push(a.substr(e, f - e));
        var g = b(c.emoji);
        g != null && d.push(g);
        e = f + c.length;
      });
      d.push(a.substr(e, a.length - e));
      return d;
    }
    function b(a) {
      return w(a, 1).length === 1;
    }
    function e(a) {
      return w(a).length;
    }
    g.parse = w;
    g.render = a;
    g.containsEmoji = b;
    g.countEmoji = e;
  },
  98
);
