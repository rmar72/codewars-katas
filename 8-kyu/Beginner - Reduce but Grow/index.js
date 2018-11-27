/*
    Given a non-empty array of integers, return the result of multiplying the values together in order.
    
    Example:
        [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


    Kata Link:
        https://www.codewars.com/kata/57f780909f7e8e3183000078

    Discuss Link:
        https://www.codewars.com/kata/beginner-reduce-but-grow/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/beginner-reduce-but-grow/solutions/javascript
*/

const grow = (arr) => {
    var num = arr[0];
    for(var i=1; i < arr.length; i++){
        num *= arr[i];
    }
    return num;
}

module.exports = grow;