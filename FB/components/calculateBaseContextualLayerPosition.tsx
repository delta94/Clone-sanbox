// __d("calculateBaseContextualLayerPosition", ["Locale"], (function (a, b, c, d, e, f, g) {
//     "use strict";
//     var h = d("Locale").isRTL();

//     function a(a) {
//         var b = a.align,
//             c = a.contextRect,
//             d = a.contextualLayerSize,
//             e = a.fixed,
//             f = a.offsetRect,
//             g = a.position;
//         a = a.screenRect;
//         e = {
//             height: void 0,
//             position: e ? "fixed" : void 0,
//             transform: "",
//             width: void 0
//         };
//         var i = 0,
//             j = 0,
//             k = 0,
//             l = 0,
//             m = (c.bottom + c.top) / 2,
//             n = (c.left + c.right) / 2,
//             o = h ? "start" : "end",
//             p = h ? "end" : "start";
//         switch (g) {
//             case "above":
//                 j = c.top - f.top;
//                 l = "-100%";
//                 break;
//             case "below":
//                 j = c.bottom - f.top;
//                 break;
//             case p:
//                 i = c.left - f.left;
//                 k = "-100%";
//                 break;
//             case o:
//                 i = c.right - f.left;
//                 break
//         }
//         if (g === "start" || g === "end") switch (b) {
//             case "start":
//                 j = c.top - f.top;
//                 break;
//             case "middle":
//                 j = m - f.top;
//                 l = "-50%";
//                 break;
//             case "end":
//                 j = c.bottom - f.top;
//                 l = "-100%";
//                 break;
//             case "stretch":
//                 j = c.top - f.top;
//                 e.height = c.bottom - c.top + "px";
//                 break
//         } else if (g === "above" || g === "below") switch (b) {
//             case p:
//                 i = c.left - f.left;
//                 break;
//             case "middle":
//                 i = n - f.left;
//                 k = "-50%";
//                 break;
//             case o:
//                 i = c.right - f.left;
//                 k = "-100%";
//                 break;
//             case "stretch":
//                 i = c.left - f.left;
//                 e.width = c.right - c.left + "px";
//                 break
//         }
//         f = 0;
//         if (d != null)
//             if (g === "start" || g === "end") {
//                 var q = null;
//                 switch (b) {
//                     case "start":
//                         q = c.top;
//                         break;
//                     case "middle":
//                         q = m - d.height / 2;
//                         break;
//                     case "end":
//                         q = c.bottom - d.height;
//                         break
//                 }
//                 q != null && (q < a.top ? f = a.top - q : q + d.height > a.bottom && (f = a.bottom - q - d.height));
//                 j += f
//             } else if (g === "above" || g === "below") {
//             m = null;
//             switch (b) {
//                 case p:
//                     m = c.left;
//                     break;
//                 case "middle":
//                     m = n - d.width / 2;
//                     break;
//                 case o:
//                     m = c.right - d.width;
//                     break
//             }
//             m != null && (m < a.left ? f = a.left - m : m + d.width > a.right && (f = a.right - m - d.width));
//             i += f
//         }
//         q = "";
//         (i !== 0 || j !== 0) && (q += "translate(" + Math.round(i) + "px, " + Math.round(j) + "px) ");
//         (k !== 0 || l !== 0) && (q += "translate(" + k + ", " + l + ") ");
//         e.transform = q;
//         return {
//             adjustment: f,
//             style: e
//         }
//     }
//     g["default"] = a
// }), 98);




import { isRTL } from 'Locale';

interface CalculateBaseContextualLayerPositionParams {
  align: string;
  contextualLayerSize: {
    height: number;
    width: number; 
  } | null;
  contextRect: DOMRect;
  fixed: boolean;
  offsetRect: DOMRect;
  position: 'above' | 'below' | 'start' | 'end';
  screenRect: DOMRect;
}

interface CalculateBaseContextualLayerPositionResult {
  adjustment: number;
  style: {
    height?: string;
    position?: string;
    transform: string;
    width?: string;
  };
}

