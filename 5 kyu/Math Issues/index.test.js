const round = require('.');
const ceil = require('.');
const floor = require('.');

describe("Math round fn", () => {
    it("passes kata test", () => {
        expect( round(0.4)).toBe(0);
    });
    it("passes kata test", () => {
        expect( round(0.5)).toBe(1);
    });
});

describe("Math ceil fn", () => {
    it("passes kata test", () => {
        expect( ceil(0.4)).toBe(1);
    });
    it("passes kata test", () => {
        expect( ceil(0.5)).toBe(1);
    });
});

describe("Math floor fn", () => {
    it("passes kata test", () => {
        expect( floor(0.4)).toBe(0);
    });
    it("passes kata test", () => {
        expect( floor(0.5)).toBe(0);
    });
});