/*
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
Credits:
Special thanks to @elmirap for adding this problem and creating all test cases.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    var DBG = false;
    
    if(num === 0) {
        return true;
    } else if(num === 1) {
        return true;
    } 
    
    var startNum = 2;
    var endNum = num;
    for(var i = 2; i< num; i++) {
        if( num > Math.pow(10,i)*Math.pow(10,i)) {
            startNum = Math.pow(10,i);
            endNum = Math.pow(10,i+1);
            if(DBG)console.log("startNum-->", startNum);
        } else {
            if(DBG)console.log("finally startNum-->", startNum);
            break;
        }
    }
    
    for(var i = startNum; i< endNum; i++) {
        if(DBG)console.log("try ", i, " X ", i, " = ", i*i);
        if(num === i*i) {
            if(DBG)console.log("Got it");
            return true;
        }
    }
    
    if(DBG)console.log("Not good");
    return false;
};