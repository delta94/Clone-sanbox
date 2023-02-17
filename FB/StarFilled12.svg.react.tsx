// __d("StarFilled12.svg.react", ["react"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("react");

//     function a(a) {
//         return h.jsxs("svg", babelHelpers["extends"]({
//             fill: "currentColor",
//             viewBox: "0 0 12 13",
//             width: "1em",
//             height: "1em"
//         }, a, {
//             children: [a.title != null && h.jsx("title", {
//                 children: a.title
//             }), a.children != null && h.jsx("defs", {
//                 children: a.children
//             }), h.jsx("g", {
//                 fillRule: "evenodd",
//                 transform: "translate(-450 -1073)",
//                 children: h.jsx("path", {
//                     d: "M461.959 1078.078a.84.84 0 0 0-.674-.573l-3.12-.514-1.404-2.774a.842.842 0 0 0-.76-.472.84.84 0 0 0-.758.468l-1.398 2.778-3.12.513a.843.843 0 0 0-.463 1.448l2.225 2.102-.505 3.213a.838.
                    
const StarFilled12SVGReact = (props) => {
    const { title, children } = props;
    return (
      <svg fill="currentColor" viewBox="0 0 12 13" width="1em" height="1em" {...props}>
        {title != null && <title>{title}</title>}
        {children != null && <defs>{children}</defs>}
        <g fillRule="evenodd" transform="translate(-450 -1073)">
          <path d="M461.959 1078.078a.84.84 0 0 0-.674-.573l-3.12-.514-1.404-2.774a.842.842 0 0 0-.76-.472.84.84 0 0 0-.758.468l-1.398 2.778-3.12.513a.843.843 0 0 0-.463 1.448l2.225 2.102-.505 3.213a.838.838 0 0 0 .339.828c.095.07.247.16.472.16a.93.93 0 0 0 .414-.095l2.794-1.441 2.79 1.44a.85.85 0 0 0 .888-.062.838.838 0 0 0 .342-.824l-.507-3.22 2.23-2.106a.841.841 0 0 0 .215-.868v-.001" />
        </g>
      </svg>
    );
  };
  
  StarFilled12SVGReact.displayName = `${StarFilled12SVGReact.name} [from ${f.id}]`;
  StarFilled12SVGReact._isSVG = true;
  
  export default StarFilled12SVGReact;
