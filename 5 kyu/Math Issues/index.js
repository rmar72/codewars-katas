/*
Description:

  Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
  Here is a list of functions, we need:

  Math.round()
  Math.ceil()
  Math.floor()

    Kata Link:
        https://www.codewars.com/kata/5267faf57526ea542e0007fb

    Discuss Link:
        https://www.codewars.com/kata/math-issues/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/math-issues/solutions/javascript
*/

Math.round = function(number) {
  var arrNum = number.toString().split(".");
  return !number.toString().includes(".") ? number : arrNum[1][0] > 4  ? parseInt(arrNum[0])+1 : parseInt(arrNum[0]);
}

Math.ceil = function(number) {
arrNum = number.toString().split(".");
return number<1 && number>0 ? 1 : !number.toString().includes(".") ? number : parseInt(arrNum[1]) > 0 ? parseInt(arrNum[0])+1 : parseInt(arrNum[0]);
};

Math.floor = function(number) {
  return parseInt( number.toString().split(".")[0] );
};

module.exports = Math.round;
module.exports = Math.ceil;
module.exports = Math.floor;