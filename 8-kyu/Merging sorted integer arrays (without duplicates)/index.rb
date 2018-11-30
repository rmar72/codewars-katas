
# Description:
#     Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
#     Also, the final outcome must be sorted and not have any duplicate.

# Kata Link:
#     https://www.codewars.com/kata/573f5c61e7752709df0005d2

# Discuss Link:
#     https://www.codewars.com/kata/merging-sorted-integer-arrays-without-duplicates/discuss/ruby

# Solutions Link:
#     https://www.codewars.com/kata/merging-sorted-integer-arrays-without-duplicates/solutions/ruby


def merge_arrays(a, b)
    (a | b).sort
end