export {};
declare global {
    namespace jest {
        // @ts-ignore
        interface Matchers<R, T> {
            toBeOdd(): R;
            toMatchJSC(data: object): R;
            toHaveBeenCalledWithRightType(data: String): R;
        }
    }
}
