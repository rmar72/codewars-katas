const race = require('.');

describe("Tortoise Racing", () => {
    it("Passes Basic tests", () => {
        expect( race(720, 850, 70)).toEqual([0, 32, 18]);
        expect( race(80, 91, 37)).toEqual([3, 21, 49]);
        expect( race(80, 100, 40)).toEqual([2, 0, 0]);
    });
});