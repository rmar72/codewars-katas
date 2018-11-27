/*
    Write a function called repeatStr which repeats the given string string exactly n times.
    Examples: 
        repeatStr(6, "I") // "IIIIII"
        repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

    Kata Link:
        https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

    Discuss Link:
        https://www.codewars.com/kata/string-repeat/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/string-repeat/solutions/javascript
*/

function repeatStr(num, str) {
	return str.repeat(num);
}

module.exports = repeatStr;