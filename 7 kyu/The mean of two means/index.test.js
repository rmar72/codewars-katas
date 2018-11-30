const getMean = require('.');

describe("getMean fn", () => {
    it("asserts values", () => {
        expect( getMean([1,3,2,4],2,3)).toBe(2.5);
        expect( getMean([1,3,2,4],1,2)).toBe(-1);
    });
});