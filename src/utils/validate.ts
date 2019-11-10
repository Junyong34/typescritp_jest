import * as AJV from "ajv";
export const validate = (schema: object, data: object): boolean => {
    const ajv = new AJV();
    const valid = ajv.validate(schema, data);
    const errorMsg = ajv.errorsText();

    if(errorMsg && errorMsg.toLocaleString() != "no error"){
        console.error(errorMsg);
    } else {
        console.log("테스트 통과 ");
    }
    return !!valid;

    // if(!valid) {
    //     return  false;
    // }
    // return  true;
}