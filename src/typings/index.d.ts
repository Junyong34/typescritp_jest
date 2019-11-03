export {};
declare global {
    namespace jest {
        // @ts-ignore
        interface Matchers<R, T> {
            toBeOdd(): R;

            toHaveBeenCalledWithRightType(data: String): R;
        }
    }
}
