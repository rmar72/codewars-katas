const quote = require('.');

describe("ufc fan quote", () => {
    it("should return I am not impressed by your performance.", () => {
        expect(quote('george saint pierre')).toBe("I am not impressed by your performance.");
    });
    it("should return I'd like to take this chance to apologize.. To absolutely NOBODY!", () => {
        expect(quote('conor mcgregor')).toBe("I'd like to take this chance to apologize.. To absolutely NOBODY!");
    });
});