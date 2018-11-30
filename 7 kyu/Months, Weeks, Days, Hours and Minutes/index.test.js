const displayValue = require('.');

describe("displayValue fn test", () => {
    it("passes basic tests", () => {
        expect( displayValue(1)).toBe("1 minute");
        expect( displayValue(100)).toBe("1 hour 40 minutes");
        expect( displayValue(40321)).toBe("1 month 1 minute");
        expect( displayValue(52874)).toBe("1 month 1 week 1 day 17 hours 14 minutes");
    });
});