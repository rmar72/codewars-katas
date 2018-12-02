// Description:
//     Your task is to create a function that does four basic mathematical operations.

//     The function should take three arguments - operation(string/char), value1(number), value2(number).
//     The function should return result of numbers after applying the chosen operation.

//     Examples:
//         basicOp('+', 4, 7)         // Output: 11
//         basicOp('-', 15, 18)       // Output: -3
//         basicOp('*', 5, 5)         // Output: 25
//         basicOp('/', 49, 7)        // Output: 7


//     Kata Link:
//         https://www.codewars.com/kata/57356c55867b9b7a60000bd7

//     Discuss Link:
//         https://www.codewars.com/kata/basic-mathematical-operations/discuss/javascript

//     Solutions Link:
//         https://www.codewars.com/kata/basic-mathematical-operations/solutions/javascript


namespace Solution
{
    public static class Program
    {
        public static double basicOp(char op, double val1, double val2)
        {
            switch (op)
            {
                case '+': return val1+val2;
                case '-': return val1-val2;
                case '*': return val1*val2;
                case '/': return val1/val2;
                default:
                    throw new System.ArgumentException("Unknown operation!", op.ToString());
            }
        }
    }
}