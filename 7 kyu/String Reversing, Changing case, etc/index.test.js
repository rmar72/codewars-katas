const reverseAndMirror = require('.');

describe("Solution for reverseAndMirror fn", () => {
    it("should test for some strings", () => {
        s1 = "FizZ";
        s2 = "buZZ";
        expect( reverseAndMirror(s1, s2)).toBe("zzUB@@@zZIffIZz");

        s3 = "String Reversing";
        s4 = "Changing Case";
        expect( reverseAndMirror(s3, s4)).toBe("ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING");
    });
});