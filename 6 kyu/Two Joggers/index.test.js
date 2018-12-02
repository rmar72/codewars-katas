const nbrOfLaps = require('.');

describe("nbrOfLaps kata", () => {
    it("passes tests", () => {
        expect( nbrOfLaps([5, 3])).toBe([3, 5]);
        expect( nbrOfLaps([4, 6])).toBe([3, 2]);
        expect( nbrOfLaps([5, 5])).toBe([1, 1]);
    });
});