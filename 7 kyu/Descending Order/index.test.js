const descendingOrder = require('.');

describe("descendingOrder fn", () => {
    it("assert correct value", () => {
        expect( descendingOrder(0)).toBe(0);
        expect( descendingOrder(1)).toBe(1);
        expect( descendingOrder(123456789)).toBe(987654321);
        expect( descendingOrder(145263)).toBe(654321);
    })
});