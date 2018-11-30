const gps = require('.');

describe("gps fn test", () => {

    it("passes testing fn1", () => {
        var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
        var s = 20;
        var u = 41;
        expect( Math.floor(gps(s ,x)) ).toBe(u);
    });
    it("passes testing fn2", () => {
        var x = [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25];
        var s = 12;
        var u = 219;
        expect( Math.floor(gps(s ,x)) ).toBe(u);
    });
    it("passes testing fn3", () => {
        var x = [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84];
        var s = 20;
        var  u = 80;
        expect( Math.floor(gps(s ,x)) ).toBe(u);
    });
    it("passes testing fn4", () => {
        var x = [0.0, 0.01, 0.36, 0.6, 0.84, 1.05, 1.26, 1.47, 1.68, 1.89, 2.1, 2.31, 2.52, 2.73, 2.94, 3.15];
        var s = 14;
        var u = 90;
        expect( Math.floor(gps(s ,x)) ).toBe(u);
    });
    it("passes testing fn5", () => {
        var x = [0.0, 0.02, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44, 1.62, 1.8];
        var s = 17;
        var u = 72;
        expect( Math.floor(gps(s ,x)) ).toBe(u);
    });
});