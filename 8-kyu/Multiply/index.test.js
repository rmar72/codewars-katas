const multiply = require('.');

describe("multiply fn solution (1st codewars member challenge entrance)", () => {
    it("should test for something", () => {
        expect( multiply(2, 2)).toBe(4);
        expect( multiply(5, 2)).toBe(10);
        expect( multiply(5, 10)).toBe(50);
    })
});