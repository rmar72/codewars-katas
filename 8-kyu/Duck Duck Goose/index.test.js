const duckDuckGoose = require('.');

class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

describe("fixed tests for duckDuckGoose fn", () => {
    it("should find the correct goose", () => {
        expect( duckDuckGoose(players, 1)).toBe('a');
        expect( duckDuckGoose(players, 3)).toBe('c');
        expect( duckDuckGoose(players, 10)).toBe('z');
        expect( duckDuckGoose(players, 20)).toBe('z');
        expect( duckDuckGoose(players, 30)).toBe('z');
        expect( duckDuckGoose(players, 18)).toBe('g');
        expect( duckDuckGoose(players, 28)).toBe('g');
        expect( duckDuckGoose(players, 12)).toBe('b');
        expect( duckDuckGoose(players, 2)).toBe('b');
        expect( duckDuckGoose(players, 7)).toBe('f');
    });
});