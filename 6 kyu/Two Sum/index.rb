# Description:
#   Write a function that takes an array of numbers (integers for the tests) and a target number.
#   It should find two different items in the array that, when added together, give the target value.

#   The indices of these items should then be returned in an array like so: [index1, index2].
#   For the purposes of this kata, some tests may have multiple answers; any valid solutions will 
#   be accepted.

#   The input will always be valid (numbers will be an array of length 2 or greater, and all of the 
#   items will be numbers; target will always be the sum of two different items from that array).
#   Based on: http://oj.leetcode.com/problems/two-sum/

#     Kata Link:
#         https://www.codewars.com/kata/52c31f8e6605bcc646000082

#     Discuss Link:
#       https://www.codewars.com/kata/two-sum/discuss/ruby

#     Solutions Link:
#       https://www.codewars.com/kata/two-sum/solutions/ruby


def two_sum(numbers, target)
  numbers.each_with_index do |n1, i1|
    numbers.each_with_index do |n2, i2|
      return [i1, i2] if (n1 + n2) == target && i1 != i2
    end
  end
end