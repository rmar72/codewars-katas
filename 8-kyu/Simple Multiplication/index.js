/*

    This kata is about multiplying a given number by eight 
    if it is an even number and by nine otherwise.

    Kata Link:
        https://www.codewars.com/kata/583710ccaa6717322c000105

    Discuss Link:
        https://www.codewars.com/kata/simple-multiplication/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/simple-multiplication/solutions/javascript
*/

function simpleMultiplication(n){
    return n%2==0 ? n*8 : n*9;
}

module.exports = simpleMultiplication;