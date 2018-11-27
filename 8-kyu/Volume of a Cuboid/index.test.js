const Kata = require('.');

describe("Kata fn", () => {
    it("assert correct values", () => {
        expect( Kata.getVolumeOfCuboid(1,2,2)).toBe(4);
        expect( Kata.getVolumeOfCuboid(6.3, 2, 5)).toBe(63);
    })
});