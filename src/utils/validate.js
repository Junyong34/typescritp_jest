"use strict";
exports.__esModule = true;
var AJV = require("ajv");
exports.validate = function (JSC, data) {
    var ajv = new AJV({ allErrors: true });
    var valid = ajv.validate(JSC, data);
    var errorText = ajv.errorsText() && ajv.errorsText().toLocaleLowerCase() !== "no errors"
        ? ajv.errorsText()
        : "";
    return {
        errorText: errorText,
        valid: !!valid
    };
};
