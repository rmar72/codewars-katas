const lastDigit = require('.');

describe("lastDigit fn", () => {
    it("should pass kata tests", () => {
        expect( lastDigit("4", "1")).toBe(4);
        expect( lastDigit("4", "2")).toBe(6);
        expect( lastDigit("9", "7")).toBe(9);
        expect( lastDigit("10", "10000000000")).toBe(0);
        expect( lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376")).toBe(6);
        expect( lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")).toBe(7);
    });
});