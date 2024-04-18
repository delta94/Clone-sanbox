// __d("currentVCTraces", [], (function(a, b, c, d, e, f) {
//     var g = null
//       , h = null
//       , i = new Map();
//     function a() {
//         return new Map(i)
//     }
//     function b(a, b) {
//         i.set(a, b)
//     }
//     function c(a) {
//         i["delete"](a)
//     }
//     function d() {
//         return g
//     }
//     function e(a) {
//         g = a
//     }
//     function j() {
//         return h
//     }
//     function k(a) {
//         h = a
//     }
//     f.getCurrentVCTraces = a;
//     f.addVCTrace = b;
//     f.removeVCTrace = c;
//     f.getCurrentNavigationVCTrace = d;
//     f.setCurrentNavigationVCTrace = e;
//     f.getLastNavigationVCReport = j;
//     f.setLastNavigationVCReport = k
// }
// ), 66);


// Interfaces

interface VCTrace {
    // trace properties  
  }
  
  interface VCReport {
    // report properties
  }
  
  // State
  
  let currentNavigationTrace: VCTrace | null = null;
  let lastNavigationReport: VCReport | null = null;
  
  const traces = new Map<string, VCTrace>();
  
  // Exports 
  
  export function getCurrentVCTraces() {
    return new Map(traces); 
  }
  
  export function addVCTrace(id: string, trace: VCTrace) {
    traces.set(id, trace);
  }
  
  export function removeVCTrace(id: string) {
    traces.delete(id);  
  }
  
  export function getCurrentNavigationVCTrace() {
    return currentNavigationTrace;  
  }
  
  export function setCurrentNavigationVCTrace(trace: VCTrace) {
    currentNavigationTrace = trace;
  }
  
  export function getLastNavigationVCReport() {
    return lastNavigationReport;
  }
  
  export function setLastNavigationVCReport(report: VCReport) {
    lastNavigationReport = report;
  }
  