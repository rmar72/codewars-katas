/*
Description:
    You will be given an array of objects representing data about developers who have signed up to
    attend the next coding meetup that you are organising.
    Your task is to return an object which includes the count of food options selected by 
    the developers on the meetup sign-up form..

    For example, given the following input array:

    var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
        meal: 'vegetarian' },
    ];
    your function should return the following object (the order of properties does not matter):

    { vegetarian: 2, standard: 1, vegan: 1 }

    Notes:
        The order of the meals count in the object does not matter.
        The count value should be a valid number.
        The input array will always be valid and formatted as in the example above.
        there are 5 possible meal options and the strings representing the selected meal option
        will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'. 


    Kata Link:
        https://www.codewars.com/kata/583952fbc23341c7180002fd

    Discuss Link:
        https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food/solutions/javascript
*/

function orderFood(list) {
    var arr=[], answer={}, standard=0, vegetarian=0, vegan=0, diabetic=0, gluten_intolerant=0;
    
    for( var i=0; i < list.length; i++ ){
    
        if(list[i].meal == 'standard'){
            standard++;
            arr.push( [list[i].meal] );
            answer[ arr[i][0] ] = standard;
        }
        if(list[i].meal == 'vegetarian'){
            vegetarian++;
            arr.push( [list[i].meal] );
            answer[ arr[i][0] ] = vegetarian ;
        }
        if(list[i].meal == 'vegan'){
            vegan++;
            arr.push( [list[i].meal] );
            answer[ arr[i][0] ] = vegan ;
        }
        if(list[i].meal == 'diabetic'){
            diabetic++;
            arr.push( [list[i].meal] );
            answer[ arr[i][0] ] = diabetic;
        }
        if(list[i].meal == 'gluten-intolerant'){
            gluten_intolerant++;
            arr.push( [list[i].meal ] );
            answer[ arr[i][0] ] = gluten_intolerant;
        }
    }
    return answer;
}

module.exports = orderFood;