function calculateBaseContextualLayerPosition({
  align,
  contextualLayerSize,
  contextRect, 
  fixed,
  offsetRect,
  position,
  screenRect,
}: CalculateBaseContextualLayerPositionParams): CalculateBaseContextualLayerPositionResult {

  const isRtl = isRTL();
  
  let style: {
    height?: string;
    position?: string;
    transform: string;
    width?: string;
  } = {
    height: undefined,
    position: fixed ? 'fixed' : undefined,
    transform: '',
    width: undefined,
  };
  
  let x = 0;
  let y = 0;
  let xPercent: number | string = 0;
  let yPercent: number | string = 0;

  const middleY = (contextRect.bottom + contextRect.top) / 2;
  const middleX = (contextRect.left + contextRect.right) / 2;

  const start = isRtl ? 'end' : 'start';
  const end = isRtl ? 'start' : 'end';

  switch (position) {
    case 'above':
      y = contextRect.top - offsetRect.top;
      yPercent = '-100%';
      break;
    case 'below':
      y = contextRect.bottom - offsetRect.top;
      break;
    case end:
      x = contextRect.left - offsetRect.left;
      xPercent = '-100%';
      break;
    case start:
      x = contextRect.right - offsetRect.left;
      break;
  }

  if (position === 'start' || position === 'end') {
    switch (align) {
      case 'start':
        y = contextRect.top - offsetRect.top;
        break;
      case 'middle':
        y = middleY - offsetRect.top;
        yPercent = '-50%';
        break;
      case 'end':
        y = contextRect.bottom - offsetRect.top;
        yPercent = '-100%';
        break;
      case 'stretch':
        y = contextRect.top - offsetRect.top;
        style.height = `${contextRect.bottom - contextRect.top}px`;
        break;
    }
  } else if (position === 'above' || position === 'below') {
    switch (align) {
      case start:
        x = contextRect.left - offsetRect.left;
        break;
      case 'middle':
        x = middleX - offsetRect.left;
        xPercent = '-50%';
        break;
      case end:
        x = contextRect.right - offsetRect.left;
        xPercent = '-100%';
        break;
      case 'stretch':
        x = contextRect.left - offsetRect.left;
        style.width = `${contextRect.right - contextRect.left}px`;
        break;
    }
  }

  let adjustment = 0;
  if (contextualLayerSize != null) {
    if (position === 'start' || position === 'end') {
      let layerY: number | null = null;
      switch (align) {
        case 'start': 
          layerY = contextRect.top;
          break;
        case 'middle':
          layerY = middleY - contextualLayerSize.height / 2;
          break;
        case 'end':
          layerY = contextRect.bottom - contextualLayerSize.height;
          break;
      }
      if (layerY != null) {
        if (layerY < screenRect.top) {
          adjustment = screenRect.top - layerY;
        } else if (layerY + contextualLayerSize.height > screenRect.bottom) {
          adjustment = screenRect.bottom - layerY - contextualLayerSize.height;
        }
        y += adjustment;
      }
    } else if (position === 'above' || position === 'below') {
      let layerX: number | null = null;
      switch (align) {
        case start:
          layerX = contextRect.left;
          break;
        case 'middle': 
          layerX = middleX - contextualLayerSize.width / 2;
          break;
        case end:
          layerX = contextRect.right - contextualLayerSize.width; 
          break;
      }
      if (layerX != null) {
        if (layerX < screenRect.left) {
          adjustment = screenRect.left - layerX;
        } else if (layerX + contextualLayerSize.width > screenRect.right) {
          adjustment = screenRect.right - layerX - contextualLayerSize.width;
        }
        x += adjustment;
      }
    }
  }

  let transform = '';
  if (x !== 0 || y !== 0) {
    transform += `translate(${Math.round(x)}px, ${Math.round(y)}px) `;
  }
  if (xPercent !== 0 || yPercent !== 0) {
    transform += `translate(${xPercent}, ${yPercent}) `;
  }
  style.transform = transform;

  return {
    adjustment,
    style,
  };
}

export default calculateBaseContextualLayerPosition;