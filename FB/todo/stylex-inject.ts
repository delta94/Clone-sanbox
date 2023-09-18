__d("stylex-inject", ["CometStyleXSheet"], (function (a, b, c, d, e, f, g) {
    function a(a, b, c) {
        c === void 0 && (c = null), d("CometStyleXSheet").rootStyleSheet.insert(a, b, c)
    }
    g["default"] = a
}), 98);


import CometStyleXSheet from 'CometStyleXSheet';

export default function stylexInject(css: string, priority: number, key: string | null = null): void {
  CometStyleXSheet.rootStyleSheet.insertRule(css, priority, key);
}
