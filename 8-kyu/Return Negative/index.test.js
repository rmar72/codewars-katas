const makeNegative = require('.');

describe("makeNegative", () => {
    it("should return negative number", () => {
        expect(makeNegative(42)).toBe(-42);
    })
});