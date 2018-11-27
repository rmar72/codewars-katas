/*

    Very simple, given a number, find its opposite.

    Examples:
        1: -1
        14: -14
        -34: 34

    Kata Link:
        https://www.codewars.com/kata/56dec885c54a926dcd001095

    Discuss Link:
        https://www.codewars.com/kata/opposite-number/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/opposite-number/solutions/javascript

*/

function opposite(number) {
    return number-(number*2);
}

module.exports = opposite;