const sumArray = require('.');

describe("sumArray fn", () => {
    it("asserts correct value", () => {
        expect( sumArray([ 6, 2, 1, 8, 10 ])).toBe(16);
    })
});