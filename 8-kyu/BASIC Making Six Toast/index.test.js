const sixToast = require('.');

describe("sixToast fn", () => {
    it("assert correct value", () => {
        expect( sixToast(6)).toBe(0);
        expect( sixToast(17)).toBe(11);
        expect( sixToast(3)).toBe(3);
    });
});