/*
Summation
    Write a program that finds the summation of every number from 1 to num. 
    The number will always be a positive integer greater than 0.

For example:
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


Kata Link:
    https://www.codewars.com/kata/grasshopper-summation/

Discuss Link:
    https://www.codewars.com/kata/grasshopper-summation/discuss

Solutions Link:
    https://www.codewars.com/kata/grasshopper-summation/solutions

*/

const summation = (num) => [...Array(num+1).keys()].reduce((acc, n) => acc+=n, 0);

module.exports = summation;