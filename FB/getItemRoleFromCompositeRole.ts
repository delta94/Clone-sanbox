// __d("getItemRoleFromCompositeRole", [], (function (a, b, c, d, e, f) {
//     "use strict";

//     function a(a) {
//         switch (a) {
//             case "grid":
//                 return "row";
//             case "listbox":
//                 return "option";
//             case "list":
//                 return "listitem";
//             case "radiogroup":
//                 return "radio";
//             case "row":
//                 return "gridcell";
//             case "tablist":
//                 return "tab"
//         }
//         return null
//     }
//     f["default"] = a
// }), 66);


function getItemRoleFromCompositeRole(a) {
    switch (a) {
      case 'grid':
        return 'row';
      case 'listbox':
        return 'option';
      case 'list':
        return 'listitem';
      case 'radiogroup':
        return 'radio';
      case 'row':
        return 'gridcell';
      case 'tablist':
        return 'tab';
      default:
        return null;
    }
  }
  
  export default getItemRoleFromCompositeRole;
  