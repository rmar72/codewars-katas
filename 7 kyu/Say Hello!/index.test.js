const greet = require('.');

describe("greet fn", () => {
    it("describes try again", () => {
        expect( greet("Niks")).toBe("hello Niks!");
        expect( greet(null)).toBe(null);
    })
});