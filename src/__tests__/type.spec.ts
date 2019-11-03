expect.extend({
    toHaveBeenCalledWithRightType(received, type) {
        const pass = typeof received === type;

        if (pass) {
            return {
                pass,
                message: () =>
                    `expect(${received}) 는 ${type} 과 일치하지 않아야 합니다.`
            };
        }
        return {
            pass,
            message: () => `expect(${received}) 는 ${type} 과 일치해야합니다.`
        };
    }
});
describe('타입체크', () => {
    describe('타입 테스트', () => {
        it('테스트', () => {
            expect(1).toHaveBeenCalledWithRightType("string");
        });
    });
})