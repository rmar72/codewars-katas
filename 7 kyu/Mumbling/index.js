/*
Description:
    This time no story, no theory. The examples below show you how to write function accum:

    Examples:
        accum("abcd");    // "A-Bb-Ccc-Dddd"
        accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        accum("cwAt");    // "C-Ww-Aaa-Tttt"


    Kata Link:
        https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

    Discuss Link:
        https://www.codewars.com/kata/mumbling/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/mumbling/solutions/javascript
*/

function accum(str){
    var s=str.toLowerCase().split(""),
        arr=[], text="";
        
    for(var i=1; i<s.length; i++){
        arr.push(s[i].toUpperCase())
        arr.push(s[i].repeat(i)+"-");
    }
    arr.unshift(s[0].toUpperCase()+"-");

    text=arr.join("").slice(0,-1);
    return text;
}

module.exports = accum;