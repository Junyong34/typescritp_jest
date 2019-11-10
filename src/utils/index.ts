export const pipe = (...fn: Function[]) => (v?: any) => {
    fn.reduce((_v, f) => {
        return f(_v);
    },v);
}