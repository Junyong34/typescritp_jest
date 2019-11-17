"use strict";
exports.__esModule = true;
exports.pipe = function () {
    var fn = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fn[_i] = arguments[_i];
    }
    return function (v) {
        fn.reduce(function (_v, f) {
            return f(_v);
        }, v);
    };
};
