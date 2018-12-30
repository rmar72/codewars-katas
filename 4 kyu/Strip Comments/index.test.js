const stripComment = require('.');

describe("stripComment fn", () => {
    it("passes kata tests", () => {
        expect( stripComment("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])).toBe("apples, plums\npears\noranges");
        
        expect( stripComment("Q @b\nu\ne -e f g", ["@", "-"], ["%", "!"])).toBe("Q\nu\ne");
    });
});