// __d("CometVisualCompletionAttributes", ["CometVisualCompletionConstants"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     b = {
//         CSS_IMG: (a = {}, a[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").CSS_IMG, a),
//         IGNORE: (b = {}, b[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE, b),
//         IGNORE_DYNAMIC: (c = {}, c[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE_DYNAMIC, c),
//         IGNORE_LATE_MUTATION: (e = {}, e[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").IGNORE_LATE_MUTATION, e),
//         LOADING_STATE: (f = {}, f[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").LOADING_STATE, f),
//         MEDIA_VC_IMAGE: (a = {}, a[d("CometVisualCompletionConstants").ATTRIBUTE_NAME] = d("CometVisualCompletionConstants").MEDIA_VC_IMAGE, a)
//     };
//     g["default"] = b
// }), 98);


import CometVisualCompletionConstants from 'CometVisualCompletionConstants';

const CometVisualCompletionAttributes = {
    CSS_IMG: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.CSS_IMG,
    },
    IGNORE: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.IGNORE,
    },
    IGNORE_DYNAMIC: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.IGNORE_DYNAMIC,
    },
    IGNORE_LATE_MUTATION: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.IGNORE_LATE_MUTATION,
    },
    LOADING_STATE: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.LOADING_STATE,
    },
    MEDIA_VC_IMAGE: {
        [CometVisualCompletionConstants.ATTRIBUTE_NAME]: CometVisualCompletionConstants.MEDIA_VC_IMAGE,
    },
};

module.exports = CometVisualCompletionAttributes;