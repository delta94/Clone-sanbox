// __d("useCAALoggedOutDialogWrapper", ["CAAWebGating", "cr:5524", "cr:5525", "emptyFunction", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     d("react");
//     var h = d("CAAWebGating").showCAAFBMSGR() === !0 ? function (a) {
//         var d = a.authDomainDataKey;
//         d = d === void 0 ? null : d;
//         var e = a.dialogSource;
//         a = a.next;
//         return b("cr:5524") != null ? b("cr:5524")({
//             authDomainDataKey: d,
//             dialogSource: e,
//             next: a
//         }) : c("emptyFunction")
//     } : function (a) {
//         return b("cr:5525") != null ? b("cr:5525")({
//             dialogSource: a.dialogSource,
//             leftChild: a.leftChild,
//             legal_reporting_cta_type: a.legal_reporting_cta_type,
//             legal_reporting_uri: a.legal_reporting_uri,
//             next: a.next,
//             onClose: a.onClose,
//             title: a.title
//         }) : c("emptyFunction")
//     };

//     function a(a) {
//         return h(a)
//     }
//     g["default"] = a
// }), 98);

import { showCAAFBMSGR } from 'CAAWebGating';
import CAALoggedOutDialogWrapper from 'cr:5524';
import CAALoggedOutDialogLegacy from 'cr:5525';
import { emptyFunction } from 'emptyFunction';
import React from 'react';

const useCAALoggedOutDialogWrapper = ({ authDomainDataKey, dialogSource, next, leftChild, legal_reporting_cta_type, legal_reporting_uri, onClose, title }) => {
  const isCAAFBMSGR = showCAAFBMSGR() === true;

  const WrapperComponent = isCAAFBMSGR ? CAALoggedOutDialogWrapper : CAALoggedOutDialogLegacy;

  return (
    <WrapperComponent
      authDomainDataKey={authDomainDataKey}
      dialogSource={dialogSource}
      next={next}
      leftChild={leftChild}
      legal_reporting_cta_type={legal_reporting_cta_type}
      legal_reporting_uri={legal_reporting_uri}
      onClose={onClose}
      title={title}
    />
  );
};

export default useCAALoggedOutDialogWrapper;
