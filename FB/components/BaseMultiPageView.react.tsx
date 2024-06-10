__d(
  "BaseMultiPageView.react",
  ["BaseMultiPageViewContainer.react", "BaseMultiPageViewReducer", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
      k = b.useReducer;
    e = i.forwardRef(a);
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      var e = k(
          d("BaseMultiPageViewReducer").reducer,
          d("BaseMultiPageViewReducer").initialState
        ),
        f = e[0],
        g = e[1];
      e = j(
        function (a, b, c) {
          g({
            component: b,
            direction: a,
            pageKey: c == null ? void 0 : c.pageKey,
            type: "push_page",
          });
        },
        [g]
      );
      var h = j(
          function (a) {
            return g({
              index: a == null ? void 0 : a.index,
              pageKey: a == null ? void 0 : a.pageKey,
              type: "pop_page",
            });
          },
          [g]
        ),
        l = j(
          function () {
            g({ type: "clear_removed_pages" });
          },
          [g]
        );
      return i.jsx(
        c("BaseMultiPageViewContainer.react"),
        babelHelpers["extends"]({}, a, {
          onAddPage: e,
          onClearRemovedPages: l,
          onPopPage: h,
          pageHistory: f,
          ref: b,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b;
  },
  98
);

import BaseMultiPageViewContainer from "BaseMultiPageViewContainer.react";
import { reducer, initialState } from "BaseMultiPageViewReducer";
import React, { forwardRef, useCallback, useReducer } from "react";

interface Page {
  component: React.ReactNode;
  direction: string;
  pageKey?: string;
}

interface PopPageAction {
  type: "pop_page";
  index?: number;
  pageKey?: string;
}

interface PushPageAction {
  type: "push_page";
  component: React.ReactNode;
  direction: string;
  pageKey?: string;
}

interface ClearRemovedPagesAction {
  type: "clear_removed_pages";
}

type Action = PopPageAction | PushPageAction | ClearRemovedPagesAction;

interface BaseMultiPageViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onAddPage?: (
    direction: string,
    component: React.ReactNode,
    pageKey?: string
  ) => void;
  onClearRemovedPages?: () => void;
  onPopPage?: (params?: { index?: number; pageKey?: string }) => void;
  pageHistory?: Page[];
}

const BaseMultiPageView = forwardRef<HTMLDivElement, BaseMultiPageViewProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    const [pageHistory, dispatch] = useReducer(reducer, initialState);

    const handleAddPage = useCallback(
      (direction: string, component: React.ReactNode, pageKey?: string) => {
        dispatch({
          component,
          direction,
          pageKey,
          type: "push_page",
        });
      },
      [dispatch]
    );

    const handlePopPage = useCallback(
      (params?: { index?: number; pageKey?: string }) => {
        dispatch({
          index: params?.index,
          pageKey: params?.pageKey,
          type: "pop_page",
        });
      },
      [dispatch]
    );

    const handleClearRemovedPages = useCallback(() => {
      dispatch({ type: "clear_removed_pages" });
    }, [dispatch]);

    return (
      <BaseMultiPageViewContainer
        {...rest}
        onAddPage={handleAddPage}
        onClearRemovedPages={handleClearRemovedPages}
        onPopPage={handlePopPage}
        pageHistory={pageHistory}
        ref={ref}
      >
        {children}
      </BaseMultiPageViewContainer>
    );
  }
);

BaseMultiPageView.displayName = `${BaseMultiPageView.name} [from BaseMultiPageView.react]`;

export default BaseMultiPageView;
