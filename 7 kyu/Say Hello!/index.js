/*

Description:
    Write a function to greet a person. Function will take name as input and greet the 
    person by saying hello. Return null/nil if input is empty string or null/nil.

Example:
    greet("Niks") === "hello Niks!";
    greet("") === null; // Return null if input is empty string
    greet(null) === null; // Return null if input is null

    
    Kata Link:
        https://www.codewars.com/kata/55955a48a4e9c1a77500005a

    Discuss Link:
        https://www.codewars.com/kata/say-hello/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/say-hello/solutions/javascript
*/

function greet(x) {
    return	x==null || x=="" ?  null : 'hello '+ x +"!";
}

module.exports = greet;