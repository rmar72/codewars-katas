const circleOfNumbers = require('.');

describe("circleOfNumbers fn Kata", () => {
    it("passes assertions", () => {
        expect( circleOfNumbers(10, 2)).toBe(7);
        expect( circleOfNumbers(10, 7)).toBe(2);
        expect( circleOfNumbers(4, 1)).toBe(3);
        expect( circleOfNumbers(6, 3)).toBe(0);
    });
});