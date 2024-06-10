__d(
  "BaseMultiPageViewReducer",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0;
    function i() {
      return h++;
    }
    b = [{ key: i(), type: "initial_page" }];
    function a(a, b) {
      var d = a.filter(function (a) {
        return a.type !== "pushed_page" || !a.removed;
      });
      switch (b.type) {
        case "push_page":
          var e =
            b.pageKey != null
              ? d.find(function (a) {
                  return a.pageKey === b.pageKey;
                })
              : null;
          if (e != null)
            throw c("FBLogger")("comet_ui").mustfixThrow(
              "Tried to push page with duplicate key."
            );
          return d.concat([
            {
              component: b.component,
              direction: b.direction,
              key: i(),
              pageKey: b.pageKey,
              removed: !1,
              type: "pushed_page",
            },
          ]);
        case "clear_removed_pages":
          return d;
        case "pop_page":
          e = d.length - 1;
          e = d[e];
          if (e.type === "pushed_page") {
            var f = b.index;
            if (b.pageKey != null) {
              var g = d.findIndex(function (a) {
                return a.pageKey === b.pageKey;
              });
              f = g > -1 ? g : f;
            }
            return [].concat(d.slice(0, f != null ? Math.max(f + 1, 1) : -1), [
              babelHelpers["extends"]({}, e, { removed: !0 }),
            ]);
          }
      }
      return a;
    }
    g.initialState = b;
    g.reducer = a;
  },
  98
);

import { FBLogger } from "FBLogger";

let keyCounter = 0;

function generateKey(): number {
  return keyCounter++;
}

const initialState = [{ key: generateKey(), type: "initial_page" }];

interface Page {
  component?: any;
  direction?: any;
  key: number;
  pageKey?: any;
  removed: boolean;
  type: string;
}

interface Action {
  type: string;
  component?: any;
  direction?: any;
  pageKey?: any;
  index?: number;
}

function reducer(state: Page[], action: Action): Page[] {
  const filteredState = state.filter(
    (page) => page.type !== "pushed_page" || !page.removed
  );

  switch (action.type) {
    case "push_page":
      const existingPage =
        action.pageKey != null
          ? filteredState.find((page) => page.pageKey === action.pageKey)
          : null;

      if (existingPage != null) {
        throw FBLogger("comet_ui").mustfixThrow(
          "Tried to push page with duplicate key."
        );
      }

      return [
        ...filteredState,
        {
          component: action.component,
          direction: action.direction,
          key: generateKey(),
          pageKey: action.pageKey,
          removed: false,
          type: "pushed_page",
        },
      ];

    case "clear_removed_pages":
      return filteredState;

    case "pop_page":
      const lastPage = filteredState[filteredState.length - 1];

      if (lastPage.type === "pushed_page") {
        let index = action.index;
        if (action.pageKey != null) {
          const pageIndex = filteredState.findIndex(
            (page) => page.pageKey === action.pageKey
          );
          index = pageIndex > -1 ? pageIndex : index;
        }

        return [
          ...filteredState.slice(
            0,
            index != null ? Math.max(index + 1, 1) : -1
          ),
          { ...lastPage, removed: true },
        ];
      }
      break;

    default:
      return state;
  }

  return state;
}

export { initialState, reducer };
