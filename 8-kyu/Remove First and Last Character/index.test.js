const removeChar = require('.');

describe("removeChar", () => {
    it("should assert correct value", () => {
        expect(removeChar('eloquent')).toBe('loquen');
        expect(removeChar('country')).toBe('ountr');
        expect(removeChar('person')).toBe('erso');
        expect(removeChar('place')).toBe('lac');
    });
});