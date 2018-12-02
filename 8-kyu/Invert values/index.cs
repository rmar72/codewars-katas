// Description:
//     Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
//     and the negatives become positives.

//     invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//     invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//     invert([]) == []



//     Kata Link:
//         https://www.codewars.com/kata/invert-values/csharp

//     Discuss Link:
//         https://www.codewars.com/kata/invert-values/discuss/csharp

//     Solutions Link:
//         https://www.codewars.com/kata/invert-values/solutions/csharp

using System.Linq;
namespace Solution
{
    public static class ArraysInversion
    {
        public static int[] InvertValues(int[] input)
        {
            return input.Select(n => -n).ToArray();
        }
    }
}