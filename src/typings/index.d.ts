export {};
declare global {
    namespace jest {
        interface Matchers<R, T> {
            toBeOdd(): R;
        }
    }
}
