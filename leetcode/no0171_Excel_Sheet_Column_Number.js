
/*
171. Excel Sheet Column Number

Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    // A ~ Z ==> 26 characters
    var indexTable = [null, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var getValueByChar = function(char) {
        return indexTable.indexOf(char);
    }

    // Check input string.

    var chars = s.split("");
    var indexPos = 0;
    var sum = 0;
    for(var i=(chars.length-1); i>-1; i--) {
        sum += getValueByChar(chars[i])*(Math.pow(26, indexPos));
        indexPos+=1;
    }

    console.log(sum);
    return sum;
};