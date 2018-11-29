const mineColor = require('.');

describe("mineColor fn", () => {
    it("assert correct values", () => {
        expect( mineColor("a", 8)).toBe("white");
        expect( mineColor("b", 1)).toBe("white");
        expect( mineColor("a", 1)).toBe("black");
    })
});