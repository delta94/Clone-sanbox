__d("searchCometTypeaheadPushErrorToast", ["fbt", "cometPushToast"], (function (a, b, c, d, e, f, g, h) {
    "use strict";

    function a() {
        d("cometPushToast").cometPushErrorToast({
            message: h._("__JHASH__EY5KKLiSk-O__JHASH__")
        })
    }
    g["default"] = a
}), 98);


import { cometPushErrorToast } from 'cometPushToast'; 
import fbt from 'fbt';

export default function searchCometTypeaheadPushErrorToast() {
  cometPushErrorToast({
    message: fbt._("__JHASH__EY5KKLiSk-O__JHASH__"), 
  });
}