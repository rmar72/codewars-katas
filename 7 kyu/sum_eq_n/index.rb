
# Description:
#     Define a method sum_eq_n? which takes an array of integers and an additional integer, n, 
#     as arguments and returns true if any two elements in the array of integers sum to n. 
#     An empty array should sum to zero by definition.

#     Examples:
#         sum_eq_n?([1, 2, 3, 4], 6) == true  # 4 + 2 = 6
#         sum_eq_n?([1, 2, 3, 4], 8) == false # Not possible
#         sum_eq_n?([], 0) == true # An empty array should sum to 0
#         sum_eq_n?([], 1) == false # Not possible

#     I saw this on stackoverflow and thought it would make an interesting kata.


#     Kata Link:
#         https://www.codewars.com/kata/54b68c9f48245d382a000f2a

#     Discuss Link:
#         https://www.codewars.com/kata/sum-eq-n/discuss/ruby

#     Solutions Link:
#         https://www.codewars.com/kata/sum-eq-n/solutions/ruby


        
def sum_eq_n?(arr, n)
    (arr.empty? and n.zero?) or arr.any? { |x| arr.include?(n - x) }
end

