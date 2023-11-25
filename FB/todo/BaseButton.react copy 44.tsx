__d("fbicon", ["TintableIconSource", "coerceImageishSprited", "memoizeWithArgs", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
        throw c("unrecoverableViolation")("fbicon.filled" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.filled reference.", "comet_ui")
    }
    function b(a, b) {
        throw c("unrecoverableViolation")("fbicon.outline" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.outline reference.", "comet_ui")
    }
    d = c("memoizeWithArgs")(function(a, b) {
        return new (c("TintableIconSource"))("FB",a,b)
    }, function(a, b) {
        if (typeof a === "object") {
            var d = c("coerceImageishSprited")(a);
            if (d != null)
                return d.identifier + ":" + b;
            else if (typeof a.uri === "string")
                return a.uri + ":" + b
        } else if (typeof a === "string")
            return a + ":" + b;
        throw c("unrecoverableViolation")("fbicon._: Invalid icon provided.", "comet_ui")
    });
    g.filled = a;
    g.outline = b;
    g._ = d
}
), 98);


import { TintableIconSource } from 'TintableIconSource';
import coerceImageishSprited from './coerceImageishSprited';
import memoizeWithArgs from './memoizeWithArgs';
import unrecoverableViolation from './unrecoverableViolation';

export const filled = (name: string, size: number) => {
  throw unrecoverableViolation(
    `fbicon.filled(${JSON.stringify(name)}, ${size}): Unexpected fbicon.filled reference.`,
    'comet_ui'
  );
};

export const outline = (name: string, size: number) => {
  throw unrecoverableViolation(
    `fbicon.outline(${JSON.stringify(name)}, ${size}): Unexpected fbicon.outline reference.`, 
    'comet_ui'
  );
};

const memoizedGetIcon = memoizeWithArgs(
  (name: string, size: number) => {
    return new TintableIconSource('FB', name, size);
  },
  (name, size) => {
    if (typeof name === 'object') {
        const sprited = coerceImageishSprited(name);
        if (sprited != null) {
          return `${sprited.identifier}:${size}`;  
        } else if (typeof name.uri === 'string') {
          return `${name.uri}:${size}`;
        }
      } else if (typeof name === 'string') {
        return `${name}:${size}`;
      }
      
      throw unrecoverableViolation(
        'fbicon._: Invalid icon provided.',
        'comet_ui'
      );
  }  
);

export default memoizedGetIcon;