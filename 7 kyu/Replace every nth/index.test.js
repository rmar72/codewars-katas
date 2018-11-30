const replaceNth = require('.');

describe("replaceNth fn test", () => {
    it("passes basic tests", () => {
        expect( replaceNth("Vader said: No, I am your father!", 2, 'a', 'o')).toBe("Vader soid: No, I am your fother!");
        expect( replaceNth("Vader said: No, I am your father!", 4, 'a', 'o')).toBe("Vader said: No, I am your fother!");
        expect( replaceNth("Vader said: No, I am your father!", 6, 'a', 'o')).toBe("Vader said: No, I am your father!");
        expect( replaceNth("Vader said: No, I am your father!", 0, 'a', 'o')).toBe("Vader said: No, I am your father!");
        expect( replaceNth("Vader said: No, I am your father!", -2, 'a', 'o')).toBe("Vader said: No, I am your father!");
        expect( replaceNth("Vader said: No, I am your father!", 1, 'i', 'y')).toBe("Vader sayd: No, I am your father!");
        
        expect(replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i')).toBe("Luke cries: Noooooioooooioooo!");
    });
});