const median = require('.');

describe("median fn", () => {
    it("assert correct values", () => {
        expect( median([1,2,3,4])).toBe(2.5);
        expect( median([3,4,1,2,5])).toBe(3);
        expect( median([10,29,23,94,76,96,5,85,4,33,47,41,87])).toBe(41);
    })
});