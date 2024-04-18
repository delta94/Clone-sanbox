// __d("HeroPendingPlaceholderTracker", [], (function (a, b, c, d, e, f) {
//     "use strict";
//     var g = new Map();

//     function a(a) {
//         g.has(a) || g.set(a, new Map())
//     }

//     function b(a, b, c, d, e) {
//         a = g.get(a);
//         a && a.set(b, {
//             description: c,
//             startTime: d,
//             pageletStack: e
//         })
//     }

//     function c(a) {
//         a = g.get(a);
//         return a ? Array.from(a.values()) : []
//     }

//     function d(a) {
//         g["delete"](a)
//     }

//     function e(a, b) {
//         a = g.get(a);
//         a && a["delete"](b)
//     }

//     function h(a) {
//         return g.has(a)
//     }
//     f.addInteraction = a;
//     f.addPlaceholder = b;
//     f.dump = c;
//     f.removeInteraction = d;
//     f.removePlaceholder = e;
//     f.isInteractionActive = h
// }), 66);


type Placeholder = {
    description: string;
    startTime: number;
    pageletStack: any; 
};
  
const interactions = new Map<string, Map<string, Placeholder>>();
  
export function addInteraction(id: string): void {
    if (!interactions.has(id)) {
        interactions.set(id, new Map());
    }
}
  
export function addPlaceholder(interactionId: string, placeholderId: string, description: string, startTime: number, pageletStack: any): void {
    const interaction = interactions.get(interactionId);
    if (interaction) {
      interaction.set(placeholderId, { description, startTime, pageletStack });
    }
}
  
export function dump(interactionId: string): Placeholder[] {
    const interaction = interactions.get(interactionId);
    return interaction ? Array.from(interaction.values()) : [];
}
  
export function removeInteraction(interactionId: string): void {
    interactions.delete(interactionId);
}
  
export function removePlaceholder(interactionId: string, placeholderId: string): void {
    const interaction = interactions.get(interactionId);
    if (interaction) {
      interaction.delete(placeholderId);
    }
}
  
export function isInteractionActive(interactionId: string): boolean {
    return interactions.has(interactionId);
}
  