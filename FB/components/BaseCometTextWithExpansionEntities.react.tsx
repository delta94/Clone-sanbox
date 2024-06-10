__d(
  "BaseCometTextWithExpansionEntities.react",
  ["fbt", "BaseCometTextWithEntities.react", "react", "react-strict-dom"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || (i = d("react")),
      k = i.useCallback;
    function a(a) {
      var b = a.LinkRenderer,
        e = a.seeLessLinkProps,
        f = a.seeMoreLinkProps,
        g = a.truncationStyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "LinkRenderer",
        "seeLessLinkProps",
        "seeMoreLinkProps",
        "truncationStyle",
      ]);
      var i = k(
        function (a, c, i) {
          if (a) {
            if (g === "see-more-and-less")
              return j.jsxs(
                j.Fragment,
                {
                  children: [
                    " ",
                    j.jsx(
                      b,
                      babelHelpers["extends"](
                        { onClick: i, role: "button", testid: void 0 },
                        e,
                        { children: h._("__JHASH__HOgvcwAgZf9__JHASH__") }
                      )
                    ),
                  ],
                },
                "seeless"
              );
          } else {
            if (g === "none") return null;
            if (c != null && c !== -1)
              switch (g) {
                case "ellipsis-only":
                  return j.jsx(
                    j.Fragment,
                    { children: h._("__JHASH__7lNkK2cLc2S__JHASH__") },
                    "seemore"
                  );
                case "see-more":
                case "see-more-and-less":
                case "see-more-with-attachments":
                  return j.jsxs(
                    j.Fragment,
                    {
                      children: [
                        h._("__JHASH__7lNkK2cLc2S__JHASH__"),
                        " ",
                        j.jsx(
                          b,
                          babelHelpers["extends"](
                            { onClick: i, role: "button", testid: void 0 },
                            f,
                            { children: h._("__JHASH__JO3lyYgE_aY__JHASH__") }
                          )
                        ),
                      ],
                    },
                    "seemore"
                  );
              }
            else if (g === "see-more-with-attachments")
              return j.jsx(
                d("react-strict-dom").html.div,
                {
                  children: j.jsx(
                    b,
                    babelHelpers["extends"](
                      { onClick: i, role: "button", testid: void 0 },
                      f,
                      { children: h._("__JHASH__JO3lyYgE_aY__JHASH__") }
                    )
                  ),
                },
                "seemore"
              );
          }
        },
        [b, e, f, g]
      );
      return j.jsx(
        c("BaseCometTextWithEntities.react"),
        babelHelpers["extends"]({ truncationStyle: g }, a, {
          seeMoreFragment: i,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  226
);

import React, { useCallback } from "react";
import { html } from "react-strict-dom";
import BaseCometTextWithEntities from "BaseCometTextWithEntities.react";
import fbt from "fbt";

interface Props {
  LinkRenderer: React.ElementType;
  seeLessLinkProps?: Record<string, any>;
  seeMoreLinkProps?: Record<string, any>;
  truncationStyle: string;
  [key: string]: any;
}

const BaseCometTextWithExpansionEntities: React.FC<Props> = ({
  LinkRenderer,
  seeLessLinkProps,
  seeMoreLinkProps,
  truncationStyle,
  ...props
}) => {
  const renderTruncation = useCallback(
    (isTruncated: boolean, textLength: number, onClick: () => void) => {
      if (isTruncated) {
        if (truncationStyle === "see-more-and-less") {
          return (
            <>
              {" "}
              <LinkRenderer
                onClick={onClick}
                role="button"
                testid={undefined}
                {...seeLessLinkProps}
              >
                {fbt("__JHASH__HOgvcwAgZf9__JHASH__")}
              </LinkRenderer>
            </>
          );
        }
      } else {
        if (truncationStyle === "none") return null;
        if (textLength != null && textLength !== -1) {
          switch (truncationStyle) {
            case "ellipsis-only":
              return <>{fbt("__JHASH__7lNkK2cLc2S__JHASH__")}</>;
            case "see-more":
            case "see-more-and-less":
            case "see-more-with-attachments":
              return (
                <>
                  {fbt("__JHASH__7lNkK2cLc2S__JHASH__")}{" "}
                  <LinkRenderer
                    onClick={onClick}
                    role="button"
                    testid={undefined}
                    {...seeMoreLinkProps}
                  >
                    {fbt("__JHASH__JO3lyYgE_aY__JHASH__")}
                  </LinkRenderer>
                </>
              );
          }
        } else if (truncationStyle === "see-more-with-attachments") {
          return (
            <html.div>
              <LinkRenderer
                onClick={onClick}
                role="button"
                testid={undefined}
                {...seeMoreLinkProps}
              >
                {fbt("__JHASH__JO3lyYgE_aY__JHASH__")}
              </LinkRenderer>
            </html.div>
          );
        }
      }
    },
    [LinkRenderer, seeLessLinkProps, seeMoreLinkProps, truncationStyle]
  );

  return (
    <BaseCometTextWithEntities
      truncationStyle={truncationStyle}
      {...props}
      seeMoreFragment={renderTruncation}
    />
  );
};

BaseCometTextWithExpansionEntities.displayName = `BaseCometTextWithExpansionEntities [from ${module.id}]`;

export default BaseCometTextWithExpansionEntities;
