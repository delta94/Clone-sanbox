import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from './icon';

const SVG = ({ size, sx, color = 'currentColor', ...props }) => {
  const classes = cx('icon', {
    [`text-${color}`]: color,
  });

  return (
    <Icon
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      variant="icon"
      className={classes}
      sx={{
        fill: color,
        width: size,
        height: size,
        fontSize: size,
        ...sx,
      }}
      {...props}
    />
  );
};

SVG.defaultProps = {
  size: 24,
};

SVG.propTypes = {
  size: PropTypes.number,
  sx: PropTypes.object,
  color: PropTypes.string,
};

export default SVG;


// (e,t,n)=>{
//     "use strict";
//     n.d(t, {
//         Z: ()=>c
//     });
//     var r = n("D57K")
//       , i = n("xIFI")
//       , o = n.n(i)
//       , a = n("LCuF")
//       , s = function(e) {
//         var t = e.size
//           , n = e.sx
//           , i = e.color
//           , s = void 0 === i ? "currentColor" : i
//           , c = (0,
//         r.__rest)(e, ["size", "sx", "color"])
//           , l = a.Z;
//         return o().createElement(l, (0,
//         r.__assign)({
//             as: "svg",
//             xmlns: "http://www.w3.org/2000/svg",
//             variant: "icon",
//             sx: (0,
//             r.__assign)({
//                 fill: s
//             }, n),
//             __css: {
//                 color: s,
//                 width: t,
//                 height: t,
//                 fontSize: t
//             }
//         }, c))
//     };
//     s.defaultProps = {
//         size: 24
//     },
//     s.displayName = "SVG";
//     const c = s
// }