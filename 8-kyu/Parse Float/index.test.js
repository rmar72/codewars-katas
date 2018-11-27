const parseF = require('.');

describe("parseFloat", () => {
    it("take string and turn it into number or nothing if not possible", () => {
        expect(parseF("1")).toBe(1);
        expect(parseF("10990")).toBe(10990);
        expect(parseF("-789")).toBe(-789);
    })
});