const orderFood = require('.');

describe("Solution for orderFood fn", () => {

    it("passes assertion", () => {
        var list1 = [
            { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
            { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
            { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' },
            { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' },
        ];
        var answer = { vegetarian: 2, standard: 1, vegan: 1 };
        expect( orderFood(list1)).toEqual(answer);
    });
});