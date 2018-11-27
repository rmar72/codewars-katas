/*

    Write function parseFloat (for Javascript parseF) which takes a string and returns 
    a number or Nothing (for Python None, for Javascript null) if conversion is not possible.

    Kata Link:
        https://www.codewars.com/kata/57a386117cb1f31890000039

    Discuss Link:
        https://www.codewars.com/kata/parse-float/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/parse-float/solutions/javascript
*/

function parseF(str) {
    str=parseFloat(str);
    return typeof(str)!= 'number' || isNaN(str) ? null : parseFloat(str);
}

module.exports = parseF;