const averageString = require('.');

describe("averageString fn", () => {
    it("should find averages", () => {
        expect( averageString("zero nine five two")).toBe("four");
        expect( averageString("four six two three")).toBe("three");
        expect( averageString("one two three four five")).toBe("three");
        expect( averageString("five four")).toBe("four");
        expect( averageString("zero zero zero zero zero")).toBe("zero");
        expect( averageString("one one eight one")).toBe("two");
        expect( averageString("")).toBe("n/a");
    });
});