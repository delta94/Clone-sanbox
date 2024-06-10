__d(
  "EmoticonRenderer",
  ["EmoticonsList"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = ["LIKE", "PACMAN", "FACE_WITH_COLON_THREE"];
    function i(a) {
      var b = [],
        c = new RegExp(d("EmoticonsList").regexp),
        e = 0,
        f = a.match(c);
      while (f !== null) {
        var g = f[1],
          i = f[2].split(""),
          j = d("EmoticonsList").emotes[f[2]];
        j = d("EmoticonsList").emoji[j];
        b.push({
          chars: i,
          isCustom: h.includes(j),
          key: j,
          offset: e + f.index + g.length,
        });
        e += f.index + f[0].length;
        f = a.slice(e).match(c);
      }
      return b;
    }
    function a(a, b, c) {
      var d = i(a),
        e = [],
        f = 0;
      d.forEach(function (d) {
        var g = d.offset;
        g > f && e.push(a.substr(f, g - f));
        d.isCustom ? e.push(c(d.key, d.chars)) : e.push(b(d.key));
        f = g + d.chars.length;
      });
      e.push(a.substr(f, a.length - f));
      return e;
    }
    g.parse = i;
    g.render = a;
  },
  98
);

import EmoticonsList from "EmoticonsList";

interface Emoticon {
  chars: string[];
  isCustom: boolean;
  key: string;
  offset: number;
}

const customEmoticons = ["LIKE", "PACMAN", "FACE_WITH_COLON_THREE"];

function parseEmoticons(text: string): Emoticon[] {
  const emoticons: Emoticon[] = [];
  const regexp = new RegExp(EmoticonsList.regexp);
  let offset = 0;
  let match = text.match(regexp);

  while (match !== null) {
    const [fullMatch, preMatch, emoteMatch] = match;
    const chars = emoteMatch.split("");
    const emoteKey = EmoticonsList.emotes[emoteMatch];
    const emoji = EmoticonsList.emoji[emoteKey];

    emoticons.push({
      chars,
      isCustom: customEmoticons.includes(emoji),
      key: emoji,
      offset: offset + match.index! + preMatch.length,
    });

    offset += match.index! + fullMatch.length;
    match = text.slice(offset).match(regexp);
  }

  return emoticons;
}

function renderEmoticons(
  text: string,
  renderEmoji: (key: string) => JSX.Element,
  renderCustomEmoji: (key: string, chars: string[]) => JSX.Element
): (string | JSX.Element)[] {
  const emoticons = parseEmoticons(text);
  const result: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  emoticons.forEach((emoticon) => {
    const { offset, chars, isCustom, key } = emoticon;

    if (offset > lastIndex) {
      result.push(text.substring(lastIndex, offset));
    }

    if (isCustom) {
      result.push(renderCustomEmoji(key, chars));
    } else {
      result.push(renderEmoji(key));
    }

    lastIndex = offset + chars.length;
  });

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}

export { parseEmoticons, renderEmoticons };
