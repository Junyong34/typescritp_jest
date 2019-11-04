export const palinerome = (inputNum: any) => {
    const stackSpace: number[] = [];
    let num = inputNum;
    let result = 0;
    let digit = 1;

    while (num > 0) {
        const ret = num % 10;
        num = (num - ret) / 10;
        stackSpace.push(ret);
    }
    while (stackSpace.length) {
            result += stackSpace.pop()! * digit;
        digit *= 10;
    }

    return result === inputNum;
}
//
// function isNonEmpty<T>(arr: Array<T>): arr is NonEmptyArray<T> {
//     return arr.length > 0;
// }
