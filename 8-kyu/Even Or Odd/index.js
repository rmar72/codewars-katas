/*

    Create a function (or write a script in Shell) that takes an integer as an 
    argument and returns "Even" for even numbers or "Odd" for odd numbers.

    
    Kata Link:
        https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

    Discuss Link:
        https://www.codewars.com/kata/even-or-odd/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/even-or-odd/solutions/javascript
*/

function even_or_odd(n) {
    return n%2==0 ? "Even" : "Odd";
}

module.exports = even_or_odd;