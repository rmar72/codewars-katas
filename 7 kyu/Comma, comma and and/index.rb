
# Description:
#     Sometimes you have an array of strings and you would like to be displayed as a nicely formatted 
#     list, in which the items are separated by commas with an 'and' before the last item.

#     eg: 'Protons, neutrons and electrons'

#     ###Task:

#     Take an array of strings and return a single nicely formatted string with commas and the 
#     'and' in their correct places.

#     ###Example:

#     format_comma_and( ['Bonnie', 'Clyde'] ) # 'Bonnie and Clyde'
#     format_comma_and( ['Athos', 'Porthos', 'Aramis']) # 'Athos, Porthos and Aramis'
#     ###Notes: There is no need to modify the captilisation of the provided strings.
#     This kata does NOT use an Oxford comma. (i.e. there is no comma immediately before the 'and') 
#     There is another kata available if you feel strongly about this.
#     You should not modify the argument array.
#     All input array elements will be Strings. (You don't need to worry about nil elements, but the
#     array can be empty.)

#     ###Meta kata notes: Let me know in the discussion if there are any more test cases that would
#     be good to add.

#     Can you translate this kata into another language? (Ruby is the original version.)


#     Kata Link:
#         https://www.codewars.com/kata/565c88c862901d1ad9000074

#     Discuss Link:
#         https://www.codewars.com/kata/comma-comma-and-and/discuss/ruby

#     Solutions Link:
#         https://www.codewars.com/kata/comma-comma-and-and/solutions/ruby


#  Ruby Solution
def format_comma_and(array)
    case array.size
        when 0 then ''
        when 1 then array[0]
        when 2 then "#{array[0]} and #{array[1]}"
        else "#{array[0]}, #{format_comma_and(array[1..-1])}"
    end
end
