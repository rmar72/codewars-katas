/*
    Description:
        Here we have a function that help us spam our hearty laughter. But is not working! 
        I need you to find out why...

    Expected results:
        spam(1);  // hue
        spam(6);  // huehuehuehuehuehue
        spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue


    Kata Link:
        https://www.codewars.com/kata/52e9aa89b5acdd26d3000127

    Discuss Link:
        https://www.codewars.com/kata/multiply-characters/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/multiply-characters/solutions/javascript
*/

function spam(n){
    return Array(++n).join("hue");
}

module.exports = spam;

