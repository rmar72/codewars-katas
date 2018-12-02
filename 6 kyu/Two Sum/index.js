/* Description:
    Write a function that takes an array of numbers (integers for the tests) and a target number.
    It should find two different items in the array that, when added together, give the target value.

    The indices of these items should then be returned in an array like so: [index1, index2].
    For the purposes of this kata, some tests may have multiple answers; any valid solutions will 
    be accepted.

    The input will always be valid (numbers will be an array of length 2 or greater, and all of the 
    items will be numbers; target will always be the sum of two different items from that array).
    Based on: http://oj.leetcode.com/problems/two-sum/

    Kata Link:
        https://www.codewars.com/kata/two-sum/javascript

    Discuss Link:
        https://www.codewars.com/kata/two-sum/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/52c31f8e6605bcc646000082/solutions/javascript

*/

function twoSum(nums, t) {
    const l = nums.length;
    for(let i=0; i < l; i++)
        for(let j=0; j < l; j++)
            if(nums[i] + nums[j+1] == t)
                return [i, j+1]; 
}


module.exports = twoSum;