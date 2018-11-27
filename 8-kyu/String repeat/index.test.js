const repeatStr = require('.');

describe("repeatStr fn", () => {
    it("should cover basic tests", () => {
        expect( repeatStr(5, "#")).toBe("#####");
        expect( repeatStr(3, "*")).toBe("***");
        expect( repeatStr(2, "ha ")).toBe("ha ha ");
    })
});