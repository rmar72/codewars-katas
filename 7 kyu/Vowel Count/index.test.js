const getCount = require('.');

describe("Case 1 for getCount", () => {
    it("should be defined", () => {
        expect( getCount("abracadabra")).toBe(5);
    })
});