/*
    Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the 
    height of the cuboid. Write a function to help Bob with this calculation.
    Ruby: def get_volume_of_cuboid(length, width, height) Bash: bash run_shell length width height


    Kata Link:
        https://www.codewars.com/kata/58261acb22be6e2ed800003a

    Discuss Link:
        https://www.codewars.com/kata/volume-of-a-cuboid/discuss/javascript

    Solutions Link:
        https://www.codewars.com/kata/volume-of-a-cuboid/solutions/javascript
*/

var Kata;

Kata = (function() {
    function Kata() {}

    Kata.getVolumeOfCuboid = function(length, width, height) {
        return length*width*height;
    };

    return Kata;
})();

module.exports = Kata;