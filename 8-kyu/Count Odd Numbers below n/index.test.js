const oddCount = require('.');

describe("oddCount fn", () => {
    it("assert correct values", () => {
        expect( oddCount(15)).toBe(7);
        expect( oddCount(15023)).toBe(7511);
    });
});