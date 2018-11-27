/*
    Simple, remove the spaces from the string, then return the resultant string.

    Kata Link:
        https://www.codewars.com/kata/57eae20f5500ad98e50002c5

    Discuss Link:
        https://www.codewars.com/kata/remove-string-spaces/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/remove-string-spaces/solutions/javascript
*/

function noSpace(x){
	return x.split(" ").join("");
}

module.exports = noSpace;