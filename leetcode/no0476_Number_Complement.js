/*
476. Number Complement

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
    var binaryString = (num >>> 0).toString(2);
    console.log(">> binaryString: ", binaryString);
    var result = "";
    for(var i =0; i< binaryString.length; i++) {
        if(binaryString[i] === "1") {
            result = result + "0";
			console.log(">> result: ", binaryString[i], result);
        } else if(binaryString[i] === "0") {
            result = result + "1" ;
			console.log(">> result: ", binaryString[i], result);
        }
    }
    
    return parseInt(result, 2);
};