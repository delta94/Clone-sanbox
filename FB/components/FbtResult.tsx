__d(
  "FbtResult",
  ["FbtReactUtil", "FbtResultBase"],
  function (a, b, c, d, e, f) {
    var g = function (a) {
      return a.content;
    };
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c, d) {
        d = a.call(this, c, d) || this;
        d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
        d.key = null;
        d.ref = null;
        d.type = g;
        d.props = { content: c };
        return d;
      }
      c.get = function (a) {
        return new c(a.contents, a.errorListener);
      };
      return c;
    })(b("FbtResultBase"));
    e.exports = a;
  },
  null
);

import { FbtReactUtil } from "./FbtReactUtil";
import { FbtResultBase } from "./FbtResultBase";

type FbtContent = string | React.ReactElement;

class FbtResult extends FbtResultBase {
  public $$typeof: symbol;
  public key: null;
  public ref: null;
  public type: string;
  public props: { content: FbtContent };

  constructor(content: FbtContent, errorListener?: any) {
    super(content, errorListener);
    this.$$typeof = FbtReactUtil.REACT_ELEMENT_TYPE;
    this.key = null;
    this.ref = null;
    this.type = FbtResult.getContentAsString(content);
    this.props = { content };
  }

  public static get(content: FbtContent): FbtResult {
    return new FbtResult(content);
  }
}

export { FbtResult };
