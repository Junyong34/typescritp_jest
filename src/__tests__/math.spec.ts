import math from "../example/math";

expect.extend({
    toBeOdd(received) {
        const pass = received % 2 === 1;
        if (pass) {
            return {
                message: () => `expected ${received} not to be an odd number`,
                pass: true
            };
        }
        return {
            message: () => `expected ${received} to be an odd number`,
            pass: false
        };
    }
});

describe("Math", () => {
    describe("Basic function test", () => {
        it("add is called", () => {
            // Arrange
            const mockedAdd = jest.spyOn(math, "add");

            // Act
            const added = math.add(1, 2);

            // Assertion
            expect(2).not.toBeOdd();
            expect(3).toBeOdd();
            expect(mockedAdd).toHaveBeenCalledTimes(1);
            expect(mockedAdd).toHaveBeenCalledWith(1, 2);
            expect(added).toBe(3);
            expect(mockedAdd.mock.calls[0][0]).toBe(1);
            expect(mockedAdd.mock.calls[0][1]).toBe(2);
            expect(mockedAdd.mock.results[0].value).toBe(3);

        });
    });


    describe('Basic Types', () => {
        test('Enum#number', () => {
            enum Color {Red, Green, Blue}

            let c: Color = Color.Green;
            expect(c).toBe(1)
        });

        test('Enum#name', () => {
            enum Color {Red = 1, Green, Blue}

            let colorName: string = Color[2];
            expect(colorName).toBe('Green')
        });
    });

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });
});
