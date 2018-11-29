/*

    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, and u as vowels for this Kata.
    The input string will only consist of lower case letters and/or spaces.


    Kata Link:
        https://www.codewars.com/kata/54ff3102c1bad923760001f3

    Discuss Link:
        https://www.codewars.com/kata/vowel-count/discuss

    Solutions Link:
        https://www.codewars.com/kata/vowel-count/solutions
*/

function getCount(str) {
    var vowelsCount = 0;
    
    str=str.toUpperCase().split("");
    
    function vowels(st){
        switch(st)
        {
        case "A":
            vowelsCount++;
            break;			
        case "E":
            vowelsCount++;
            break;
        case "I":	
            vowelsCount++;
            break;
        case "O":
            vowelsCount++;
            break;
        case "U":
            vowelsCount++;
            break;
        default:
            break;	
        }
    }
    
    for(var i=0; i<str.length;i++){
        vowels(str[i]);
    }
    
    return vowelsCount;
}

// new solution as Im doing this lol 
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }

module.exports = getCount;