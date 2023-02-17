import React from "react";
import {Z as Icon} from "SVG";
import {assign} from "D57K";

const NotFoundDataDark = (props) => {
    return (
        <Icon
            width="1em"
            height="1em"
            viewBox="0 0 96 96"
            fill="none"
            {...assign({}, props)}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z"
                fill="url(#not-found-data-dark_svg__paint0_linear)"
            />
            <path
                d="M62 71l4-4 4 4-4 4-4-4z"
                fill="#1E2026"
            />
            <path
                d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z"
                fill="#474D57"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z"
                fill="url(#not-found-data-dark_svg__paint1_linear)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"
                fill="url(#not-found-data-dark_svg__paint2_linear)"
            />
            <defs>
                <linearGradient
                    id="not-found-data-dark_svg__paint0_linear"
                    x1={84}
                    y1={10.162}
                    x2={84}
                    y2={88}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2B2F36"/>
                    <stop offset={1} stopColor="#474D57"/>
                </linearGradient>
                <linearGradient
                    id="not-found-data-dark_svg__paint1_linear"
                    x1={4.172}
                    y1={68.75}
                    x2={24.328}
                    y2={68.75}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#929AA5"/>
                    <stop offset={1} stopColor="#76808F"/>
                </linearGradient>
                <linearGradient
                    id="not-found-data-dark_svg__paint2_linear"
                    x1={15}
                    y1={48}
                    x2={55}
                    y2={48}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#929AA5"/>
                    <stop offset={1} stopColor="#76808F"/>
                </linearGradient>
            </defs>
        </Icon>
    )
}

export default NotFoundDataDark;

// (e,t,n)=>{
//     "use strict";
//     n.d(t, {
//         Z: ()=>o
//     });
//     var r = n("D57K")
//       , l = n("react")
//       , i = n.n(l)
//       , a = n("SVG");
//     const o = function(e) {
//         return i().createElement(a.Z, (0,
//         r.__assign)({
//             width: "1em",
//             height: "1em",
//             viewBox: "0 0 96 96",
//             fill: "none"
//         }, e), i().createElement("path", {
//             fillRule: "evenodd",
//             clipRule: "evenodd",
//             d: "M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z",
//             fill: "url(#not-found-data-dark_svg__paint0_linear)"
//         }), i().createElement("path", {
//             d: "M62 71l4-4 4 4-4 4-4-4z",
//             fill: "#1E2026"
//         }), i().createElement("path", {
//             d: "M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z",
//             fill: "#474D57"
//         }), i().createElement("path", {
//             fillRule: "evenodd",
//             clipRule: "evenodd",
//             d: "M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z",
//             fill: "url(#not-found-data-dark_svg__paint1_linear)"
//         }), i().createElement("path", {
//             fillRule: "evenodd",
//             clipRule: "evenodd",
//             d: "M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z",
//             fill: "url(#not-found-data-dark_svg__paint2_linear)"
//         }), i().createElement("defs", null, i().createElement("linearGradient", {
//             id: "not-found-data-dark_svg__paint0_linear",
//             x1: 84,
//             y1: 10.162,
//             x2: 84,
//             y2: 88,
//             gradientUnits: "userSpaceOnUse"
//         }, i().createElement("stop", {
//             stopColor: "#2B2F36"
//         }), i().createElement("stop", {
//             offset: 1,
//             stopColor: "#474D57"
//         })), i().createElement("linearGradient", {
//             id: "not-found-data-dark_svg__paint1_linear",
//             x1: 4.172,
//             y1: 68.75,
//             x2: 24.328,
//             y2: 68.75,
//             gradientUnits: "userSpaceOnUse"
//         }, i().createElement("stop", {
//             stopColor: "#929AA5"
//         }), i().createElement("stop", {
//             offset: 1,
//             stopColor: "#76808F"
//         })), i().createElement("linearGradient", {
//             id: "not-found-data-dark_svg__paint2_linear",
//             x1: 15,
//             y1: 48,
//             x2: 55,
//             y2: 48,
//             gradientUnits: "userSpaceOnUse"
//         }, i().createElement("stop", {
//             stopColor: "#929AA5"
//         }), i().createElement("stop", {
//             offset: 1,
//             stopColor: "#76808F"
//         }))))
//     }
// } 