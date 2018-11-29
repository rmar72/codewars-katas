/*
Description:
    Given 2 string parameters, show a concatenation of:
        the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
        a separator in between both strings: @@@
        the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
        Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier 
        in other languages.

        Keep in mind that this kata was initially designed for Shell, I'm aware it may be
        easier in other languages.

    Kata Link:
        https://www.codewars.com/kata/58305403aeb69a460b00019a

    Discuss Link:
        https://www.codewars.com/kata/string-reversing-changing-case-etc/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/string-reversing-changing-case-etc/solutions/javascript
*/

function reverseAndMirror(s1,s2) {
	var str1=rev(s1), str2=rev(s2), str3="";
			
	function rev(string){
		var revString="", mirroredString="";
		for(var i=string.length-1; i>=0; i--){
			revString += string[i];
		}
				
		for(var i=0; i<revString.length; i++){
			revString[i] != revString[i].toUpperCase() ? mirroredString += revString[i].toUpperCase() : 
				mirroredString += revString[i].toLowerCase();
		}
		return mirroredString;
	}

	for(var i=str1.length-1; i>=0; i--){
		str3 += str1[i];
	}
	return str2+"@@@"+str1+str3;
}

module.exports = reverseAndMirror;