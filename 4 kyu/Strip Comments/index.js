/*
Description:
  Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

  Example:

  Given an input string of:

  apples, pears # and bananas
  grapes
  bananas !apples
  The output expected would be:

  apples, pears
  grapes
  bananas
  The code would be called like so:

  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  // result should == "apples, pears\ngrapes\nbananas"

    Kata Link:
        https://www.codewars.com/kata/51c8e37cee245da6b40000bd

    Discuss Link:
        https://www.codewars.com/kata/strip-comments/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/strip-comments/solutions/javascript
*/

function stripComment(input, markers){
  var s = new String(input), arr = [];

  for (var j = 0; j<markers.length; j++){
    for (char in s){
      if(s[char] == markers[j]){
        for(var i = parseInt(char); i<s.length; i++){
          if(s[i] == "\n"){
            arr.push(input.slice(parseInt(char-1),i));
            break;
          }
          if(i == (s.length-1)){
            arr.push(input.slice(parseInt(char-1),i+1));
          }
        }
      }
    }
  }
  // console.log(arr)

  arr.forEach(x => {
    input = input.replace(x, "");
  });

  return input.trim();
}

module.exports = stripComment;