__d("CometInlineComposerSproutListMatcher.react", ["CometRelay", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
        var b = a.sprouts;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["sprouts"]);
        return h.jsx(h.Fragment, {
            children: i(b, a)
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function i(a, b) {
        a == null && c("recoverableViolation")("Server failed to provide a valid inline sprouts object for the composer.", "comet_composer");
        return ((a = a) != null ? a : []).map(function(a, c) {
            return h.jsx(d("CometRelay").MatchContainer, {
                match: a,
                props: b
            }, c)
        })
    }
    a.useMatcher = i;
    g["default"] = a
}
), 98);



import React from 'react';
import { recoverableViolation } from 'recoverableViolation'; // Replace with the actual import path
import CometRelay from "CometRelay"
function CometInlineComposerSproutListMatcher(props) {
  const { sprouts, ...rest } = props;

  return (
    <React.Fragment>
      {useMatcher(sprouts, rest)}
    </React.Fragment>
  );
}

CometInlineComposerSproutListMatcher.displayName =
  `${CometInlineComposerSproutListMatcher.name} [from ${module.id}]`;

function useMatcher(sprouts, props) {
  if (sprouts == null) {
    recoverableViolation(
      "Server failed to provide a valid inline sprouts object for the composer.",
      "comet_composer"
    );
  }

  return (sprouts || []).map((sprout, index) => {
    return (
      <CometRelay.MatchContainer
        match={sprout}
        props={props}
        key={index}
      />
    );
  });
}

CometInlineComposerSproutListMatcher.useMatcher = useMatcher;

export default CometInlineComposerSproutListMatcher;


