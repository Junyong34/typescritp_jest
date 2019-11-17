"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var index_1 = require("./index");
var TJS = require("typescript-json-schema");
// optionally pass argument to schema generator
var settings = {
    required: true
};
// optionally pass ts compiler options
var compilerOptions = {
    strictNullChecks: true
};
// src
var BASE_URL = path.resolve(__dirname, "..");
// console.log(path.resolve("/a", "b","/c"));
// console.log("path.join() : ", path.join());
// // outputs .
// console.log("path.resolve() : ", path.resolve());
// console.log(BASE_URL)
// console.log("path.join() : " ,path.join('abc','/bcd'));
// console.log("path.resolve() : ",path.resolve('abc','/bcd'));
var getFiles = function () {
    var files = fs.readdirSync(path.resolve(BASE_URL, "interface"));
    var filesPath = files.map(function (f) {
        return path.join(__dirname, "../interface", f);
    });
    console.dir(filesPath);
    return filesPath;
};
console.log(!fs.existsSync(path.join(__dirname, "../schema")));
var makeGennerate = function (file) {
    var program = TJS.getProgramFromFiles(file, compilerOptions, BASE_URL);
    var generator = TJS.buildGenerator(program, settings);
    return {
        generator: generator,
        file: file
    };
};
//
var makeSymbols = function (_a) {
    var generator = _a.generator, file = _a.file;
    // const symbol = generator.getUserSymbols();
    // const schema = generator.getSchemaForSymbol("StudentInterface");
    var filesStr = file.join(", ");
    var symbols = generator.getUserSymbols();
    console.log(symbols, 321890389012);
    var schemas = symbols.filter(function (symbol) { return !!filesStr.match(symbol); });
    console.log("\uBCC0\uD658 \uAC00\uB2A5\uD55C " + schemas.length + " \uAC1C\uC758 \uD30C\uC77C\uC744 \uCC3E\uC558\uC2B5\uB2C8\uB2E4.");
    var schemaFolderPath = path.join(__dirname, "../schema");
    if (!fs.existsSync(schemaFolderPath)) {
        fs.mkdirSync(schemaFolderPath);
    }
    console.log("Schema 파일 변환을 시작합니다.");
    schemas.forEach(function (schema) {
        var buffer = generator.getSchemaForSymbol(schema);
        var file = "\n    /* tslint:disable */\n    export default\n    " + JSON.stringify(buffer, null, 2) + "\n    ";
        fs.writeFileSync(path.join(schemaFolderPath, schema + "Payload.ts"), file);
    });
};
//
console.log("파일변환시작");
index_1.pipe(getFiles, makeGennerate, makeSymbols)();
// validate(StudentITFPayload, {
//     name: "aaa",
//     friend: ["a",2,3],
// })
