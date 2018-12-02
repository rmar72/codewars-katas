# Description:
#     This is an extention to the basic version 
#     (http://www.codewars.com/kata/every-nth-array-element-basic) of this problem, 
#     you might like to try that one first.

#     Create a method every which returns every nth element of an array.

#     Usage
#     With no arguments, array.every it returns every element of the array.
#     With one argument, array.every(interval) it returns every intervalth element.
#     With two arguments, array.every(interval, start_index) it returns every intervalth 
#     element starting at index start_index

#     Examples
#     [0,1,2,3,4].every      # [0,1,2,3,4]
#     [0,1,2,3,4].every(1)   # [0,1,2,3,4]
#     [0,1,2,3,4].every(2)   # [0,2,4]
#     [0,1,2,3,4].every(3)   # [0,3]
#     [0,1,2,3,4].every(1,3) # [3,4]
#     [0,1,2,3,4].every(3,1) # [1,4]
#     [0,1,2,3,4].every(3,4) # [4]
#     Advanced features
#     Negative values

#     When interval is negative, you return every nth element, but count down instead of up. 
#     The start index is still relevant and still defaults to zero.

#     Example:

#     [0,1,2,3,4].every(-1,4)   # [4,3,2,1,0]
#     [0,1,2,3,4].every(-2)     # [0]
#     When start_index is negative, it counts backwards from the end of the array. 
#     (This is the same behaviour as Ruby's array indexing)

#     Example:

#     [0,1,2,3,4].every(-1,-1)   # [4,3,2,1,0]
#     [0,1,2,3,4].every(-2,-5)   # [0]
#     [0,1,2,3,4].every( 1,-3)   # [2,3,4]
#     Error detection

#     Every makes no sense when interval is zero, so interval may NOT be zero, in this 
#     case return an ArgumentError with the message interval can't be 0

#     Out of bounds indexes

#     If start_index is out of bounds return an empty array.

#     Notes
#     In test cases:
#     interval may be any integer.
#     start_index may be any integer.

#     Beta kata notes
#     Ruby is the original language for this kata.

#     Can you suggest any missing test cases?

#     Kata Link:
#         https://www.codewars.com/kata/57531a8605067f3b8d001083

#     Discuss Link:
#         https://www.codewars.com/kata/every-nth-array-element-advanced/discuss/ruby

#     Solutions Link:
#         https://www.codewars.com/kata/every-nth-array-element-advanced/solutions/ruby
        

class Array
    def every(k=1, i=0)
        raise ArgumentError.new("interval can't be 0") if k==0
        res = []
        i = self.size + i if i< 0
        while i< self.size and i>=0
            res << self[i]
            i = i+k
        end
        res
    end
end