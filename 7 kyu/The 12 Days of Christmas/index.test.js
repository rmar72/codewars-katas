const comparator = require('.');

describe("example test", () => {

    var shuffle = function(list) {
        var shuffled = []
        for (var i = 0; i < list.length; i++) shuffled.push(list[i]);
        for (var i = 0; i < shuffled.length; i++) {
            if (Math.random() > 0.5) {
                j = (i+3) % shuffled.length;
                // swap lines i & j
                var tmp = shuffled[i]
                shuffled[i] = shuffled[j]
                shuffled[j] = tmp
            }
        }
        return shuffled
    }

    var display = function(list) {
    for (var i in list) {
        console.log(list[i])
    }
    return list
    }

    it("asserts values", () => {
        var lines = [
            "On the 12th day of Christmas my true love gave to me",
            "12 drummers drumming,",
            "11 pipers piping,",
            "10 lords a leaping,",
            "9 ladies dancing,",
            "8 maids a milking,",
            "7 swans a swimming,", 
            "6 geese a laying,", 
            "5 golden rings,", 
            "4 calling birds,",
            "3 French hens,", 
            "2 turtle doves and", 
            "a partridge in a pear tree."    
        ];
        
        var shuffled = shuffle(lines);
        console.log("SHUFFLED:"); display(shuffled);
        var actual = shuffled.sort(comparator);
        var expected = lines;

        expect( comparator(actual)).toBe(expected);
    });
});