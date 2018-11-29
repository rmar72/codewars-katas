const spam = require('.');

describe("spam fn", () => {
    it("assert values", () => {
        expect( spam(1)).toBe('hue');
        expect( spam(6)).toBe('huehuehuehuehuehue');
        expect( spam(14)).toBe('huehuehuehuehuehuehuehuehuehuehuehuehuehue');
    })
});