/*
Description:
    Bob and Charles are meeting for their weekly jogging tour. They both start at the same 
    spot called "Start" and they each run a different lap, which may (or may not) vary in length.
    Since they know each other for a long time already, they both run at the exact same speed.

    Illustration
        Example where Charles (dashed line) runs a shorter lap than Bob:

    Task
        Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps 
        for Bob and Charles, finds the number of laps that each jogger has to complete before 
        they meet each other again, at the same time, at the start.

        The function takes two arguments:

        The length of Bob's lap (larger than 0)
        The length of Charles' lap (larger than 0)

        The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

        The first number is the number of laps that Bob has to run
        The second number is the number of laps that Charles has to run

    Examples:
        nbrOfLaps(5, 3); // returns [3, 5]
        nbrOfLaps(4, 6); // returns [3, 2]


    Kata Link:
        https://www.codewars.com/kata/5274d9d3ebc3030802000165

    Discuss Link:
        https://www.codewars.com/kata/two-joggers/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/two-joggers/solutions/javascript
*/

var nbrOfLaps = function (x, y) {
    let w, z;
    for(var i = x; i < (x*10000); i+=x)
        if(i % y ==0){
            w = i;
            break;
        }
    
    for(var i = y; i < (y*10000); i+=y)
        if(i % x ==0){
            z = i;
            break;
        }
    
    return [(w/x),(z/y)];
}

module.exports = nbrOfLaps;