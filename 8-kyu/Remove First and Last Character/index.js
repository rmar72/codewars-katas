/*

    It's pretty straightforward. Your goal is to create a function that removes the first and last
    characters of a string. You're given one parameter, the original string. 
    You don't have to worry with strings with less than two characters.

    Kata Link:
        https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

    Discuss Link:
        https://www.codewars.com/kata/remove-first-and-last-character/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/remove-first-and-last-character/solutions/javascript
*/

function removeChar(str){
	str = str.replace(str.charAt(0), "");
	return str.replace(str.charAt(str.length-1), "");
};

module.exports = removeChar;