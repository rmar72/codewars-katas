/*
Description:
    Define a function that takes in two numbers a and b and returns the last decimal digit of a^b. 
    Note that a and b may be very large!

    For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of
    (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

    The inputs to your function will always be non-negative integers.

    Examples
    lastDigit("4", "1")            // returns 4
    lastDigit("4", "2")            // returns 6
    lastDigit("9", "7")            // returns 9    
    lastDigit("10","10000000000")  // returns 0
    Remarks
    JavaScript, C++, R
    Since these languages don't have native arbitrarily large integers, your arguments are going to 
    be strings representing non-negative integers.

    Kata Link:
        https://www.codewars.com/kata/5511b2f550906349a70004e1

    Discuss Link:
        https://www.codewars.com/kata/last-digit-of-a-large-number/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/last-digit-of-a-large-number/solutions/javascript
*/

var lastDigit = function(str1, str2){  
    return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}

module.exports = lastDigit;