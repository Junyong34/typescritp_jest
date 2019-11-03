import math from "../example/math";
import {maxSumArray} from '../math/math';
import {palinerome} from '../math/palinerome';
import mock = jest.mock;

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


        it('파라미터를 1개만 받는다', () => {
        });
    });            // const res1 = [1, 2, 3];

    const mockedSumArray = jest.fn();
    // mockedSumArray.mockImplementation((array: any[]) => {
    //     maxSumArray(array);
    // });
    mockedSumArray.mockImplementationOnce((array: any[]) => {
        maxSumArray(array);
    });
    // mockedSumArray.mockImplementation();
    // mockedSumArray.mockRejectedValueOnce(1);

    const param = [1, 2, 3, 4, 5];
    const param2 = [5, 6, 7, 8, 9];

    mockedSumArray(param);
    mockedSumArray(param2);
    // mockedSumArray([1, 2, 3, 4, 5]);

    expect(mockedSumArray).toHaveBeenCalledTimes(2); // 호출 수
    expect(mockedSumArray.mock.calls.length).toBe(2);
    // expect(mockedSumArray).toBeCalledWith(param);
    //
    expect(mockedSumArray.mock.calls[0][0]).toEqual(param);
    expect(mockedSumArray.mock.calls[1][0]).toEqual(param2);
    // expect(mockedSumArray.mock.calls).toMatchSnapshot();
    expect(mockedSumArray.mock.results).toMatchSnapshot();




    describe("maxSumArray", () => {
        it('maxSumArray', () => {
            expect(maxSumArray([-5, -3, -1])).toBe(-1);
            expect(maxSumArray([-1, 3, -1, 5])).toBe(7);
            expect(maxSumArray([2, 4, -2, -3, 8])).toBe(9);
        });
    });

    describe("palinerome", () => {
        it('palinerome', () => {
            const mockedPalinerome = jest.fn();
            // mockedSumArray.mockImplementation((array: any[]) => {
            //     maxSumArray(array);
            // });
            mockedPalinerome.mockImplementationOnce((number: any) => {
                palinerome(number);
            });

            // mockedPalinerome.mockImplementation();

            const testParam = 20;
            // const testParam2 = 22;
            // const testParam3 = 4;
            // const testParam4 = 5678765;
            // const testParam5 = 12345678900987654321;
            mockedPalinerome(testParam);
            expect(mockedPalinerome).toBe(false);
            // expect(mockedPalinerome(testParam2)).toBe(true);
            // expect(mockedPalinerome(testParam3)).toBe(true);
            // expect(mockedPalinerome(testParam4)).toBe(false);
            // expect(mockedPalinerome(testParam5)).toBe(true);

        });
    });

});
