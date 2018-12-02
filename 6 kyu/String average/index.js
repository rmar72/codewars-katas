/*
Description:
    You are given a string of numbers between 0-9. Find the average of these numbers and
    return it as a floored whole number (ie: no decimal places) written out as a string. 
    Eg:
        "zero nine five two" -> "four"
    If the string is empty or includes a number greater than 9, return "n/a"

    Kata Link:
        https://www.codewars.com/kata/5966847f4025872c7d00015b

    Discuss Link:
        https://www.codewars.com/kata/string-average/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/string-average/solutions/javascript
*/

function averageString(str) {
    if(str == ""){return "n/a"}

    var nums = str.split(" ");
    var arr = [ ["zero",0],["one",1],["two",2],["three",3], ["four",4],["five",5],
            ["six",6],["seven",7],["eight",8],["nine",9],["ten",10] ];
    var numberStrings = arr.map(y => y[0]).join(" ");


    var realNums = [];
    for(var i =0; i < nums.length; i++){
        if(!numberStrings.includes(nums[i]))
            return "n/a";

    for(var j = 0; j<arr.length; j++)
        if(nums[i] == arr[j][0])
            realNums.push(arr[j][1]);
    }

    var num = realNums.reduce((acc, x) => acc+=x,0) / nums.length;

    var t;
    for(var i =0; i < arr.length; i++){
        if(arr[i][1] == Math.floor(num))
            t = arr[i][0];
    }
    return t;
}

module.exports = averageString;