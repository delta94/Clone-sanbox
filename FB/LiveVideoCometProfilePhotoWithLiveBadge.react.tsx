// __d("LiveVideoCometProfilePhotoWithLiveBadge.react", ["fbt", "TetraProfilePhoto.react", "TetraText.react", "react"], (function (a, b, c, d, e, f, g, h) {
//     "use strict";
//     var i = d("react");

//     function a(a) {
//         var b = a.alt,
//             d = a.profilePicUri,
//             e = a.size,
//             f = h._("__JHASH__f7VcajZGvwh__JHASH__");
//         a = function (a) {
//             var g;
//             return i.jsxs(i.Fragment, {
//                 children: [i.jsx(c("TetraProfilePhoto.react"), {
//                     alt: (g = b) != null ? g : "",
//                     onPress: (g = a) != null ? g : void 0,
//                     size: e === "medium" ? 60 : 40,
//                     source: {
//                         uri: d
//                     },
//                     storyStatus: "live"
//                 }), i.jsx("div", {
//                     className: "x1ciooss x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk x2b8uid" + (e === "small" ? " xi2lk0m x1iorvi4 x1
                    




import fbt from 'fbt';
import TetraProfilePhoto from 'TetraProfilePhoto.react';
import TetraText from 'TetraText.react';
import React from 'react';

const LiveVideoCometProfilePhotoWithLiveBadge = ({alt, profilePicUri, size, onPress}) => {
    const liveBadgeText = fbt._("__JHASH__f7VcajZGvwh__JHASH__");

   

    return (
        <div className="x1n2onr6">
            <React.Fragment>
                <TetraProfilePhoto 
                    alt={alt || ""}
                    onPress={onPress}
                    size={size === "medium" ? 60 : 40}
                    source={{uri: profilePicUri}}
                    storyStatus="live"
                />
                <div className={`x1ciooss x1lcm9me x1yr5g0i xrt01vj x10y3i5r x10l6tqk x2b8uid ${size === "small" ? "xi2lk0m x1iorvi4 x10ogl3i xjkvuk6 x1k2j06m xit27t2 x23j0i4" : size === "medium" ? "x1o583il x1yrsyyn x150jy0e x10b6aqq x1e558r4 xrokvo6 x1849jeq" : ""}`}>
                    <TetraText 
                        color="primaryOnMedia"
                        numberOfLines={1}
                        type={size === "medium" ? "meta2" : "meta4"}
                    >
                        {liveBadgeText}
                    </TetraText>
                </div>
            </React.Fragment>
        </div>
    );
}

LiveVideoCometProfilePhotoWithLiveBadge.displayName = `LiveVideoCometProfilePhotoWithLiveBadge [from ${__filename}]`;
export default LiveVideoCometProfilePhotoWithLiveBadge;