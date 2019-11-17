import * as path from "path";
import * as fs from "fs";
import {pipe} from "./index";
import * as TJS from "typescript-json-schema";
import {validate} from "./validate";
// import StudentITFPayload from "../schema/StudentITFPayload";
// import {JsonSchemaGenerator} from "typescript-json-schema";

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
    required: true
};

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: false
}

// src
const BASE_URL = path.resolve(__dirname, "..");
// console.log(path.resolve("/a", "b","/c"));
// console.log("path.join() : ", path.join());
// // outputs .
// console.log("path.resolve() : ", path.resolve());
// console.log(BASE_URL)
// console.log("path.join() : " ,path.join('abc','/bcd'));
// console.log("path.resolve() : ",path.resolve('abc','/bcd'));



const getFiles = () => {
    const files = fs.readdirSync(path.resolve(BASE_URL, "interface"));
    const filesPath = files.map(f => {
        return path.join(__dirname, "../interface", f);
    })

    console.dir(filesPath);
    return filesPath;
}

console.log(!fs.existsSync(path.join(__dirname, "../schema")));

interface IGenerator {
    generator: TJS.JsonSchemaGenerator,
    file: string[],
}


const makeGennerate = (file: string[]): IGenerator => {
    const program = TJS.getProgramFromFiles(file, compilerOptions, BASE_URL);
    const generator = TJS.buildGenerator(program, settings);

    console.log(TJS.buildGenerator(program, settings));
    return {
        generator: generator as TJS.JsonSchemaGenerator,
        file,
    }
};
//
const makeSymbols = ({generator, file}: IGenerator) => {
    // const symbol = generator.getUserSymbols();
    // const schema = generator.getSchemaForSymbol("StudentInterface");
    const filesStr = file.join(", ");
    const symbols = generator.getUserSymbols();

    console.log(symbols.length, 321890389012)

    const schemas = symbols.filter(symbol => !!filesStr.match(symbol));
    console.log(`변환 가능한 ${schemas.length} 개의 파일을 찾았습니다.`);

    const schemaFolderPath = path.join(__dirname, "../schema");
    if (!fs.existsSync(schemaFolderPath)) {
        fs.mkdirSync(schemaFolderPath);
    }

    console.log("Schema 파일 변환을 시작합니다.");
    schemas.forEach(schema => {
        const buffer = generator.getSchemaForSymbol(schema);
        const file = `
    /* tslint:disable */
    export default
    ${JSON.stringify(buffer, null, 2)}
    `;

        fs.writeFileSync(path.join(schemaFolderPath, `${schema}Payload.ts`), file);
    });

};
//
console.log("파일변환시작");
pipe(getFiles, makeGennerate, makeSymbols)();

// validate(StudentITFPayload, {
//     name: "aaa",
//     friend: ["a",2,3],
// })