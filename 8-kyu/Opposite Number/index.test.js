const opposite = require('.');

describe("opposite kata", () => {
    it("should return opposite number", () => {
        expect(opposite(1)).toBe(-1);
    });
});