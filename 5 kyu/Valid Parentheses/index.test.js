const validParentheses = require('.');

describe("validParentheses fn", () => {
    it("passes kata tests", () => {
        expect( validParentheses("()")).toBe(true);
        expect( validParentheses("())")).toBe(false);
        expect( validParentheses("()))")).toBe(false);
        expect( validParentheses("(())()()()")).toBe(true);
    });
});