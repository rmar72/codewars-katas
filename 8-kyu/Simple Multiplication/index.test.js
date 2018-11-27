const simpleMultiplication = require('.');

describe("simpleMultiplication", () => {
    it("Should return given argument times eight...", () => {
        expect(simpleMultiplication(2)).toBe(16);
        expect(simpleMultiplication(4)).toBe(32);
        expect(simpleMultiplication(8)).toBe(64);
    });
    it("Should return given argument times nine...", () => {
        expect(simpleMultiplication(1)).toBe(9);
        expect(simpleMultiplication(5)).toBe(45);
    });
});