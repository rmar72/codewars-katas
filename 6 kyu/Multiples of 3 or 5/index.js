/*
Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
    The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the 
    number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once.
    Courtesy of ProjectEuler.net

    Kata Link:
        https://www.codewars.com/kata/514b92a657cdc65150000006

    Discuss Link:
        https://www.codewars.com/kata/multiples-of-3-or-5/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/multiples-of-3-or-5/solutions/javascript
*/

function solution(n){
    return Array.from({length:n}, (v, i) => i)
            .filter( n => n % 5 == 0 || n % 3 == 0)
            .reduce((acc, item) => acc +item, 0);
}

module.exports = solution;