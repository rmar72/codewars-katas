const dontGiveMeFive = require('.');

describe("dontGiveMeFive Kata fn", () => {
    it("passes example tests", () => {
        expect( dontGiveMeFive(1,9)).toBe(8);
        expect( dontGiveMeFive(4,17)).toBe(12);
    });
});