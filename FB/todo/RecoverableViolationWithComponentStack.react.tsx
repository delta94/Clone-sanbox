__d("RecoverableViolationWithComponentStack.react", ["cr:7063", "err", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
        a = a.errorMessage;
        throw c("err")(a)
    }
    function a(a) {
        var c = a.errorMessage
          , d = a.fallback;
        a = a.projectName;
        return h.jsx(b("cr:7063"), {
            context: {
                project: a,
                type: "error"
            },
            fallback: function() {
                var a;
                return (a = d) != null ? a : null
            },
            children: h.jsx(i, {
                errorMessage: c
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}
), 98);


import React from 'react';
import { err as createError } from 'err'; // You might need to replace this with the actual import
import { cr:7063 } from 'cr'; // You might need to replace this with the actual import

function throwError(errorMessage) {
    throw createError(errorMessage);
}

function RecoverableViolationWithComponentStack(props) {
  const { errorMessage, fallback, projectName } = props;

  return (
    <cr:7063
      context={{ project: projectName, type: "error" }}
      fallback={() => (fallback != null ? fallback : null)}
    >
      <React.Fragment>
        {throwError(errorMessage)}
      </React.Fragment>
    </cr:7063>
  );
}

RecoverableViolationWithComponentStack.displayName = `${RecoverableViolationWithComponentStack.name} [from ${98}]`;

export default RecoverableViolationWithComponentStack;
