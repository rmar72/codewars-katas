const twoSum = require('.');

describe("twoSum fn test", () => {

    function numericalCompare(a, b) {
        return a - b;
    }

    it("passes basic tests", () => {
        expect( twoSum([1,2,3], 4).sort(numericalCompare)).toEqual([0 ,2]);
        expect(twoSum([1234,5678,9012], 14690).sort(numericalCompare)).toEqual([1, 2]);
        expect(twoSum([2,2,3], 4).sort(numericalCompare)).toEqual([0, 1]);
    });
});