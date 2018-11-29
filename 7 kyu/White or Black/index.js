/*

    In this kata you have a chess board 8x8. Create a function
    function mineColor(line, number)
    that calculate the color of the field and returns it(white / black)

    Examples:
        mineColor(a, 8) ==> 'white'
        mineColor(b, 1) ==> 'white'
        mineColor(a, 1) ==> 'black'


    Kata Link:
        https://www.codewars.com/kata/563319974612f4fa3f0000e0

    Discuss Link:
        https://www.codewars.com/kata/white-or-black/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/white-or-black/solutions/javascript
*/

function mineColor(line, number){
    var line=[[line]];
                            
    if(line[0]== "a" || line[0]=="c" || line[0]=="e" || line[0]=="g" ){
                                
        for(var i=0; i<8; i++){
            if(i %2==0){
                line[0].push([i, "black"]);
            }
            else{
                line[0].push([i, "white"]);
            }
        }	
    }	

    if(line[0]== "b" || line[0]=="d" || line[0]=="f" || line[0]=="h" ){
                                
        for(var i=0; i<8; i++){
            if(i %2==0){
                line[0].push([i, "white"]);
            }
            else{
                line[0].push([i, "black"]);
            }
        }	
    }
                            
    return line[0][number][1];		
}


module.exports = mineColor;