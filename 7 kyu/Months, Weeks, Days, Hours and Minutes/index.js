/*
Description:
    Given a number of minutes, translate it into a readible human timestamp.

    For example: 100 minutes equals "1 hour 40 minutes" 
    And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

    Given that each month has 28 days.
    The largest amount of minutes you'll have to test for is under a year so you'll have to 
    translate it to Months, Weeks, Days, Hours and Minutes.

    Kata Link:
        https://www.codewars.com/kata/5b2a10fe9e40b9b43d00008

    Discuss Link:
        https://www.codewars.com/kata/months-weeks-days-hours-and-minutes/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/months-weeks-days-hours-and-minutes/solutions/javascript
*/

function displayValue(value) {
    let str="",
    timeObj = {
        m:0,
        w:0,
        d:0,
        h:0,
        min:0
    },
    timeUnits = {
        m:"month",
        w:"week",
        d:"day",
        h:"hour",
        min:"minute"
    }

    while( value>0 ){
        if( value>=40320){
            value-=40320;
            timeObj.m++;
        }
        else if (value>=10080 && value<40320){
            value-=10080;
            timeObj.w++;
        }
        else if (value>=1440 && value<10080){
            value-=1440;
            timeObj.d++;
        }
        else if (value>=60 && value<1440){
            value-=60;
            timeObj.h++;
        }
        else if(value>=1 && value<60){
            timeObj.min+=value; 
            value-=value;
        }
    }
    Object.values(timeObj).forEach((n,i)=>{if(n) str += n>1 ? `${n} ${Object.values(timeUnits)[i]}s `: `${n} ${Object.values(timeUnits)[i]} `});
    return str.trim();
}

module.exports = displayValue;