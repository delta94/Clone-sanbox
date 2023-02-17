// __d("ProfileCometFeaturedHighlightsEditCollectionButton.react", ["CometEntryPointDialogTrigger.react", "CometTransientDialogProvider.react", "ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint", "ProfileCometFeaturedHighlightsStrings", "TetraButton.react", "react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         var b = a.collectionID;
//         a = a.profileID;
//         return h.jsx(c("CometTransientDialogProvider.react"), {
//             children: h.jsx(c("CometEntryPointDialogTrigger.react"), {
//                 dialogEntryPoint: c("ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint"),
//                 otherProps: {
//                     profileID: a
//                 },
//                 preloadParams: {
//                     collectionID: b
//                 },
//                 preloadTrigger: "button",
//                 children: function (a, b, e, f) {
//                     return h.jsx(c("TetraButton.react"), {
//                         label: d("ProfileCometFeaturedHighlightsStrings").EDIT_FEATURED_COLLECTION,
//                         onHoverIn: b,
//                         onHoverOut: e,
//                         onPress: a,
//                         onPressIn: f,
//                         type: "secondary"
//                     })
//                 }
//             })
//         })
//     }
//     a.displayName = a.name + " [from " + f.id + "]";
//     g["default"] = a
// }), 98);


import React from 'react';

const ProfileCometFeaturedHighlightsEditCollectionButton = (props) => {
    const { collectionID, profileID } = props;
    return (
        <CometTransientDialogProvider>
            <CometEntryPointDialogTrigger
            dialogEntryPoint={ProfileCometFeaturedHighlightsEditCollectionDialog.entrypoint}
            otherProps={{ profileID }}
            preloadParams={{ collectionID }}
            preloadTrigger="button"
            children={(a, b, e, f) => {
                return (
                    <TetraButton.react
                    label={ProfileCometFeaturedHighlightsStrings.EDIT_FEATURED_COLLECTION}
                    onHoverIn={b}
                    onHoverOut={e}
                    onPress={a}
                    onPressIn={f}
                    type="secondary"
                    />
                )
            }}
            />
        </CometTransientDialogProvider>
    )
}
ProfileCometFeaturedHighlightsEditCollectionButton.displayName = ${ProfileCometFeaturedHighlightsEditCollectionButton.name} [from ${f.id}];

export default ProfileCometFeaturedHighlightsEditCollectionButton;