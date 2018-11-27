const litres = require('.');

describe("litres", () => {
    it('should return 1 litres', () => {
        expect(litres(2)).toBe(1);
    });
    it('should return 0 litres', () => {
        expect(litres(1.4)).toBe(0);
    });
    it('should return 5 litres', () => {
        expect(litres(11.8)).toBe(5);
    });
    it('should return 893 litres', () => {
        expect(litres(1787)).toBe(893);
    });
    it('should return 0 litres', () => {
        expect(litres(0.82)).toBe(0);
    });
});