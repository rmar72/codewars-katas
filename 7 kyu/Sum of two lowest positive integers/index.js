/*
Description:
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
    No floats or empty arrays will be passed.
    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
    [10, 343445353, 3453445, 3453545353453] should return 3453455.

    Kata Link:
        https://www.codewars.com/kata/558fc85d8fd1938afb000014

    Discuss Link:
        https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/solutions/javascript
*/

function sumTwoSmallestNumbers(numbers) {  
	numbers.sort( function(a,b){ return a-b; } );
	return numbers[0]+numbers[1];
};

module.exports = sumTwoSmallestNumbers;