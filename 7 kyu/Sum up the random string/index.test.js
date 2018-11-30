const sumFromString = require('.');

describe("sumFromString fn", () => {
    it("assert correct values", () => {
        expect( sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")).toBe(2021);
        expect( sumFromString("1+1=2")).toBe(4);
        expect( sumFromString("e=mc^2")).toBe(2);
    });
});