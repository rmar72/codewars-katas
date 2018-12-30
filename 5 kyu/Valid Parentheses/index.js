/*
Description:
  Write a function called that takes a string of parentheses, and determines if the order of the
  parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

  Examples
  "()"              =>  true
  ")(()))"          =>  false
  "("               =>  false
  "(())((()())())"  =>  true
  Constraints
  0 <= input.length <= 100

    Kata Link:
        https://www.codewars.com/kata/52774a314c2333f0a7000688

    Discuss Link:
        https://www.codewars.com/kata/valid-parentheses/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/valid-parentheses/solutions/javascript
*/

function validParentheses(parens){
  return !parens.split("").reduce(function(acc, char){
    if(acc < 0) return acc;
    if(char === "(") return ++acc;
    if(char === ")") return --acc;
    
    return acc;
  }, 0)
}

module.exports = validParentheses;